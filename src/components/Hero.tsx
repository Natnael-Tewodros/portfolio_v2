import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Terminal } from "lucide-react";
import MotionText from "./MotionText";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    const offset = 80;
    const elementPosition = element?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  const developerTitles = [
    " Full Stack Developer",
    "Tech Enthusiast",
    "Hardware Technician",
    "Problem Solver"
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      <div className="absolute left-0 top-20 hidden h-px w-1/3 bg-foreground/30 lg:block" />
      <div className="absolute right-0 top-48 hidden h-px w-1/4 bg-foreground/30 lg:block" />

      <div className="relative mx-auto grid max-w-7xl items-end gap-10 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="pb-10 animate-slide-up">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-foreground/70">
            <span className="inline-flex items-center gap-2 border border-foreground/30 bg-card px-3 py-2">
              <Terminal size={16} className="text-primary" />
              Available for junior roles
            </span>
            <span className="inline-flex items-center gap-2 px-1 py-2">
              <MapPin size={16} className="text-accent" />
              Addis Ababa
            </span>
          </div>

          <h1 className="max-w-5xl text-6xl font-black leading-[0.9] text-foreground sm:text-7xl lg:text-8xl">
            Natnael
            <span className="block text-primary">Tewodros</span>
          </h1>

          <div className="mt-7 max-w-2xl border-y border-foreground/25 py-5">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              <MotionText texts={developerTitles} />
            </h2>
            <p className="mt-4 text-lg leading-8 text-foreground/75">
              I build practical MERN applications, automate useful workflows, and bring a hardware technician's troubleshooting discipline into web development.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={scrollToContact}
              className="h-12 rounded-none border border-foreground bg-foreground px-7 text-base font-bold text-background shadow-[6px_6px_0_hsl(var(--primary))] transition-transform hover:-translate-y-0.5 hover:bg-foreground/90"
            >
              Let's Connect
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <a href="/resume.pdf" download>
              <Button
                className="h-12 w-full rounded-none border border-foreground bg-transparent px-7 text-base font-bold text-foreground shadow-[6px_6px_0_hsl(var(--accent))] transition-transform hover:-translate-y-0.5 hover:bg-card sm:w-auto"
                type="button"
              >
                Download CV
              </Button>
            </a>
          </div>

          <div className="mt-9 flex gap-3">
            {[
              { href: "mailto:natnaeltewodros03@gmail.com", label: "Email", icon: Mail },
              { href: "https://github.com/natnaeltewodros", label: "GitHub", icon: Github },
              { href: "https://linkedin.com/in/natnaeltewodros", label: "LinkedIn", icon: Linkedin }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center border border-foreground/40 bg-card text-foreground transition-all hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md pb-10 lg:max-w-none lg:pb-16">
          <div className="paper-panel relative translate-y-2 -rotate-1 p-4 lg:translate-y-6">
            <div className="absolute -left-5 top-7 z-10 bg-accent px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-accent-foreground">
              Portfolio
            </div>
            <div className="relative overflow-hidden border border-foreground/30 bg-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-foreground/15 bg-background/85 px-4 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-foreground/55 backdrop-blur-sm">
                <span>Portrait frame</span>
                <span>01</span>
              </div>
              <div className="aspect-[4/5] overflow-hidden pt-12">
                <img
                  src="/assets/Nati3.jpg"
                  alt="Natnael Tewodros"
                  className="h-full w-full object-cover object-[50%_18%] grayscale-[12%] contrast-105"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 border border-foreground/20 bg-background/85 text-center text-[11px] font-black uppercase tracking-[0.16em] text-foreground/75 backdrop-blur-sm">
                <span className="border-r border-foreground/20 py-2">MERN</span>
                <span className="border-r border-foreground/20 py-2">IT</span>
                <span className="py-2">Repair</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-foreground/55 md:flex">
        <span className="h-px w-12 bg-foreground/35" />
        Scroll
        <span className="h-px w-12 bg-foreground/35" />
      </div>
    </section>
  );
};

export default Hero;
