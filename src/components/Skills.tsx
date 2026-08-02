import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiShadcnui,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiVercel
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { CheckCircle, XCircle, Browsers, Database, Gear, CursorClick } from "@phosphor-icons/react";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Dedicated Learning" }
];

const categorizedSkills = [
  {
    category: "Frontend Development",
    icon: Browsers,
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "#ffffff" },
      { name: "HTML5 / CSS3", icon: SiHtml5, color: "#E34F26" }
    ]
  },
  {
    category: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#5A67D8" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
    ]
  },
  {
    category: "Tools & Infrastructure",
    icon: Gear,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Cursor", icon: CursorClick, color: "#38BDF8" }
    ]
  }
];

const services = [
  {
    title: "FULL STACK WEB DEVELOPMENT",
    description: "Building responsive, modern web applications and portals with React, Next.js, TypeScript, and Spring Boot."
  },
  {
    title: "BACKEND & API ARCHITECTURE",
    description: "Designing robust backend services with Spring Boot and Node.js, secure database schemas with PostgreSQL/Prisma, and REST APIs."
  },
  {
    title: "IT SUPPORT & HARDWARE DIAGNOSTICS",
    description: "Troubleshooting operating systems, repairing desktop and laptop hardware components, network setup, and maintenance."
  }
];

const expectations = [
  { title: "Fullstack Development", icon: CheckCircle },
  { title: "Backend and API Architecture", icon: CheckCircle },
  { title: "UI/UX Implementation", icon: CheckCircle },
  { title: "AI Integration", icon: CheckCircle },
  { title: "DevOps and Deployment", icon: CheckCircle }
];

const boundaries = [
  { title: "AI Modeling", icon: XCircle },
  { title: "Machine Learning", icon: XCircle }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground block mb-2">
            02 / Capabilities & Metrics
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-foreground">
            SKILLS & TECH STACK
          </h2>
        </div>

        {/* Stats Row (2+ Years Exp) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-border/60 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-start justify-center">
              <span className="font-display font-black text-4xl sm:text-6xl text-foreground leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Categorized Skills with Real Tool Icons on Hover */}
        <div className="mb-20 space-y-12">
          {categorizedSkills.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <div key={groupIdx} className="p-6 rounded-2xl border border-border/60 bg-card/40">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border/60">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                    <GroupIcon size={22} weight="duotone" />
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase tracking-wide text-foreground">
                    {group.category}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {group.skills.map((skill, skillIdx) => {
                    const ToolIcon = skill.icon;
                    return (
                      <div
                        key={skillIdx}
                        className="flex flex-col items-center justify-center p-4 rounded-xl border border-border/60 bg-card hover:border-sky-400/60 hover:bg-muted/50 transition-all duration-300 group text-center cursor-default"
                      >
                        <div className="p-3 rounded-xl bg-muted/60 text-foreground group-hover:scale-125 transition-all duration-300 mb-2 flex items-center justify-center">
                          <ToolIcon
                            size={28}
                            className="transition-colors duration-300 group-hover:[color:var(--brand-color)]"
                            style={{ "--brand-color": skill.color } as React.CSSProperties}
                          />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-sky-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* What I Do List */}
        <div className="mb-20">
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
            What I Do
          </h3>
          <div className="divide-y divide-border/60 border-y border-border/60">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:px-2 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-muted-foreground">0{idx + 1}.</span>
                  <h4 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wide text-foreground group-hover:text-sky-400 transition-colors">
                    {service.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expectations & Scope Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-border/60">
          
          {/* What You Will Get */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
              What You Will Get
            </h3>
            <div className="space-y-3">
              {expectations.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-border/60 bg-card/60"
                  >
                    <Icon size={20} weight="duotone" className="text-sky-400 flex-shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* What I Don't Do */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
              What I Don't Do
            </h3>
            <div className="space-y-3">
              {boundaries.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-border/60 bg-card/60"
                  >
                    <Icon size={20} weight="duotone" className="text-rose-400 flex-shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      {item.title}
                    </span>
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

export default Skills;
