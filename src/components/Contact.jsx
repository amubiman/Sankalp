import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import { Helmet } from 'react-helmet-async';

// assets मधील इमेजेस
import Header from '../components/Header'; 
import contactImage from '../assets/Images/contact.jpg'; 

// Footer कॉम्पोनंट
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [submittedName, setSubmittedName] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🎯 १. ईमेल आयडीसाठी प्रगत (Regex) व्हॅलिडेशन
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email.trim())) {
      alert("कृपया वैध ईमेल आयडी टाका! (उदा. info@example.com)");
      return; // कोड इथेच थांबेल
    }

    // 🎯 २. फोन नंबरसाठी फक्त १० अंकी नंबरचे व्हॅलिडेशन
    // युझरने टाकलेल्या नंबरमधून फक्त अंक बाजूला काढणे
    const cleanPhone = formData.phone.replace(/\D/g, ''); 
    if (cleanPhone.length !== 10) {
      alert("कृपया अचूक १० अंकी मोबाईल नंबर टाका!");
      return; // कोड इथेच थांबेल
    }

    // 🎯 ३. सर्व माहिती भरली आहे की नाही हे तपासणे (Basic Check)
    if (!formData.name.trim() || !formData.message.trim()) {
      alert("कृपया सर्व माहिती अचूक भरा. सर्व फील्ड्स भरणे अनिवार्य आहे!");
      return; // कोड इथेच थांबेल
    }

    setSubmittedName(formData.name);

    // 🟢 तुमची Google Web App URL
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbyqXgLd4R1803Q7VywKZvSyGViSU0vae81xPT3CS99F8kkGklEJY1KLTVu7HSTjPH_R/exec";

    // fetch API द्वारे डेटा गुगल स्क्रिप्टकडे पाठवणे
    fetch(googleScriptUrl, {
      method: 'POST',
      mode: 'no-cors', // 👈 CORS एरर टाळण्यासाठी आवश्यक
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        phone: cleanPhone // गुगल शीटमध्ये फक्त शुद्ध १० अंकी नंबर पाठवण्यासाठी
      })
    })
    .then(() => {
      // डेटा गेल्यानंतर फॉर्म क्लिअर करणे आणि पॉपअप दाखवणे
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error("Error sending data to Google Sheet:", error);
      alert("Something went wrong. Please try again!");
    });
  };


  return (
    <>
      <Helmet>
        <title>Contact Us | Let's Connect & Optimize Sourcing Together</title>
        <meta name="description" content="Get in touch with Sankalp Solution in Ahilyanagar, Maharashtra. Partner with us for industrial sourcing, vendor management, and procurement execution." />
        <link rel="canonical" href="https://sankalpsolution.co.in" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | Sankalp Solution - Partner with Experts" />
        <meta property="og:description" content="We are here to answer your questions and provide the best supply chain solutions for your business." />
        <meta property="og:url" content="https://sankalpsolution.co.in" />
      </Helmet>


      <Header />

      {/* Main Content Wrap */}
      <div className="page-wrapper" style={{ backgroundColor: '#f8fafc', paddingBottom: '60px' }}>
        
        {/* बॅनर्स */}
        <div className="slider">
          <div className="slides">
            <img src={contactImage} alt="Sankalp Solutions Contact Us Banner" />
            <div className="caption" style={{
              position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
              color: '#ffffff', textAlign: 'center', width: '100%', maxWidth: '800px',
              background: 'transparent', padding: '1rem', zIndex: '10'
            }}>
              <h2 style={{ color: '#ffffff', fontSize: '2.8rem', fontWeight: 'bold', margin: '0', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
                Contact Us
              </h2>
            </div>
          </div>
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
                <p className="contact-card-data">+91 9185271113<br />+91 8600771113</p>
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
                  Bhairavnath Park, Nagar Kalyan Road, Opposite To Balaji Temple, Nepti Suburban, Nepti, Ahilyanagar, Maharashtra 414001.
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
                
              <form onSubmit={(e) => {
                e.preventDefault();
                // 🔍 सर्व फील्ड्स भरली आहेत की नाही हे तपासणे (JavaScript Validation)
                if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
                  alert("कृपया सर्व माहिती अचूक भरा. सर्व फील्ड्स भरणे अनिवार्य आहे!");
                  return; // जर एखादे फील्ड रिकामे असेल तर कोड इथेच थांबेल, गुगल शीटला डेटा जाणार नाही
                }
                handleSubmit(e); // जर सर्व माहिती भरली असेल तरच तुमचा मुख्य फंक्शन कॉल होईल
              }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* नावाचे फील्ड */}
                <div style={{ position: 'relative' }}>
                  <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#333', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', width: '100%' }} />
                </div>

                {/* ईमेलचे फील्ड */}
                <div style={{ position: 'relative' }}>
                  <input type="email" name="email" placeholder="Your Email *" value={formData.email} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#333', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', width: '100%' }} />
                </div>

                {/* फोन नंबरचे फील्ड */}
                <div style={{ position: 'relative' }}>
                  <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Phone *" 
                  value={formData.phone} 
                  onChange={(e) => {
                    // 🛑 फक्त नंबर टाईप होऊ देणे, अक्षरे ब्लॉक करणे
                    const onlyNums = e.target.value.replace(/\D/g, '');
                    setFormData({ ...formData, phone: onlyNums });
                  }} 
                  maxLength="10" 
                  required 
                  style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#333', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', width: '100%' }} 
                  />

                </div>

                {/* मेसेजचे फील्ड */}
                <div style={{ position: 'relative' }}>
                  <textarea name="message" placeholder="Your Message *" value={formData.message} onChange={handleChange} required style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#333', fontSize: '0.95rem', height: '120px', outline: 'none', resize: 'vertical', boxSizing: 'border-box', width: '100%' }}></textarea>
                </div>
                
                <button type="submit" style={{ padding: '14px', background: 'linear-gradient(90deg, #ff6b6b, #ff8e53)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', letterSpacing: '0.5px', boxShadow: '0 4px 15px rgba(255,107,107,0.3)', marginTop: '5px', width: '100%' }}>
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
          padding: '10px 10%', 
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
            <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0', lineHeight: '2.0', fontWeight: 'bold', opacity: '1' }}>
              <span>We look forward to hearing from you !</span>
            </p>
            <p style={{ fontSize: '1.3rem', color: '#ffffff', margin: '0', lineHeight: '2.0', fontWeight: 'bold', opacity: '1' }}>
            <span>YOUR SUCCESS IS OUR PRIORITY.</span>
            </p>
          </div>
        </section>

      </div> {/* ६. मुख्य page-wrapper वाल्या div चा क्लोजिंग टॅग */}

      {/* ==========================================
          🎯 इथे बदल ३ चा कोड पेस्ट करा (पॉपअप लेआउट)
         ========================================== */}
      {isSubmitted && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(10, 25, 49, 0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999, padding: '20px', boxSizing: 'border-box'
        }}>
          <div style={{
            backgroundColor: '#ffffff', padding: '40px 30px', borderRadius: '20px',
            maxWidth: '550px', width: '100%', textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid #e2e8f0',
            boxSizing: 'border-box'
          }}>
            {/* टिक मार्क आयकॉन */}
            <div style={{
              width: '60px', height: '60px', backgroundColor: '#eaf4eb', borderRadius: '50%',
              display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 20px auto'
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>

            {/* मुख्य मेसेज */}
            <h3 style={{ color: '#0a1931', margin: '0 0 15px 0', fontSize: '1.6rem', fontWeight: '700' }}>
              Thank You, {submittedName}!
            </h3>
            
            <p style={{ color: '#4a5568', fontSize: '1.05rem', lineHeight: '1.6', margin: '0 0 20px 0' }}>
              We’ve received your message successfully. Your requirement is now with our team.
            </p>

            <p style={{ color: '#1a202c', fontSize: '1rem', fontStyle: 'italic', lineHeight: '1.6', margin: '0 0 25px 0', fontWeight: '500' }}>
              "We’ll be in touch soon to explore how Sankalp Solutions can add value to your business."
            </p>

            <h4 style={{ color: '#ff6b6b', margin: '0 0 30px 0', fontSize: '1.1rem', fontWeight: '700', letterSpacing: '0.5px' }}>
              Your Success. Our Priority.
            </h4>

            {/* क्लोज बटण */}
            <button 
              onClick={() => setIsSubmitted(false)}
              style={{ padding: '12px 35px', background: 'linear-gradient(90deg, #ff6b6b, #ff8e53)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.95rem', boxShadow: '0 4px 15px rgba(255,107,107,0.3)' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer /> {/* ७. फुटर कॉम्पोनंट */}

    </>
  );
}

export default Contact; /* 🟢 ८. कॉम्पोनंट एक्सपोर्ट */


