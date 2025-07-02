import skillsData from '../data/skills.json';

const Skills = () => {
  const skillCategories = [
    { title: 'Programming Languages', skills: skillsData[0] },
    { title: 'Backend Frameworks', skills: skillsData[1] },
    { title: 'Cloud & Infrastructure', skills: skillsData[2] },
    { title: 'Databases & Frontend', skills: skillsData[3] }
  ];

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="mb-md">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="card mt-xl">
          <h3 className="card-title">Professional Highlights</h3>
          <div className="card-content">
            <div className="grid grid-2">
              <div>
                <h4 className="mb-sm">Backend Expertise</h4>
                <ul className="timeline-details">
                  <li>12+ years of experience in backend development</li>
                  <li>Built systems serving 50+ million users</li>
                  <li>Expertise in microservices architecture</li>
                  <li>Experience with high-traffic applications</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-sm">Leadership & Mentoring</h4>
                <ul className="timeline-details">
                  <li>Led multiple development teams (3-5 engineers)</li>
                  <li>Conducted technical interviews</li>
                  <li>Mentored junior developers</li>
                  <li>Organized training workshops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">Key Achievements</h3>
          <div className="card-content">
            <div className="grid grid-3">
              <div className="text-center">
                <h4 className="text-grey">50M+</h4>
                <p>Users Served</p>
              </div>
              <div className="text-center">
                <h4 className="text-grey">12+</h4>
                <p>Years Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-grey">25+</h4>
                <p>Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 