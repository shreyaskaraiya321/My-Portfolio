"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "dreamscape",
    title: "DreamScape Wallpapers",
    subtitle: "Digital Wallpaper Gallery",
    image: "/images/dreamscape.jpg",
    url: "https://dev-dream-scape-wallpapers.pantheonsite.io/",
  },
  {
    id: "squadlink",
    title: "SquadLink",
    subtitle: "Esports & Gaming Identity Platform",
    image: "/images/squadlink.jpg",
    url: "https://squadlink.in",
  },
  {
    id: "usafe",
    title: "U-Safe Solutions",
    subtitle: "Food Safety & Sanitation",
    image: "/images/usafe.png",
    url: "https://usafe-solutions.com",
  },
  {
    id: "flashmedia",
    title: "Flash Media",
    subtitle: "Independent Film Production",
    image: "/images/flashmedia.jpg",
    url: "https://flashmediaproduction.in",
  },
  {
    id: "flash-ai",
    title: "Flash AI",
    subtitle: "Free AI Flashcard Generator from PDF & Text",
    image: "/images/flashai.png", 
    url: "https://github.com/shreyaskaraiya321/Flash-Card-AI",
  }
];

export function ProjectShowcase() {
  // Default to the middle card being expanded on load
  const [hoveredIndex, setHoveredIndex] = useState<number>(1);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto h-[500px] md:h-[600px] gap-4 px-4 py-8">
      {projects.map((project, index) => {
        const isActive = hoveredIndex === index;
        
        return (
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            onMouseEnter={() => setHoveredIndex(index)}
            className="relative overflow-hidden rounded-2xl cursor-pointer group flex flex-col justify-end ring-1 ring-black/10 shadow-lg"
            animate={{
              flex: isActive ? 3 : 1,
            }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark gradient overlay for text readability */}
            <div className={cn(
              "absolute inset-0 transition-opacity duration-500",
              isActive 
                ? "bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100" 
                : "bg-black/50 group-hover:bg-black/30"
            )} />

            {/* Title overlay that appears on active */}
            <motion.div
              className="relative z-10 p-6 md:p-8 flex flex-col gap-2"
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: isActive ? 0.1 : 0 }}
            >
              <h3 className="text-2xl md:text-4xl font-bold text-white flex items-center gap-3">
                {project.title}
                <ArrowUpRight className="w-6 h-6 text-cyan-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
              <p className="text-white/80 font-medium text-sm md:text-base">{project.subtitle}</p>
            </motion.div>
            
            {/* Vertical title for when the card is shrunk */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-white font-bold tracking-widest uppercase origin-center -rotate-90 whitespace-nowrap opacity-50 text-xl">
                {project.title}
              </h3>
            </motion.div>
          </motion.a>
        );
      })}
    </div>
  );
}
