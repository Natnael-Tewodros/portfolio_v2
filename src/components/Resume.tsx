import React, { useState } from "react";

const workExperience = [
  {
    title: "Hardware Maintenance Technician",
    company: "Next Generation Private Company",
    date: "09/2024 – Present | Addis Ababa, Ethiopia",
    details: [
      "Diagnose and fix issues with desktops, laptops, and other devices to keep them running smoothly.",
      "Perform regular maintenance, upgrade hardware, and keep track of repair records.",
      "Work with team members to solve technical problems and provide support to users."
    ]
  },
  {
    title: "Call Operator",
    company: "PURPOSE BLACK ETHIOPIA",
    date: "02/2024 – 07/2024 | Addis Ababa, Ethiopia",
    details: [
      "Handled customer calls and provided information/support, ensuring excellent communication and service."
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
    title: "ALX  Pathway Program",
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
      `<span class="block text-base md:text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Graduated from <span class='text-blue-600 dark:text-blue-400 font-semibold'>Assosa University</span> with a Bachelor’s degree in Information Technology. Built a strong foundation in <span class='text-purple-600 dark:text-purple-400 font-semibold'>web development</span>, <span class='text-purple-600 dark:text-purple-400 font-semibold'>systems design</span>, and <span class='text-purple-600 dark:text-purple-400 font-semibold'>networking</span>. Throughout my studies, I actively explored coding beyond the classroom—participating in projects, mentoring peers, and staying curious about real-world tech solutions.</span>`, 
      "CGPA 3.26, Exit exam pass."
    ]
  }
];

const Resume = () => {
  const [tab, setTab] = useState<'work' | 'education'>('work');
  const timelineData = tab === 'work' ? workExperience : education;
  const dotColor = tab === 'work' ? 'bg-blue-500' : 'bg-purple-500';
  const lineColor = tab === 'work' ? 'from-blue-400 to-blue-700' : 'from-purple-400 to-purple-700';

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-blue-400 text-center tracking-wide">Resume</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        <div className="flex justify-center gap-4 mb-10">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 border-2 focus:outline-none ${tab === 'work' ? 'bg-blue-500 text-white border-blue-500 shadow' : 'bg-white dark:bg-gray-900 text-blue-500 border-blue-300 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-800'}`}
            onClick={() => setTab('work')}
          >
            Work Experience
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 border-2 focus:outline-none ${tab === 'education' ? 'bg-purple-500 text-white border-purple-500 shadow' : 'bg-white dark:bg-gray-900 text-purple-500 border-purple-300 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-800'}`}
            onClick={() => setTab('education')}
          >
            Education
          </button>
        </div>
        <div className="relative">
          {/* Timeline vertical line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b ${lineColor} rounded-full z-0`}></div>
          <div className="flex flex-col gap-16">
            {timelineData.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-stretch relative">
                {/* Left: Details/Description */}
                <div className={`md:w-5/12 w-full ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} flex items-center justify-end md:justify-end md:text-right mb-6 md:mb-0`}>
                  <div className="bg-white dark:bg-[#181f2a] border border-gray-200 dark:border-[#232b36] rounded-xl p-6 shadow-sm w-full">
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
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
                  <div className={`w-5 h-5 ${dotColor} border-4 border-white dark:border-[#181f2a] rounded-full z-10`}></div>
                  {idx < timelineData.length - 1 && (
                    <div className={`w-1 flex-1 bg-gradient-to-b ${lineColor}`}></div>
                  )}
                </div>
                {/* Right: Date/Title/Company */}
                <div className={`md:w-5/12 w-full ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} flex items-center justify-start md:text-left mt-6 md:mt-0`}>
                  <div className="bg-white dark:bg-[#181f2a] border border-gray-200 dark:border-[#232b36] rounded-xl p-6 shadow-sm w-full text-center md:text-left">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-md mb-2 ${tab === 'work' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300'}`}>{item.date}</span>
                    <h3 className="text-lg font-bold mb-1 text-gray-800 dark:text-white">{item.title}</h3>
                    <span className="block text-blue-500 dark:text-blue-300 text-sm font-medium mb-2">{item.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Download Banner (after timeline) */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 p-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="mb-4 md:mb-0">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-1">Want the full résumé?</h3>
            <p className="text-blue-100 text-sm">Download my detailed CV for a complete overview of my experience.</p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-5 py-2 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-blue-50 transition-colors border border-blue-100 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
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
