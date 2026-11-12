import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import PrintableResume from "@/components/PrintableResume";
import SkillsSection from "@/components/SkillsSection";
import {
  Briefcase,
  GraduationCap,
  Code,
  Award,
  CheckCircle2,
  Brain,
  Cpu,
  Database,
  Globe,
  GitBranch,
  Palette,
  Wrench,
  Target,
  Bot,
} from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("skills");

  const education = [
    {
      institution: "Babcock University",
      degree: "Bachelor of Science (B.Sc)",
      field: "Computer Science",
      gpa: "Second Class Upper",
      location: "Ogun State, Nigeria",
      courses: [
        "Algorithms & Data Structures",
        "Web Development",
        "System Design",
        "Database Management Systems",
        "Software Development Lifecycle",
        "System Administration",
      ],
    },
    {
      institution: "New Horizons Training Centre",
      degree: "Professional Training",
      field: "Information Technology",
      gpa: "Completed",
      location: "Nigeria",
      courses: [
        "Web & Mobile Development",
        "Cybersecurity Fundamentals",
      ],
    },
    {
      institution: "Kings High School",
      degree: "Secondary School Certificate (SSCE)",
      field: "Science Stream",
      gpa: "Completed",
      location: "Nigeria",
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
  ];

  const experience = [
    {
      position: "Full-Stack Developer (Frontend Lead)",
      company: "LAPO Microfinance Bank, Lagos, Nigeria",
      duration: "Jan 2024 – Mar 2025; Jul 2025 – Present",
      description:
        "Frontend lead for 5 internal business applications and builder of the Savings Flex section of the bank's customer-facing retail platform.",
      responsibilities: [
        "Lead frontend development for 5 internal business applications (scholarship examination, visitor management, staff health and welfare, budget, and litigation systems) used by 500+ staff across 10+ departments",
        "Built the Savings Flex section of the bank's customer-facing web retail platform in React and TypeScript, meeting WCAG 2.1 AA with semantic HTML, keyboard navigation and ARIA labelling",
        "Cut Savings Flex's initial bundle size by 35% and raised its Lighthouse performance score from 62 to 90+ through code splitting, lazy loading and image optimisation",
        "Applied OWASP practices to customer financial data, adding client- and server-side input validation and safe handling of account information in forms and API calls",
        "Delivered the visitor management system end to end: React frontend and ASP.NET Core (C#) REST APIs on SQL Server for authentication, reporting and visitor records",
        "Refactored legacy code in the budget and litigation applications into 30+ reusable TypeScript components, reducing user-reported UI defects by 40%",
        "Introduced Jest and React Testing Library unit tests and Cypress end-to-end tests (70% coverage on core flows), run through GitHub Actions CI/CD on every pull request with Docker-based environments",
        "Review pull requests, mentor 2 junior developers, and turn stakeholder requirements into Figma designs and technical specifications within a 5-developer team",
      ],
    },
    {
      position: "Full-Stack Developer (Freelance)",
      company: "Remote",
      duration: "2023 – Present",
      description:
        "Delivering production web applications for e-commerce and education clients with React, Next.js, TypeScript and Tailwind CSS.",
      responsibilities: [
        "Delivered 12+ production web applications for e-commerce and education clients with React, Next.js, TypeScript and Tailwind CSS, including Firebase authentication and REST API integration",
        "Retained 4 repeat clients through ongoing feature work, maintenance and performance fixes on live applications",
      ],
    },
  ];

  const certifications = [
    {
      name: "CompTIA IT Fundamentals (ITF+)",
      issuer: "CompTIA",
      skills: "IT Concepts, Infrastructure, Applications, Security",
    },
    {
      name: "CompTIA A+ (Parts 1 & 2)",
      issuer: "CompTIA",
      skills: "IT Support, Hardware, Networking, Troubleshooting",
    },
    {
      name: "Web & Mobile Development Certificate",
      issuer: "New Horizons Training Centre",
      skills: "HTML, CSS, JavaScript, Mobile Development",
    },
    {
      name: "Cybersecurity Fundamentals Certificate",
      issuer: "New Horizons Training Centre",
      skills: "Cybersecurity, Risk Management, Threat Analysis",
    },
  ];

  const softSkills = [
    {
      skill: "Problem Solving",
      description: "Analytical approach to complex technical challenges",
    },
    {
      skill: "Communication",
      description: "Clear technical and non-technical communication",
    },
    {
      skill: "Team Collaboration",
      description: "Effective work in cross-functional teams",
    },
    {
      skill: "Adaptability",
      description: "Quick learning of new technologies and methodologies",
    },
    {
      skill: "Time Management",
      description: "Efficient project delivery within deadlines",
    },
    {
      skill: "Critical Thinking",
      description: "Analytical evaluation of solutions and approaches",
    },
  ];

  const resumeHighlights = [
    {
      title: "Frontend Engineering",
      description:
        "Building modern, accessible, and performant interfaces with React, TypeScript, Next.js, and Tailwind CSS.",
      icon: <Code className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "Full-Stack Development",
      description:
        "Hands-on experience with Node.js, Express.js, Prisma, and PostgreSQL to build and connect REST APIs end to end.",
      icon: <Cpu className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "Performance & Accessibility",
      description:
        "Improving Lighthouse scores, reducing bundle size, and meeting WCAG 2.1 AA standards on production applications.",
      icon: <Palette className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "Quality & Collaboration",
      description:
        "Testing with Jest, React Testing Library, and Cypress, reviewing pull requests, and mentoring junior developers.",
      icon: <Wrench className="h-8 w-8 text-brand-purple" />,
    },
  ];

  const tabContent = {
    skills: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg flex items-start backdrop-blur-md border border-white/10"
            >
              <div className="mr-4 bg-brand-purple/10 p-3 rounded-full">
                {highlight.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <SkillsSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="glass-panel p-6 rounded-lg backdrop-blur-md border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-1">{item.skill}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <GraduationCap className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <div className="text-lg mt-1">{edu.institution}</div>
                    <div className="text-muted-foreground mt-1">
                      {edu.field}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end text-right">
                <div className="px-3 py-1 rounded-full text-sm bg-brand-purple/10 text-brand-purple">
                  {edu.gpa}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {edu.location}
                </div>
              </div>
            </div>
            <div className="mt-4 pl-4 border-l-2 border-brand-purple/30">
              <h4 className="font-medium mb-2">Key Courses:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {edu.courses.map((course) => (
                  <li key={course} className="text-sm flex items-center">
                    <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <Briefcase className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="text-lg mt-1">{exp.company}</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                {exp.duration}
              </div>
            </div>
            <p className="text-muted-foreground mb-4 pl-0 md:pl-12">
              {exp.description}
            </p>
            <div className="pl-0 md:pl-12">
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),

    certifications: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex items-start">
              <div className="bg-brand-purple/10 p-2 rounded-full mr-4 flex-shrink-0">
                <Award className="h-5 w-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <div className="text-sm text-muted-foreground mb-2">
                  {cert.issuer}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {cert.skills.split(", ").map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-secondary inline-block rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4 backdrop-blur-sm border border-brand-purple/20">
              Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <AnimatedText text="Professional Experience" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Frontend-focused Full-Stack JavaScript Developer with
                experience building production applications in banking and
                commercial settings, from component-driven React interfaces
                to the Node.js APIs behind them.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <PrintableResume />
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  id: "skills",
                  icon: <Code className="h-5 w-5" />,
                  label: "Skills",
                },
                {
                  id: "education",
                  icon: <GraduationCap className="h-5 w-5" />,
                  label: "Education",
                },
                {
                  id: "experience",
                  icon: <Briefcase className="h-5 w-5" />,
                  label: "Experience",
                },
                {
                  id: "certifications",
                  icon: <Award className="h-5 w-5" />,
                  label: "Certifications",
                },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors backdrop-blur-sm border ${
                    activeTab === tab.id
                      ? "bg-brand-purple text-white border-brand-purple/50"
                      : "bg-secondary/20 text-muted-foreground hover:bg-secondary/40 border-white/10"
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
