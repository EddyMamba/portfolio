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

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-card">
          <header className="about-header">
            <div className="about-titleRow">
              <h2>{"À\u00A0propos"}</h2>
              
            </div>
            <div className="about-meta" aria-label="Profil">
              <span className="about-subtitle">Développeur web full-stack</span>
            </div>
          </header>

          <div className="about-content">
            <p className="about-lead">
              Basé à Kinshasa, je conçois des applications web performantes, accessibles et maintenables pour des projets à fort enjeu.
            </p>

            <p>
              Je couvre l'ensemble du cycle de développement : analyse des besoins, architecture back-end, interface utilisateur et déploiement. J'ai notamment conçu une <strong>architecture back-end robuste</strong> pour un clone de Twitter, en mettant en place des relations utilisateurs, des flux de données temps réel et une base de données relationnelle optimisée.
            </p>

            <p>
              Je privilégie un code propre, une collaboration structurée via Git et une attention particulière à l'expérience utilisateur afin de livrer des solutions fiables, évolutives et agréables à utiliser.
            </p>
          </div>

          <h3>Ma Stack Technique</h3>
          <ul className="tech-list" aria-label="Stack technique">
            <li className="tech-group">
              <div className="tech-group__header">
                <StackIcon type="frontend" />
                <h4>Frontend</h4>
              </div>
              <div className="tech-group__chips" aria-label="Technologies frontend">
                <TechChip short="R" label="React" color="#149eca" />
                <TechChip short="TS" label="TypeScript" color="#3178c6" />
                <TechChip short="TW" label="TailwindCSS" color="#38bdf8" />
                <TechChip short="V" label="Vite" color="#a855f7" />
              </div>
            </li>

            <li className="tech-group">
              <div className="tech-group__header">
                <StackIcon type="backend" />
                <h4>Backend</h4>
              </div>
              <div className="tech-group__chips" aria-label="Technologies backend">
                <TechChip short="N" label="Node.js" color="#3c873a" />
                <TechChip short="A" label="AdonisJS" color="#7c3aed" />
                <TechChip short="PG" label="PostgreSQL" color="#336791" />
              </div>
            </li>

            <li className="tech-group">
              <div className="tech-group__header">
                <StackIcon type="tools" />
                <h4>Outils</h4>
              </div>
              <div className="tech-group__chips" aria-label="Outils">
                <TechChip short="F" label="Figma" color="#a21caf" />
                <TechChip short="Git" label="Git" color="#f97316" />
                <TechChip short="GH" label="GitHub" color="#0f172a" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;