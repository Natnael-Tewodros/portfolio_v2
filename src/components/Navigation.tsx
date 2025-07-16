
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
            <img src="/assets/logo.jpg" alt="Logo" className="w-8 h-8 rounded-full shadow" />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NT
            </span>
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
            <div className="ml-4 relative group">
              <button className="w-10 h-10 rounded-full bg-[#0b1622] dark:bg-[#0b1622] flex items-center justify-center shadow-lg focus:outline-none">
                {theme === 'light' && <Sun size={20} className="text-white" />}
                {theme === 'dark' && <Moon size={20} className="text-white" />}
                {theme === 'system' && <span className="inline-block w-5 h-5 text-white">🖥️</span>}
              </button>
              <ul className="absolute left-0 mt-2 w-32 bg-[#0b1622] rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150 z-50 p-2">
                {['light', 'dark', 'system'].map((mode) => (
                  <li key={mode}>
                    <button
                      onClick={() => setTheme(mode as 'light' | 'dark' | 'system')}
                      className={`w-full text-left px-4 py-2 text-base text-white rounded-lg hover:bg-[#19273a] transition-colors ${theme === mode ? 'font-bold' : ''}`}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex items-center gap-1">
              {['light', 'dark', 'system'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setTheme(mode as 'light' | 'dark' | 'system')}
                  className={`px-2 py-1 rounded text-xs font-semibold transition-colors duration-200 border focus:outline-none ${theme === mode ? (mode === 'dark' ? 'bg-gray-900 text-white border-gray-700' : mode === 'light' ? 'bg-gray-100 text-gray-900 border-gray-300' : 'bg-blue-100 text-blue-700 border-blue-300') : 'bg-transparent text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  title={mode.charAt(0).toUpperCase() + mode.slice(1)}
                >
                  {mode === 'light' && <Sun size={16} className="inline" />}
                  {mode === 'dark' && <Moon size={16} className="inline" />}
                  {mode === 'system' && <span className="inline-block w-4 h-4 align-middle">🖥️</span>}
                </button>
              ))}
            </div>
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
