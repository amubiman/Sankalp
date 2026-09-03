import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

// assets मधील इमेजेस इम्पोर्ट केल्या
import logoImage from '../assets/Images/Logo.png';
import aboutImage from '../assets/Images/about.jpg'; 
import founderImage from '../assets/Images/Founder.jpg'; 
import rohitImg from '../assets/Images/rohit.jpg';
import poojaImg from '../assets/Images/pooja.jpg';
import mayurImg from '../assets/Images/mayur.jpg';
import rutujaImg from '../assets/Images/rutuja.jpg';
import mangeshImg from '../assets/Images/mangesh.jpg';

// Footer कॉम्पोनंट इम्पोर्ट केला
import Footer from './Footer';

function About() {
  const teamMembers = [
    { name: "Mr. Rohit Vijay Kawale", role: "Founder", img: rohitImg },
    { name: "Mrs. Pooja Adwait Kulkarni", role: "Client Relations Coordinator", img: poojaImg },
    { name: "Mr. Mayur Pramod Kulkarni", role: "Technical Support Specialist", img: mayurImg },
    { name: "Ms. Rutuja Vilas Deshpande", role: "Documentation & Compliance Executive", img: rutujaImg },
    { name: "Mr. Mangesh Sadanand Shahane", role: "Support Associate", img: mangeshImg }
  ];

  const approaches = [
    { step: "1", title: "Understand", desc: "We understand your needs" },
    { step: "2", title: "Source", desc: "We find the right suppliers" },
    { step: "3", title: "Evaluate", desc: "We evaluate for quality, cost & reliability" },
    { step: "4", title: "Optimize", desc: "We optimize for better value and efficiency" },
    { step: "5", title: "Deliver", desc: "We ensure timely and reliable delivery" }
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
          <Link to="/about">About Us</Link>
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
            <img src={aboutImage} alt="Sankalp Solutions About Us Banner" />
            <div className="caption" style={{
              position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
              color: '#ffffff', textAlign: 'center', width: '100%', maxWidth: '800px',
              background: 'transparent', padding: '1rem', zIndex: '10'
            }}>
              <h2 style={{ color: '#ffffff', fontSize: '2.8rem', fontWeight: 'bold', margin: '0', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
                "Where Experience Met a Purpose"
              </h2>
            </div>
          </div>
        </div>

        {/* 1. Our Story Section */}
        <section style={{ padding: '50px 5%', backgroundColor: '#fff' }}>
          <h2 style={{ color: '#003366', fontSize: '2.2rem', marginBottom: '20px', textAlign: 'center', fontWeight: '700' }}>Our Story</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto', color: '#444', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p>Every business depends on procurement. But when sourcing becomes complex, suppliers become unreliable, or costs continue to rise, procurement can quickly become a business challenge.</p>
            <p><strong>Sankalp Solutions</strong> was created to change that.</p>
            <p>Founded in 2025 by Mr. Rohit Vijay Kawale, Sankalp Solutions brings together years of hands-on industry experience and a clear understanding of the challenges businesses face in procurement and supply chain operations.</p>
            <p>The vision was never to be just another procurement service provider. It was to build a trusted partner that works alongside businesses, understands their requirements, and delivers practical solutions with accountability.</p>
            <p>From strategic sourcing and vendor development to procurement execution and supply chain coordination, our approach is built around one principle: <strong>Make procurement simpler. Make it smarter. Make it work.</strong></p>
            <p>The word <em>“Sankalp”</em> represents our commitment — to every requirement, every relationship, and every result.</p>
            <p>Today, we continue to grow with the same purpose: helping businesses achieve greater efficiency, stronger supplier networks, optimized costs, and sustainable growth.</p>
          </div>
        </section>

        {/* 2. Our Founder Section */}
        <section style={{ backgroundColor: '#f9f9f9', padding: '50px 5%' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ flex: '1', minWidth: '280px', textAlign: 'center' }}>
              <img src={founderImage} alt="Mr. Rohit Vijay Kawale" style={{ width: '100%', maxWidth: '280px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ flex: '2', minWidth: '300px' }}>
              <h2 style={{ fontSize: '2.2rem', color: '#0a1931', margin: '0 0 5px 0', fontWeight: '700' }}>Our Founder</h2>
              <h3 style={{ fontSize: '1.4rem', color: '#ff6b6b', margin: '0 0 15px 0' }}>Mr. Rohit Vijay Kawale</h3>
              <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.98rem' }}>
                With 14+ years of industry experience in Supply Chain Management and Procurement across pharmaceuticals, life sciences, automobile, manufacturing, & R&D.
              </p>
              <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.98rem' }}>
                Worked with Enaltec Labs Ltd, Cipla Group, Encube Ethicals Pvt Ltd, and Indus (An Amneal company). Founded Sankalp Solutions in 2025 with a vision to streamline complex corporate ecosystems into agile, cost-effective networks.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Our Approach Section */}
        <section style={{ padding: '50px 5%', backgroundColor: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#003366', fontSize: '2.2rem', marginBottom: '40px', fontWeight: '700' }}>Our Approach</h2>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'nowrap', 
            justifyContent: 'center', 
            gap: '15px', 
            maxWidth: '1200px', 
            margin: '0 auto',
            overflowX: 'auto' /* मोबाईल स्क्रीनवर ओव्हरफ्लो न होता स्क्रोल होईल */
          }}>
            
            {/* Step 1 - Understand */}
            <div style={{ flex: '1', minWidth: '160px', padding: '20px 10px', background: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              {/* Search/Understand SVG Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <h4 style={{ color: '#0a1931', margin: '0 0 8px 0', fontSize: '1.05rem', fontWeight: '600' }}>Understand</h4>
              <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: '1.4' }}>We understand your needs</p>
            </div>

            {/* Step 2 - Source */}
            <div style={{ flex: '1', minWidth: '160px', padding: '20px 10px', background: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              {/* Map/Pin/Source SVG Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <h4 style={{ color: '#0a1931', margin: '0 0 8px 0', fontSize: '1.05rem', fontWeight: '600' }}>Source</h4>
              <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: '1.4' }}>We find the right suppliers</p>
            </div>

            {/* Step 3 - Evaluate */}
            <div style={{ flex: '1', minWidth: '160px', padding: '20px 10px', background: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              {/* File/Check/Evaluate SVG Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <h4 style={{ color: '#0a1931', margin: '0 0 8px 0', fontSize: '1.05rem', fontWeight: '600' }}>Evaluate</h4>
              <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: '1.4' }}>We evaluate for quality, cost & reliability</p>
            </div>

            {/* Step 4 - Optimize */}
            <div style={{ flex: '1', minWidth: '160px', padding: '20px 10px', background: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              {/* TrendingUp/Optimize SVG Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px' }}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              <h4 style={{ color: '#0a1931', margin: '0 0 8px 0', fontSize: '1.05rem', fontWeight: '600' }}>Optimize</h4>
              <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: '1.4' }}>We optimize for better value and efficiency</p>
            </div>

            {/* Step 5 - Deliver */}
            <div style={{ flex: '1', minWidth: '160px', padding: '20px 10px', background: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              {/* Truck/Deliver SVG Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px' }}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              <h4 style={{ color: '#0a1931', margin: '0 0 8px 0', fontSize: '1.05rem', fontWeight: '600' }}>Deliver</h4>
              <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: '1.4' }}>We ensure timely and reliable delivery</p>
            </div>

          </div>
        </section>

        {/* 4. Our Team Section */}
        <section style={{ padding: '50px 5%', backgroundColor: '#fdfdfd' }}>
          <h2 style={{ textAlign: 'center', color: '#003366', fontSize: '2.2rem', marginBottom: '30px', fontWeight: '700' }}>Meet Our Team</h2>
          <div className="team-flex">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card" style={{ borderTop: '3px solid #ff6b6b' }}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  style={{ 
                    width: '110px', height: '110px', marginBottom: '12px', borderRadius: '50%', objectFit: 'cover',
                    boxShadow: '0 3px 8px rgba(0,0,0,0.12)', border: '2px solid #fff'
                  }} 
                />
                <h4 style={{ margin: '5px 0', fontSize: '1.05rem', color: '#181E33', fontWeight: 'bold', wordBreak: 'break-word' }}>{member.name}</h4>
                <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '0.85rem', fontWeight: '500' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 🟢 नवीन फुल स्क्रीन फुटर */}
      <Footer />
    </>
  );
}

export default About;
