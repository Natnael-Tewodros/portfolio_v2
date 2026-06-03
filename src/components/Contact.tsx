import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      label: "Email",
      value: "natnaeltewodros03@gmail.com",
      href: "mailto:natnaeltewodros03@gmail.com",
      icon: Mail
    },
    {
      label: "LinkedIn",
      value: "natnael-tewodros",
      href: "https://www.linkedin.com/in/natnael-tewodros/",
      icon: Linkedin
    },
    {
      label: "GitHub",
      value: "Natnael-Tewodros",
      href: "https://github.com/Natnael-Tewodros",
      icon: Github
    },
    {
      label: "Twitter",
      value: "Natnael_Tew_7",
      href: "https://twitter.com/Natnael_Tew_7",
      icon: Twitter
    }
  ];

  return (
    <section id="contact" className="section-band relative overflow-hidden py-20">
      <div className="section-frame">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="paper-panel p-6 md:p-8">
            <span className="section-label">05 / Contact</span>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Send the next brief.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-foreground/72 md:text-lg">
              I am open to junior developer roles, internships, freelance web work, and practical collaborations around MERN apps or IT support tooling.
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-foreground/20 pt-5 text-sm font-bold uppercase tracking-[0.14em] text-foreground/60">
              <MapPin size={18} className="text-accent" />
              Addis Ababa, Ethiopia
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="technical-card group flex min-h-44 flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={25} className="text-primary transition-transform group-hover:-rotate-6" />
                    <span className="text-xs font-black uppercase tracking-[0.22em] text-foreground/45">
                      {contact.label}
                    </span>
                  </div>
                  <span className="break-words text-lg font-black leading-snug transition-colors group-hover:text-primary">
                    {contact.value}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
