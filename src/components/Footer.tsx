import { EnvelopeSimple, LinkedinLogo, GithubLogo, ArrowRight } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer id="contact" className="py-24 border-t border-border/60 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Contact CTA Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground block mb-3">
              05 / Get In Touch
            </span>
            <p className="font-display font-bold text-2xl sm:text-4xl text-foreground leading-snug max-w-3xl mb-8">
              Ready to work together? Let's talk about projects, full-time engineering roles, and collaborations. Feel free to reach out anytime.
            </p>

            {/* Quick Action Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Email Pill */}
              <a
                href="mailto:natnaeltewodros03@gmail.com"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-border/80 bg-card hover:bg-foreground hover:text-background text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm group"
              >
                <EnvelopeSimple size={18} weight="duotone" />
                <span>natnaeltewodros03@gmail.com</span>
                <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* LinkedIn Pill */}
              <a
                href="https://www.linkedin.com/in/natnael-tewodros/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-border/80 bg-card hover:bg-foreground hover:text-background text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm group"
              >
                <LinkedinLogo size={18} weight="duotone" />
                <span>LinkedIn</span>
                <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* GitHub Pill */}
              <a
                href="https://github.com/Natnael-Tewodros"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-border/80 bg-card hover:bg-foreground hover:text-background text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm group"
              >
                <GithubLogo size={18} weight="duotone" />
                <span>GitHub</span>
                <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </a>

            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
            <div className="p-6 rounded-2xl border border-border/60 bg-card/60 w-full text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-2">
                Location & Availability
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                Addis Ababa, Ethiopia (UTC+3)
              </p>
              <p className="text-[11px] text-muted-foreground mt-2">
                Open for remote full-stack roles worldwide & local projects.
              </p>
            </div>
          </div>

        </div>

        {/* Monumental Chromatic Footer Signature Title */}
        <div className="pt-12 border-t border-border/60 text-center select-none overflow-hidden">
          <h1 className="font-display font-black text-4xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter chromatic-text text-foreground leading-none">
            NATNAEL TEWODROS
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <span>© {new Date().getFullYear()} Natnael Tewodros. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
