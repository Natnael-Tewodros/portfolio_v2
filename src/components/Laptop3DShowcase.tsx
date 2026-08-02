import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkle, Globe } from "@phosphor-icons/react";

const showcaseProjects = [
  {
    title: "Ekub Platform",
    tag: "Active Project",
    tech: "React • TypeScript • Prisma",
    bg: "from-sky-950/90 via-slate-900 to-indigo-950/90",
    code: `// Ekub Financial Circle
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
    code: `// Product Catalog Engine
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
    code: `// Sentiment Analytics
export function processFeedback(reports) {
  return reports.map(r => r.score);
};`
  }
];

export const Laptop3DShowcase: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto slide project screen content inside laptop display
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showcaseProjects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentProject = showcaseProjects[activeSlide];

  // Framer Motion 3D Variants for Laptop Base & Chassis (Starts rotated Z anticlockwise, tilted down)
  const laptopVariants = {
    initial: shouldReduceMotion
      ? { rotateZ: 0, rotateX: 0, rotateY: 0, y: 0, scale: 1, opacity: 1 }
      : {
          rotateZ: -26,
          rotateX: 42,
          rotateY: -16,
          y: 75,
          scale: 0.72,
          opacity: 0
        },
    animate: {
      rotateZ: 0,
      rotateX: 0,
      rotateY: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2.3,
        ease: [0.16, 1, 0.3, 1], // Smooth cinematic curve
        once: true
      }
    }
  };

  // Framer Motion Variants for Laptop Display Lid (Starts closed flat against base -92deg, then unfolds open to 0deg)
  const lidVariants = {
    initial: shouldReduceMotion
      ? { rotateX: 0 }
      : { rotateX: -92 },
    animate: {
      rotateX: 0,
      transition: {
        duration: 2.1,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1],
        once: true
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-4">
      
      {/* 3D Perspective Root Container */}
      <div className="w-full max-w-lg relative perspective-[1400px] transform-gpu">
        
        {/* Laptop 3D Body Frame */}
        <motion.div
          variants={laptopVariants}
          initial="initial"
          animate="animate"
          className="w-full relative transform-style-3d group cursor-pointer"
        >
          {/* Laptop Screen Lid Container (Folds open from -92deg to 0deg) */}
          <motion.div
            variants={lidVariants}
            style={{ transformOrigin: "bottom center" }}
            className="w-full rounded-2xl border-2 border-neutral-700/80 bg-neutral-950 p-2.5 sm:p-3.5 shadow-2xl shadow-sky-950/40 relative z-10 transform-style-3d"
          >
            {/* Camera Notch & Bezel Header */}
            <div className="w-full flex items-center justify-center pb-1">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-sky-400" />
              </div>
            </div>

            {/* Display Glass Area */}
            <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-neutral-800/80 relative flex flex-col justify-between shadow-inner">
              
              {/* macOS Window Bar */}
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

                {/* Project Tag */}
                <div className="flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-wider text-sky-400">
                    <Sparkle size={12} weight="fill" />
                    {currentProject.tag}
                  </span>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
                    {currentProject.tech}
                  </span>
                </div>

                {/* Project Title & Live Code Snippet */}
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
                    {showcaseProjects.map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          i === activeSlide ? "w-4 bg-sky-400" : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Laptop Base Keyboard Deck & Opening Center Notch */}
          <div className="w-[106%] h-3.5 -ml-[3%] rounded-b-xl bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 border-t border-neutral-600/60 shadow-2xl relative flex items-center justify-center z-0">
            <div className="w-12 h-1 rounded-full bg-neutral-950" />
          </div>

          {/* Ground Drop Shadow */}
          <div className="w-full h-4 -mt-1 bg-black/50 blur-md rounded-full" />
        </motion.div>

      </div>

    </div>
  );
};

export default Laptop3DShowcase;
