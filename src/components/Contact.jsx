import React from 'react';
import { Link } from 'react-router-dom';

// assets मधील इमेजेस
import logoImage from '../assets/Images/Logo.png';
import contactImage from '../assets/Images/contact.png';

function Contact() {
  return (
    <>
      {/* Header */}
      <header>
        <img src={logoImage} alt="Bharat Clean Air Tech Logo"/>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/industry">Industries</Link>
          <Link to="/case">Case Study</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <main id="home" style={{ marginTop: '90px' }}>
        <div className="slider">
          <div className="slides">
            <img src={contactImage} alt="Contact Bharat Clean Air Tech"/>
          </div>
        </div>
        
        {/* Contact Us Section */}
        <section id="contact">
          <h2>Contact Us</h2>
          
          {/* 🟢 कंपनीच्या खऱ्या माहितीसह अपडेट केलेला पत्ता */}
          <address style={{ fontStyle: 'normal', lineHeight: '1.8' }}>
            <p><strong>Email:</strong> <a href="mailto:info@bharatcleanairtech.com">info@bharatcleanairtech.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919552356464">+91 95523 56464</a></p>
            <p>
              <strong>Address:</strong><br />
              Office No. 02, Sr. No. 78/5, Hingane Mala,<br />
              Sasane Nagar, Hadapsar, Pune,<br />
              Maharashtra 411028, India
            </p>
          </address>

          {/* 🟢 अधिकृत वेबसाईटवर जाण्यासाठी एक्सटर्नल लिंक */}
          <div style={{ marginTop: '20px' }}>
            <a 
              href="https://bharatcleanairtech.com/contact-us" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ padding: '10px 15px', background: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}
            >
              Visit Official Contact Page
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} bharatcleanairtech.com. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
