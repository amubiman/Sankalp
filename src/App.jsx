import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; 
import Case from './components/Case';
import Contact from './components/Contact';
import Industry from './components/Industry';
import Services from './components/Services';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router> 
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/case" element={<Case />} />
        <Route path="/contact" element={<Contact />} />
        {/* चुकून चुकीचा पाथ टाईप झाल्यास होम पेजवर रिडायरेक्ट करण्यासाठी (पर्यायी) */}
        <Route path="*" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
