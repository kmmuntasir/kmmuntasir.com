import skillsData from '../data/skills.json'

const Skills = () => {
  const skillCategories = [
    { key: 'languages', title: 'Programming Languages' },
    { key: 'frameworks', title: 'Frameworks & Libraries' },
    { key: 'cloud', title: 'Cloud & DevOps' },
    { key: 'databases', title: 'Databases' },
    { key: 'messaging', title: 'Message Queues' }
  ]

  return (
    <div className="section">
      <div className="container">
        <div className="fade-in-up">
          <h1 className="text-center mb-16">Technical Skills</h1>
          
          <div className="grid grid-2 gap-lg">
            {skillCategories.map((category) => (
              <div key={category.key} className="card">
                <h2 className="mb-6">{category.title}</h2>
                
                <div className="flex flex-wrap gap-2 max-w-full overflow-hidden">
                  {skillsData[category.key]?.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  )) || <p className="text-light">No skills listed</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-16">
            <h2 className="text-center mb-6">Professional Expertise</h2>
            <div className="grid grid-3 gap-lg text-center">
              <div>
                <h3 className="text-primary mb-2">12+</h3>
                <p className="text-light">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-primary mb-2">50M+</h3>
                <p className="text-light">Users Served</p>
              </div>
              <div>
                <h3 className="text-primary mb-2">20+</h3>
                <p className="text-light">Projects Delivered</p>
              </div>
            </div>
          </div>

          <div className="card mt-8">
            <h2 className="mb-6">Key Competencies</h2>
            <div className="grid grid-2 gap-lg">
              <div>
                <h4 className="font-medium mb-3">Technical Leadership</h4>
                <ul className="text-light space-y-2 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                    <span>Team leadership and mentoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                    <span>System architecture design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                    <span>Code review and best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                    <span>Technical interviewing</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Development Expertise</h4>
                <ul className="text-light space-y-2 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                    <span>Full-stack web development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                    <span>Microservices architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                    <span>Cloud-native applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                    <span>API design and integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills 