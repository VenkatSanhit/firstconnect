import React, { useState } from "react";
import "./Navbar.css"; // Import your CSS file
import ContactForm from "./Form";
import { Modal, Button } from "@mui/material";
import { Co2Sharp } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
    <nav className='navbar fixed-navbar'>
      <Link to='/' className='navbar-logo'>
        <img src='Logo FCW.png' alt='Logo' />
      </Link>
      <div className='navbar-links'>
        <a
          href
          variant='contained'
          disableElevation
          onClick={handleOpen}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "#000",
          }}
        >
          {" "}
          Shipper{" "}
        </a>
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
            <ContactForm where={"quote"} style={{ transform: "scale(0.3)" }} />
          </div>
        </Modal>
        <Link to='/services'>Services</Link>
        <Link to='/industries'>Industries </Link>
        <Link
          to='#'
          variant='contained'
          disableElevation
          onClick={handleOpen}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "#000", // Set the color you want for the text
          }}
        >
          Contact Us
        </Link>
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
            <ContactForm where={"quote"} style={{ transform: "scale(0.3)" }} />
          </div>
        </Modal>

        {/* <a href="/ContactForm/career"
          variant="contained"
          disableElevation
          // onClick={handleOpen}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "#000",
          }}>
          Careers
        </a> */}

        <Link
          variant='contained'
          disableElevation
          // component='a'
          to='/ContactForm/career'
          style={{
            cursor: "pointer",
            textDecoration: "none",
            textAlign: "center",
            color: "#fff",
            padding: "8px 20px",
            backgroundColor: "rgb(25,118,210)",
            borderRadius: "5px",
          }}
        >
          Careers
        </Link>

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
            <ContactForm where={"quote"} style={{ transform: "scale(0.3)" }} />
          </div>
        </Modal>

        <Button
          variant='contained'
          disableElevation
          onClick={handleOpen}
          className='get-quote-button'
          style={{ marginRight: "40px" }}
        >
          Get a Quote
        </Button>

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
            <ContactForm where={"quote"} style={{ transform: "scale(0.3)" }} />
          </div>
        </Modal>

        {/* <div className="dropdown">
          <a className="company-link" onClick={toggleMenu}>
            Company
          </a> */}
        {/* <div className={`dropdown-content ${isMenuOpen ? "open" : ""}`}> */}
        {/* <a href variant="contained" disableElevation onClick={handleOpen}>Career</a> */}
        {/* <Modal open={open} onClose={handleClose}>
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
            </Modal> */}
      </div>
      {/* </div> */}
      {/* </div> */}
    </nav>
  );
}

export default YourNavbar;
