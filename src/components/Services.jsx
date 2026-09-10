import React, { useEffect } from 'react'; // 👈 इथे useEffect जोडा
import { Link } from 'react-router-dom';
import '../App.css';
import { Helmet } from 'react-helmet-async';

// assets मधील इमेजेस
import Header from '../components/Header'; // 👈 ही लाईन जोडा
import serviceImage from '../assets/Images/Service.jpg';

// 🟢 नवीन बनवलेला Footer कॉम्पोनंट इम्पोर्ट केला
import Footer from '../components/Footer';

function Services() {
  // 🟢 १००% फिक्स: जोपर्यंत युझर प्रत्यक्ष स्क्रोल करून तिथे जात नाही, तोपर्यंत ॲनिमेशन थांबवून ठेवणारा कोड
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // entry.isIntersecting आणि boundingClientRect मुळे बॉक्स खरोखर स्क्रीनच्या आत आल्यावरच ट्रिगर होईल
        if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
          
          // सुंदर वेव्ह इफेक्टसाठी डिले देऊन क्लास ॲड करू
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, 150); 
          
          // एकदा ॲनिमेशन झाले की त्या बॉक्सला ऑब्झर्वर मधून काढून टाका
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.25,         // बॉक्सचा फक्त १०% भाग दिसला तरी चालेल
      rootMargin: "0px 0px -100px 0px" // 🟢 फिक्स: स्क्रीनच्या तळापासून १००px वर आल्यावरच (प्रत्यक्ष दिसल्यावरच) सुरू होईल
    });

    // सुरुवातीला सर्व बॉक्स मधून 'is-visible' क्लास काढून सुरक्षित करणे
    elements.forEach((el) => {
      el.classList.remove('is-visible');
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);



  return ( // जुना return तसाच राहील

    
    <>
      <Helmet>
        <title>Our Services | Strategic Sourcing & SCM Coordination Solutions</title>
        <meta name="description" content="Explore expert supply chain solutions: Strategic Sourcing, Category Management, Contract Negotiation, Cost Reduction, and GEM & Tender Support Services." />
        <link rel="canonical" href="https://sankalpsolution.co.in" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Procurement Services | Sankalp Solution" />
        <meta property="og:description" content="Flexible, practical, and result-oriented engagement models tailored to your business goals." />
        <meta property="og:url" content="https://sankalpsolution.co.in" />
      </Helmet>


      {/* 🟢 फिक्स: इथे नवीन स्वतंत्र हेडर कॉम्पोनंट जोडला */}
      <Header />


      {/* Main Content Area */}
      <div className="page-wrapper">
        
        {/* स्लायडर */}
        <div className="slider">
          <img src={serviceImage} alt="Sankalp Solutions Services Banner" />
        </div>

        {/* 🎨 🟢 प्रिमियम रेड-टू-येलो लिनियर ग्रॅडिएंट बॉक्स */}
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
              At Sankalp Solutions, we offer expert-led supply chain solutions designed to drive efficiency, reduce costs, and strengthen supplier partnerships.
            </p>
          </div>
        </section>

{/* ==========================================
    🟢 SECTION 1: OUR SERVICES (सुधारित टायटल आणि १४००px अलाइनमेंट)
   ========================================== */}
<section style={{ padding: '45px 2% 30px 2%', background: '#fff', boxShadow: 'none' }}> {/* 🟢 डावे-उजवे पॅडिंग २% ठेवले */}

  {/* 🟢 फिक्स: टायटल सेक्शनच्या आतच ठेवले, पण त्याचा राखाडी बॅकग्राउंड पूर्णपणे काढून टाकला */}
  <div className="intro-section" style={{ backgroundColor: 'transparent', padding: '0 0 35px 0', textAlign: 'center' }}>
    <h2 style={{ color: '#003366', margin: '0', fontSize: '2.3rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
      SERVICES WE OFFER
    </h2>
  </div>

  {/* पहिल्या ६ सेवांची ३-कॉलम/२-कॉलम रचना */}
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '25px',
    maxWidth: '1400px', 
    margin: '0 auto 25px auto',
    justifyContent: 'center'
  }}>
    
    {/* Box 1: Strategic Sourcing */}
    <div className="animate-on-scroll delay-1" style={{ flex: '1', minWidth: '290px', maxWidth: '680px', display: 'flex', gap: '20px', alignItems: 'center', padding: '25px', border: '1px solid #e0e0e0', borderRadius: '16px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
      <div style={{ width: '55px', height: '55px', background: '#0a1931', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
      </div>
      <div>
        <h4 style={{ margin: '0 0 6px 0', color: '#0a1931', fontSize: '1.25rem', fontWeight: 'bold' }}>Strategic Sourcing</h4>
        <p style={{ margin: 0, fontSize: '0.92rem', color: '#555', lineHeight: '1.5' }}>Optimizing procurement processes to identify the best-value suppliers while aligning with business goals.</p>
      </div>
    </div>

    {/* Box 2: Category Management */}
    <div className="animate-on-scroll delay-2" style={{ flex: '1', minWidth: '290px', maxWidth: '680px', display: 'flex', gap: '20px', alignItems: 'center', padding: '25px', border: '1px solid #e0e0e0', borderRadius: '16px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
      <div style={{ width: '55px', height: '55px', background: '#7cb342', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
      </div>
      <div>
        <h4 style={{ margin: '0 0 6px 0', color: '#0a1931', fontSize: '1.25rem', fontWeight: 'bold' }}>Category Management</h4>
        <p style={{ margin: 0, fontSize: '0.92rem', color: '#555', lineHeight: '1.5' }}>Developing tailored strategies for specific spend categories to ensure continuous value creation and control.</p>
      </div>
    </div>

    {/* Box 3: Contract Negotiation */}
    <div className="animate-on-scroll delay-3" style={{ flex: '1', minWidth: '290px', maxWidth: '680px', display: 'flex', gap: '20px', alignItems: 'center', padding: '25px', border: '1px solid #e0e0e0', borderRadius: '16px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
      <div style={{ width: '55px', height: '55px', background: '#1565c0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
      </div>
      <div>
        <h4 style={{ margin: '0 0 6px 0', color: '#0a1931', fontSize: '1.25rem', fontWeight: 'bold' }}>Contract Negotiation</h4>
        <p style={{ margin: 0, fontSize: '0.92rem', color: '#555', lineHeight: '1.5' }}>Structuring and negotiating contracts that minimize risk and maximize value, ensuring long-term business benefits.</p>
      </div>
    </div>

    {/* Box 4: Supplier Relationship Management (SRM) */}
    <div className="animate-on-scroll delay-4" style={{ flex: '1', minWidth: '290px', maxWidth: '680px', display: 'flex', gap: '20px', alignItems: 'center', padding: '25px', border: '1px solid #e0e0e0', borderRadius: '16px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
      <div style={{ width: '55px', height: '55px', background: '#2e7d32', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path></svg>
      </div>
      <div>
        <h4 style={{ margin: '0 0 6px 0', color: '#0a1931', fontSize: '1.25rem', fontWeight: 'bold' }}>Supplier Relationship Management (SRM)</h4>
        <p style={{ margin: 0, fontSize: '0.92rem', color: '#555', lineHeight: '1.5' }}>Building and maintaining strong, performance-focused relationships with suppliers to improve collaboration and innovation.</p>
      </div>
    </div>

    {/* Box 5: Cost Reduction */}
    <div className="animate-on-scroll delay-5" style={{ flex: '1', minWidth: '290px', maxWidth: '680px', display: 'flex', gap: '20px', alignItems: 'center', padding: '25px', border: '1px solid #e0e0e0', borderRadius: '16px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
      <div style={{ width: '55px', height: '55px', background: '#c62828', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
      </div>
      <div>
        <h4 style={{ margin: '0 0 6px 0', color: '#0a1931', fontSize: '1.25rem', fontWeight: 'bold' }}>Cost Reduction</h4>
        <p style={{ margin: 0, fontSize: '0.92rem', color: '#555', lineHeight: '1.5' }}>Identifying opportunities to reduce operational costs through process improvements, spend analysis, and strategic planning.</p>
      </div>
    </div>

    {/* Box 6: SCM Co-Ordination */}
    <div className="animate-on-scroll delay-6" style={{ flex: '1', minWidth: '290px', maxWidth: '680px', display: 'flex', gap: '20px', alignItems: 'center', padding: '25px', border: '1px solid #e0e0e0', borderRadius: '16px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
      <div style={{ width: '55px', height: '55px', background: '#f57c00', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
      </div>
      <div>
        <h4 style={{ margin: '0 0 6px 0', color: '#0a1931', fontSize: '1.25rem', fontWeight: 'bold' }}>SCM Co-Ordination</h4>
        <p style={{ margin: 0, fontSize: '0.92rem', color: '#555', lineHeight: '1.5' }}>Ensuring the smooth flow of goods, services, and information from raw materials to end customers, optimizing supply chain performance.</p>
      </div>
    </div>

  </div>

  {/* ७ वी सेवा */}
  <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '1400px', margin: '0 auto' }}> 
    <div className="animate-on-scroll delay-1" style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '25px', border: '1px solid #e0e0e0', borderRadius: '16px', background: '#fff', width: '100%', maxWidth: '680px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}> 
      <div style={{ width: '55px', height: '55px', background: '#00838f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
      </div>
      <div>
        <h4 style={{ margin: '0 0 6px 0', color: '#0a1931', fontSize: '1.25rem', fontWeight: 'bold' }}>GEM & Tender Support Services</h4>
        <p style={{ margin: 0, fontSize: '0.92rem', color: '#555', lineHeight: '1.5' }}>Providing comprehensive Government E-Marketplace (GEM), Tendering, Documentation, and Bid Support Services.</p>
      </div>
    </div>
  </div>

</section>


        {/* ==========================================
            🟢 SECTION 2: OUR APPROACH (Engagement Models)
           ========================================== */}
        {/* 🎨 🟢 प्रिमियम रेड-टू-येलो लिनियर ग्रॅडिएंट बॉक्स */}
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
              We understand your business, challenges and operations to offer customized engagement models that fit your needs.
            </p>
          </div>
        </section>

        {/* 🟢 फिक्स: 'OUR APPROACH' टायटल आता या मुख्य पांढऱ्या सेक्शनच्या आत घेतले आहे */}
        <section style={{ padding: '45px 5% 40px 5%', background: '#fff', boxShadow: 'none', marginTop: '30px' }}>
          
          {/* 🟢 फिक्स: राखाडी बॅकग्राउंड काढून टायटलला क्लीन आणि पारदर्शक बनवले */}
          <div className="intro-section" style={{ backgroundColor: 'transparent', padding: '0 0 35px 0', textAlign: 'center' }}>
            <h2 style={{ color: '#003366', margin: '0 0 8px 0', fontSize: '2.3rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              OUR APPROACH
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#ff6b6b', fontWeight: 'bold', margin: '0' }}>
              Flexible. Practical. Result-Oriented.
            </p>
          </div>

          {/* एंगेजमेंट मॉडेल्सची रचना */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Model 1: Existing Team (Navy Blue Theme) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', padding: '25px', border: '1px solid #003366', borderRadius: '16px', background: '#f4f7f9' }}>
              <div style={{ width: '70px', height: '70px', border: '2px solid #003366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: '#fff', margin: '0 auto' }}>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div style={{ flex: '1', minWidth: '250px', textAlign: 'left' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#003366', fontSize: '1.25rem', fontWeight: 'bold' }}>For organizations with an existing team:</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#333', lineHeight: '1.6' }}>We work as an extended procurement partner, strengthening your current team with our expertise, vendor network and strategic support.</p>
              </div>
            </div>

            {/* Model 2: New Setups (Green Theme) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', padding: '25px', border: '1px solid #7cb342', borderRadius: '16px', background: '#f8faf4' }}>
              <div style={{ width: '70px', height: '70px', border: '2px solid #7cb342', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: '#fff', margin: '0 auto' }}>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              </div>
              <div style={{ flex: '1', minWidth: '250px', textAlign: 'left' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#558b2f', fontSize: '1.25rem', fontWeight: 'bold' }}>For new setups and growing businesses:</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#333', lineHeight: '1.6' }}>We act as your complete procurement function, eliminating the need to hire and manage an in-house team—helping you significantly reduce administrative and manpower costs.</p>
              </div>
            </div>

          </div>
        </section>



        {/* ==========================================
            SECTION 3: FOCUS ON EXECUTION
           ========================================== */}
        <section style={{ padding: '40px 5%', background: '#fff', textAlign: 'center', boxShadow: 'none', borderTop: '1px solid #eee' }}>
          <h3 style={{ color: '#003366', fontSize: '1.6rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>FOCUS ON EXECUTION. DELIVERING RESULTS.</h3>
          <p style={{ fontSize: '0.95rem', color: '#666', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
            Through structured processes, data-driven insights and strong vendor management, we ensure:
          </p>

          {/* ३ मुख्य रिझल्ट्सचा विभाग */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '900px', margin: '0 auto 40px auto' }}>
            
            {/* Benefit 1 */}
            <div style={{ flex: '1', minWidth: '200px', padding: '0 20px' }}>
              <div style={{ color: '#003366', marginBottom: '15px' }}>
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="12" y2="12"></line></svg>
              </div>
              <h4 style={{ color: '#0a1931', fontSize: '1.1rem', fontWeight: 'bold', margin: 0 }}>Cost<br />Optimization</h4>
            </div>

            {/* Benefit 2 */}
            {/* Benefit 2 */}
              <div style={{ flex: '1', minWidth: '200px', padding: '0 10px' }}>
              <div style={{ color: '#003366', marginBottom: '15px' }}>
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h4 style={{ color: '#0a1931', fontSize: '1.1rem', fontWeight: 'bold', margin: 0 }}>Faster<br />Procurement Cycles</h4>
            </div>

            {/* Benefit 3 */}
            <div style={{ flex: '1', minWidth: '200px', padding: '0 20px' }}>
              <div style={{ color: '#003366', marginBottom: '15px' }}>
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4 style={{ color: '#0a1931', fontSize: '1.1rem', fontWeight: 'bold', margin: 0 }}>Reliable Supply<br />and Operations</h4>
            </div>

          </div>


        </section>
        
        {/* 🎨 🟢 प्रिमियम रेड-टू-येलो लिनियर ग्रॅडिएंट बॉक्स */}
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
              Whether you are building your procurement function from scratch or optimizing an existing one, we deliver scalable, efficient and cost-effective solutions aligned with your business goals.
            </p>
          </div>
        </section>

        </div>
      {/* 🟢 नवीन फुल स्क्रीन फुटर */}
      <Footer />
    </>
  );
}

export default Services;
