import "./Projects.css";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

const projectImagesModules = import.meta.glob(
  "./../../assets/projects-images/*.{png,jpg,webp}",
  { eager: true }
);

const projectImages = Object.keys(projectImagesModules).reduce((acc, path) => {
  const filename = path.match(/([^/]+)\.(png|jpg|webp)$/i)[1];

  acc[filename] = projectImagesModules[path].default;

  return acc;
}, {});

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
    key: "portfolio", // New key
    title: "React Portfolio Website",
    category: "Web Design",
    year: 2025,
    description:
      "A modern, responsive personal portfolio showcasing professional skills and projects.",
    link: "coming-soon",
    stack: ["React", "Tailwind CSS", "Vite"],
  },
  {
    key: "crm", // New key
    title: "CRM System",
    category: "Full-Stack",
    year: 2023,
    description:
      "Built a custom Customer Relationship Management system for internal team use.",
    link: "coming-soon",

    stack: ["Laravel", "MySQL", "EJS (JavaScript)"],
  },
  {
    key: "zakcollection", // New key
    title: "Zak Collection E-commerce",
    category: "CMS",
    year: 2023,
    description:
      "E-commerce setup using WordPress for a small Moroccan slippers retail client, including payment integration.",
    link: "https://www.zakcollectioncop.com/",

    stack: ["WordPress", "WooCommerce", "PHP"],
  },
  {
    key: "zaktalal",
    title: "ZakTalal Landing Page",
    category: "CMS",
    year: 2023,
    description:
      "High-conversion landing page designed to support marketing efforts for the Zak Collection brand.",
    link: "https://www.zaktalal.com/",

    stack: ["WordPress", "Elementor", "HTML/CSS"],
  },
  {
    key: "webcinq",
    title: "WebCinq Agency Website",
    category: "CMS",
    year: 2022,
    description:
      "Development of the official website for the Web Development Company, focused on showcasing services and portfolio.",
    link: "http://webcinq.ma/",

    stack: ["WordPress", "Bootstrap", "Custom PHP"],
  },
  {
    key: "arih",
    title: "ARIH (Casablanca Hotel Industry Association)",
    category: "CMS",
    year: 2022,
    description:
      "Official website for the Regional Association of the Hotel Industry in Casablanca, serving members and providing resources.",
    link: "https://www.arihcs.ma/",

    stack: ["WordPress", "Custom Theme", "PHP"],
  },
  {
    key: "magmanagement",
    title: "Mag Management Consulting",
    category: "CMS",
    year: 2021,
    description:
      "Business website for a consulting company based in Marrakech, detailing services and contact information.",
    link: "https://magmanagementgroupe.com/",

    stack: ["WordPress", "Elementor", "CSS"],
  },
  {
    key: "islahtravaux",
    title: "Islah Travaux (Construction Company)",
    category: "CMS",
    year: 2021,
    description:
      "Website showcasing the services and past projects of a construction and public works company.",
    link: "https://www.islahtravaux.ma/",

    stack: ["WordPress", "Elementor", "Custom JS"],
  },
  {
    key: "oxygon",
    title: "Oxygon Gas Company",
    category: "CMS",
    year: 2021,
    description:
      "Corporate website for a gas company providing installations and maintenance services for medical facilities and hospitals.",
    link: "https://oxygon.ma/",

    stack: ["WordPress", "Custom Theme", "PHP"],
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
    <section id="projects" className="projects">
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
          <span style={{fontSize:"0.8rem"}}>Filter By :</span>
          {categories.map((category) => (
            <button
              key={category}
              className={`tab ${activeCategory === category ? "active" : ""}`}
              onClick={() => {
                setCategory(category);
              }}
            >
              /<span className="project-count">{counts[category]}</span>{" "}
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
                <div className="view-project">
                  <button>
                    <a target="_blank" href={project.link}>View Project</a>
                  </button>
                </div>
                <div className="project-im">
                  <img
                    src={projectImages[project.key] ?? projectImages["default"]}
                    alt={project.title}
                  />
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
