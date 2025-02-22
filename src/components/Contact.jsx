import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import profile from "../assets/profile.png";

const Contact = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#contact") {
        setIsHighlighted(true);
        setTimeout(() => setIsHighlighted(false), 2000);
      }
    };

    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="px-6 py-20 max-w-7xl mx-auto" id="contact">
      <div className="grid md:grid-cols-12 gap-8">
        {/* Profile Image Section */}
        <motion.div
          className="md:col-span-3 w-[180px] md:w-auto mx-auto md:mx-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 via-purple-400/50 to-blue-600/50 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative">
              <img
                src={profile}
                alt="Shreejan Bhattarai"
                className="w-[180px] md:w-full aspect-square rounded-2xl object-cover border-2 border-purple-500/20"
              />
            </div>
          </div>

          {/* Email Section */}
          <motion.a
            href="mailto:shreejanid123@gmail.com"
            className="mt-6 mb-4 flex items-center justify-center gap-3 px-4 py-2.5 
              rounded-xl bg-purple-500/10 text-purple-400 
              hover:bg-[#EA4335]/10 hover:text-[#EA4335] 
              transition-all duration-300 group border 
              border-purple-500/10 hover:border-[#EA4335]/20"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <AiOutlineMail className="text-xl" />
            <span className="text-sm font-medium text-white">
              shreejanid123@gmail.com
            </span>
          </motion.a>

          {/* Social Links - New Design */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              {
                icon: AiFillGithub,
                href: "https://github.com/Shreey001",
                color: "hover:text-[white] hover:bg-[white]/10",
                label: "GitHub",
              },
              {
                icon: AiFillLinkedin,
                href: "https://www.linkedin.com/in/shreejan-bhattarai",
                color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10",
                label: "LinkedIn",
              },
              {
                icon: AiOutlineTwitter,
                href: "https://x.com/shreeyjan001",
                color: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10",
                label: "Twitter",
              },
              {
                icon: AiFillInstagram,
                href: "https://www.instagram.com/i_am_shreey001",
                color: "hover:text-[#E4405F] hover:bg-[#E4405F]/10",
                label: "Instagram",
              },
              {
                icon: AiFillYoutube,
                href: "https://www.youtube.com/@shreey2926",
                color: "hover:text-[#FF0000] hover:bg-[#FF0000]/10",
                label: "YouTube",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`relative group flex items-center justify-center w-10 h-10 
                  rounded-full bg-purple-500/10 text-purple-400 
                  transition-all duration-300 ${social.color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.1,
                  y: social.label === "Email" ? -3 : 0,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: index * 0.1 }}
                title={`${social.label}${
                  social.label === "Email" ? `: ${social.email}` : ""
                }`}
              >
                <social.icon className="text-xl" />
                <span
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                    whitespace-nowrap text-xs text-gray-400 opacity-0 
                    group-hover:opacity-100 transition-opacity"
                >
                  {social.label === "Email" ? social.email : social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-full flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <motion.h3
                  className="text-3xl font-semibold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  About <span className="text-purple-400">Me</span>
                </motion.h3>
                <motion.div
                  className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ delay: 0.5 }}
                />
              </div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gray-300 leading-relaxed">
                  Hey there! I'm Shreejan, a passionate Full Stack Developer
                  with a creative edge in UI/UX design. With 2+ years of
                  hands-on experience, Ilove the art of crafting seamless
                  digital experiences that not only look stunning but also
                  deliver exceptional performance.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="grid grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { number: "7+", label: "Projects" },
                { number: "2+", label: "Years" },
                { number: "10+", label: "Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gray-800/40 p-4 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <h4 className="text-2xl font-bold text-white">
                    {stat.number}
                  </h4>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="md:col-span-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onViewportEnter={() => {
            setIsHighlighted(true);
            setTimeout(() => setIsHighlighted(false), 2000);
          }}
        >
          <motion.form
            className={`relative bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border 
              transition-all duration-500 ${
                isHighlighted
                  ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
                  : "border-purple-500/10"
              }`}
          >
            <motion.div
              className={`absolute inset-0 bg-purple-500/5 rounded-2xl backdrop-blur-sm
                transition-opacity duration-500 pointer-events-none ${
                  isHighlighted ? "opacity-100" : "opacity-0"
                }`}
            />

            <motion.h3
              className="relative text-2xl font-semibold text-white mb-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Let's Connect <span className="text-purple-400">✨</span>
            </motion.h3>

            <div className="relative space-y-5">
              {[
                {
                  icon: FiUser,
                  placeholder: "Your Name",
                  type: "text",
                  name: "name",
                },
                {
                  icon: FiMail,
                  placeholder: "Your Email",
                  type: "email",
                  name: "email",
                },
                {
                  icon: FiMessageSquare,
                  placeholder: "Your Message",
                  type: "textarea",
                  name: "message",
                },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <field.icon className="absolute left-4 top-3.5 text-purple-400/50" />
                  {field.type === "textarea" ? (
                    <textarea
                      placeholder={field.placeholder}
                      name={field.name}
                      rows="4"
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 rounded-xl border border-purple-500/20 focus:border-purple-500/50 outline-none text-gray-300 placeholder:text-gray-500"
                    />
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      name={field.name}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 rounded-xl border border-purple-500/20 focus:border-purple-500/50 outline-none text-gray-300 placeholder:text-gray-500"
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
