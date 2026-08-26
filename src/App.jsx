import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
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
        <Route path="/services" element={<Services />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/case" element={<Case />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
