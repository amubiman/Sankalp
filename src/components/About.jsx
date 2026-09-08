import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import { Helmet } from 'react-helmet-async';

// assets मधील इमेजेस इम्पोर्ट केल्या
import Header from '../components/Header'; 
import aboutImage from '../assets/Images/about.jpg'; 
import founderImage from '../assets/Images/Founder.jpg'; 

// Footer कॉम्पोनंट इम्पोर्ट केला
import Footer from '../components/Footer';

function About() {
  // 🟢 स्क्रोल ॲनिमेशन ट्रिगर करण्यासाठी Intersection Observer हुक
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.05 }); // ५% बॉक्स स्क्रीनवर दिसताच ॲनिमेशन सुरू होईल

    elements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    { name: "Mr. Rohit Vijay Kawale", role: "Founder", initials: "RK" },
    { name: "Mr. Amol Prakash Biman", role: "Technical Support Specialist", initials: "AB" },
    { name: "Ms. Rutuja Vilas Deshpande", role: "Documentation & Compliance Executive", initials: "RD" },
    { name: "Mr. Mangesh Sadanand Shahane", role: "Support Associate", initials: "MS" }
  ];

  // पॅराग्राफसाठी जस्टिफाय आणि पहिल्या ओळीत स्पेस देणारी कॉमन स्टाईल
  const paragraphStyle = {
    textAlign: 'justify',
    textIndent: '40px',
    marginBottom: '15px'
  };

  return (
    <>
      <Helmet>
        <title>About Us | Sankalp Solutions - Our Story & Founder</title>
        <meta name="description" content="Learn about Sankalp Solutions, founded by Mr. Rohit Vijay Kawale in 2025. Discover our structured procurement approach and expert team." />
        <link rel="canonical" href="https://sankalpsolutions.co.in" />
        <meta property="og:title" content="About Us | Sankalp Solutions" />
        <meta property="og:description" content="Bringing 14+ years of industry experience to make procurement simpler and smarter." />
        <meta property="og:url" content="https://sankalpsolutions.co.in" />
      </Helmet>

      <Header />

      <div className="page-wrapper">
        
        {/* Banner Section */}
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
          <h2 style={{ color: '#003366', fontSize: '2.2rem', marginBottom: '30px', textAlign: 'center', fontWeight: '700' }}>
            Sankalp Solutions – Building Stronger Supply Chains
          </h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', color: '#444', lineHeight: '1.8', fontSize: '1.05rem' }}>
            
            {/* The Procurement Challenge */}
            <h3 style={{ color: '#0a1931', fontSize: '1.3rem', fontWeight: '700', marginTop: '25px', marginBottom: '10px', textAlign: 'center' }}>The Procurement Challenge</h3>
            <p style={paragraphStyle}>
              Every modern business depends heavily on procurement to maintain its competitive edge. The ability to acquire the right materials at the right price and time is foundational to growth. However, when global sourcing becomes overly complex, suppliers fail to deliver reliably, or hidden costs continue to rise, procurement can quickly shift from an operational function into a major business challenge. Managing these logistical bottlenecks often drains valuable corporate resources and distracts leadership from their core business goals.
            </p>

            {/* Founding and Leadership */}
            <h3 style={{ color: '#0a1931', fontSize: '1.3rem', fontWeight: '700', marginTop: '25px', marginBottom: '10px', textAlign: 'center' }}>Founding and Leadership</h3>
            <p style={paragraphStyle}>
              Sankalp Solutions was specifically created to change that dynamic and bring predictability back to operations. Founded in 2025 by Mr. Rohit Vijay Kawale, the company brings together years of hands-on industry experience, technical expertise, and a clear, empathetic understanding of the real-world challenges businesses face in today's volatile procurement and supply chain landscape. Under his leadership, the firm bridges the gap between logistical theory and practical, boots-on-the-ground execution.
            </p>

            {/* Our Vision & Philosophy */}
            <h3 style={{ color: '#0a1931', fontSize: '1.3rem', fontWeight: '700', marginTop: '25px', marginBottom: '10px', textAlign: 'center' }}>Our Vision & Philosophy</h3>
            <p style={paragraphStyle}>
              The vision behind Sankalp Solutions was never to be just another transactional procurement service provider or an outsourced vendor. Instead, it was built to be a deeply trusted partner—an extension of your own team that works alongside your business, genuinely understands your unique requirements, and delivers practical, tailored solutions with absolute accountability. We measure our own success directly by the seamless continuity and financial health of your operations.
            </p>

            {/* Core Capabilities & Approach */}
            <h3 style={{ color: '#0a1931', fontSize: '1.3rem', fontWeight: '700', marginTop: '25px', marginBottom: '10px', textAlign: 'center' }}>Core Capabilities & Approach</h3>
            <p style={paragraphStyle}>
              From end-to-end strategic sourcing and robust vendor development to seamless procurement execution and proactive supply chain coordination, our holistic approach is built around one simple, uncompromising principle: <strong>Make procurement simpler. Make it smarter. Make it work.</strong> We streamline communication, eliminate supply chain redundancies, and leverage strong market intelligence to give our partners a distinct operational advantage.
            </p>

            {/* The Meaning of "Sankalp" */}
            <h3 style={{ color: '#0a1931', fontSize: '1.3rem', fontWeight: '700', marginTop: '25px', marginBottom: '10px', textAlign: 'center' }}>The Meaning of "Sankalp"</h3>
            <p style={paragraphStyle}>
              The word “Sankalp” translates to a solemn vow or an unwavering commitment. This is the very foundation of our corporate ethos. It represents our deep pledge to every requirement we handle, every professional relationship we nurture, and every final result we deliver. When you partner with us, our dedication to your operational efficiency becomes an absolute certainty.
            </p>

            {/* Driving Sustainable Growth */}
            <h3 style={{ color: '#0a1931', fontSize: '1.3rem', fontWeight: '700', marginTop: '25px', marginBottom: '10px', textAlign: 'center' }}>Driving Sustainable Growth</h3>
            <p style={paragraphStyle}>
              Today, Sankalp Solutions continues to scale and innovate with the exact same core purpose: helping businesses achieve greater operational efficiency, forge stronger and more resilient supplier networks, optimize bottom-line costs, and unlock sustainable, long-term growth. We handle the complexities of supply chain management so that you can focus entirely on scaling your business with confidence.
            </p>

          </div>
        </section>


        {/* 2. Our Founder Section */}
        <section style={{ backgroundColor: '#f9f9f9', padding: '50px 5%' }} className="animate-on-scroll">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ flex: '1', minWidth: '280px', textAlign: 'center' }}>
              <img src={founderImage} alt="Mr. Rohit Vijay Kawale" style={{ width: '100%', maxWidth: '280px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ flex: '2', minWidth: '300px' }}>
              <h2 style={{ fontSize: '2.2rem', color: '#0a1931', margin: '0 0 5px 0', fontWeight: '700' }}>Our Founder</h2>
              <h3 style={{ fontSize: '1.4rem', color: '#ff6b6b', margin: '0 0 15px 0' }}>Mr. Rohit Vijay Kawale</h3>
              <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.98rem', textAlign: 'justify' }}>
                With 14+ years of industry experience in Supply Chain Management and Procurement across pharmaceuticals, life sciences, automobile, manufacturing, & R&D.
              </p>
              <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.98rem', textAlign: 'justify' }}>
                Worked with Enaltec Labs Ltd, Cipla Group, Encube Ethicals Pvt Ltd, and Indus (An Amneal company). Founded Sankalp Solutions in 2025 with a vision to streamline complex corporate ecosystems into agile, cost-effective networks.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Our Approach Section */}
        <section style={{ padding: '50px 5%', backgroundColor: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#003366', fontSize: '2.4rem', marginBottom: '40px', fontWeight: '700' }}>Our Approach</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* 🟢 बदल: प्रत्येक बॉक्सला स्क्रोल ॲनिमेशन क्लासेस जोडले */}
            {/* Step 1 - Understand */}
            <div className="animate-on-scroll delay-1" style={{ flex: '1', minWidth: '240px', maxWidth: '340px', padding: '30px 15px', background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #eef2f6' }}>
              <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <h4 style={{ color: '#0a1931', margin: '0 0 10px 0', fontSize: '1.25rem', fontWeight: '700' }}>Understand</h4>
              <p style={{ fontSize: '1.0rem', color: '#666', margin: 0, lineHeight: '1.5' }}>We understand your needs</p>
            </div>
            
            {/* Step 2 - Source */}
            <div className="animate-on-scroll delay-2" style={{ flex: '1', minWidth: '240px', maxWidth: '340px', padding: '30px 15px', background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #eef2f6' }}>
              <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <h4 style={{ color: '#0a1931', margin: '0 0 10px 0', fontSize: '1.25rem', fontWeight: '700' }}>Source</h4>
              <p style={{ fontSize: '1.0rem', color: '#666', margin: 0, lineHeight: '1.5' }}>We find the right suppliers</p>
            </div>
            
            {/* Step 3 - Evaluate */}
            <div className="animate-on-scroll delay-3" style={{ flex: '1', minWidth: '240px', maxWidth: '340px', padding: '30px 15px', background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #eef2f6' }}>
              <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              <h4 style={{ color: '#0a1931', margin: '0 0 10px 0', fontSize: '1.25rem', fontWeight: '700' }}>Evaluate</h4>
              <p style={{ fontSize: '1.0rem', color: '#666', margin: 0, lineHeight: '1.5' }}>We evaluate for quality, cost & reliability</p>
            </div>
            
            {/* Step 4 - Optimize */}
            <div className="animate-on-scroll delay-4" style={{ flex: '1', minWidth: '240px', maxWidth: '340px', padding: '30px 15px', background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #eef2f6' }}>
              <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              <h4 style={{ color: '#0a1931', margin: '0 0 10px 0', fontSize: '1.25rem', fontWeight: '700' }}>Optimize</h4>
              <p style={{ fontSize: '1.0rem', color: '#666', margin: 0, lineHeight: '1.5' }}>We optimize for better value and efficiency</p>
            </div>
            
            {/* Step 5 - Deliver */}
            <div className="animate-on-scroll delay-5" style={{ flex: '1', minWidth: '240px', maxWidth: '340px', padding: '30px 15px', background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #eef2f6' }}>
              <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              <h4 style={{ color: '#0a1931', margin: '0 0 10px 0', fontSize: '1.25rem', fontWeight: '700' }}>Deliver</h4>
              <p style={{ fontSize: '1.0rem', color: '#666', margin: 0, lineHeight: '1.5' }}>We ensure timely and reliable delivery</p>
            </div>
          </div>
        </section>

        {/* 4. Our Team Section */}
        <section style={{ padding: '50px 5%', backgroundColor: '#fdfdfd' }}>
          <h2 style={{ textAlign: 'center', color: '#003366', fontSize: '2.2rem', marginBottom: '30px', fontWeight: '700' }}>Meet Our Team</h2>
          <div className="team-flex">
            {teamMembers.map((member, index) => (
              <div key={index} className={`team-member-card animate-on-scroll delay-${index + 1}`} style={{ borderTop: '3px solid #ff6b6b' }}>
                
                {/* इनिशियल्ससाठी वर्तुळाकार बॉक्स */}
                <div style={{
                  width: '110px',
                  height: '110px',
                  backgroundColor: '#002258',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  borderRadius: '50%',
                  margin: '0 auto 12px auto',
                  boxShadow: '0 3px 8px rgba(0, 45, 87, 0.12)',
                  border: '2px solid #fff'
                }}>
                  {member.initials}
                </div>

                <h4 style={{ margin: '5px 0', fontSize: '1.05rem', color: '#181E33', fontWeight: 'bold', wordBreak: 'break-word' }}>{member.name}</h4>
                <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '0.85rem', fontWeight: '500' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default About;
