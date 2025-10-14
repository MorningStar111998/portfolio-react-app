import "./Skills.css";
import wordpressLogo from "../../assets/skill-logos/wordpress.png"
import frontEndLogo from "../../assets/skill-logos/front-end.png"
import backEndLogo from "../../assets/skill-logos/back-end.png";

const skillLogos = [
   { name : 'WordPress', logo : wordpressLogo, description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque"},
   { name : 'Front-end', logo : frontEndLogo, description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque"},
   { name : 'Back-end', logo : backEndLogo, description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque"}
]

function Skills() {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillLogos.map((skill) => (
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
