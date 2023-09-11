import React from "react";
import "./Services.css";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import Navbar from "./Navbar.js";
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

const Services = () => {
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

  const servicesData = [
    {
      title: "FTL & LTL",
      imageSrc: "/ftl-ltl.jpg",
      altText: "FTL & LTL",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button:"Get a quote",

    },
    {
      title: "Drayage",
      imageSrc: "/drayage.jpg",
      altText: "Drayage",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button:"Get a quote"
    },
    {
      title: "warehousing",
      imageSrc: "/warehousing.jpg",
      altText: "Warehousing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button:"Get a quote"
    },
    {
      title: "Transportation-Management",
      imageSrc: "/transportation-management.jpg",
      altText: "Transportation-Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button:"Get a quote"
    },
    {
      title: "Routing",
      imageSrc: "/routing.jpg",
      altText: "Routing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button:"Get a quote"
    },
    {
      title: "Freight Brokerage",
      imageSrc: "/F Broker.jpg",
      altText: "Freight Brokerage",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button:"Get a quote"
    },
    {
      title: "Broker & Forwarder Enterprise",
      imageSrc: "/broker-forwarder-enterprise.jpg",
      altText: "Broker & Forwarder Enterprise",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button:"Get a quote"
    },
    {
      title: "White-Glove",
      imageSrc: "/white-glove.jpg",
      altText: "White-Glove",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button:"Get a quote"
    },
    {
      title: "Cross Docking & Transloading",
      imageSrc: "/cdt.jpg",
      altText: "Cross Docking & Transloading",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button:"Get a quote"
    },
    {
      title: "Cross Border",
      imageSrc: "/cross-border.jpg",
      altText: "Cross Border",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button:"Get a quote"
    },
    {
      title: "Air, Land, and Ocean",
      imageSrc: "/air-land-ocean.jpg",
      altText: "Air, Land, and Ocean",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button:"Get a quote"
    },
    
  ];

  // function YourComponent() {
  //   // Define a function to handle the button click
  //   const handleButtonClick = (buttonText) => {
  //     // Do something when the button is clicked
  //     console.log(`Button clicked: ${buttonText}`);
  //   };

  return (
    <div className="App">
      <header className="nav">
        <div
          style={{
            backgroundColor: "red",
            height: "50px",
            width: "50px",
          }}
        >
          logo
        </div>
        <nav className="nav__container__actions">
          <ul style={navStyle}>
            <li style={navItemStyle}>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="home">Services</section>
      <section className="list-services">
      <div className="scrollable-container">
      <Stack direction="column" spacing={2}>
        {servicesData.map((x, i) => (
          // <div>{x.imageSrc}</div>
          <div>
          {x.imageSrc}
          <h3>{x.title}</h3>
          <ul>{x.description}</ul>
          {/* <button onClick={() => handleButtonClick(x.button)}>{x.button}</button> */}
          </div>
          
          
        ))}
        </Stack>
        </div>
      </section>

      
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

        {/* <Typography
          variant="h4"
          component="h1"
          sx={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#007bff" }}
        >
          What Sets Us Apart
        </Typography>
        <Grid container spacing={2} sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  backgroundColor: "#f3d9d9",
                }}
              >
                COMPREHENSIVE
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="ELEVATED OFFERINGS"
                    secondary="Whether it’s project-based, seasonal, or a more regular need, we can offer support with the greatest attention to detail."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="EXTENSIVE NETWORK"
                    secondary="Access to 250,000 trailers, 750 full-service secure yards, and 200+ trailer facilities."
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  backgroundColor: "#f3d9d9",
                }}
              >
                ACCOUNTABLE
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="BACKED BY EXPERTS"
                    secondary="We have a large team of dedicated experts who can communicate with all players of the supply chain: shippers, receivers, carriers, cross-dock facilities and warehouse facilities."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="HANDS-ON COORDINATION"
                    secondary="We understand your account intimately and work hard to cater to your specific needs."
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  backgroundColor: "#f3d9d9",
                }}
              >
                Title 3
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Point 1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Point 2" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>*/}
       
      <Box
        component="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <img src="Logo-FCW.png" alt="Company Logo" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are XYZ company, dedicated to providing the best service to
                our customers.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: info@example.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
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
export default Services;
