import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [likes, setLikes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  // Load likes and check if user has already liked
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/likes");
        const data = await response.json();
        setLikes(data.likes);

        // Check if user has already liked
        const userHasLiked =
          localStorage.getItem("hasLikedPortfolio") === "true";
        setHasLiked(userHasLiked);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching likes:", error);
        setIsLoading(false);
      }
    };

    fetchLikes();
  }, []);

  const handleLike = async () => {
    if (!isLiking && !hasLiked) {
      setIsLiking(true);
      try {
        const response = await fetch("http://localhost:3001/api/likes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setLikes(data.likes);
        setHasLiked(true);
        localStorage.setItem("hasLikedPortfolio", "true");

        // Add heart animation
        const heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);

        setTimeout(() => {
          document.body.removeChild(heart);
        }, 1000);
      } catch (error) {
        console.error("Error updating likes:", error);
      } finally {
        setIsLiking(false);
      }
    }
  };

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-sm"
          >
            © {currentYear} Shreejan. All rights reserved.
          </motion.p>

          {/* Center - Made with React */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>Made with</span>
            <FaReact className="text-lg text-purple-400 animate-spin-slow" />
            <span>by</span>
            <span className="text-purple-400">shreey</span>
          </motion.div>

          {/* Right side - Like Counter */}
          <motion.div
            className="flex items-center gap-3 relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.button
              onClick={handleLike}
              whileHover={{
                scale: isLoading || isLiking || hasLiked ? 1 : 1.1,
              }}
              whileTap={{ scale: isLoading || isLiking || hasLiked ? 1 : 0.9 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full 
                ${
                  isLoading || isLiking || hasLiked
                    ? "bg-purple-500/10 cursor-not-allowed"
                    : "bg-purple-500/20 hover:bg-purple-500/30 cursor-pointer"
                } 
                transition-all duration-300`}
              disabled={isLoading || isLiking || hasLiked}
            >
              <motion.div
                animate={
                  isLiking
                    ? {
                        scale: [1, 1.2, 1],
                        transition: { duration: 0.3 },
                      }
                    : {}
                }
              >
                <FaHeart
                  className={`text-lg ${
                    hasLiked ? "text-purple-500" : "text-purple-400"
                  }`}
                />
              </motion.div>
              <span className="text-gray-400 text-sm font-medium">
                {isLoading
                  ? "Loading..."
                  : `${likes} ${likes === 1 ? "Like" : "Likes"}`}
              </span>
            </motion.button>

            {/* Inspiring Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="relative">
                <span className="text-xs text-gray-400/80 tracking-wide font-light italic">
                  {hasLiked
                    ? "Thanks for your support! 💜"
                    : "Leave some love if my work inspires you ✨"}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent w-full"
                  animate={{
                    scaleX: [0, 1, 1, 0],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating heart animation styles */}
      <style>{`
        .floating-heart {
          position: fixed;
          font-size: 1.5rem;
          pointer-events: none;
          animation: float-up 1s ease-out forwards;
        }

        @keyframes float-up {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -100%) scale(1.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -200%) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
