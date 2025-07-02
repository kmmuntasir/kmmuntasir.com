import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from 'lucide-react'
import basicData from '../data/basic.json'

const Contact = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="fade-in-up">
          <h1 className="text-center mb-16">Get In Touch</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-light text-lg leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                or potential collaborations. Whether you're looking for a technical leader, 
                a full-stack developer, or just want to connect, feel free to reach out!
              </p>
            </div>

            <div className="grid grid-2 gap-lg mb-12">
              <div className="card">
                <h2 className="mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href={`mailto:${basicData.email}`} 
                        className="text-primary hover:underline"
                      >
                        {basicData.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a 
                        href={`tel:${basicData.phone}`} 
                        className="text-primary hover:underline"
                      >
                        {basicData.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-light">{basicData.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="mb-6">Connect With Me</h2>
                <div className="space-y-4">
                  <a
                    href={basicData.social.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Github className="text-primary" size={24} />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-light text-sm">{basicData.social.github.text}</p>
                    </div>
                  </a>
                  
                  <a
                    href={basicData.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Linkedin className="text-primary" size={24} />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-light text-sm">{basicData.social.linkedin.text}</p>
                    </div>
                  </a>
                  
                  <a
                    href={basicData.social.website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Globe className="text-primary" size={24} />
                    <div>
                      <p className="font-medium">Website</p>
                      <p className="text-light text-sm">{basicData.social.website.text}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="mb-6">Quick Message</h2>
              <p className="text-light mb-6">
                For immediate contact, email is the best way to reach me. I typically respond 
                within 24 hours during business days.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href={`mailto:${basicData.email}?subject=Hello from your portfolio`}
                  className="btn btn-primary flex-1 justify-center"
                >
                  <Send size={20} />
                  Send Email
                </a>
                <a 
                  href={basicData.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary flex-1 justify-center"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 