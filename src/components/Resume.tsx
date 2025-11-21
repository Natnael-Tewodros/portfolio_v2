import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Mail } from "lucide-react";

const workExperience = [
  {
    title: "Part-time Fullstack Developer",
    company: "Information Network Security Administration (INSA)",
    date: "07/2025 – Present (Part-time)",
    location: "Addis Ababa, Ethiopia",
    description: "Developing secure and scalable web applications. Contributing to national security projects through robust software solutions."
  },
  {
    title: "Hardware Maintenance Technician",
    company: "Next Generation Private Company",
    date: "09/2024 – 07/2025",
    location: "Addis Ababa, Ethiopia",
    description: "Diagnose and fix issues with desktops, laptops, and other devices to keep them running smoothly. Perform regular maintenance, upgrade hardware, and keep track of repair records. Work with team members to solve technical problems and provide support to users."
  },

  {
    title: "Call Operator",
    company: "PURPOSE BLACK ETHIOPIA",
    date: "02/2024 – 07/2024",
    location: "Addis Ababa, Ethiopia",
    description: "Handled customer calls and provided information/support, ensuring excellent communication and service."
  },
  {
    title: "Intern",
    company: "Information Network Security Administration (INSA)",
    date: "08/2022 – 10/2022",
    location: "Addis Ababa, Ethiopia",
    description: "Built a web application using Java and ASP.NET focusing on implementing secure CRUD operations. Developed robust database management, ensured secure data handling, and enhanced network security protocols."
  }
];

const education = [
  {
    title: "ALX Pathway Program",
    institution: "ALX, Online/Remote",
    date: "Oct 2024 – August 2025",
    description: "The ALX Pathway is an innovative program designed for African high school graduates seeking internationally accredited university degrees. It provides access to top global universities and scholarship opportunities."
  },
  {
    title: "Bachelor of Science In Information Technology",
    institution: "Assosa University, Assosa, Ethiopia",
    date: "10/2019 – 07/2024",
    description: "Graduated with a Bachelor’s degree in Information Technology. Built a strong foundation in web development, systems design, and networking. CGPA 3.26, Exit exam pass."
  }
];

const Resume = () => {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My professional journey and educational background.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">Experience</h3>
            </div>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card key={index} className="border-border/20 bg-transparent hover:bg-card/10 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-lg font-semibold leading-tight">{job.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground/80 mt-1">
                          {job.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="shrink-0 font-normal">
                        {job.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {job.description}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                      {job.location}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-lg font-semibold leading-tight">{edu.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground/80 mt-1">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="shrink-0 font-normal">
                        {edu.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-primary/20 bg-transparent hover:bg-primary/5 mt-8 transition-all duration-300">
                <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="p-3 bg-background rounded-full shadow-sm">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Full Resume</h4>
                    <p className="text-sm text-muted-foreground mb-4">Download detailed PDF version</p>
                    <a
                      href="/resume.pdf"
                      download
                      className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md shadow hover:bg-primary/90 transition-colors"
                    >
                      Download CV
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
