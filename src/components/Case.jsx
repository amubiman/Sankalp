import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

// assets मधील इमेजेस
import logoImage from '../assets/Images/Logo.png';
import caseImage from '../assets/Images/Case.jpg';

// जर भविष्यात इमेजेस वापरायच्या असतील तर त्याचे इम्पोर्ट इथे करू शकता:
// import loanMfgImg from '../assets/Images/loan-mfg.jpg';

// 🟢 नवीन बनवलेला Footer कॉम्पोनंट इम्पोर्ट केला
import Footer from '../components/Footer';

function CaseStudy() {
  
  // डाव्या बाजूच्या ३ मुख्य कॅटेगरीज आणि त्यांच्या उजव्या बाजूच्या ३-३ केस स्टडीजचा फायनल डेटा
  const caseCategories = [
    {
      id: "01",
      catTitle: "COST & COMMERCIAL OPTIMIZATION",
      catDesc: "Driving measurable savings through strategic sourcing and commercial negotiation.",
      color: "#0a1931", // Navy Blue
      studies: [
        { 
          title: "Loan License Manufacturing Optimization", 
          desc: "Reduced production cost and improved manufacturing lead time.",
          icon: <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#0a1931" strokeWidth="2"><path d="M22 21H2M5 21V7l7-3v17M12 21V9l7 4v8" /></svg>
        },
        { 
          title: "Cost Sheet & Vendor Benchmarking", 
          desc: "Identified cost gaps and strengthened vendor negotiations.",
          icon: <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#0a1931" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
        },
        { 
          title: "Supplier Credit Optimization", 
          desc: "Improved payment terms and supported healthier cash flow.",
          icon: <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#0a1931" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
        }
      ]
    },
    {
      id: "02",
      catTitle: "PROCUREMENT EFFICIENCY & PROCESS EXCELLENCE",
      catDesc: "Building structured procurement systems that improve speed, control, and productivity.",
      color: "#1565c0", // Medium Blue
      studies: [
        { 
          title: "ARC-Based Procurement Optimization", 
          desc: "Standardized recurring purchases for faster and more efficient ordering.",
          icon: <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#0a1931" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
        },
        { 
          title: "Vendor Base Rationalization", 
          desc: "Consolidated suppliers to improve pricing and quality consistency.",
          icon: <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#0a1931" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M16 12a4 4 0 0 1-4 4 4 4 0 0 1-4-4" /></svg>
        },
        { 
          title: "Procurement Process Standardization", 
          desc: "Introduced SOPs and tracking for greater transparency and control.",
          icon: <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#0a1931" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
        }
      ]
    },
    {
      id: "03",
      catTitle: "PLANNING, CONTINUITY & RISK MANAGEMENT",
      catDesc: "Proactive procurement strategies that ensure availability and business continuity.",
      color: "#00695c", // Teal / Deep Green-Blue
      studies: [
        { 
          title: "Advance Demand-Based Procurement", 
          desc: "Reduced stock-outs through projection-based procurement planning.",
          icon: <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#0a1931" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
        },
        { 
          title: "Emergency Procurement Cost Control", 
          desc: "Reduced urgent purchase costs through backup suppliers and rate agreements.",
          icon: <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#0a1931" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /></svg>
        },
        { 
          title: "Multi-Year AMC Strategy", 
          desc: "Improved equipment uptime with predictable maintenance contracts.",
          icon: <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#0a1931" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
        }
      ]
    }
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
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/industry">Industries</Link>
          <Link to="/case">Case Study</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/contact" className="btn-get-touch">Get In Touch</Link>
        </nav>
      </header>

      {/* Main Content Wrap */}
      <div className="page-wrapper" style={{ backgroundColor: '#f8fafc', paddingBottom: '60px' }}>
        
        {/* स्लायडर आणि इमेज ऑटो-फिट */}
        <div className="slider">
          <div className="slides">
            <img src={caseImage} alt="Sankalp Solutions Case Study Banner" />
            <div className="caption" style={{
              position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
              color: '#ffffff', textAlign: 'center', width: '100%', maxWidth: '800px',
              background: 'transparent', padding: '1rem', zIndex: '10'
            }}>
              <h2 style={{ color: '#ffffff', fontSize: '2.8rem', fontWeight: 'bold', margin: '0', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
                "Success Stories, That Inspire"
              </h2>
            </div>
          </div>
        </div>

        {/* Case Studies Introduction (Services/Industries च्या थीम मॅचिंग) */}
        <div className="intro-section" style={{ backgroundColor: '#ffffff', padding: '40px 5%', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <h2 style={{ color: '#003366', margin: '0 0 15px 0', fontSize: '2.3rem', fontWeight: 'bold' }}>CASE STUDIES</h2>
          <p style={{ fontSize: '1rem', color: '#444', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Real procurement challenges. Strategic solutions. Measurable impact. Below are select case studies demonstrating our expertise in action.
          </p>
        </div>

        {/* ==========================================
            📐 स्क्रीनशॉट प्रमाणे तंतोतंत प्रीमियम लेआउट विभाग
           ========================================== */}
        <section style={{ maxWidth: '1280px', margin: '40px auto 0 auto', padding: '0 20px', background: 'transparent', boxShadow: 'none' }}>
          
          {caseCategories.map((cat, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '24px',
              marginBottom: '45px',
              alignItems: 'stretch'
            }}>
              
              {/* 🟦 डावा कॉलम: डार्क कॅटेगरी सॉलिड कलर बॉक्स */}
              <div style={{
                flex: '0 0 290px',
                backgroundColor: cat.color,
                color: '#ffffff',
                borderRadius: '8px',
                padding: '40px 25px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
              }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', borderBottom: '2px solid rgba(255,255,255,0.3)', pb: '5px', display: 'inline-block', width: 'fit-content', marginBottom: '20px', lineHeight: '1' }}>
                  {cat.id}
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: '800', margin: '0 0 15px 0', lineHeight: '1.4', letterSpacing: '0.5px' }}>
                  {cat.catTitle}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, fontWeight: '400' }}>
                  {cat.catDesc}
                </p>
              </div>

              {/* ⬜ उजवा कॉलम: ३ केस स्टडीजची ३-कॉलम ग्रिड रचना */}
              <div style={{
                flex: '1',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px'
              }}>
                {cat.studies.map((study, idx) => {
                  // प्रत्येक कार्डचा जागतिक नंबर काढण्यासाठी (उदा. 01, 02, 03... 09)
                  const globalNumber = String((index * 3) + (idx + 1)).padStart(2, '0');
                  
                  return (
                    <div key={idx} style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      border: '1px solid #e5eaf0',
                      padding: '30px 20px 20px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                      textAlign: 'left'
                    }}>
                      
                      {/* 🏷️ स्क्रीनशॉट प्रमाणे कार्डच्या कोपऱ्यातील निळा ओव्हरलॅप नंबर टॅग */}
                      <span style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        backgroundColor: '#0a1931',
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        padding: '4px 10px',
                        borderRadius: '8px 0 8px 0'
                      }}>
                        {globalNumber}
                      </span>

                      {/* लोगोज किंवा आयकॉन्ससाठीचा राऊंडेड लाईट बॉक्स */}
                      <div style={{ 
                        width: '100%', 
                        height: '110px', 
                        backgroundColor: '#f8fafc', 
                        borderRadius: '6px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        marginBottom: '15px',
                        border: '1px solid #edf2f7'
                      }}>
                        {study.icon}
                      </div>

                      {/* केस स्टडी हेडिंग */}
                      <h4 style={{ color: '#0a1931', fontSize: '1.05rem', fontWeight: '700', margin: '0 0 10px 0', lineHeight: '1.4' }}>
                        {study.title}
                      </h4>

                      {/* शार्ट डिस्क्रिप्शन मजकूर */}
                      <p style={{ color: '#666666', fontSize: '0.88rem', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                        {study.desc}
                      </p>

                      {/* ➡️ स्क्रीनशॉट प्रमाणे तळाशी उजवीकडे असणारा छोटा ऑरेंज/गोल्डन ॲरो */}
                      <span style={{ 
                        marginTop: 'auto', 
                        alignSelf: 'flex-end', 
                        color: '#ff9800', 
                        fontSize: '1.2rem', 
                        fontWeight: 'bold',
                        lineHeight: '1'
                      }}>
                        →
                      </span>

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </section>
      </div>

      {/* 🟢 नवीन फुल स्क्रीन फुटर */}
      <Footer />
    </>
  );
}

export default CaseStudy;
