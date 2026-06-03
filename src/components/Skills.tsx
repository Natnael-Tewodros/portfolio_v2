import { Database, Server, Palette, Cpu } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import { SiCplusplus, SiC, SiExpress, SiJavascript, SiShadcnui, SiMysql, SiMongodb, SiPostgresql, SiSupabase, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const frontendSkills = [
    { icon: FaHtml5, name: "HTML", color: "text-orange-500", hoverColor: "hover:text-orange-600" },
    { icon: FaCss3Alt, name: "CSS", color: "text-blue-500", hoverColor: "hover:text-blue-600" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500", hoverColor: "hover:text-yellow-600" },
    { icon: FaReact, name: "React", color: "text-blue-500", hoverColor: "hover:text-blue-600" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-blue-500", hoverColor: "hover:text-blue-600" },
    { icon: SiShadcnui, name: "Shadcn UI", color: "text-blue-500", hoverColor: "hover:text-blue-600" },
  ];

  const backendSkills = [
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500", hoverColor: "hover:text-green-600" },
    { icon: SiExpress, name: "Express", color: "text-gray-600", hoverColor: "hover:text-gray-700" },
    { icon: FaPython, name: "Python", color: "text-yellow-400", hoverColor: "hover:text-yellow-500" },
    { icon: FaJava, name: "Java", color: "text-red-500", hoverColor: "hover:text-red-600" },
    { icon: SiC, name: "C", color: "text-blue-400", hoverColor: "hover:text-blue-500" },
    { icon: SiCplusplus, name: "C++", color: "text-blue-500", hoverColor: "hover:text-blue-600" },
  ];

  const databaseSkills = [
    { icon: SiMysql, name: "MySQL", color: "text-blue-400", hoverColor: "hover:text-blue-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500", hoverColor: "hover:text-green-600" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-500", hoverColor: "hover:text-blue-600" },
    { icon: SiSupabase, name: "Supabase", color: "text-green-400", hoverColor: "hover:text-green-500" },
  ];

  const otherSkills = [
    { icon: FaGitAlt, name: "Git", color: "text-orange-500", hoverColor: "hover:text-orange-600" },
    { icon: FaGithub, name: "GitHub", color: "text-gray-700 dark:text-gray-300", hoverColor: "hover:text-gray-800 dark:hover:text-white" },
    { icon: FaLinux, name: "Linux", color: "text-yellow-500", hoverColor: "hover:text-yellow-600" },
  ];

  const categories = [
    {
      title: "Frontend",
      icon: Palette,
      color: "bg-blue-600",
      skills: frontendSkills
    },
    {
      title: "Backend",
      icon: Server,
      color: "bg-blue-600",
      skills: backendSkills
    },
    {
      title: "Database",
      icon: Database,
      color: "bg-blue-600",
      skills: databaseSkills
    },
    {
      title: "Tools",
      icon: Cpu,
      color: "bg-blue-600",
      skills: otherSkills
    }
  ];

  return (
    <section id="skills" className="section-band section-band-alt relative overflow-hidden py-20">
      <div className="section-frame">
        <div className="mb-12 grid gap-6 border-y border-foreground/20 py-8 lg:grid-cols-[0.65fr_1fr] lg:items-end">
          <div>
            <span className="section-label">02 / Stack</span>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Tools I reach for.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-foreground/70 md:text-lg">
            A compact stack for building full-stack web apps, backed by enough systems knowledge to debug from UI behavior down to environment issues.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {categories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <article
                key={category.title}
                className="technical-card animate-slide-up"
                style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center border border-foreground bg-foreground text-background">
                      <CategoryIcon size={22} />
                    </div>
                    <h3 className="text-2xl font-black">{category.title}</h3>
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-foreground/45">
                    {category.skills.length} items
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group flex min-h-28 flex-col items-center justify-center border border-foreground/18 bg-background/45 p-4 text-center transition-all hover:-translate-y-1 hover:border-foreground hover:bg-card"
                      >
                        <IconComponent
                          size={31}
                          className={`mb-2 ${skill.color} ${skill.hoverColor} transition-colors duration-300`}
                        />
                        <span className="text-xs font-black uppercase tracking-[0.12em] text-foreground/75">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
