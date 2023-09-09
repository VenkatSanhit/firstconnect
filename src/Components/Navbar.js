import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => window.location.reload()}>
      <img src="/Logo-FCW.png" alt="Company Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Shipper</a></li>
        <li><a href="#">Carrier</a></li>
        <li><a href="#">Industries</a></li>
        <li><a href="#">Services</a></li>
        <li className="dropdown">
          <a href="#">Company</a>
          <div className="dropdown-content">
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
