import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import FallingText from "./FallingText.jsx";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Shreey001",
      icon: FaGithub,
      color: "hover:text-white-500",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shreejan-bhattarai",
      icon: FaLinkedin,
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/i_am_shreey001",
      icon: FaInstagram,
      color: "hover:text-pink-500",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>

      <div className="max-w-[1200px] mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-12 order-2 md:order-1">
            <div className="inline-block text-center md:text-left w-full">
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Tech Consultant",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-purple-400 text-lg md:text-3xl font-medium"
                wrapper="span"
                cursor={true}
              />
            </div>

            <div className="flex flex-col gap-8 text-center md:text-left">
              <div className="h-[180px]">
                <FallingText
                  text="Hey, I'm Shreejan"
                  highlightWords={["Shreejan"]}
                  trigger="hover"
                  fontSize="4rem"
                  gravity={0.3}
                  mouseConstraintStiffness={0.4}
                  backgroundColor="transparent"
                  textColor="white"
                />
              </div>

              <p className="text-gray-300 text-lg md:text-xl max-w-[500px] mx-auto md:mx-0 leading-relaxed">
                A passionate fullstack developer crafting beautiful and
                functional digital experiences with over 2 years of expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start w-full">
              {/* Primary Action Buttons */}
              <div className="flex gap-3 w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 sm:flex-none"
                >
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer px-6 py-3 rounded-xl bg-purple-600
                      text-white font-medium hover:opacity-90 transition-opacity inline-block w-full text-center"
                    onClick={() => {
                      // Add hash to URL for persistent highlight
                      window.location.hash = "contact";
                    }}
                  >
                    Let's Connect
                  </Link>
                </motion.div>

                <motion.button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1GvMFnckrIWv-DJ_XbK6_5BudGP1tGlji/view",
                      "_blank"
                    )
                  }
                  className="px-6 py-3 rounded-xl border border-gray-400 
                    text-gray-300 font-medium hover:bg-purple-500/10 transition-all 
                    flex-1 sm:flex-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View CV
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 items-center justify-center sm:justify-start mt-4 sm:mt-0 sm:ml-4">
                <a
                  href="https://github.com/Shreey001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-300 hover:text-[white] transition-all duration-300"
                  title="GitHub"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/shreejan-bhattarai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-300 hover:text-[#0A66C2] transition-all duration-300"
                  title="LinkedIn"
                >
                  <AiOutlineLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/i_am_shreey001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-300 hover:text-[#E4405F] transition-all duration-300"
                  title="Instagram"
                >
                  <AiOutlineInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end items-center order-1 md:order-2 -mx-4 md:mx-0">
            {/* Animated background effects */}
            <div className="absolute w-full h-full">
              {/* Gradient orb */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-blue-500/30 to-purple-600/30 rounded-full filter blur-3xl animate-pulse-slow" />
            </div>

            {/* Floating animation wrapper */}
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Image container with shine effect */}
              <div className="relative group">
                {/* Dynamic gradient border */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-75"
                  animate={{
                    background: [
                      "linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246))",
                      "linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234))",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <img
                  src={profilepic}
                  alt="Shreejan's Profile"
                  className="relative z-10 w-[280px] sm:w-[320px] md:w-[400px] rounded-full border-4 border-white/10 
                           transition-transform duration-300 group-hover:scale-105"
                />

                {/* Shine effect */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent 
                              opacity-0 group-hover:opacity-100 rotate-180 transition-opacity duration-500"
                />
              </div>
            </motion.div>

            {/* Animated background circles */}
            <div className="absolute -inset-4 z-0">
              {/* Rotating circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute inset-0 border-2 border-purple-500/20 rounded-full
                              ${
                                i === 0
                                  ? "scale-100"
                                  : i === 1
                                  ? "scale-150"
                                  : "scale-200"
                              }`}
                    animate={{
                      rotate: [0, 360],
                      scale: [
                        i === 0 ? 1 : i === 1 ? 1.5 : 2,
                        i === 0 ? 1.2 : i === 1 ? 1.7 : 2.2,
                        i === 0 ? 1 : i === 1 ? 1.5 : 2,
                      ],
                    }}
                    transition={{
                      rotate: {
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    }}
                  />
                ))}
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.random() * 20 - 10, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
