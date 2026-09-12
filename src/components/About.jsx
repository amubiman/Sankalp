import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import { Helmet } from 'react-helmet-async';

// assets मधील इमेजेस इम्पोर्ट केल्या
import Header from '../components/Header'; 
import aboutImage from '../assets/Images/about.jpg'; 

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
    }, { threshold: 0.50 }); // ५% बॉक्स स्क्रीनवर दिसताच ॲनिमेशन सुरू होईल

    elements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    { name: "Mr. Rohit Vijay Kawale", role: "Founder", initials: "RK" },
    { name: "Mr. Amol Prakash Biman", role: "Technical Support", initials: "AB" },
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
        <title>About Us | Sankalp Solution - Sourcing Expertise Since 2025</title>
        <meta name="description" content="Learn about Sankalp Solution, founded by Mr. Rohit Vijay Kawale. Discover our structured procurement approach and expert team with 14+ years of industry experience." />
        <link rel="canonical" href="https://sankalpsolution.co.in" />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="About Us | Sankalp Solution - Our Story" />
        <meta property="og:description" content="Bringing 14+ years of industry experience to make procurement simpler and smarter." />
        <meta property="og:url" content="https://sankalpsolution.co.in" />
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
            </div>
          </div>
        </div>

        {/* प्रिमियम लिनियर ग्रॅडिएंट बॉक्स */}
        <section style={{ 
          padding: '20px 5%', 
          background: 'linear-gradient(90deg, #ff6b6b, #ff8e53)', 
          margin: '20px auto', 
          maxWidth: '1400px', 
          borderRadius: '10px', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          textAlign: 'center',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', color: '#ffffff' }}>
            <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0', lineHeight: '1.5', fontWeight: 'bold', opacity: '1' }}>
              "Where Experience Met a Purpose"
            </p>
          </div>
        </section>

        {/* 1. Our Story Section (extra space आणि padding फिक्स केले) */}
        <section style={{ 
          padding: '10px 5% 40px 5%', /* 🟢 वरचे पॅडिंग ५०px वरून २०px केले जेणेकरून वरची अतिरिक्त जागा कमी होईल */
          backgroundColor: '#fff' 
        }}>
          <h2 style={{ color: '#003366', fontSize: '2.3rem', marginBottom: '25px', textAlign: 'center', fontWeight: '700' }}>
            OUR STORY
          </h2>
          
          {/* 🟢 मॅक्स-विड्थ ११००px केली, ज्यामुळे डाव्या-उजव्या बाजूची एक्स्ट्रा स्पेस कमी होऊन मजकूर सुंदर पसरेल */}
          <div style={{ maxWidth: '1100px', margin: '0 auto', color: '#444', lineHeight: '1.8', fontSize: '1.05rem' }}>
            
            <p style={paragraphStyle}>
              Every business depends on procurement. But when sourcing becomes complex, suppliers become unreliable, or costs continue to rise, procurement can quickly become a business challenge. Sankalp Solutions was created to change that.
            </p>

            <p style={paragraphStyle}>
              Founded in 2025 by Mr. Rohit Vijay Kawale, Sankalp Solutions brings together years of hands-on industry experience and a clear understanding of the challenges businesses face in procurement and supply chain operations.
            </p>

            <p style={paragraphStyle}>
              The vision was never to be just another procurement service provider. It was to build a trusted partner that works alongside businesses, understands their requirements, and delivers practical solutions with accountability.
            </p>

            <p style={paragraphStyle}>
              From strategic sourcing and vendor development to procurement execution and supply chain coordination, our approach is built around one principle: <strong>Make procurement simpler. Make it smarter. Make it work.</strong>
            </p>

            <p style={paragraphStyle}>
              The word “Sankalp” represents our commitment — to every requirement, every relationship, and every result.
            </p>

            <p style={paragraphStyle}>
              Today, we continue to grow with the same purpose: helping businesses achieve greater efficiency, stronger supplier networks, optimized costs, and sustainable growth.
            </p>

          </div>
        </section>


        {/* 2. Our Approach Section */}
        <section style={{ padding: '50px 5%', backgroundColor: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#003366', fontSize: '2.3rem', marginBottom: '40px', fontWeight: '700' }}>OUR APPROACH</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            
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

          </div> {/* 🟢 हा flex वाल्या div चा क्लोजिंग टॅग आहे */}
        </section> {/* 🟢 हा Our Approach वाल्या section चा क्लोजिंग टॅग आहे */}


        {/* 3. Our Team Section (जो कट झाला होता तो पुन्हा जोडा) */}
        <section style={{ padding: '50px 5%', backgroundColor: '#fdfdfd' }}>
          <h2 style={{ textAlign: 'center', color: '#003366', fontSize: '2.3rem', marginBottom: '30px', fontWeight: '700' }}>MEET OUR TEAM</h2>
          <div className="team-flex">
            {teamMembers.map((member, index) => (
              <div key={index} className={`team-member-card animate-on-scroll delay-${index + 1}`} style={{ borderTop: '3px solid #ff6b6b' }}>
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

      </div> {/* 🟢 हा page-wrapper चा क्लोजिंग टॅग आहे */}

      <Footer />
    </>
  );
}

export default About;
