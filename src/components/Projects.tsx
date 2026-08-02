import { Image, Sparkle, Eye } from "@phosphor-icons/react";

const projectsList = [
  {
    title: "Ekub Platform",
    category: "Financial App",
    platform: "React / Node.js",
    description: "Financial saving circle platform with group payments, draw schedules, and transaction tracking.",
    tech: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL"],
    image: "/assets/project2.png",
    github: "https://github.com/Natnael-Tewodros/Ekub",
    demo: "#",
    badge: "Active Project"
  },
  {
    title: "ID Management System",
    category: "Security & Credentials",
    platform: "Spring Boot / Next.js",
    description: "Team project for secure identity management, credential verification, and role-based access control.",
    tech: ["Spring Boot", "Next.js", "PostgreSQL", "Docker"],
    image: "/assets/project2.png",
    github: "https://github.com/Natnael-Tewodros",
    demo: "#",
    badge: "Team Project"
  },
  {
    title: "Careu General Trading",
    category: "E-Commerce & Import",
    platform: "React / Tailwind",
    description: "Enterprise web platform for product catalogs, import/export services, and inquiries.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/assets/project2.png",
    github: "https://github.com/Natnael-Tewodros",
    demo: "#",
    badge: "Commercial"
  },
  {
    title: "Feedback System (FMS)",
    category: "Enterprise Analytics",
    platform: "Spring Boot / Next.js",
    description: "Centralized platform to collect, analyze, and process institutional client and employee feedback.",
    tech: ["Spring Boot", "Next.js", "PostgreSQL", "Docker"],
    image: "/assets/project2.png",
    github: "https://github.com/Natnael-Tewodros",
    demo: "#",
    badge: "Full-Stack"
  },
  {
    title: "Daycare Management",
    category: "Education & Operations",
    platform: "Spring Boot / Next.js",
    description: "Operations platform for child records, attendance, staff coordination, and parent communication.",
    tech: ["Spring Boot", "Next.js", "Docker", "PostgreSQL"],
    image: "/assets/project2.png",
    github: "https://github.com/Natnael-Tewodros",
    demo: "#",
    badge: "Full-Stack"
  }
];

const Projects = () => {
  // Multiply items for seamless continuous looping track
  const marqueeItems = [...projectsList, ...projectsList, ...projectsList];

  return (
    <section id="projects" className="py-20 border-t border-border/60 relative bg-background overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground block mb-1.5">
              04 / Portfolio Showcase
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-foreground">
              WORK SHOWCASE
            </h2>
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Continuous Marquee Loop • Hover to Pause
          </span>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Track Container */}
      <div className="w-full relative hero-carousel-container py-4">
        <div className="carousel-track-scroll flex gap-6 w-max">
          {marqueeItems.map((item, idx) => (
            <article
              key={idx}
              className="w-[320px] sm:w-[360px] flex-shrink-0 rounded-2xl border border-border/70 bg-card p-5 shadow-xl hover:border-sky-400/60 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Header & Badges */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-[10px] font-bold uppercase tracking-wider">
                    <Sparkle size={12} weight="fill" />
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    {item.platform}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl uppercase tracking-tight text-foreground group-hover:text-sky-400 transition-colors mb-2">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest block mb-3">
                  {item.category}
                </span>

                <p className="text-xs text-foreground/80 leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>
              </div>

              {/* Tech Stack & Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-full border border-border/60 bg-muted/40 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions: Replaced Code & View Project buttons with View Image button; Code & Live links commented out below */}
                <div className="flex items-center gap-2 pt-3 border-t border-border/60">
                  <button
                    onClick={() => window.open(item.image, "_blank")}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border bg-foreground text-background hover:scale-105 text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
                  >
                    <Image size={15} weight="duotone" />
                    <span>View Image</span>
                  </button>

                  {/* 
                  Commented out per user request:
                  {item.github !== "#" && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/80 bg-card hover:bg-foreground hover:text-background text-[10px] font-semibold uppercase tracking-wider transition-all duration-300"
                    >
                      <GithubLogo size={14} weight="duotone" />
                      <span>Code</span>
                    </a>
                  )}

                  <a
                    href={item.demo !== "#" ? item.demo : "#contact"}
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full border border-border bg-foreground text-background hover:scale-105 text-[10px] font-semibold uppercase tracking-wider transition-all duration-300"
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={13} weight="bold" />
                  </a>
                  */}
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Projects;
