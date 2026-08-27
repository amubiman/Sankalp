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
        <img src={logoImage} alt="Sankalp Solutions Logo"/>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/industry">Industries</Link>
          <Link to="/case">Case Study</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <div id="home" style={{ marginTop: '90px', width: '100%' }}>
        
        {/* 🔴 स्लायडर - आता मजकूर काढून फक्त क्लीन इमेज ठेवली आहे */}
        <div className="slider" style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden', display: 'block' }}>
          <div className="slides" style={{ display: 'block', width: '100%', height: '100%' }}>
            {/* 🟢 इथे इम्पोर्ट केलेली serviceImage वापरली आहे */}
            <img 
              src={serviceImage} 
              alt="Sankalp Solutions Services Banner"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                display: 'block' 
              }}
            />
          </div>
        </div>

        {/* Services Main Header Section - माहिती इथे जोडली आहे */}
        <div id="services" style={{ marginBottom: '-30px' }}>
          <section style={{ textAlign: 'center', background: '#f8f9fa' }}>
            <h2 style={{ color: '#003366', margin: '0 0 10px 0' }}>Our Services</h2>
            <p style={{ fontSize: '1.1rem', color: '#444', maxWidth: '800px', margin: '0 auto', fontWeight: '500', lineHeight: '1.6' }}>
              Expert-led supply chain solutions designed to drive efficiency, reduce costs, and strengthen supplier partnerships.
            </p>
          </section>
        </div>

        {/* Services Row 1 (Four Columns Section) */}
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

        {/* Services Row 2 (Four Columns Section) */}
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
          {/* लेआऊट मॅच करण्यासाठी बॅलन्स कॉलम */}
          <div className="column" style={{ background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}>
            <p style={{ fontWeight: 'bold', color: '#003366', margin: 0, textAlign: 'center' }}>Tailored Sourcing Solutions ⚙️</p>
          </div>
        </section>

        {/* Our Approach / Engagement Models (Two Columns Section) */}
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

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Sankalp Solutions. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Services;
