import React, { useEffect, useRef, useState } from 'react';

const projectsData = [
  {
    title: "BioBot – Roman Urdu Biology Chatbot",
    tech: "GPT-2 | HuggingFace | PyTorch",
    description:
      "Fine-tuned GPT-2 on Roman Urdu biology dataset to answer questions in easy, local language.",
  },
  {
    title: "NikiBot – Nike Product Chatbot",
    tech: "OpenAI | LangChain | RAG | FAISS",
    description:
      "Chatbot offering Nike product suggestions using OpenAI, vector DBs and RAG architecture.",
  },
  {
    title: "Voice FAQ Bot for Ownova",
    tech: "AWS Connect | Lex | Polly | Transcribe | Lambda",
    description:
      "Voice-driven bot to answer user queries about Ownova using speech recognition and AI.",
  },
  {
    title: "Teacher Recommendation System",
    tech: "Django | Web Scraping | REST API",
    description:
      "System to recommend teachers at UMT based on reviews, ratings, and bot-based query handling.",
  },
  {
    title: "DSA Visualizer App",
    tech: "React Native | Animation",
    description:
      "Mobile app to visually demonstrate how data structures like Stack, Queue, and Heap work.",
  },
  {
    title: "Divert Thinking App",
    tech: "React Native | Expo | Mental Wellness",
    description:
      "Fun interactive app that diverts negative thoughts using random activities like games and facts.",
  },
];

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => ref.current && obs.unobserve(ref.current);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}><span style={styles.accent}>My Projects</span></h2>

      <div
        ref={ref}
        style={{
          ...styles.grid,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {projectsData.map((project, i) => (
          <div key={i} style={styles.card} className="project-card">
            <div style={styles.topBar}></div>
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.tech}>{project.tech}</p>
            <p style={styles.desc}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '60px 20px',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.6rem',
    textAlign: 'center',
    marginBottom: '40px',
  },
  accent: {
    borderBottom: '3px solid #4da6ff',
    paddingBottom: '5px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
    gap: '30px',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 0 8px rgba(0,0,0,0.2)',
    transition: '0.4s ease',
    transform: 'translateY(0px)',
    overflow: 'hidden',
  },
  topBar: {
    height: '6px',
    width: '100%',
    background: 'linear-gradient(90deg, #4da6ff, #9f6eff)',
    marginBottom: '15px',
    borderRadius: '10px',
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '8px',
    color: '#4da6ff',
  },
  tech: {
    fontSize: '0.9rem',
    fontStyle: 'italic',
    color: '#aaa',
    marginBottom: '10px',
  },
  desc: {
    fontSize: '1rem',
    color: '#ddd',
  },
};

export default Projects;
