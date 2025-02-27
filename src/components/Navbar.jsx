import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events and section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check which section is in view
      const sections = ["home", "skills", "portfolio", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Special case for bottom of page (contact section)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveSection("contact");
      }
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-md"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={800}
            offset={0}
            className="cursor-pointer"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setActiveSection("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center bg-white/[0.03] rounded-full p-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={item.to === "home" ? 800 : 500}
                  offset={item.to === "home" ? 0 : -100}
                  onSetActive={() => setActiveSection(item.to)}
                  onClick={() => {
                    if (item.to === "home") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="relative px-5 py-2 text-sm font-medium transition-colors"
                >
                  <span
                    className={`relative z-10 ${
                      activeSection === item.to
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                  {activeSection === item.to && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-purple-500/20 rounded-full -z-0"
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden text-gray-400 hover:text-white"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenuAlt3 className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full mt-2 mx-4 p-4 rounded-2xl bg-black/80 backdrop-blur-lg border border-purple-500/10 shadow-xl md:hidden"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={item.to === "home" ? 0 : -100}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setActiveSection(item.to);
                      if (item.to === "home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      activeSection === item.to
                        ? "text-white bg-purple-500/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
