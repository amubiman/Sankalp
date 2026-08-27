import React from 'react';
import { Link } from 'react-router-dom';

// 🟢 assets मधील इमेजेस फाईलच्या वर इम्पोर्ट केल्या आहेत
import logoImage from '../assets/Images/Logo.png';
import homeImage from '../assets/Images/Home.jpg';

function Home() {
  return (
    <>
      {/* Header */}
      <header>
        {/* 🟢 इथे इम्पोर्ट केलेली logoImage वापरली आहे */}
        <img src={logoImage} alt="Sankalp Solutions Logo"/>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/industry">Industries</Link>
          <Link to="/case">Case Study</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>

      {/* Main Home Content */}
      <div id="home" style={{ marginTop: '86px', width: '100%' }}>
        
        {/* 🔴 स्लायडर आणि इमेज ऑटो-फिट करण्यासाठी डायरेक्ट इनलाईन स्टाईल दिली आहे */}
        <div className="slider" style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden', display: 'block' }}>
          <div className="slides" style={{ display: 'block', width: '100%', height: '100%' }}>
            {/* 🟢 इथे इम्पोर्ट केलेली homeImage वापरली आहे */}
            <img 
              src={homeImage} 
              alt="Sankalp Solutions Banner"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                display: 'block' 
              }}
            />
            <div className="caption">
              <h2>"Smart Sourcing. Better Prices. Stronger Businesses."</h2>
              <p>Sankalp Solutions streamlines sourcing for India's top industries, connecting you with the right suppliers to deliver quality products and long-term value.</p>
            </div>
          </div>
        </div>

        {/* Four Columns Section - वर्ड फाईलच्या डेटासह अपडेटेड */}
        <section className="four-columns">
          <div className="column">
            <h2>About Us</h2>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.5' }}>
              At Sankalp Solutions, we specialize in delivering strategic procurement and supply chain solutions that drive efficiency, cost optimization, and operational excellence.
            </p>
          </div>
          <div className="column">
            <h2>Our Approach</h2>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.5' }}>
              We offer customized engagement models tailored to your structure. We work as an extended arm for existing teams or act as a complete procurement function for new setups.
            </p>
          </div>
          <div className="column">
            <h2>Our Vision</h2>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.5' }}>
              To be a trusted partner in transforming supply chains into engines of growth, resilience, and innovation, ensuring businesses operate with clarity, agility, and purpose.
            </p>
          </div>
          <div className="column">
            <h2>Our Values</h2>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.5' }}>
              We are driven by a firm commitment to excellence, continuous innovation, operational adaptability, absolute business integrity, transparency, and sustainability.
            </p>
          </div>
        </section>

        {/* Founder Details Section - वर्ड फाईलच्या डेटासह अपडेटेड */}
        <div id="services">
          <section>
            <h2>Experienced Leadership</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '15px' }}>
              <div style={{ flex: '1', minWidth: '280px' }}>
                <h3 style={{ color: '#003366', marginTop: 0 }}>Mr. Rohit Vijay Kawale <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'normal' }}>(Founder)</span></h3>
                <p><strong>Mr. Rohit Vijay Kawale</strong> is a seasoned professional with over 14 years of experience in Supply Chain Management and Procurement. He has built deep domain knowledge in strategic sourcing, vendor development, cost optimization, and process-driven procurement systems.</p>
                <p>His professional journey includes associations with reputed organizations such as <strong>Bajaj Auto Ltd., Elite Group of Companies, Brinton Pharma Ltd., and Intox (an Aragen company)</strong>. His hands-on experience with industry-standard platforms like SAP-MM and CBO enables efficient, transparent, and scalable supply chain operations.</p>
                <p>In 2025, he founded Sankalp Solutions with a clear vision—to provide practical, result-oriented procurement solutions that help organizations improve efficiency, reduce costs, and build resilient supply chains.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Sankalp Solutions. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
