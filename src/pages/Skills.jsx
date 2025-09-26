import skillsData from '../data/skills.json';
import { getExperienceText } from '../utils/experienceCalculator';

const Skills = () => {
  // Convert the skills object to an array of { title, skills } objects
  const skillCategories = Object.entries(skillsData).map(([title, skills]) => ({
    title,
    skills
  }));

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
        
        <h2 className="section-title">Professional Highlights</h2>
        
        <div className="card">
          <div className="card-content">
            <div className="grid grid-2">
              <div>
                <h4 className="mb-sm">Development Expertise</h4>
                <ul className="timeline-details">
                  <li>{getExperienceText()} years of experience in full-stack development</li>
                  <li>Built systems serving 50+ million users</li>
                  <li>Experience in GenAI app development</li>
                  <li>Expertise in microservices architecture</li>
                  <li>Experience with high-traffic applications</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-sm">Leadership & Mentoring</h4>
                <ul className="timeline-details">
                  <li>Led multiple development teams (4-9 engineers)</li>
                  <li>Fostered the adoption of AI-first development processes</li>
                  <li>Conducted technical interviews</li>
                  <li>Mentored junior developers</li>
                  <li>Organized training workshops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="section-title">Key Achievements</h2>
        
        <div className="card">
          <div className="card-content">
            <div className="grid grid-3">
              <div className="text-center">
                <h4 className="text-grey">50M+</h4>
                <p>Users Served</p>
              </div>
              <div className="text-center">
                <h4 className="text-grey">{getExperienceText()}</h4>
                <p>Years Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-grey">50+</h4>
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