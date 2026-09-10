import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; 
import Case from './components/Case';
import Contact from './components/Contact';
import Industry from './components/Industry';
import Services from './components/Services';
import ScrollToTop from './components/ScrollToTop'; // 👈 १. इथे इम्पोर्ट करा

function App() {
  return (
    <Router> 
      <ScrollToTop /> {/* 👈 २. गिटहब राउटरच्या आत सर्वात वर हा टॅग जोडा */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/case" element={<Case />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
