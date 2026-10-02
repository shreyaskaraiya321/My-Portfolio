"use client";
import React from "react";

export const ProfileAsciiArt = () => {
  return (
    <div className="w-full max-w-sm mx-auto aspect-square flex items-center justify-center overflow-hidden rounded-2xl">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover mix-blend-multiply opacity-85 pointer-events-none"
      >
        <source src="/images/ascii-art-21st.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
