import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

// 🟢 assets The images have been imported above the file.
import logoImage from '../assets/Images/Logo.png';
import contactImage from '../assets/Images/contact.png'; // Main banner image
import rohitImg from '../assets/Images/rohit.jpg';
import poojaImg from '../assets/Images/pooja.jpg';
import mayurImg from '../assets/Images/mayur.jpg';
import rutujaImg from '../assets/Images/rutuja.jpg';
import mangeshImg from '../assets/Images/mangesh.jpg';

function Contact() {
  // States for handling form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank You ${formData.name}! Your message has been submitted..`);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  // 🟢 Team member data – imported local images are added here (without quotation marks).
  const teamMembers = [
    { 
      name: "Mr. Rohit Vijay Kawale", 
      role: "Founder", 
      img: rohitImg 
    },
    { 
      name: "Mrs. Pooja Adwait Kulkarni", 
      role: "Client Relations Coordinator", 
      img: poojaImg 
    },
    { 
      name: "Mr. Mayur Pramod Kulkarni", 
      role: "Technical Support Specialist", 
      img: mayurImg 
    },
    { 
      name: "Ms. Rutuja Vilas Deshpande", 
      role: "Documentation & Compliance Executive", 
      img: rutujaImg 
    },
    { 
      name: "Mr. Mangesh Sadanand Shahane", 
      role: "Support Associate", 
      img: mangeshImg 
    }
  ];

  return (
    <>
      {/*  (Header) - About.jsx */}
      <header>
        <img src={logoImage} alt="Company Logo"/>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/industry">Industries</Link>
            <Link to="/case">Case Study</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
      </header>

      {/* (Main Content Wrap) */}
      <div id="contact-page" style={{ marginTop: '86px', width: '100%' }}>
        
        {/* Slider and image auto-fit (About.jsx According to the design) */}
        <div className="slider" style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden', display: 'block' }}>
          <div className="slides" style={{ display: 'block', width: '100%', height: '100%' }}>
            <img 
              src={contactImage} 
              alt="Contact image"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                display: 'block' 
              }}
            />
            
            {/* 🔴 Text at the perfect bottom and center of the image. */}
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
                
              </h2>
            </div>
          </div>
        </div>

        {/* Two Columns Layout */}
        <section>
          
          
          
          <section className="two-columns">
            {/* Left column: Contact information */}
            {/* Left column: Contact information (Align Left  */}
            <div className="column" style={{ textAlign: 'left' }}>
              <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
              <br />
              <p style={{ textAlign: 'left', margin: '10px 0' }}><strong>Mobile No:</strong> +91 8600771113 / 8669966192</p>
              <p style={{ textAlign: 'left', margin: '10px 0' }}><strong>Email Id:</strong> info@sankalpsolutions.co.in / kawalerohit41@gmail.com</p>
              <p style={{ textAlign: 'left', margin: '10px 0' }}><strong>Address:</strong> A/p- Savedi,Flat no-14,Asthbhuja Enclave,
Kailsh Colony,Rasnenagar,Savedi,AhilyaNagar,Maharashtra,414005
</p>
            </div>


            {/* Right column: Contact form */}
            <div className="column">
              <h2>Send Message</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <input type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleChange} required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', height: '100px' }}></textarea>
                <button type="submit" style={{ padding: '10px', background: '#0D8ABC', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>SUBMIT</button>
              </form>
            </div>
          </section>
        </section>

        {/* Our Team */}
        <section style={{ paddingBottom: '40px' }}>
          <h2>Our Team</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
            {teamMembers.map((member, index) => (
              <div key={index} style={{ textAlign: 'center', width: '200px', padding: '15px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                {/* 🔴 I have updated the style to make my images look round and neat. */}
                <img 
                  src={member.img} 
                  alt={member.name} 
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    marginBottom: '10px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                  }} 
                />
                <h4 style={{ margin: '5px 0', fontSize: '1.1rem' }}>{member.name}</h4>
                <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/*  (Footer) - About.jsx */}
      <footer>
        <p>&copy; 2026 Sankalpsolutions.co.in All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
