import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// assets मधील इमेजेस
import logoImage from '../assets/Images/Logo.png';
import serviceImage from '../assets/Images/Service.jpg';

// 🟢 नवीन बनवलेला Footer कॉम्पोनंट इम्पोर्ट केला
import Footer from '../components/Footer';

function Services() {
  return (
    <>
      {/* 🟢 एकसमान ग्लोबल हेडर */}
      <header>
        <div className="logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={logoImage} alt="Sankalp Solutions Logo" />
        </div>
        <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/industry">Industries</Link>
          <Link to="/case">Case Study</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/contact" className="btn-get-touch">Get In Touch</Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <div className="page-wrapper">
        
        {/* स्लायडर */}
        <div className="slider">
          <img src={serviceImage} alt="Sankalp Solutions Services Banner" />
        </div>

        {/* Services Main Header Section */}
        <div className="intro-section">
          <h2 style={{ color: '#003366', margin: '0 0 10px 0' }}>Our Services</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', maxWidth: '800px', margin: '0 auto', fontWeight: '500', lineHeight: '1.6' }}>
            Expert-led supply chain solutions designed to drive efficiency, reduce costs, and strengthen supplier partnerships.
          </p>
        </div>

        {/* Services Row 1 */}
        <section className="four-columns">
          <div className="column">
            <h3 style={{ color: '#003366', marginTop: 0 }}>Strategic Sourcing</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              Optimizing procurement processes to identify the best-value suppliers while aligning with business goals.
            </p>
          </div>
          <div className="column">
            <h3 style={{ color: '#003366', marginTop: 0 }}>Category Management</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              Developing tailored strategies for specific spend categories to ensure continuous value creation and control.
            </p>
          </div>
          <div className="column">
            <h3 style={{ color: '#003366', marginTop: 0 }}>Contract Negotiation</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              Structuring and negotiating contracts that minimize risk and maximize value, ensuring long-term business benefits.
            </p>
          </div>
          <div className="column">
            <h3 style={{ color: '#003366', marginTop: 0 }}>Supplier Relationships</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              Building and maintaining strong, performance-focused relationships with suppliers to improve collaboration and innovation.
            </p>
          </div>
        </section>

        {/* Services Row 2 */}
        <section className="four-columns" style={{ marginTop: '-20px' }}>
          <div className="column">
            <h3 style={{ color: '#003366', marginTop: 0 }}>Cost Reduction</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              Identifying opportunities to reduce operational costs through process improvements, spend analysis, and strategic planning.
            </p>
          </div>
          <div className="column">
            <h3 style={{ color: '#003366', marginTop: 0 }}>SCM Co-ordinator</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              Ensuring the smooth flow of goods, services, and information from raw materials to end customers, optimizing supply chain performance.
            </p>
          </div>
          <div className="column">
            <h3 style={{ color: '#003366', marginTop: 0 }}>GEM & Tender Support</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              Providing comprehensive Government E-Marketplace (GEM), Tendering, Documentation, and Bid Support Services.
            </p>
          </div>
          <div className="column" style={{ background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}>
            <p style={{ fontWeight: 'bold', color: '#003366', margin: 0, textAlign: 'center' }}>Tailored Sourcing Solutions ⚙️</p>
          </div>
        </section>

        {/* Our Approach / Engagement Models */}
        <section>
          <h2>Our Approach & Engagement Models</h2>
          <p style={{ marginBottom: '20px' }}>Our approach is designed to be flexible, practical, and result-oriented based on your business requirements.</p>
          
          <div className="two-columns">
            <div className="column" style={{ borderTop: '4px solid #003366' }}>
              <h4 style={{ color: '#003366', marginTop: 0 }}>For Organizations with an Existing Team</h4>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.5' }}>
                We work as an extended procurement partner, strengthening your current team with our expertise, vendor network, and strategic support.
              </p>
            </div>
            <div className="column" style={{ borderTop: '4px solid #003366' }}>
              <h4 style={{ color: '#003366', marginTop: 0 }}>For New Setups and Growing Businesses</h4>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.5' }}>
                We act as your complete procurement function, eliminating the need to hire and manage an in-house team — helping you significantly reduce administrative and manpower costs.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '25px', background: '#f8f9fa', padding: '15px', borderRadius: '6px', textAlign: 'center', fontWeight: '500', color: '#003366' }}>
            Our focus is execution and measurable outcomes: Cost Optimization | Faster Procurement Cycles | Reliable Supply
          </div>
        </section>
      </div>

      {/* 🟢 नवीन फुल स्क्रीन फुटर */}
      <Footer />
    </>
  );
}

export default Services;
