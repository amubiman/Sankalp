import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import { Helmet } from 'react-helmet-async';

// assets मधील इमेजेस
import Header from '../components/Header'; // 👈 ही लाईन जोडा
import caseImage from '../assets/Images/Case.jpg';
// assets मधील इमेजेसच्या खाली या ९ लाईन्स जोडा
import img1 from '../assets/Images/1.jpg';
import img2 from '../assets/Images/2.jpg';
import img3 from '../assets/Images/3.jpg';
import img4 from '../assets/Images/4.jpg';
import img5 from '../assets/Images/5.jpg';
import img6 from '../assets/Images/6.jpg';
import img7 from '../assets/Images/7.jpg';
import img8 from '../assets/Images/8.jpg';
import img9 from '../assets/Images/9.jpg';


// Footer कॉम्पोनंट इम्पोर्ट केला
import Footer from '../components/Footer';

function CaseStudy() {
  
  const caseCategories = [
    {
      id: "01",
      catTitle: "COST & COMMERCIAL OPTIMIZATION",
      catDesc: "Driving measurable savings through strategic sourcing and commercial negotiation.",
      color: "#0a1931", 
      studies: [
        { 
          title: "Loan License Manufacturing Optimization", 
          desc: "Reduced production cost and improved manufacturing lead time.",
          image: img1 // 👈 पहिली इमेज जोडली
        },
        { 
          title: "Cost Sheet & Vendor Benchmarking", 
          desc: "Identified cost gaps and strengthened vendor negotiations.",
          image: img2 // 👈 दुसरी इमेज जोडली
        },
        { 
          title: "Supplier Credit Optimization", 
          desc: "Improved payment terms and supported healthier cash flow.",
          image: img3 // 👈 तिसरी इमेज जोडली
        }
      ]
    },
    {
      id: "02",
      catTitle: "PROCUREMENT EFFICIENCY & PROCESS EXCELLENCE",
      catDesc: "Building structured procurement systems that improve speed, control, and productivity.",
      color: "#1565c0", 
      studies: [
        { 
          title: "ARC-Based Procurement Optimization", 
          desc: "Standardized recurring purchases for faster and more efficient ordering.",
          image: img4 // 👈 चौथी इमेज जोडली
        },
        { 
          title: "Vendor Base Rationalization", 
          desc: "Consolidated suppliers to improve pricing and quality consistency.",
          image: img5 // 👈 पाचवी इमेज जोडली
        },
        { 
          title: "Procurement Process Standardization", 
          desc: "Introduced SOPs and tracking for greater transparency and control.",
          image: img6 // 👈 सहावी इमेज जोडली
        }
      ]
    },
    {
      id: "03",
      catTitle: "PLANNING, CONTINUITY & RISK MANAGEMENT",
      catDesc: "Proactive procurement strategies that ensure availability and business continuity.",
      color: "#00695c", 
      studies: [
        { 
          title: "Advance Demand-Based Procurement", 
          desc: "Reduced stock-outs through projection-based procurement planning.",
          image: img7 // 👈 सातवी इमेज जोडली
        },
        { 
          title: "Emergency Procurement Cost Control", 
          desc: "Reduced urgent purchase costs through backup suppliers and rate agreements.",
          image: img8 // 👈 आठवी इमेज जोडली
        },
        { 
          title: "Multi-Year AMC Strategy", 
          desc: "Improved equipment uptime with predictable maintenance contracts.",
          image: img9 // 👈 नववी इमेज जोडली
        }
      ]
    }
  ];


  return (
    <>
      <Helmet>
        <title>Case Studies | Sankalp Solution - Sourcing Real Impact Stories</title>
        <meta name="description" content="Read select case studies demonstrating our expertise in cost optimization, commercial negotiation, procurement efficiency, and supply chain risk management." />
        <link rel="canonical" href="https://sankalpsolution.co.in" />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Case Studies | Sankalp Solution - Real Procurement Challenges" />
        <meta property="og:description" content="Real procurement challenges. Strategic solutions. Measurable business impact." />
        <meta property="og:url" content="https://sankalpsolution.co.in" />
      </Helmet>


      {/* 🟢 फिक्स: इथे नवीन स्वतंत्र हेडर कॉम्पोनंट जोडला */}
      <Header />

      {/* Main Content Wrap */}
      <div className="page-wrapper" style={{ backgroundColor: '#f8fafc', paddingBottom: '60px' }}>
        
        {/* बॅनर्स */}
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

        {/* Introduction */}
        {/* प्रिमियम लिनियर ग्रॅडिएंट बॉक्स */}
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
              "Real procurement challenges. Strategic solutions. Measurable impact. Below are select case studies demonstrating our expertise in action."
            </p>
          </div>
        </section>

        {/* 📐 ग्रिड आणि लेआउट विभाग */}
        <section style={{ maxWidth: '1400px', margin: '40px auto 0 auto', padding: '0 2%', background: 'transparent', boxShadow: 'none' }}>
          
          {caseCategories.map((cat, index) => (
            <div key={index} className="case-row-container">
              
            {/* 🟦 डावा कॉलम: कॅटेगरी सॉलिड बॉक्स */}
            {/* 🟢 फिक्स: flex: '0 0 240px' इनलाईन जोडून डाव्या बॉक्सची रुंदी कमी केली जेणेकरून उजवे ३ बॉक्सेस जास्त पसरतील */}
            <div className="case-sidebar-box" style={{ backgroundColor: cat.color, flex: '0 0 240px', boxSizing: 'border-box' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: '800', borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: '5px', display: 'inline-block', width: 'fit-content', marginBottom: '15px', lineHeight: '1' }}>
                {cat.id}
              </span>
              <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: '800', margin: '0 0 12px 0', lineHeight: '1.4', letterSpacing: '0.5px' }}>
                {cat.catTitle}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, fontWeight: '400' }}>
                {cat.catDesc}
              </p>
            </div>


              {/* ⬜ उजवा कॉलम: ३ केस स्टडीजची रचना */}
              <div className="case-grid-cards">
                {cat.studies.map((study, idx) => {
                  
                  return (
                    <div key={idx} className="case-single-card">
                      

                      {/* 🟢 फिक्स: जुन्या आयकॉन बॉक्स ऐवजी प्रिमियम इमेज बॉक्स जोडला */}
                      <div style={{ 
                        width: '100%', 
                        height: '140px', // इमेजेस स्पष्ट दिसण्यासाठी उंची थोडी वाढवली आहे
                        backgroundColor: '#f8fafc', 
                        borderRadius: '8px', 
                        overflow: 'hidden', // इमेज कोपऱ्याबाहेर जाणार नाही
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        marginBottom: '15px',
                        border: '1px solid #edf2f7'
                      }}>
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
                        />
                      </div>


                      {/* हेडिंग */}
                      <h4 style={{ color: '#0a1931', fontSize: '1.02rem', fontWeight: '700', margin: '0 0 8px 0', lineHeight: '1.4' }}>
                        {study.title}
                      </h4>

                      {/* डिस्क्रिप्शन */}
                      <p style={{ color: '#666666', fontSize: '0.86rem', lineHeight: '1.5', margin: '0 0 15px 0' }}>
                        {study.desc}
                      </p>

                      {/* ऑरेंज ॲरो पट्टी */}
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

      <Footer />
    </>
  );
}

export default CaseStudy;
