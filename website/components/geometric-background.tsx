'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  color: string;
}

export const GeometricBackground = ({
  className,
  dotCount = 150,
  dotColor = 'rgba(71, 226, 19, 0.2)',
  dotRadius = 1,
  animationDuration = 6,
  staggerDelay = 0.03,
  mouseReactDistance = 120,
  mouseReactIntensity = 0.8,
  colorVariation = true,
}: {
  className?: string;
  dotCount?: number;
  dotColor?: string;
  dotRadius?: number;
  animationDuration?: number;
  staggerDelay?: number;
  mouseReactDistance?: number;
  mouseReactIntensity?: number;
  colorVariation?: boolean;
}) => {
  const [dots, setDots] = useState<Dot[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  // Parse base color for potential variations
  const getColorVariation = () => {
    if (!colorVariation) return dotColor;
    
    // Handle rgba format: rgba(r, g, b, a)
    const rgbaMatch = dotColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (rgbaMatch) {
      const [_, r, g, b, a] = rgbaMatch;
      const variation = 30; // Color variation range
      
      // Create slight variations in color
      const newR = Math.min(255, Math.max(0, parseInt(r) + (Math.random() * variation - variation/2)));
      const newG = Math.min(255, Math.max(0, parseInt(g) + (Math.random() * variation - variation/2)));
      const newB = Math.min(255, Math.max(0, parseInt(b) + (Math.random() * variation - variation/2)));
      const alpha = a ? parseFloat(a) : 1;
      
      return `rgba(${newR}, ${newG}, ${newB}, ${alpha})`;
    }
    
    return dotColor;
  };

  // Update dimensions state when container resizes
  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    resizeObserver.observe(containerRef.current);
    // Initial dimensions
    setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    return () => resizeObserver.disconnect();
  }, []);

  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setIsMouseInside(true);
        setMousePosition({ x, y });
      } else {
        setIsMouseInside(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate dot positions when dimensions change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const generatedDots = Array.from({ length: dotCount }).map((_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: dotRadius * (0.7 + Math.random() * 0.6), // Varied sizes
      baseOpacity: 0.1 + Math.random() * 0.3, // Base opacity varies slightly
      color: getColorVariation(),
    }));
    setDots(generatedDots);
  }, [dotCount, dimensions, dotRadius, colorVariation, dotColor]);

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10', className)}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g>
          {dots.map((dot) => {
            // Calculate distance from mouse
            const dx = mousePosition.x - dot.x;
            const dy = mousePosition.y - dot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Dynamic reactive effects
            let reactiveScale = 1;
            let reactiveOpacity = dot.baseOpacity;
            let translateX = 0;
            let translateY = 0;
            
            if (isMouseInside && distance < mouseReactDistance) {
              // Proximity effect (closer = stronger)
              const proximity = 1 - distance / mouseReactDistance;
              
              // Push dots away from cursor
              const angle = Math.atan2(dy, dx);
              const pushStrength = mouseReactIntensity * 30 * proximity;
              translateX = -Math.cos(angle) * pushStrength;
              translateY = -Math.sin(angle) * pushStrength;
              
              // Dots get larger and more opaque near cursor
              reactiveScale = 1 + (mouseReactIntensity * proximity * 1.5);
              reactiveOpacity = dot.baseOpacity + (proximity * 0.6 * mouseReactIntensity);
            }
            
            return (
              <motion.circle
                key={dot.id}
                cx={dot.x}
                cy={dot.y}
                r={dot.size}
                fill={dot.color}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: reactiveOpacity,
                  scale: reactiveScale,
                  x: translateX,
                  y: translateY,
                }}
                transition={{
                  opacity: {
                    duration: 0.2,
                  },
                  scale: {
                    duration: 0.3,
                    ease: "easeOut"
                  },
                  x: {
                    duration: 0.5,
                    ease: "easeOut"
                  },
                  y: {
                    duration: 0.5,
                    ease: "easeOut"
                  },
                }}
                style={{ 
                  filter: isMouseInside && distance < mouseReactDistance / 2 ? 'url(#dotGlow)' : 'none',
                  willChange: 'opacity, transform',
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}; 