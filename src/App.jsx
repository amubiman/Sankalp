import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; // 👈 नवीन About कॉम्पोनंट इथे इम्पोर्ट केला
import Case from './components/Case';
import Contact from './components/Contact';
import Industry from './components/Industry';
import Services from './components/Services';

function App() {
  return (
    // 👈 इथे basename="/Sankalp" जोडले आहे
    <Router basename="/Sankalp"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* 👈 नवीन About Us चा रूट इथे जोडला आहे */}
        <Route path="/services" element={<Services />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/case" element={<Case />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
