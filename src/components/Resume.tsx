import { useState } from "react";
import { Briefcase, Download, GraduationCap } from "lucide-react";

const workExperience = [
  {
    title: "Full-time Developer",
    company: "Information Network Security Administration (INSA)",
    date: "7/2025 – Present | Addis Ababa, Ethiopia",
    details: [
      "Assisted in developing internal tools for network security monitoring and incident logging.",
      "Collaborated with senior engineers to implement secure authentication workflows for administrative dashboards.",
      "Wrote and maintained Python scripts to automate log analysis, reducing manual review time by ~20%.",
      "Participated in code reviews and security audits, ensuring compliance with basic data protection standards."
    ]
  },
  {
    title: "Hardware Maintenance Technician",
    company: "Next Generation Private Company",
    date: "09/2024 – 7/2025 | Addis Ababa, Ethiopia",
    details: [
      "Diagnose and fix issues with desktops, laptops, and other devices to keep them running smoothly.",
      "Perform regular maintenance, upgrade hardware, and keep track of repair records.",
      "Work with team members to solve technical problems and provide support to users."
    ]
  },
  {
    title: "Intern",
    company: "Information Network Security Administration (INSA)",
    date: "08/2022 – 10/2022 | Addis Ababa, Ethiopia",
    details: [
      "Built a web application using Java and ASP.NET focusing on implementing secure CRUD operations.",
      "Developed robust database management, ensured secure data handling, and enhanced network security protocols."
    ]
  }
];

const education = [
  {
    title: "ALX Pathway Program",
    company: "ALX, Online/Remote",
    date: "Oct 2024 – Aug 2025",
    details: [
      "The ALX Pathway program prepares African high school graduates for internationally accredited university degrees, scholarship opportunities, and professional foundations."
    ]
  },
  {
    title: "Bachelor of Science In Information Technology",
    company: "Assosa University, Assosa, Ethiopia",
    date: "10/2019 – 07/2024",
    details: [
      "Graduated with a Bachelor's degree in Information Technology, building foundations in web development, systems design, and networking.",
      "CGPA 3.26, Exit exam pass."
    ]
  }
];

const Resume = () => {
  const [tab, setTab] = useState<'work' | 'education'>('work');
  const timelineData = tab === 'work' ? workExperience : education;

  return (
    <section id="resume" className="section-band relative overflow-hidden py-20">
      <div className="section-frame max-w-5xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="animate-slide-up">
            <span className="section-label">03 / Resume</span>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Experience log.</h2>
          </div>
          <div className="flex gap-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button
            className={`inline-flex h-12 items-center gap-2 border px-5 text-sm font-black uppercase tracking-[0.12em] transition-all ${
              tab === 'work'
                ? 'border-foreground bg-foreground text-background'
                : 'border-foreground/25 bg-card text-foreground/70 hover:border-foreground hover:text-foreground'
            }`}
            onClick={() => setTab('work')}
          >
            <Briefcase size={16} />
            Work
          </button>
          <button
            className={`inline-flex h-12 items-center gap-2 border px-5 text-sm font-black uppercase tracking-[0.12em] transition-all ${
              tab === 'education'
                ? 'border-foreground bg-foreground text-background'
                : 'border-foreground/25 bg-card text-foreground/70 hover:border-foreground hover:text-foreground'
            }`}
            onClick={() => setTab('education')}
          >
            <GraduationCap size={16} />
            Education
          </button>
        </div>
        </div>

        <div className="relative border-l border-foreground/25 pl-5 animate-slide-up md:pl-8" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col gap-5">
            {timelineData.map((item, idx) => (
              <article
                key={idx}
                className="technical-card relative grid gap-5 md:grid-cols-[0.75fr_1.25fr]"
              >
                <span className="absolute -left-[34px] top-7 h-4 w-4 border border-foreground bg-accent md:-left-[46px]" />
                <div>
                  <span className="inline-flex border border-foreground/25 bg-background px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-foreground/62">
                    {item.date}
                  </span>
                  <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-primary">{item.company}</p>
                </div>
                <ul className="space-y-3 text-sm leading-7 text-foreground/70">
                  {item.details.map((detail, i) => (
                    <li key={i} className="border-l border-foreground/20 pl-4">{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border border-foreground bg-foreground p-6 text-background shadow-[8px_8px_0_hsl(var(--accent))] animate-slide-up md:flex-row md:items-center md:justify-between" style={{ animationDelay: '0.6s' }}>
          <div>
            <h3 className="text-2xl font-black">
              Want the full résumé?
            </h3>
            <p className="mt-2 text-sm text-background/72 md:text-base">
              Download my detailed CV for a complete overview of my experience.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex h-12 items-center justify-center gap-2 border border-background bg-background px-6 text-sm font-black uppercase tracking-[0.12em] text-foreground transition-transform hover:-translate-y-1"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
