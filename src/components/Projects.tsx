import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "My Calculator",
      description: "My Calculator is a fully responsive web-based calculator built with HTML, CSS, and JavaScript. It supports all basic arithmetic operations with a user-friendly interface and smooth design. Now released and available online for anyone to use—just click the Live Demo button to try it instantly!",
      image: "/assets/my_calculator.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Natnael-Tewodros/My-calculator",
      demo: "https://my-calculator-seven-delta.vercel.app/",
      featured: true
    }
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900/50 dark:to-pink-900/20">
        <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-r from-pink-400/5 via-purple-400/5 to-blue-400/5"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text tracking-wide">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group flex flex-col h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              } animate-slide-up`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    <Star size={14} className="fill-current" />
                    Featured
                  </div>
                )}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <div className="hidden sm:flex items-center gap-1 text-yellow-500">
                      <Star size={16} className="fill-current" />
                      <Star size={16} className="fill-current" />
                      <Star size={16} className="fill-current" />
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold hover:shadow-md transition-shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2 mt-auto">
                  {project.github && project.github !== '#' ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full group/btn border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                      >
                        <Github size={18} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="outline"
                      className="flex-1 opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demo && project.demo !== '#' ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <Button
                      className="flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-800/50 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              More projects coming soon...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
