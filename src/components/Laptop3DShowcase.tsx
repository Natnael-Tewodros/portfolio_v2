import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Sparkle, Globe } from "@phosphor-icons/react";

const showcaseProjects = [
  {
    title: "Ekub Platform",
    tag: "Active Project",
    tech: "React • TypeScript • Prisma",
    gradient: "linear-gradient(135deg, #0c1929 0%, #0f172a 50%, #1e1b4b 100%)",
    accent: "#38bdf8",
    code: `// Ekub Financial Circle
const drawWinner = (members) => {
  const idx = Math.floor(
    Math.random() * members.length
  );
  return members[idx];
};`
  },
  {
    title: "ID Management",
    tag: "Team Project",
    tech: "Spring Boot • Next.js • Docker",
    gradient: "linear-gradient(135deg, #052e16 0%, #0f172a 50%, #134e4a 100%)",
    accent: "#34d399",
    code: `// ID Access Control
@PreAuthorize("hasRole('ADMIN')")
public UserDTO verifyIdentity(
    String userId
) {
  return identityService.validate(userId);
}`
  },
  {
    title: "Careu Trading",
    tag: "Commercial Web App",
    tech: "React • Tailwind • Node.js",
    gradient: "linear-gradient(135deg, #451a03 0%, #0f172a 50%, #431407 100%)",
    accent: "#fbbf24",
    code: `// Product Catalog
const catalog = await fetchProducts({
  category: "import-export",
  featured: true,
  limit: 20
});`
  },
  {
    title: "Feedback System",
    tag: "Enterprise System",
    tech: "Spring Boot • PostgreSQL",
    gradient: "linear-gradient(135deg, #3b0764 0%, #0f172a 50%, #2e1065 100%)",
    accent: "#c084fc",
    code: `// Sentiment Analytics
export function aggregate(reports) {
  return reports
    .filter(r => r.verified)
    .map(r => r.sentimentScore);
}`
  }
];

export const Laptop3DShowcase: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showcaseProjects.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const current = showcaseProjects[activeSlide];

  // Duration constants
  const BODY_DURATION = shouldReduceMotion ? 0 : 2.6;
  const LID_DURATION = shouldReduceMotion ? 0 : 2.2;
  const LID_DELAY = shouldReduceMotion ? 0 : 0.5;

  return (
    <div className="w-full flex items-center justify-center py-6" ref={containerRef}>
      
      {/* 3D Perspective Container — must use inline style for perspective to actually work */}
      <div
        style={{ perspective: "1200px" }}
        className="w-full max-w-[520px] relative"
      >
        {/* 
          LAPTOP BODY — The entire laptop unit.
          Starts: rotated -30deg on Z (anticlockwise), 40deg on X (tilted down toward user), 
                  -15deg on Y (slight sideways), shifted down 80px, scaled to 0.65, invisible
          Ends:   all rotations 0, normal position, scale 1, fully visible
        */}
        <motion.div
          initial={{
            rotateZ: shouldReduceMotion ? 0 : -30,
            rotateX: shouldReduceMotion ? 0 : 40,
            rotateY: shouldReduceMotion ? 0 : -15,
            y: shouldReduceMotion ? 0 : 80,
            scale: shouldReduceMotion ? 1 : 0.65,
            opacity: shouldReduceMotion ? 1 : 0,
          }}
          animate={{
            rotateZ: 0,
            rotateX: 0,
            rotateY: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: BODY_DURATION,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full relative"
        >

          {/* 
            LAPTOP LID (Screen) — Hinged at the bottom edge.
            Starts: rotated -88deg on X-axis (nearly flat/closed against the keyboard)
            Ends:   rotated 0deg (fully open, facing user)
          */}
          <motion.div
            initial={{
              rotateX: shouldReduceMotion ? 0 : -88,
            }}
            animate={{
              rotateX: 0,
            }}
            transition={{
              duration: LID_DURATION,
              delay: LID_DELAY,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "bottom center",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Lid outer shell — dark bezel frame */}
            <div
              style={{
                background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
                boxShadow: "0 -2px 30px rgba(56,189,248,0.08), 0 8px 40px rgba(0,0,0,0.6)",
              }}
              className="w-full rounded-t-2xl border-2 border-neutral-700/60 p-[10px] pb-3 relative"
            >
              {/* Camera dot */}
              <div className="flex justify-center mb-1.5">
                <div className="w-3 h-3 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                </div>
              </div>

              {/* DISPLAY GLASS */}
              <div
                style={{
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.6), 0 0 1px rgba(56,189,248,0.15)",
                }}
                className="w-full aspect-[16/10] rounded-lg overflow-hidden bg-[#0a0a0f] border border-neutral-800/80 relative flex flex-col"
              >

                {/* macOS title bar */}
                <div className="h-7 bg-[#1a1a1f] border-b border-neutral-800/60 px-3 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57] inline-block" />
                    <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e] inline-block" />
                    <span className="w-[10px] h-[10px] rounded-full bg-[#28c840] inline-block" />
                  </div>
                  <div className="px-3 py-[2px] rounded-md bg-neutral-800/70 border border-neutral-700/40 text-[9px] font-mono text-neutral-400 flex items-center gap-1">
                    <Globe size={10} className="text-sky-400" />
                    <span>natnael.dev</span>
                  </div>
                  <span className="text-[8px] text-neutral-600 font-mono tracking-wider">⌘</span>
                </div>

                {/* Project content display — animated slide transitions */}
                <div className="flex-1 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 flex flex-col justify-between p-4"
                      style={{ background: current.gradient }}
                    >
                      {/* Ambient glow */}
                      <div
                        className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full blur-2xl"
                        style={{ background: current.accent, opacity: 0.12 }}
                      />

                      {/* Tag + tech row */}
                      <div className="flex items-center justify-between relative z-10">
                        <span
                          className="inline-flex items-center gap-1 px-2 py-[3px] rounded-full border text-[8px] font-bold uppercase tracking-wider"
                          style={{
                            borderColor: `${current.accent}40`,
                            color: current.accent,
                            backgroundColor: `${current.accent}15`,
                          }}
                        >
                          <Sparkle size={10} weight="fill" />
                          {current.tag}
                        </span>
                        <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest">
                          {current.tech}
                        </span>
                      </div>

                      {/* Title + code */}
                      <div className="my-auto py-1.5 relative z-10">
                        <h3 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-white mb-2 leading-tight">
                          {current.title}
                        </h3>
                        <div className="p-2.5 rounded-md bg-black/60 border border-white/[0.06] text-[10px] font-mono text-emerald-400 leading-relaxed overflow-hidden">
                          <pre className="whitespace-pre-wrap">{current.code}</pre>
                        </div>
                      </div>

                      {/* Bottom bar */}
                      <div className="flex items-center justify-between relative z-10 pt-1.5 border-t border-white/[0.06] text-[8px] font-mono text-neutral-500 uppercase tracking-widest">
                        <span>Live Preview</span>
                        <div className="flex gap-1.5">
                          {showcaseProjects.map((_, i) => (
                            <span
                              key={i}
                              className="rounded-full transition-all duration-300"
                              style={{
                                width: i === activeSlide ? 16 : 6,
                                height: 6,
                                backgroundColor: i === activeSlide ? current.accent : "rgba(255,255,255,0.15)",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </motion.div>

          {/* LAPTOP BASE (keyboard deck) — the hinge strip */}
          <div
            style={{
              background: "linear-gradient(90deg, #404040 0%, #525252 40%, #525252 60%, #404040 100%)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
            className="w-[104%] -ml-[2%] h-[14px] rounded-b-xl border-t border-neutral-500/30 flex items-center justify-center relative z-0"
          >
            {/* Center notch indent */}
            <div className="w-14 h-[4px] rounded-full bg-neutral-800/80" />
          </div>

          {/* GROUND SHADOW — diffuse elliptical shadow beneath laptop */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 0.4 : 0, scaleX: shouldReduceMotion ? 1 : 0.5 }}
            animate={{ opacity: 0.4, scaleX: 1 }}
            transition={{ duration: BODY_DURATION, delay: 0.8, ease: "easeOut" }}
            className="w-[90%] mx-auto h-5 -mt-1 rounded-[50%]"
            style={{ background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)" }}
          />

        </motion.div>
      </div>
    </div>
  );
};

export default Laptop3DShowcase;
