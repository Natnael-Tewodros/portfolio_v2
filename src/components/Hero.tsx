import "../gradient-border.css";
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
    "Sales man",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-20"
    >
      <div className="max-w-screen w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between md:items-center gap-10 md:gap-20 animate-fade-in">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-[500px] flex justify-center md:justify-start w-full">
            <div className="relative rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 ring-4 ring-blue-400/80 shadow-2xl bg-white">
              <img
                src="/assets/nat1.jpg"
                alt="Natnael Tewodros"
                className="absolute inset-0 scale-125  w-full rounded-full object-cover object-center"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
          {/* Hero Text Content */}
          <div className="flex-1 text-center md:text-left bg-white/80 dark:bg-gray-900/80 rounded-xl px-8 py-10 shadow-xl flex flex-col justify-center items-center md:items-start">
            <span className="inline-block text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">
              👋 Hello, I'm
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                Natnael Tewodros
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
              <MotionText texts={developerTitles} />
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              I build scalable frontend & backend systems, automate workflows,
              and turn real-world ideas into powerful web applications using
              modern tools like the MERN stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-6 w-full">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Contact Me
              </Button>
              <a href="/resume.pdf" download className="w-full sm:w-auto">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
                  type="button"
                >
                  Download CV
                </Button>
              </a>
            </div>
            <div className="flex flex-row gap-6 justify-center md:justify-start mb-2">
              <a
                href="mailto:natnaeltewodros@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="hover:text-blue-500 text-gray-500 dark:text-gray-400 text-2xl"
              >
                <Mail />
              </a>
              <a
                href="https://github.com/natnaeltewodros"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-blue-500 text-gray-500 dark:text-gray-400 text-2xl"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com/in/natnaeltewodros"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-500 text-gray-500 dark:text-gray-400 text-2xl"
              >
                <Linkedin />
              </a>
            </div>{" "}
            {/* End Social Icons */}
          </div>{" "}
          {/* End Hero Text Content */}
        </div>{" "}
        {/* End Flex Row */}
      </div>{" "}
      {/* End Container */}
    </section>
  );
};

export default Hero;
