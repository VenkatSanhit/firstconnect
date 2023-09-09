// Inside src/components/Services.js

import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <header className="header">
        {/* Navbar component */}
      </header>
      <section className="services-section">
        <h2>Services</h2>
        <img src="/logistic-services.jpg" alt="Logistic Services" />
        <div className="tagline">
          <h3>Your Reliable Logistic Services Partner</h3>
          <p>We provide efficient supply chain solutions for businesses of all sizes.</p>
        </div>
       
        <div className="ftl-ltl-service">
          <div className="service-image">
            <img src="/ftl-ltl.jpg" alt="FTL & LTL" />
          </div>
          <div className="service-content">
              <h3>FTL & LTL</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
          </div>
        </div>
        <div className="drayage-service">
          <div className="service-image">
            <img src="/drayage.jpg" alt="Drayage" />
          </div>
          <div className="service-content">
              <h3>Drayage</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
          </div>
        </div>
        <div className="warehousing-service">
          <div className="service-image">
            <img src="/warehousing.jpg" alt="Warehousing" />
          </div>
          <div className="service-content">
              <h3>Warehousing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
          </div>
        </div>
        <div className="transportation-management-service">
          <div className="service-image">
            <img src="/transportation-management.jpg" alt="Transportation-Management" />
          </div>
          <div className="service-content">
              <h3>Transportation-Management</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
          </div>
        </div>
        <div className="routing-service">
          <div className="service-image">
            <img src="/routing-glove.jpg" alt="Routing" />
          </div>
          <div className="service-content">
              <h3>Routing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
          </div>
        </div>
        <div className="freight-brokerage-service">
          <div className="service-image">
            <img src="/F Broker.jpg" alt="Freight Brokerage" />
          </div>
          <div className="service-content">
            {/*<div className="service-header">*/}
              <h3>Freight Brokerage</h3>
            {/*</div>*/}
            {/*<div className="service-description">*/}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            {/*</div>*/}
            {/*<div className="service-cta">*/}
              <button>Learn More</button>
            {/*</div>*/}
          </div>
        </div>
        <div className="broker-forwarder-enterprise-service">
          <div className="service-image">
            <img src="/broker-forwarder-enterprise.jpg" alt="Broker & Forwarder Enterprise" />
          </div>
          <div className="service-content">
              <h3>Broker & Forwarder Enterprise</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
          </div>
        </div>
        <div className="white-glove-service">
          <div className="service-image">
            <img src="/white-glove.jpg" alt="White Glove" />
          </div>
          <div className="service-content">
              <h3>White Glove</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
          </div>
        </div>
        <div className="cross-docking-transloading-service">
          <div className="service-image">
            <img src="/routing-glove.jpg" alt="Cross Docking & Transloading" />
          </div>
          <div className="service-content">
              <h3>Cross Docking & Transloading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
          </div>
        </div>
        <div className="cross-border-service">
          <div className="service-image">
            <img src="/cross-border.jpg" alt="Cross Border" />
          </div>
          <div className="service-content">
              <h3>Cross Border</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
          </div>
        </div>
        <div className="air-land-ocean-service">
          <div className="service-image">
            <img src="/air-land-ocean.jpg" alt="Air, Land, and Ocean" />
          </div>
          <div className="service-content">
              <h3>Air, Land, and Ocean</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
          </div>
        </div>

        <section className="sets-us-apart">
        <h1>What Sets Us Apart</h1>
        <div className="divider">
          <div className="divider-column">
            <h3>COMPREHENSIVE</h3>
            <ul>
              <h4>ELEVATED OFFERINGS</h4>
              <li>Whether it’s project-based, seasonal, or a more regular need, 
                we can offer support with the greatest attention to detail.</li>
              <h4>EXTENSIVE NETWORK</h4>
              <li>Access to 250,000 trailers, 750 full-service secure yards, and 200+ trailer facilities.</li>
            </ul>
          </div>
          <div className="divider-column">
            <h3>ACCOUNTABLE</h3>
            <ul>
            <h4>BACKED BY EXPERTS</h4>
              <li>We have a large team of dedicated experts who can communicate with all players of the 
                supply chain: shippers, receivers, carriers, cross-dock facilities and warehouse facilities.</li>
              <h4>HANDS-ON COORDINATION</h4>
              <li>We understand your account intimately and work hard to cater to your specific needs.</li>
            </ul>
          </div>
          <div className="divider-column">
            <h3>Title 3</h3>
            <ul>
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>
          </div>
        </div>
      </section>
        <footer className="footer-section">
        <div className="footer-item">
          <h3>Company</h3>
          <img src="/company-logo.png" alt="Company Logo" />
          <p>About the company...</p>
        </div>
        <div className="footer-item">
          <h3>Contact Us</h3>
          <p>Phone: +1 123-456-7890</p>
          <p>Email: contact@example.com</p>
        </div>
        <div className="footer-item">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Shippers</a>
          <a href="#">Carriers</a>
          <a href="#">Services</a>
          <a href="#">Industries</a>
        </div>
        <div className="footer-item">
          <h3>Social Media</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>

        {/* Repeat the structure for other services */}
      </section>
    </div>
  );
};

export default Services;
