import { Mail, Phone, MapPin } from 'lucide-react'
import basicData from '../data/basic.json'
import teachingData from '../data/teaching.json'

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="fade-in-up">
          <h1 className="text-center mb-16">About Me</h1>
          
          <div className="grid grid-2 gap-lg mb-16">
            <div className="card">
              <h2 className="mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-md">
                  <Mail className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${basicData.email}`} className="text-primary hover:underline">
                      {basicData.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-md">
                  <Phone className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href={`tel:${basicData.phone}`} className="text-primary hover:underline">
                      {basicData.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-md">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-light">{basicData.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="mb-6">Professional Summary</h2>
              <p className="text-light leading-relaxed">
                Senior Staff Software Engineer with over 12 years of experience in full-stack development, 
                cloud architecture, and team leadership. Proven track record of leading projects from 
                conception to production, serving millions of users across fintech, e-commerce, and 
                enterprise software domains.
              </p>
              <br />
              <p className="text-light leading-relaxed">
                Passionate about mentoring junior developers, implementing best practices, and building 
                scalable systems that drive business growth. Experience working with international teams 
                and delivering solutions for global markets.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="mb-6">Teaching Experience</h2>
            <div className="space-y-6">
              {teachingData.map((teaching, index) => (
                <div key={index} className="timeline-item">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="font-medium">{teaching.title}</h3>
                    <span className="text-sm text-light">{teaching.duration}</span>
                  </div>
                  <p className="mb-2">
                    <a href={teaching.link.url} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                      {teaching.company}
                    </a>
                  </p>
                  <ul className="text-light space-y-1">
                    {teaching.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 