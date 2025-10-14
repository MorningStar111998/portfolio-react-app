import "./Header.css";

function Header() {
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
