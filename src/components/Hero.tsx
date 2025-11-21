import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import MotionText from "./MotionText";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const developerTitles = [
    "Junior MERNStack Developer",
    "Tech Enthusiast",
    "Hardware Technician",
    "Sales man"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-20 animate-fade-in">
          {/* Profile Image - Restored Style */}
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
            <div className="relative rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 ring-4 ring-blue-400/80 shadow-2xl bg-white">
              <img
                src="/assets/nat1.jpg"
                alt="Natnael Tewodros"
                className="absolute inset-0 scale-125 w-full rounded-full object-cover object-center"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>

          {/* Hero Text Content */}
          <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Available to Hire</span>
              </div>
              <span className="inline-block text-xl font-medium text-primary/80 tracking-tight">👋 Hello, I'm</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                Natnael Tewodros
              </h1>
              <div className="text-2xl md:text-3xl font-medium text-muted-foreground h-10 flex items-center justify-center md:justify-start">
                <MotionText texts={developerTitles} />
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I build scalable frontend & backend systems, automate workflows, and turn real-world ideas into powerful web applications using modern tools like the MERN stack.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center w-full pt-2">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="min-w-[160px] text-base font-medium"
              >
                Contact Me
              </Button>
              <a href="/resume.pdf" download className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="min-w-[160px] text-base font-medium bg-background/50 backdrop-blur-sm"
                  type="button"
                >
                  Download CV
                </Button>
              </a>
            </div>

            <div className="flex gap-6 justify-center md:justify-start pt-4">
              <a href="mailto:natnaeltewodros@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com/natnaeltewodros" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/natnaeltewodros" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
