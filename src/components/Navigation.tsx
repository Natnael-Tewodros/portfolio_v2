
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full shadow" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                const modes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
                const currentIndex = modes.indexOf(theme);
                const nextIndex = (currentIndex + 1) % modes.length;
                setTheme(modes[nextIndex]);
              }}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              title={`Current: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
            >
              {theme === 'light' && <Sun size={20} className="text-foreground" />}
              {theme === 'dark' && <Moon size={20} className="text-foreground" />}
              {theme === 'system' && (
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => {
                const modes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
                const currentIndex = modes.indexOf(theme);
                const nextIndex = (currentIndex + 1) % modes.length;
                setTheme(modes[nextIndex]);
              }}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              title={`Current: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
            >
              {theme === 'light' && <Sun size={18} className="text-foreground" />}
              {theme === 'dark' && <Moon size={18} className="text-foreground" />}
              {theme === 'system' && (
                <svg className="w-[18px] h-[18px] text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors font-medium py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
