import React, { Fragment, useState } from "react";
import "./Services.css";
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
import Modal from "react-modal";
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
// import { Container, Grid, Typography, Link, Box } from '@material-ui/core';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import ContactForm from "./Form";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("body ");

const Services = () => {
  const theme = useTheme();
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

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const servicesData = [
    {
      title: "FTL & LTL",
      imageSrc: "ftl-ltl.png",
      altText: "FTL & LTL",
      description: [
        "First Connect Worldwide offers two primary shipping options: Full Truckload (FTL) and Less than Truckload (LTL) shipping services to cater to the diverse needs of our clients.",
        "FTL, as the name suggests, is the choice for those who require a dependable and cost-effective method to transport larger shipments that occupy an entire truck. With FTL, you have the flexibility of an endless schedule and routing options, making it an ideal choice for time-sensitive shipments with specific handling requirements.",
        "On the other hand, LTL is the most common choice for smaller and more budget-conscious shipments. It is designed for situations where goods cannot fill an entire truck. LTL shipments typically range from a few hundred to a few thousand pounds. Multiple LTL shipments can be consolidated into a single truckload, allowing for efficient use of space and cost-effectiveness.",
        "It's important to note that LTL shipments, due to multiple stops for pickups and deliveries, may have longer transit times, whereas FTL shipments offer faster delivery as the truck travels directly from pickup to delivery. The pricing structure also differs between the two options. LTL rates are based on factors such as weight, dimensions, density, and freight class, while FTL pricing is determined by factors like distance, equipment requirements, and additional services.",
        "In summary, LTL is an excellent choice for businesses with smaller shipments and a focus on cost savings, while FTL is the preferred option for larger shipments with a need for efficient and timely transportation. At First Connect Worldwide, we provide tailored solutions to meet the unique requirements of each shipment, ensuring that our clients receive the best service for their specific needs.",
      ],
      button: "Get a quote",
    },
    {
      title: "Drayage",
      imageSrc: "drayage.png",
      altText: "Drayage",
      description: [
        "First Connect Worldwide specializes in efficient and reliable drayage services, seamlessly moving cargo within short distances, whether locally or between nearby transportation hubs. Our comprehensive solutions are designed to facilitate a smooth transition of goods and enable connections to various transportation modes. With in-depth knowledge of local routes, regulations, and terminals, we expedite cargo movement. We excel in intermodal connections, ensuring a continuous flow of goods between different transportation modes. Our services encompass container handling, prioritizing safe and punctual cargo transfer. Efficiency and speed are our focus, reducing cargo movement times and minimizing downtime. We offer customized drayage solutions to meet unique requirements, whether to or from a port, rail yard, or other facilities. Safety and regulatory compliance are paramount, ensuring secure and legally compliant cargo delivery. At First Connect Worldwide, count on us for efficient cargo transportation with a commitment to safety and compliance.",
      ],
      button: "Get a quote",
    },
    {
      title: "warehousing",
      imageSrc: "warehouse.png",
      altText: "Warehousing",
      description: [
        "Businesses should consider factors such as presence at preferred locations, facility capabilities and capacity, security strategies, scalability, pricing structures, and the provider's experience and reputation in the industry. As a warehousing provider, we streamline our operations for manufacturers, distributors, and business owners with an all-in-one solution, from storage and inventory management to order fulfillment and distribution.",
        "Affordability is a key consideration for choosing us and mark flexible pricing structure that aligns with your business needs. We also offer value-added services as a part of our affordable rates. This can incorporate order fulfillment, kitting, and assembly, labeling, packaging, bundling, or assembly work.",
      ],
      button: "Get a quote",
    },
    // {
    //   title: "Intermodal Transport",
    //   imageSrc: "intermodal.png",
    //   altText: "Intermodal Transport",
    //   description: [
    //     "Our intermodal transportation services are characterized by our multi-channel transportation providers who are associated with a specific leg of the journey, typically crossing international borders in order to move cargo from one place in a country to another place in a different country. This approach allows us for efficient and seamless movement of goods across different modes, optimizing costs, transit times, and service quality. This process involves:",
    //     "Origin Pickup",
    //     "Rail or Barge Transport",
    //     "Ocean or Air Transport",
    //     "Destination Transfer",
    //     "Final Delivery",
    //   ],
    //   button: "Get a quote",
    // },
    {
      title: "Routing",
      imageSrc: "route.png",
      altText: "Routing",
      description: [
        "First Connect Worldwide offers cutting-edge routing services that determine the optimal route for transferring goods from the point of origin to the final destination.",
        "We used to monitor shipments through the adoption of various tracking methodologies including GPS, barcodes, RFID tags, and efficient software. We prefer online tracking platforms or systems where clients can enter their shipment details to track the movement of their shipments. Furthermore, we propose world-class manual routing services with a unique methodology where the routing strategy integrates various transport modes and infrastructure to determine the most efficient and practical route for transporting the goods.",
      ],
      button: "Get a quote",
    },
    {
      title: "Flatbed Trucking",
      imageSrc: "flat.png",
      altText: "Flatbed Trucking",
      description: [
        "First Connect Worldwide specializes in providing client-driven flatbed trucking services, meticulously engineered and executed with advanced logistics technology. Our approach remains consistent regardless of the distance involved, ensuring flawless execution every time. We begin with a thorough assessment to determine the ideal type and size of flatbed truck required for transportation.",
        "Our expertise lies in evaluating your specific needs, planning logistics, and ensuring secure load handling through our Flatbed Trucking services. This option is chosen for transporting oversized, heavy, or irregularly shaped items and offers unparalleled flexibility in loading and unloading cargo from various angles. Flatbed trucks come in different sizes and weight capacities, tailored to cargo specifications and legal limits. We employ specialized equipment as needed, including extendable trailers and gooseneck attachments. Additionally, we handle permit acquisition and ensure compliance with regulations for oversized or overweight loads. With Flatbed Trucking, we offer efficient loading and unloading times compared to enclosed trailers. At First Connect Worldwide, we are dedicated to delivering customized and efficient flatbed trucking solutions to meet your unique transportation needs.",
      ],
      button: "Get a quote",
    },
    {
      title: "Broker & Forwarder Enterprise",
      imageSrc: "Broker and Forwarder Enterprise Services.avif",
      altText: "Broker & Forwarder Enterprise",
      description: [
        "First Connect Worldwide's Broker and Forwarder Enterprise Services seamlessly combine the roles of brokerage and forwarding to provide comprehensive logistics management. Acting as a vital link between shippers and carriers, our brokers leverage their extensive network and industry expertise to identify cost-effective carriers that precisely match the transportation requirements of shippers.",
        "Our advanced technology and deep-rooted expertise extend to managing various forwarding services encompassing air freight, ocean freight, road transport, and intermodal solutions. While brokers primarily focus on connecting shippers with carriers and rate negotiation, forwarders adopt a holistic approach, overseeing the entire logistics process.",
        "In addition to these core functions, as Freight Forwarders and Brokers, we offer a spectrum of additional services, including customs entry clearance, trade documentation, insurance maintenance, supply chain management, coordination of customs exams, customs bonds, duty drawbacks, reconciliation, and expert guidance during government audits. Our integrated approach ensures that our clients benefit from end-to-end logistics solutions tailored to their specific needs.",
      ],
      button: "Get a quote",
    },
    {
      title: "White-Glove",
      imageSrc: "whiteg.png",
      altText: "White-Glove",
      description: [
        "First Connect Worldwide complies with White Glove Services attribute special preference and extra bit attention to demand basically for goods such as fine art, luxury goods, high-end furniture, medical equipment, electronics, and other sensitive or high-value items. The term white glove indicates the immense level of care and handling of supply chain operations, that makes the difference between a good and a great service.",
        "We offer premium services that go beyond the standard delivery process in terms of speed, convenience, protection of high-value goods, risk mitigation, removal of debris, assembly, and installation, these are all levels that are directed with primary importance, and white glove delivers on all these fronts.",
      ],
      button: "Get a quote",
    },
    {
      title: "Cross Docking & Transloading",
      imageSrc: "dock.png",
      altText: "Cross Docking & Transloading",
      description: [
        "We used to expedite the transportation cycle through cross-docking techniques and strategies in our logistics management and operations that included unloading incoming delivery vehicles and loading the materials directly into outbound delivery vehicles, omitting traditional warehouse logistical practices.",
        "Cross-docking empowers us to execute faster order processing and delivery. Goods can be transferred directly from incoming shipments to outbound vehicles, prompting shorter lead times and improved client satisfaction. At First Connect Worldwide, we have the network, the viable experience, and the industry expertise - together with a robust communications infrastructure.",
      ],
      button: "Get a quote",
    },
    {
      title: "Dry Van Trucking Services",
      imageSrc: "dock.png",
      altText: "Dry Van Trucking Services",
      description: [
        "First Connect Worldwide is your trusted provider of dry van hauling services, with a strong preference for dedicated loads to ensure consistency in transportation. We proudly serve clients across the country, specializing in the repetitive movement of a wide range of items ideally suited for traditional or expedited dry van trucking solutions.",
        "Our expertise covers the transportation of diverse cargo types, including heat-resistant raw materials, automotive and construction parts, paper and plastic household supplies, non-perishable food and beverages, heat-resistant electronics, furniture, home décor, textiles, and retail-ready clothing. We take pride in streamlining the fragmented truckload market to offer a simplified and reliable experience, even in the face of unforeseen challenges.",
        "Our dry van trucking strategies are designed to meet your specific needs, offering comprehensive transportation, efficient route planning, real-time tracking and communication, flexibility for customization, unwavering regulatory compliance, and the capabilities for both long-haul and short-haul transportation. At First Connect Worldwide, we ensure the secure and efficient transport of your cargo, no matter the requirements",
      ],
      button: "Get a quote",
    },
    // {
    //   title: "Multimodal Transport",
    //   imageSrc: "/cross-border.jpg",
    //   altText: "Multimodal Transport",
    //   description: ["First Connect Worldwide offers trusted dry van hauling services and prefers the consistency of dedicated loads. We assist our clients all over the country by repetitively moving items that are great fits for a traditional or expedited dry van trucking solution. Some of these items include heat-resistant raw materials, automotive and construction parts, paper and plastic household supplies, non-perishable food and drink, heat-resistant electronics, furniture and home décor, textiles, and retail-ready clothing.",
    //   "We aggregate the fragmented truckload market into a simplified experience, even when spontaneous issues emerge. Here are some highlights of our dry van trucking strategies:",
    //   "•	Comprehensive Transportation",
    //   "•	Diverse Cargo Types",
    //   "•	Efficient Route Planning",
    //   "•	Tracking and Communication",
    //   "•	Flexibility and Customization",
    //   "•	Regulatory Compliance",
    //   "•	Long-Haul and Short-Haul Capabilities.",],
    //   button:"Get a quote"
    // },

    // {
    //   title: "Container Shipping",
    //   imageSrc: "/air-land-ocean.jpg",
    //   altText: "Container Shipping",
    //   description: ["When it comes to container freight, First Connect Worldwide predominantly stands as a principal point of support, facilitating the movement of goods across vast distances and interfacing with businesses and clients globally.",
    //   "Our functionality of container shipping thoroughly relies on standardized containers, efficient logistics, and a complex network of ports, vessels, freight forwarders, and other stakeholders. The operations are primarily rushed through multiple transshipments in which goods are stacked into containers at the origin port and then unloaded at the destination port.",
    //   ],
    //   button:"Get a quote",
    // },
  ];
  const handleCardClick = (description) => {
    alert(description);
  };

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

  return (
    <div className="App">
      <Navbar hh={false} />

      {/* <section id="services">Services</section> */}

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

      <div className="service-cards-container" color="#D6E5E3">
        {servicesData.map((service, i) => (
          <Card
            key={i}
            className="service-card"
            onClick={() => handleCardClick(service.description)}
            sx={{
              backgroundColor: "#D6E5E3",
              borderRadius: "30px",
              // maxWidth: 345,
            }}
          >
            {/* <CardMedia
              component="img"
              className="card-image"
              image={service.imageSrc}
              alt={service.altText}
              sx={{
                maxWidth: 300,
                maxHeight: 900,
              }} */}

            <CardMedia
              component="img"
              className="card-image"
              image={service.imageSrc}
              alt={service.altText}
              sx={{
                maxWidth: 200,
                maxHeight: 200,
                marginTop: 4,
                marginLeft: 3,
              }}
            />
            {/* <Box className="card-content"> */}
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ fontWeight: "bold" }}
                component="div"
                style={{ color: "#0585c1" }}
              >
                {service.title}
              </Typography>
              {/* <h3>{service.title}</h3> */}
              <p
                style={{
                  textAlign: "justify",
                  textAlignLast: "center",
                  marginRight: 40,
                  marginLeft: 20,
                }}
              >
                {service.description}
              </p>
              {/* <Button variant="contained" disableElevation onClick={handleOpen}>
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
              </Modal> */}
            </CardContent>
            {/* </Box> */}
          </Card>
        ))}
      </div>

      <Container
        maxWidth="xl"
        style={{ marginBottom: "20px", marginTop: "40px" }}
      >
        <Typography
          gutterBottom
          variant="h4"
          align="center"
          style={{ fontWeight: "bold", fontSize: "40px", color: "#0585c1" }}
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
export default Services;
