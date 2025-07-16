
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "My Calculator",
      description: "My Calculator is a fully responsive web-based calculator built with HTML, CSS, and JavaScript. It supports all basic arithmetic operations with a user-friendly interface and smooth design. Now released and available online for anyone to use—just click the Live Demo button to try it instantly!",
      image: "/assets/my_calculator.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Natnael-Tewodros/My-calculator",
      demo: "https://my-calculator-seven-delta.vercel.app/"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts. Built with React and integrated with multiple weather APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tech: ["React", "TypeScript", "Chart.js", "API Integration"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and a contact form.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-blue-400 text-center tracking-wide">My Projects</h2>
<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-900 dark:text-white max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={
                `flex flex-col h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 p-3 md:p-4 ` +
                (index === 0 ? 'ring-4 ring-blue-500/70 shadow-2xl scale-105 border-2 border-blue-400 dark:border-blue-600' : '')
              }
            >
              <div className="relative overflow-hidden rounded-t-lg">
                {index === 0 ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-h-44 mx-auto rounded-lg border-4 border-blue-400 shadow-lg bg-white dark:bg-gray-900 object-contain"
                    style={{objectFit: 'contain', background: 'white'}}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="py-2 px-1">
                <div className="flex items-center gap-2">
                  <CardTitle className={index === 0 ? "text-lg md:text-xl font-extrabold text-blue-700 dark:text-blue-300" : "text-base font-bold text-gray-900 dark:text-white"}>
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 space-y-2 px-1 py-1">
                <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-2 mt-auto">
                  <>
                    {project.github && project.github !== '#' ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Github size={16} />
                          Code
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" size="sm" className="flex items-center gap-2" disabled>
                        <Github size={16} />
                        Code
                      </Button>
                    )}
                    {project.demo && project.demo !== '#' ? (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600">
                          <ExternalLink size={16} />
                          Live Demo
                        </Button>
                      </a>
                    ) : (
                      <Button size="sm" className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600" disabled>
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    )}
                  </>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
