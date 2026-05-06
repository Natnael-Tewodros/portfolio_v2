import { Card } from "@/components/ui/card";
import { Code, Zap, Target, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Building complete web applications from frontend to backend"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Continuously expanding my technical knowledge and skills"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Dedicated to creating impactful digital experiences"
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900/50 dark:to-purple-900/20">
        <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-cyan-400/5"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text tracking-wide">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Main About Card */}
        <div className="max-w-4xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 shadow-xl p-8 md:p-12 rounded-2xl">
            <div className="space-y-6 text-center">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Hi, I'm <span className="font-bold gradient-text">Natnael Tewodros</span> — but most people call me <span className="font-bold text-purple-600 dark:text-purple-400">Nati</span>.
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate self-taught developer with a background in Information Technology and hands-on experience as a hardware technician. Currently, I'm focused on mastering the <span className="font-semibold text-green-600 dark:text-green-400">MERN stack</span> and love building meaningful web applications that solve real-world problems.
              </p>
            </div>
          </Card>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card
                key={index}
                className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 rounded-2xl animate-slide-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
