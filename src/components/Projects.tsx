import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Daycare Management System",
      description: "A comprehensive daycare management system for INSA that streamlines operations and enhances communication between staff and parents.",
      image: "",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      github: "",
      demo: "",
      status: "In Progress"
    },
    {
      title: "Better Hack - The Fremen",
      description: "A hackathon project built with TypeScript, Shadcn UI, and BetterAuth. I developed the frontend interface, creating a modern and responsive user experience.",
      image: "/assets/project2.png",
      tech: ["TypeScript", "Shadcn UI", "BetterAuth", "React"],
      github: "https://github.com/kalkidanyishak/BETTER-HACK-THE-FREMEN",
      demo: "https://client-zeta-rouge.vercel.app",
      status: ""
    },
    {
      title: "My Calculator",
      description: "A fully responsive web-based calculator supporting all basic arithmetic operations with a user-friendly interface.",
      image: "/assets/my_calculator.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Natnael-Tewodros/My-calculator",
      demo: "https://my-calculator-seven-delta.vercel.app/",
      status: ""
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work and experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-border/20 bg-transparent hover:bg-card/10 transition-all duration-300">
              <div className="aspect-video w-full overflow-hidden bg-muted/50 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Github className="w-5 h-5" />
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <CardHeader className="p-6 pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  {project.status && (
                    <Badge variant="outline" className="text-xs font-medium border-primary/50 text-primary">
                      {project.status}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
