import "./Accordion.css";
import { useState } from "react";

import airlodLogo from "./../../assets/company-logos/airlod.png";
import webcinqLogo from "./../../assets/company-logos/webcinq.png";
import outlierLogo from "./../../assets/company-logos/outlier-ai.png";

const experiences = [
  {
    name: "airlod",
    role: "Intern at Airlod",
    period: "2023 - 2024",
    logo: airlodLogo,
    description:
      "C'est ici que j'ai fait mes permiers pas dans le monde professionel",
  },
  {
    name: "webcinq",
    role: "Full Stack Developer at Webcinq",
    period: "2024 - 2025",
    logo: webcinqLogo,
    description: "Avec plus de 1é sites WordPress fonctionnels délivrés, c",
  },
  {
    name: "outlier",
    role: "Freelancer at Outlier",
    period: "2024 - Present",
    logo: outlierLogo,
    description:
      "Avec plus de 12 sites WordPress fonctionnels délivrés, j'ai acquis la maitrise de WordPress, des simples sites vitrines aux sites E-Commerce ",
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
            <h3>{exp.role} </h3>
            <div>
              <p>{exp.period} </p>

              <button
                role="button"
                aria-expanded={openIndex === index ? "true" : "false"}
                aria-controls={"accordion-item-" + index}
                className="accordion-button"
              >
                
              </button>
            </div>
          </div>

          <div
            className="accordion-description"
          >
            {exp.description} <img src={exp.logo} alt={exp.name} className={exp.name} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
