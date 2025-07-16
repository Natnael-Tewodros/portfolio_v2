
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react";
// Official tech icons from react-icons
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import { SiCplusplus, SiC, SiExpress, SiJavascript, SiShadcnui, SiMysql, SiMongodb, SiPostgresql, SiSupabase, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const frontendSkills = [
  { icon: FaHtml5, name: "HTML" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: FaReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiShadcnui, name: "Shadcn UI" },
];
const backendSkills = [
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: FaPython, name: "Python" },
  { icon: FaJava, name: "Java" },
  { icon: SiC, name: "C" },
  { icon: SiCplusplus, name: "C++" },
];
const databaseSkills = [
  { icon: SiMysql, name: "MySQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiSupabase, name: "Supabase" },
];
const techStackHighlight = [
  { icon: SiJavascript, name: "JavaScript" },
  { icon: FaHtml5, name: "HTML" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: FaPython, name: "Python" },
  { icon: FaJava, name: "Java" },
  { icon: FaReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" },
  { icon: FaLinux, name: "Linux" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: SiCplusplus, name: "C++" },
  { icon: SiC, name: "C" },
  { icon: SiShadcnui, name: "Shadcn UI" },
];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"> <span className="text-blue-500">Technical Skills</span></h2>
<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Below are the core technologies and tools I use to build modern, scalable web applications.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mb-8">
          {/* Frontend Skills Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg flex-1 min-w-[220px] flex flex-col items-center">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Palette className="inline-block text-pink-400" size={18} /> Frontend
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {frontendSkills.map((skill, idx) => {
                const IconComponent = skill.icon;
                let hoverColor = "group-hover:text-blue-400";
                switch (skill.name) {
                  case "JavaScript": hoverColor = "group-hover:text-yellow-400"; break;
                  case "HTML": hoverColor = "group-hover:text-orange-500"; break;
                  case "CSS": hoverColor = "group-hover:text-blue-500"; break;
                  case "Tailwind CSS": hoverColor = "group-hover:text-cyan-400"; break;
                  case "React": hoverColor = "group-hover:text-cyan-300"; break;
                  case "Shadcn UI": hoverColor = "group-hover:text-violet-400"; break;
                  default: hoverColor = "group-hover:text-blue-400";
                }
                return (
                  <div key={idx} className="group flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:ring-2 hover:ring-blue-400 bg-transparent rounded-lg p-2">
                    <IconComponent size={28} className={`mb-2 text-blue-400 dark:text-blue-400 transition-colors duration-200 ${hoverColor}`} />
                    <span className="text-xs text-gray-900 dark:text-white">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Backend Skills Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg flex-1 min-w-[220px] flex flex-col items-center">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Server className="inline-block text-blue-400" size={18} /> Backend
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {backendSkills.map((skill, idx) => {
                const IconComponent = skill.icon;
                let hoverColor = "group-hover:text-blue-400";
                switch (skill.name) {
                  case "Node.js": hoverColor = "group-hover:text-green-500"; break;
                  case "Express": hoverColor = "group-hover:text-gray-400"; break;
                  case "Python": hoverColor = "group-hover:text-yellow-300"; break;
                  case "Java": hoverColor = "group-hover:text-red-500"; break;
                  case "C": hoverColor = "group-hover:text-blue-400"; break;
                  case "C++": hoverColor = "group-hover:text-blue-500"; break;
                  default: hoverColor = "group-hover:text-blue-400";
                }
                return (
                  <div key={idx} className="group flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:ring-2 hover:ring-blue-400 bg-transparent rounded-lg p-2">
                    <IconComponent size={28} className={`mb-2 text-blue-400 dark:text-blue-400 transition-colors duration-200 ${hoverColor}`} />
                    <span className="text-xs text-gray-900 dark:text-white">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Database & Cloud Skills Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg flex-1 min-w-[220px] flex flex-col items-center">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Database className="inline-block text-green-400" size={18} /> Database 
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {databaseSkills.map((skill, idx) => {
                const IconComponent = skill.icon;
                let hoverColor = "group-hover:text-blue-400";
                switch (skill.name) {
                  case "MySQL": hoverColor = "group-hover:text-blue-300"; break;
                  case "MongoDB": hoverColor = "group-hover:text-green-400"; break;
                  case "PostgreSQL": hoverColor = "group-hover:text-blue-400"; break;
                  case "Supabase": hoverColor = "group-hover:text-green-300"; break;
                  default: hoverColor = "group-hover:text-blue-400";
                }
                return (
                  <div key={idx} className="group flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:ring-2 hover:ring-blue-400 bg-transparent rounded-lg p-2">
                    <IconComponent size={28} className={`mb-2 text-blue-400 dark:text-blue-400 transition-colors duration-200 ${hoverColor}`} />
                    <span className="text-xs text-gray-900 dark:text-white">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Tech Stack Highlights */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-400 tracking-wide">Tech Stack Highlights</h3>
<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStackHighlight.map((skill, index) => {
              const IconComponent = skill.icon;
              // Color per tech for hover
              let hoverColor = "group-hover:text-blue-400";
              switch (skill.name) {
                case "JavaScript": hoverColor = "group-hover:text-yellow-400"; break;
                case "HTML": hoverColor = "group-hover:text-orange-500"; break;
                case "CSS": hoverColor = "group-hover:text-blue-500"; break;
                case "Tailwind CSS": hoverColor = "group-hover:text-cyan-400"; break;
                case "React": hoverColor = "group-hover:text-cyan-300"; break;
                case "Git": hoverColor = "group-hover:text-orange-400"; break;
                case "GitHub": hoverColor = "group-hover:text-gray-300"; break;
                case "Linux": hoverColor = "group-hover:text-black dark:group-hover:text-gray-100"; break;
                case "Node.js": hoverColor = "group-hover:text-green-500"; break;
                case "Express": hoverColor = "group-hover:text-gray-400"; break;
                case "MongoDB": hoverColor = "group-hover:text-green-400"; break;
                case "PostgreSQL": hoverColor = "group-hover:text-blue-400"; break;
                case "MySQL": hoverColor = "group-hover:text-blue-300"; break;
                case "Supabase": hoverColor = "group-hover:text-green-300"; break;
                case "Python": hoverColor = "group-hover:text-yellow-300"; break;
                case "Java": hoverColor = "group-hover:text-red-500"; break;
                case "C": hoverColor = "group-hover:text-blue-400"; break;
                case "C++": hoverColor = "group-hover:text-blue-500"; break;
                case "Shadcn UI": hoverColor = "group-hover:text-violet-400"; break;
                default: hoverColor = "group-hover:text-blue-400";
              }
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center px-6 py-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-800 min-w-[120px] transition-transform duration-200 hover:scale-110 hover:ring-2 hover:ring-blue-400"
                >
                  <IconComponent size={32} className={`mb-2 text-blue-400 dark:text-blue-400 transition-colors duration-200 ${hoverColor}`} />
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
