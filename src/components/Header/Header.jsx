import "./Header.css";
import { useEffect } from "react";

function Header() {

  useEffect(() => {

    const header = document.querySelector("header");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > window.innerHeight * 0.5) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll);
  }, []

  );

  return (
    <header className="header">
      <div className="brand-logo">
        Regis Tougouri<span>.</span>
        <span>_</span>
      </div>
      <nav className="header-nav">
        <ul>
          <li className="header-nav-item">
            {" "}
            <a href="#home">// Home</a>{" "}
          </li>
          <li className="header-nav-item">
            {" "}
            <a href="#project">// Project</a>{" "}
          </li>
          <li className="header-nav-item">
            {" "}
            <a href="#experience">// Experience</a>{" "}
          </li>
          <li className="header-nav-item">
            {" "}
            <a href="#contact">// Contact</a>{" "}
          </li>
        </ul>
      </nav>
      <div className="brand-logo hidden-element" >
        Regis Tougouri<span>.</span>
        <span>_</span>
      </div>
    </header>
  );
}

export default Header;
