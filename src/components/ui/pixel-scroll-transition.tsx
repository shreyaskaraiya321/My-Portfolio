"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, ReactNode } from "react";

function makeRng(seed: number) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

export interface PixelScrollTransitionProps {
  from: ReactNode;
  to: ReactNode;
  pixelSize?: number;
  fromColor?: string;
  toColor?: string;
  accentColors?: string[];
  accentChance?: number;
  accentHold?: number;
  jitter?: number;
  direction?: "up" | "down" | "left" | "right";
  scrollLength?: number;
  seed?: number;
  className?: string;
  onProgress?: (progress: number) => void;
}

export function PixelScrollTransition({
  from,
  to,
  pixelSize = 28,
  fromColor = "#101010",
  toColor = "#e4e4e4",
  accentColors = ["#e0562d", "#31b497", "#f2b70d"],
  accentChance = 0.18,
  accentHold = 0.12,
  jitter = 0.55,
  direction = "up",
  scrollLength = 1,
  seed = 20260820,
  className = "",
  onProgress = undefined,
}: PixelScrollTransitionProps) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const gridRef = useRef<{ cols: number; rows: number; w: number; h: number; thr: Float32Array | null; accent: Int8Array | null }>({ cols: 0, rows: 0, w: 0, h: 0, thr: null, accent: null });
  const progressRef = useRef(0);
  const rafRef = useRef(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const buildGrid = useCallback(
    (w: number, h: number) => {
      const cols = Math.max(1, Math.ceil(w / pixelSize));
      const rows = Math.max(1, Math.ceil(h / pixelSize));
      const count = cols * rows;

      const thr = new Float32Array(count);
      const accent = new Int8Array(count).fill(-1);

      const rng = makeRng(seed);
      const denomC = Math.max(1, cols - 1);
      const denomR = Math.max(1, rows - 1);
      const chance = reduced ? 0 : accentChance;
      const hold = reduced ? 0 : accentHold;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;

          let f;
          if (direction === "down") f = r / denomR;
          else if (direction === "left") f = (cols - 1 - c) / denomC;
          else if (direction === "right") f = c / denomC;
          else f = (rows - 1 - r) / denomR;

          const noise = rng();
          thr[i] = (f * (1 - jitter) + noise * jitter) * (1 - hold);

          if (rng() < chance && accentColors.length > 0) {
            accent[i] = Math.floor(rng() * accentColors.length) % accentColors.length;
          }
        }
      }

      gridRef.current = { cols, rows, w, h, thr, accent };
    },
    [pixelSize, seed, jitter, direction, accentChance, accentHold, accentColors, reduced]
  );

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const grid = gridRef.current;
    if (!canvas || !grid.thr || !grid.accent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { cols, rows, w, h, thr, accent } = grid;
    const p = progressRef.current;
    const hold = reduced ? 0 : accentHold;
    const bleed = 0.6;

    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = toColor;
    for (let r = 0; r < rows; r++) {
      const y = r * pixelSize;
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        const t = thr[i];
        if (p < t) continue;
        if (accent[i] >= 0 && p < t + hold) continue;
        ctx.fillRect(c * pixelSize, y, pixelSize + bleed, pixelSize + bleed);
      }
    }

    if (hold > 0) {
      for (let k = 0; k < accentColors.length; k++) {
        ctx.fillStyle = accentColors[k];
        for (let r = 0; r < rows; r++) {
          const y = r * pixelSize;
          for (let c = 0; c < cols; c++) {
            const i = r * cols + c;
            if (accent[i] !== k) continue;
            const t = thr[i];
            if (p < t || p >= t + hold) continue;
            ctx.fillRect(c * pixelSize, y, pixelSize + bleed, pixelSize + bleed);
          }
        }
      }
    }
  }, [pixelSize, toColor, accentColors, accentHold, reduced]);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const panel = panelRef.current;
    if (!canvas || !panel) return;

    const w = panel.clientWidth;
    const h = panel.clientHeight;
    if (w === 0 || h === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.getContext("2d")?.setTransform(dpr, 0, 0, dpr, 0, 0);

    buildGrid(w, h);
    draw();
  }, [buildGrid, draw]);

  const update = useCallback(() => {
    rafRef.current = 0;
    const zone = zoneRef.current;
    if (!zone) return;

    const rect = zone.getBoundingClientRect();
    const travel = rect.height - window.innerHeight;
    const p = travel <= 0 ? (rect.top <= 0 ? 1 : 0) : clamp01(-rect.top / travel);

    if (p === progressRef.current) return;
    progressRef.current = p;
    draw();
    if (onProgress) onProgress(p);
  }, [draw, onProgress]);

  const schedule = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(update);
  }, [update]);

  useLayoutEffect(() => {
    resize();
    update();

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);

    let ro: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && panelRef.current) {
      ro = new ResizeObserver(resize);
      ro.observe(panelRef.current);
    }

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      if (ro) ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [resize, schedule, update]);

  return (
    <div className={className}>
      {from}

      <div
        ref={zoneRef}
        style={{ height: `calc(100dvh * ${1 + Math.max(0.1, scrollLength)})` }}
      >
        <div
          ref={panelRef}
          className="sticky top-0 h-screen w-full overflow-hidden"
          style={{ height: "100dvh", backgroundColor: fromColor }}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 block h-full w-full"
            aria-hidden="true"
          />
        </div>
      </div>

      {to}
    </div>
  );
}
