
import { Card } from "@/components/ui/card";

const About = () => {
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-blue-400 text-center tracking-wide">About Me</h2>
<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
        </div>

        <div className="flex justify-center items-center -mt-8">
          <div className="space-y-6 max-w-2xl w-full text-center mx-auto">
            <p className="text-lg text-gray-900 dark:text-white leading-relaxed">
  Hi, I'm <span className="font-semibold text-blue-700 dark:text-blue-400">Natnael Tewodros</span> — but most people call me <span className="font-semibold text-purple-700 dark:text-purple-400">Nati</span>.<br/>
  I'm a passionate self-taught developer with a background in Information Technology and hands-on experience as a hardware technician. Currently, I'm focused on mastering the <span className="font-semibold text-green-700 dark:text-green-400">MERN stack</span> and love building meaningful web applications that solve real-world problems.
</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
