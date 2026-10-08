interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;   
  githubLink?: string; 
}

interface ProjectsProps {
  title: string;
  projects: Project[];
}

function Projects({ title, projects }: ProjectsProps) {
  return (
    <section className="projects" id="projects">
      <h2>{title}</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;