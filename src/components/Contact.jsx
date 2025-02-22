import React from "react";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import profile from "../assets/profile.png";

const Contact = () => {
  return (
    <div className="px-6 py-20 max-w-7xl mx-auto" id="contact">
      <div className="grid md:grid-cols-12 gap-8">
        {/* Profile Image Section */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 via-purple-400/50 to-blue-600/50 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative">
              <img
                src={profile}
                alt="Shreejan Bhattarai"
                className="w-full aspect-square rounded-2xl object-cover border-2 border-purple-500/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 flex gap-3">
                  <a
                    href="https://github.com/Shreey001"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    <AiFillGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shreejan-bhattarai"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    <AiFillLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
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
                { number: "11+", label: "Projects" },
                { number: "5+", label: "Years" },
                { number: "30+", label: "Clients" },
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
        >
          <form className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/10">
            <motion.h3
              className="text-2xl font-semibold text-white mb-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Let's Connect <span className="text-purple-400">✨</span>
            </motion.h3>

            <div className="space-y-5">
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
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
