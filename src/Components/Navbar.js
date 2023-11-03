import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file
import ContactForm from "./Form";
import {Modal} from "@mui/material";

function YourNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar fixed-navbar">
      <div className="navbar-logo">
        <img src="firstconnect.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href variant="contained" disableElevation onClick={handleOpen} >Shippers</a>
        <Modal open={open} onClose={handleClose}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#fff",
                  padding: "20px",
                }}
              >
                <ContactForm
                  where={"quote"}
                  style={{ transform: "scale(0.3)" }}
                />
              </div>
            </Modal>

        <a href variant="contained" disableElevation onClick={handleOpen}>Carriers</a>
        <Modal open={open} onClose={handleClose}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#fff",
                  padding: "20px",
                }}
              >
                <ContactForm
                  where={"quote"}
                  style={{ transform: "scale(0.3)" }}
                />
              </div>
            </Modal>

        <a href="/services">Services</a>
        <a href="/industries">Industries</a>
        <div className="dropdown">
          <a className="company-link" onClick={toggleMenu}>
            Company
          </a>
          <div className={`dropdown-content ${isMenuOpen ? 'open' : ''}`}>
            <a href="/">Contact us</a>
            <a href variant="contained" disableElevation onClick={handleOpen}>Career</a>
            <Modal open={open} onClose={handleClose}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#fff",
                  padding: "20px",
                }}
              >
                <ContactForm
                  where={"career"}
                  style={{ transform: "scale(0.3)" }}
                />
              </div>
            </Modal>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default YourNavbar;
