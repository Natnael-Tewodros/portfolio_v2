import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const About = () => {
  const socialLinks = [
    { href: "https://github.com/Natnael-Tewodros", label: "GitHub", icon: Github },
    { href: "https://www.linkedin.com/in/natnael-tewodros/", label: "LinkedIn", icon: Linkedin },
    { href: "https://twitter.com/Natnael_Tew_7", label: "Twitter", icon: Twitter },
    { href: "mailto:natnaeltewodros03@gmail.com", label: "Email", icon: Mail }
  ];

  return (
    <section id="about" className="section-band relative overflow-hidden py-20">
      <div className="section-frame">
        <div className="mx-auto max-w-4xl">
          <div className="sticky-card animate-slide-up">
            <span className="section-label">01 / About</span>
            <div className="mt-5">
              <h2 className="text-4xl font-black leading-tight text-foreground md:text-6xl">
                Let me introduce myself.
              </h2>
              <p className="mt-6 text-base leading-8 text-foreground/72 md:text-lg">
                I started programming in early 2020, when I joined the Information Technology department at ASU. I first started with C++ then worked on web development for a while.
              </p>
              <p className="mt-4 text-base leading-8 text-foreground/72 md:text-lg">
                My favorite coding language has been JavaScript, and I&apos;m conversant with Java, Python and, sometimes C. I&apos;m highly interested in Artificial Intelligence and Machine Learning.
              </p>

              <div className="mt-8 border-t border-foreground/15 pt-6">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-foreground/55">
                  Find me on
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/68">
                  Feel free to connect with me through the icons below.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center border border-foreground/30 bg-card text-foreground transition-all hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
