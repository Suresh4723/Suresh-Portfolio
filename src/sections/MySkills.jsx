import React from "react";
import {
  SiJavascript, SiPython, SiReact, SiNodedotjs, SiExpress, SiTailwindcss,
  SiGit, SiGithub, SiVercel, SiNetlify, SiNpm, SiMongodb, SiMysql
} from "react-icons/si";
import { FiServer, FiCode } from "react-icons/fi";

const skills = {
  "Programming Languages": [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <SiPython /> },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  Databases: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "npm", icon: <SiNpm /> },
  ],
  "Other Technical Skills": [
    { name: "REST APIs", icon: <FiServer /> },
    { name: "JWT", icon: <FiCode /> },
    { name: "VS Code", icon: <FiCode /> },
  ],
};

const MySkills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-1 px-6 md:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-blue-500 inline-block">
          My Skills
        </h2>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {skillList.map(({ name, icon }, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full text-sm font-medium shadow transition-all hover:scale-105"
                  >
                    <span className="text-lg">{icon}</span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
