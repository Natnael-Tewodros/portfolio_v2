import { Code2, Cpu, Gauge, Wrench } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Wrench,
      title: "Hardware-trained",
      description: "I approach bugs like diagnostics: isolate the fault, test the assumption, document the fix."
    },
    {
      icon: Code2,
      title: "MERN focused",
      description: "React interfaces, Node APIs, MongoDB data models, and deployment-ready project structure."
    },
    {
      icon: Gauge,
      title: "Practical speed",
      description: "I value simple flows, fast feedback, readable code, and features people can actually use."
    },
    {
      icon: Cpu,
      title: "Systems mindset",
      description: "IT, networking, and repair experience help me think beyond the browser surface."
    }
  ];

  return (
    <section id="about" className="section-band relative overflow-hidden py-20">
      <div className="section-frame">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="sticky-card animate-slide-up">
            <span className="section-label">01 / About</span>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Built like a workbench, not a template.
            </h2>
            <p className="mt-6 text-base leading-8 text-foreground/72 md:text-lg">
              I am Natnael Tewodros, a junior MERN developer in Addis Ababa with an IT background and hands-on hardware maintenance experience. That mix shapes how I build: practical interfaces, clear troubleshooting, and software that is easy to inspect when something goes wrong.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <article
                key={highlight.title}
                className="technical-card group animate-slide-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="mb-8 flex items-center justify-between border-b border-foreground/20 pb-4">
                  <IconComponent size={26} className="text-primary transition-transform group-hover:-rotate-6" />
                  <span className="font-display text-3xl font-black text-foreground/18">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-black">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/68">{highlight.description}</p>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
