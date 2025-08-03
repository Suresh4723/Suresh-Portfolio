import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfileImage from '../assets/profile.JPG';

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Suresh_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-14 px-6 md:px-20 py-24
      bg-gradient-to-b from-[#e0f2fe] to-white dark:from-[#0f172a] dark:to-[#1e293b] text-gray-900 dark:text-white transition-all duration-300"
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-white leading-tight">
          Hi, I'm Suresh Gundumogula
        </h1>

        <p className="text-base md:text-lg font-medium text-gray-800 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
          Passionate <span className="text-blue-600 dark:text-blue-400">MERN Stack Developer</span> crafting full-stack applications. On a mission to master DevOps and become a future-ready engineer.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button
            onClick={downloadResume}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-medium"
          >
            Download Resume
          </button>
          <button
            onClick={scrollToContact}
            className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-2 rounded-full 
              hover:bg-blue-100 dark:hover:bg-white/10 transition duration-300 font-medium"
          >
            Contact Me
          </button>
        </div>

        {/* Updated icons */}
        <div className="flex gap-8 justify-center md:justify-start text-2xl mt-4 items-center">
          <a
            href="https://github.com/SureshGundumogula"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/suresh-gundumogula"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="rounded-full border-[6px] border-blue-600 p-1 shadow-[0_0_30px_#93c5fd] dark:shadow-[0_0_40px_#2563eb] transition-all duration-300">
          <img
            src={ProfileImage}
            alt="Suresh Gundumogula"
            className="w-80 h-80 object-cover rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
