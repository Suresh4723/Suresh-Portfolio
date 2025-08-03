import React from "react";

const educationData = [
  {
    title: "B.Tech in Information Technology",
    college: "JNTU-GV College of Engineering, Vizianagaram",
    duration: "2023 – 2026",
    description:
      "Currently pursuing a Bachelor's degree with a focus on full-stack web development, DevOps practices, and real-world software engineering projects.",
  },
  {
    title: "Diploma in Computer Engineering",
    college: "BVC Engineering College, Amalapuram",
    duration: "2020 – 2023",
    description:
      "Gained strong foundational knowledge in data structures, algorithms, networking, and database systems. Developed multiple academic and personal projects.",
  },
  {
    title: "Secondary School (SSC)",
    college: "ZPHS, Peddabrahmadevam",
    duration: "2019 – 2020",
    description:
      "Successfully completed secondary education with distinction, laying the academic groundwork for a future in technology.",
  },
];

const MyEducation = () => {
  return (
    <section
      id="education"
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 pb-10 px-6 md:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-blue-500 inline-block">
          My Education
        </h2>

        <div className="relative pl-8 border-l-4 border-blue-500 dark:border-blue-400">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              {/* Dot */}
              <div className="absolute -left-7 top-1.5 w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow"></div>

              <h3 className="text-2xl font-semibold mb-1">{edu.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                {edu.college} &nbsp;|&nbsp; {edu.duration}
              </p>
              <p className="mt-2 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyEducation;
