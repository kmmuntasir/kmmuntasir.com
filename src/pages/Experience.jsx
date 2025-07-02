import { ExternalLink } from 'lucide-react'
import experienceData from '../data/experience.json'

const Experience = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="fade-in-up">
          <h1 className="text-center mb-16">Professional Experience</h1>
          
          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <div key={index} className="card card-accent">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                  <div>
                    <h2 className="mb-2">{experience.title}</h2>
                    <div className="flex items-center gap-2 mb-2">
                      <a 
                        href={experience.link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline flex items-center gap-1"
                      >
                        {experience.company}
                        <ExternalLink size={16} />
                      </a>
                      <span className="text-light">• {experience.companyType}</span>
                    </div>
                    <p className="text-light">{experience.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {experience.duration}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">Technologies & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.stack.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-6">
                        <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                        <span 
                          className="text-light leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: detail }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience 