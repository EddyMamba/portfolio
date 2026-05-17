function Projects() {
  const projects = [
    {
      title: "X Clone",
      description: "Application avec tweets, likes, follow, compte privé, blocage, suggestions, barre de recherche et hashtags.",
      tech: "AdonisJS & Edge Templates",
      image: "/x.png", 
      github: "https://github.com/kadea-academy-learners/capstone-x-clone-adonis-EddyMamba",
      live: "https://capstone-x-clone-adonis-eddymamba-2.onrender.com"
    },
    {
      title: "Portfolio",
      description: "Mon portfolio personnel développé avec React et EmailJS.",
      tech: "React, CSS, EmailJS",
      image: "/x.png", 
      github: "https://github.com/ton-username/ton-repo-portfolio",
      live: "https://ton-site-live.com" 
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Mes Projets</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech-badge">{project.tech}</span>
            
            <div className="buttons"> 
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;