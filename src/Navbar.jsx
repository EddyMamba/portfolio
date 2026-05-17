import { useState } from "react";

const navItems = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <h2 className="logo">
        <a href="#home" onClick={closeMenu}>
          Eddy Mamba
        </a>
      </h2>

      <button
        type="button"
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>
          Me contacter
        </a>
      </div>
    </nav>
  );
}

export default Navbar;