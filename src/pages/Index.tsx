import Hero from "@/components/Hero";
import About from "../components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen portfolio-shell text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
