import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Helmet } from 'react-helmet-async';

// assets मधील इमेजेस
import Header from '../components/Header'; // 👈 ही लाईन जोडा
import industryImage from '../assets/Images/Industry.jpg';
import mfgImg from '../assets/Images/mfg.jpg';
import pharmaImg from '../assets/Images/pharma.jpg';
import autoImg from '../assets/Images/auto.jpg';
import civilImg from '../assets/Images/civil.jpg';
import itImg from '../assets/Images/it.jpg';
import resiImg from '../assets/Images/resi.jpg';
import energyImg from '../assets/Images/energy.jpg';
import hosImg from '../assets/Images/hos.jpg';

// 🟢 नवीन बनवलेला Footer कॉम्पोनंट इम्पोर्ट केला
import Footer from '../components/Footer';

function Industry() {
  // 🛠️ प्रत्येक इंडस्ट्रीला त्याच्या इम्पोर्ट केलेल्या इमेज सोबत जोडले (मॅप केले)
  const industries = [
    {
      id: "01",
      name: "Manufacturing Industry",
      desc: "Raw materials, Machinery, MRO, Tools, Packaging & more",
      image: mfgImg,
      icon: (
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

      {/* 🟢 फिक्स: इथे नवीन स्वतंत्र हेडर कॉम्पोनंट जोडला */}
      <Header />

      {/* Main Content Area */}
      <div className="page-wrapper">
        
        {/* स्लायडर */}
        <div className="slider">
          <img src={industryImage} alt="Sankalp Solutions Industries Banner" />
        </div>

        {/* Industries Introduction Section - Services Page थीम नुसार अपडेटेड */}
        <div className="intro-section" style={{ backgroundColor: '#f8f9fa', padding: '40px 5%', textAlign: 'center' }}>
          <h2 style={{ color: '#003366', margin: '0 0 15px 0', fontSize: '2.3rem', fontWeight: 'bold' }}>INDUSTRIES WE SERVE</h2>
          <p style={{ fontSize: '1rem', color: '#444', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            From routine consumables to critical project procurement, we ensure quality, cost efficiency, and timely delivery across all industries.
          </p>
        </div>


        {/* 🛠️ नवीन मॉडर्न ८-टाईल ग्रिड लेआउट विभाग */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', boxShadow: 'none', background: 'transparent' }}>
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
                
                {/* कार्ड मधील मुख्य कन्टेन्ट */}
                <div style={{ padding: '25px 20px 10px 20px', flex: '1' }}>
                  {/* डावीकडील नंबर */}
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#0a1931',
                    color: '#ffffff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontWeight: 'bold'
                  }}>{ind.id}</span>

                  {/* 🟢 डायनॅमिक आयकॉन सिम्बॉल बॉक्स */}
                  <div style={{ margin: '20px auto 15px auto', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4f8', borderRadius: '8px' }}>
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

                {/* 📐 🟢 अपडेट केलेला भाग: खालची कर्व्ह शेप इमेज पट्टी */}
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
                      <span style={{ color: 'rgba(255,255,255,0.08)', fontSize: '3.5rem', fontWeight: 'bold' }}>{ind.id}</span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Summary Footer Note */}
        <section style={{ textAlign: 'center', fontWeight: 'bold', color: '#003366', background: '#eef3f7', marginTop: '40px', padding: '20px', borderRadius: '8px' }}>
          We act as an extended procurement arm, delivering cost-effective and reliable sourcing solutions tailored to each industry.
        </section>
      </div>

      {/* 🟢 नवीन फुल स्क्रीन फुटर */}
      <Footer />
    </>
  );
}

export default Industry;
