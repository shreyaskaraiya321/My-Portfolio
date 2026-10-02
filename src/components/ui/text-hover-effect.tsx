"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  const lines = text.split('\n');

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 1400 300"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none cursor-crosshair w-full h-full"
      style={{ fontFamily: "var(--font-share-tech), monospace" }}
    >
      <defs>
        {/* Brand Theme Animated Gradient */}
        <linearGradient id="diaGradient" x1="0%" y1="0%" x2="200%" y2="0%">
          <stop offset="0%" stopColor="#31b497" />     {/* Theme Teal */}
          <stop offset="12.5%" stopColor="#0ea5e9" />  {/* Sky Blue transition */}
          <stop offset="25%" stopColor="#8b5cf6" />    {/* Theme Violet */}
          <stop offset="37.5%" stopColor="#0ea5e9" />  {/* Sky Blue transition */}
          <stop offset="50%" stopColor="#31b497" />    {/* Theme Teal (Loop Center) */}
          <stop offset="62.5%" stopColor="#0ea5e9" />
          <stop offset="75%" stopColor="#8b5cf6" />
          <stop offset="87.5%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#31b497" />
          <animate attributeName="x1" values="0%;-100%" dur="6s" repeatCount="indefinite" />
          <animate attributeName="x2" values="200%;100%" dur="6s" repeatCount="indefinite" />
        </linearGradient>

        {/* The Hover Flashlight Mask */}
        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* Layer 1: Dim Base Fill */}
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="90" fontWeight="bold">
        {lines.map((line, idx) => (
          <tspan 
            key={idx} 
            x="50%" 
            dy={idx === 0 ? "-0.6em" : "1.2em"}
            fill={idx === 1 ? "url(#diaGradient)" : "rgba(255,255,255,0.2)"}
            style={idx === 1 ? { opacity: 0.4 } : {}}
          >
            {line}
          </tspan>
        ))}
      </text>

      {/* Layer 2: Animated Drawing Outline */}
      <motion.text
        x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="90" fontWeight="bold"
        fill="transparent" strokeWidth="1.5"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        {lines.map((line, idx) => (
          <tspan 
            key={idx} 
            x="50%" 
            dy={idx === 0 ? "-0.6em" : "1.2em"}
            stroke={idx === 1 ? "url(#diaGradient)" : "rgba(255,255,255,0.8)"}
          >
            {line}
          </tspan>
        ))}
      </motion.text>

      {/* Layer 3: Hover Flashlight Reveal */}
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="90" fontWeight="bold" mask="url(#textMask)">
        {lines.map((line, idx) => (
          <tspan 
            key={idx} 
            x="50%" 
            dy={idx === 0 ? "-0.6em" : "1.2em"}
            fill={idx === 1 ? "url(#diaGradient)" : "#ffffff"}
          >
            {line}
          </tspan>
        ))}
      </text>
    </svg>
  );
};
