import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file

function YourNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar fixed-navbar">
      <div className="navbar-logo">
        <img src="firstconnect.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="/">Shippers</a>
        <a href="/">Carriers</a>
        <a href="/services">Services</a>
        <a href="/industries">Industries</a>
        <div className="dropdown">
          <a className="company-link" onClick={toggleMenu}>
            Company
          </a>
          <div className={`dropdown-content ${isMenuOpen ? 'open' : ''}`}>
            <a href="/">Contact us</a>
            <a href="/">About us</a>
            <a href="/">Career</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default YourNavbar;
