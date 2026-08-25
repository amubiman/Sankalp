import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <>
      {/* Header */}
      <header>
        <img src="/src/assets/Images/Logo.png" alt="Company Logo"/>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/industry">Industries</Link>
          <Link to="/case">Case Study</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <div id="home" style={{ marginTop: '90px' }}>
        <div className="slider">
          <div className="slides">
            <img src="/src/assets/Images/Service.jpg" alt="img1"/>
          </div>
        </div>

        {/* Services Section */}
        <div id="services">
          <section>
            <h2>Our Services</h2>
            <p>We offer a wide range of services including business consulting, technology solutions, digital transformation, and customer support tailored to your needs.</p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Corporate Inc. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Services;
