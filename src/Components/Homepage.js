import React from 'react';
import './Homepage.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import Navbar from './Navbar.js';
import { Link } from 'react-scroll';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { TextField, Button, Container, Stack, colors } from '@mui/material';
// import question_form from './question_form.js';
import question_form from './question_form';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
// import { Container, Grid, Typography, Link, Box } from '@material-ui/core';
import Footer from './Footer.js';




const Homepage = () => {
  const navStyle = {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };
    

  const navItemStyle = {
    marginLeft: '20px', // Add space between nav items
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures the callback is triggered only once when the element is in view
  });
 
  return (
    <div className="App">
     <Navbar hh={true}/>
      <section id="home">
       <div className='tagline'>
        {/* <ol className='tagline'> */}
        <p >Navigating Excellence, Beyond Borders.<br/>Your Cargo, Our Commitment.<br/>Connecting Logistics To Precision.</p>
        {/* <p>Your Cargo, Our Commitment</p>
        <p>Connecting Logistics To Precision</p> */}
        {/* </ol> */}
        <Button variant="contained" disableElevation>
      Get a Quote
    </Button>
        </div>
       


     </section>
      <section id="about">
      <div class="fullPage">
  <div class="fullPageTop">
  <div className="about-content">
          <h1>About Us</h1>
          <p>We are First Connect Worldwide LLC, a licensed freight brokering company, serving 3PL transportation services across USA & CANADA. Being certified by The Intermodal Association of North America, Blue Book, Transportation Intermediaries Association, and Transport and Logistics council, we aim to optimize the flow of a well-functioned logistics system.<br/>
             With the constant changes in the market, our dynamic approach accompanied by precise order processing and conveyance. We acquire the enormous fleets of modern vehicles and equipment that are often a much more cost-effective solution.<br/>
             The services include outsourcing various aspects of supply chain management, such as transportation, warehousing, distribution, and fulfilment processes, in order to establish strategies of efficient and ideal shipment.
         </p>
        </div>
  </div>
  <div class="fullPageBottom">
    <div class="fullPageLeft">
    <div className="left-image">
    <img src="caleb-ruiter-EmEQ6kK_5P0-unsplash (1).jpg" alt="Carrier-Image" />
  </div>
    <div className="carrier">
  <div className="text-content">
    <h1>For Carriers</h1>
    <p>We offer temperature-controlled carriers to keep up with explicit temperature and humidity levels, such as refrigerated carriers for perishable products, and roll-on/roll-off ships for vehicles.
      Furthermore, consolidating and utilizing air freight for transporting cargo can indeed be a highly efficient and cost-effective strategy.
      In a similar manner, we can import specific goods from different locations by gathering goods from diverse locations, providing a seamless experience for customers.
    </p>
    <button className="cta-button">Learn More</button>
  </div>
</div>

 {/* <div className="carrier">
          {/* <img src="your-carrier-image.jpg" alt="Carrier-Image" className="left-image" /> */}
          {/* <h1>For Carriers</h1>
          <p>We offer temperature-controlled carriers to keep up with explicit temperature and humidity levels, such as refrigerated carriers for perishable products, and roll-on/roll-off ships for vehicles.
             Furthermore, consolidating and utilizing air freight for transporting cargo can indeed be a highly efficient and cost-effective strategy. 
            In a similar manner, we can import specific goods from different locations by gathering goods from diverse locations, providing seamless experience for customers.
          </p>
          <button className="cta-button">Learn More</button>
        </div> */}

    </div>
    <div class="fullPageRight">
    <div className="leftr-image">
    <img src="mitchell-luo-YhoXp0AdEWc-unsplash (1).jpg" alt="Shipper-Image" />
    </div>
    <div className="shipper">
    <div className="text-content">
    <h1>For Shipper</h1>
            <p>Our platforms synchronize inventory across various channels and coordinates end-to-end order fulfilment through our dependable network of warehouses and carriers.
             As shippers, we provide real-time tracking and perceivability of shipments, permitting clients to screen the status and location of their cargo throughout the transportation cycle.
             We apply the implementations and operation of manufacturers’ outbound warehouses, regional/national distribution centers in a dedicated or shared environment. 
          </p>
          <button className="cta-button">Learn More</button>
          </div>
</div>



    {/* <div className="shipper">
          {/* <img src="mitchell-luo-YhoXp0AdEWc-unsplash.jpg" alt="Shipper-Image" className="left-image" /> */}
          {/* <h1>For Shipper</h1>
            <p>Our platforms synchronize inventory across various channels and coordinates end-to-end order fulfilment through our dependable network of warehouses and carriers.
             As shippers, we provide real-time tracking and perceivability of shipments, permitting clients to screen the status and location of their cargo throughout the transportation cycle.
             We apply the implementations and operation of manufacturers’ outbound warehouses, regional/national distribution centers in a dedicated or shared environment. 
          </p>
          <button className="cta-button">Learn More</button>
        </div> */} 

    </div>
  </div>
</div>


      </section>
      <section id="SandI">

      <div className="container">
  <div className="services">
    <div>
    <h1>Our Services</h1>
    <p>First Connect Worldwide LLC is your trusted partner for a comprehensive range of logistics and freight brokering services. With a steadfast commitment to excellence, we offer tailored solutions to meet your specific needs. Our services cover the entire spectrum of logistics, including freight brokerage, transportation solutions, warehousing, supply chain management, and customized logistics strategies. We excel in optimizing your supply chain, from sourcing to delivery, to enhance efficiency and reduce costs.
       At First Connect Worldwide LLC, we are dedicated to streamlining your logistics operations and ensuring the smooth flow of your goods, regardless of your industry or shipping requirements. With our expertise and commitment, we aim to be your preferred logistics partner, delivering reliable and efficient services that drive your business forward.</p>
    <button className="cta-button">Get a Quote</button>
    </div>
  </div>
  <div className="industries">
    <div>
    <h1>Industries We Serve</h1>
    <p>Our expertise extends across various sectors, including retail and e-commerce, manufacturing, automotive, food and beverage, healthcare, and more. With a dynamic approach to changing market conditions, we excel in precise order processing, efficient conveyance, and managing fleets of modern vehicles and equipment. 
       Our services encompass a wide spectrum of supply chain management aspects, including transportation, warehousing, distribution, and fulfillment processes.
       At First Connect Worldwide LLC, we leverage our industry knowledge and logistics prowess to establish strategies that facilitate efficient and ideal shipments, helping businesses thrive in their respective domains.</p>
    <button className="cta-button">Get a Quote</button>
    </div>
  </div>
</div>

      </section>
      <section id="testimonials">
        <div className="testiUpperhalf">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="Sakshi.jpg" />
          <div className="myCarousel">
            <h3>Sakshi</h3>
            <h4>SEO</h4>
            <p>
            We have been partnering with Firstconnect Drayage Services for several years now, and their expertise in managing short-haul transportation has been instrumental in our supply chain operations. 
            Their deep understanding of regulatory requirements and port operations has not only saved us time but also ensured the safe and efficient movement of our cargo. 
            </p>
          </div>
        </div>

        <div>
          <img src="Smith.jpg" />
          <div className="myCarousel">
            <h3>Smith</h3>
            <h4>Logistics Coordinator</h4>
            <p>
            We've worked with numerous drayage providers over the years, but none have demonstrated the level of expertise and professionalism that we've experienced with ABC Drayage Solutions. 
            Their knowledge of intermodal transport and their efficient route optimization have significantly reduced our transportation costs.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
            At Eco-Friendly Retailers, sustainability is at the core of our business, and finding a drayage partner that shares our values was paramount. 
            GreenCargo Drayage not only excels in drayage operations but also stands out for their commitment to environmental responsibility. 
            </p>
          </div>
        </div>
      </Carousel>
</div>
<div className="testiLowerhalf" ref={ref}>
  <div className ="countUpItem">
    <h2>DELIVERED PACKAGES</h2>
    {inView && <CountUp end={+10000} />}
  </div>
  <div className="countUpItem">
    <h2>MILES PER YEAR</h2>
    {inView && <CountUp end={+9000} />}
  </div>
  <div className="countUpItem">
    <h2>TONS OF GOODS</h2>
    {inView && <CountUp end={+1500} />}
  </div>
  <div className="countUpItem">
    <h2>SATISFIED CLIENTS</h2>
    {inView && <CountUp end={+140} />}
  </div>
</div>
  </section>
  {/* <div className='contact-div'> */}
      <section id="contact">
      {/* <FormControl> */}
      <Stack spacing={2} direction="row" sx={{margin: 4}}>
        <div className='questiontag'>
          <h1 style={{ color: '#2b76c3' }}>Have any questions?</h1>
          <h3 style={{ color: '#2b76c3' }}>We would love to help!</h3>
          <p style={{ fontWeight: 'normal' }}>USA:24 Commerce St #434, Newark, NJ 07102, United States</p>
          <p style={{ fontWeight: 'normal' }}>BHARAT:Uttar Pradesh, Noida </p>
        </div>
      <form>
      <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
        <TextField
          label="Name"
          variant="outlined"
          color="secondary" // Use "secondary" for a warning color
          fullWidth // To make the input field take up the full width
        />
        <TextField
          label="E-mail"
          variant="outlined"
          color="secondary"
          fullWidth
        />
         </Stack>
        <TextField
          label="Message"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          sx={{mb:4}} // To allow multiline input for the message
          rows={4} // Specify the number of rows for the message input
        />
        <Button variant="outlined" color="secondary" type="submit">Submit</Button>
      </form>
      </Stack>
      {/* </FormControl> */}
  </section>
{/* </div> */}
<div><Footer /></div>

      
    </div>
    
  );
};



export default Homepage;
