function About() {
  const TechChip = ({ short, label, color }) => (
    <span className="chip">
      <svg
        className="chip-logo"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="3" y="3" width="18" height="18" rx="6" fill={color} />
        <text
          x="12"
          y="12.5"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(255,255,255,0.95)"
          fontSize="9.5"
          fontWeight="800"
          fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
        >
          {short}
        </text>
      </svg>
      {label}
    </span>
  );

  const techItems = [
    { short: "R", label: "React", color: "#149eca" },
    { short: "TS", label: "TypeScript", color: "#3178c6" }, // Doublon supprimé ici
    { short: "JS", label: "JavaScript", color: "#f7df1e" },
    { short: "TW", label: "TailwindCSS", color: "#38bdf8" },
    { short: "V", label: "Vite", color: "#a855f7" },
    { short: "N", label: "Node.js", color: "#3c873a" },
    { short: "A", label: "AdonisJS", color: "#7c3aed" },
    { short: "PG", label: "PostgreSQL", color: "#336791" },
    { short: "Ne", label: "Neon Postgres", color: "#00E599" },
    { short: "Git", label: "Git", color: "#f97316" },
    { short: "GH", label: "GitHub", color: "#0f172a" },
    { short: "F", label: "Figma", color: "#a21caf" },
    { short: "Cl", label: "Cloudinary", color: "#3448C5" },
    { short: "Rw", label: "Railway", color: "#131415" },
    { short: "Rn", label: "Render", color: "#D64278" },
    { short: "Ej", label: "EmailJS", color: "#F3A323" }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-card">
          
          {/* ZONE 1 : La grille haute (Gauche / Droite) */}
          <div className="about-content about-body">
            <aside className="about-sidebar">
              <h3>À propos de moi</h3>
              <div className="about-links">
                <a
                  className="about-link"
                  href="https://github.com/EddyMamba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="about-link"
                  href="https://www.linkedin.com/in/eddymamba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </aside>

            <div className="about-copy">
              <p className="about-lead">
                Développeur web passionné, je conçois des applications modernes,
                intuitives et performantes avec React et Node.js.
              </p>
              <p>
                J’ai terminé ma formation en développement web et j’ai travaillé
                sur plusieurs projets concrets, dont un clone de X (Twitter),
                qui m’a permis de renforcer mes compétences en frontend et backend.
              </p>
              <p>
                J’aime transformer des idées en produits web fonctionnels,
                avec une attention particulière portée à l’expérience utilisateur,
                la performance et la qualité du code.
              </p>
            </div>
          </div>

          {/* ZONE 2 : La Stack Technique (Bien centrée en dessous) */}
          <div className="tech-section">
            <h3>Ma Stack Technique</h3>
            <div className="tech-group__chips" aria-label="Stack technique">
              {techItems.map((item) => (
                <TechChip key={item.label} {...item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;