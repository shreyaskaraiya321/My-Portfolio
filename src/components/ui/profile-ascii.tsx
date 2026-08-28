"use client";
import React, { useEffect, useRef } from "react";

export const ProfileAsciiArt = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    const img = new Image();

    // Define onload BEFORE setting src to prevent cache-miss bugs
    img.onload = () => {
      const cellSize = 9;
      const contrast = 158;
      
      const width = 400; 
      const height = (img.height / img.width) * width;
      canvas.width = width;
      canvas.height = height;

      const cols = Math.floor(width / cellSize);
      const rows = Math.floor(height / cellSize);

      const offCanvas = document.createElement("canvas");
      offCanvas.width = cols;
      offCanvas.height = rows;
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, cols, rows);
      const imgData = offCtx.getImageData(0, 0, cols, rows).data;
      const contrastFactor = (259 * (contrast + 255)) / (255 * (259 - contrast));

      const render = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#101010"; 

        const time = Date.now() * 0.002; 
        const pulseAnim = Math.sin(time) * 0.3; 

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const i = (y * cols + x) * 4;
            let r = imgData[i];
            let g = imgData[i + 1];
            let b = imgData[i + 2];
            const a = imgData[i + 3];

            if (a < 50) continue; 

            r = contrastFactor * (r - 128) + 128;
            g = contrastFactor * (g - 128) + 128;
            b = contrastFactor * (b - 128) + 128;

            let lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            lum = Math.max(0, Math.min(1, lum)); 
            lum = Math.max(0, Math.min(1, lum + pulseAnim));

            ctx.beginPath();
            const radius = (lum * cellSize) / 2 * 0.85; 
            if (radius > 0.5) {
              ctx.arc(
                x * cellSize + cellSize / 2,
                y * cellSize + cellSize / 2,
                radius,
                0,
                Math.PI * 2
              );
              ctx.fill();
            }
          }
        }
        animationFrameId = requestAnimationFrame(render);
      };
      render();
    };

    img.onerror = () => {
      console.error("Failed to load /images/profile.png. Check if the file exists in the public/images folder.");
    };

    // Set src AFTER onload
    img.src = "/images/profile.png";

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto aspect-square flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-auto opacity-70 mix-blend-multiply"
      />
    </div>
  );
};
