import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

// assets मधील इमेजेस
import logoImage from '../assets/Images/Logo.png';
import contactImage from '../assets/Images/contact.png'; 
import rohitImg from '../assets/Images/rohit.jpg';
import poojaImg from '../assets/Images/pooja.jpg';
import mayurImg from '../assets/Images/mayur.jpg';
import rutujaImg from '../assets/Images/rutuja.jpg';
import mangeshImg from '../assets/Images/mangesh.jpg';

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

  const teamMembers = [
    { name: "Mr. Rohit Vijay Kawale", role: "Founder", img: rohitImg },
    { name: "Mrs. Pooja Adwait Kulkarni", role: "Client Relations Coordinator", img: poojaImg },
    { name: "Mr. Mayur Pramod Kulkarni", role: "Technical Support Specialist", img: mayurImg },
    { name: "Ms. Rutuja Vilas Deshpande", role: "Documentation & Compliance Executive", img: rutujaImg },
    { name: "Mr. Mangesh Sadanand Shahane", role: "Support Associate", img: mangeshImg }
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

      {/* मुख्य मजकूर रॅप */}
      <div className="page-wrapper">
        
        {/* स्लायडर आणि इमेज ऑटो-फिट */}
        <div className="slider">
          <img src={contactImage} alt="Sankalp Solutions Contact Us Banner" />
        </div>

        {/* Contact Us Introduction Section */}
        <div className="intro-section">
          <h2 style={{ color: '#003366', margin: '0 0 10px 0' }}>Contact Us</h2>
          <p style={{ fontSize: '1.2rem', color: '#444', maxWidth: '800px', margin: '0 auto', fontWeight: 'bold', lineHeight: '1.6', fontStyle: 'italic' }}>
            "Your Success, Our Priority"
          </p>
        </div>

        {/* मुख्य संपर्क विभाग दोन कॉलममध्ये */}
        <section>
          <div className="two-columns">
            
            {/* डावा कॉलम: संपर्क माहिती */}
            <div className="column" style={{ textAlign: 'left', borderTop: '4px solid #003366' }}>
              <h3 style={{ color: '#003366', marginTop: 0 }}>Office Details</h3>
              <hr style={{ border: '0', height: '1px', background: '#eee', marginBottom: '15px' }} />
              <p style={{ textAlign: 'left', margin: '14px 0', lineHeight: '1.6', fontSize: '0.95rem' }}>
                📍 <strong>Address:</strong><br /> 
                “SANKALP SOLUTIONS”, A/p- Savedi, Flat no-14, Asthbhuja Enclave, Kailsh Colony, Rasnenagar, Savedi, AhilyaNagar, Maharashtra, 414005.
              </p>
              <p style={{ textAlign: 'left', margin: '14px 0', lineHeight: '1.6', fontSize: '0.95rem' }}>
                📞 <strong>Mobile No:</strong><br /> 
                +91 8600771113 / +91 8669966192
              </p>
              <p style={{ textAlign: 'left', margin: '14px 0', lineHeight: '1.6', fontSize: '0.95rem' }}>
                ✉️ <strong>Email Id:</strong><br /> 
                info@sankalpsolutions.co.in<br />
                kawalerohit41@gmail.com
              </p>
            </div>

            {/* उजवा कॉलम: संपर्क फॉर्म */}
            <div className="column" style={{ borderTop: '4px solid #003366' }}>
              <h3 style={{ color: '#003366', marginTop: 0 }}>Send Business Enquiry</h3>
              <hr style={{ border: '0', height: '1px', background: '#eee', marginBottom: '15px' }} />
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                <input type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleChange} required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                <textarea name="message" placeholder="Your Message / Requirement" value={formData.message} onChange={handleChange} required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', height: '110px', boxSizing: 'border-box', resize: 'vertical' }}></textarea>
                <button type="submit" style={{ padding: '12px', background: '#0a1931', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>SUBMIT ENQUIRY</button>
              </form>
            </div>
          </div>
        </section>

        {/* आमची टीम सेक्शन */}
        <section style={{ paddingBottom: '40px', background: '#fdfdfd' }}>
          <h2 style={{ textAlign: 'center', color: '#003366', marginBottom: '30px' }}>Meet Our Team</h2>
          <div className="team-flex">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card" style={{ borderTop: '3px solid #ff6b6b' }}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  style={{ 
                    width: '110px', 
                    height: '110px', 
                    marginBottom: '12px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    boxShadow: '0 3px 8px rgba(0,0,0,0.12)',
                    border: '2px solid #fff'
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

export default Contact;
