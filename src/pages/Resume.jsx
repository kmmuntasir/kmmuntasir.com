import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Go Back to Site
        </button>
        <button onClick={handlePrint} className="print-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9V2H18V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 18H4C3.44772 18 3 17.5523 3 17V11C3 10.4477 3.44772 10 4 10H20C20.5523 10 21 10.4477 21 11V17C21 17.5523 20.5523 18 20 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 14H18V22H6V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5 7 1 12 1S21 5 21 10Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {basicData.address}
              </div>
              <div className="contact-group">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {basicData.email}
              </div>
              <div className="contact-group">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.92 21.11 21.86 20.11 21.92C18.12 22.11 16.09 21.24 14.31 19.47C12.6 17.76 11.78 15.55 12.02 13.24C12.22 11.19 13.86 9.55 15.91 9.35C16.96 9.25 17.97 9.76 18.61 10.58L20.11 12.58C20.61 13.24 20.61 14.16 20.11 14.82L19.61 15.82C19.31 16.32 19.31 16.92 19.61 17.42C19.91 17.92 20.41 18.22 20.91 18.22H22Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2C14.5 4.8 16 8.3 16 12S14.5 19.2 12 22" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2C9.5 4.8 8 8.3 8 12S9.5 19.2 12 22" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {basicData.social.website.text}
              </div>
              <div className="social-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 20.1046 21.1046 21 20 21H16C14.8954 21 14 20.1046 14 19V16M22 16C22 14.8954 21.1046 14 20 14H16C14.8954 14 14 14.8954 14 16M22 16V13C22 6.92487 17.0751 2 11 2C4.92487 2 0 6.92487 0 13V16C0 17.1046 0.89543 18 2 18H6C7.10457 18 8 17.1046 8 16V13C8 11.8954 7.10457 11 6 11H2" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {basicData.social.github.text}
              </div>
              <div className="social-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C18.2091 8 20 9.79086 20 12V21H16V12C16 11.4477 15.5523 11 15 11H9C8.44772 11 8 11.4477 8 12V21H4V12C4 9.79086 5.79086 8 8 8H16Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
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
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5 7 1 12 1S21 5 21 10Z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
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