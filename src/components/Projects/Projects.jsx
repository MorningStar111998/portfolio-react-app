import "./Projects.css";

function Projects() {
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
              <div className="grid-container">
              <div>Project 1</div>
              <div>Project 2</div>
              <div>Project 3</div>
              <div>Project 4</div>
              </div>
      </div>
    </section>
  );
}

export default Projects;
