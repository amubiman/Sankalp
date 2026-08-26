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
        <img src={logoImage} alt="Company Logo"/>
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
              alt="img1"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                display: 'block' 
              }}
            />
            <div className="caption">
              <h2>"Smart Sourcing. Better Prices. Stronger Businesses."</h2>
              <p>Sankalp Solutions streamlines sourcing for India's top industries, connecting you with the right suppliers to deliver quality products and longterm values</p>
            </div>
          </div>
        </div>

        {/* Four Columns Section */}
        <section className="four-columns">
          <div className="column">
            <h2>About Us</h2>
            <p>
              To create simple, responsive, and elegant websites that empower businesses
              and individuals to share their ideas with the world.
            </p>
          </div>
          <div className="column">
            <h2>Our Approach</h2>
            <p>
              We focus on clarity, usability, and performance. Every project is built
              with attention to detail and a user‑first mindset.
            </p>
          </div>
          <div className="column">
            <h2>Our Vision</h2>
            <p>
              To create simple, responsive, and elegant websites that empower businesses
              and individuals to share their ideas with the world.
            </p>
          </div>
          <div className="column">
            <h2>Our Vision</h2>
            <p>
              To create simple, responsive, and elegant websites that empower businesses
              and individuals to share their ideas with the world.
            </p>
          </div>
        </section>

        {/* Founder Details Section */}
        <div id="services">
          <section>
            <h2>Founder Details</h2>
            <p>Details</p>
          </section>
        </div>

        {/* Contact Info Section */}
        <div id="contact">
          <section>
            <h2>Contact Us</h2>
            <p>Email: info@sankalpsolutions.co.in</p>
            <p>Phone: +91 8600771113</p>
            <p>Address: Ashtbhuja Enclave, Flat No.14, Savedi, Ahilyanagar, MH, India</p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Corporate Inc. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
