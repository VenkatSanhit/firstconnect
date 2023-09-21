import React, { Fragment } from "react";
import "./Industries.css";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

import { Link } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { TextField, Container, Stack } from "@mui/material";
// import question_form from './question_form.js';
import question_form from "./question_form";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
// import { Container, Grid, Typography, Link, Box } from '@material-ui/core';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Grid,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Navbar from "./Navbar.js";

const Industries = () => {
  const fstyle = {
    height: "100vh",
    width: "100%",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "space-between", // Add this line to separate logo and nav
    alignItems: "center", // Vertically center items
    padding: "0 20px", // Add padding for spacing
  };

  const navStyle = {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  };

  const navItemStyle = {
    marginLeft: "20px", // Add space between nav items
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the callback is triggered only once when the element is in view
  });

  const industrieslist = [
    {
      imageSrc: 'fruitesandvegetables.png',
      altText: 'Vegetables And Fruits',
      figcaption:"mikan933-Flaticon",
      description: 'Description of Vegetables And Fruits.',
    },
    {
      imageSrc: 'Meat.jpg',
      altText: 'Meat',
      description: 'Description of Meat.',
    },
    {
      imageSrc: 'Dairy-Products.jpg',
      altText: 'Dairy Products',
      description: 'Description of Dairy-Products.',
    },
    {
      imageSrc: 'Grain-And-Seeds.jpg',
      altText: 'Grain-And-Seeds',
      description: 'Description of Grain-And-Seeds.',
    },
    {
      imageSrc: 'Groceries.jpg',
      altText: 'Groceries',
      description: 'Description of Groceries.',
    },
    {
      imageSrc: 'Steel.jpg',
      altText: 'Steel',
      description: 'Description of Steel.',
    },
    {
      imageSrc: 'Lumber.jpg',
      altText: 'Lumber',
      description: 'Description of Lumber.',
    },
    {
      imageSrc: 'Pharmaceutical.jpg',
      altText: 'Pharmaceutical',
      description: 'Description of Pharmaceutical.',
    },
    {
      imageSrc: 'Iso-Tanks.jpg',
      altText: 'Iso Tanks',
      description: 'Description of Iso Tanks.',
    },
    {
      imageSrc: 'Stone & Granite.jpg',
      altText: 'Stone & Granite',
      description: 'Description of Stone & Granite.',
    },
    {
      imageSrc: 'Hazmat.jpg',
      altText: 'Hazmat',
      description: 'Description of Hazmat.',
    },
    {
      imageSrc: 'Dry-Goods.jpg',
      altText: 'Dry-Goods',
      description: 'Description of Dry-Goods.',
    },
    {
      imageSrc: 'Furniture.jpg',
      altText: 'Furniture',
      description: 'Description of Furniture.',
    },
  
  ];

  return (
    <div className="App">
      <header className="nav">
        <div
        >
          <img
              src="First-connect -Logo.png"
              alt="Company Logo"
              style={{ maxWidth: '100%', height: 'auto', marginLeft: 60}}
            />
        </div>
        <Navbar hh={false}/>
      </header>
      <section id="industries"><h1>Industries</h1></section>

      <Fragment>
      <Container style={{ display: 'flex', justifyContent: 'space-between', margintop: '10px' }}>
      {/* First Column */}
      <div style={{ flexBasis: '48%', display: 'flex', flexDirection: 'column' }}>
        {industrieslist.slice(0, 6).map((industry, index) => (
          <Paper
            key={index}
            elevation={3}
            style={{
              padding: '20px',
              marginBottom: '20px',
              textAlign: 'center',
              backgroundColor: '#f0f0f0',
            }}
          >
            <img
              src={industry.imageSrc}
              alt={industry.altText}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <div className="attribution">{industry.figcaption}</div>
            <Typography variant="body2" style={{ marginTop: '10px' }}>
              {industry.description}
            </Typography>
          </Paper>
        ))}
      </div>

      {/* Second Column */}
      <div style={{ flexBasis: '48%', display: 'flex', flexDirection: 'column' }}>
        {industrieslist.slice(7).map((industry, index) => (
          <Paper
            key={index + 2}
            elevation={3}
            style={{
              padding: '20px',
              marginBottom: '20px',
              textAlign: 'center',
              backgroundColor: '#f0f0f0',
            }}
          >
            <img
              src={industry.imageSrc}
              alt={industry.altText}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <Typography variant="body2" style={{ marginTop: '10px' }}>
              {industry.description}
            </Typography>
          </Paper>
        ))}
      </div>
    </Container>
      {/* <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
      {industrieslist.map((industry, index) => (
        <Paper
          key={index}
          elevation={3}
          style={{
            flexBasis: '48%', // Adjust the width as needed
            padding: '20px',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          <img
            src={industry.imageSrc}
            alt={industry.altText}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Typography variant="body2" style={{ marginTop: '10px' }}>
            {industry.description}
          </Typography>
        </Paper>
        
      ))}  
    </Container> */}
    </Fragment>


    {/* Whats sets us aprt */}
      <section className="sets-us-apart-container">
  <div className="upperhalf">
    <h1>What Sets us apart</h1>
    <p>bla blah bla blah</p>
  </div>
  <div className="lowerhalf-container">
    <div className="box">
      <div className="lowerhalf">
        <h3>COMPREHENSIVE</h3>
        <ul>
          <li>
            <h4>ELEVATED OFFERINGS</h4>
            <p>
              Whether it’s project-based, seasonal, or a more regular need, we can offer support with the greatest attention to detail.
            </p>
          </li>
          </ul>
          <ul>
          <li>
            <h4>EXTENSIVE NETWORK</h4>
            <p>
              Access to 250,000 trailers, 750 full-service secure yards, and 200+ trailer facilities.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div className="box">
      <div className="lowerhalf">
        <h3>ACCOUNTABLE</h3>
        <ul>
          <li>
            <h4>BACKED BY EXPERTS</h4>
            <p>
              We have a large team of dedicated experts who can communicate with all players of the supply chain: shippers, receivers, carriers, cross-dock facilities and warehouse facilities.
            </p>
          </li>
          </ul>
          <ul>
          <li>
            <h4>HANDS-ON COORDINATION</h4>
            <p>
              We understand your account intimately and work hard to cater to your specific needs.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div className="box">
      <div className="lowerhalf">
        <h3>Title 3</h3>
        <ul>
          <li>Point 1</li></ul>
          <ul><li>Point 2</li>
        </ul>
      </div>
    </div>
  </div>
</section>

   {/* Footer */}
      <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
          <Box flexBasis={{ xs: '100%', sm: '25%' }} mb={{ xs: 2, sm: 0 }}>
            <img
              src="Logo-FCW.png"
              alt="Company Logo"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
          <Box flexBasis={{ xs: '100%', sm: '25%' }} px={2}>
            <Typography variant="h6" gutterBottom style={{ color: '#ff5733' }}>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We are XYZ company, dedicated to providing the best service to our customers.
            </Typography>
          </Box>
          <Box flexBasis={{ xs: '100%', sm: '25%' }} px={2}>
            <Typography variant="h6" gutterBottom style={{ color: '#ff5733' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: +1 234 567 8901
            </Typography>
          </Box>
          <Box flexBasis={{ xs: '100%', sm: '25%' }} px={2}>
            <Typography variant="h6" gutterBottom style={{ color: '#ff5733' }}>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit" style={{ marginRight: '1rem' }}>
              <FacebookIcon fontSize="large" />
            </Link>
            <Link href="https://www.instagram.com/" color="inherit" style={{ marginRight: '1rem' }}>
              <InstagramIcon fontSize="large" />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <TwitterIcon fontSize="large" />
            </Link>
          </Box>
        </Box>
        <Box mt={5} style={{ borderTop: '1px solid #555', paddingTop: '1rem' }}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
      </div>




  );
};
export default Industries;