import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center">
          <h1 className="hero-name">404</h1>
          <h2 className="hero-title">Page Not Found</h2>
          <p className="hero-description">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="hero-links">
            <Link to="/" className="hero-link">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 