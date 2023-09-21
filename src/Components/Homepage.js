import React from 'react';
import './Homepage.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import Navbar from './Navbar.js';
import { Link } from 'react-scroll';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { TextField, Button, Container, Stack } from '@mui/material';
// import question_form from './question_form.js';
import question_form from './question_form';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
// import { Container, Grid, Typography, Link, Box } from '@material-ui/core';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


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
      <header className="nav">
        <div
        >
          <img
              src="First-connect-Logo.png"
              alt="Company Logo"
              style={{ maxWidth: '100%', height: 'auto', marginLeft: 60}}
            />
        </div>
        <nav className="nav__container__actions">
          <ul style={navStyle}>
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

            
            <li style={navItemStyle}><a href="#Shippers">Shippers</a></li>
            <li style={navItemStyle}><a href="#Carriers">Carriers</a></li>
            <li style={navItemStyle}><a href="/Services">Services</a></li>
            <li style={navItemStyle}><a href="/Industries">Industries</a></li>
            <li style={navItemStyle} className="dropdown">
            <a href="#">Company</a>
            <div className="dropdown-content">
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
          </div>
        </li>

        </ul>
        </nav>
      </header>
      <section id="home">
      
        <ul className='tagline'>
        <li>Navigating Excellence Beyond Borders</li>
  <li>Your Cargo, Our Commitment</li>
  <li>Connecting Logistics To Precision</li>
        </ul>
       


     </section>
      <section id="about">
      <div class="fullPage">
  <div class="fullPageTop">
  <div className="about-content">
          <h2>About the Company</h2>
          <p>Your company description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
  </div>
  <div class="fullPageBottom">
    <div class="fullPageLeft">
    <div className="carrier">
          <h2>Carriers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="cta-button">Learn More</button>
        </div>

    </div>
    <div class="fullPageRight">
    <div className="shipper">
          <h2>Shipper</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="cta-button">Learn More</button>
        </div>

    </div>
  </div>
</div>

      </section>
      <section id="SandI">

      <div className="container">
  <div className="services">
    <div>
    <h2>Services</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <button className="cta-button">Learn More</button>
    </div>
  </div>
  <div className="industries">
    <div>
    <h2>Industries</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <button className="cta-button">Learn More</button>
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
          <img src="/images/shirley.png" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="/images/daniel.png" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
</div>
<div className="testiLowerhalf" ref={ref}>
  <div className="countUpItem">
    <h2>Heading 1</h2>
    {inView && <CountUp end={100} />}
  </div>
  <div className="countUpItem">
    <h2>Heading 2</h2>
    {inView && <CountUp end={100} />}
  </div>
  <div className="countUpItem">
    <h2>Heading 3</h2>
    {inView && <CountUp end={100} />}
  </div>
  <div className="countUpItem">
    <h2>Heading 4</h2>
    {inView && <CountUp end={100} />}
  </div>
</div>
  </section>
  {/* <div className='contact-div'> */}
      <section id="contact">
      {/* <FormControl> */}
      <Stack spacing={2} direction="row" sx={{margin: 4}}>
        <div className='questiontag'>
          <h3>Have a questions?</h3>
          <h1>We would love to help</h1>
          <p><strong>USA:</strong> 24 Commerce St, #434 Newark, NJ 07102 USA.</p>
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



export default Homepage;
