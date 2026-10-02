"use client";
import React, { useEffect, useState } from "react";
import { motion, Transition } from "framer-motion";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

export function GlassToggle({ className }: { className?: string }) {
  // Theme state
  const [isDark, setIsDark] = useState(false);

  // Apply dark mode class to HTML root
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleToggle = () => setIsDark(!isDark);

  // Scaled dimensions for UI
  const width = 90;
  const height = 36;
  const orbSize = 36;
  const padding = 4;
  const travelDistance = width - orbSize - (padding * 2);

  const colors = {
    trackOn: "linear-gradient(90deg, rgba(20, 20, 60, 0.7), rgba(80, 40, 200, 0.5))", // Dark mode track
    trackOff: "linear-gradient(90deg, rgba(255, 220, 100, 0.1), rgba(255, 200, 0, 0.3))", // Light mode track
    orbOn: "radial-gradient(circle at 65% 35%, rgba(60,60,200,0.9) 0%, rgba(30,30,150,0.2) 50%, transparent 100%)",
    orbOff: "radial-gradient(circle at 35% 35%, rgba(255,220,0,0.8) 0%, rgba(255,180,0,0.2) 50%, transparent 100%)",
  };

  const transitionConfig: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 20,
  };

  return (
    <div
      onClick={handleToggle}
      className={cn("relative flex cursor-pointer items-center transition-transform duration-300 hover:scale-105", className)}
      style={{ width, height }}
    >
      {/* Background Capsule - The Track */}
      <div
        className="absolute inset-x-2 inset-y-1 rounded-full transition-all duration-700 ease-out border border-white/10"
        style={{
          background: isDark ? colors.trackOn : colors.trackOff,
          backdropFilter: "blur(12px)",
          boxShadow: `
            inset 1px 1px 2px rgba(255, 255, 255, 0.2),
            inset -1px -1px 2px rgba(0, 0, 0, 0.3),
            0 5px 15px -5px rgba(0,0,0,0.3)
          `,
        }}
      />

      {/* The Orb - Floating sphere */}
      <motion.div
        className="absolute rounded-full z-20 flex items-center justify-center"
        initial={false}
        animate={{ x: isDark ? (padding + travelDistance) : padding }}
        transition={transitionConfig}
        style={{ width: orbSize, height: orbSize, left: 0 }}
      >
        {/* ORB GLASS LAYER */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.0) 100%)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: `
              inset 2px 2px 5px rgba(255,255,255,0.3),
              inset -2px -2px 5px rgba(0,0,0,0.1),
              0 8px 15px rgba(0,0,0,0.2)
            `,
          }}
        />

        {/* ORB GLOW */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-80"
          animate={{ background: isDark ? colors.orbOn : colors.orbOff }}
        />

        {/* ORB REFLECTIONS */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute -left-1 -top-1 h-2/3 w-2/3 rounded-full bg-gradient-to-br from-white to-transparent opacity-40 blur-[2px]" />
          <div className="absolute right-2 bottom-2 h-1/3 w-1/3 rounded-full bg-gradient-to-tl from-white/20 to-transparent opacity-30 blur-[4px]" />
        </div>

        {/* ICON CONTAINER */}
        <motion.div
          className="relative z-10 text-white drop-shadow-md"
          animate={{
            scale: [1, 0.8, 1],
            rotate: isDark ? -10 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          {isDark ? (
            <Moon size={16} fill="white" className="drop-shadow-lg" />
          ) : (
            <Sun size={16} fill="white" className="drop-shadow-lg" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
