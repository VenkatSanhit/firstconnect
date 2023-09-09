import React from 'react';
import './Homepage.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import Navbar from './Navbar.js';
import { Link } from 'react-scroll';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const Homepage = () => {
  const fstyle = {
    height: '100vh',
    width: '100%',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'space-between', // Add this line to separate logo and nav
    alignItems: 'center', // Vertically center items
    padding: '0 20px', // Add padding for spacing
  };

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
          style={{
            backgroundColor: 'red',
            height: '50px',
            width: '50px',
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
          </ul>
        </nav>
      </header>
      <section id="home">
        Home
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

      <section id="contact">CONTACT ME</section>
    </div>
  );
};

export default Homepage;
