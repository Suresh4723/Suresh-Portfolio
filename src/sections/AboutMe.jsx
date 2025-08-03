// src/sections/AboutMe.jsx
import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 md:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-blue-500 inline-block">
          About Me
        </h2>
        <div className="space-y-6 text-lg leading-8">
          <p>
            Hello! I’m{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Suresh Gundumogula
            </span>
            , a dedicated and enthusiastic{" "}
            <span className="font-medium">MERN Stack Developer</span> based in
            Vizianagaram. I specialize in building full-stack web applications
            using{" "}
            <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
          </p>
          <p>
            I’m passionate about transforming ideas into real-world digital
            solutions that are scalable, responsive, and user-friendly. I
            continuously explore new technologies and development practices to
            stay current and improve my craft.
          </p>
          <p>
            My mission is simple —{" "}
            <em>build with purpose, learn continuously, and code with clarity.</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
