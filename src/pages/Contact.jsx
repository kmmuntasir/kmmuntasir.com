import basicData from '../data/basic.json';

const Contact = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="card mb-xl">
          <div className="card-content text-center">
            <p className="hero-description">
              I'm always interested in hearing about new opportunities, 
              interesting projects, or just having a chat about technology. 
              Feel free to reach out!
            </p>
          </div>
        </div>
        
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-label">Email</div>
            <a href={`mailto:${basicData.email}`}>
              {basicData.email}
            </a>
          </div>
          
          <div className="contact-item">
            <div className="contact-label">Phone</div>
            <a href={`tel:${basicData.phone}`}>
              {basicData.phone}
            </a>
          </div>
          
          <div className="contact-item">
            <div className="contact-label">Location</div>
            <span>{basicData.address}</span>
          </div>
        </div>
        
        <div className="card mt-xl">
          <h3 className="card-title text-center">Connect Online</h3>
          <div className="card-content">
            <div className="hero-links">
              <a 
                href={basicData.social.github.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-link"
              >
                GitHub: {basicData.social.github.text}
              </a>
              <a 
                href={basicData.social.linkedin.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-link"
              >
                LinkedIn: {basicData.social.linkedin.text}
              </a>
              <a 
                href={basicData.social.website.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-link"
              >
                Website: {basicData.social.website.text}
              </a>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">What I'm Looking For</h3>
          <div className="card-content">
            <div className="grid grid-2">
              <div>
                <h4 className="mb-sm">Collaboration Opportunities</h4>
                <ul className="timeline-details">
                  <li>Senior/Staff Engineer positions</li>
                  <li>Technical leadership roles</li>
                  <li>System architecture consulting</li>
                  <li>Mentoring and training programs</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-sm">Areas of Interest</h4>
                <ul className="timeline-details">
                  <li>Scalable backend and intuitive frontend systems</li>
                  <li>Microservices architecture</li>
                  <li>Cloud infrastructure (AWS/GCP)</li>
                  <li>Team building and mentoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 