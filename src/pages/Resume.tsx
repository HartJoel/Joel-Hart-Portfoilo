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
      duration: "2021 - 2025",
      gpa: "3.98",
      location: "Ogun State, Nigeria",
    },
    {
      institution: "3 New Horizon Training Centre",
      degree: "Professional Training",
      field: "Information Technology",
      duration: "2019 - 2020",
      gpa: "Completed",
      location: "Nigeria",
    },
    {
      institution: "Kings High School",
      degree: "Secondary School Certificate (SSCE)",
      field: "Science Stream",
      duration: "-",
      gpa: "Completed",
      location: "Nigeria",
    },
  ];

  const experience = [
    {
      position: "Freelance Front-End Developer",
      company: "Self-employed",
      duration: "2023 - Present",
      description:
        "Building responsive and user-friendly web applications for clients and personal projects, with a focus on clean UI/UX and modern front-end technologies.",
      responsibilities: [
        "Developed websites and applications using React.js, Next.js, and Tailwind CSS",
        "Created responsive designs and interactive features for better user experience",
        "Managed client requirements, timelines, and deliverables",
        "Explored AI-powered solutions and integrations for web projects",
      ],
    },
    {
      position: "Junior Frontend Developer",
      company: "LAPO Microfinance Bank (SIWES)",
      duration: "Jan 2024 - December 2024",
      description:
        "Worked in the web development department, contributing to application development, testing, and IT support while collaborating with stakeholders.",
      responsibilities: [
        "Assisted in building and testing internal web applications",
        "Designed and implemented responsive front-end pages using React.js",
        "Participated in requirement gathering and stakeholder meetings",
        "Provided IT Help Desk support (user account management, password resets, and platform support)",
      ],
    },
    {
      position: "Open Source & Personal Projects",
      company: "GitHub / Personal",
      duration: "2022 - Present",
      description:
        "Contributing to open-source projects and developing personal applications to strengthen technical skills and explore new technologies.",
      responsibilities: [
        "Created and maintained portfolio projects such as an E-commerce platform, Travel website, and Lead Management System",
        "Practiced version control and collaboration using Git & GitHub",
        "Explored Node.js and Express.js for backend development",
        "Applied UI/UX design principles in projects using Figma",
      ],
    },
  ];

  const certifications = [
    {
      name: "CompTIA IT Fundamentals (ITF+)",
      issuer: "CompTIA",
      date: "2022",
      skills: "IT Concepts, Infrastructure, Applications, Security",
      credential: "CompTIA-ITF+-2022",
    },
    {
      name: "CompTIA A+ (Parts 1 & 2)",
      issuer: "CompTIA",
      date: "2022",
      skills: "IT Support, Hardware, Networking, Troubleshooting",
      credential: "CompTIA-A+-2022",
    },
    {
      name: "Web & Mobile Development Certificate",
      issuer: "New Horizons Training Centre",
      date: "2021",
      skills: "HTML, CSS, JavaScript, Mobile Development",
      credential: "NH-WMD-2021",
    },
    {
      name: "Cybersecurity Fundamentals Certificate",
      issuer: "New Horizons Training Centre",
      date: "2021",
      skills: "Cybersecurity, Risk Management, Threat Analysis",
      credential: "NH-CF-2021",
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
      title: "Frontend Developer",
      description:
        "Skilled in building modern, responsive, and interactive user interfaces with React.js, Next.js, and Tailwind CSS.",
      icon: <Code className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "JavaScript Enthusiast",
      description:
        "Strong foundation in JavaScript and its ecosystem, with experience in ES6+, DOM manipulation, and state management.",
      icon: <Cpu className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "UI/UX Design Knowledge",
      description:
        "Experience using Figma to design intuitive, user-friendly interfaces and applying UI/UX principles to development.",
      icon: <Palette className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "Problem Solver",
      description:
        "Hands-on experience debugging, testing, and optimizing applications for performance, scalability, and usability.",
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
                  {edu.duration}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {edu.location}
                </div>
              </div>
            </div>
            <div className="mt-4 pl-4 border-l-2 border-brand-purple/30">
              <h4 className="font-medium mb-2">Key Courses:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {edu.institution.includes("Presidency") ? (
                  <>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Artificial Intelligence & Machine Learning
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Data Structures & Algorithms
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Computer Vision Systems
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Web Development
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Database Management Systems
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Deep Learning
                    </li>
                  </>
                ) : (
                  <>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Physics
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Chemistry
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Mathematics
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Computer Science
                    </li>
                  </>
                )}
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
                  {cert.issuer} • {cert.date}
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
                {cert.credential && (
                  <div className="text-xs text-muted-foreground">
                    Credential ID: {cert.credential}
                  </div>
                )}
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
                I'm an aspiring developer specializing in web development. My
                goal is to leverage these technologies to create innovative
                solutions for real-world problems.
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
