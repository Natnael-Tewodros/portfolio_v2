import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

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
    { name: "Projects", href: "#projects" }
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
    <footer className="relative border-t border-foreground/15 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_1fr_0.9fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.jpg"
                alt="Natnael Tewodros logo"
                className="h-12 w-12 rounded-full border border-foreground/25 object-cover object-center"
              />
              <div>
                <h3 className="font-display text-2xl font-black">Natnael Tewodros</h3>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-foreground/55">full-stack Developer</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-foreground/65">
              I'm a full-stack developer who has worked on a variety of projects. I'm passionate about building web applications that are both functional and user-friendly.
            </p>
          </div>  

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.22em] text-foreground/45">Navigate</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="border border-foreground/20 px-3 py-2 text-sm font-bold text-foreground/70 transition-colors hover:border-foreground hover:text-foreground hover:bg-card"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.22em] text-foreground/45">Connect</h4>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group flex h-11 w-11 items-center justify-center border border-foreground/25 text-foreground/70 transition-all hover:-translate-y-1 hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-foreground/15 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-foreground/50">
              © {new Date().getFullYear()} Natnael Tewodros. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 border border-foreground/25 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-foreground/70 transition-all hover:-translate-y-1 hover:border-foreground hover:text-foreground hover:bg-card"
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
