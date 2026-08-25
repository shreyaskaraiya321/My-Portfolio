"use client";

import * as React from "react";
import { motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";

export interface MotionSubtitleProps {
  text: string;
  direction?: "top" | "bottom";
  speed?: number;
  stagger?: number;
  className?: string;
}

export function MotionSubtitle({
  text,
  direction = "top",
  speed = 1,
  stagger = 0.018,
  className,
}: MotionSubtitleProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const yOffset = direction === "top" ? 20 : -20;
  
  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5 / Math.max(0.1, speed),
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={cn("inline-flex flex-wrap", className)}
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={charVariants}
          aria-hidden="true"
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
