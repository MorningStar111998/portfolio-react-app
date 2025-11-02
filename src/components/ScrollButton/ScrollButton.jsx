import "./ScrollButton.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export default function ScrollButton() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      setIsScrolled(prev => (prev != scrolled ? scrolled : prev));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`scroll-button ${isScrolled ? "visible" : "invisible"}`}
      aria-label="scroll to top"
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
    </button>
  );
}
