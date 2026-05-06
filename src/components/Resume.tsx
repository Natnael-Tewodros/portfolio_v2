import React, { useState } from "react";

const workExperience = [
  {
    title: "Part-time Developer",
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
    date: "Oct 2024 – Present",
    details: [
      `<span class="block text-base md:text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">The <span class='text-purple-600 dark:text-purple-400 font-semibold'>ALX Pathway</span> is an innovative program designed for African high school graduates seeking internationally accredited university degrees. It provides access to top global universities and scholarship opportunities worth up to <span class='text-blue-600 dark:text-blue-400 font-semibold'>$85,000 per year</span>. The 8-month Pathway Foundations phase builds essential academic and professional skills while preparing learners to qualify for degree sponsorships and succeed in their future studies.</span>`
    ]
  },
  {
    title: "Bachelor of Science In Information Technology",
    company: "Assosa University, Assosa, Ethiopia",
    date: "10/2019 – 07/2024",
    details: [
      `<span class="block text-base md:text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Graduated from <span class='text-blue-600 dark:text-blue-400 font-semibold'>Assosa University</span> with a Bachelor's degree in Information Technology. Built a strong foundation in <span class='text-purple-600 dark:text-purple-400 font-semibold'>web development</span>, <span class='text-purple-600 dark:text-purple-400 font-semibold'>systems design</span>, and <span class='text-purple-600 dark:text-purple-400 font-semibold'>networking</span>. Throughout my studies, I actively explored coding beyond the classroom—participating in projects, mentoring peers, and staying curious about real-world tech solutions.</span>`,
      "CGPA 3.26, Exit exam pass."
    ]
  }
];

const Resume = () => {
  const [tab, setTab] = useState<'work' | 'education'>('work');
  const timelineData = tab === 'work' ? workExperience : education;
  const dotColor = tab === 'work' ? 'bg-blue-500' : 'bg-purple-500';
  const lineColor = tab === 'work' ? 'from-blue-400 to-blue-700' : 'from-purple-400 to-purple-700';
  const buttonGradient = tab === 'work' ? 'from-blue-500 to-blue-600' : 'from-purple-500 to-purple-600';

  return (
    <section id="resume" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900/50 dark:to-cyan-900/20">
        <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-purple-400/5"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text tracking-wide">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 focus:outline-none ${
              tab === 'work'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-transparent shadow-lg hover:shadow-xl hover:scale-105'
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
            onClick={() => setTab('work')}
          >
            Work Experience
          </button>
          <button
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 focus:outline-none ${
              tab === 'education'
                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white border-transparent shadow-lg hover:shadow-xl hover:scale-105'
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
            onClick={() => setTab('education')}
          >
            Education
          </button>
        </div>

        {/* Timeline */}
        <div className="relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {/* Timeline vertical line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1.5 bg-gradient-to-b ${lineColor} rounded-full z-0`}></div>

          <div className="flex flex-col gap-12">
            {timelineData.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-stretch relative group"
              >
                {/* Left: Details/Description */}
                <div className={`md:w-5/12 w-full ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} flex items-center justify-end md:justify-end md:text-right mb-6 md:mb-0`}>
                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full">
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-2">
                      {tab === 'education'
                        ? (
                            <>
                              {item.details.map((detail, i) =>
                                typeof detail === 'string' && detail.trim().startsWith('<span')
                                  ? <li key={i} className="list-none" dangerouslySetInnerHTML={{ __html: detail }} />
                                  : <li key={i}>{detail}</li>
                              )}
                            </>
                          )
                        : item.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))
                      }
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot and Line in Center */}
                <div className="flex flex-col items-center md:w-2/12 w-full min-w-[32px] relative z-10">
                  <div className={`w-6 h-6 ${dotColor} border-4 border-white dark:border-gray-900 rounded-full z-10 shadow-lg group-hover:scale-125 transition-transform duration-300`}></div>
                  {idx < timelineData.length - 1 && (
                    <div className={`w-1.5 flex-1 bg-gradient-to-b ${lineColor}`}></div>
                  )}
                </div>

                {/* Right: Date/Title/Company */}
                <div className={`md:w-5/12 w-full ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} flex items-center justify-start md:text-left mt-6 md:mt-0`}>
                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full text-center md:text-left">
                    <span className={`inline-block px-4 py-1.5 text-xs font-semibold rounded-lg mb-3 ${
                      tab === 'work'
                        ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 dark:from-blue-900/30 dark:to-blue-800/30 dark:text-blue-300'
                        : 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-300'
                    }`}>
                      {item.date}
                    </span>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="block text-blue-600 dark:text-blue-400 text-sm font-medium">
                      {item.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl animate-gradient-shift animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="mb-6 md:mb-0">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
              Want the full résumé?
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Download my detailed CV for a complete overview of my experience.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 border border-blue-100 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v11.25m0 0l-4.5-4.5m4.5 4.5l4.5-4.5M6.75 19.5h10.5" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
