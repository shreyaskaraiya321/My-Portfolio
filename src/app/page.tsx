import { FloatingNav } from "@/components/ui/floating-nav";
import { PixelScrollTransition } from "@/components/ui/pixel-scroll-transition";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { GithubGraph } from "@/components/ui/github-graph";
import { GithubProjects } from "@/components/ui/github-projects";
import { ProfileAsciiArt } from "@/components/ui/profile-ascii";
import { TetrisLoader } from "@/components/ui/loader-tetris";
import { Mail, Code2, Download, BadgeCheck, Star, Layout, BrainCircuit, Database, Wrench, Briefcase } from "lucide-react";
import GlyphRing from "@/components/ui/glyph-ring";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.4-3.6 4.2 4.2 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a11.6 11.6 0 0 0-6 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.5 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);



async function getGithubContributions(account: string) {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${account}?y=last`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.contributions;
  } catch (error) {
    console.error("Failed to fetch Github contributions:", error);
    return null;
  }
}

export default async function Home() {
  const githubContributions = await getGithubContributions("shreyaskaraiya321");
  {/* ================= HERO SECTION ================= */}
  const heroSection = (
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
        {/* EXACT BACKGROUND WRAPPER */}
        {/* Interactive WebGL Background */}
        <div className="absolute inset-0 z-0 w-full h-full bg-[#0a0a0a]">
          <GlyphRing 
            ink="#27272a" 
            lit="#31b497" 
            beam={10} 
            band={12} 
            scale={150} 
          /> 
        </div>

        {/* FOREGROUND CONTENT */}
        <div className="pointer-events-none relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          
          {/* Standard Headline */}
          <div className="w-full min-h-[180px] md:min-h-[220px] mb-4 flex items-center justify-center flex-col">
            <style>{`
              @keyframes textGradient {
                0% { background-position: 0% 50%; }
                100% { background-position: 200% 50%; }
              }
              .animate-text-gradient {
                background-size: 200% auto;
                animation: textGradient 5s linear infinite;
              }
            `}</style>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Building Ideas Into<br/>
              <span 
                className="text-transparent bg-clip-text animate-text-gradient" 
                style={{ backgroundImage: "linear-gradient(to right, #31b497, #0ea5e9, #8b5cf6, #0ea5e9, #31b497)" }}
              >
                Intelligent Experiences
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-white/70 mb-8 max-w-2xl text-lg leading-relaxed">
            Software engineer and creative builder crafting AI-powered applications, modern websites, and digital experiences — blending code, creativity, and AI to turn ideas into reality.
          </p>



        </div>
      </section>
  );

  const contentSection = (
    <main className="w-full bg-[#e4e4e4] text-[#101010]">
      {/* ================= ABOUT SECTION ================= */}
      <div className="w-full max-w-6xl mx-auto px-4 pt-16 pb-8">
        {/* Top Row: Identity & CV */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-black/10 pb-8 mb-8">
          <div>
            <h2 className="text-black/50 font-mono text-sm uppercase tracking-widest mb-3">
              {"// Identity_"}
            </h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-[#101010] tracking-tight">
              Shreyas Karaiya
            </h3>
          </div>
          
          <div className="text-left md:text-right mt-4 md:mt-0 flex flex-col items-start md:items-end">
            <p className="text-[#101010] font-medium text-lg md:text-xl">
              Full-Stack Software Engineer
            </p>
            <p className="text-[#101010]/60 text-sm mt-1.5 flex items-center md:justify-end gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              Nxtwave Institute of Advanced Technologies, Hyderabad
            </p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#101010] text-white rounded-full text-sm font-medium hover:bg-violet-600 transition-colors">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

        {/* Bottom Row: Bio */}
        <div className="max-w-4xl">
          <p className="text-[#101010]/80 text-lg md:text-xl leading-relaxed">
            I am a Full-Stack Software Engineer driven by an explorative and highly creative mind. I blend modern web development, applied AI capabilities, and expert-level SEO to build complete digital experiences. From scalable backend logic to full-scale website deployments, I handle the entire lifecycle of a project to turn complex ideas into seamless reality. Always building, always learning.
          </p>
        </div>
      </div>

      {/* ================= EXPERIENCE SECTION ================= */}
      <div className="w-full max-w-6xl mx-auto px-4 pb-16">
        {/* Experience & Modern Toolkit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Experience Timeline */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 md:p-8 border border-black/5 shadow-sm">
            <h3 className="text-lg font-bold text-[#101010] mb-8 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#31b497]"/> Experience & Journey
            </h3>

            <div className="relative ml-2">
              {/* Elegant Gradient Line */}
              <div className="absolute top-0 bottom-0 left-[11px] w-[2px] bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>

              <div className="space-y-10">
                
                {/* Origin Item */}
                <div className="relative pl-12 group cursor-default">
                  {/* Animated Target Node */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-amber-50 border-2 border-amber-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-300 shadow-sm">
                     <div className="w-2 h-2 rounded-full bg-amber-500 group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col mb-2">
                    <h4 className="font-bold text-[#101010] text-base group-hover:text-amber-600 transition-colors duration-300">First Web Deployment</h4>
                    <p className="text-[10px] font-bold text-[#101010]/40 uppercase tracking-widest mt-1">DreamScape Wallpapers</p>
                  </div>
                  <p className="text-sm text-[#101010]/70 leading-relaxed">Built and deployed my very first live website using WordPress, establishing a foundational understanding of CMS, web hosting, and site architecture.</p>
                </div>

                {/* Freelance Item */}
                <div className="relative pl-12 group cursor-default">
                  {/* Animated Target Node */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300 shadow-sm">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col mb-2">
                    <h4 className="font-bold text-[#101010] text-base group-hover:text-emerald-600 transition-colors duration-300">Freelance Web Developer</h4>
                    <p className="text-[10px] font-bold text-[#101010]/40 uppercase tracking-widest mt-1">U-Safe Solutions & Flash Media</p>
                  </div>
                  <p className="text-sm text-[#101010]/70 leading-relaxed">Engineered complete client websites, configured domain settings, and optimized SEO for live deployments.</p>
                </div>

                {/* Startup Builder Item */}
                <div className="relative pl-12 group cursor-default">
                  {/* Animated Target Node */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-violet-50 border-2 border-violet-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-violet-500 transition-all duration-300 shadow-sm">
                     <div className="w-2 h-2 rounded-full bg-violet-500 group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col mb-2">
                    <h4 className="font-bold text-[#101010] text-base group-hover:text-violet-600 transition-colors duration-300">Startup & Product Builder</h4>
                    <p className="text-[10px] font-bold text-[#101010]/40 uppercase tracking-widest mt-1">Independent Ecosystems</p>
                  </div>
                  <p className="text-sm text-[#101010]/70 leading-relaxed">Designed, architected, and deployed scalable digital platforms including CampusHub and the SquadLink gaming identity portal.</p>
                </div>

                {/* Education Item */}
                <div className="relative pl-12 group cursor-default">
                  {/* Animated Target Node */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-50 border-2 border-blue-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 shadow-sm">
                     <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col mb-2">
                    <h4 className="font-bold text-[#101010] text-base group-hover:text-blue-600 transition-colors duration-300">B.Tech Computer Science</h4>
                    <p className="text-[10px] font-bold text-[#101010]/40 uppercase tracking-widest mt-1">Nxtwave Institute of Adv. Tech</p>
                  </div>
                  <p className="text-sm text-[#101010]/70 leading-relaxed">Focusing on modern UI Engineering, Applied Generative AI, and core system architecture.</p>
                </div>
                
              </div>
            </div>
          </div>

          {/* Right Column: Modern Tech Stack Grid */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 border border-black/5 shadow-sm">
            <h3 className="text-lg font-bold text-[#101010] mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyan-500"/> Core Architecture
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Frontend */}
              <div>
                <h4 className="text-xs font-bold text-black/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Layout className="w-3 h-3"/> Frontend & UI
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'Bootstrap'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-[#f4f4f4] text-[#101010] text-sm font-mono rounded-md border border-black/5">{tech}</span>
                  ))}
                </div>
              </div>

              {/* AI & ML */}
              <div>
                <h4 className="text-xs font-bold text-black/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <BrainCircuit className="w-3 h-3"/> Applied AI
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Gemini API', 'Google Cloud AI', 'LLM Integration'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-[#f4f4f4] text-[#101010] text-sm font-mono rounded-md border border-black/5">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h4 className="text-xs font-bold text-black/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Database className="w-3 h-3"/> Backend & DB
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Node.js', 'C++', 'MongoDB Atlas', 'Supabase'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-[#f4f4f4] text-[#101010] text-sm font-mono rounded-md border border-black/5">{tech}</span>
                  ))}
                </div>
              </div>

              {/* DevOps */}
              <div>
                <h4 className="text-xs font-bold text-black/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Wrench className="w-3 h-3"/> DevOps & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Vercel', 'Render', 'Railway', 'SEO', 'WordPress'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-[#f4f4f4] text-[#101010] text-sm font-mono rounded-md border border-black/5">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Cloud Credentials */}
        <div className="mt-6 bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 text-blue-600 rounded-lg">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#101010]">Google Cloud Credentials</h3>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-sm font-bold text-amber-600 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                4,294 XP
              </span>
              <span className="text-sm font-bold text-blue-600 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
                6x Gen AI Badges
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Generative AI Explorer - Agent Platform",
              "Gen AI Agents: Transform Your Organization",
              "Gen AI Apps: Transform Your Work",
              "Gen AI: Navigate the Landscape",
              "Gen AI: Unlock Foundational Concepts",
              "Gen AI: Beyond the Chatbot"
            ].map((badge) => (
              <a 
                key={badge} 
                href="https://skills.google/profile/badges" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-3.5 rounded-xl border border-black/5 hover:border-blue-500/40 hover:bg-blue-50/50 hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-150 transition-transform"></div>
                <span className="text-sm font-medium text-[#101010]/80 group-hover:text-[#101010] leading-snug">
                  {badge}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="work" className="relative w-full border-t border-black/10">
        <div className="pt-10 pb-8 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#101010]">Featured <span className="text-[#e0562d]">Work</span></h2>
          <p className="text-black/60 mt-4 font-mono text-sm max-w-xl mx-auto">
            &gt; Exploring the intersection of interactive design and system architecture.
          </p>
        </div>
        <ProjectShowcase />
      </section>

      <div id="projects" className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#101010]">
            Other <span className="text-violet-600">Projects</span>
          </h2>
          <p className="text-[#101010]/60 mt-2 font-mono text-sm uppercase tracking-wider">
            Technical Experiments & Mini-Apps
          </p>
        </div>
        
        <GithubProjects />
      </div>

      {/* 4. OPEN SOURCE */}
      <div id="opensource" className="w-full max-w-6xl mx-auto px-4 py-16">
        {/* Open Source Header with Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#101010]">
            Open <span className="text-[#31b497]">Source</span>
          </h2>
          <a 
            href="https://github.com/shreyaskaraiya321" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 text-sm font-medium text-[#101010]/60 hover:text-[#101010] transition-colors mb-1"
          >
            <GithubIcon className="w-4 h-4" />
            View GitHub Profile 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        <div className="w-full bg-white rounded-2xl p-6 border border-black/5 shadow-sm overflow-x-auto">
          <GithubGraph account="shreyaskaraiya321" variant="violet" ambientEffect="twinkle" autoFit={true} data={githubContributions || undefined} />
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div id="contact" className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Terminal & Links */}
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#101010] tracking-tight mb-8">
              Let&apos;s Build <span className="text-amber-500">Something</span>
            </h2>

            <div className="bg-black/5 rounded-xl p-4 md:p-6 mb-8 font-mono text-sm text-[#101010]/70 border border-black/10 w-full">
              <p className="text-emerald-600 mb-2">~/contact $ ./init.sh</p>
              <p className="mb-1">&gt; Initializing contact sequence...</p>
              <p><span className="text-emerald-600">Status:</span> Ready for new opportunities.</p>
            </div>

            <div className="space-y-4 w-full">
              {/* Email */}
              <a href="mailto:shreyaskaraiya@mail.com" className="flex items-center gap-4 text-black/70 hover:text-[#f2b70d] hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/10 bg-white/50 group-hover:border-[#f2b70d]/50">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-mono text-sm">shreyaskaraiya@mail.com</span>
              </a>

              {/* GitHub */}
              <a href="https://github.com/shreyaskaraiya321" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-black/70 hover:text-[#f2b70d] hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/10 bg-white/50 group-hover:border-[#f2b70d]/50">
                  <GithubIcon className="h-5 w-5" />
                </div>
                <span className="font-mono text-sm">github.com/shreyaskaraiya321</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/shreyas-karaiya-2737a6347" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-black/70 hover:text-[#f2b70d] hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/10 bg-white/50 group-hover:border-[#f2b70d]/50">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span className="font-mono text-sm">linkedin.com/in/shreyas-karaiya-2737a6347</span>
              </a>
            </div>
          </div>

          {/* Right Side: ASCII Art Portrait */}
          <div className="hidden md:flex justify-center items-center pointer-events-none w-full">
             <ProfileAsciiArt />
          </div>

        </div>
      </div>

      <div className="flex w-full items-center justify-center p-6 md:p-10 mt-16 pb-24">
          <div className="bg-white text-black flex flex-col md:flex-row items-center gap-8 rounded-xl border border-black/10 px-8 py-8 shadow-sm max-w-4xl">
              
              {/* Enlarged Tetris Board */}
              <div className="shrink-0">
                  <TetrisLoader
                      columns={20}
                      rows={8}
                      cellSize={16}
                      gap={2}
                      speed={38}
                      label="Still Learning"
                  />
              </div>
      
              {/* Updated Copy */}
              <div className="space-y-3 text-center md:text-left">
                  <p className="text-xl md:text-2xl font-bold tracking-tight">Still Learning</p>
                  <p className="text-black/70 text-sm md:text-base leading-relaxed">
                      I am a keen learner, always eager to grasp new technologies, tackle complex challenges, and seize great opportunities to grow as a software engineer. 
                      <span className="block mt-2 italic text-black/50 text-xs">
                          (Feel free to watch the bot play while you&apos;re here.)
                      </span>
                  </p>
              </div>
      
          </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="w-full max-w-6xl mx-auto px-4 py-8 mt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#101010]/40 text-sm font-medium">
          © {new Date().getFullYear()} Shreyas Karaiya. All rights reserved.
        </p>
        <p className="text-[#101010]/40 text-sm font-medium flex items-center gap-1">
          Engineered with Next.js <span className="text-rose-500/70">♥</span>
        </p>
      </footer>
    </main>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] selection:bg-[#f2b70d]/30 selection:text-black">
      <PixelScrollTransition 
         from={heroSection}
         to={contentSection}
         pixelSize={28}
         fromColor="#000000"
         toColor="#e4e4e4"
         accentColors={["#e0562d", "#31b497", "#f2b70d"]}
         accentChance={0.18}
         accentHold={0.12}
         jitter={0.55}
         direction="up"
         scrollLength={1}
      />
      <FloatingNav />
    </div>
  );
}
