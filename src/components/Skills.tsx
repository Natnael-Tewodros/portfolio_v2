import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Server, Layout } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import { SiTailwindcss, SiShadcnui, SiExpress, SiC, SiCplusplus, SiMysql, SiMongodb, SiPostgresql, SiSupabase, SiNextdotjs, SiGo, SiTypescript, SiVite } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
        { name: "Vite", icon: SiVite, color: "text-purple-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "Shadcn UI", icon: SiShadcnui, color: "text-foreground" }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Express", icon: SiExpress, color: "text-foreground" },
        { name: "Python", icon: FaPython, color: "text-blue-400" },
        { name: "Go", icon: SiGo, color: "text-cyan-400" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "C", icon: SiC, color: "text-blue-600" },
        { name: "C++", icon: SiCplusplus, color: "text-blue-700" }
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "Supabase", icon: SiSupabase, color: "text-green-400" }
      ]
    },
    {
      title: "Tools & Others",
      icon: Code,
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        { name: "GitHub", icon: FaGithub, color: "text-foreground" },
        { name: "Linux", icon: FaLinux, color: "text-foreground" },
        { name: "VS Code", icon: VscCode, color: "text-blue-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The technologies and tools I use to build modern applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border/20 bg-transparent hover:bg-card/10 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2 group">
                      <div className={`p-3 rounded-xl bg-background/50 border border-border/50 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300 ${skill.color}`}>
                        <skill.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
