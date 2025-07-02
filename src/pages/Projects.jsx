import portfolioData from '../data/portfolio.json';

const Projects = () => {
  const renderProjectCard = (project, index) => (
    <div key={index} className="card">
      <h4 className="card-title">{project.title}</h4>
      <p className="card-content">{project.summary}</p>
      <div className="card-footer">
        <div className="tech-stack">
          {project.tech.split(', ').map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-link"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );

  const renderProjectSection = (sectionKey, sectionData) => (
    <div key={sectionKey} className="mb-xl">
      <h3 className="text-center mb-lg">{sectionData.company}</h3>
      <div className="grid grid-2">
        {sectionData.projects.map((project, index) => 
          renderProjectCard(project, `${sectionKey}-${index}`)
        )}
      </div>
    </div>
  );

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Projects & Portfolio</h2>
        
        {Object.entries(portfolioData).map(([key, data]) => 
          renderProjectSection(key, data)
        )}
      </div>
    </div>
  );
};

export default Projects; 