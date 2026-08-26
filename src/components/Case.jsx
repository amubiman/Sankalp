import { Link } from 'react-router-dom';
import React from 'react';
import '../App.css'; 

// 🟢 assets मधील इमेजेस फाईलच्या वर इम्पोर्ट केल्या आहेत
import logoImage from '../assets/Images/Logo.png';
import caseImage from '../assets/Images/Case.jpg';

function About() {
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

      {/* Main Content Wrap */}
      <div id="home" style={{ marginTop: '86px', width: '100%' }}>
        
        {/* स्लायडर आणि इमेज ऑटो-फिट */}
        <div className="slider" style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden', display: 'block' }}>
          <div className="slides" style={{ display: 'block', width: '100%', height: '100%' }}>
            {/* 🟢 इथे इम्पोर्ट केलेली caseImage वापरली आहे */}
            <img 
              src={caseImage} 
              alt="img1"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                display: 'block' 
              }}
            />
            
            {/* 🔴 मजकूर इमेजच्या परफेक्ट बॉटमला (खालच्या कडेला) आणि सेंटरला आणला आहे */}
            <div className="caption" style={{
              position: 'absolute',
              bottom: '20px',          /* इमेजच्या खालच्या कडेपासून २०px वर */
              left: '50%',
              transform: 'translateX(-50%)', /* आडव्या रेषेत परफेक्ट सेंटरला ठेवण्यासाठी */
              color: '#ffffff',
              textAlign: 'center',
              width: '100%',
              maxWidth: '800px',
              background: 'transparent',
              padding: '1rem',
              zIndex: '10'
            }}>
              <h2 style={{ color: '#ffffff', fontSize: '2.8rem', fontWeight: 'bold', margin: '0', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
                "Success Stories, That Inspire"
              </h2>
            </div>
          </div>
        </div>

        <section>
          <h2>Home</h2>
          <p>We are a leading corporate solutions provider, dedicated to helping businesses achieve sustainable growth through innovation, strategy, and excellence.</p>
          
          <section className="two-columns">
            <div className="column">
              <h2>Our Vision</h2>
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
          </section>
        </section>

        <section>
          <h2>Our Vision</h2>
          <p>Our vision is to empower organizations worldwide with cutting-edge solutions that drive success, foster collaboration, and create lasting impact.</p>
        </section>
      </div>

      {/* Services Section */}
      <div id="services">
        <section>
          <h2>Our Services</h2>
          <p>We offer a wide range of services including business consulting, technology solutions, digital transformation, and customer support tailored to your needs.</p>
        </section>
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

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Corporate Inc. All rights reserved.</p>
      </footer>
    </>
  );
}

export default About;
