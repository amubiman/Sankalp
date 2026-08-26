import React from 'react';
import { Link } from 'react-router-dom';

// 🟢 assets मधील इमेजेस फाईलच्या वर इम्पोर्ट केल्या आहेत
import logoImage from '../assets/Images/Logo.png';
import serviceImage from '../assets/Images/Service.jpg';

function Services() {
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

      {/* Main Content Area */}
      <div id="home" style={{ marginTop: '90px' }}>
        <div className="slider">
          <div className="slides">
            {/* 🟢 इथे इम्पोर्ट केलेली serviceImage वापरली आहे */}
            <img src={serviceImage} alt="img1"/>
          </div>
        </div>

        {/* Services Section */}
        <div id="services">
          <section>
            <h2>Our Services</h2>
            <p>We offer a wide range of services including business consulting, technology solutions, digital transformation, and customer support tailored to your needs.</p>
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

export default Services;
