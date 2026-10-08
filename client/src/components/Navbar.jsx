import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-content">
          <span>Shri Jai Ram Ganga Ram Smart School</span>
          <span>Established 2002</span>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img src={logo} alt="School Logo" />
            <div className="brand-text">
              <strong>Shri Jai Ram Ganga Ram<br />Smart School</strong>
              <span>विद्या • ज्ञान • प्रगति</span>
            </div>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#academics" onClick={closeMenu}>Academics</a>
            <a href="#founder" onClick={closeMenu}>Founder</a>
            <a href="#society" onClick={closeMenu}>Society</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#news" onClick={closeMenu}>News</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;