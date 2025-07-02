import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Globe } from 'lucide-react'
import basicData from '../data/basic.json'

const Home = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content fade-in-up">
          <h1>Hi, I'm {basicData.name}</h1>
          <p className="text-light">
            {basicData.designation} at {basicData.company}
          </p>
          <p className="text-light mb-8">
            Passionate software engineer with 12+ years of experience building scalable applications 
            and leading development teams. Specialized in full-stack development, cloud architecture, 
            and team leadership.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-md justify-center items-center mb-8">
            <Link to="/projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>

          <div className="flex justify-center gap-lg">
            <a 
              href={basicData.social.github.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-ghost"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={basicData.social.linkedin.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-ghost"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={basicData.social.website.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-ghost"
              title="Website"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 