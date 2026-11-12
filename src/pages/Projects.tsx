import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Github, ArrowRight, Store } from "lucide-react";

const stack = [
  "React",
  "TypeScript",
  "Zustand",
  "TanStack Query",
  "Node.js",
  "Express.js",
  "Prisma ORM",
  "Neon PostgreSQL",
  "Docker",
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Featured Project" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                A full-stack e-commerce marketplace built end to end, from
                frontend architecture to the API and database behind it.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              boxShadow: "0 25px 35px -10px rgba(155, 135, 245, 0.25)",
            }}
            className="glass-panel rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          >
            <div className="relative h-72 lg:h-full min-h-[320px] overflow-hidden">
              <div className="absolute top-4 left-4 bg-secondary/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center text-xs font-medium z-10">
                <Store className="w-4 h-4 mr-1.5" />
                Full-Stack E-commerce Marketplace
              </div>
              <img
                src="/projects/hart-mart.png"
                alt="Hart Mart multi-vendor e-commerce marketplace homepage"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Hart Mart
              </h2>
              <p className="text-muted-foreground mb-6">
                Hart Mart is a multi-vendor e-commerce marketplace that
                enables independent vendors to register, manage their
                stores, list products, and sell through a centralized
                platform. Customers can discover products, manage shopping
                carts, and place orders, while administrators oversee
                marketplace activity. The application combines a modern
                React and TypeScript frontend with a Node.js and Express
                backend, using PostgreSQL for persistent data storage.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {stack.map((tag) => (
                  <motion.span
                    key={tag}
                    className="text-xs py-1 px-3 bg-secondary rounded-full"
                    whileHover={{
                      backgroundColor: "rgba(155, 135, 245, 0.2)",
                      color: "#9b87f5",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <a
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors font-medium"
                  href="https://hart-mart-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="https://github.com/HartJoel/HartMart-frontend"
                  className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-1.5 h-4 w-4" />
                  Frontend Repo
                </a>
                <a
                  href="https://github.com/HartJoel/HartMart-backend"
                  className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-1.5 h-4 w-4" />
                  Backend Repo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
