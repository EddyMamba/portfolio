function Projects() {
  const projects = [
    {
      title: "X Clone",
      description:
        "Clone fonctionnel de X avec timeline, likes, follow/unfollow, compte privé, blocage, suggestions et recherche par hashtags.",
      techs: ["AdonisJS", "Edge Templates", "PostgreSQL"],
      image: "/x.png",
      github:
        "https://github.com/kadea-academy-learners/capstone-x-clone-adonis-EddyMamba",
      live: "https://capstone-x-clone-adonis-eddymamba-2.onrender.com",
    },
    {
      title: "Portfolio",
      description:
        "Portfolio professionnel développé avec React, CSS et EmailJS pour présenter mes réalisations et faciliter les contacts.",
      techs: ["React", "CSS", "EmailJS"],
      image: "/x.png",
      github: "https://github.com/ton-username/ton-repo-portfolio",
      live: "https://ton-site-live.com",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-card">
        <div className="section-header">
          <p className="section-tag">Projets récents</p>
          <h2>Mes Projets</h2>
          <p className="section-description">
            Des applications modernes à interface claire et responsive, conçues pour offrir une expérience fluide et professionnelle.
          </p>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-card__visual">
                <img src={project.image} alt={`${project.title} screenshot`} />
              </div>

              <div className="project-card__info">
                <span className="project-card__label">Réalisation</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-badges">
                  {project.techs.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Voir en ligne
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;