import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VantaBackground from './components/VantaBackground';
import AnimatedButton from './components/AnimatedButton';
import ThemeSelector from './components/ThemeSelector';

import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <VantaBackground />
        <div className="content">
          <ThemeSelector />

          {/* Button Navigation */}
          <div className="button-group">
            <AnimatedButton text="Home" onClick={() => (window.location.href = "/")} />
            <AnimatedButton text="Education" onClick={() => (window.location.href = "/education")} />
            <AnimatedButton text="Skills" onClick={() => (window.location.href = "/skills")} />
            <AnimatedButton text="Projects" onClick={() => (window.location.href = "/projects")} />
            <AnimatedButton text="Experience" onClick={() => (window.location.href = "/Experience")} />
            <AnimatedButton text="Contact" onClick={() => (window.location.href = "/contact")} />
           
          </div>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Experience" element={<Experience />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
