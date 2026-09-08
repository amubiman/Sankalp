import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Helmet } from 'react-helmet-async';

// assets मधील इमेजेस
import Header from '../components/Header'; 
import industryImage from '../assets/Images/Industry.jpg';
import mfgImg from '../assets/Images/mfg.jpg';
import pharmaImg from '../assets/Images/pharma.jpg';
import autoImg from '../assets/Images/auto.jpg';
import civilImg from '../assets/Images/civil.jpg';
import itImg from '../assets/Images/it.jpg';
import resiImg from '../assets/Images/resi.jpg';
import energyImg from '../assets/Images/energy.jpg';
import hosImg from '../assets/Images/hos.jpg';

// Footer कॉम्पोनंट
import Footer from '../components/Footer';

function Industry() {
  const industries = [
    {
      id: "01",
      name: "Manufacturing Industry",
      desc: "Raw materials, Machinery, MRO, Tools, Packaging & more",
      image: mfgImg,
      icon: (
        /* 🟢 बदल: width="45" आणि height="45" केले */
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 21H2M5 21V7l7-3v17M12 21V9l7 4v8" />
        </svg>
      )
    },
    {
      id: "02",
      name: "Pharma & Healthcare",
      desc: "API, Lab Equipment, Medical Devices, Packaging & more",
      image: pharmaImg,
      icon: (
        /* 🟢 बदल: width="45" आणि height="45" केले */
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <line x1="12" y1="9" x2="12" y2="15" />
          <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
      )
    },
    {
      id: "03",
      name: "Automobile Industry",
      desc: "Components, Line Equipment, Lubricants, Electricals & more",
      image: autoImg,
      icon: (
        /* 🟢 बदल: width="45" आणि height="45" केले */
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      )
    },
    {
      id: "04",
      name: "Construction & Civil",
      desc: "Cement, Steel, Electrical, Plumbing, Equipment, Safety Items & more",
      image: civilImg,
      icon: (
        /* 🟢 बदल: width="45" आणि height="45" केले */
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="21 8 21 21 3 21 3 8" />
          <rect x="1" y="3" width="22" height="5" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      )
    },
    {
      id: "05",
      name: "IT & Corporate Offices",
      desc: "IT Hardware, Office Supplies, Facility Mgmt., Furniture, AMC Services & more",
      image: itImg,
      icon: (
        /* 🟢 बदल: width="45" आणि height="45" केले */
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: "06",
      name: "Residential Societies / Facilities",
      desc: "Maintenance, Civil Works, Housekeeping, Security, AMC Services & more",
      image: resiImg,
      icon: (
        /* 🟢 बदल: width="45" आणि height="45" केले */
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21V9l9-6 9 6v12M9 21V12h6v9" />
        </svg>
      )
    },
    {
      id: "07",
      name: "Energy / Solar / EPC Projects",
      desc: "Solar, Cables, Switchgear, Bulk Procurement, EPC Management & more",
      image: energyImg,
      icon: (
        /* 🟢 बदल: width="45" आणि height="45" केले */
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="12" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="3" x2="9" y2="15" />
          <line x1="15" y1="3" x2="15" y2="15" />
          <path d="M12 15v4M8 21h8" />
        </svg>
      )
    },
    {
      id: "08",
      name: "Hospitality (Hotels & Restaurants)",
      desc: "Kitchen, Food Supply, Housekeeping, Laundry, Furniture & more",
      image: hosImg,
      icon: (
        /* 🟢 बदल: width="45" आणि height="45" केले */
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10H2A10 10 0 0 1 12 2zM2 16h20v4H2v-4z" />
        </svg>
      )
    }
  ];


  return (
    <>
      <Helmet>
        <title>Industries We Serve | Tailored Procurement Solutions</title>
        <meta name="description" content="We act as an extended procurement arm for Manufacturing, Pharma, Automobile, Construction, IT, Energy, and Hospitality sectors." />
        <link rel="canonical" href="https://sankalpsolutions.co.in" />
        <meta property="og:title" content="Industries We Serve | Sankalp Solutions" />
        <meta property="og:description" content="From routine consumables to critical project procurement, we ensure quality and timely delivery across all sectors." />
        <meta property="og:url" content="https://sankalpsolutions.co.in" />
      </Helmet>

      <Header />

      <div className="page-wrapper">
        
        {/* Banner Section */}
        <div className="slider">
          <img src={industryImage} alt="Sankalp Solutions Industries Banner" />
        </div>

        {/* प्रिमियम लिनियर ग्रॅडिएंट बॉक्स १ */}
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
              From everyday procurement to critical project requirements, we deliver reliable sourcing solutions that balance quality, cost, and timelines—helping businesses operate efficiently and grow with confidence.
            </p>
          </div>
        </section>

        {/* ८-टाईल ग्रिड लेआउट विभाग */}
        <section style={{ maxWidth: '1400px', margin: '20px auto', padding: '0 24px', boxShadow: 'none', background: 'transparent', width: '100%', boxSizing: 'border-box' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '25px'
          }}>
            {industries.map((ind) => (
              <div key={ind.id} style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                textAlign: 'center',
                border: '1px solid #eef2f6',
                minHeight: '380px'
              }}>
                
                {/* मुख्य कार्ड कंटेंट */}
                <div style={{ padding: '35px 20px 10px 20px', flex: '1' }}>
                  {/* आयकॉन बॉक्स */}
                  <div style={{ margin: '0 auto 15px auto', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4f8', borderRadius: '8px' }}>
                    {ind.icon}
                  </div>

                  {/* इंडस्ट्री नाव */}
                  <h3 style={{ color: '#0a1931', fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', lineHeight: '1.4' }}>
                    {ind.name}
                  </h3>

                  {/* साहित्याचे प्रकार */}
                  <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 20px 0', padding: '0 10px' }}>
                    {ind.desc}
                  </p>
                </div> 

                {/* खालची कर्व्ह शेप इमेज पट्टी (नंबर पूर्णपणे काढला आहे) */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '110px',
                  backgroundColor: '#0a1931', 
                  clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)', 
                  marginTop: 'auto',
                  overflow: 'hidden'
                }}>
                  {ind.image ? (
                    <img 
                      src={ind.image} 
                      alt={ind.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #0a1931, #1b365d)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: 'rgba(255,255,255,0.08)', fontSize: '3.5rem', fontWeight: 'bold' }}></span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div> 
        </section> 

      </div> 

      {/* प्रिमियम लिनियर ग्रॅडिएंट बॉक्स २ */}
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
          {/* 🟢 फिक्स: इथे </p> टॅग आणि सर्व क्लोजिंग ब्रॅकेट्स अचूक केले आहेत */}
          <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0', lineHeight: '1.5', fontWeight: 'bold', opacity: '1' }}>
            We act as an extended procurement arm, delivering cost-effective and reliable sourcing solutions tailored to each industry.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Industry;
