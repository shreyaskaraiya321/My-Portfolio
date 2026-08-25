"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Upgraded character map for smoother gradients on faces
const ASCII_CHARS = " .,:;i1tfLCG08@";

export interface AsciiArtProps {
  src: string;
  resolution?: number; 
  color?: string;
  inverted?: boolean;
  animationStyle?: "typewriter" | "none";
  animateOnView?: boolean;
  className?: string;
}

export function AsciiArt({
  src,
  resolution = 120,
  color = "currentColor",
  inverted = false,
  animationStyle = "none",
  animateOnView = true,
  className,
}: AsciiArtProps) {
  const [ascii, setAscii] = useState<string>("");
  const [displayedAscii, setDisplayedAscii] = useState<string>("");
  const [isVisible, setIsVisible] = useState(!animateOnView);
  const containerRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const width = resolution;
      // Adjusted aspect ratio multiplier to fix vertical stretching
      const aspectRatio = img.height / img.width;
      const height = Math.floor(width * aspectRatio * 0.45); 

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      let asciiStr = "";
      const chars = inverted ? ASCII_CHARS.split("").reverse().join("") : ASCII_CHARS;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const offset = (y * width + x) * 4;
          const r = data[offset];
          const g = data[offset + 1];
          const b = data[offset + 2];
          const a = data[offset + 3];

          if (a === 0) {
            asciiStr += " ";
            continue;
          }

          const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          const charIndex = Math.floor(brightness * (chars.length - 1));
          asciiStr += chars[charIndex];
        }
        asciiStr += "\n";
      }
      setAscii(asciiStr);
      if (animationStyle === "none") {
        setDisplayedAscii(asciiStr);
      }
    };
    img.src = src;
  }, [src, resolution, inverted, animationStyle]);

  useEffect(() => {
    if (!animateOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [animateOnView]);

  useEffect(() => {
    if (ascii && animationStyle === "typewriter" && isVisible) {
      let i = 0;
      const chunkSize = Math.max(1, Math.floor(ascii.length / 60)); 
      const interval = setInterval(() => {
        setDisplayedAscii(ascii.slice(0, i));
        i += chunkSize;
        if (i > ascii.length) {
          setDisplayedAscii(ascii);
          clearInterval(interval);
        }
      }, 15);
      return () => clearInterval(interval);
    } else if (ascii && isVisible) {
      const timeoutId = setTimeout(() => setDisplayedAscii(ascii), 0);
      return () => clearTimeout(timeoutId);
    }
  }, [ascii, animationStyle, isVisible]);

  return (
    <pre
      ref={containerRef}
      className={cn(
        "whitespace-pre font-mono text-[4px] sm:text-[5px] md:text-[6px] lg:text-[8px] leading-[0.75] tracking-tighter overflow-hidden text-center",
        className
      )}
      style={{ color }}
    >
      {displayedAscii}
    </pre>
  );
}
