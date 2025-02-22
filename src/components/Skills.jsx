import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiGit,
  SiDocker,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      technologies: [
        { name: "React.js", icon: SiReact, level: 90 },
        { name: "Next.js", icon: SiNextdotjs, level: 85 },
        { name: "JavaScript", icon: SiJavascript, level: 95 },
        { name: "TypeScript", icon: SiTypescript, level: 85 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      ],
    },
    {
      category: "Backend Development",
      technologies: [
        { name: "Node.js", icon: SiNodedotjs, level: 88 },
        { name: "Express.js", icon: SiExpress, level: 85 },
        { name: "MongoDB", icon: SiMongodb, level: 82 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
        { name: "Prisma", icon: SiPrisma, level: 85 },
      ],
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "Git", icon: SiGit, level: 88 },
        { name: "Docker", icon: SiDocker, level: 75 },
      ],
    },
  ];

  return (
    <div className="py-20 px-6" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-purple-500/10 
                hover:border-purple-500/30 transition-all duration-300
                w-full max-w-[300px] mx-auto md:max-w-none"
            >
              {/* Category Header */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                {skillCategory.category}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <div key={tech.name} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <tech.icon className="text-xl text-purple-400" />
                        <span className="text-gray-300">{tech.name}</span>
                      </div>
                      <span className="text-purple-400">{tech.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + techIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Progress */}
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-800">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Overall Proficiency</span>
                  <span className="text-purple-400">
                    {Math.round(
                      skillCategory.technologies.reduce(
                        (acc, curr) => acc + curr.level,
                        0
                      ) / skillCategory.technologies.length
                    )}
                    %
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Badges */}
        <motion.div
          className="mt-8 md:mt-16 flex flex-wrap justify-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {[
            "Problem Solving",
            "Clean Code",
            "Best Practices",
            "Performance Optimization",
            "Responsive Design",
          ].map((badge, index) => (
            <motion.div
              key={badge}
              className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-purple-500/10 border 
                border-purple-500/20 text-purple-400 text-xs md:text-sm"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
