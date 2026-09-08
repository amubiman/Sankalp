import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import { Helmet } from 'react-helmet-async';

// assets मधील इमेजेस
import Header from '../components/Header'; 
import contactImage from '../assets/Images/contact.png'; 

// Footer कॉम्पोनंट
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
      <Helmet>
        <title>Contact Us | Let's Connect & Grow Together</title>
        <meta name="description" content="Get in touch with Sankalp Solutions in AhilyaNagar, Maharashtra. Call us or send a message for smart procurement solutions." />
        <link rel="canonical" href="https://sankalpsolutions.co.in" />
        <meta property="og:title" content="Contact Us | Sankalp Solutions" />
        <meta property="og:description" content="We are here to answer your questions and provide the best solutions for your business." />
        <meta property="og:url" content="https://sankalpsolutions.co.in" />
      </Helmet>

      <Header />

      {/* मुख्य मजकूर रॅप */}
      <div className="page-wrapper" style={{ backgroundColor: '#f8fafc', width: '100%', overflowX: 'hidden' }}>
        
        {/* स्लायडर आणि इमेज ऑटो-फिट */}
        <div className="slider">
          <img src={contactImage} alt="Sankalp Solutions Contact Us Banner" />
        </div>

        {/* मुख्य कॉन्टॅक्ट विभाग (इथे margin: '0 auto' मुळे सर्व सेंटर होईल) */}
        <section style={{ backgroundColor: '#f8fafc', padding: '20px 24px 50px 24px', margin: '0 auto', color: '#333333', width: '100%', maxWidth: '1424px', boxSizing: 'border-box' }}>
          
          <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
            
            {/* १. प्रिमियम रेड-टू-येलो लिनियर ग्रॅडिएंट बॉक्स */}
            <section style={{ 
              padding: '20px 5%', 
              background: 'linear-gradient(90deg, #ff6b6b, #ff8e53)', 
              margin: '0 auto 30px auto', 
              maxWidth: '1400px', 
              borderRadius: '10px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              textAlign: 'center',
              boxSizing: 'border-box',
              width: '100%'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', color: '#ffffff' }}>
                <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0', lineHeight: '1.5', fontWeight: 'bold', opacity: '1' }}>
                  Have a challenge? We have the expertise. Reach out today to see how we can drive your business forward.
                </p>
              </div>
            </section>

            {/* ==========================================
                🎯 दुरुस्त केलेले ३ स्वतंत्र सॉलिड प्रीमियम बॉक्स
               ========================================== */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '25px', 
              marginBottom: '50px',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              
              {/* 📞 बॉक्स १: कॉल (Solid Light Blue) */}
              <div className="contact-premium-card" style={{ backgroundColor: '#eef4fa', padding: '35px 20px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="contact-icon-wrapper call-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <h5 className="contact-card-title">Call Us</h5>
                <p className="contact-card-data">+91 8600771113<br />+91 8669966192</p>
              </div>

              {/* ✉️ बॉक्स २: ईमेल (Solid Light Navy) */}
              <div className="contact-premium-card" style={{ backgroundColor: '#e9ecf5', padding: '35px 20px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="contact-icon-wrapper email-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <h5 className="contact-card-title">Email Us</h5>
                <p className="contact-card-data">info@sankalpsolutions.co.in<br />kawalerohit41@gmail.com</p>
              </div>

              {/* 📍 बॉक्स ३: ऑफिस पत्ता (Solid Light Green) */}
              <div className="contact-premium-card" style={{ backgroundColor: '#eaf4eb', padding: '35px 20px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="contact-icon-wrapper visit-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <h5 className="contact-card-title">Visit Us</h5>
                <p className="contact-card-data" style={{ fontSize: '0.92rem' }}>
                  Bhairavnath park, Nagar kalyan road, opposite to Balaji temple, Nepti Suburban, Nepti, Ahilyanagar, Maharashtra 414001.
                </p>
              </div>

            </div>

            {/* मिडिल विभाग: मेसेज फॉर्म आणि मॅपची रचना समोरासमोर */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '30px', 
              width: '100%',
              justifyContent: 'center', 
              alignItems: 'stretch',
              boxSizing: 'border-box',
              marginBottom: '30px'
            }}>
              
              {/* ⬜ डावा कॉलम: बिझनेस फॉर्म बॉक्स */}
              <div style={{ 
                flex: '1', 
                minWidth: '320px', 
                maxWidth: '685px', 
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

              {/* 🗺️ उजवा कॉलम: Google Map */}
              <div style={{ 
                flex: '1', 
                minWidth: '320px', 
                maxWidth: '685px', 
                backgroundColor: '#ffffff', 
                borderRadius: '16px', 
                padding: '15px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                border: '1px solid #e2e8f0',
                boxSizing: 'border-box',
                overflow: 'hidden',
                display: 'flex'
              }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30162.61301962769!2d74.6893062!3d19.0933217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb11acad378b9%3A0x8f9495f1f094be84!2sSankalp%20Solutions!5e0!3m2!1sen!2sin!4v1788870864555!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '12px', minHeight: '380px' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div> {/* 🟢 १. मॅप कन्टेंनर वाल्या div चा क्लोजिंग टॅग */}

            </div> {/* 🟢 २. फॉर्म आणि मॅप एकत्र ठेवणाऱ्या flex वाल्या div चा क्लोजिंग टॅग */}
          </div> {/* 🟢 ३. मॅक्स-विड्थ १४००px वाल्या कंटेनर div चा क्लोजिंग टॅग */}
        </section> {/* 🟢 ४. मुख्य कॉन्टॅक्ट विभाग <section> चा क्लोजिंग टॅग */}

        {/* 🎨 ५. ३. बॉटम ग्रॅडिएंट पट्टी बॉक्स (इथे विड्थ calc(100% - 48px) केली आहे) */}
        <section style={{ 
          padding: '20px 5%', 
          background: 'linear-gradient(90deg, #ff6b6b, #ff8e53)', 
          margin: '0 auto 20px auto', 
          maxWidth: '1400px', 
          borderRadius: '10px', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          textAlign: 'center',
          boxSizing: 'border-box',
          width: 'calc(100% - 48px)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', color: '#ffffff' }}>
            <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0', lineHeight: '1.5', fontWeight: 'bold', opacity: '1' }}>
              <span>We look forward to hearing from you !</span>
              <span style={{ marginRight: '100px' }}></span> 
              <span>Your success is our priority.</span>
            </p>
          </div>
        </section>

      </div> {/* 🟢 ६. मुख्य page-wrapper वाल्या div चा क्लोजिंग टॅग */}

      <Footer /> {/* 🟢 ७. फुटर कॉम्पोनंट */}
    </>
  );
}

export default Contact; /* 🟢 ८. कॉम्पोनंट एक्सपोर्ट */


