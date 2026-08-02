import { useState, useEffect } from "react";
import { EnvelopeSimple, ArrowRight, MapPin, TerminalWindow, Sparkle, Globe } from "@phosphor-icons/react";
import MotionText from "./MotionText";

const laptopProjects = [
  {
    title: "Ekub Platform",
    tag: "Active Project",
    tech: "React • TypeScript • Prisma",
    bg: "from-sky-950/90 via-slate-900 to-indigo-950/90",
    code: `// Ekub Saving Engine
const drawWinner = (members) => {
  return members[Math.floor(Math.random() * members.length)];
};`
  },
  {
    title: "ID Management System",
    tag: "Team Project",
    tech: "Spring Boot • Next.js • Docker",
    bg: "from-emerald-950/90 via-slate-900 to-teal-950/90",
    code: `// ID Access Control
@PreAuthorize("hasRole('ADMIN')")
public UserDTO verifyIdentity(String id) {
  return identityService.validate(id);
};`
  },
  {
    title: "Careu General Trading",
    tag: "Commercial Web App",
    tech: "React • Tailwind • Node.js",
    bg: "from-amber-950/90 via-slate-900 to-orange-950/90",
    code: `// Import-Export Catalog
const catalog = await fetchProducts({
  category: "trading",
  featured: true
});`
  },
  {
    title: "Feedback System (FMS)",
    tag: "Enterprise System",
    tech: "Spring Boot • PostgreSQL",
    bg: "from-purple-950/90 via-slate-900 to-violet-950/90",
    code: `// Sentiment Analysis
export function processFeedback(reports) {
  return reports.map(r => r.score);
};`
  }
];

const Hero = () => {
  const developerTitles = [
    "Full-Stack Developer",
    "Backend & API Architecture",
    "IT & Repair Specialist",
    "Problem Solver"
  ];

  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  // Auto-slide project screens on laptop display
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProjectIdx((prev) => (prev + 1) % laptopProjects.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const currentProject = laptopProjects[activeProjectIdx];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] w-full flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: 3D Animated MacBook (Rotates on Z-axis, facing down, lid unfolds open to display projects) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center order-2 lg:order-1">
          <div className="w-full max-w-lg macbook-3d-wrapper">
            
            {/* Laptop Lid Container (Folds open from -92deg to 0deg) */}
            <div className="macbook-lid-3d w-full rounded-2xl border-2 border-neutral-700/80 bg-neutral-950 p-2.5 sm:p-3.5 shadow-2xl shadow-sky-950/30">
              
              {/* Camera Notch & Bezel Header */}
              <div className="w-full flex items-center justify-center pb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-sky-500/80" />
                </div>
              </div>

              {/* Display Glass Area */}
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-neutral-800/80 relative flex flex-col justify-between">
                
                {/* macOS Window Title Bar */}
                <div className="h-7 bg-neutral-900/90 border-b border-neutral-800/80 px-3 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  </div>

                  <div className="px-3 py-0.5 rounded-full bg-neutral-800/80 border border-neutral-700/50 text-[9px] font-mono text-neutral-300 flex items-center gap-1">
                    <Globe size={11} className="text-sky-400" />
                    <span>natnael.dev/projects</span>
                  </div>

                  <span className="text-[9px] text-neutral-500 font-mono">MacBook Pro</span>
                </div>

                {/* Dynamic Display Project Screen Slide */}
                <div className={`flex-1 p-5 bg-gradient-to-br ${currentProject.bg} flex flex-col justify-between transition-all duration-700 relative overflow-hidden`}>
                  
                  {/* Background Glow */}
                  <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-sky-500/20 blur-2xl" />

                  {/* Project Info Bar */}
                  <div className="flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-wider text-sky-400">
                      <Sparkle size={12} weight="fill" />
                      {currentProject.tag}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
                      {currentProject.tech}
                    </span>
                  </div>

                  {/* Title & Live Code Snippet */}
                  <div className="my-auto py-2 z-10">
                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2">
                      {currentProject.title}
                    </h3>
                    <div className="p-3 rounded-lg bg-black/70 border border-white/10 text-[11px] font-mono text-emerald-400 overflow-x-auto">
                      <pre className="whitespace-pre-wrap">{currentProject.code}</pre>
                    </div>
                  </div>

                  {/* Display Indicators */}
                  <div className="flex items-center justify-between z-10 pt-2 border-t border-white/10 text-[9px] font-mono text-neutral-400 uppercase">
                    <span>LIVE DEMO SHOWCASE</span>
                    <div className="flex gap-1.5">
                      {laptopProjects.map((_, i) => (
                        <span
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            i === activeProjectIdx ? "w-4 bg-sky-400" : "bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Laptop Base Keyboard Deck & Opening Notch */}
            <div className="w-[106%] h-3.5 -ml-[3%] rounded-b-xl bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 border-t border-neutral-600/60 shadow-2xl relative flex items-center justify-center">
              <div className="w-12 h-1 rounded-full bg-neutral-950" />
            </div>

          </div>
        </div>

        {/* Right Column: Hero Details, Badges & Chromatic Header (6 cols on desktop) */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-1 lg:order-2 animate-slide-up">
          
          {/* Availability & Location Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border/80 bg-background/90 backdrop-blur-md shadow-sm">
              <TerminalWindow size={16} weight="duotone" className="text-sky-400" />
              Available for part-time & freelancing
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border/80 bg-background/90 backdrop-blur-md shadow-sm">
              <MapPin size={16} weight="duotone" className="text-rose-400" />
              Addis Ababa, Ethiopia
            </span>
          </div>

          {/* Action Pill Button: Send me a message */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-border bg-foreground text-background font-semibold text-xs uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-xl group"
          >
            <EnvelopeSimple size={18} weight="duotone" />
            <span>Send me a message</span>
            <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Huge Signature Chromatic Title */}
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tighter leading-[0.85] chromatic-text text-foreground select-none">
            NATNAEL
            <br />
            TEWODROS
          </h1>

          {/* Sub-hero Subtitle & Dynamic Motion Text */}
          <div className="text-sm sm:text-lg font-medium tracking-widest uppercase text-muted-foreground max-w-xl">
            <MotionText texts={developerTitles} />
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/70 animate-bounce">
        <span>Scroll</span>
        <div className="w-0.5 h-6 bg-muted-foreground/40 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
