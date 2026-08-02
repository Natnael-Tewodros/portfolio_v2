import { useState } from "react";
import { Briefcase, GraduationCap, DownloadSimple, CalendarBlank, MapPinLine } from "@phosphor-icons/react";

const workExperience = [
  {
    title: "Software-Developer",
    company: "Information Network Security Administration (INSA)",
    date: "07/2025 – Present",
    location: "Addis Ababa, Ethiopia",
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
    date: "09/2024 – 07/2025",
    location: "Addis Ababa, Ethiopia",
    details: [
      "Diagnosed and fixed issues with desktops, laptops, and peripheral devices.",
      "Performed regular maintenance, hardware upgrades, and detailed repair logs.",
      "Collaborated with team members to resolve technical hardware and network bottlenecks."
    ]
  },
  {
    title: "Developer Intern",
    company: "Information Network Security Administration (INSA)",
    date: "08/2022 – 10/2022",
    location: "Addis Ababa, Ethiopia",
    details: [
      "Built web applications using Java and ASP.NET focusing on secure CRUD operations.",
      "Developed database structures and enhanced basic network security protocols."
    ]
  }
];

const education = [
  {
    title: "ALX Pathway Program",
    company: "ALX, Online / Remote",
    date: "Oct 2024 – Aug 2025",
    location: "Remote",
    details: [
      "Rigorous professional foundation program focused on software engineering, problem solving, and international tech standards."
    ]
  },
  {
    title: "B.Sc. in Information Technology",
    company: "Assosa University",
    date: "10/2019 – 07/2024",
    location: "Assosa, Ethiopia",
    details: [
      "Graduated with a Bachelor's degree in IT with distinction (CGPA 3.26, Passed National Exit Exam).",
      "Core focus on software architecture, database management, and computer networks."
    ]
  }
];

const Resume = () => {
  const [tab, setTab] = useState<"work" | "education">("work");
  const timelineData = tab === "work" ? workExperience : education;

  return (
    <section id="resume" className="py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground block mb-2">
              03 / Background & Journey
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-foreground">
              RESUME & EXPERIENCE
            </h2>
          </div>

          <a
            href="/Natnael-Tewodros-Resume.pdf"
            download="Natnael-Tewodros-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-foreground text-background font-semibold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-md self-start md:self-auto"
          >
            <DownloadSimple size={18} weight="bold" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center gap-2 mb-12 p-1.5 rounded-full border border-border/80 bg-card/60 w-fit">
          <button
            onClick={() => setTab("work")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              tab === "work"
                ? "bg-foreground text-background shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Briefcase size={16} weight={tab === "work" ? "fill" : "duotone"} />
            <span>Work Experience</span>
          </button>

          <button
            onClick={() => setTab("education")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              tab === "education"
                ? "bg-foreground text-background shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <GraduationCap size={16} weight={tab === "education" ? "fill" : "duotone"} />
            <span>Education</span>
          </button>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-border/60 bg-card hover:border-foreground/40 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-4 mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-foreground group-hover:text-emerald-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                    {item.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 border border-border/40">
                    <CalendarBlank size={14} weight="duotone" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 border border-border/40">
                    <MapPinLine size={14} weight="duotone" />
                    {item.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 list-disc list-inside text-sm text-foreground/80 leading-relaxed">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Resume;
