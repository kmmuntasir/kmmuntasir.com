import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Mail, Phone, Globe, Github, Linkedin, ArrowLeft, Printer } from 'lucide-react';
import basicData from '../data/basic.json';
import experienceData from '../data/experience.json';
import skillsData from '../data/skills.json';
import educationData from '../data/education.json';
import participationData from '../data/participation.json';
import './Resume.css';

const Resume = () => {
  const [isClient, setIsClient] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleGoBack = () => {
    navigate('/');
  };

  // Get the most recent experiences for the resume
  const recentExperience = experienceData.slice(0, 6);

  // At a glance points
  const atAGlancePoints = [
    "Experience in design and implementation of highly scalable complex SaaS and/or cloud applications.",
    "Comfortable in Agile and DevOps Culture.",
    "Experience with microservices, messaging, and event-driven architecture.",
    "Experience in testing and CI/CD.",
    "Proficient with version controlling best practices.",
    "Analytical and problem-solving skills.",
    "Strong knowledge in Object-Oriented Programming, Data Structure and Algorithms.",
    "Expertise in the Unix environment.",
    "Excellent interpersonal skills and team player"
  ];

  return (
    <div className="resume-container">
      {/* Action Buttons - only visible on screen */}
      <div className="action-buttons-container no-print">
        <button onClick={handleGoBack} className="back-btn">
          <ArrowLeft size={20} />
          Go Back to Site
        </button>
        <button onClick={handlePrint} className="print-btn">
          <Printer size={20} />
          Print Resume
        </button>
      </div>

      {/* Resume Content */}
      <div className="resume-content">
        {/* Header */}
        <header className="resume-header">
          <div className="header-left">
            <div className="contact-info">
              <div className="contact-group">
                <MapPin size={14} />
                {basicData.address}
              </div>
              <div className="contact-group">
                <Mail size={14} />
                {basicData.email}
              </div>
              <div className="contact-group">
                <Phone size={14} />
                {basicData.phone}
              </div>
            </div>
          </div>
          
          <div className="header-center">
            <h1 className="name">{basicData.name}</h1>
            <h2 className="title">{basicData.designation}</h2>
            <div className="company">{basicData.company}</div>
          </div>
          
          <div className="header-right">
            <div className="social-links">
              <div className="social-item">
                <Globe size={14} />
                {basicData.social.website.text}
              </div>
              <div className="social-item">
                <Github size={14} />
                {basicData.social.github.text}
              </div>
              <div className="social-item">
                <Linkedin size={14} />
                {basicData.social.linkedin.text}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="resume-main">
          {/* Left Column */}
          <div className="left-column">
            {/* At a Glance Section */}
            <section className="resume-section">
              <h3 className="section-title">At a glance</h3>
              <ul className="at-a-glance-list">
                {atAGlancePoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </section>

            {/* Experience Section */}
            <section className="resume-section">
              <h3 className="section-title">Experience</h3>
              {recentExperience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="exp-header">
                    <div className="exp-title-info">
                      <div className="exp-title-line">
                        <strong>{exp.title}</strong>, <span className="company-link">{exp.company}</span>, <em>{exp.companyType}</em>
                      </div>
                      <div className="exp-duration-location">
                        <span className="exp-duration">{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {exp.stack && exp.stack.length > 0 && (
                    <div className="tech-stack">
                      {exp.stack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                  
                  <div className="exp-location">
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                  
                  <ul className="exp-details">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: detail }} />
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Skills Section */}
            <section className="resume-section">
              <h3 className="section-title">Skills</h3>
              <div className="skills-container">
                {Object.entries(skillsData).map(([category, skills]) => (
                  <div key={category} className="skill-category">
                    <div className="skills-tags">
                      {skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="resume-section">
              <h3 className="section-title">Education</h3>
              {educationData.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="edu-header">
                    <div className="edu-degree">
                      {edu.degree.replace('M.Sc', 'Master of CSE').replace('B.Sc', 'Bachelor of CSE')}
                    </div>
                    <div className="edu-year">({edu.year})</div>
                  </div>
                  <div className="edu-institution">{edu.institution.replace('American International University-Bangladesh (AIUB)', 'National University of Bangladesh')}</div>
                </div>
              ))}
            </section>

            {/* Participation Section */}
            <section className="resume-section">
              <h3 className="section-title">Participation</h3>
              {participationData.map((participation, index) => (
                <div key={index} className="participation-item">
                  <div className="participation-title">{participation.title}</div>
                  <div className="participation-years">({participation.years.join(', ')})</div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 