const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Muntasir Billah Munna
        </p>
        <p>
          <a href="https://github.com/kmmuntasir" target="_blank" rel="noopener noreferrer">
            github.com/kmmuntasir
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 