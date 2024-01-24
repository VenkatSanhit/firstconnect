import React, { useEffect, useState } from "react";
import "./Homepage.css";
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
import {
  TextField,
  Button,
  Container,
  Stack,
  colors,
  Modal,
} from "@mui/material";
// import question_form from './question_form.js';
import question_form from "./question_form";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
// import { Container, Grid, Typography, Link, Box } from '@material-ui/core';
import Footer from "./Footer.js";
import ContactForm from "./Form";
import { Helmet } from "react-helmet";

const Homepage = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='App'>
      <Helmet>
        <meta name='description' content='Your meta description' />

        <meta
          name='description'
          content='top logistic company, 3pl, best freight brokers, transportation services, USA &amp; CANADA,
road freight, rail freight, logistic company in newark New Jersey'
        />

        <meta
          name='abstract'
          content='top logistic company, 3pl, best freight brokers, transportation services, USA &amp; CANADA,
road freight, rail freight, logistic company in newark New Jersey'
        />

        <meta
          name='keywords'
          content='first connect, first connect world, best freight forwarding companies,transportation services,
forwarder companies, Freight broker, logistic company near me, logistic company, global freight services, freight broker near me,
global forwarding, trucking, shipping, freight forwarder, top 10 freight brokers in usa, international shipping, trucks, trucking,
ship truckload, full truckload, LTL, 3PL, freight brokers, cross docking, top logistics companies, truckload transportation, 
quality logistics, intermodal, truckload shipping, ltl shipping, intermodal shipping, less-than-truckload, careers, jobs, 
ocean/air, ocean & air shipping, careers, jobs, sales jobs, sales careers, logistics careers, less-than-truckload shipping,
less-than-truckload shipments, logistics jobs, sales careers, shipping, shipments, truckload freight, logistics careers.'
        />

        <meta
          property='og:url'
          content='https://www.firstconnectworldwide.com'
        />

        <meta name='author' content='firstconnectworldwide' />
        <meta name='author' content='firstconnectworldwidellc' />
        <meta
          property='og:title'
          content='3pl company | logistic company | freight broker'
        />
        <meta
          name='google-site-verification'
          content='q6z9g0NUwdZRV_M2xH8uT3QUimHMR59n5JLZXeQlPjk'
        />
        <meta name='MobileOptimized' content='width' />
        <meta name='HandheldFriendly' content='true' />
        <meta name='distribution' content='global' />
        <meta name='geo.region' content='IN-New Jersey' />
        <meta name='geo.placename' content='Newark' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='english' />
        <meta name='copyright' content='first connect worldwide' />
        <meta
          id='subject'
          name='subject'
          content='first connect worldwide in Newark, New Jersey'
        />
        <meta id='geography' name='geography' content='Newark' />
        <meta id='document-type' name='document-type' content='public' />
        <meta id='Revisit-After' name='Revisit-After' content='1 day' />
        <meta id='city' name='city' content='Newark, New Jersey' />
        <meta id='country' name='country' content='USA' />
        <meta id='audience' name='audience' content='All, Business' />
        <meta id='googlebot' name='googlebot' content='index, follow' />
        <meta id='rating' name='rating' content='general' />
        <meta property='og:image:secure_url' content='' />
        <meta property='og:image:width' content='600' />
        <meta property='og:image:height' content='600' />
        <meta property='og:type' content='website' />
        <meta
          property='og:site_name'
          content='first connect worldwide in Newark, New Jersey'
        />
        {/* <base href='https://www.firstconnectworldwide.com' /> */}
      </Helmet>
      <Navbar hh={true} />
      <section id='home'>
        <div class='home-container'>
          <div class='parallax-content'>
            <div className='tagline'>
              <p>
                Navigating Excellence, Beyond Borders.
                <br />
                Your Cargo, Our Commitment.
                <br />
                Connecting Logistics To Precision.
              </p>
              <Button variant='contained' disableElevation onClick={handleOpen}>
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
                    handleClose={handleClose}
                  />
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </section>
      <section id='about'>
        <div class='fullPage'>
          <div class='fullPageTop'>
            <div className='about-content'>
              <h1>About Us</h1>
              <p>
                We are First Connect Worldwide LLC, a licensed freight brokering
                company, serving 3PL transportation services across USA &
                CANADA. Being certified by The Intermodal Association of North
                America, Blue Book, Transportation Intermediaries Association,
                and Transport and Logistics council, we aim to optimize the flow
                of a well-functioned logistics system. With the constant changes
                in the market, our dynamic approach accompanied by precise order
                processing and conveyance. We acquire the enormous fleets of
                modern vehicles and equipment that are often a much more
                cost-effective solution. The services include outsourcing
                various aspects of supply chain management, such as
                transportation, warehousing, distribution, and fulfilment
                processes, in order to establish strategies of efficient and
                ideal shipment.
              </p>
            </div>
          </div>
          <div class='fullPageBottom'>
            <div class='fullPageLeft'>
              <div className='left-image'>
                <img
                  src='caleb-ruiter-EmEQ6kK_5P0-unsplash (1).jpg'
                  alt='Carrier-Image'
                />
              </div>
              <div className='carrier'>
                <div className='text-content'>
                  <h1>For Carriers</h1>
                  <p>
                    We offer temperature-controlled carriers to keep up with
                    explicit temperature and humidity levels, such as
                    refrigerated carriers for perishable products, and
                    roll-on/roll-off ships for vehicles. Furthermore,
                    consolidating and utilizing air freight for transporting
                    cargo can indeed be a highly efficient and cost-effective
                    strategy. In a similar manner, we can import specific goods
                    from different locations by gathering goods from diverse
                    locations, providing a seamless experience for customers.
                  </p>
                  {/* <Button
                    variant="contained"
                    disableElevation
                    onClick={handleOpen}
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
                      <ContactForm
                        where={"quote"}
                        style={{ transform: "scale(0.3)" }}
                      />
                    </div>
                  </Modal> */}
                </div>
              </div>
            </div>
            <div class='fullPageRight'>
              <div className='leftr-image'>
                <img
                  src='mitchell-luo-YhoXp0AdEWc-unsplash (1).jpg'
                  alt='Shipper-Image'
                />
              </div>
              <div className='shipper'>
                <div className='text-content'>
                  <h1>For Shipper</h1>
                  <p>
                    Our platforms synchronize inventory across various channels
                    and coordinates end-to-end order fulfilment through our
                    network of warehouses and carriers. As shippers, we provide
                    real-time tracking and perceivability of shipments,
                    permitting clients to screen the status and location of
                    their cargo throughout the transportation cycle. We apply
                    the implementations and operation of manufacturers’ outbound
                    warehouses, regional/national distribution centers in a
                    dedicated or shared environment.
                  </p>
                  {/* <Button
                    variant="contained"
                    disableElevation
                    onClick={handleOpen}
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
                      <ContactForm
                        where={"quote"}
                        style={{ transform: "scale(0.3)" }}
                      />
                    </div>
                  </Modal> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='SandI'>
        <div className='container'>
          <div className='services'>
            <div>
              <h1>Our Services</h1>
              <p>
                First Connect Worldwide LLC is your trusted partner for a
                comprehensive range of logistics and freight brokering services.
                With a steadfast commitment to excellence, we offer tailored
                solutions to meet your specific needs. Our services cover the
                entire spectrum of logistics, including freight brokerage,
                transportation solutions, warehousing, supply chain management,
                and customized logistics strategies. We excel in optimizing your
                supply chain, from sourcing to delivery, to enhance efficiency
                and reduce costs. At First Connect Worldwide LLC, we are
                dedicated to streamlining your logistics operations and ensuring
                the smooth flow of your goods, regardless of your industry or
                shipping requirements. With our expertise and commitment, we aim
                to be your preferred logistics partner, delivering reliable and
                efficient services that drive your business forward.
              </p>
              <button className='cta-button-L'>
                <a
                  href='/services'
                  style={{
                    color: "#0e0e0e",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Learn More
                </a>
              </button>
            </div>
          </div>
          <div className='industries'>
            <div>
              <h1>Industries We Serve</h1>
              <p>
                Our expertise extends across various sectors, including retail
                and e-commerce, manufacturing, automotive, food and beverage,
                healthcare, and more. With a dynamic approach to changing market
                conditions, we excel in precise order processing, efficient
                conveyance, and managing fleets of modern vehicles and
                equipment. Our services encompass a wide spectrum of supply
                chain management aspects, including transportation, warehousing,
                distribution, and fulfillment processes. At First Connect
                Worldwide LLC, we leverage our industry knowledge and logistics
                prowess to establish strategies that facilitate efficient and
                ideal shipments, helping businesses thrive in their respective
                domains.
              </p>
              <button className='cta-button-L'>
                <a
                  href='/industries'
                  style={{
                    color: "#0e0e0e",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Learn More
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id='testimonials'>
        <div className='testiUpperhalf'>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
          >
            <div>
              <div className='myCarousel'>
                <h3>Patricai</h3>
                <h4>Drayage Coordinator</h4>
                <p>
                  I recently used services from First Connect Worldwide for a
                  cross-country move, and overall, I was quite satisfied with
                  their operations. The team was productive and punctual in
                  handling the logistics of my move.
                </p>
              </div>
            </div>

            <div>
              <div className='myCarousel'>
                <h3>Arnold</h3>
                <h4>Logistics Coordinator</h4>
                <p>
                  Pleasure to deal with the coordinator, he was efficient and
                  exceptionally organized, keeping communication open between
                  our office, vendors, and all the warehouses involved.
                </p>
              </div>
            </div>

            <div>
              <div className='myCarousel'>
                <h3>Stephen</h3>
                <h4>Frieght Manager</h4>
                <p>
                  At Eco-Friendly Retailers, sustainability is at the core of
                  our business, and finding a drayage partner that shares our
                  values was paramount. GreenCargo Drayage not only excels in
                  drayage operations but also stands out for their commitment to
                  environmental responsibility.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
        <div className='testiLowerhalf' ref={ref}>
          <div className='countUpItem'>
            <h2>DELIVERED PACKAGES</h2>
            {inView && <CountUp end={+10000} />}
          </div>
          <div className='countUpItem'>
            <h2>MILES PER YEAR</h2>
            {inView && <CountUp end={+9000} />}
          </div>
          <div className='countUpItem'>
            <h2>TONS OF GOODS</h2>
            {inView && <CountUp end={+1500} />}
          </div>
          <div className='countUpItem'>
            <h2>SATISFIED CLIENTS</h2>
            {inView && <CountUp end={+140} />}
          </div>
        </div>
      </section>
      {/* <div className='contact-div'> */}
      <section id='contact'>
        {/* <FormControl> */}
        <Stack spacing={2} direction='row' sx={{ margin: 4 }}>
          <div className='questiontag'>
            <h1 style={{ color: "#6C757D" }}>Have any questions?</h1>
            <h3 style={{ color: "#0585c1" }}>We would love to help!</h3>
            <p style={{ color: "#6C757D", fontWeight: "normal" }}>
              24 Commerce St #434, Newark, NJ 07102, United States
            </p>
          </div>
          <form>
            <Stack spacing={2} direction='row' sx={{ marginBottom: 4 }}>
              <TextField
                style={{ color: "#3a7590" }}
                label='Name'
                variant='outlined'
                fullWidth // To make the input field take up the full width
              />
              <TextField label='E-mail' variant='outlined' fullWidth />
            </Stack>
            <TextField
              label='Message'
              variant='outlined'
              fullWidth
              multiline
              sx={{ mb: 4 }} // To allow multiline input for the message
              rows={4} // Specify the number of rows for the message input
            />
            <Button variant='contained' disableElevation onClick={handleOpen}>
              Submit
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
                  handleClose={handleClose}
                />
              </div>
            </Modal>
          </form>
        </Stack>
        {/* </FormControl> */}
      </section>
      {/* </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
