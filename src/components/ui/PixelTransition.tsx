"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface PixelTransitionProps {
  nextSectionBackground?: string;
  accentColors?: string[];
  pixelSize?: number;
  className?: string;
}

export function PixelScrollTransition({
  nextSectionBackground = "#050505", // Deep dark background for the projects section
  accentColors = ["#00f0ff", "#ff2800", "#7000ff", "#facc15"], // Cyan, Ferrari Red, Esports Violet, Yellow
  pixelSize = 35, // Slightly smaller pixels for a denser, more complex grid
  className,
}: PixelTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const updateGrid = () => {
      if (typeof window === "undefined") return;
      const cols = Math.ceil(window.innerWidth / pixelSize);
      const rows = Math.ceil(window.innerHeight / pixelSize);
      setGrid({ cols, rows });
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, [pixelSize]);

  useEffect(() => {
    if (!gridRef.current || grid.cols === 0) return;

    const pixels = Array.from(gridRef.current.children);

    const ctx = gsap.context(() => {
      // Start as tiny, invisible, rounded dots
      gsap.set(pixels, { 
        opacity: 0, 
        scale: 0.1, 
        borderRadius: "100%" 
      });

      gsap.to(pixels, {
        opacity: 1,
        scale: 1.05, // Slight overlap to ensure no gaps between pixels
        borderRadius: "0%", // Morph into sharp squares
        ease: "power2.inOut",
        stagger: {
          amount: 2.5, // Spreads the animation out longer across the grid
          from: "random",
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%", // Dramatically increases the scroll length
          scrub: 1.2,    // Adds smooth inertia to the scroll
          pin: true,     // Locks the screen in place while scrolling
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [grid]);

  const [pixelColors, setPixelColors] = useState<string[]>([]);

  useEffect(() => {
    if (grid.cols === 0) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPixelColors(
      Array.from({ length: grid.cols * grid.rows }).map(() => {
        const isAccent = Math.random() < 0.05; // 5% chance for a hyper-color pop
        if (isAccent) {
          return accentColors[Math.floor(Math.random() * accentColors.length)];
        }
        return nextSectionBackground;
      })
    );
  }, [grid.cols, grid.rows, nextSectionBackground, accentColors]);

  return (
    <section
      ref={containerRef}
      className={cn("relative h-screen w-full overflow-hidden bg-black", className)}
    >
      {/* Background Grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid w-full h-full z-10"
        style={{
          gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
          gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
        }}
      >
        {pixelColors.map((color, i) => {
          const isAccentColor = color !== nextSectionBackground;
          
          return (
            <div
              key={i}
              className="w-full h-full origin-center"
              style={{ 
                backgroundColor: color,
                // Add a subtle glow to the accent pixels
                boxShadow: isAccentColor ? `0 0 15px ${color}` : "none",
                opacity: 0 
              }}
            />
          )
        })}
      </div>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
        <div className="border border-white/10 bg-white/5 backdrop-blur-md px-8 py-6 rounded-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            System <span className="text-cyan-400">Booting...</span>
          </h2>
          <span className="block text-sm font-mono text-white/50 mt-4 uppercase tracking-widest">
            Scroll to initialize projects
          </span>
        </div>
      </div>
    </section>
  );
}
