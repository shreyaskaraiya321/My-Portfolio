"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EntrySequence({ onComplete }: { onComplete: () => void }) {
  const [name, setName] = useState("");
  const [step, setStep] = useState<"input" | "greeting" | "done">("input");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length > 0) {
      setStep("greeting");
      setTimeout(() => {
        setStep("done");
        setTimeout(() => onComplete(), 1200); // Increased from 800 to 1200 to match the fade out
      }, 6500); 
    }
  };

  return (
    <AnimatePresence>
      {step !== "done" && (
        <motion.div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#e4e4e4] text-[#101010]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            
            {/* Step 1: 3D Neo-Brutalist Input & Environment */}
            {step === "input" && (
              <motion.div 
                key="input" 
                className="relative w-full h-full flex items-center justify-center overflow-hidden"
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
              >
                {/* 1. Subtle Blueprint Dot Grid */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ 
                    backgroundImage: "radial-gradient(#000 2px, transparent 2px)", 
                    backgroundSize: "30px 30px" 
                  }} 
                />

                {/* 2. Top Scrolling Marquee Tape */}
                <div className="absolute top-0 left-0 w-full h-10 bg-[#000] border-b-4 border-[#000] overflow-hidden flex items-center z-10 shadow-[0_5px_0_0_rgba(0,0,0,0.2)]">
                  <div className="whitespace-nowrap animate-marquee font-mono text-xs md:text-sm font-bold text-[#e9b50b] tracking-widest">
                     UI ENGINEERING • AI AGENTS • FULL-STACK DEVELOPMENT • SYSTEM ARCHITECTURE • NEXT.JS • MONGODB • UI ENGINEERING • AI AGENTS • FULL-STACK DEVELOPMENT • SYSTEM ARCHITECTURE • NEXT.JS • MONGODB • UI ENGINEERING • AI AGENTS • FULL-STACK DEVELOPMENT • SYSTEM ARCHITECTURE • NEXT.JS • MONGODB • 
                  </div>
                </div>

                {/* 3. Corner Terminal Specs */}
                <div className="absolute bottom-6 left-6 font-mono text-[10px] md:text-xs font-bold text-black/30 leading-relaxed z-10 pointer-events-none hidden sm:block">
                  <p>SYS.INIT // 2026.10.04</p>
                  <p>LOC: 17.3850° N, 78.4867° E [HYD]</p>
                  <p>STATUS: AWAITING_VISITOR_INPUT</p>
                </div>

                <div className="absolute top-16 right-6 font-mono text-[10px] md:text-xs font-bold text-black/30 text-right z-10 pointer-events-none hidden sm:block">
                  <p>SHREYAS_KARAIYA_PORTFOLIO</p>
                  <p>BUILD_V2.0</p>
                </div>

                {/* 4. The 3D Input Form */}
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

            {/* Step 2: Personalized Greeting & Counter */}
            {step === "greeting" && (
              <motion.div 
                key="greeting" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.8 }}
                className="text-center px-4 flex flex-col items-center justify-center"
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4 break-words px-4">
                  Hi, <span className="text-[#31b497]">{name}</span>.
                </h1>
                <p className="text-xl md:text-2xl font-medium text-[#101010]/60 mb-16">
                  Welcome to the portfolio of Shreyas.
                </p>
                
                {/* Animated CSS Counter */}
                <div id="timer" className="scale-75 md:scale-100">
                  <div id="div1" />
                  <div id="div2" />
                  <div id="div3" />
                  <div id="div4" />
                  <div id="div5" />
                  <div id="div6" />
                  <div id="div7" />
                  <div id="div8" />
                  <div id="div9" />
                  <div id="div10" />
                  <div id="div11" />
                  <div id="div12" />
                  <div id="div13" />
                  <div id="div14" />
                  <div id="div15" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Injected CSS */}
          <style>{`
            /* 1. Orange Background Strip & Box Shadow */
            .entry-styled-wrapper .input__container { 
              position: relative; background: #f0f0f0; padding: 20px; display: flex; justify-content: flex-start; align-items: center; gap: 15px; border: 4px solid #000; max-width: 350px; transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1); transform-style: preserve-3d; transform: rotateX(10deg) rotateY(-10deg); perspective: 1000px; 
              box-shadow: 15px 15px 0 -5px #f97316, 15px 15px 0 0 #000; 
            }
            .entry-styled-wrapper .input__container:hover { 
              transform: rotateX(5deg) rotateY(1deg) scale(1.05); 
              box-shadow: 25px 25px 0 -5px #f97316, 25px 25px 0 0 #000; 
            }
            .entry-styled-wrapper .shadow__input { 
              content: ""; position: absolute; width: 100%; height: 100%; left: 0; bottom: 0; z-index: -1; transform: translateZ(-50px); 
              background: linear-gradient(45deg, rgba(249, 115, 22, 0.4) 0%, rgba(249, 115, 22, 0.1) 100%); filter: blur(20px); 
            }

            /* 2. Yellow Profile Icon Button */
            .entry-styled-wrapper .input__button__shadow { 
              cursor: pointer; border: 3px solid #000; 
              background: #e9b50b; 
              transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1); display: flex; justify-content: center; align-items: center; padding: 10px; transform: translateZ(20px); position: relative; z-index: 3; 
            }
            .entry-styled-wrapper .input__button__shadow:hover { 
              background: #e9b50b; transform: translateZ(10px) translateX(-5px) translateY(-5px); box-shadow: 5px 5px 0 0 #000; 
            }
            .entry-styled-wrapper .input__button__shadow svg { fill: #000; width: 25px; height: 25px; }

            .entry-styled-wrapper .input__search { width: 100%; outline: none; border: 3px solid #000; padding: 15px; font-size: 18px; background: #fff; color: #000; transform: translateZ(10px); transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1); position: relative; z-index: 3; font-family: inherit; letter-spacing: -0.5px; }
            .entry-styled-wrapper .input__search::placeholder { color: #666; font-weight: bold; text-transform: uppercase; }
            .entry-styled-wrapper .input__search:hover, .entry-styled-wrapper .input__search:focus { background: #f0f0f0; transform: translateZ(20px) translateX(-5px) translateY(-5px); box-shadow: 5px 5px 0 0 #000; }

            /* 3. Green VISITOR Tag */
            .entry-styled-wrapper .input__container::before { 
              content: "VISITOR"; position: absolute; top: -15px; left: 20px; 
              background: #31b497; 
              color: #000; font-weight: bold; padding: 5px 10px; font-size: 14px; transform: translateZ(50px); z-index: 4; border: 2px solid #000; 
            }
            
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
            
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: inline-block;
              animation: marquee 20s linear infinite;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
