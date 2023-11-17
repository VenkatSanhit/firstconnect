import React, { Fragment, useState } from "react";
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
import {
  CenterFocusStrong,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";
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
  Modal,
} from "@mui/material";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { auto, left } from "@popperjs/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import ContactForm from "./Form";

const cardContentStyle = {
  padding: "16px",
};

const Industries = () => {
  const fstyle = {
    height: "99vh",
    width: "99vw",
    // backgroundColor: "red",
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
      imageSrc: "fruitesandvegetables.png",
      Title: "Vegetables And Fruits",
      altText: "Vegetables And Fruits",
      highlight: "From Farm to Table: Your Fresh Produce Experts",
      description:
        "At FC Logistics, we handle it all - planning, transportation, storage, and safe delivery of fruits and vegetables, nationwide. Our experienced team understands the importance of precise temperature control, ensuring your produce arrives at its best. We continually train our professionals to meet evolving standards, offering you unmatched shipping expertise. With Controlled Atmosphere and innovative drying techniques, we extend the shelf life of your vegetables, guaranteeing freshness.",
    },
    {
      imageSrc: "proteins.png",
      Title: "Meat",
      altText: "Meat",
      highlight: "Safe and Efficient Meat Shipping",
      description:
        "Ensuring germ-free meat and poultry requires freezing prior to shipping, making precise temperature control crucial and challenging.In the USA, our food shipping relies on trucks. Our warehouses securely store eggs, poultry, and meat before their final journey, guaranteeing safe delivery through meticulous control measures.We prioritize temperature control, protection from impurities, swift transit, and team expertise.",
    },
    {
      imageSrc: "dairy-products.png",
      Title: "Milk and Diary products",
      altText: "Dairy Products",
      highlight: "Mastering the Art of Dairy Logistics",
      description:
        "Dairy products constitute a substantial share of agriculture shipments in the USA. Navigating the shipment of dairy goods can be a complex task, one that requires finesse and expertise.At FC Logistics, we excel in ensuring the safest and most efficient milk and its associated product deliveries through our adept operational strategies and cutting-edge monitoring technologies.Our method for transporting involves the use of reefers - temperature-controlled refrigerator units. We deploy a variety of vehicles, including small trucks, intermodal containers, and semi-trailers, all uniquely tailored for the efficient transfer of products with a limited shelf life..",
    },
    {
      imageSrc: "Seed-bag.png",
      Title: "Grains and Seeds",
      altText: "Grain-And-Seeds",
      highlight: "Delivering the Harvest Safely",
      description:
        "When it comes to transporting grains and seeds, you need a reliable, efficient, and compliant transport service. At First Connect Worldwide, we are industry leaders in shipping grains and seeds, utilizing a combination of trucks, vessels, and trains to ensure your agricultural products reach their destination safely.Our highly-trained team is well-versed in handling large volumes of grains and seeds. We understand the unique challenges of transporting wheat and other grains over long distances, and we take special safety measures to ensure the secure delivery of your valuable cargo. When it comes to your harvest, trust us to get it there safely and on time.",
    },
    {
      imageSrc: "groceries.png",
      Title: "Groceries",
      altText: "Groceries",
      highlight: "Efficient Grocery Logistics, Tailored to Your Needs",
      description:
        "At First Connect Worldwide, we offer an extensive array of services that encompass storage, distribution, and last-mile logistics. When it comes to distributing groceries – from factories to warehouses to distribution centers – we employ a variety of transportation options, including truckloads, less than truckloads, and intermodal solutions. You have the flexibility to choose the service that aligns with your specific requirements.Our commitment is to provide fully personalized and scalable services to our valued customers. We excel in delivering groceries across long distances, allowing you to concentrate on the healthy growth of your business.",
    },
    {
      imageSrc: "rolled-steel.png",
      Title: "Steel",
      altText: "Steel",
      highlight: "Reliable Steel Transportation for Diverse Industries",
      description:
        "Steel transportation plays a vital role in various sectors, such as shipbuilding, mechanical engineering, and construction. This industry has witnessed substantial growth in recent years, and the transportation of steel is no exception.First Connect Worldwide has emerged as a key player, offering enhanced, efficient, and consistent transportation services throughout the USA and Canada. We facilitate the transportation of a wide range of materials, including both finished and semi-finished products.Whether you require the transportation of metal sheets, pipes, steel coils, fittings, or metal cords, we are your trusted partner, ready to provide top-notch service!",
    },
    {
      imageSrc: "lumber.png",
      Title: "Lumber",
      altText: "Lumber",
      highlight: "Expert Lumber Shipping Services Tailored to Your Needs",
      description:
        "Lumber shipping is a task best entrusted to seasoned professionals. At First Connect Worldwide, we collaborate with skilled experts who oversee every facet of lumber transport. Whether you require secure services for the transportation of sizable lumber hauls or are seeking LTL (Less Than Truckload) lumber loads, our team is dedicated to delivering professional results, and we're just a call away!Transporting lumber demands meticulous attention to detail at every stage of dispatch. Our well-trained truck drivers are well-versed in the safety protocols required for this task. As a result, they ensure a seamless and professional lumber shipping experience, leaving you with peace of mind.",
    },
    {
      imageSrc: "Pharmaceutical.png",
      Title: "Pharmaceutical",
      altText: "Pharmaceutical",
      highlight:
        "Pharmaceutical Shipping Excellence: Safeguarding Product Integrity",
      description:
        "Our operations underscore the critical significance of a seamless pharmaceutical shipping process that effectively manages, transports, and safeguards a diverse range of products. Our meticulous approach prevents cross-contamination and ensures the utmost product integrity throughout transit.Efficient inventory management is of paramount importance in the pharmaceutical sector, particularly concerning temperature control, stockout prevention, and product expiry avoidance.We dedicate ourselves to precise shipping preparation and supply chain management, prioritizing factors such as time, cost-efficiency, security, documentation, and environmental conditions encountered during the product's journey.",
    },
    {
      imageSrc: "iso-Tanker.png",
      Title: "Iso Tanks",
      altText: "Iso Tanks",
      highlight: "Efficient and Secure ISO Tank Shipping Solutions",
      description:
        "ISO tank containers are the optimal choice for bulk liquid, chemical, or foodstuff transportation. As the demand for intermodal shipping continues to rise, our ISO tank shipping services empower you with a highly efficient and expansive nationwide network, ensuring the safest transport of your valuable cargo.Our commitment to excellence is reflected in our industry-leading tank container logistics services, designed to meet the highest standards. Additionally, we provide specialized tank cleaning facilities dedicated to meticulously cleaning and sanitizing ISO tanks, ensuring the utmost safety and integrity when handling different substances. Trust us for your ISO tank shipping needs.",
    },
    {
      imageSrc: "stones.png",
      Title: "Stone & Granite",
      altText: "Stone & Granite",
      highlight: "Stone Transportation Solutions for Heavy and Delicate Cargo",
      description:
        "Transporting heavy and solid materials like stone slabs, granite blocks, and finished products requires specialized handling and stringent safety measures. At First Connect Worldwide, we are well-equipped and fully prepared to meet these requirements, ensuring the safe and efficient transportation of these valuable cargo items.Our fleet of freight trucks and specially trained stone-carrying vehicles is optimized to improve productivity, facilitating the seamless movement of stone materials from quarries or production facilities to delivery centers, wholesalers, retailers, or construction sites. Additionally, we offer comprehensive warehousing solutions to safeguard against damage or loss during storage.",
    },
    {
      imageSrc: "hazardous-material.png",
      Title: "Hazmat",
      altText: "Hazmat",
      highlight:
        "Safeguarding the World Through Expert Hazardous Material Shipping",
      description:
        "The transportation of hazardous materials is a critical responsibility aimed at protecting public safety and the environment. Our team of logistics experts rigorously adheres to the guidelines established by the Department of Transportation (DOT). From meticulous packaging and labeling to comprehensive documentation and declaration procedures, we ensure every detail is addressed.One of our primary safety measures is the strict segregation of incompatible hazardous materials. By expertly categorizing and isolating these substances, we prevent chemical reactions that could lead to accidents or the release of harmful substances..",
    },
    {
      imageSrc: "dry-goods.png",
      Title: "Dry-Goods",
      altText: "Dry-Goods",
      highlight: "Delivering Dry Goods with Care and Efficiency",
      description:
        "Our dry goods carrier services specialize in the transportation of a wide range of products, including dry materials, textiles, clothing, electronics, appliances, furniture, and more. We understand that these items must remain dry throughout their journey, and we take every precaution to ensure their safe arrival.Our services extend to last-mile deliveries, particularly in urban areas, where we seamlessly transport dry products from distribution centers to their final destinations, be it homes or retail stores.We efficiently consolidate multiple items into a single shipment, making it a smart choice for your logistics needs.",
    },
    {
      imageSrc: "furniture.png",
      Title: "Furniture",
      altText: "Furniture",
      highlight: "Seamless Furniture Logistics for Long-Distance Journeys",
      description:
        "Long-distance transportation poses unique challenges for furniture businesses, importers, and retailers. With our extensive experience in serving the furniture industry, we have honed our expertise to navigate these challenges effectively.Our specialized vehicles, including trucks, vans, and trailers, are equipped with soft pads, straps, and other securing methods to ensure the safe and damage-free transportation of your valuable furniture items. Additionally, we offer White Glove services to provide the utmost care and attention to detail, ensuring your furniture arrives in pristine condition, even on the longest journeys.",
    },
  ];

  const cardData = [
    {
      title: "Drayage Experties",
      image: "drayage expert.jpg",
      description: [
        "Experts in Drayage with understanding of local, state, and federal regulations related to trucking and transportation which includes environmental regulations, safety regulations, and compliance with hours-of-service rules for drivers.",
        "Familiarity with the operations of ports, rail yards, and intermodal terminals is crucial understanding the nderstand the layout, procedures, and protocols at these facilities to streamline cargo movement.",
      ],
    },

    {
      title: "Customer & Quality Service",
      image: "service.jpg",
      description: [
        "Providing excellent customer service: Effective communication, transparency, and responsiveness to client needs are strengths that build trust and long-term relationships.",
        "Maintaining high standards of quality control and ensuring that products are handled and transported safely is vital for 3PL providers.",
      ],
    },

    {
      title: "Cost Efficiency & Flexibility",
      image: "efficient.jpg",
      description: [
        "First Connect Worldwide leverage their volume and expertise to negotiate favorable rates with carriers and suppliers, helping clients reduce logistics costs.",
        " offer tailored solutions to meet the unique requirements of their clients. They can adapt their services to accommodate different industries, types of products, and supply chain complexities.",
      ],
    },
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Navbar hh={false} />

      {/* <section id="industries"><h1>Industries</h1></section> */}
      <div class="parallax-container">
        <div class="parallax-content">
          <div className="tagline">
            {/* <ol className='tagline'> */}
            <p>
              Navigating Excellence, Beyond Borders.
              <br />
              Your Cargo, Our Commitment.
              <br />
              Connecting Logistics To Precision.
            </p>
            <Button variant="contained" disableElevation onClick={handleOpen}>
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
                <ContactForm
                  where={"quote"}
                  style={{ transform: "scale(0.3)" }}
                />
              </div>
            </Modal>
          </div>
        </div>
      </div>
      <Fragment>
        <Container
          maxWidth="xl"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margintop: "10px",
            // backgroundColor: "#D6F7FF",
            backgroundColor: "#ffffff",

            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {industrieslist.map((industry, index) => (
              <div
                key={index + 2}
                style={{ flexBasis: "30%", padding: "10px", margin: "5px" }}
              >
                <Paper
                  elevation={3}
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    // backgroundColor: '#3a7590',
                    // backgroundColor: "#D6DBD2",
                    // backgroundColor:"#A8DADC",
                    // backgroundColor:"#f8f8f5",
                    // backgroundColor:"#F8F8F5",
                    // backgroundColor: "#D6E5E3",
                    backgroundColor: "#CED4DA",
                    borderRadius: "20px",
                  }}
                >
                  <img
                    src={industry.imageSrc}
                    alt={industry.altText}
                    style={{ width: "30%", height: "30%" }}
                  />
                  <div
                    className="title"
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      // color: "#000",
                      color: "#0585C1",
                    }}
                  >
                    {industry.Title}
                  </div>
                  <div
                    className="highlight"
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      marginTop: "10px",
                      // color: "#000",
                      color: "#0585C1",
                    }}
                  >
                    {industry.highlight}
                  </div>
                  <Typography
                    variant="body2"
                    style={{
                      marginTop: "3px",
                      textAlign: "center",
                      color: "#000",
                      // color: "#fff",
                      fontSize: "1rem",
                    }}
                  >
                    {industry.description}
                  </Typography>
                </Paper>
              </div>
            ))}
          </div>
        </Container>
      </Fragment>

      <div>
        <Button variant="contained" disableElevation onClick={handleOpen}>
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
      </div>

      <Container
        maxWidth="xl"
        style={{ marginBottom: "20px", marginTop: "40px" }}
      >
        <Typography
          gutterBottom
          variant="h4"
          align="center"
          style={{ fontWeight: "bold", fontSize: "40px", color: "#0585c1"}}
        >
          What Sets Us Apart?
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            
          }}
        >
          {cardData.map((card, index) => (
            <Card
              key={index}
              sx={{
                // maxWidth: 400,
                flexBasis: "420px",
                // flexBasis: 'calc(33.33% - 20px)', // Adjust the basis to create equal spacing
                margin: "10px", // Add margin for spacing
                boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.2)",
                // backgroundColor: "#F8F8F5",
                backgroundColor: "#fff"
              }}
            >
              <CardMedia
                component="img"
                alt={card.title}
                height="200"
                width="100"
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#0585C1"
                  style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    textAlign: "center",
                    color: "#000",
                    fontSize: "1rem",
                  }}
                >
                  <ol style={{ paddingLeft: "1rem" }}>
                    <p>{card.description[0]}</p>
                    <p>{card.description[1]}</p>
                  </ol>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Industries;
