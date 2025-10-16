import "./Contact.css"

function Contact() {
    return (
        <section className="contact">
            <h1>Contact</h1>
            <div className="flexbox">
        <div className="contact-column-1">
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
        </div>
        <div className="contact-column-2"></div>
            </div>
      </section>
    );
}


export default Contact;