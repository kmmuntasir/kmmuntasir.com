import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          ./muntasir
        </Link>
        
        <button 
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={closeMenu}
            >
              home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={closeMenu}
            >
              about
            </Link>
          </li>
          <li>
            <Link 
              to="/experience" 
              className={isActive('/experience') ? 'active' : ''}
              onClick={closeMenu}
            >
              experience
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={isActive('/projects') ? 'active' : ''}
              onClick={closeMenu}
            >
              projects
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              className={isActive('/skills') ? 'active' : ''}
              onClick={closeMenu}
            >
              skills
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={closeMenu}
            >
              contact
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className={isActive('/resume') ? 'active' : ''}
              onClick={closeMenu}
            >
              resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 