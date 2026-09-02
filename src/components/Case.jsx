import { Link } from 'react-router-dom';
import React from 'react';
import '../App.css'; 

// assets मधील इमेजेस
import logoImage from '../assets/Images/Logo.png';
import caseImage from '../assets/Images/Case.jpg';

// 🟢 नवीन बनवलेला Footer कॉम्पोनंट इम्पोर्ट केला
import Footer from '../components/Footer';

function About() {
  const caseRow1 = [
    { title: "ARC-Based Procurement", challenge: "High volume of repetitive procurement for stationery, housekeeping & consumables leading to inefficiencies.", solution: "Implemented Annual Rate Contracts (ARC) with selected vendors and standardized procurement processes.", impact: "Reduced workload, improved cost control, faster ordering cycle." },
    { title: "Loan License Manufacturing", challenge: "High production cost and longer lead time for cosmetic product line.", solution: "Onboarded loan license manufacturing partners to optimize production.", impact: "Reduced cost, improved lead time, increased flexibility." },
    { title: "Multi-Year AMC Strategy", challenge: "Frequent breakdowns and high maintenance costs of instruments.", solution: "Negotiated multi-year AMC agreements with OEMs.", impact: "Reduced maintenance cost, improved uptime, predictable budgeting." }
  ];

  const caseRow2 = [
    { title: "Cost Sheet Analysis", challenge: "Lack of cost transparency in marketing procurement.", solution: "Introduced cost sheet analysis and vendor benchmarking.", impact: "Identified cost gaps, achieved savings, improved negotiation." },
    { title: "Advance Demand Planning", challenge: "Frequent stock-outs affecting availability.", solution: "Implemented projection-based advance planning system.", impact: "Ensured availability, reduced emergency purchases." },
    { title: "Supplier Credit Optimization", challenge: "Unfavorable supplier credit terms affecting cash flow.", solution: "Aligned credit terms with business potential.", impact: "Improved cash flow, stronger supplier relationships." }
  ];

  const caseRow3 = [
    { title: "Vendor Base Rationalization", challenge: "Too many vendors causing administrative and operational inefficiency.", solution: "Consolidated vendor base across key supply areas.", impact: "Better pricing, improved quality consistency." },
    { title: "Emergency Cost Control", challenge: "High procurement cost due to urgent spot purchases.", solution: "Created backup vendor network and rate agreements.", impact: "Reduced cost, faster response." },
    { title: "Process Standardization", challenge: "Unstructured and inconsistent procurement process.", solution: "Implemented SOPs and tracking systems.", impact: "Improved transparency and control." }
  ];

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

      {/* Main Content Wrap */}
      <div className="page-wrapper">
        
        {/* स्लायडर आणि इमेज ऑटो-फिट */}
        <div className="slider">
          <div className="slides">
            <img src={caseImage} alt="Sankalp Solutions Case Study Banner" />
            
            {/* 🔴 मजकूर इमेजच्या परफेक्ट बॉटमला आणि सेंटरला ठेवला आहे */}
            <div className="caption" style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
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

        {/* Case Studies Introduction */}
        <div className="intro-section">
          <h2 style={{ color: '#003366', margin: '0 0 10px 0' }}>Our Work in Action - Case Studies</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', maxWidth: '800px', margin: '0 auto', fontWeight: '500', lineHeight: '1.6' }}>
            We deliver measurable procurement impact through strategic sourcing, process optimization, and data-driven decision-making. Below are select case studies demonstrating our expertise.
          </p>
        </div>

        {/* Case Studies Row 1 */}
        <section className="four-columns">
          {caseRow1.map((item, idx) => (
            <div className="column" key={idx} style={{ borderLeft: '4px solid #0a1931' }}>
              <h3 style={{ color: '#003366', marginTop: 0, fontSize: '1.1rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.85rem', margin: '5px 0' }}><strong>Challenge:</strong> {item.challenge}</p>
              <p style={{ fontSize: '0.85rem', margin: '5px 0' }}><strong>Solution:</strong> {item.solution}</p>
              <p style={{ fontSize: '0.85rem', margin: '5px 0', color: '#2e7d32' }}><strong>Impact:</strong> {item.impact}</p>
            </div>
          ))}
          <div className="column" style={{ background: '#eef3f7', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}>
            <p style={{ fontWeight: 'bold', color: '#003366', margin: 0, textAlign: 'center', fontSize: '0.9rem' }}>Proven Efficiency 📈</p>
          </div>
        </section>

        {/* Case Studies Row 2 */}
        <section className="four-columns" style={{ marginTop: '-20px' }}>
          {caseRow2.map((item, idx) => (
            <div className="column" key={idx} style={{ borderLeft: '4px solid #0a1931' }}>
              <h3 style={{ color: '#003366', marginTop: 0, fontSize: '1.1rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.85rem', margin: '5px 0' }}><strong>Challenge:</strong> {item.challenge}</p>
              <p style={{ fontSize: '0.85rem', margin: '5px 0' }}><strong>Solution:</strong> {item.solution}</p>
              <p style={{ fontSize: '0.85rem', margin: '5px 0', color: '#2e7d32' }}><strong>Impact:</strong> {item.impact}</p>
            </div>
          ))}
          <div className="column" style={{ background: '#eef3f7', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}>
            <p style={{ fontWeight: 'bold', color: '#003366', margin: 0, textAlign: 'center', fontSize: '0.9rem' }}>Cost Control 💰</p>
          </div>
        </section>

        {/* Case Studies Row 3 */}
        <section className="four-columns" style={{ marginTop: '-20px' }}>
          {caseRow3.map((item, idx) => (
            <div className="column" key={idx} style={{ borderLeft: '4px solid #0a1931' }}>
              <h3 style={{ color: '#003366', marginTop: 0, fontSize: '1.1rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.85rem', margin: '5px 0' }}><strong>Challenge:</strong> {item.challenge}</p>
              <p style={{ fontSize: '0.85rem', margin: '5px 0' }}><strong>Solution:</strong> {item.solution}</p>
              <p style={{ fontSize: '0.85rem', margin: '5px 0', color: '#2e7d32' }}><strong>Impact:</strong> {item.impact}</p>
            </div>
          ))}
          <div className="column" style={{ background: '#eef3f7', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}>
            <p style={{ fontWeight: 'bold', color: '#003366', margin: 0, textAlign: 'center', fontSize: '0.9rem' }}>Process-Driven ⚙️</p>
          </div>
        </section>

      </div>

      {/* 🟢 नवीन फुल स्क्रीन फुटर */}
      <Footer />
    </>
  );
}

export default About;
