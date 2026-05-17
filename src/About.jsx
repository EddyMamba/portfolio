function About() {
  const StackIcon = ({ type }) => {
    // Simple inline SVGs so you don't need image assets.
    if (type === "frontend") {
      return (
        <svg className="stack-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5 6.5h14M5 17.5h14M6.5 9.5h11m-11 5h7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    }
    if (type === "backend") {
      return (
        <svg className="stack-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4.5 7.5 12 4l7.5 3.5L12 11 4.5 7.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 12 12 15.5 19.5 12M4.5 16.5 12 20l7.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );
    }
    return (
      <svg className="stack-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M19.4 15a8.6 8.6 0 0 0 .1-2l2-1.2-2-3.4-2.3.7a8.6 8.6 0 0 0-1.7-1L15 5h-4l-.5 2.9a8.6 8.6 0 0 0-1.7 1L6.5 8.2l-2 3.4 2 1.2a8.6 8.6 0 0 0 .1 2l-2 1.2 2 3.4 2.3-.7a8.6 8.6 0 0 0 1.7 1L11 19h4l.5-2.9a8.6 8.6 0 0 0 1.7-1l2.3.7 2-3.4-2.1-1.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

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

  const stackSections = [
    {
      type: "frontend",
      title: "Frontend",
      subtitle: "Interfaces interactives",
      items: [
        { short: "R", label: "React", color: "#149eca" },
        { short: "TS", label: "TypeScript", color: "#3178c6" },
        { short: "JS", label: "JavaScript", color: "#f7df1e" },
        { short: "TW", label: "TailwindCSS", color: "#38bdf8" },
        { short: "V", label: "Vite", color: "#a855f7" },
      ],
    },
    {
      type: "backend",
      title: "Backend",
      subtitle: "API, bases de données et logique serveur",
      items: [
        { short: "N", label: "Node.js", color: "#3c873a" },
        { short: "TS", label: "TypeScript", color: "#3178c6" },
        { short: "A", label: "AdonisJS", color: "#7c3aed" },
        { short: "PG", label: "PostgreSQL", color: "#336791" },
        { short: "Ne", label: "Neon Postgres", color: "#00E599" },
      ],
    },
    {
      type: "tools",
      title: "Outils & services",
      subtitle: "Collaboration, déploiement et support",
      items: [
        { short: "Git", label: "Git", color: "#f97316" },
        { short: "GH", label: "GitHub", color: "#0f172a" },
        { short: "F", label: "Figma", color: "#a21caf" },
        { short: "Cl", label: "Cloudinary", color: "#3448C5" },
        { short: "Rw", label: "Railway", color: "#131415" },
        { short: "Rn", label: "Render", color: "#D64278" },
        { short: "Ej", label: "EmailJS", color: "#F3A323" },
      ],
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-card">
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
                Basé à Kinshasa, je conçois des solutions web performantes, sécurisées et maintenables pour des produits qui évoluent dans le temps.
              </p>

              <p>
                J'interviens sur l'ensemble des étapes d'un projet : cadrage fonctionnel, architecture back-end, développement d'API et interfaces utilisateur, tests et déploiement. J'ai guidé la réalisation d'une <strong>architecture back-end robuste</strong> pour un clone de Twitter, avec gestion des relations utilisateurs, flux temps réel et base de données relationnelle optimisée.
              </p>

              <p>
                Je privilégie une démarche structurée, un code lisible, et une collaboration efficace via Git pour livrer des produits fiables, évolutifs et centrés sur l'expérience utilisateur.
              </p>
            </div>
          </div>

          <h3>Ma Stack Technique</h3>
          <ul className="tech-list" aria-label="Stack technique">
            {stackSections.map((section) => (
              <li key={section.title} className="tech-group">
                <div className="tech-group__header">
                  <StackIcon type={section.type} />
                  <div>
                    <h4>{section.title}</h4>
                    <p className="tech-group__subtitle">{section.subtitle}</p>
                  </div>
                </div>

                <div
                  className="tech-group__chips"
                  aria-label={`Technologies ${section.title.toLowerCase()}`}
                >
                  {section.items.map((item) => (
                    <TechChip key={item.label} {...item} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;