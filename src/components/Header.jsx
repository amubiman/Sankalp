import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import logoImage from '../assets/Images/HLogo.png'; 

function Header() {
  // डार्क मोड स्टेट (सुरुवातीला पांढरा मोड)
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // ⏰ युझरच्या सिस्टीमची वेळ तपासणे आणि संध्याकाळी ७ नंतर ऑटो डार्क मोड करणे
    const currentHour = new Date().getHours();
    const isNightTime = currentHour >= 19 || currentHour < 6;

    // आधी युझरने स्वतः काही निवडले आहे का ते तपासणे (Saved Preference)
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && isNightTime)) {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  }, []);

  // मॅन्युअली बटण दाबल्यावर मोड बदलणे
  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logoImage} alt="Sankalp Solutions Logo" />
      </div>
      <nav className="main-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/industry">Industries</NavLink>
        <NavLink to="/case">Case Study</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        
        <a 
          href="https://wa.me" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-get-touch"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i>
          <span>Join Us</span>
        </a>

        {/* 🌙 / ☀️ प्रिमियम थीम टॉगल बटण */}
{/*         <button onClick={toggleTheme} className="theme-toggle-btn" title="टॉगल डे/नाईट मोड">
          {isDarkMode ? '☀️ Day' : '🌙 Night'}
        </button> */}
      </nav>
    </header>
  );
}

export default Header;
