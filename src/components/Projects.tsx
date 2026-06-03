import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "My Calculator",
      description: "My Calculator is a fully responsive web-based calculator built with HTML, CSS, and JavaScript. It supports all basic arithmetic operations with a user-friendly interface and smooth design. Now released and available online for anyone to use—just click the Live Demo button to try it instantly!",
      image: "/assets/my_calculator.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Natnael-Tewodros/My-calculator",
      demo: "https://my-calculator-seven-delta.vercel.app/",
      featured: true
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
              className="technical-card group grid gap-6 overflow-hidden p-0 animate-slide-up lg:col-span-8 lg:grid-cols-[1.12fr_0.88fr]"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative min-h-72 overflow-hidden border-b border-foreground/20 bg-[#111111] lg:border-b-0 lg:border-r">
                {project.featured && (
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-2 border border-foreground bg-accent px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-accent-foreground shadow-[4px_4px_0_hsl(var(--foreground))]">
                    <Star size={13} className="fill-current" />
                    Featured
                  </div>
                )}
                <div className="absolute inset-x-4 top-4 h-8 rounded-t-lg border border-white/10 bg-white/8" />
                <div className="absolute inset-x-4 top-12 bottom-4 overflow-hidden rounded-b-xl border border-white/10 bg-white/95 p-3 shadow-[0_30px_60px_rgba(0,0,0,0.22)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="flex flex-col p-6">
                <div className="mb-5 flex items-start justify-between gap-4 border-b border-foreground/20 pb-5">
                  <h3 className="text-3xl font-black leading-tight transition-colors group-hover:text-primary">
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

                <div className="mt-auto flex gap-3 pt-8">
                  {project.github && project.github !== '#' ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-11 w-full rounded-none border-foreground bg-transparent font-black hover:bg-card"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demo && project.demo !== '#' ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="h-11 w-full rounded-none border border-foreground bg-foreground font-black text-background hover:-translate-y-0.5 hover:bg-foreground/90">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  ) : (
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
          <aside className="technical-card flex flex-col justify-between bg-foreground text-background lg:col-span-4">
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
