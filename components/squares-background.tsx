import { useRef, useEffect, useState } from "react"

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal"
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
  className?: string
  initialBackgroundColor?: string
  rainbowOpacity?: number
  mousePosition?: { x: number; y: number } | null
}

interface RgbaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

// --- HSL to RGB Conversion Helper ---
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  let m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  return [r, g, b];
}
// --- End HSL to RGB Helper ---

// --- Color Interpolation Helper ---
function interpolateColor(color1: RgbaColor, color2: RgbaColor, factor: number): RgbaColor {
  const r = Math.round(color1.r + (color2.r - color1.r) * factor);
  const g = Math.round(color1.g + (color2.g - color1.g) * factor);
  const b = Math.round(color1.b + (color2.b - color1.b) * factor);
  const a = color1.a + (color2.a - color1.a) * factor; // Alpha interpolation
  return { r, g, b, a };
}

export function Squares({
  direction = "right",
  speed = 1,
  borderColor = "#333",
  squareSize = 40,
  hoverFillColor = "#222",
  className,
  initialBackgroundColor = "#060606",
  rainbowOpacity = 0.1,
  mousePosition,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>(0)
  const numSquaresX = useRef<number>(0)
  const numSquaresY = useRef<number>(0)
  const gridOffset = useRef({ x: 0, y: 0 })
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.style.background = initialBackgroundColor

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const drawGrid = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize
      const mouse = mousePosition

      ctx.lineWidth = 0.5

      // --- Configuration ---
      const baseAlpha = rainbowOpacity ?? 0.1; // Base alpha for the background fill
      const maxDist = Math.min(canvas.width, canvas.height) * 0.2; // Interaction radius for junctions
      const baseLightness = 50; // Base lightness for junction effect
      const maxLightnessIncrease = 40; // Make effect brighter
      const maxHueShift = 20;
      const maxJunctionAlpha = 0.9; // Max alpha for the junction effect
      const baseBorderColor = borderColor; // Store base color string
      const baseBorderRgba: RgbaColor = { r: 51, g: 51, b: 51, a: 1 }; // Approx #333, assuming baseBorderColor is '#333'
      const segmentLength = 2; // Draw line in smaller chunks for smoothness
      // --- End Configuration ---

      // 1. Optional: Draw faint background fill
      if (baseAlpha > 0) {
        for (let i = 0; i < numSquaresX.current; i++) {
          for (let j = 0; j < numSquaresY.current; j++) {
            const squareX = i * squareSize - (gridOffset.current.x % squareSize);
            const squareY = j * squareSize - (gridOffset.current.y % squareSize);
            const hue = (time * 5 + i * 5 + j * 5) % 360;
            ctx.fillStyle = `hsla(${hue}, 70%, ${baseLightness - 15}%, ${baseAlpha * 0.4})`; // Even dimmer
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }
        }
      }

      // 2. Calculate Junction Influence
      const junctionEffects = new Map<string, { hue: number; lightness: number; alpha: number }>();
      if (mouse) {
          for (let i = 0; i <= numSquaresX.current; i++) {
            for (let j = 0; j <= numSquaresY.current; j++) {
              const junctionX = i * squareSize - (gridOffset.current.x % squareSize);
              const junctionY = j * squareSize - (gridOffset.current.y % squareSize);

              const dx = junctionX - mouse.x;
              const dy = junctionY - mouse.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < maxDist) {
                const rawProximity = 1 - dist / maxDist;
                const easedProximity = 1 - Math.pow(1 - rawProximity, 3); // Cubic ease-out

                let hue = (time * 10 + i * 7 + j * 7) % 360;
                const lightness = baseLightness + easedProximity * maxLightnessIncrease;
                const alpha = easedProximity * maxJunctionAlpha;
                const hueOffset = easedProximity * maxHueShift;
                hue = (hue + hueOffset) % 360;

                junctionEffects.set(`${i},${j}`, { hue, lightness, alpha });
              }
            }
          }
      }

      // Helper to get RGBA color object for a junction effect
      const getJunctionRgbaObject = (effect: { hue: number; lightness: number; alpha: number } | undefined): RgbaColor => {
          if (!effect) return baseBorderRgba;
          const clampedAlpha = Math.max(0.001, effect.alpha);
          const [r, g, b] = hslToRgb(effect.hue, 95, effect.lightness);
          return { r, g, b, a: clampedAlpha };
      };

      // Helper to format RGBA object to string
      const rgbaToString = (color: RgbaColor): string => {
          return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
      }

      // 3. Draw Grid Lines with Manual Gradient Simulation

      // Horizontal Lines
      for (let j = 0; j <= numSquaresY.current; j++) {
          for (let i = 0; i < numSquaresX.current; i++) {
              const junctionX1 = i * squareSize - (gridOffset.current.x % squareSize);
              const junctionY = j * squareSize - (gridOffset.current.y % squareSize);
              const junctionX2 = (i + 1) * squareSize - (gridOffset.current.x % squareSize);

              const effect1 = junctionEffects.get(`${i},${j}`);
              const effect2 = junctionEffects.get(`${i + 1},${j}`);
              const color1 = getJunctionRgbaObject(effect1);
              const color2 = getJunctionRgbaObject(effect2);

              // Check if both ends are effectively the base color
              const isBase = !effect1 && !effect2;

              if (isBase) {
                  // Draw normally if no effect
                  ctx.strokeStyle = baseBorderColor;
                  ctx.beginPath();
                  ctx.moveTo(junctionX1, junctionY);
                  ctx.lineTo(junctionX2, junctionY);
                  ctx.stroke();
              } else {
                  // Simulate gradient with segments
                  const numSegments = Math.max(1, Math.floor(squareSize / segmentLength));
                  for (let k = 0; k < numSegments; k++) {
                      const t0 = k / numSegments;
                      const t1 = (k + 1) / numSegments;
                      const segX1 = junctionX1 + (junctionX2 - junctionX1) * t0;
                      const segX2 = junctionX1 + (junctionX2 - junctionX1) * t1;
                      // Use midpoint interpolation for segment color for better accuracy
                      const segColor = interpolateColor(color1, color2, (t0 + t1) / 2);

                      ctx.strokeStyle = rgbaToString(segColor);
                      ctx.beginPath();
                      ctx.moveTo(segX1, junctionY);
                      ctx.lineTo(segX2, junctionY);
                      ctx.stroke();
                  }
              }
          }
      }

      // Vertical Lines (apply same segmentation logic)
      for (let i = 0; i <= numSquaresX.current; i++) {
          for (let j = 0; j < numSquaresY.current; j++) {
              const junctionX = i * squareSize - (gridOffset.current.x % squareSize);
              const junctionY1 = j * squareSize - (gridOffset.current.y % squareSize);
              const junctionY2 = (j + 1) * squareSize - (gridOffset.current.y % squareSize);

              const effect1 = junctionEffects.get(`${i},${j}`);
              const effect2 = junctionEffects.get(`${i},${j + 1}`);
              const color1 = getJunctionRgbaObject(effect1);
              const color2 = getJunctionRgbaObject(effect2);

              const isBase = !effect1 && !effect2;

              if (isBase) {
                  ctx.strokeStyle = baseBorderColor;
                  ctx.beginPath();
                  ctx.moveTo(junctionX, junctionY1);
                  ctx.lineTo(junctionX, junctionY2);
                  ctx.stroke();
              } else {
                  const numSegments = Math.max(1, Math.floor(squareSize / segmentLength));
                  for (let k = 0; k < numSegments; k++) {
                      const t0 = k / numSegments;
                      const t1 = (k + 1) / numSegments;
                      const segY1 = junctionY1 + (junctionY2 - junctionY1) * t0;
                      const segY2 = junctionY1 + (junctionY2 - junctionY1) * t1;
                      const segColor = interpolateColor(color1, color2, (t0 + t1) / 2);

                      ctx.strokeStyle = rgbaToString(segColor);
                      ctx.beginPath();
                      ctx.moveTo(junctionX, segY1);
                      ctx.lineTo(junctionX, segY2);
                      ctx.stroke();
                  }
              }
          }
      }
    }

    const updateAnimation = () => {
      if (speed > 0) {
        timeRef.current += 0.01
        const effectiveSpeed = Math.max(speed, 0.1)

        switch (direction) {
          case "right":
            gridOffset.current.x =
              (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
            break
          case "left":
            gridOffset.current.x =
              (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize
            break
          case "up":
            gridOffset.current.y =
              (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize
            break
          case "down":
            gridOffset.current.y =
              (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
            break
          case "diagonal":
            gridOffset.current.x =
              (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
            gridOffset.current.y =
              (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
            break
        }
      } else {
        timeRef.current += 0.01
      }

      drawGrid(timeRef.current)
      requestRef.current = requestAnimationFrame(updateAnimation)
    }

    window.addEventListener("resize", resizeCanvas)

    resizeCanvas()
    requestRef.current = requestAnimationFrame(updateAnimation)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [direction, speed, borderColor, squareSize, initialBackgroundColor, rainbowOpacity, mousePosition])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full border-none block ${className}`}
    />
  )
}
