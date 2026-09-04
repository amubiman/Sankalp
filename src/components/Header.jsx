import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Images/Logo.png'; // लोगोचा पाथ बरोबर असल्याची खात्री करा

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logoImage} alt="Sankalp Solutions Logo" />
      </div>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/industry">Industries</Link>
        <Link to="/case">Case Study</Link>
        <Link to="/contact">Contact Us</Link>
        {/* 🟢 व्हॉट्सॲप लिंक थेट इथे जोडली आहे */}
        <a 
          href="https://wa.me/918600771113" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-get-touch"
        >
          Get In Touch
        </a>
      </nav>
    </header>
  );
}

export default Header;
