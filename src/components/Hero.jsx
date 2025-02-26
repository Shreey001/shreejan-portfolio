import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import Lanyard from "./Lanyard";

// Colorful Text component from Aceternity UI
const ColourfulText = ({ text }) => {
  const colors = [
    "rgb(131, 179, 32)",
    "rgb(47, 195, 106)",
    "rgb(42, 169, 210)",
    "rgb(4, 112, 202)",
    "rgb(107, 10, 255)",
    "rgb(183, 0, 218)",
    "rgb(218, 0, 171)",
    "rgb(230, 64, 92)",
    "rgb(232, 98, 63)",
    "rgb(249, 129, 47)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight font-bold text-4xl sm:text-5xl md:text-7xl"
    >
      {char}
    </motion.span>
  ));
};

const Hero = () => {
  // For parallax scrolling effects
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Animation variants for heading
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterAnimation = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Social media links with branded colors
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Shreey001",
      icon: FaGithub,
      hoverColor: "hover:text-white",
      bgColor: "hover:bg-[#24292e]/10",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shreejan-bhattarai",
      icon: FaLinkedin,
      hoverColor: "hover:text-[#0A66C2]",
      bgColor: "hover:bg-[#0A66C2]/10",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/i_am_shreey001",
      icon: FaInstagram,
      hoverColor: "hover:text-[#E4405F]",
      bgColor: "hover:bg-[#E4405F]/10",
    },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#080808]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10002b]/30 via-[#240046]/20 to-[#3c096c]/10"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-2 md:gap-8 min-h-[75vh] md:min-h-screen items-center pt-4 md:pt-0">
          {/* Left side - Text content */}
          <motion.div
            className="lg:pr-8 flex flex-col justify-center z-10 order-2 lg:order-1 -mt-8 md:-mt-16 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Role badge - Redesigned */}
            <motion.div
              className="mb-2 md:mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="group relative inline-flex items-center">
                {/* Content container */}
                <div className="relative z-10 inline-flex items-center rounded-full py-1.5 px-5 bg-[#0a0a0a] backdrop-blur-md border border-purple-500/20">
                  {/* Gradient dot indicator */}
                  <motion.div
                    className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-2.5"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Type animation */}
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
                    className="text-gray-200 text-xl md:text-2xl tracking-wide"
                    wrapper="span"
                    cursor={true}
                  />
                </div>
              </div>
            </motion.div>

            {/* Main headline - Redesigned with staggered animation */}
            <div className="mb-2 md:mb-8">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col md:flex-row items-start md:items-center"
              >
                <motion.span
                  variants={letterAnimation}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white md:mr-2 mb-1 md:mb-3"
                >
                  Hey,
                </motion.span>

                <div className="flex items-center">
                  <motion.span
                    variants={letterAnimation}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mr-2"
                  >
                    I'm
                  </motion.span>

                  <div className="relative">
                    <motion.div
                      variants={letterAnimation}
                      className="inline-block ml-2 md:ml-4"
                    >
                      <ColourfulText text="Shreejan" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-gray-300 text-base md:text-xl mb-3 md:mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              A passionate fullstack developer crafting beautiful and functional
              digital experiences with over 2 years of expertise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 md:gap-5 mb-3 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600
                    text-white font-medium inline-block"
                  onClick={() => {
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
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10
                  text-gray-200 font-medium hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl text-gray-400 ${social.hoverColor} ${social.bgColor} transition-colors duration-300`}
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  title={social.name}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Lanyard component */}
          <motion.div
            className="min-h-[320px] md:min-h-[500px] relative z-0 lg:z-10 order-1 lg:order-2 -mx-4 sm:mx-0 -mt-6 md:-mt-4 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ y }}
          >
            <div className="scale-[0.9] md:scale-100 origin-center transform-gpu -mt-4 md:-mt-12 lg:mt-0">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#080808] to-transparent"></div>
    </div>
  );
};

export default Hero;
