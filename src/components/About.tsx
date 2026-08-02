import { GithubLogo, LinkedinLogo, TwitterLogo, EnvelopeSimple } from "@phosphor-icons/react";

const About = () => {
  const socialLinks = [
    { href: "https://github.com/Natnael-Tewodros", label: "GitHub", icon: GithubLogo },
    { href: "https://www.linkedin.com/in/natnael-tewodros/", label: "LinkedIn", icon: LinkedinLogo },
    { href: "https://twitter.com/Natnael_Tew_7", label: "Twitter", icon: TwitterLogo },
    { href: "mailto:natnaeltewodros03@gmail.com", label: "Email", icon: EnvelopeSimple }
  ];

  return (
    <section id="about" className="py-24 border-t border-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground block mb-2">
            01 / Introduction
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-foreground">
            ABOUT ME
          </h2>
        </div>

        {/* Split-screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Portrait Photo Wrapper (5 cols) */}
          <div className="lg:col-span-5 relative group">
            <div className="w-full h-full min-h-[440px] rounded-2xl border border-border/80 overflow-hidden bg-card shadow-2xl relative">
              <img
                src="/assets/newnati.JPG"
                alt="Natnael Tewodros"
                className="w-full h-full object-cover object-top grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-background/80 backdrop-blur-md border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Natnael Tewodros
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground">
                  Full-Stack Developer
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div className="space-y-6 text-foreground/80 text-base sm:text-lg leading-relaxed">
              <p>
                Hello, I’m <strong className="text-foreground">Natnael Tewodros</strong>. I’m a passionate Full-Stack Software Developer and IT Specialist dedicated to creating performant web platforms, elegant user experiences, and robust technical solutions.
              </p>
              <p>
                I started my programming journey in 2020 at ASU. Since then, I have developed expertise in modern JavaScript/TypeScript frameworks (React, Next.js, Node.js), Java/Spring Boot, database systems (PostgreSQL, Prisma, MongoDB), and hardware/system diagnostics.
              </p>
              <p>
                I thrive on solving complex problems—whether it’s architecting scalable backend APIs, engineering fluid frontend interfaces, or building AI/ML integrations. I’m constantly learning and always eager to collaborate on innovative projects.
              </p>
            </div>

            {/* Social Connect & Contact Links */}
            <div className="mt-10 pt-6 border-t border-border/60">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-4">
                Connect With Me
              </span>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/80 bg-card hover:bg-foreground hover:text-background text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
                    >
                      <Icon size={16} weight="duotone" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
