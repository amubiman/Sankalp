import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logoImage from '../assets/Images/HLogo.png'; 

function Header() {
  // 🟢 बदल: जुने activeStyle चे इनलाईन फंक्शन इथून काढून टाकले आहे.

  return (
    <header>
      <div className="logo-container">
        <img src={logoImage} alt="Sankalp Solutions Logo" />
      </div>
      <nav className="main-nav">
        {/* 🟢 बदल: सर्व NavLink मधून style={activeStyle} पूर्णपणे काढून टाकले आहे */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/industry">Industries</NavLink>
        <NavLink to="/case">Case Study</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        
        <a 
          href="https://wa.me/918600771113" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-get-touch"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i>
          <span>Join Us</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
