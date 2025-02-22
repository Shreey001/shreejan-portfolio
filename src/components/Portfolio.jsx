import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineLink,
  AiOutlineArrowRight,
} from "react-icons/ai";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const projects = [
  {
    img: project1,
    title: "Social Media Clone",
    description:
      "A facebook like frontend clone with theme and color change feature and responsive design.",
    category: "Frontend",
    links: {
      site: "https://socialmediaclone-one.vercel.app/",
      github: "https://github.com/Shreey001/socialmediaclone",
    },
  },
  {
    img: project2,
    title: "Trendify-Fashion E-Commerce Platform",
    description:
      "Full-stack Fashion clothing e-commerce solution with user authentication, payment processing, and order management.",
    category: "Fullstack",
    links: {
      site: "https://trendify-frontend-dusky.vercel.app/",
      github: "https://github.com/Shreey001/Trendify-Fashion-Ecommerce-Site",
    },
  },
  {
    img: project4,
    title: "E-Tea-Nepal-a multi-vendor Tea selling website",
    description:
      "A fullstack tea buying and selling  website with buyer,seller and admin with order management and payment integration  .",
    category: "Fullstack",
    links: {
      site: "https://e-tea-nepal.vercel.app/",
      github: "https://github.com/Shreey001/eTeaNepal",
    },
  },
  {
    img: project5,
    title: "Quiz App",
    description:
      "Quiz app with 10 question to test your knowledge and score at last using html,css and javascript  ",
    category: "Mobile",
    links: {
      site: "https://quizapp-pink-mu.vercel.app/",
      github: "https://github.com/Shreey001/quizapp",
    },
  },
  // {
  //   img: project6,
  //   title: "Data Analytics Dashboard",
  //   description:
  //     "Interactive dashboard for visualizing and analyzing complex datasets with customizable charts.",
  //   category: "Frontend",
  //   links: {
  //     site: "#",
  //     github: "#",
  //   },
  // },
];

const categories = ["All", "Frontend", "Fullstack", "Mobile"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Explore some of my recent projects that showcase my expertise in
            full-stack development and creative problem-solving.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative group"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm h-full transform-gpu transition-all duration-300 border border-transparent hover:border-purple-500/30"
                  whileHover={{
                    boxShadow: "0 0 20px 2px rgba(147, 51, 234, 0.2)",
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                >
                  <motion.div
                    className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "rgba(147, 51, 234, 0.1)",
                      backdropFilter: "blur(8px)",
                    }}
                  />

                  <div className="relative z-10 rounded-xl h-full bg-gray-800/80 backdrop-blur-sm">
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      <motion.img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{
                          scale: 1.15,
                          transition: { duration: 0.4 },
                        }}
                      />
                    </div>

                    <div className="p-6 relative">
                      <motion.h3
                        className="text-xl font-semibold text-gray-100 mb-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>

                      <motion.p
                        className="text-gray-400 text-sm mb-4"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {project.description}
                      </motion.p>

                      <div className="flex items-center gap-4 mt-4">
                        <motion.a
                          href={project.links.site}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                          whileHover={{
                            scale: 1.05,
                            x: 5,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <AiOutlineLink className="text-lg" />
                          <span className="text-sm">Live Demo</span>
                        </motion.a>
                        <motion.a
                          href={project.links.github}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                          whileHover={{
                            scale: 1.05,
                            x: 5,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <AiOutlineGithub className="text-lg" />
                          <span className="text-sm">Source</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent, rgba(168, 85, 247, 0.4), transparent)",
                      backgroundSize: "200% 200%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
