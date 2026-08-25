import React from 'react';
import { Link } from 'react-router-dom';

function Industry() {
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
            <img src="/src/assets/Images/Industry.jpg" alt="img1"/>
          </div>
        </div>

        <section>
          <h2>Home</h2>
          <p>We are a leading corporate solutions provider, dedicated to helping businesses achieve sustainable growth through innovation, strategy, and excellence.</p>
          
          <section className="two-columns">
            <div className="column">
              <h2>Our Vision</h2>
              <p>
                To create simple, responsive, and elegant websites that empower businesses
                and individuals to share their ideas with the world.
              </p>
            </div>
            <div className="column">
              <h2>Our Approach</h2>
              <p>
                We focus on clarity, usability, and performance. Every project is built
                with attention to detail and a user‑first mindset.
              </p>
            </div>
          </section>
        </section>

        <section>
          <h2>Our Vision</h2>
          <p>Our vision is to empower organizations worldwide with cutting-edge solutions that drive success, foster collaboration, and create lasting impact.</p>
        </section>
      </div>

      {/* Services Section */}
      <div id="services">
        <section>
          <h2>Our Services</h2>
          <p>We offer a wide range of services including business consulting, technology solutions, digital transformation, and customer support tailored to your needs.</p>
        </section>
      </div>

      {/* Contact Us Section */}
      <div id="contact">
        <section>
          <h2>Contact Us</h2>
          <p>Email: info@corporate.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Corporate Tower, Ahilyanagar, MH, India</p>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Corporate Inc. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Industry;
