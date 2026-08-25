"use client";

import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";

export function DiaTextReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={cn(
        "inline-block text-transparent bg-clip-text",
        className
      )}
      style={{
        // Vibrant gradient that sweeps into a faded white base
        backgroundImage: "linear-gradient(to right, #22d3ee, #8b5cf6, #e879f9 50%, rgba(255,255,255,0.2) 50%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "100% 0", 
      }}
      animate={{
        backgroundPosition: "0% 0",
      }}
      transition={{ 
        duration: 2, 
        ease: [0.77, 0, 0.175, 1], 
        delay: 0.3 
      }}
    >
      {children}
    </motion.span>
  );
}
