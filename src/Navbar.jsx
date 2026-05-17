import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen]= useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <h2 className="logo">
        <a href="#home" onClick={closeMenu}>Eddy</a>
      </h2>

     <button
  type="button"
  className={`menu-icon ${isOpen ? "open" : ""}`}
  onClick={() => setIsOpen(!isOpen)}
  aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
>
  <span></span>
  <span></span>
  <span></span>
</button>

      <ul id="nav-links" className={`nav-links ${isOpen ? "active" :""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;