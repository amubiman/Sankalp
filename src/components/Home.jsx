import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import '../App.css';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header'; 

// assets मधील इमेजेस
import homeImage from '../assets/Images/Home.jpg';
import founderImage from '../assets/Images/Founder.jpg'; 

// Footer कॉम्पोनंट इम्पोर्ट केला
import Footer from '../components/Footer';

function Home() {
  // Why Choose Us कार्ड्ससाठी स्टेट (State) मॅनेजमेंट
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // १. Intersection Observer केवळ स्क्रोल ॲनिमेशनसाठी (Vision/Mission/Leadership)
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 }); // ५% भाग दिसताच स्क्रोल इफेक्ट सुरू होईल

    elements.forEach((el) => observer.observe(el));
    
    // 🟢 फिक्स: आपण इथून जुना setTimeout आणि setAnimateCards पूर्णपणे काढून टाकला आहे.
    
    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#fdfdfd', color: '#333' }}>
      <Helmet>
        <title>Sankalp Solution | Procurement & Supply Chain Expert India</title>
        <meta name="description" content="Sankalp Solution delivers smart, reliable procurement and supply chain execution. Optimize sourcing costs, reduce operational risks, and scale your business." />
        <link rel="canonical" href="https://sankalpsolution.co.in" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sankalp Solution | Smart Sourcing, Better Prices, Stronger Businesses." />
        <meta property="og:description" content="Expert-led supply chain and procurement solutions designed to drive efficiency and reduce operational costs." />
        <meta property="og:url" content="https://sankalpsolution.co.in" />
      </Helmet>

      <Header />

      {/* Main Home Content */}
      <div id="home" style={{ marginTop: '55px', width: '100%' }}>
        
        {/* Hero Banner Section */}
        <div className="hero-banner" style={{ 
          position: 'relative', width: '100%', height: '85vh', 
          backgroundImage: `url(${homeImage})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          display: 'flex', alignItems: 'center', padding: '0 5%'
        }}>
          <div className="caption hero-animate" style={{ maxWidth: '600px', color: '#fff' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '20px', 
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)' 
            }}>
              <span style={{ color: '#ffffff' }}>"Smart Sourcing, </span>
              <span style={{ color: '#ff6b6b' }}>Better Prices, </span>
              <span style={{ color: '#ffffff' }}>Stronger Businesses."</span>
            </h1>
            <div style={{ marginBottom: '120px' }} />
            <div style={{ display: 'flex', gap: '15px' }}>
              <Link to="/services" style={{ backgroundColor: '#ff6b6b', color: '#fff', padding: '12px 25px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>Explore Services</Link>
              <Link to="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '12px 25px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0.2)', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>Contact Us</Link>
            </div>
          </div>
        </div>

        {/* प्रिमियम लिनियर ग्रॅडिएंट बॉक्स */}
        <section style={{ 
          padding: '20px 2%', 
          background: 'linear-gradient(90deg, #ff6b6b, #ff8e53)', 
          margin: '20px auto', 
          maxWidth: '1400px', 
          borderRadius: '10px', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          textAlign: 'center',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', color: '#ffffff' }}>
            <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0', lineHeight: '1.5', fontWeight: 'bold', opacity: '1' }}>
              Sankalp Solutions streamlines sourcing for India's top industries, connecting you with the right suppliers to deliver quality products and longterm values
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us" style={{ padding: '60px 5%', textAlign: 'center', backgroundColor: '#fff' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#0a1931', marginBottom: '40px', fontWeight: '700' }}>Why Choose Sankalp Solutions?</h2>
          
          <div className="column-container">
            {/* Column 1 - Cost Optimization */}
            <div className="card animate-on-scroll delay-1">
              <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><circle cx="8" cy="8" r="6"></circle><circle cx="18" cy="18" r="4"></circle><path d="M12 18a6 6 0 0 0-6-6"></path></svg>
              <h3 style={{ color: '#0a1931', marginBottom: '15px', fontSize: '1.4rem', fontWeight: '700' }}>Cost Optimization</h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6', margin: 0 }}>Reduce costs and improve efficiency.</p>
            </div>

            {/* Column 2 - Strategic Security */}
            <div className="card animate-on-scroll delay-2">
              <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <h3 style={{ color: '#0a1931', marginBottom: '15px', fontSize: '1.4rem', fontWeight: '700' }}>Strategic Security</h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6', margin: 0 }}>Right suppliers. Right value.</p>
            </div>

            {/* Column 3 - Reliable Vendor Network */}
            <div className="card animate-on-scroll delay-3">
              <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M12 8v8M5 16v-4h14v4"></path></svg>
              <h3 style={{ color: '#0a1931', marginBottom: '15px', fontSize: '1.4rem', fontWeight: '700' }}>Reliable Vendor Network</h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6', margin: 0 }}>Strong network of trusted partners.</p>
            </div>

            {/* Column 4 - Process Driven Execution */}
            <div className="card animate-on-scroll delay-4">
              <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><path d="M6 3h12l4 6-10 13L2 9z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>
              <h3 style={{ color: '#0a1931', marginBottom: '15px', fontSize: '1.4rem', fontWeight: '700' }}>Process Driven Execution</h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6', margin: 0 }}>Transparent, timely & result-oriented.</p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="services" style={{ padding: '40px 5%', backgroundColor: '#fdf1e3', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', width: '100%' }}>
            <div style={{ flex: '1', minWidth: '280px', textAlign: 'center' }}>
              <img src={founderImage} alt="Mr. Rohit Vijay Kawale" style={{ width: '100%', maxWidth: '300px', borderRadius: '8px' }} />
            </div>
            <div style={{ flex: '2', minWidth: '300px' }}>
              <h2 style={{ fontSize: '2.2rem', color: '#002e79' }}>THE VISION BEHIND SANKALP</h2>
              <h2 style={{ fontSize: '1.4rem', color: '#0a1931' }}>Mr. Rohit Vijay Kawale</h2>
              <p style={{ fontWeight: '600', color: '#666' }}>Founder | Sankalp Solutions</p>
              <p>With 14+ years of industry experience in Procurement & Supply Chain Management, Rohit has worked across diverse sectors including pharmaceuticals, automobile, manufacturing, life sciences, and R&D.</p>
              <p>Driven by a passion for efficient sourcing, cost optimization, and process excellence, he founded Sankalp Solutions in 2025 to help businesses build smarter, stronger, and more resilient supply chains.</p>
              <p style={{ fontStyle: 'italic', fontWeight: '600', borderLeft: '4px solid #ff6b6b', paddingLeft: '15px', marginBottom: '25px' }}>
                His experience drives our approach. Our commitment drives your success.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision, Mission & Values Section */}
        <section className="vision-mission-values" style={{ padding: '60px 5%', textAlign: 'center', backgroundColor: '#fff' }}>
          <h2 style={{ fontSize: '2.4rem', color: '#0a1931', marginBottom: '40px', fontWeight: '700' }}>Our Vision, Mission & Values</h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Card 1 - Vision */}
            <div style={{ flex: '1', minWidth: '280px', maxWidth: '360px', padding: '40px 25px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }} className="animate-on-scroll delay-1">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '25px' }}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <h3 style={{ color: '#0a1931', fontSize: '1.6rem', fontWeight: '700', marginBottom: '15px' }}>Vision</h3>
              <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7', margin: 0 }}>To be a trusted procurement partner enabling businesses to build smarter and resilient supply chains.</p>
            </div>

            {/* Card 2 - Mission */}
            <div style={{ flex: '1', minWidth: '280px', maxWidth: '360px', padding: '40px 25px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }} className="animate-on-scroll delay-2">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '25px' }}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              <h3 style={{ color: '#0a1931', fontSize: '1.6rem', fontWeight: '700', marginBottom: '15px' }}>Mission</h3>
              <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7', margin: 0 }}>To deliver practical procurement solutions that create measurable business value.</p>
            </div>

            {/* Card 3 - Values */}
            <div style={{ flex: '1', minWidth: '280px', maxWidth: '360px', padding: '40px 25px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }} className="animate-on-scroll delay-3">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '25px' }}><path d="M6 3h12l4 6-10 13L2 9z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path></svg>
              <h3 style={{ color: '#0a1931', fontSize: '1.6rem', fontWeight: '700', marginBottom: '15px' }}>Values</h3>
              <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7', margin: 0 }}>Integrity | Commitment</p>
              <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7', margin: 0 }}>Transparency | Excellence</p>
              <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7', margin: 0 }}>Customer Focus</p>
            </div>

          </div>
        </section>

      </div> {/* id="home" चा बंद होणारा div */}
      <Footer />
    </div> 
  ); // return चा अचूक शेवट
} // function Home चा अचूक शेवट

export default Home;
