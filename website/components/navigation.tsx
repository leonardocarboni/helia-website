"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { GlowEffect } from "@/components/glow-effect";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/contatti",
      label: "Contatti",
      active: pathname === "/contatti",
    },
  ];

  const navBackground = "bg-black/70 backdrop-blur-md border-white/10";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${navBackground}`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo_white.svg"
            alt="Laif Logo"
            height={100}
            width={100}
            className=""
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between flex-1 pl-6">
          <div className="flex gap-6 md:gap-10">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  route.active ? "text-white" : "text-gray-300"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <div className="relative group">
            <Button
              asChild
              className="relative z-10 border border-transparent hover:border-purple-500/70 transition-colors duration-300"
            >
              <Link href="/contatti">Richiedi Demo</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-black/95 border-white/10 text-white backdrop-blur-md"
            >
              <VisuallyHidden>
                <DialogTitle>Mobile Navigation Menu</DialogTitle>
              </VisuallyHidden>
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-white",
                      route.active ? "text-white" : "text-gray-300"
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="relative group mt-4">
                  <Button
                    asChild
                    className="relative z-10 w-full border border-transparent hover:border-purple-500/70 transition-colors duration-300"
                  >
                    <Link href="/contatti" onClick={() => setIsOpen(false)}>
                      Richiedi Demo
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
