import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4 md:py-6"
      } ${isScrolled ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={800}
              offset={0}
              onClick={() => {
                if (isOpen) setIsOpen(false);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer group"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold inline-flex items-center">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-['Orbitron'] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 transition-all duration-300"
                >
                  S
                </motion.span>
                <span className="font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 transition-all duration-300 -ml-1">
                  hreey
                </span>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-2 h-2 rounded-full bg-purple-500 ml-1 group-hover:animate-ping"
                />
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <HiX className="h-5 w-5" />
              ) : (
                <HiMenuAlt3 className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto" } : { height: 0 }}
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "mt-4" : "mt-0"
          }`}
        >
          <div className="py-2 space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
