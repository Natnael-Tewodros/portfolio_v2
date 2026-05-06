import { Code, Database, Globe, Smartphone, Server, Palette, Cpu, Cloud } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import { SiCplusplus, SiC, SiExpress, SiJavascript, SiShadcnui, SiMysql, SiMongodb, SiPostgresql, SiSupabase, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const frontendSkills = [
    { icon: FaHtml5, name: "HTML", color: "text-orange-500", hoverColor: "hover:text-orange-600" },
    { icon: FaCss3Alt, name: "CSS", color: "text-blue-500", hoverColor: "hover:text-blue-600" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500", hoverColor: "hover:text-yellow-600" },
    { icon: FaReact, name: "React", color: "text-cyan-400", hoverColor: "hover:text-cyan-500" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500", hoverColor: "hover:text-cyan-600" },
    { icon: SiShadcnui, name: "Shadcn UI", color: "text-violet-500", hoverColor: "hover:text-violet-600" },
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
      color: "from-pink-500 to-rose-500",
      skills: frontendSkills
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      skills: backendSkills
    },
    {
      title: "Database",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: databaseSkills
    },
    {
      title: "Tools",
      icon: Cpu,
      color: "from-purple-500 to-violet-500",
      skills: otherSkills
    }
  ];

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900/50 dark:to-blue-900/20">
        <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-r from-purple-400/5 via-blue-400/5 to-cyan-400/5"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text tracking-wide">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Below are the core technologies and tools I use to build modern, scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 animate-slide-up"
                style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                    <CategoryIcon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default"
                      >
                        <IconComponent
                          size={32}
                          className={`mb-2 ${skill.color} ${skill.hoverColor} transition-colors duration-300`}
                        />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
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

        {/* Tech Stack Highlights */}
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center gradient-text tracking-wide">
            Tech Stack Highlights
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <div className="flex flex-wrap justify-center gap-4">
            {[...frontendSkills, ...backendSkills, ...databaseSkills, ...otherSkills].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={`${skill.name}-${index}`}
                  className="group flex flex-col items-center justify-center px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl border border-gray-200/50 dark:border-gray-800/50 min-w-[120px] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <IconComponent
                    size={36}
                    className={`mb-2 ${skill.color} ${skill.hoverColor} transition-colors duration-300 group-hover:scale-110`}
                  />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
