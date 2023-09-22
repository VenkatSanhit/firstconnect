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
import { CenterFocusStrong, Facebook, Instagram, Twitter } from "@mui/icons-material";
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
import Footer from './Footer.js';
import { auto, left } from "@popperjs/core";

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
      Title: 'Vegetables And Fruits',
      altText: 'Vegetables And Fruits',
      highlight:'From Farm to Table: Your Fresh Produce Experts',
      description: 'At FC Logistics, we handle it all - planning, transportation, storage, and safe delivery of fruits and vegetables, nationwide. Our experienced team understands the importance of precise temperature control, ensuring your produce arrives at its best. We continually train our professionals to meet evolving standards, offering you unmatched shipping expertise. With Controlled Atmosphere and innovative drying techniques, we extend the shelf life of your vegetables, guaranteeing freshness.',
    },
    {
      imageSrc: 'proteins.png',
      Title: 'Meat',
      altText: 'Meat',
      highlight:'Safe and Efficient Meat Shipping',
      description: "Ensuring germ-free meat and poultry requires freezing prior to shipping, making precise temperature control crucial and challenging.In the USA, our food shipping relies on trucks. Our warehouses securely store eggs, poultry, and meat before their final journey, guaranteeing safe delivery through meticulous control measures.We prioritize temperature control, protection from impurities, swift transit, and team expertise.",  
    },
    {
      imageSrc: 'dairy-products.png',
      Title: 'Milk and Diary products',
      altText: 'Dairy Products',
      highlight:'Mastering the Art of Dairy Logistics',
      description: 'Dairy products constitute a substantial share of agriculture shipments in the USA. Navigating the shipment of dairy goods can be a complex task, one that requires finesse and expertise.At FC Logistics, we excel in ensuring the safest and most efficient milk and its associated product deliveries through our adept operational strategies and cutting-edge monitoring technologies.Our method for transporting involves the use of reefers - temperature-controlled refrigerator units. We deploy a variety of vehicles, including small trucks, intermodal containers, and semi-trailers, all uniquely tailored for the efficient transfer of products with a limited shelf life..',
    },
    {
      imageSrc: 'Grain-And-Seeds.jpg',
      Title: 'Vegetables And Fruits',
      altText: 'Grain-And-Seeds',
      description: 'Description of Grain-And-Seeds.',
    },
    {
      imageSrc: 'Groceries.jpg',
      Title: 'Vegetables And Fruits',
      altText: 'Groceries',
      description: 'Description of Groceries.',
    },
    {
      imageSrc: 'Steel.jpg',
      Title: 'Vegetables And Fruits',
      altText: 'Steel',
      description: 'Description of Steel.',
    },
    {
      imageSrc: 'Lumber.jpg',
      Title: 'Vegetables And Fruits',
      altText: 'Lumber',
      description: 'Description of Lumber.',
    },
    {
      imageSrc: 'Pharmaceutical.jpg',
      Title: 'Vegetables And Fruits',
      altText: 'Pharmaceutical',
      description: 'Description of Pharmaceutical.',
    },
    {
      imageSrc: 'Iso-Tanks.jpg',
      Title: 'Vegetables And Fruits',
      altText: 'Iso Tanks',
      description: 'Description of Iso Tanks.',
    },
    {
      imageSrc: 'Stone & Granite.jpg',
      Title: 'Vegetables And Fruits',
      altText: 'Stone & Granite',
      description: 'Description of Stone & Granite.',
    },
    {
      imageSrc: 'Hazmat.jpg',
      Title: 'Vegetables And Fruits',
      altText: 'Hazmat',
      description: 'Description of Hazmat.',
    },
    {
      imageSrc: 'Dry-Goods.jpg',
      Title: 'Vegetables And Fruits',
      altText: 'Dry-Goods',
      description: 'Description of Dry-Goods.',
    },
    {
      imageSrc: 'Furniture.jpg',
      Title: 'Vegetables And Fruits',
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
            <div className="title" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{industry.Title}</div>
            <div className="highlight" style={{ fontWeight: 'bold', fontSize: '1rem' , marginTop: '10px' }}>{industry.highlight}</div>
            <Typography variant="body2" style={{ marginTop: '3px', textAlign:'center'}}>
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

   <div><Footer /></div>

      </div>




  );
};
export default Industries;