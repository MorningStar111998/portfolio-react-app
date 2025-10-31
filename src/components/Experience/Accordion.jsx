import "./Accordion.css";
import { useState } from "react";

import airlodLogo from "./../../assets/company-logos/airlod.png";
import webcinqLogo from "./../../assets/company-logos/webcinq.png";
import outlierLogo from "./../../assets/company-logos/outlier-ai.png";
import afrocodeverseLogo from "./../../assets/company-logos/afrocodeverse.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const experiences = [
  {
    name: "airlod",
    role: "Intern at Airlod",
    period: "2023 - 2024",
    logo: airlodLogo,
    description:
      "This is where I had my first real-world professional experience and learned the fundamentals of web development.",
    skills: ["WordPress", "JavaScript", "EJS", "PHP"],
    location: "Marrakech, Morocco",
    companyWebsite: "airlod.com",
  },
  {
    name: "webcinq",
    role: "Full Stack Developer at Webcinq",
    period: "2024 - 2025",
    logo: webcinqLogo,
    description:
      "At Webcinq, I worked on multiple client projects, primarily building WordPress websites. I successfully delivered over 12 fully functional sites, ranging from simple showcases to complex e-commerce platforms.",
    skills: ["WordPress", "Git", "PHP", "Laravel"],
    location: "Marrakech, Morocco",
    companyWebsite: "webcinq.ma",
  },
  {
    name: "outlier",
    role: "Freelancer at Outlier",
    period: "2024 - Present",
    logo: outlierLogo,
    description:
      "As a freelancer at Outlier, I contribute to training AI models across various fields including full-stack development, writing, and data annotation.",
    skills: ["WordPress", "JavaScript", "EJS", "PHP"],
    location: "San Francisco, USA (Remote)",
    companyWebsite: "outlier.ai",
  },
  {
    name: "AfroCodeVerse",
    role: "Freelancer Full Stack Developer",
    period: "2025 - Present",
    logo: afrocodeverseLogo,
    description:
      "Freelancing under AfroCodeVerse as a self-employed, I develop custom websites and web apps tailored to clients’ needs, focusing on functionality and modern design.",
    skills: ["React", "Laravel", "PHP", "Python", "WordPress"],
    location: "Marrakech, Morocco",
    companyWebsite: "",
  },
];

// Initialising a piece of state (openIndex), a value that React will keep track of
// Starting with null shows there is no accordion index open yet

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleAccordion(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="accordion">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`accordion-item ${openIndex === index ? "open" : ""}`}
        >
          <div
            className="accordion-header"
            onClick={() => {
              toggleAccordion(index);
            }}
          >
            <h3 className="job-role">{exp.role} </h3>
            <div>
              <p className="job-period">{exp.period} </p>

              <button
                role="button"
                aria-expanded={openIndex === index ? "true" : "false"}
                aria-controls={"accordion-item-" + index}
                className="accordion-button"
              ></button>
            </div>
          </div>

          <div className="accordion-description">
            <div>
              <div className="job-location">
                <span>
                  <FontAwesomeIcon className="icons" icon={faLocationDot} />{" "}
                  {exp.location}
                </span>
                {exp.companyWebsite === "" ? (
                  ""
                ) : (
                  <span>
                    <a href={exp.companyWebsite}>
                      <FontAwesomeIcon
                        className="icons"
                        icon={faArrowUpRightFromSquare}
                      />{" "}
                      {exp.companyWebsite}
                    </a>
                  </span>
                )}
              </div>
              <p className="job-description">{exp.description}</p>
              <div className="job-skills-container">
                {exp.skills.map((skill) => (
                  <span className="job-skill">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <img src={exp.logo} alt={exp.name} className={exp.name} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
