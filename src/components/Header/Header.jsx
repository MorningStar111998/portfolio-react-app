import "./Header.css";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > window.innerHeight * 0.5) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
    // , { passive: true } : I use this to make sure my scroll handler will not block scrolling
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" ref={headerRef} className={`header ${menuOpen ? "nav-open" : ""}`}>
      {/* Brand logo : Regis */}
      <div className="brand-logo">
        Regis Tougouri<span>.</span>
        <span>_</span>
      </div>
      {/* Button menu for mobile */}

      {/* Navbar */}
      <nav className="header-nav">
        <ul>
          <li className="header-nav-item">
            {" "}
            <a href="#hero">// Home</a>{" "}
          </li>
          <li className="header-nav-item">
            {" "}
            <a href="#projects">// Project</a>{" "}
          </li>
          <li className="header-nav-item">
            {" "}
            <a  href="#experience">// Experience</a>{" "}
          </li>
          <li className="header-nav-item">
            {" "}
            <a href="#contact">// Contact</a>{" "}
          </li>
        </ul>
      </nav>
      <div className="hidden-element">
        Regis Tougouri<span>.</span>
        <span>_</span>
      </div>
      <div className="dropdown-button">
        <button
          aria-label="Toggle menu"
          aria-controls="primary-nav"
          aria-expended={menuOpen}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <FontAwesomeIcon className="menu-icon" icon={!menuOpen ? faBars : faX} />
        </button>
      </div>
    </header>
  );
}

export default Header;
