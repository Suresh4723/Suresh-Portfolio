import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const sections = ["Home", "About", "Education", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const sectionOffsets = sections
        .map((section) => {
          const el = document.getElementById(section.toLowerCase());
          return el ? { id: section, offset: el.offsetTop } : null;
        })
        .filter(Boolean);

      const current = sectionOffsets.reverse().find((s) => y >= s.offset - 140);
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (section) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 dark:bg-gray-950/60 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4 md:py-5">
        <div
          onClick={() => scrollTo("Home")}
          className="font-black text-xl md:text-2xl text-indigo-600 dark:text-violet-400 cursor-pointer tracking-tight"
        >
          Suresh.dev
        </div>

        <nav className="hidden md:flex gap-8">
          {sections.map((section) => (
            <span
              key={section}
              onClick={() => scrollTo(section)}
              className={`relative cursor-pointer text-base font-semibold transition-all duration-300 ease-in-out ${
                activeSection === section
                  ? "text-indigo-600 dark:text-violet-400 drop-shadow-[0_0_4px_rgba(139,92,246,0.6)]"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-violet-300"
              }`}
            >
              {section}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full transition-transform duration-300 transform scale-x-0 origin-left ${
                  activeSection === section ? "scale-x-100 bg-indigo-500 dark:bg-violet-400" : ""
                }`}
              ></span>
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-violet-300 transition"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 text-3xl cursor-pointer"
          >
            {menuOpen ? "✕" : "☰"}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-5">
          <ul className="flex flex-col gap-4 text-lg text-gray-700 dark:text-gray-300">
            {sections.map((section) => (
              <li
                key={section}
                onClick={() => scrollTo(section)}
                className={`cursor-pointer ${
                  activeSection === section
                    ? "text-indigo-600 dark:text-violet-400 font-semibold"
                    : "hover:text-indigo-500 dark:hover:text-violet-300"
                }`}
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
