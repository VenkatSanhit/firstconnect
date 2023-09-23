import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-scroll';

const drawerWidth = 240;
const navItems = ['Shippers', 'Carriers', 'Industries', 'Services'];



// const container = window !== undefined ? () => window().document.body : undefined;


const Navbar = (hh) => {
  const navItemStyle = {
    marginLeft: '20px', // Add space between nav items
  };
  const navStyle = {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };
  
  return (
<nav className="nav__container__actions">
          <ul style={navStyle} onClick={()=>(
            console.log(hh)
          )}>
           {hh['hh'] ? (
  <div>
    <li style={navItemStyle}>
      <Link activeClass="active" smooth spy to="about">
        ABOUT
      </Link>
    </li>
    <li style={navItemStyle}>
      <Link activeClass="active" smooth spy to="SandI">
        Services and Industries
      </Link>
    </li>
    <li style={navItemStyle}>
      <Link activeClass="active" smooth spy to="testimonials">
        Testimonials
      </Link>
    </li>
    <li style={navItemStyle}>
      <Link activeClass="active" smooth spy to="contact">
        CONTACT ME
      </Link>
    </li>
  </div>
) : null}

      <div className="nav-right-items">
      <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
      <li style={navItemStyle}><a href="#Shippers">Shippers</a></li>
      <li style={navItemStyle}><a href="#Carriers">Carriers</a></li>
      <li style={navItemStyle}><a href="/services">Services</a></li>
      <li style={navItemStyle}><a href="/industries">Industries</a></li>
      <li style={navItemStyle} className="dropdown">
        <a href="#">Company</a>
        <div className="dropdown-content">
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
        </div>
      </li>
      </ul>
    </div>
            
            {/* <li style={navItemStyle}><a href="#Shippers">Shippers</a></li>
            <li style={navItemStyle}><a href="#Carriers">Carriers</a></li>
            <li style={navItemStyle}><a href="/services">Services</a></li>
            <li style={navItemStyle}><a href="/industries">Industries</a></li>
            <li style={navItemStyle} className="dropdown">
            <a href="#">Company</a>
            <div className="dropdown-content">
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
          </div>
        </li> */}

        </ul>
        </nav>

  );
};

export default Navbar;
