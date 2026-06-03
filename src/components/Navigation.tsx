import { useEffect, useState } from "react";
import { ChevronUp, Menu, Monitor, Moon, Sun, X } from "lucide-react";
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
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    const offset = 80;
    const elementPosition = element?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowScrollTop(window.scrollY > 500);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

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

  const ThemeIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-foreground/25 bg-background/88 shadow-[0_8px_0_rgba(18,27,34,0.08)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={() => scrollToSection("#home")} className="flex items-center gap-3">
            <img
              src="/assets/logo.jpg"
              alt="Natnael Tewodros logo"
              className="h-10 w-10 rounded-full border border-foreground/35 object-cover object-center"
            />
            <span className="font-display text-xl font-black text-foreground">NT</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`border px-3 py-2 text-sm font-bold transition-all ${
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "border-transparent text-foreground/70 hover:border-foreground/30 hover:bg-card hover:text-foreground"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {(["light", "dark", "system"] as const).map((mode) => {
              const Icon = mode === "light" ? Sun : mode === "dark" ? Moon : Monitor;
              return (
                <button
                  key={mode}
                  onClick={() => setTheme(mode)}
                  title={mode}
                  className={`flex h-10 w-10 items-center justify-center border transition-colors ${
                    theme === mode
                      ? "border-foreground bg-primary text-primary-foreground"
                      : "border-foreground/30 bg-card text-foreground/70 hover:text-foreground"
                  }`}
                >
                  <Icon size={17} />
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center border border-foreground/30 bg-card"
              aria-label="Toggle theme"
            >
              <ThemeIcon size={18} />
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-none border border-foreground/30 bg-card hover:bg-card"
              aria-label="Open menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-foreground/20 bg-background/95 px-4 pb-4 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col pt-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`border-b border-foreground/15 px-2 py-4 text-left font-bold ${
                    activeSection === item.href.substring(1) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center border border-foreground bg-foreground text-background shadow-[5px_5px_0_hsl(var(--accent))] transition-transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default Navigation;
