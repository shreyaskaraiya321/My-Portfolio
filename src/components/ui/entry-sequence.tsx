"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EntrySequence({ onComplete }: { onComplete: () => void }) {
  const [name, setName] = useState("");
  const [step, setStep] = useState<"input" | "greeting" | "done">("input");
  const [terminalLines, setTerminalLines] = useState(0);

  // Mathematically generate a unique 5x5 Identicon based on the user's name
  const identicon = useMemo(() => {
    if (!name) return null;
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colors = ['#31b497', '#e9b50b', '#f97316', '#101010'];
    const color = colors[Math.abs(hash) % colors.length];
    
    const grid = [];
    for (let r = 0; r < 5; r++) {
      const row = [];
      for (let c = 0; c < 3; c++) {
        row.push((Math.abs(hash) >> (r * 3 + c)) & 1);
      }
      grid.push([...row, row[1], row[0]]); // Mirror the first two columns to make it symmetrical 5x5
    }
    return { color, grid };
  }, [name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length > 0) {
      setStep("greeting");
      
      // Wait 6.5 seconds for the counter to hit '6', then fade out
      setTimeout(() => {
        setStep("done");
        setTimeout(() => onComplete(), 1200); 
      }, 6500); 
    }
  };

  // Sync the Terminal text with the 6-second load time
  useEffect(() => {
    if (step === "greeting") {
      setTimeout(() => setTerminalLines(1), 1000);
      setTimeout(() => setTerminalLines(2), 2500);
      setTimeout(() => setTerminalLines(3), 4000);
      setTimeout(() => setTerminalLines(4), 5200);
    }
  }, [step]);

  return (
    <AnimatePresence>
      {step !== "done" && (
        <motion.div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#EBEAE4] text-[#101010]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            
            {/* Step 1: 3D Neo-Brutalist Input */}
            {step === "input" && (
              <motion.div 
                key="input" 
                className="relative w-full h-full flex items-center justify-center overflow-hidden"
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
              >
                {/* Subtle Blueprint Dot Grid */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "30px 30px" }} 
                />

                {/* Top Scrolling Marquee Tape */}
                <div className="absolute top-0 left-0 w-full h-10 bg-[#000] border-b-4 border-[#000] overflow-hidden flex items-center z-10 shadow-[0_5px_0_0_rgba(0,0,0,0.2)]">
                  <div className="whitespace-nowrap animate-marquee font-mono text-xs md:text-sm font-bold text-[#e9b50b] tracking-widest">
                     UI ENGINEERING • AI AGENTS • FULL-STACK DEVELOPMENT • SYSTEM ARCHITECTURE • NEXT.JS • MONGODB • UI ENGINEERING • AI AGENTS • FULL-STACK DEVELOPMENT • SYSTEM ARCHITECTURE • NEXT.JS • MONGODB • UI ENGINEERING • AI AGENTS • FULL-STACK DEVELOPMENT • SYSTEM ARCHITECTURE • NEXT.JS • MONGODB • 
                  </div>
                </div>

                {/* Corner Terminal Specs */}
                <div className="absolute bottom-6 left-6 font-mono text-[10px] md:text-xs font-bold text-black/40 leading-relaxed z-10 pointer-events-none hidden sm:block">
                  <p>SYS.INIT // 2026.10.04</p>
                  <p>LOC: 17.3850° N, 78.4867° E [HYD]</p>
                  <p>STATUS: AWAITING_VISITOR_INPUT</p>
                </div>
                <div className="absolute top-16 right-6 font-mono text-[10px] md:text-xs font-bold text-black/40 text-right z-10 pointer-events-none hidden sm:block">
                  <p>SHREYAS_KARAIYA_PORTFOLIO</p>
                  <p>BUILD_V2.0</p>
                </div>

                <form onSubmit={handleSubmit} className="entry-styled-wrapper relative z-20">
                  <div className="input__container">
                    <div className="shadow__input" />
                    <button type="submit" className="input__button__shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="20px" height="20px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </button>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input__search" 
                      placeholder="Enter your name" 
                      autoFocus
                      required
                    />
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 2: Identicon, Terminal & Counter */}
            {step === "greeting" && (
              <motion.div 
                key="greeting" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center w-full max-w-3xl px-4"
              >
                
                {/* Identity Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-12">
                  {/* Procedural Identicon */}
                  {identicon && (
                    <div className="flex flex-col gap-[2px] p-2 bg-white border-4 border-black shadow-[6px_6px_0_0_#000] shrink-0">
                      {identicon.grid.map((row, i) => (
                        <div key={i} className="flex gap-[2px]">
                          {row.map((active, j) => (
                            <motion.div 
                              key={j}
                              initial={{ scale: 0 }}
                              animate={{ scale: active ? 1 : 0 }}
                              transition={{ delay: (i * 5 + j) * 0.03, type: "spring", stiffness: 300 }}
                              className="w-5 h-5 md:w-6 md:h-6"
                              style={{ backgroundColor: active ? identicon.color : 'transparent' }}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Greeting Text */}
                  <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-2 break-words">
                      Hi, <span className="text-[#31b497]">{name}</span>.
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-[#101010]/60">
                      Welcome to the portfolio of Shreyas.
                    </p>
                  </div>
                </div>

                {/* Dashboard: Terminal + Counter */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full mt-4">
                  
                  {/* AI Agent Terminal */}
                  <div className="flex-1 w-full max-w-lg bg-black border-4 border-black shadow-[8px_8px_0_0_#f97316] p-5 text-left font-mono text-[11px] md:text-xs text-[#31b497] h-[160px] flex flex-col justify-start relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#31b497]/20" />
                    <p className="mb-2">{'>'} Authenticating visitor profile: <span className="text-[#e9b50b] font-bold">{name}</span>...</p>
                    {terminalLines >= 1 && <p className="mb-2">{'>'} Establishing secure connection... <span className="text-white font-bold">SUCCESS</span></p>}
                    {terminalLines >= 2 && <p className="mb-2">{'>'} Waking UI Agent... <span className="text-white font-bold">LOADED</span></p>}
                    {terminalLines >= 3 && <p className="mb-2">{'>'} Syncing neural pathways...</p>}
                    {terminalLines >= 4 && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-[#e9b50b] font-bold">{'>'} Workspace ready. Enter.</motion.p>}
                    <span className="animate-pulse inline-block w-2 h-4 bg-[#31b497] mt-1" />
                  </div>

                  {/* Animated CSS Counter */}
                  <div id="timer" className="scale-75 md:scale-90 flex-shrink-0">
                    <div id="div1" /><div id="div2" /><div id="div3" /><div id="div4" /><div id="div5" />
                    <div id="div6" /><div id="div7" /><div id="div8" /><div id="div9" /><div id="div10" />
                    <div id="div11" /><div id="div12" /><div id="div13" /><div id="div14" /><div id="div15" />
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Injected CSS */}
          <style>{`
            .entry-styled-wrapper .input__container { position: relative; background: #f0f0f0; padding: 20px; display: flex; justify-content: flex-start; align-items: center; gap: 15px; border: 4px solid #000; max-width: 350px; transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1); transform-style: preserve-3d; transform: rotateX(10deg) rotateY(-10deg); perspective: 1000px; box-shadow: 15px 15px 0 -5px #f97316, 15px 15px 0 0 #000; }
            .entry-styled-wrapper .input__container:hover { transform: rotateX(5deg) rotateY(1deg) scale(1.05); box-shadow: 25px 25px 0 -5px #f97316, 25px 25px 0 0 #000; }
            .entry-styled-wrapper .shadow__input { content: ""; position: absolute; width: 100%; height: 100%; left: 0; bottom: 0; z-index: -1; transform: translateZ(-50px); background: linear-gradient(45deg, rgba(249, 115, 22, 0.4) 0%, rgba(249, 115, 22, 0.1) 100%); filter: blur(20px); }
            .entry-styled-wrapper .input__button__shadow { cursor: pointer; border: 3px solid #000; background: #e9b50b; transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1); display: flex; justify-content: center; align-items: center; padding: 10px; transform: translateZ(20px); position: relative; z-index: 3; }
            .entry-styled-wrapper .input__button__shadow:hover { background: #e9b50b; transform: translateZ(10px) translateX(-5px) translateY(-5px); box-shadow: 5px 5px 0 0 #000; }
            .entry-styled-wrapper .input__button__shadow svg { fill: #000; width: 25px; height: 25px; }
            .entry-styled-wrapper .input__search { width: 100%; outline: none; border: 3px solid #000; padding: 15px; font-size: 18px; background: #fff; color: #000; transform: translateZ(10px); transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1); position: relative; z-index: 3; font-family: inherit; letter-spacing: -0.5px; }
            .entry-styled-wrapper .input__search::placeholder { color: #666; font-weight: bold; text-transform: uppercase; }
            .entry-styled-wrapper .input__search:hover, .entry-styled-wrapper .input__search:focus { background: #f0f0f0; transform: translateZ(20px) translateX(-5px) translateY(-5px); box-shadow: 5px 5px 0 0 #000; }
            .entry-styled-wrapper .input__container::before { content: "VISITOR"; position: absolute; top: -15px; left: 20px; background: #31b497; color: #000; font-weight: bold; padding: 5px 10px; font-size: 14px; transform: translateZ(50px); z-index: 4; border: 2px solid #000; }
            
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-marquee { display: inline-block; animation: marquee 20s linear infinite; }

            #timer { display: grid; grid-template-columns: repeat(3, 25px); grid-template-rows: repeat(5, 25px); gap: 10px; grid-template-areas: "div1 div2 div3" "div4 div5 div6" "div7 div8 div9" "div10 div11 div12" "div13 div14 div15"; }
            #timer > div { background-color: #31b497; border-radius: 5px; }
            #div1 { grid-area: div1; animation: div1 10s both infinite; } #div2 { grid-area: div2; animation: div2 10s both infinite; } #div3 { grid-area: div3; } #div4 { grid-area: div4; animation: div4 10s both infinite; } #div5 { grid-area: div5; display: none; } #div6 { grid-area: div6; animation: div6 10s both infinite; } #div7 { grid-area: div7; animation: div7 10s both infinite; } #div8 { grid-area: div8; animation: div8 10s both infinite; } #div9 { grid-area: div9; } #div10 { grid-area: div10; animation: div10 10s both infinite; } #div11 { grid-area: div11; display: none; } #div12 { grid-area: div12; animation: div12 10s both infinite; } #div13 { grid-area: div13; animation: div13 10s both infinite; } #div14 { grid-area: div14; animation: div14 10s both infinite; } #div15 { grid-area: div15; }
            @keyframes div1 { 0%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% { transform: translateX(0); } 10% { transform: translateX(70px); } }
            @keyframes div2 { 0%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% { transform: translateX(0); } 10%, 40% { transform: translateX(35px); } }
            @keyframes div4 { 0%, 40%, 50%, 60%, 80%, 90%, 100% { transform: translateX(0); } 10%, 20%, 30%, 70% { transform: translateX(70px); } }
            @keyframes div6 { 0%, 10%, 20%, 30%, 40%, 70%, 80%, 90%, 100% { transform: translateX(0); } 50%, 60% { transform: translateX(-70px); } }
            @keyframes div7 { 0%, 20%, 30%, 40%, 50%, 60%, 80%, 90%, 100% { transform: translateX(0); } 10%, 70% { transform: translateX(70px); } }
            @keyframes div8 { 0%, 10%, 70%, 100% { transform: translateX(35px); } 20%, 30%, 40%, 50%, 60%, 80%, 90% { transform: translateX(0); } }
            @keyframes div10 { 0%, 20%, 60%, 80%, 100% { transform: translateX(0); } 10%, 30%, 40%, 50%, 70%, 90% { transform: translateX(70px); } }
            @keyframes div12 { 0%, 10%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% { transform: translateX(0); } 20% { transform: translateX(-70px); } }
            @keyframes div13 { 0%, 20%, 30%, 50%, 60%, 80%, 90%, 100% { transform: translateX(0); } 10%, 40%, 70% { transform: translateX(70px); } }
            @keyframes div14 { 0%, 20%, 30%, 50%, 60%, 80%, 90%, 100% { transform: translateX(0); } 10%, 40%, 70% { transform: translateX(35px); } }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
