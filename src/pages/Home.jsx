import basicData from '../data/basic.json';

const Home = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero-name">{basicData.name}</h1>
        <h2 className="hero-title">{basicData.designation} @ {basicData.company}</h2>
        <p className="hero-description">
          Senior Software Engineer with 10+ years of experience building scalable web applications, 
          microservices, and leading development teams. Passionate about clean code, system architecture, 
          and mentoring developers.
        </p>
        <div className="hero-links">
          <a 
            href={basicData.social.github.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-link"
          >
            {basicData.social.github.text}
          </a>
          <a 
            href={basicData.social.linkedin.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-link"
          >
            {basicData.social.linkedin.text}
          </a>
          <a 
            href={`mailto:${basicData.email}`}
            className="hero-link"
          >
            {basicData.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home; 