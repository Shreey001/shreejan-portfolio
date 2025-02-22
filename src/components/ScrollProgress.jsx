import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Create a smooth spring animation for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear the previous timeout
      clearTimeout(timeoutId);
      
      // Set a new timeout to hide the bar after scrolling stops
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Hide after 1 second of no scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isScrolling ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-[9999]"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-purple-600 to-blue-500 origin-[0%]"
        style={{ scaleX }}
      />
    </motion.div>
  );
};

export default ScrollProgress;
