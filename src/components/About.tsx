

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">About Me</h2>
          <p className="text-muted-foreground text-lg">A glimpse into my journey and passion.</p>
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hi, I'm <span className="font-semibold text-foreground">Natnael Tewodros</span> — but most people call me <span className="font-semibold text-primary">Nati</span>.
            <br /><br />
            I've spent the last few years exploring a bit of everything in tech. My background blends <span className="font-semibold text-foreground">full-stack web development</span> with hands-on experience as a <span className="font-semibold text-foreground">hardware technician</span> and <span className="font-semibold text-foreground">sales professional</span>. I've built modern <span className="font-semibold text-foreground">MERN-based applications</span>, crafted <span className="font-semibold text-foreground">AI-powered tools</span>, and created practical systems and dashboards that solve real problems. Right now, I'm fully focused on leveling up my development skills and bringing ideas to life through clean, functional, and user-centered products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
