import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { BookOpen } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      id: 1,
      institution: "Babcock University",
      degree: "Bachelor of Science (B.Sc)",
      field: "Computer Science",
      location: "Ogun State, Nigeria",
      cgpa: "Second Class Upper",
      details: [
        "Graduated with Second Class Upper Honours",
        "Key courses include Algorithms & Data Structures, Database Management Systems, System Design, and Web Development",
        "Built full-stack web applications as part of coursework and independent projects",
      ],
    },
    {
      id: 2,
      institution: "New Horizons Training Centre",
      degree: "Professional Training",
      field: "Information Technology",
      location: "Nigeria",
      cgpa: "Completed",
      details: [
        "Gained practical exposure to IT tools and software applications",
        "Introduced to programming fundamentals and computer systems",
        "Strengthened technical foundation for higher education in Computer Science",
      ],
    },
    {
      id: 3,
      institution: "Kings High School",
      degree: "Secondary School Certificate (SSCE)",
      field: "Science Stream",
      location: "Nigeria",
      cgpa: "Completed",
      details: [
        "Core subjects included Mathematics, Physics, Chemistry, and Computer Science",
        "Developed a strong foundation in scientific and analytical thinking",
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "CompTIA IT Fundamentals (ITF+)",
      issuer: "CompTIA",
      description:
        "Introduction to IT concepts including infrastructure, software development, security, and database fundamentals.",
    },
    {
      id: 2,
      name: "CompTIA A+ (Parts 1 & 2)",
      issuer: "CompTIA",
      description:
        "Comprehensive certification covering hardware, networking, troubleshooting, operating systems, and IT support best practices.",
    },
    {
      id: 3,
      name: "Web & Mobile Development Certificate",
      issuer: "New Horizons Training Centre",
      description:
        "Practical training in building modern websites and mobile applications, focusing on design, interactivity, and deployment.",
    },
    {
      id: 4,
      name: "Cybersecurity Fundamentals Certificate",
      issuer: "New Horizons Training Centre",
      description:
        "Introduction to cybersecurity principles including risk management, network security, and data protection.",
    },
  ];

  const courseHighlights = [
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Development (HTML, CSS, JavaScript, React.js, Next.js)",
    "Software Engineering Principles",
    "Compiler Construction",
    "Human-Computer Interaction (UI/UX Design)",
    "Cybersecurity Fundamentals",
    "Cloud Computing Concepts",
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Academics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Educational Background" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                My academic journey, courses, and educational achievements that
                have shaped my technical expertise.
              </p>
            </div>
          </motion.div>

          {/* Education Cards */}
          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  institution={edu.institution}
                  degree={edu.degree}
                  field={edu.field}
                  location={edu.location}
                  cgpa={edu.cgpa}
                  details={edu.details}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Key Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{
              boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.1)",
            }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Key Courses
            </h2>

            <div className="glass-panel p-10 rounded-lg">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-teal-500/10 p-4 rounded-full">
                  <BookOpen className="h-8 w-8 text-teal-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseHighlights.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(155, 135, 245, 0.2)",
                      color: "#9b87f5",
                    }}
                    className="flex items-center p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="h-2 w-2 rounded-full bg-teal-400 mr-3" />
                    <span>{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={cert.id}
                  name={cert.name}
                  issuer={cert.issuer}
                  description={cert.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
