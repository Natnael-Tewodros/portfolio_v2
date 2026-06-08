import { ArrowUpRight, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Daycare Management System",
      description:
        "A platform designed to streamline daycare operations, including child records, attendance, staff coordination, and parent communication. It helps teams manage daily activities more efficiently while improving service quality and transparency. The backend is built with Spring Boot, the frontend with Next.js, and Docker is used for consistent deployment.",
      tech: ["Spring Boot", "Next.js", "Docker"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Feedback Management System",
      description:
        "A centralized platform for collecting, managing, and analyzing feedback from employees, departments, and external clients to improve communication, services, and decision-making. It enables users to submit suggestions and reports efficiently through a structured system. The backend is built with Spring Boot, the frontend with Next.js, and Docker is used for consistent deployment.",
      tech: ["Spring Boot", "Next.js", "Docker"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-band section-band-alt relative overflow-hidden py-20">
      <div className="section-frame">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div className="animate-slide-up">
            <span className="section-label">04 / Projects</span>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Shipped work.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-foreground/70 md:text-lg">
            A small but honest project shelf. Each piece gets room for what matters: the problem, the stack, and where to inspect it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`technical-card group grid gap-5 overflow-hidden p-0 animate-slide-up ${
                index === 0 ? "lg:col-span-6" : "lg:col-span-6"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative min-h-48 overflow-hidden border-b border-foreground/20 bg-[#111111]">
                {project.featured && (
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-2 border border-foreground bg-accent px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-accent-foreground shadow-[4px_4px_0_hsl(var(--foreground))]">
                    <Star size={13} className="fill-current" />
                    Featured
                  </div>
                )}
                <div className="absolute inset-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-transparent p-5 shadow-[0_30px_60px_rgba(0,0,0,0.18)]">
                  <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-white/12 bg-[#0f0f0f]/70">
                    <div className="text-center">
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-white/45">
                        No preview image
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/25">
                        Placeholder space
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-5">
                <div className="mb-4 flex items-start justify-between gap-4 border-b border-foreground/20 pb-4">
                  <h3 className="text-2xl font-black leading-tight transition-colors group-hover:text-primary md:text-3xl">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="mt-1 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={28} />
                </div>

                <p className="text-sm leading-7 text-foreground/70">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-foreground/25 bg-background px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <aside className="technical-card flex flex-col justify-between bg-foreground text-background lg:col-span-12">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.22em] text-background/55">Next build</span>
              <h3 className="mt-4 text-3xl font-black">More case studies as projects mature.</h3>
            </div>
            <p className="mt-10 border-t border-background/25 pt-5 text-sm leading-7 text-background/70">
              The portfolio intentionally shows released work first. New projects can be added without changing the layout.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Projects;
