import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Images/Logo.png'; // लोगोचा पाथ अचूक तपासा

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* कॉलम १: लोगो आणि माहिती - 🟢 फिक्स: लोगो आणि मजकूर डावीकडे सरकवण्यासाठी इनलाईन स्टाईल जोडली */}
        <div className="footer-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', paddingLeft: '0', marginLeft: '0' }}>
          <img src={logoImage} alt="Sankalp Solutions Logo" style={{ marginLeft: '0', paddingLeft: '0', display: 'block' }} />
          <p style={{ textAlign: 'left', marginLeft: '0', paddingLeft: '0' }}>Delivering innovative and reliable solutions that help businesses grow, scale and succeed in a competitive world.</p>
        </div>


        {/* कॉलम २: क्विक लिंक्स (६ अचूक लिंक्स आणि बदललेली नावे) */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industry">Industries</Link></li>
            <li><Link to="/case">Case Study</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>


        {/* कॉलम ३: आमच्या सेवा */}
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">Business Solutions</Link></li>
            <li><Link to="/industry">Sector</Link></li>
            <li><Link to="/case">Consulting</Link></li>
            <li><Link to="/about">Support & Maintenance</Link></li>
          </ul>
        </div>

        {/* कॉलम ४: सोशल मीडिया */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61593476303392" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/company/108233233/admin/dashboard/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/sankalp.solutions/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://x.com/sankalpsol" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

          {/* कॉलम ५: संपर्क माहिती (सुधारित आवृत्ती) */}
          <div className="footer-column">
            <h4>Get In Touch</h4>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> <span>Pune, Ahilyanagar</span></li>
              <li><i className="fas fa-envelope"></i> <span>info@sankalpsolutions.co.in</span></li>
              <li><i className="fas fa-phone-alt"></i> <span>+91 9185271113</span></li>
            </ul>
            
            {/* 👇 🟢 ही नवीन छोटी लीगल पट्टी फुटरमध्ये जोडा */}
            <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '0.8rem', color: '#a0aec0', margin: '0 0 5px 0', fontWeight: 'bold' }}>REGISTRATIONS</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '0.78rem' }}>
                <span style={{ background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '4px' }}>GSTIN</span>
                <span style={{ background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '4px' }}>MSME / UDYAM</span>
                <span style={{ background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '4px' }}>PAN</span>
              </div>
            </div>
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
