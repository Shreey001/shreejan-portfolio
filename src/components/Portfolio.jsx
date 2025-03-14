import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineLink,
  AiOutlineArrowRight,
} from "react-icons/ai";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const projects = [
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
    img: project3,
    title: "Vistagram-Connect and Inspire",
    description:
      "A fullstack social media platform with user authentication, post creation, and real-time updates.",
    category: "Fullstack",
    links: {
      site: "https://vistagram.vercel.app",
      github: "https://github.com/Shreey001/vistagram",
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
    img: project6,
    title: "Personal Portfolio",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    category: "Frontend",
    links: {
      site: "https://portfolio-seo-nu.vercel.app/",
      github: "https://github.com/Shreey001/PortfolioSeo",
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
      className="min-h-screen w-full relative overflow-hidden bg-[#080808] py-20"
      id="portfolio"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10002b]/30 via-[#240046]/20 to-[#3c096c]/10"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-[#0a0a0a]/70 backdrop-blur-sm rounded-xl overflow-hidden 
                border border-gray-800 hover:border-purple-500/50 transition-all duration-300
                transform hover:-translate-y-1 cursor-pointer shadow-lg shadow-black/20
                h-[450px] md:h-[500px] w-full max-w-[340px] mx-auto md:max-w-none
                flex flex-col"
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
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
              </div>

              {/* Content container */}
              <div className="p-5 md:p-6 space-y-3 md:space-y-4 flex-grow flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 line-clamp-3">
                  {project.description}
                </p>

                {/* Category badge */}
                <div className="mt-1">
                  <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-purple-900/30 text-purple-300 border border-purple-800/30">
                    {project.category}
                  </span>
                </div>

                <div className="flex-grow"></div>

                {/* Links container */}
                <div className="flex items-center gap-3 pt-3 mt-auto border-t border-gray-800/50">
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm md:text-base px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20
                      hover:from-purple-600/40 hover:to-blue-600/40 text-purple-400 transition-colors
                      border border-purple-500/20 hover:border-purple-500/40 flex items-center gap-1"
                  >
                    <AiOutlineLink className="text-sm" /> Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm md:text-base px-3 py-1.5 rounded-full bg-[#0f0f0f]
                      hover:bg-[#161616] text-gray-300 transition-colors border border-gray-800
                      hover:border-gray-700 flex items-center gap-1"
                  >
                    <AiOutlineGithub className="text-sm" /> GitHub
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
