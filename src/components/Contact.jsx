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

  // 🟢 टीम मेंबर्सचा डेटा - लोकल इमेजेस व्हेरिएबल्ससह सुरक्षित
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
      {/* हेडर (Header) - पूर्णपणे रिस्पॉन्सिव्ह */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', padding: '10px 20px' }}>
        <img src={logoImage} alt="Sankalp Solutions Logo" style={{ height: '70px', width: 'auto' }}/>
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
        
        {/* स्लायडर आणि इमेज ऑटो-फिट - आता कोणताही मजकूर यावर दिसणार नाही */}
        <div className="slider" style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden', display: 'block' }}>
          <div className="slides" style={{ display: 'block', width: '100%', height: '100%' }}>
            <img 
              src={contactImage} 
              alt="Sankalp Solutions Contact Us Banner"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                display: 'block' 
              }}
            />
          </div>
        </div>

        {/* Contact Us Introduction Section - मजकूर इथे खाली जोडला आहे */}
        <div style={{ marginBottom: '-30px' }}>
          <section style={{ textAlign: 'center', background: '#f8f9fa' }}>
            <h2 style={{ color: '#003366', margin: '0 0 10px 0' }}>Contact Us</h2>
            <p style={{ fontSize: '1.2rem', color: '#444', maxWidth: '800px', margin: '0 auto', fontWeight: 'bold', lineHeight: '1.6', fontStyle: 'italic' }}>
              "Your Success, Our Priority"
            </p>
          </section>
        </div>

        {/* मुख्य संपर्क विभाग दोन कॉलममध्ये (Two Columns Layout) */}
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
                <button type="submit" style={{ padding: '12px', background: '#181E33', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>SUBMIT ENQUIRY</button>
              </form>
            </div>
          </div>
        </section>

        {/* आमची टीम सेक्शन (Our Team) */}
        <section style={{ paddingBottom: '40px', background: '#fdfdfd' }}>
          <h2 style={{ textAlign: 'center', color: '#003366', marginBottom: '30px' }}>Meet Our Team</h2>
          {/* 🟢 ३ आणि २ च्या रचनेसाठी 'team-flex' क्लास वापरला आहे */}
          <div className="team-flex">
            {teamMembers.map((member, index) => (
              /* 🟢 प्रत्येक कार्डला 'team-member-card' क्लास देऊन इनलाईन विड्थ काढून टाकली आहे */
              <div key={index} className="team-member-card" style={{ borderTop: '3px solid #003366' }}>
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

      {/* फूटर (Footer) */}
      <footer>
        <p>&copy; 2026 Sankalp Solutions. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
