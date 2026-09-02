import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Images/Logo.png'; // लोगोचा पाथ अचूक तपासा

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* कॉलम १: लोगो आणि माहिती */}
        <div className="footer-column">
          <img src={logoImage} alt="Sankalp Solutions Logo" />
          <p>Delivering innovative and reliable solutions that help businesses grow, scale and succeed in a competitive world.</p>
        </div>

        {/* कॉलम २: क्विक लिंक्स */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/case">Solutions</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* कॉलम ३: आमच्या सेवा */}
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">Business Solutions</Link></li>
            <li><Link to="/services">IT Solutions</Link></li>
            <li><Link to="/services">Consulting</Link></li>
            <li><Link to="/services">Support & Maintenance</Link></li>
          </ul>
        </div>

        {/* कॉलम ४: सोशल मीडिया */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* कॉलम ५: संपर्क माहिती */}
        <div className="footer-column">
          <h4>Get In Touch</h4>
          <ul className="contact-info">
            <li>
              <i className="fas fa-phone-alt"></i>
              <span>+91 8600771113</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>info@sankalpsolutions.co.in</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Savedi, AhilyaNagar, Maharashtra, 414005.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* कॉपीराईट विभाग */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sankalp Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
