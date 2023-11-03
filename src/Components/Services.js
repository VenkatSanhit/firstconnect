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
        "First Connect Worldwide offers FTL shipping, an ideal choice that has an endless schedule and routing options. Full truckload shipping has the elements that are exactly what the name suggests; serves clients who need a dependable and monetary method to transport their homegrown shipments.",
        "On the other hand, consolidation is the most widely recognized choice of modest shipments and Less than truckload shipment usually opts when goods can’t fill an entire truck. LTL shipments typically range from a few hundred to a few thousand pounds of truckload.",
        "• Multiple shipments consolidated into a single truckload in LTL & Entire truckload dedicated to a single shipment in FTL.",
        "• LTL is suitable for smaller shipments and FTL is suitable for larger shipments that occupy the entire trailer.",
        "• LTL takes longer time to transport due to multiple stops for pickups and deliveries whereas FTL has faster transit times as the truck goes directly from pickup to delivery.",
        "• LTL is priced based on factors such as weight, dimensions, density, and freight class but FTL price is based on factors such as distance, equipment required, and additional services.",
        "• LTL is ideal for businesses with smaller shipments and cost-consciousness and FTL is ideal for time-sensitive shipments and when specific handling requirements are needed.",
      ],
      button: "Get a quote",
    },
    {
      title: "Drayage",
      imageSrc: "drayage.png",
      altText: "Drayage",
      description: [
        "First Connect Worldwide provides efficient and reliable drayage services to seamlessly move your cargo within a localized area or between nearby transportation hubs. Our drayage solutions are designed to ensure the smooth transition of goods from one point to another, covering short distances and connecting to various modes of transportation.",
        "Our drayage services offer several advantages:",
        "•	Local Expertise: We have a deep understanding of local routes, regulations, and terminals, allowing us to expedite your cargo's movement.",
        "•	Intermodal Connections: We seamlessly connect your cargo between different modes of transportation, ensuring the efficient flow of goods.",
        "•	Container Transport: Our drayage services include container handling, ensuring the safe and timely transfer of cargo between containers and transportation modes.",
        "•	Efficiency and Speed: We prioritize speed and efficiency in our drayage operations, enabling quicker cargo movements and reducing downtime.",
        "•	Custom Solutions: Tailored drayage solutions are available to meet your specific needs, whether you're transporting goods to or from a port, rail yard, or other facilities.",
        "•	Safety and Compliance: We adhere to all safety and compliance standards to ensure your cargo reaches its destination securely and in accordance with regulations.",
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
    {
      title: "Intermodal Transport",
      imageSrc: "intermodal.png",
      altText: "Intermodal Transport",
      description: [
        "Our intermodal transportation services are characterized by our multi-channel transportation providers who are associated with a specific leg of the journey, typically crossing international borders in order to move cargo from one place in a country to another place in a different country. This approach allows us for efficient and seamless movement of goods across different modes, optimizing costs, transit times, and service quality. This process involves:",
        "Origin Pickup",
        "Rail or Barge Transport",
        "Ocean or Air Transport",
        "Destination Transfer",
        "Final Delivery",
      ],
      button: "Get a quote",
    },
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
        "First Connect Worldwide carefully engineered flatbed trucking solutions and advanced logistics technology and precise execution to deliver modified, client-driven flatbed trucking services. We oversee moves of fluctuating distance, adopting the same carefully tailored approach to each to execute without any blunder. This assessment helps determine the appropriate type and size of flatbed truck required for transportation.",
        "We have the knowledge and abilities to evaluate your needs, plan the logistics, and guarantee legitimate load securing through Flatbed Trucking that includes:",
        "•	Flatbed Trucking is used for transporting oversized, heavy, or irregularly shaped items.",
        "•	Provides flexibility in loading and unloading cargo from the sides, rear, and top.",
        "•	Flatbed trucks come in different sizes and weight capacities, depending on the truck's specifications and legal weight limits.",
        "•	Specialized equipment, such as extendable trailers or removable gooseneck attachments, may be used for specific types of cargo.",
        "•	Acquire additional permits and compliance with specific regulations for oversized or overweight loads.",
        "•	Quicker loading and unloading times compared to enclosed trailers",
      ],
      button: "Get a quote",
    },
    {
      title: "Broker & Forwarder Enterprise",
      imageSrc: "enterprise.png",
      altText: "Broker & Forwarder Enterprise",
      description: [
        "Our Broker and Forwarder Enterprise Services encompass both brokerage and forwarding functions, providing end-to-end management of the logistics process where the broker serves as a liaison between shippers and carriers. We influence their network and industry skills to find reasonable carriers for the specific transportation needs of shippers.",
        "Through our advanced technology and expertise, we offer supply chain visibility to our clients by managing various forwarding services through air freight, ocean freight, road transport, and intermodal solutions. While brokers essentially center around connecting shippers with carriers and negotiating rates, forwarders adopt a more comprehensive approach, managing the entire logistics process.",
        "In addition, we as Freight Forwarders and Brokers can also offer services that include:",
        "•	Customs entry clearance",
        "•	Trade documentation",
        "•	Insurance Maintenance",
        "•	Supply chain management",
        "•	The coordination of Customs exams",
        "•	Customs bonds",
        "•	Duty drawbacks and reconciliation",
        "•	Advice and guidance with government audits",
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
                  marginRight: 40,
                  marginLeft: 20,
                }}
              >
                {service.description}
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
