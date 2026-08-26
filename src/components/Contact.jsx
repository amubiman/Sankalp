import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

// 🟢 assets मधील इमेजेस फाईलच्या वर इम्पोर्ट केल्या आहेत
import logoImage from '../assets/Images/Logo.png';
import contactImage from '../assets/Images/contact.png'; // मुख्य बॅनर इमेज
import rohitImg from '../assets/Images/rohit.jpg';
import poojaImg from '../assets/Images/pooja.jpg';
import mayurImg from '../assets/Images/mayur.jpg';
import rutujaImg from '../assets/Images/rutuja.jpg';
import mangeshImg from '../assets/Images/mangesh.jpg';

function Contact() {
  // फॉर्म डेटा हँडल करण्यासाठी स्टेट्स
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

  // 🟢 टीम मेंबर्सचा डेटा - लोकल इमेजेस व्हेरिएबल्ससह
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
      {/* हेडर (Header) - पूर्णपणे रिस्पॉन्सिव्ह आणि केस स्टडी पेजसारखा */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', padding: '10px 20px' }}>
        <img src={logoImage} alt="Company Logo" style={{ height: '70px', width: 'auto' }}/>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/industry">Industries</Link>
            <Link to="/case">Case Study</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
      </header>

      {/* मुख्य मजकूर रॅप (Main Content Wrap) */}
      <div id="contact-page" style={{ marginTop: '86px', width: '100%' }}>
        
        {/* स्लायडर आणि इमेज ऑटो-फिट */}
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
            
            {/* 🔴 मजकूर इमेजच्या परफेक्ट सेंटरला आणि बॉटमला */}
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
                Contact Our Team
              </h2>
            </div>
          </div>
        </div>

        {/* मुख्य संपर्क विभाग दोन कॉलममध्ये (Two Columns Layout) */}
        <section>
          <section className="two-columns">
            
            {/* डावा कॉलम: संपर्क माहिती */}
            <div className="column" style={{ textAlign: 'left' }}>
              <h2 style={{ textAlign: 'left', margin: '0 0 10px 0', color: '#003366' }}>Contact Us</h2>
              <hr style={{ border: '0', height: '1px', background: '#eee', marginBottom: '15px' }} />
              <p style={{ textAlign: 'left', margin: '12px 0', lineHeight: '1.5' }}><strong>Mobile No:</strong> +91 8600771113 / 8669966192</p>
              <p style={{ textAlign: 'left', margin: '12px 0', lineHeight: '1.5' }}><strong>Email Id:</strong> info@sankalpsolutions.co.in / kawalerohit41@gmail.com</p>
              <p style={{ textAlign: 'left', margin: '12px 0', lineHeight: '1.5' }}><strong>Address:</strong> A/p- Savedi, Flat no-14, Asthbhuja Enclave, Kailsh Colony, Rasnenagar, Savedi, AhilyaNagar, Maharashtra, 414005</p>
            </div>

            {/* उजवा कॉलम: संपर्क फॉर्म */}
            <div className="column">
              <h2 style={{ color: '#003366', margin: '0 0 10px 0' }}>Send Message</h2>
              <hr style={{ border: '0', height: '1px', background: '#eee', marginBottom: '15px' }} />
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

        {/* आमची टीम सेक्शन (Our Team) */}
        <section style={{ paddingBottom: '40px' }}>
          <h2>Our Team</h2>
          {/* 🟢 ३ आणि २ च्या रचनेसाठी 'team-flex' क्लास वापरला आहे */}
          <div className="team-flex">
            {teamMembers.map((member, index) => (
              /* 🟢 प्रत्येक कार्डला 'team-member-card' क्लास देऊन इनलाईन विड्थ काढून टाकली आहे */
              <div key={index} className="team-member-card">
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
                <h4 style={{ margin: '5px 0', fontSize: '1.1rem', wordBreak: 'break-word' }}>{member.name}</h4>
                <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* फूटर (Footer) */}
      <footer>
        <p>&copy; 2026 Sankalpsolutions.co.in All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
