"use client";
import React from "react";

export function FloatingNav() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // This creates the smooth gliding animation
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-full overflow-x-auto mx-auto">
      <div className="flex items-center gap-4 px-6 py-3 bg-[#2d2d2d]/90 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl text-white/80 text-sm font-medium">
        <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="text-xs md:text-sm whitespace-nowrap hover:text-cyan-400 transition-colors">Work</a>
        <span className="text-white/20">|</span>
        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-xs md:text-sm whitespace-nowrap hover:text-violet-400 transition-colors">Projects</a>
        <span className="text-white/20">|</span>
        <a href="#opensource" onClick={(e) => scrollToSection(e, 'opensource')} className="text-xs md:text-sm whitespace-nowrap hover:text-fuchsia-400 transition-colors">Open Source</a>
        <span className="text-white/20">|</span>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-xs md:text-sm whitespace-nowrap hover:text-amber-400 transition-colors">Contact</a>
      </div>
    </div>
  );
}
