import React from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import './Header.css';

    function Header() {
      return (
        <header className="header">
          <div className="header-container container">
            <Link to="/" className="logo">
              <img src={`${import.meta.env.BASE_URL}kaat-logo.png`} alt="KAAT Logo" className="logo-img" />
            </Link>
            <nav className="nav">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
              <NavLink to="/books" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Books</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;