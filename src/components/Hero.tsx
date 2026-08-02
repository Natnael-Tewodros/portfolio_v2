import { EnvelopeSimple, ArrowRight, MapPin, TerminalWindow } from "@phosphor-icons/react";
import MotionText from "./MotionText";

const Hero = () => {
  const developerTitles = [
    "Full-Stack Developer",
    "Backend & API Architecture",
    "IT & Repair Specialist",
    "Problem Solver"
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] w-full flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-4"
    >
      {/* Hero Central Content */}
      <div className="relative z-10 max-w-5xl text-center flex flex-col items-center gap-6 animate-slide-up">
        
        {/* Availability & Location Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border/80 bg-background/80 backdrop-blur-md shadow-sm">
            <TerminalWindow size={16} weight="duotone" className="text-sky-400" />
            Available for part-time & freelancing
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border/80 bg-background/80 backdrop-blur-md shadow-sm">
            <MapPin size={16} weight="duotone" className="text-rose-400" />
            Addis Ababa, Ethiopia
          </span>
        </div>

        {/* Action Pill Button: Send me a message */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-border bg-foreground text-background font-semibold text-xs uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-xl group mt-2"
        >
          <EnvelopeSimple size={18} weight="duotone" />
          <span>Send me a message</span>
          <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Huge Signature Chromatic Title */}
        <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl uppercase tracking-tighter leading-[0.85] chromatic-text text-foreground select-none mt-4">
          NATNAEL
          <br />
          TEWODROS
        </h1>

        {/* Sub-hero Subtitle & Dynamic Motion Text */}
        <div className="mt-3 text-sm sm:text-lg md:text-xl font-medium tracking-widest uppercase text-muted-foreground max-w-2xl">
          <MotionText texts={developerTitles} />
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
