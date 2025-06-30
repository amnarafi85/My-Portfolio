import React, { useEffect, useRef, useState } from 'react';
import { FaUniversity } from 'react-icons/fa';

const Education = () => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        <span style={styles.accent}>Education</span>
      </h2>

      <div
        ref={cardRef}
        style={{
          ...styles.card,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(50px)',
        }}
      >
        <FaUniversity style={styles.icon} />
        <h3 style={styles.degree}>Bachelor’s in Information Technology</h3>
        <p style={styles.school}>University of Management and Technology – UMT, Lahore</p>
        <p style={styles.duration}>March 2023 – March 2027</p>
      </div>

      <style>{`
        @keyframes glow {
          0% { box-shadow: 0 0 8px rgba(77, 166, 255, 0.4); }
          50% { box-shadow: 0 0 18px rgba(77, 166, 255, 0.8); }
          100% { box-shadow: 0 0 8px rgba(77, 166, 255, 0.4); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px 20px',
    minHeight: '80vh',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.7rem',
    marginBottom: '50px',
  },
  accent: {
    borderBottom: '4px solid #4da6ff',
    paddingBottom: '5px',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '30px',
    maxWidth: '600px',
    margin: 'auto',
    transition: 'all 0.8s ease',
    animation: 'glow 3s infinite ease-in-out',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '15px',
    color: '#4da6ff',
    animation: 'glow 2s infinite ease-in-out',
  },
  degree: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#4da6ff',
  },
  school: {
    fontSize: '1.1rem',
    marginBottom: '5px',
  },
  duration: {
    fontSize: '1rem',
    opacity: 0.8,
  },
};

export default Education;
