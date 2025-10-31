import "./Contact.css";

import githubIcon from "./../../assets/socials-icons/github.png";
import instagramIcon from "./../../assets/socials-icons/instagram.png";
import linkedinIcon from "./../../assets/socials-icons/linkedin.png";
import whatsappIcon from "./../../assets/socials-icons/whatsapp.png";

const socials = [
  { name: "whatsapp", link: "https://wa.me/212721677298", icon: whatsappIcon },
  {
    name: "github",
    link: "https://github.com/MorningStar111998",
    icon: githubIcon,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/serge_regis",
    icon: instagramIcon,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/regis-tougouri/",
    icon: linkedinIcon,
  },
];

function Contact() {
  return (
    <section id="contact" className="contact">
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
            <a
              className="btn contact-btn"
              href="mailto:regisprofessionel@gmail.com"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
      <div className="contact-column-2">
        <div>
          <h1>Have a project in mind? Let’s make it happen.</h1>
          <br />
          <p>Send me an email or contact me via instant message!</p>
          <br />
        </div>
        <div>
          <a
            className="contact-email"
            href="mailto:regisprofessionel@gmail.com"
          >
            regisprofessionel@gmail.com
          </a>
          <div className="socials-container">
            {socials.map((social) => (
              <a href={social.link}>
                <img
                  className={`${social.name}-icon social-icon`}
                  alt={`${social.name} icon`}
                  src={social.icon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
