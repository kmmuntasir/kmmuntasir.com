import { ExternalLink, Code } from 'lucide-react'
import portfolioData from '../data/portfolio.json'

const Projects = () => {
  const projectCategories = Object.entries(portfolioData)

  return (
    <div className="section">
      <div className="container">
        <div className="fade-in-up">
          <h1 className="text-center mb-16">Projects & Portfolio</h1>
          
          {projectCategories.map(([categoryKey, category]) => (
            <div key={categoryKey} className="mb-16">
              <h2 className="text-center mb-8 text-primary">{category.company}</h2>
              
              <div className="grid grid-2 gap-lg">
                {category.projects.map((project, index) => (
                  <div key={index} className="card">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="flex-1">{project.title}</h3>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-blue-600 transition-colors"
                          title="View Project"
                        >
                          <ExternalLink size={20} />
                        </a>
                      ) : (
                        <Code size={20} className="text-gray-400" title="Private Repository" />
                      )}
                    </div>
                    
                    <p className="text-light mb-4 leading-relaxed">
                      {project.summary}
                    </p>
                    
                    <div className="overflow-hidden">
                      <h4 className="font-medium mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2 max-w-full">
                        {project.tech.split(', ').map((tech, techIndex) => (
                          <span key={techIndex} className="skill-tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects 