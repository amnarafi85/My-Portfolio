import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
      <Main />
    </Router>
  );
}

function Main() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <VantaBackground />
      <div className="content">
        <ThemeSelector />

        {/* Button Navigation */}
        <div className="button-group">
          <AnimatedButton text="Home" onClick={() => navigate("/")} />
          <AnimatedButton text="Education" onClick={() => navigate("/education")} />
          <AnimatedButton text="Skills" onClick={() => navigate("/skills")} />
          <AnimatedButton text="Projects" onClick={() => navigate("/projects")} />
          <AnimatedButton text="Experience" onClick={() => navigate("/experience")} />
          <AnimatedButton text="Contact" onClick={() => navigate("/contact")} />
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
