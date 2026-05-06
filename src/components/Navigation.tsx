import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Monitor, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
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
    const offset = 80;
    const elementPosition = element?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  src="/assets/logo.jpg"
                  alt="Logo"
                  className="w-10 h-10 rounded-full shadow-lg ring-2 ring-blue-500/50 hover:ring-blue-500 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-blue-500 animate-pulse opacity-50"></div>
              </div>
              <span className="hidden sm:block font-bold text-xl gradient-text">NT</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
                  )}
                </button>
              ))}
              <div className="ml-4 relative group">
                <button className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none">
                  {theme === 'light' && <Sun size={18} className="text-white" />}
                  {theme === 'dark' && <Moon size={18} className="text-white" />}
                  {theme === 'system' && <Monitor size={18} className="text-white" />}
                </button>
                <ul className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2">
                  {['light', 'dark', 'system'].map((mode) => (
                    <li key={mode}>
                      <button
                        onClick={() => setTheme(mode as 'light' | 'dark' | 'system')}
                        className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-2 ${
                          theme === mode
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {mode === 'light' && <Sun size={16} />}
                        {mode === 'dark' && <Moon size={16} />}
                        {mode === 'system' && <Monitor size={16} />}
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
                    className={`p-2 rounded-lg transition-all duration-200 border focus:outline-none ${
                      theme === mode
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-md'
                        : 'bg-transparent text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    title={mode.charAt(0).toUpperCase() + mode.slice(1)}
                  >
                    {mode === 'light' && <Sun size={16} />}
                    {mode === 'dark' && <Moon size={16} />}
                    {mode === 'system' && <Monitor size={16} />}
                  </button>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-blue-100 dark:hover:bg-blue-900/30"
              >
                {isOpen ? <X size={24} className="text-blue-600 dark:text-blue-400" /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 animate-slide-up">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeSection === item.href.substring(1)
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-scale-in"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default Navigation;
