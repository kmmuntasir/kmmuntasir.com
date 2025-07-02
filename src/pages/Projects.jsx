import { useState } from 'react';
import portfolioData from '../data/portfolio.json';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Get all company names for filter buttons
  const companies = Object.values(portfolioData).map(data => data.company);
  const filters = ['All', ...companies];

  const renderProjectCard = (project, index) => (
    <div key={index} className="masonry-item">
      <div className="card project-card">
        <h4 className="card-title">{project.title}</h4>
        <p className="card-content">{project.summary}</p>
        <div className="card-footer">
          <div className="tech-stack">
            {project.tech.split(', ').map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
          {project.link && (
            <div className="project-link">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => {
    if (activeFilter === 'All') {
      // Show all projects mixed together in one masonry grid
      const allProjects = [];
      Object.entries(portfolioData).forEach(([sectionKey, sectionData]) => {
        sectionData.projects.forEach((project, index) => {
          allProjects.push(renderProjectCard(project, `${sectionKey}-${index}`));
        });
      });

      return (
        <div className="masonry-grid">
          {allProjects}
        </div>
      );
    } else {
      // Show only projects from selected company without company title
      const selectedCompanyData = Object.values(portfolioData).find(
        data => data.company === activeFilter
      );

      if (!selectedCompanyData) return null;

      return (
        <div className="masonry-grid">
          {selectedCompanyData.projects.map((project, index) => 
            renderProjectCard(project, `${activeFilter}-${index}`)
          )}
        </div>
      );
    }
  };

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Projects & Portfolio</h2>
        
        {/* Filter buttons - desktop only */}
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {renderProjects()}
      </div>
    </div>
  );
};

export default Projects; 