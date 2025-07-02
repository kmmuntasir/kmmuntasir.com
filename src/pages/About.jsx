import basicData from '../data/basic.json';

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Personal Info</h3>
            <div className="card-content">
              <p><strong>Name:</strong> {basicData.name}</p>
              <p><strong>Title:</strong> {basicData.designation}</p>
              <p><strong>Company:</strong> {basicData.company}</p>
              <p><strong>Location:</strong> {basicData.address}</p>
              <p><strong>Email:</strong> 
                <a href={`mailto:${basicData.email}`}> {basicData.email}</a>
              </p>
              <p><strong>Phone:</strong> {basicData.phone}</p>
            </div>
          </div>
          
          <div className="card">
            <h3 className="card-title">Professional Summary</h3>
            <div className="card-content">
              <p>
                I'm a Senior Staff Software Engineer with over 12 years of experience in 
                building scalable web applications and microservices. My expertise spans 
                across multiple technologies including Node.js, Spring Boot, AWS, and various 
                database systems.
              </p>
              <p>
                Throughout my career, I've had the privilege of working with companies ranging 
                from fintech giants serving 50+ million users to European e-commerce platforms. 
                I'm passionate about system architecture, clean code practices, and mentoring 
                the next generation of developers.
              </p>
              <p>
                When I'm not coding, I enjoy teaching programming concepts and have served as 
                a part-time lecturer at multiple universities, sharing knowledge in programming, 
                database management, and web development.
              </p>
            </div>
          </div>
        </div>
        
        <div className="card mt-xl">
          <h3 className="card-title">What I Do</h3>
          <div className="card-content">
            <div className="grid grid-3">
              <div className="skill-category">
                <h4>Backend Development</h4>
                <p className="text-grey">
                  Building robust APIs and microservices using Node.js, Spring Boot, 
                  and various database technologies.
                </p>
              </div>
              <div className="skill-category">
                <h4>System Architecture</h4>
                <p className="text-grey">
                  Designing scalable systems that can handle millions of users with 
                  high availability and performance.
                </p>
              </div>
              <div className="skill-category">
                <h4>Team Leadership</h4>
                <p className="text-grey">
                  Leading development teams, conducting interviews, and mentoring 
                  junior developers to grow their skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 