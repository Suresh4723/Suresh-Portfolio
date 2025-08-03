// src/App.js
import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import MyEducation from "./sections/MyEducation";
import MySkills from "./sections/MySkills";
import Projects from "./sections/MyProjects";
import ContactMe from "./sections/ContactMe";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      <Navbar />
      <Hero />
      <AboutMe />
      <MyEducation />
      <MySkills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
