import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaHeart, FaTimes } from "react-icons/fa";
import { format } from "date-fns";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [likes, setLikes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [visitorName, setVisitorName] = useState("");
  const [recentVisitors, setRecentVisitors] = useState([]);
  const [showVisitors, setShowVisitors] = useState(false);
  const [showVisitorTooltip, setShowVisitorTooltip] = useState(false);

  // Load likes, visitors and check if user has already liked
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/likes`);
        const data = await response.json();
        setLikes(data.likes);
        setRecentVisitors(data.visitors || []);

        // Check if user has already liked
        const userHasLiked =
          localStorage.getItem("hasLikedPortfolio") === "true";
        setHasLiked(userHasLiked);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLike = useCallback(() => {
    if (!isLiking && !hasLiked) {
      setIsLiking(true);
      setShowNameModal(true);
    }
  }, [isLiking, hasLiked]);

  const toggleVisitorTooltip = useCallback((e) => {
    e.stopPropagation();
    setShowVisitorTooltip((prev) => !prev);
  }, []);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowVisitorTooltip(false);
    };

    if (showVisitorTooltip) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showVisitorTooltip]);

  const handleNameSubmit = async (e) => {
    e?.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/likes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: visitorName || undefined }),
      });

      const data = await response.json();
      setLikes(data.likes);
      setRecentVisitors(data.visitors || []);
      setHasLiked(true);
      localStorage.setItem("hasLikedPortfolio", "true");
      setShowNameModal(false);

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
      setVisitorName("");
    }
  };

  const formatTimestamp = (timestamp) => {
    try {
      return format(new Date(timestamp), "MMM d, h:mm a");
    } catch (error) {
      return "";
    }
  };

  return (
    <>
      <AnimatePresence>
        {showNameModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={(e) =>
              e.target === e.currentTarget && setShowNameModal(false)
            }
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-gray-800/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl w-full max-w-md mx-auto border border-gray-700/50"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-100">
                  Thanks for the like! ✨
                </h3>
                <button
                  onClick={() => setShowNameModal(false)}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              <p className="text-gray-400 mb-4">
                Would you like to share your name? It will be displayed in the
                recent visitors list.
              </p>
              <form onSubmit={handleNameSubmit} className="space-y-4">
                <input
                  type="text"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="Your name (optional)"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700/50 text-gray-100 border border-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-500"
                />
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => handleNameSubmit()}
                    className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                  >
                    Skip
                  </button>
                  <button
                    type="submit"
                    disabled={!visitorName.trim()}
                    className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {showVisitors && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center z-[100] p-4 pt-10 sm:pt-20"
            onClick={(e) =>
              e.target === e.currentTarget && setShowVisitors(false)
            }
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-gray-800/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl w-full max-w-md mx-auto border border-gray-700/50 overflow-auto flex flex-col relative max-h-[calc(100vh-8rem)]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-100">
                  Recent Visitors
                </h3>
                <button
                  onClick={() => setShowVisitors(false)}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="space-y-3 overflow-y-auto custom-scrollbar flex-1">
                {recentVisitors.map((visitor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30 border border-gray-700/50"
                  >
                    <span className="text-2xl">{visitor.emoji}</span>
                    <div className="flex-1">
                      <p className="text-gray-200">{visitor.name}</p>
                      <p className="text-gray-500 text-sm">
                        {formatTimestamp(visitor.timestamp)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            {/* Left side - copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400 text-xs sm:text-sm order-3 md:order-1"
            >
              © {currentYear} Shreejan. All rights reserved.
            </motion.p>

            {/* Center - Made with React */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm order-2"
            >
              <span>Made with</span>
              <FaReact className="text-base sm:text-lg text-purple-400 animate-spin-slow" />
              <span>by</span>
              <span className="text-purple-400">shreey</span>
            </motion.div>

            {/* Right side - Like Counter */}
            <motion.div
              className="flex items-center gap-3 relative group order-1 md:order-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="relative">
                <div className="relative flex flex-col items-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={hasLiked ? "thanks" : "support"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -top-7 whitespace-nowrap text-xs sm:text-sm text-gray-400"
                    >
                      {hasLiked ? (
                        <span className="text-gray-200">Liked! 💜 thanks!</span>
                      ) : (
                        <span className="text-gray-200">
                          Support with a like ✨
                        </span>
                      )}
                    </motion.p>
                  </AnimatePresence>

                  <div className="flex items-center">
                    <motion.button
                      onClick={handleLike}
                      disabled={isLoading || hasLiked}
                      className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all ${
                        hasLiked
                          ? "bg-purple-900/50"
                          : "bg-purple-900/50 hover:bg-purple-800/50"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaHeart className="text-purple-400 text-base sm:text-lg" />
                      <span className="text-gray-200 text-sm sm:text-base font-medium">
                        {likes} Likes
                      </span>
                    </motion.button>

                    {/* Visitor Toggle Button (visible on all screen sizes) */}
                    {recentVisitors.length > 0 && (
                      <motion.button
                        onClick={toggleVisitorTooltip}
                        className="ml-2 px-2 py-1 rounded-md bg-gray-800/70 text-xs text-purple-400 hover:text-purple-300 hover:bg-gray-700/70 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {showVisitorTooltip ? "Hide" : "Visitors"}
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Visitors Preview Tooltip */}
                {recentVisitors.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`absolute bottom-full right-0 mb-2 w-48 sm:w-64 bg-gray-800/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-xl border border-gray-700/50 z-10 transition-all duration-200
                      ${
                        showVisitorTooltip
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-300">
                        Recent Visitors
                      </h4>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowVisitors(true);
                          setShowVisitorTooltip(false);
                        }}
                        className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-2">
                      {recentVisitors.slice(0, 3).map((visitor, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 text-xs sm:text-sm"
                        >
                          <span className="text-base sm:text-lg">
                            {visitor.emoji}
                          </span>
                          <span className="text-gray-300 text-xs sm:text-sm truncate max-w-[100px] sm:max-w-[150px]">
                            {visitor.name}
                          </span>
                          <span className="text-gray-500 text-xs ml-auto hidden sm:inline-block">
                            {formatTimestamp(visitor.timestamp)}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
