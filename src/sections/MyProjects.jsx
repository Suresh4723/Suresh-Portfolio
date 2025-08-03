import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Developer Portfolio Website",
    description:
      "A personal portfolio built using React and Tailwind CSS to showcase my skills, projects, and experience.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.vercel.app",
  },
  {
    title: "Weather App",
    description:
      "A weather forecast app using OpenWeatherMap API, React hooks, and styled with custom CSS.",
    tech: ["React", "REST API", "CSS"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather-app.vercel.app",
  },
];

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="pt-16 pb-20 px-6 md:px-24 bg-gray-100 dark:bg-[#0f172a] text-gray-900 dark:text-white transition-all duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-blue-500 inline-block">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-transform hover:-translate-y-1 hover:shadow-xl duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
