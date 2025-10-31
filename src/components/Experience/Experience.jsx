import "./Experience.css";
import Accordion from "./Accordion";

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <div className="flex-container-row">
        
        <div className="professional-experience">
          <Accordion />
        </div>
      </div>
    </section>
  );
}

export default Experience;
