
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2 mt-2 mb-1">
            <img src="/assets/logo.jpg" alt="Logo" className="w-8 h-8 rounded-full shadow" />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Natnael Tewodros
            </span>
          </div>
          <div className="text-xs sm:text-sm text-gray-400 mb-2 text-center tracking-wide">
            Junior Developer
          </div>

          {/* Quick Links Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const element = document.querySelector(`#${link.toLowerCase()}`);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm px-2 py-1 rounded focus:outline-none"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Social Icons Row */}
          <div className="flex space-x-4 justify-center mb-2">
            <a href="https://github.com/Natnael-Tewodros" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                <Github size={16} />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/natnael-tewodros/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                <Linkedin size={16} />
              </Button>
            </a>
            <a href="https://twitter.com/Natnael_Tew_7" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                <Twitter size={16} />
              </Button>
            </a>
            <a href="mailto:natnaeltewodros03@gmail.com" aria-label="Email">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400">
                <Mail size={16} />
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-4">
          <p className="text-gray-400 text-center text-xs tracking-wider">
             © 2025 All rights reserved
          </p>
          <p className="text-gray-400 text-center text-xs mt-1">
            Inspired by <a href="https://chapimenge.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">chapimenge.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
