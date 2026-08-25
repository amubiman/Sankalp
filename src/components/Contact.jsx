import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      {/* Header */}
      <header>
        <img src="/src/assets/Images/Logo.png" alt="Company Logo"/>
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
            <img src="/src/assets/Images/contact.png" alt="img1"/>
          </div>
        </div>
        
        {/* Contact Us Section */}
        <div id="contact">
          <section>
            <h2>Contact Us</h2>
            <p>Email: info@corporate.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: Corporate Tower, Ahilyanagar, MH, India</p>
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

export default Contact;
