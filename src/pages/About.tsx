import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import {
  Code,
  GraduationCap,
  BookOpen,
  Coffee,
  User,
  Heart,
} from "lucide-react";
import InfoCard from "@/components/InfoCard";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Tailwind CSS",
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
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Know Who I Am" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                A frontend-focused Full-Stack JavaScript Developer building
                maintainable, performant web applications end to end.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.15)",
              }}
            >
              <div className="glass-panel h-full p-8 rounded-lg">
                <div className="relative w-full h-80 rounded-lg mb-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-blue-500/20"></div>
                  <img
                    src="/uploads/me.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6">
                <AnimatedText text="Who am I?" once />
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm{" "}
                  <motion.span
                    className="text-brand-purple font-semibold"
                    whileHover={{ color: "#8B5CF6" }}
                  >
                    Hart Joel
                  </motion.span>
                  , a frontend-focused Full-Stack JavaScript Developer
                  passionate about building intuitive, performant, and
                  maintainable web applications that solve real-world
                  problems.
                </p>
                <p>
                  My primary expertise lies in frontend engineering,
                  particularly building modern interfaces with React,
                  TypeScript, Next.js, and Tailwind CSS. I focus on
                  component-driven architecture, reusable UI systems,
                  efficient state management, API integration, and
                  delivering responsive experiences across devices.
                </p>
                <p>
                  Beyond the frontend, I have hands-on experience developing
                  backend services and integrating REST APIs using Node.js
                  and Express.js, working with relational databases such as
                  PostgreSQL, and implementing application features that
                  connect the entire software development lifecycle.
                </p>
                <p>
                  My professional experience includes contributing to
                  enterprise applications at LAPO Microfinance Bank and
                  independently developing commercial applications such as
                  Hart Mart, a multi-vendor e-commerce platform. I care about
                  writing clean code, making thoughtful engineering
                  decisions, optimizing application performance, and
                  building software that is easy to maintain and extend.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Professional Skills</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                These are the technologies and programming languages I've worked
                with and continue to develop expertise in.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.2)",
                    y: -5,
                  }}
                  className="glass-panel p-6 rounded-lg text-center"
                >
                  <motion.h3
                    className="font-semibold"
                    whileHover={{ color: "#9b87f5" }}
                  >
                    {skill}
                  </motion.h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">More About Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InfoCard icon={User} title="Personal Interests">
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Exploring new frontend technologies",
                    "Solving complex technical problems",
                    "Open-source contributions",
                    "Building side projects",
                  ].map((interest, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#9b87f5" }}
                    >
                      <Heart className="h-4 w-4 text-brand-purple mr-2" />
                      {interest}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard icon={Code} title="Coding Philosophy">
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Clean and maintainable code",
                    "Focus on user experience",
                    "Continuous learning and improvement",
                    "Building with scalability in mind",
                  ].map((philosophy, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#9b87f5" }}
                    >
                      <Coffee className="h-4 w-4 text-brand-purple mr-2" />
                      {philosophy}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard icon={GraduationCap} title="Technical Foundation">
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "B.Sc. Computer Science, Babcock University",
                    "Data structures and algorithms",
                    "Software development lifecycle",
                    "System design fundamentals",
                  ].map((journey, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#9b87f5" }}
                    >
                      <BookOpen className="h-4 w-4 text-brand-purple mr-2" />
                      {journey}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard icon={BookOpen} title="Professional Goals">
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Deepening frontend architecture expertise",
                    "Building impactful, scalable web applications",
                    "Contributing to open-source projects",
                    "Growing into senior frontend engineering roles",
                  ].map((goal, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#9b87f5" }}
                    >
                      <GraduationCap className="h-4 w-4 text-brand-purple mr-2" />
                      {goal}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
