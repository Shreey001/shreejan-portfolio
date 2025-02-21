import React from "react";
import { motion } from "framer-motion";
import { BsBriefcase, BsCode, BsLaptop } from "react-icons/bs";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description:
      "Leading the frontend development team in building scalable web applications using React and Next.js. Implemented modern UI/UX practices and improved performance metrics by 40%.",
    icon: BsLaptop,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Performance Optimization",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description:
      "Developed and maintained full-stack applications using MERN stack. Led a team of 4 developers and successfully delivered 10+ projects.",
    icon: BsCode,
    skills: ["Node.js", "React", "MongoDB", "Express", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2018 - 2020",
    description:
      "Specialized in creating responsive and interactive web interfaces. Collaborated with designers to implement pixel-perfect designs.",
    icon: BsBriefcase,
    skills: ["JavaScript", "HTML/CSS", "React", "UI/UX", "Responsive Design"],
  },
];

const Experience = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20"
      id="experience"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-400/50 to-purple-500/50"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 border-2 border-gray-900"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                  } pl-10`}
                >
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/10 
                             hover:border-purple-500/30 transition-all duration-300 relative group"
                  >
                    {/* Icon */}
                    <div className="absolute -left-6 top-4 w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                      <experience.icon className="text-lg" />
                    </div>

                    {/* Content */}
                    <div className="ml-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-base font-semibold text-white">
                          {experience.title}
                        </h3>
                        <div className="h-1 w-1 rounded-full bg-purple-500/50"></div>
                        <p className="text-purple-400 text-sm">
                          {experience.company}
                        </p>
                      </div>

                      <p className="text-gray-400 text-xs mb-2">
                        {experience.period}
                      </p>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                        {experience.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5">
                        {experience.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: skillIndex * 0.1,
                            }}
                            className="px-2 py-0.5 bg-purple-500/5 text-purple-400 text-xs rounded-md border border-purple-500/10"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Gradient */}
                    <div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
