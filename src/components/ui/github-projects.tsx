"use client";

import { ExternalLink } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const selectedProjects = [
  {
    id: "dev-assist",
    title: "Dev Assist AI",
    description: "An AI-powered developer assistant built during the NIAT hackathon to streamline building and shipping code.",
    url: "https://github.com/shreyaskaraiya321/NIAT-hackathon-build-to-ship",
    tags: ["AI", "Hackathon", "Developer Tools"],
    color: { bg: "bg-cyan-400/10", text: "text-cyan-600", hover: "group-hover:text-cyan-600" }
  },
  {
    id: "flash-card",
    title: "Flash Card AI",
    description: "An intelligent flashcard application leveraging AI to optimize active recall and spaced repetition for accelerated learning.",
    url: "https://github.com/shreyaskaraiya321/Flash-Card-AI",
    tags: ["AI", "Education", "Next.js"],
    color: { bg: "bg-violet-500/10", text: "text-violet-600", hover: "group-hover:text-violet-600" }
  },
  {
    id: "study-assistant",
    title: "AI Study Assistant",
    description: "A comprehensive AI-driven study companion designed to summarize notes, generate quizzes, and assist with complex topics.",
    url: "https://github.com/shreyaskaraiya321/Ai_study_assistant",
    tags: ["AI", "Python", "LLMs"],
    color: { bg: "bg-fuchsia-500/10", text: "text-fuchsia-600", hover: "group-hover:text-fuchsia-600" }
  },
  {
    id: "logistics",
    title: "AI Logistics Route Planner",
    description: "An advanced routing algorithm utilizing artificial intelligence to optimize logistics, reduce delivery times, and cut fuel costs.",
    url: "https://github.com/shreyaskaraiya321/AI-Powered-Logistics-Route-Planner",
    tags: ["AI", "Algorithms", "Optimization"],
    color: { bg: "bg-amber-500/10", text: "text-amber-600", hover: "group-hover:text-amber-600" }
  }
];

export function GithubProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {selectedProjects.map((repo) => (
        <div key={repo.id} className="group bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div className={`h-10 w-10 rounded-full ${repo.color.bg} flex items-center justify-center ${repo.color.text}`}>
              <Github className="w-5 h-5" />
            </div>
            <div className="flex gap-3 text-black/40">
              <a href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <h3 className={`text-xl font-bold text-[#101010] mb-2 ${repo.color.hover} transition-colors`}>
            {repo.title}
          </h3>
          
          <p className="text-[#101010]/70 text-sm leading-relaxed mb-6 flex-grow">
            {repo.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {repo.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-[#f4f4f4] text-[#101010]/80 text-xs font-mono rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
