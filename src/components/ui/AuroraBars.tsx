"use client";

import * as React from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform, MotionValue } from "motion/react";

import { cn } from "@/lib/utils";

export interface AuroraBarsProps {
  /** @default 24 */
  barCount?: number;
  /** gradient color stops, bottom to top — @default ["#ff2d78", "#c04aff", "#4a6fff", "#0a1aff", "#00000000"] */
  colors?: string[];
  /** max bar height as fraction of container height — @default 0.92 */
  maxHeightRatio?: number;
  /** min bar height as fraction of container height — @default 0.18 */
  minHeightRatio?: number;
  /** undulation speed — @default 0.5 */
  speed?: number;
  /** @default 3 */
  gap?: number;
  /** px blur per bar, creates soft glow — @default 0 */
  blur?: number;
  /** @default "#000000" */
  background?: string;
  className?: string;
}

/** two sine waves per bar for organic movement */
function barHeight(
  index: number,
  total: number,
  time: number,
  minH: number,
  maxH: number,
): number {
  // Arch envelope: tallest in the centre, shorter on edges
  // arch envelope: tallest in centre, shorter on edges
  const norm = index / (total - 1);
  const arch = Math.sin(norm * Math.PI);

  const phase1 = (index / total) * Math.PI * 2;
  const phase2 = (index / total) * Math.PI * 5.3;

  const wave =
    0.5 +
    0.25 * Math.sin(time * 1.1 + phase1) +
    0.25 * Math.sin(time * 0.7 + phase2);

  const blended = arch * 0.65 + wave * 0.35;

  return minH + blended * (maxH - minH);
}

function AuroraBar({ 
  index, 
  total, 
  time, 
  minH, 
  maxH, 
  gradient, 
  blur, 
  gap 
}: { 
  index: number; 
  total: number; 
  time: MotionValue<number>; 
  minH: number; 
  maxH: number; 
  gradient: string; 
  blur: number; 
  gap: number; 
}) {
  const height = useTransform(time, (t: number) => {
    return `${barHeight(index, total, t, minH, maxH) * 100}%`;
  });

  return (
    <div
      className="flex-1"
      style={{
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        padding: `0 ${gap / 2}px`,
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height,
          background: gradient,
          borderRadius: "9999px 9999px 0 0",
          filter: `blur(${blur}px)`,
          opacity: 0.85,
        }}
      />
    </div>
  );
}

export function AuroraBars({
  barCount = 24,
  colors = ["#ffd6eb", "#ff9acb", "#ff5aa6", "#ff2d78", "#00000000"],
  maxHeightRatio = 0.92,
  minHeightRatio = 0.18,
  speed = 0.5,
  gap = 3,
  blur = 0,
  background = "#000000",
  className,
}: AuroraBarsProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const time = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    time.set(time.get() + (delta / 1000) * speed);
  });

  const gradientStop = colors
    .map((c, i) => `${c} ${Math.round((i / (colors.length - 1)) * 100)}%`)
    .join(", ");
  const gradient = `linear-gradient(to top, ${gradientStop})`;

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden", className)}
      style={{ background }}
    >
      <div className="absolute inset-0 flex items-end">
        {Array.from({ length: barCount }).map((_, i) => (
          <AuroraBar
            key={i}
            index={i}
            total={barCount}
            time={time}
            minH={minHeightRatio}
            maxH={maxHeightRatio}
            gradient={gradient}
            blur={blur}
            gap={gap}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 100%, transparent 40%, #000000cc 100%)",
        }}
      />
    </div>
  );
}
