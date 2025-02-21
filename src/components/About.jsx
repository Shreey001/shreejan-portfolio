import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import profileImg from '../assets/profpic.png';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="relative">
              {/* Background blur effect */}
              <div className="absolute -inset-4 rounded-xl bg-purple-500/20 blur-xl group-hover:bg-purple-500/30 transition-colors duration-300" />
              
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full rounded-xl"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent opacity-60" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Hi, I'm Shreejan
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              A passionate Full Stack Developer with 5+ years of experience in building web applications. 
              I specialize in creating beautiful, functional, and user-friendly websites using modern technologies.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My journey in web development started with a curiosity to create interactive websites, 
              and since then, I've worked on numerous projects that have helped me grow both professionally and personally.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center p-4 rounded-xl bg-purple-500/10 backdrop-blur-sm">
                <h4 className="text-3xl font-bold text-purple-400 mb-2">5+</h4>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-purple-500/10 backdrop-blur-sm">
                <h4 className="text-3xl font-bold text-purple-400 mb-2">50+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg
                        hover:bg-purple-600 transition-colors duration-300"
            >
              Let's Talk
              <BsArrowRight className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
