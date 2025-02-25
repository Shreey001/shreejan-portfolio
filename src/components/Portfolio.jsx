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
    category: "Frontend",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              onClick={() => window.open(project.links.site, "_blank")}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/10 
                hover:border-purple-500/30 transition-all duration-300
                transform hover:-translate-y-1 cursor-pointer
                h-[450px] md:h-[500px] w-full max-w-[340px] mx-auto md:max-w-none"
            >
              {/* Image container */}
              <div className="relative h-[200px] md:h-[250px] w-full overflow-hidden group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 
                    group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 flex items-center justify-center"
                ></div>
              </div>

              {/* Content container */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 line-clamp-3">
                  {project.description}
                </p>

                {/* Links container */}
                <div className="flex items-center gap-3 pt-2 md:pt-4">
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm md:text-base px-3 py-1.5 rounded-full bg-purple-500/20 
                      hover:bg-purple-500/30 text-purple-400 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm md:text-base px-3 py-1.5 rounded-full bg-gray-800 
                      hover:bg-gray-700 text-gray-300 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
