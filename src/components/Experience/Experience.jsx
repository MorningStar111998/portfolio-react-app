import "./Experience.css";
import Accordion from "./Accordion";

function Experience() {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <div className="flex-container-row">
        <div className="profile-card">
          <p className="profile-name">Serge Regis TOUGOURI</p>
          <p className="profile-title">Full Stack Developer</p>
          <div className="profile-contact">
            <div className="left">
              <div className="profile-pic-mini"></div>
              <div className="profile-status">
                <p>@sergeregis</p>
                <p>Online</p>
              </div>
            </div>
            <a className="btn contact-btn" href="">
              Contact me
            </a>
          </div>
        </div>
        <div className="professional-experience">
          <Accordion/>
        </div>
      </div>
    </section>
  );
}

export default Experience;
