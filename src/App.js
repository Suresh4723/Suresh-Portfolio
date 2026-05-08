import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import profileImage from "./assets/profile.JPG";

const experiences = [
  {
    role: "MERN Stack Intern",
    company: "UptoSkills (Virtual)",
    period: "May 2025 – July 2025",
    points: [
      "Engineered responsive React components and integrated them with backend REST APIs for HRMS Social Connect, a MERN-based networking platform.",
      "Developed and optimized backend APIs utilizing Node.js, Express.js, and MongoDB to enhance platform functionality and secure data flow.",
    ],
  },
];

const projects = [
  {
    title: "RepoGPT — Code Intelligence RAG System",
    description:
      "Repository-level AI assistant capable of indexing GitHub repositories and answering natural language questions using semantic retrieval and reranking pipelines.",
    metrics: [
      "75% Retrieval Accuracy",
      "12 Languages Supported",
      "Top-3 Reranking Precision",
    ],
    highlights: [
      "Cross-Encoder reranking pipeline",
      "ChromaDB vector retrieval",
      "Multi-language code chunking",
      "FastAPI inference backend",
    ],
    tech: ["Python", "FastAPI", "LangChain", "ChromaDB", "React"],
    github: "https://github.com/Suresh4723/Repo-GPT",
    live: null,
  },
  {
    title: "Mirror Chess — Personalized Chess AI",
    description:
      "CNN-based chess AI trained on personal gameplay data with hybrid Minimax inference and tactical validation.",
    metrics: [
      "8,000+ Training Games",
      "CNN Policy Network",
      "Alpha-Beta Pruning",
    ],
    highlights: [
      "CNN move prediction",
      "Minimax + Alpha-Beta pruning",
      "FastAPI low-latency backend",
      "Real-time gameplay",
    ],
    tech: ["PyTorch", "Python", "FastAPI", "React"],
    github: "https://github.com/Suresh4723/Mirror-Chess",
    live: "https://mirror-chess.vercel.app/",
  },
  {
    title: "F1 Strategy Simulator",
    description:
      "Machine learning-powered race strategy simulator for lap prediction and pit-stop optimization across full race distances.",
    metrics: [
      "0.5s MAE Lap Prediction",
      "Event-Aware ML Models",
      "Full Race Simulation",
    ],
    highlights: [
      "Tyre degradation modelling",
      "Fuel load & stint features",
      "Safety Car condition handling",
      "Interactive strategy dashboard",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "FastAPI", "React"],
    github: "https://github.com/Suresh4723/F1-Strategy-Simulator",
    live: "https://f1-strategy-simulator-gs.vercel.app",
  },
];

const skillCategories = [
  {
    category: "AI & ML",
    skills: [
      "LangChain",
      "RAG",
      "Semantic Search",
      "Vector Databases",
      "PyTorch",
      "Scikit-learn",
      "CNNs",
      "Cross-Encoder Reranking",
    ],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "Python"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Databases & Tools",
    skills: ["ChromaDB", "MongoDB", "MySQL", "Git", "Postman", "Vercel"],
  },
];

const focusAreas = [
  {
    icon: "🔍",
    title: "RAG & Retrieval Systems",
    description:
      "Building semantic search pipelines with vector databases, embeddings, and cross-encoder reranking.",
  },
  {
    icon: "🧠",
    title: "ML Model Development",
    description:
      "Training task-specific models including CNNs and regression pipelines on real-world datasets.",
  },
  {
    icon: "⚡",
    title: "Full-Stack AI Apps",
    description:
      "Deploying end-to-end applications with FastAPI backends and React frontends for real inference.",
  },
  {
    icon: "🗄️",
    title: "Vector & Data Systems",
    description:
      "Working with ChromaDB, MongoDB, and feature engineering pipelines to power AI applications.",
  },
];

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">SG.ai</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>
        <a href="/resume.pdf" download className="nav-resume-btn">
          Resume
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-tag">AI Engineer | RAG Systems | Applied ML</p>

          <h1>
            Suresh
            <br />
            <span className="hero-name-accent">Gundumogula</span>
          </h1>

          <p className="hero-description">
            Building intelligent systems using Retrieval-Augmented Generation
            (RAG), semantic search, machine learning, and scalable backend
            architectures.
          </p>

          <div className="core-stack">
            <span>FastAPI</span>
            <span>LangChain</span>
            <span>ChromaDB</span>
            <span>PyTorch</span>
            <span>React</span>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects <FaArrowRight />
            </a>
            <a href="/resume.pdf" download className="secondary-btn">
              Download Resume
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/Suresh4723"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/suresh-gundumogula/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:sureshgundumogula7@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-wrapper">
            <img src={profileImage} alt="Suresh Gundumogula" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <p className="section-tag">About Me</p>
        <h2>
          Engineering intelligent systems
          <br />
          with modern AI technologies.
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm an AI Engineer focused on building intelligent applications
              powered by LLMs, semantic retrieval, machine learning, and
              scalable backend systems.
            </p>
            <p>
              My work combines AI engineering with full-stack development to
              create real-world systems such as repository-level RAG pipelines,
              personalized AI models, and predictive simulation platforms.
            </p>
            <p>
              I enjoy designing production-oriented architectures involving
              FastAPI, LangChain, vector databases, React frontends, and modern
              inference pipelines.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <div className="focus-card" key={index}>
                <div className="focus-icon">{area.icon}</div>
                <h4>{area.title}</h4>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="skills">
        <p className="section-tag">Technical Expertise</p>
        <h2>AI Engineering Stack</h2>

        <div className="skill-categories">
          {skillCategories.map((cat, index) => (
            <div className="skill-category" key={index}>
              <h4 className="category-label">{cat.category}</h4>
              <div className="skills-grid">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience" id="experience">
        <p className="section-tag">Work Experience</p>
        <h2>Professional Background</h2>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="exp-header">
                <div className="exp-left">
                  <h3>{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <ul className="exp-points">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <p className="section-tag">Featured Projects</p>
        <h2>AI Systems & Applications</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="metrics-row">
                {project.metrics.map((metric, idx) => (
                  <span key={idx} className="metric-pill">
                    {metric}
                  </span>
                ))}
              </div>

              <ul>
                {project.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>

              <div className="project-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FaGithub /> View on GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="education" id="education">
        <p className="section-tag">Education</p>
        <h2>Academic Background</h2>

        <div className="education-list">
          <div className="education-card">
            <div className="edu-header">
              <div>
                <h3>B.Tech in Information Technology</h3>
                <p>JNTU-GV College of Engineering, Vizianagaram</p>
              </div>
              <span>2023 – 2026</span>
            </div>
          </div>

          <div className="education-card">
            <div className="edu-header">
              <div>
                <h3>Diploma in Computer Engineering</h3>
                <p>BVC Engineering College, Amalapuram</p>
              </div>
              <span>2020 – 2023</span>
            </div>
          </div>

          <div className="education-card">
            <div className="edu-header">
              <div>
                <h3>Secondary School Education (SSC)</h3>
                <p>ZPHS, I. Polavaram</p>
              </div>
              <span>2019 – 2020</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">SG.ai</div>
          <p>© 2026 Suresh Gundumogula — Building Intelligent AI Systems</p>
          <div className="footer-links">
            <a
              href="https://github.com/Suresh4723"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/suresh-gundumogula/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:sureshgundumogula7@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;