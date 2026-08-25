"use client";

import { AsciiArt } from "./ascii-art"; 

export function ProfileAsciiArt() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <AsciiArt
        src="/profile.png"
        resolution={140} // Massively increased for smooth detail
        color="#101010"
        animationStyle="typewriter"
        inverted
        animateOnView={true} 
        className="mx-auto w-full max-w-2xl bg-transparent" // Removed the small box, let it breathe
      />
    </div>
  );
}
