import "./Skills.css";
import wordpressLogo from "../../assets/skill-logos/wordpress.png"
import frontEndLogo from "../../assets/skill-logos/react.png"
import backEndLogo from "../../assets/skill-logos/laravel.png";
import webDesignLogo from "../../assets/skill-logos/figma.png";
import databaseLogo from "../../assets/skill-logos/mysql.png";

const skills = [
  {
    name: "WordPress",
    logo: wordpressLogo,
    description:
      "Skilled in WordPress site development, with 12+ functional websites delivered, including WooCommerce.",
  },
  {
    name: "Front-end, React",
    logo: frontEndLogo,
    description:
      "Experienced with HTML, CSS, JavaScript, and frameworks like React Js for building responsive and scalable applications.",
  },
  {
    name: "Back-end",
    logo: backEndLogo,
    description:
      "Proficient in server-side languages : PHP, Node.js, and frameworks like Laravel",
  },
  {
    name: "Web Design",
    logo: webDesignLogo,
    description:
      "Passionate about Web Design and prototyping using Figma. Translating concepts into visually appealing interfaces.",
  },
  {
    name: "Database",
    logo: databaseLogo,
    description:
      "Skilled in designing, querying, and optimizing database structures using MySQL for secure and efficient data operations.",
  },
];

function Skills() {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-item"
            id={skill.name.toLocaleLowerCase()}
          >
            <div className="skill-header">
              <img
                className="skill-logo"
                src={skill.logo}
                alt="wordpress icon"
              />
              <p className="skill-title">{skill.name}</p>
            </div>
            <p className="skill-description">{skill.description} </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
