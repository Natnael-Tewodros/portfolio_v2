import { useEffect, useState } from "react";
import {
  House,
  User,
  Cpu,
  FileText,
  Briefcase,
  SunDim,
  MoonStars,
  ArrowUp,
  List,
  X,
  EnvelopeSimple
} from "@phosphor-icons/react";
import { useTheme } from "@/contexts/ThemeContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home", icon: House },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Resume", href: "#resume", icon: FileText },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: EnvelopeSimple }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

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
  }, []);

  return (
    <>
      {/* Floating Centered Pill Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between gap-2 p-1.5 rounded-full border border-border/80 bg-background/80 backdrop-blur-xl shadow-2xl transition-all duration-300">
          
          {/* Logo / Brand Pill */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2.5 pl-2 pr-3 py-1 rounded-full hover:bg-muted/50 transition-colors group"
          >
            <img
              src="/assets/logo.jpg"
              alt="Natnael Tewodros"
              className="w-7 h-7 rounded-full object-cover border border-border/60 group-hover:scale-105 transition-transform"
            />
            <span className="font-display font-bold text-xs uppercase tracking-wider text-foreground">
              NATNAEL
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-foreground text-background shadow-sm font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  <Icon size={15} weight={isActive ? "fill" : "duotone"} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Theme & Mobile Actions */}
          <div className="flex items-center gap-1">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-muted/70 transition-colors"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <SunDim size={18} weight="duotone" className="text-amber-400" />
              ) : (
                <MoonStars size={18} weight="duotone" className="text-indigo-600" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full md:hidden text-foreground hover:bg-muted/70 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="pointer-events-auto mt-2 p-3 rounded-2xl border border-border/80 bg-background/95 backdrop-blur-xl shadow-2xl md:hidden animate-scale-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-left transition-all ${
                      isActive
                        ? "bg-foreground text-background"
                        : "text-foreground/80 hover:bg-muted"
                    }`}
                  >
                    <Icon size={18} weight={isActive ? "fill" : "duotone"} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full border border-border/80 bg-foreground text-background shadow-2xl hover:-translate-y-1 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} weight="bold" />
        </button>
      )}
    </>
  );
};

export default Navigation;
