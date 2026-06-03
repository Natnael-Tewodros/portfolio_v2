import { Code, Heart, Target, Wrench, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-stack foundations",
      description: "React, Node, databases, and the habits needed to ship complete applications."
    },
    {
      icon: Wrench,
      title: "Hardware background",
      description: "Hands-on repair experience gives my debugging a practical, systems-first edge."
    },
    {
      icon: Zap,
      title: "Fast learner",
      description: "I move quickly from tutorials to working prototypes and keep tightening the result."
    },
    {
      icon: Target,
      title: "Problem focused",
      description: "I prefer clear, useful tools over decorative complexity."
    }
  ];

  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-label">About</p>
            <h2 className="mt-4 text-5xl font-black leading-none text-foreground md:text-6xl">
              Developer with a repair-bench mindset.
            </h2>
          </div>

          <div className="paper-panel p-6 md:p-9">
            <div className="flex items-start gap-4 border-b border-foreground/20 pb-6">
              <Heart className="mt-1 h-6 w-6 flex-none text-accent" />
              <div className="space-y-5 text-lg leading-8 text-foreground/78">
                <p>
                  Hi, I'm <strong className="text-foreground">Natnael Tewodros</strong>, also known as <strong className="text-primary">Nati</strong>.
                </p>
                <p>
                  I'm a self-taught developer with an Information Technology background and practical experience as a hardware maintenance technician. Right now I'm focused on building stronger MERN stack projects that solve real problems and are easy to understand, maintain, and improve.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div key={highlight.title} className="border border-foreground/20 bg-background/55 p-5">
                    <Icon className="mb-5 h-7 w-7 text-primary" />
                    <h3 className="text-xl font-black text-foreground">{highlight.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-foreground/68">{highlight.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
