import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Natnael-Tewodros",
      icon: Github
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/natnael-tewodros/",
      icon: Linkedin
    },
    {
      name: "Twitter",
      href: "https://twitter.com/Natnael_Tew_7",
      icon: Twitter
    },
    {
      name: "Email",
      href: "mailto:natnaeltewodros03@gmail.com",
      icon: Mail
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    const offset = 80;
    const elementPosition = element?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 border-t border-gray-200/50 dark:border-gray-800/50">
      {/* Animated Background */}
      <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-cyan-400/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/assets/logo.jpg"
                  alt="Logo"
                  className="w-12 h-12 rounded-full shadow-lg ring-2 ring-blue-500/50"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-blue-500 animate-pulse opacity-50"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Natnael Tewodros</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Junior Developer</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left max-w-xs">
              Building modern web applications with passion and precision. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Connect With Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  >
                    <IconComponent size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Natnael Tewodros. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              Made with
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              by Natnael
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              <ArrowUp size={16} />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
