import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  LucideIcon,
  Layers,
  Plug,
  Gauge,
  Bug,
  PenTool,
  Smartphone,
} from "lucide-react";

type Skill = {
  name: string;
  category: string;
  color: string;
  bgColor: string;
  deviconClass?: string;
  icon?: LucideIcon;
};

const skills: Skill[] = [
  // Frontend Engineering
  { name: "JavaScript (ES6+)", category: "Frontend", color: "#F7DF1E", bgColor: "bg-yellow-500/20", deviconClass: "devicon-javascript-plain" },
  { name: "TypeScript", category: "Frontend", color: "#3178C6", bgColor: "bg-blue-500/20", deviconClass: "devicon-typescript-plain" },
  { name: "React", category: "Frontend", color: "#61DAFB", bgColor: "bg-cyan-500/20", deviconClass: "devicon-react-original" },
  { name: "Next.js", category: "Frontend", color: "#000000", bgColor: "bg-gray-900/20", deviconClass: "devicon-nextjs-original" },
  { name: "HTML5", category: "Frontend", color: "#E34F26", bgColor: "bg-red-500/20", deviconClass: "devicon-html5-plain" },
  { name: "CSS3", category: "Frontend", color: "#1572B6", bgColor: "bg-blue-600/20", deviconClass: "devicon-css3-plain" },
  { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", bgColor: "bg-cyan-500/20", deviconClass: "devicon-tailwindcss-plain" },
  { name: "shadcn/ui", category: "Frontend", color: "#9b87f5", bgColor: "bg-purple-500/20", icon: Layers },

  // State Management and Data Fetching
  { name: "Zustand", category: "State", color: "#FF8C00", bgColor: "bg-orange-500/20", icon: Layers },
  { name: "TanStack Query", category: "State", color: "#FF4154", bgColor: "bg-rose-500/20", icon: Plug },

  // Backend Development
  { name: "Node.js", category: "Backend", color: "#339933", bgColor: "bg-green-600/20", deviconClass: "devicon-nodejs-plain" },
  { name: "Express.js", category: "Backend", color: "#000000", bgColor: "bg-red-900/20", deviconClass: "devicon-express-original" },
  { name: "REST APIs", category: "Backend", color: "#9b87f5", bgColor: "bg-purple-500/20", icon: Plug },

  // Databases and ORM
  { name: "PostgreSQL", category: "Database", color: "#4479A1", bgColor: "bg-blue-500/20", deviconClass: "devicon-postgresql-plain" },
  { name: "Neon", category: "Database", color: "#00E599", bgColor: "bg-emerald-500/20", icon: Layers },
  { name: "Prisma ORM", category: "Database", color: "#2D3748", bgColor: "bg-slate-500/20", deviconClass: "devicon-prisma-original" },
  { name: "Firebase", category: "Database", color: "#F24E1E", bgColor: "bg-red-500/20", deviconClass: "devicon-firebase-plain" },

  // Development Tools
  { name: "Git", category: "Tool", color: "#F05032", bgColor: "bg-red-500/20", deviconClass: "devicon-git-plain" },
  { name: "GitHub", category: "Tool", color: "#181717", bgColor: "bg-gray-900/20", deviconClass: "devicon-github-original" },
  { name: "VS Code", category: "Tool", color: "#007ACC", bgColor: "bg-blue-900/20", deviconClass: "devicon-vscode-plain" },
  { name: "Chrome DevTools", category: "Tool", color: "#4285F4", bgColor: "bg-blue-500/20", deviconClass: "devicon-chrome-plain" },
  { name: "Figma", category: "Tool", color: "#F24E1E", bgColor: "bg-orange-500/20", deviconClass: "devicon-figma-plain" },

  // Engineering Practices
  { name: "Responsive Design", category: "Practice", color: "#06B6D4", bgColor: "bg-cyan-500/20", icon: Smartphone },
  { name: "Component Architecture", category: "Practice", color: "#61DAFB", bgColor: "bg-cyan-500/20", icon: Layers },
  { name: "Frontend Architecture", category: "Practice", color: "#9b87f5", bgColor: "bg-purple-500/20", icon: Layers },
  { name: "API Integration", category: "Practice", color: "#FF4154", bgColor: "bg-rose-500/20", icon: Plug },
  { name: "Performance Optimization", category: "Practice", color: "#F7DF1E", bgColor: "bg-yellow-500/20", icon: Gauge },
  { name: "Debugging", category: "Practice", color: "#4285F4", bgColor: "bg-blue-500/20", icon: Bug },
  { name: "UI/UX Implementation", category: "Practice", color: "#F24E1E", bgColor: "bg-orange-500/20", icon: PenTool },
];

const categories = [
  { id: "All", label: "All" },
  { id: "Frontend", label: "Frontend Engineering" },
  { id: "State", label: "State & Data Fetching" },
  { id: "Backend", label: "Backend" },
  { id: "Database", label: "Databases & ORM" },
  { id: "Tool", label: "Dev Tools" },
  { id: "Practice", label: "Engineering Practices" },
];

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="glass-panel p-8 rounded-xl backdrop-blur-md border border-white/10"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-semibold flex items-center text-white">
          <Code className="w-6 h-6 mr-3 text-brand-purple" />
          Technical Skills
        </h3>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
              activeFilter === category.id
                ? "bg-brand-purple text-white border-brand-purple/50"
                : "bg-gray-800/30 text-gray-300 border-white/10 hover:bg-gray-800/50 hover:border-brand-purple/30"
            }`}
          >
            {category.label}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6"
      >
        {filteredSkills.map((skill, index) => {
          const FallbackIcon = skill.icon ?? Code;
          return (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <motion.div
                className={`relative w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-brand-purple/50 transition-all duration-300`}
                whileHover={{
                  boxShadow: "0 10px 30px -5px rgba(155, 135, 245, 0.4)",
                }}
              >
                {skill.deviconClass ? (
                  <i
                    className={`${skill.deviconClass} text-3xl`}
                    style={{ color: skill.color }}
                  ></i>
                ) : (
                  <FallbackIcon
                    className="w-7 h-7"
                    style={{ color: skill.color }}
                  />
                )}

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.span
                className="text-xs font-medium mt-3 text-center text-gray-300 group-hover:text-white transition-colors max-w-20"
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No skills found in this category.</p>
        </div>
      )}
    </motion.div>
  );
};

export default SkillsSection;
