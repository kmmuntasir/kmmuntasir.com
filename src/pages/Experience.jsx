import experienceData from '../data/experience.json';
import teachingData from '../data/teaching.json';

const Experience = () => {
  const renderExperienceItem = (exp, index) => (
    <div key={index} className="timeline-item">
      <div className="timeline-content">
        <div className="timeline-header">
          <div>
            <div className="timeline-company">
              {exp.link ? (
                <a href={exp.link.url} target="_blank" rel="noopener noreferrer">
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </div>
            <div className="timeline-title">{exp.title}</div>
            <div className="text-grey">{exp.companyType} • {exp.location}</div>
          </div>
          <div className="timeline-duration">{exp.duration}</div>
        </div>
        
        <ul className="timeline-details">
          {exp.details.map((detail, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: detail }} />
          ))}
        </ul>
        
        {exp.stack && (
          <div className="tech-stack">
            {exp.stack.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="timeline">
          {experienceData.map((exp, index) => renderExperienceItem(exp, index))}
        </div>
        
        <h3 className="section-title mt-xl">Teaching Experience</h3>
        
        <div className="timeline">
          {teachingData.map((exp, index) => renderExperienceItem(exp, index))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 