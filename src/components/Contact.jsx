import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

// assets मधील इमेजेस
import logoImage from '../assets/Images/Logo.png';
import contactImage from '../assets/Images/contact.png'; 

// 🟢 नवीन बनवलेला Footer कॉम्पोनंट इम्पोर्ट केला
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank You ${formData.name}! Your message has been submitted..`);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

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

      {/* मुख्य मजकूर रॅप */}
      <div className="page-wrapper" style={{ backgroundColor: '#f8fafc', width: '100%', overflowX: 'hidden' }}>
        
        {/* स्लायडर आणि इमेज ऑटो-फिट */}
        <div className="slider" style={{ width: '100%' }}>
          <img src={contactImage} alt="Sankalp Solutions Contact Us Banner" style={{ width: '100%', display: 'block' }} />
        </div>

        {/* १. इंट्रोडक्शन सेक्शन (इतर सर्व पेजेस प्रमाणे एकसमान फॉन्ट साईझ आणि थीम) */}
        <div className="intro-section" style={{ backgroundColor: '#f8f9fa', padding: '40px 5%', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
          <h2 style={{ color: '#003366', margin: '0', fontSize: '2.3rem', fontWeight: 'bold' }}>CONTACT US</h2>
        </div>

        {/* ==========================================
            📐 दुरुस्त केलेला १००% परफेक्ट सेंटर-अलाईन कॉन्टॅक्ट विभाग (पांढरा पॅच पूर्णपणे बंद)
           ========================================== */}
        <section style={{ backgroundColor: '#f8fafc', padding: '50px 20px', margin: '0 auto', color: '#333333', boxShadow: 'none', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
            maxWidth: '1200px', 
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            
            {/* 🟦 टॉप विभाग: एकाच सरळ ओळीत सेट केलेले आकर्षक हेडिंग आणि टेक्स्ट */}
            <div style={{ maxWidth: '100%', width: '100%', marginBottom: '45px', textAlign: 'center', boxSizing: 'border-box' }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', color: '#ff6b6b', display: 'block', marginBottom: '8px' }}>Contact Us</span>
              <h2 style={{ color: '#0a1931', fontSize: '2.5rem', fontWeight: '800', margin: '0 0 12px 0', lineHeight: '1.2', whiteSpace: 'nowrap' }}>
                Let's Connect and Grow Together
              </h2>
              <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: '1.6', margin: '0 auto', whiteSpace: 'nowrap' }}>
                We are here to answer your questions and provide the best solutions for your business.
              </p>
            </div>


            {/* मिडिल विभाग: दोन कॉलम रचना (डिटेल्स आणि फॉर्म एका लाईनमध्ये परफेक्ट सेंटर आणि फुल विड्थ) */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '40px', 
              width: '100%',
              justifyContent: 'center', // दोन्ही बॉक्स समोरासमोर स्क्रीनच्या मधोमध सेट करण्यासाठी 🎯
              alignItems: 'stretch',
              boxSizing: 'border-box'
            }}>
              
              {/* 📞 डावा कॉलम: संपर्क माहिती (बॉक्समध्ये सेंटर केलेली) */}
              <div style={{ 
                flex: '1', 
                minWidth: '300px', 
                maxWidth: '460px', 
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
                textAlign: 'left',
                boxSizing: 'border-box'
              }}>
                
                {/* कॉल */}
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <div style={{ color: '#0a1931', marginTop: '3px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 3px 0', color: '#666666', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Call Us</h5>
                    <p style={{ margin: 0, fontSize: '1rem', fontWeight: '600', color: '#0a1931' }}>+91 8600771113 / +91 8669966192</p>
                  </div>
                </div>

                {/* ईमेल */}
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <div style={{ color: '#0a1931', marginTop: '3px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 3px 0', color: '#666666', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Email Us</h5>
                    <p style={{ margin: 0, fontSize: '1rem', fontWeight: '600', color: '#0a1931', lineHeight: '1.4' }}>info@sankalpsolutions.co.in<br />kawalerohit41@gmail.com</p>
                  </div>
                </div>

                {/* ऑफिस पत्ता */}
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <div style={{ color: '#0a1931', marginTop: '3px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 3px 0', color: '#666666', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Visit Us</h5>
                    <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: '600', color: '#0a1931', lineHeight: '1.5' }}>
                      Flat no-14, Asthbhuja Enclave, Kailash Colony, Rasnenagar, Savedi, AhilyaNagar, Maharashtra, 414005.
                    </p>
                  </div>
                </div>

              </div>

              {/* ⬜ उजवा कॉलम: पांढरा मोकळा बिझनेस फॉर्म बॉक्स */}
              <div style={{ 
                flex: '1', 
                minWidth: '320px', 
                maxWidth: '460px', 
                backgroundColor: '#ffffff', 
                borderRadius: '16px', 
                padding: '40px 35px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                border: '1px solid #e2e8f0',
                textAlign: 'left',
                boxSizing: 'border-box'
              }}>
                <h3 style={{ color: '#0a1931', marginTop: 0, marginBottom: '25px', fontSize: '1.4rem', fontWeight: '700' }}>Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#333', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#333', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                  <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#333', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                  <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#333', fontSize: '0.95rem', height: '120px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}></textarea>
                  
                  <button type="submit" style={{ padding: '14px', background: 'linear-gradient(90deg, #ff6b6b, #ff8e53)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', letterSpacing: '0.5px', boxShadow: '0 4px 15px rgba(255,107,107,0.3)', marginTop: '5px' }}>
                    Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* ३. बॉटम पट्टी बॉक्स */}
        <section style={{ background: '#f8fafc', padding: '0 20px 40px 20px', textAlign: 'center', boxShadow: 'none', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', padding: '25px 30px', border: '1px solid #e2e8f0', borderRadius: '12px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <span style={{ fontSize: '1.5rem' }}>🎯</span>
            <p style={{ margin: 0, fontWeight: '700', color: '#003366', fontSize: '1.1rem', letterSpacing: '0.3px' }}>
              We look forward to hearing from you! Your success is our priority.
            </p>
          </div>
        </section>

      </div>

      {/* 🟢 नवीन फुल स्क्रीन फुटर */}
      <Footer />
    </>
  );
}

export default Contact;
