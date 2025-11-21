import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Github,
      title: "GitHub",
      value: "Natnael-Tewodros",
      description: "Check out my repositories",
      link: "https://github.com/Natnael-Tewodros",
      gradient: "from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-600",
      iconColor: "text-white"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "natnael-tewodros",
      description: "Let's connect professionally",
      link: "https://linkedin.com/in/natnael-tewodros",
      gradient: "from-blue-600 to-blue-800",
      iconColor: "text-white"
    },
    {
      icon: Twitter,
      title: "Twitter",
      value: "@Natnael_Tew_7",
      description: "Follow me for updates",
      link: "https://twitter.com/Natnael_Tew_7",
      gradient: "from-sky-400 to-blue-500",
      iconColor: "text-white"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in tech. Reach out through any of these platforms!
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              title={`${method.title}: ${method.value}`}
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                <method.icon className={`w-10 h-10 ${method.iconColor} relative z-10`} />
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <div className="bg-foreground text-background px-3 py-1 rounded-lg text-xs font-medium">
                  {method.title}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm inline-block max-w-xl">
            <CardContent className="p-8">
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-1">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Ready to Work Together?</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
                </p>
                <a
                  href="mailto:natnaeltewodros@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105 mt-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send me an email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
