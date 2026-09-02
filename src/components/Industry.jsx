import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// assets मधील इमेजेस
import logoImage from '../assets/Images/Logo.png';
import industryImage from '../assets/Images/Industry.jpg';

// 🟢 नवीन बनवलेला Footer कॉम्पोनंट इम्पोर्ट केला
import Footer from '../components/Footer';

function Industry() {
  const industriesGroup1 = [
    { name: "🏭 Manufacturing Industry", items: ["Raw materials (Steel, Aluminum, Plastics, Chemicals)", "Machinery & Spare Parts", "MRO Items (Maintenance, Repair & Operations)", "Industrial Tools & Consumables", "Packaging Materials (Pallets, Boxes, Straps)"] },
    { name: "💊 Pharma & Healthcare", items: ["API & Bulk Drugs", "Lab Equipment & Instruments", "Cleanroom Consumables", "Medical Equipment", "Packaging (Blister, Bottles, Labels)", "HVAC & Validation Services"] },
    { name: "🚗 Automobile Industry", items: ["Auto Components (Fasteners, Bearings, Castings)", "Assembly Line Equipment", "Lubricants & Oils", "Electrical Components", "Vendor-managed Inventory Items"] },
    { name: "🏗️ Construction & Civil", items: ["Cement, Steel, Sand, Aggregates", "Electrical & Plumbing Materials", "Tiles, Paints, Hardware", "Heavy Equipment Rental", "Site Consumables & Safety Items"] }
  ];

  const industriesGroup2 = [
    { name: "💻 IT & Corporate Offices", items: ["IT Hardware (Laptops, Servers, Networking)", "Office Supplies (Stationery, Printing)", "Facility Management Services", "Furniture & Fixtures", "AMC Services (IT, Electrical, HVAC)"] },
    { name: "🏢 Residential Societies", items: ["Plumbing & Electrical Maintenance", "Civil Repair Works", "Housekeeping Materials", "Security Services Procurement", "Lift & Equipment AMC"] },
    { name: "⚡ Energy / Solar / EPC", items: ["Solar Panels, Inverters, Cables", "Structural Materials", "Transformers & Switchgear", "Project-based Bulk Procurement", "EPC Vendor Management"] },
    { name: "🍴 Hospitality (Hotels)", items: ["Kitchen Equipment & Consumables", "Food Supply Chain (Bulk Items)", "Housekeeping Supplies", "Laundry Equipment & Services", "Furniture & Interior Items"] }
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
          <Link to="/services">Services</Link>
          <Link to="/industry">Industries</Link>
          <Link to="/case">Case Study</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/contact" className="btn-get-touch">Get In Touch</Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <div className="page-wrapper">
        
        {/* स्लायडर */}
        <div className="slider">
          <img src={industryImage} alt="Sankalp Solutions Industries Banner" />
        </div>

        {/* Industries Introduction Section */}
        <div className="intro-section">
          <h2 style={{ color: '#003366', margin: '0 0 10px 0' }}>Industries We Serve</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', maxWidth: '900px', margin: '0 auto', fontWeight: '500', lineHeight: '1.6', fontStyle: 'italic' }}>
            “From routine consumables to critical project procurement, we ensure quality, cost efficiency, and timely delivery across all industries.”
          </p>
        </div>

        {/* Sectors Row 1 */}
        <section className="four-columns">
          {industriesGroup1.map((ind, idx) => (
            <div className="column" key={idx} style={{ borderTop: '4px solid #0a1931' }}>
              <h3 style={{ color: '#003366', marginTop: 0, fontSize: '1.1rem', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>{ind.name}</h3>
              <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.88rem', lineHeight: '1.6', color: '#333' }}>
                {ind.items.map((item, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Sectors Row 2 */}
        <section className="four-columns" style={{ marginTop: '-20px' }}>
          {industriesGroup2.map((ind, idx) => (
            <div className="column" key={idx} style={{ borderTop: '4px solid #0a1931' }}>
              <h3 style={{ color: '#003366', marginTop: 0, fontSize: '1.1rem', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>{ind.name}</h3>
              <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.88rem', lineHeight: '1.6', color: '#333' }}>
                {ind.items.map((item, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Summary Footer Note */}
        <section style={{ textAlign: 'center', fontWeight: 'bold', color: '#003366', background: '#eef3f7' }}>
          We act as an extended procurement arm, delivering cost-effective and reliable sourcing solutions tailored to each industry.
        </section>
      </div>

      {/* 🟢 नवीन फुल स्क्रीन फुटर */}
      <Footer />
    </>
  );
}

export default Industry;
