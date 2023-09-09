// Inside src/components/Industries.js

import React from 'react';
import './Industries.css';

const Industries = () => {
  return (
    <div className="industries-page">
      <header className="header">
        {/* Navbar component */}
      </header>
      <section className="industries-section">
        <h2>Industries</h2>
        <img src="/logistic-industries.jpg" alt="Industries" />
        <div className="tagline">
            <h3>Your Reliable Logistic Services Partner</h3>
            <p>We provide logistics solutions for various industries.</p>
        </div>
        
        <div className='split'>
            <div className='split-column'>
                <div className="industry-image">
                  <img src="/Veg and fru.jpg" alt="Vegetables & Fruits" />
                </div>
                <h3>Vegetables & Fruits</h3>
                {/* <div className='vegetables-fruits-industry-content'> */}
                    <ul>
                    <li>Our professional workers are well aware that the shipment of vegetables/fruits requires specific 
                        temperature control. We ensure the safest and best delivery conditions for the shipment. 
                        Over the years, we have built the experience of various fruits and vegetables.</li>
                    <button>Learn More</button>
                    </ul>
                {/* </div> */}
            </div>
        
            <div className='meat-industry'>
                <div className="meat-image">
                  <img src="/meat.jpg" alt="Meat" />
                </div>
                <div className='meat-industry-content'>
                    <ul>
                    <h3>Meat</h3>
                    <li>It is necessary to freeze the meat and poultry before meat shipping them as it blocks the growth of germs. 
                        That is why maintaining a proper cooling temperature is necessary and challenging.</li>
                    <button>Learn More</button>
                    </ul>
                </div>
            </div>
        
        </div>  
        <p>Additional information about the industries...</p>
      </section>
    </div>
  );
};

export default Industries;
