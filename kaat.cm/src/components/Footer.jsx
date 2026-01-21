import React from 'react';
    import './Footer.css';

    function Footer() {
      return (
        <footer className="footer">
          <div className="container footer-content">
            <p>&copy; {new Date().getFullYear()} KAAT. All rights reserved.</p>
            <p>Every Language, Every Family.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </footer>
      );
    }

    export default Footer;