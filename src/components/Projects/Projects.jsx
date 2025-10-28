import "./Projects.css";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import oxygonImg from "./../../assets/projects-images/oxygon.png";

const itemVariants = {
  hidden: { opacity: 0, scale: 0, y: 6 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    y: 6,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const projects = [
  {
    title: "Portfolio Website",
    category: "Web Design",
    year: 2024,
    description:
      "A modern, responsive personal portfolio showcasing professional skills and projects.",
    stack: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "CRM System",
    category: "Full-Stack",
    year: 2023,
    description:
      "Built a custom Customer Relationship Management system for internal team use.",
    stack: ["Node.js (Express)", "MongoDB", "Vue.js"],
  },
  {
    title: "Company Landing Page",
    category: "CMS",
    year: 2022,
    description:
      "Designed and developed a high-conversion landing page for a new product launch.",
    stack: ["Webflow", "HTML", "CSS"],
  },
  {
    title: "WordPress Store",
    category: "CMS",
    year: 2021,
    description:
      "E-commerce setup using WordPress for a small retail client, including payment integration.",
    stack: ["WordPress", "WooCommerce", "PHP"],
  },
];

function Projects() {
  const [activeCategory, setCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  console.log(categories);

  const counts = categories.reduce((acc, category) => {
    acc[category] =
      category === "All"
        ? projects.length
        : projects.filter((p) => p.category === category).length;

    return acc;
  }, {});

  const visibleProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="projects">
      <div className="row-1">
        <div className="column-1">
          <h2>My Work</h2>
          <p>
            I created and deployed web applications and websites that are both
            functional and responsive.
            <br />
            <br />
            Check my projects below
          </p>
        </div>
        <div className="column-2">
          <div className="phone-container">
            <div className="floating-phone"></div>
          </div>
        </div>
      </div>
      <div className="row-2 projects-container">
        <div className="tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab ${activeCategory === category ? "active" : ""}`}
              onClick={() => {
                setCategory(category);
              }}
            >
              //
              <span className="project-count">{counts[category]}</span>{" "}
              {category}{" "}
            </button>
          ))}
        </div>

        <motion.div className="grid-container" layout>
          <AnimatePresence mode="wait" initial={false}>
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className="project-item"
                layout
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ delay: i * 0.06 }}
              >
                <div className="project-img">
                  <img src={oxygonImg} alt={project.title} />
                </div>
                <div className="project-details">
                  <p className="project-title"> {project.title}</p>
                  <p className="project-category"> {project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
