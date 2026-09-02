import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// assets मधील इमेजेस
import logoImage from '../assets/Images/Logo.png';
import homeImage from '../assets/Images/Home.jpg';
// फाईलच्या सर्वात वर हा इम्पोर्ट नक्की जोडा
import founderImage from '../assets/Images/Founder.jpg'; 

// 🟢 नवीन बनवलेला Footer कॉम्पोनंट इथे इम्पोर्ट केला आहे
import Footer from '../components/Footer';

function Home() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#fdfdfd', color: '#333' }}>
      
      {/* 🟢 Header Section: नवीन डिझाईननुसार */}
      <header style={{
        position: 'fixed', top: 0, left: 0, width: '100%', 
        backgroundColor: '#0a1931', display: 'flex', 
        justifyContent: 'space-between', alignItems: 'center', 
        padding: '10px 5%', zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        <div className="logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={logoImage} alt="Sankalp Solutions Logo" style={{ width: '160px', height: 'auto' }} />
        </div>
        
        <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
          <Link to="/services" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Services</Link>
          <Link to="/industry" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Industries</Link>
          <Link to="/case" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Case Study</Link>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Contact Us</Link>
          <Link to="/contact" style={{
            backgroundColor: '#ff6b6b', color: '#fff', padding: '8px 18px', 
            borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem'
          }}>Get In Touch</Link>
        </nav>
      </header>

      {/* Main Home Content */}
      <div id="home" style={{ marginTop: '80px', width: '100%' }}>
        
        {/* 🟢 Hero Banner Section: डार्क ओव्हरले पूर्णपणे काढून टाकला आहे जेणेकरून वॉलपेपर १००% ओरिजिनल दिसेल */}
        <div className="hero-banner" style={{ 
          position: 'relative', width: '100%', height: '85vh', 
          backgroundImage: `url(${homeImage})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          display: 'flex', alignItems: 'center', padding: '0 5%'
        }}>
          {/* डार्क बॉक्स काढला आहे, मजकूर स्पष्ट दिसण्यासाठी सुंदर टेक्स्ट-शॅडो दिली आहे */}
          <div className="caption" style={{ maxWidth: '600px', color: '#fff' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '20px', 
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)' 
            }}>
              <span style={{ color: '#ffffff' }}>Your </span>
              <span style={{ color: '#ff6b6b' }}>Success,</span>
              <br/>
              <span style={{ color: '#ffffff' }}>Our Priority</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#ffb3b3', 
              fontWeight: '500', 
              marginBottom: '15px',
              textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
            }}>
              Innovative | Reliable | Result-Driven
            </p>
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.6', 
              marginBottom: '30px', 
              color: '#ffffff',
              textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
            }}>
              We deliver smart, reliable and innovative solutions that empower your business to grow and succeed.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Link to="/services" style={{ backgroundColor: '#ff6b6b', color: '#fff', padding: '12px 25px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>Explore Services</Link>
              <Link to="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '12px 25px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0.2)', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>Contact Us</Link>
            </div>
          </div>
        </div>

        {/* 🟢 Why Choose Us Section: ४ बॉक्स एकाच ओळीत आणि ओरिजिनल SVG आयकॉन्ससह */}
        <section className="why-choose-us" style={{ padding: '60px 5%', textAlign: 'center', backgroundColor: '#fff' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0a1931', marginBottom: '40px', fontWeight: '700' }}>Why Choose Sankalp Solutions?</h2>
          
          <div className="column-container">
            
            {/* Column 1 - About Us */}
            <div className="card">
              {/* Coins SVG Icon */}
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px' }}><circle cx="8" cy="8" r="6"></circle><circle cx="18" cy="18" r="4"></circle><path d="M12 18a6 6 0 0 0-6-6"></path></svg>
              <h3 style={{ color: '#0a1931', marginBottom: '15px', fontSize: '1.2rem' }}>About Us</h3>
              <p style={{ fontSize: '0.92rem', color: '#666', lineHeight: '1.6', margin: 0 }}>Reduce costs and improve efficiency.</p>
            </div>

            {/* Column 2 - Our Approach */}
            <div className="card">
              {/* Shield SVG Icon */}
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <h3 style={{ color: '#0a1931', marginBottom: '15px', fontSize: '1.2rem' }}>Our Approach</h3>
              <p style={{ fontSize: '0.92rem', color: '#666', lineHeight: '1.6', margin: 0 }}>Right suppliers. Right value.</p>
            </div>

            {/* Column 3 - Our Vision */}
            <div className="card">
              {/* Network SVG Icon */}
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px' }}><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M12 8v8M5 16v-4h14v4"></path></svg>
              <h3 style={{ color: '#0a1931', marginBottom: '15px', fontSize: '1.2rem' }}>Reliable Vendor Network</h3>
              <p style={{ fontSize: '0.92rem', color: '#666', lineHeight: '1.6', margin: 0 }}>Strong network of trusted partners.</p>
            </div>

            {/* Column 4 - Our Values */}
            <div className="card">
              {/* Diamond SVG Icon */}
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px' }}><path d="M6 3h12l4 6-10 13L2 9z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>
              <h3 style={{ color: '#0a1931', marginBottom: '15px', fontSize: '1.2rem' }}>Process Driven Execution</h3>
              <p style={{ fontSize: '0.92rem', color: '#666', lineHeight: '1.6', margin: 0 }}>Transparent, timely & result-oriented.</p>
            </div>

          </div>
        </section>

        {/* Leadership Section */}
            <div id="services" style={{ padding: '60px 5%', backgroundColor: '#f9f9f9' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', backgroundColor: '#fff', padding: '40px', borderRadius: '12px' }}>
                
                {/* डावी बाजू: फोटो */}
                <div style={{ flex: '1', minWidth: '280px', textAlign: 'center' }}>
                  <img src={founderImage} alt="Mr. Rohit Vijay Kawale" style={{ width: '100%', maxWidth: '300px', borderRadius: '8px' }} />
                </div>

                {/* उजवी बाजू: मजकूर */}
                <div style={{ flex: '2', minWidth: '300px' }}>
                  <h2 style={{ fontSize: '1.4rem', color: '#ff6b6b' }}>The Vision behind Sankalp</h2>
                  <h3 style={{ fontSize: '2.2rem', color: '#0a1931' }}>Mr. Rohit Vijay Kawale</h3>
                  <p style={{ fontWeight: '600', color: '#666' }}>Founder | Sankalp Solutions</p>
                  
                  <p>With 14+ years of industry experience in Procurement & Supply Chain Management, Rohit has worked across diverse sectors including pharmaceuticals, automobile, manufacturing, life sciences, and R&D.</p>
                  <p>Driven by a passion for efficient sourcing, cost optimization, and process excellence, he founded Sankalp Solutions in 2025 to help businesses build smarter, stronger, and more resilient supply chains.</p>
                  
                  <p style={{ fontStyle: 'italic', fontWeight: '600', borderLeft: '4px solid #ff6b6b', paddingLeft: '15px' }}>
                    His experience drives our approach. Our commitment drives your success.
                  </p>
                  
                  <Link to="/contact" style={{ border: '2px solid #0a1931', padding: '10px 22px', fontWeight: 'bold', textDecoration: 'none', color: '#0a1931' }}>Meet Our Founder</Link>
                </div>

              </div>
            </div>
        {/* 🟢 मॅन्युअली जोडलेला नवीन विभाग: Our Vision, Mission & Values */}
        <section className="vision-mission-values" style={{ padding: '60px 5%', textAlign: 'center', backgroundColor: '#fff' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0a1931', marginBottom: '40px', fontWeight: '700' }}>Our Vision, Mission & Values</h2>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '30px', 
            justifyContent: 'center', 
            maxWidth: '1200px', 
            margin: '0 auto' 
          }}>
            
            {/* Card 1 - Vision */}
            <div style={{ flex: '1', minWidth: '280px', maxWidth: '360px', padding: '40px 25px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}>
              {/* Eye SVG Icon */}
              {/* 🟢 stroke चा रंग बदलून #ff6b6b केला आहे */}
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <h3 style={{ color: '#0a1931', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px' }}>Vision</h3>
              <p style={{ fontSize: '0.98rem', color: '#555', lineHeight: '1.7', margin: 0 }}>To be a trusted procurement partner enabling businesses to build smarter and resilient supply chains.</p>
            </div>

            {/* Card 2 - Mission */}
            <div style={{ flex: '1', minWidth: '280px', maxWidth: '360px', padding: '40px 25px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}>
              {/* Target SVG Icon */}
              {/* 🟢 stroke चा रंग बदलून #ff6b6b केला आहे */}
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              <h3 style={{ color: '#0a1931', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px' }}>Mission</h3>
              <p style={{ fontSize: '0.98rem', color: '#555', lineHeight: '1.7', margin: 0 }}>To deliver practical procurement solutions that create measurable business value.</p>
            </div>

            {/* Card 3 - Values */}
            <div style={{ flex: '1', minWidth: '280px', maxWidth: '360px', padding: '40px 25px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}>
              {/* Diamond SVG Icon */}
              {/* 🟢 stroke चा रंग बदलून #ff6b6b केला आहे */}
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><path d="M6 3h12l4 6-10 13L2 9z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path></svg>
              <h3 style={{ color: '#0a1931', fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px' }}>Values</h3>
              <p style={{ fontSize: '0.98rem', color: '#555', lineHeight: '1.7', margin: '0 0 8px 0', fontWeight: '500' }}>Integrity | Commitment</p>
              <p style={{ fontSize: '0.98rem', color: '#555', lineHeight: '1.7', margin: '0 0 8px 0', fontWeight: '500' }}>Transparency | Excellence</p>
              <p style={{ fontSize: '0.98rem', color: '#555', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>Customer Focus</p>
            </div>

          </div>
        </section>

      </div>

      {/* 🟢 नवीन <Footer /> कॉम्पोनंट */}
      <Footer />

    </div>
  );
}

export default Home;
