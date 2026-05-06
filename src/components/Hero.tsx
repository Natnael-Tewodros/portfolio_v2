import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import MotionText from "./MotionText";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    const offset = 80;
    const elementPosition = element?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  const developerTitles = [
    "Junior MERNStack Developer",
    "Tech Enthusiast",
    "Hardware Technician",
    "Problem Solver"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/30 dark:to-purple-400/30 ${
              i % 3 === 0 ? 'animate-float' : i % 3 === 1 ? 'animate-float-delayed' : 'animate-float-delayed-2'
            }`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-500/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-purple-500/20 rotate-45 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-cyan-500/20 rounded-lg rotate-12 animate-float-delayed-2"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 border-2 border-pink-500/20 rounded-full animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-gradient-shift blur-xl opacity-50"></div>
              <div className="relative rounded-full overflow-hidden w-48 h-48 md:w-72 md:h-72 ring-4 ring-white/50 dark:ring-gray-800/50 shadow-2xl bg-white dark:bg-gray-900">
                <img
                  src="/assets/nat1.jpg"
                  alt="Natnael Tewodros"
                  className="absolute inset-0 scale-125 w-full rounded-full object-cover object-center"
                  style={{ color: 'transparent' }}
                />
              </div>
              {/* Decorative elements around image */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Hero Text Content */}
          <div className="flex-1 text-center md:text-left bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl px-8 py-10 shadow-xl border border-white/20 dark:border-gray-800/50 flex flex-col justify-center items-center md:items-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
              <span className="inline-block text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="gradient-text">Natnael Tewodros</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              <MotionText texts={developerTitles} />
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
              I build scalable frontend & backend systems, automate workflows, and turn real-world ideas into powerful web applications using modern tools like the MERN stack.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8 w-full">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-gradient-shift"
              >
                Let's Connect
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              <a href="/resume.pdf" download className="w-full sm:w-auto">
                <Button
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-blue-500 hover:border-purple-500 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  type="button"
                >
                  Download CV
                </Button>
              </a>
            </div>

            <div className="flex flex-row gap-6 justify-center md:justify-start">
              <a
                href="mailto:natnaeltewodros@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail size={24} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
              </a>
              <a
                href="https://github.com/natnaeltewodros"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github size={24} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/natnaeltewodros"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin size={24} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
