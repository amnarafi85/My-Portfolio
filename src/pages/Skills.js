import React from 'react';
import { FaCode, FaDatabase, FaTools, FaRobot, FaGlobe } from 'react-icons/fa';

const skills = {
  "Programming Languages": {
    icon: <FaCode size={28} style={{ marginRight: '10px', color: '#61dafb' }} />,
    items: ["Python", "C/C++", "JavaScript", "SQL"],
  },
  "Web Development": {
    icon: <FaGlobe size={28} style={{ marginRight: '10px', color: '#00dfc4' }} />,
    items: ["Django", "HTML", "CSS", "React Native", "Expo"],
  },
  "AI/ML": {
    icon: <FaRobot size={28} style={{ marginRight: '10px', color: '#fca311' }} />,
    items: ["Deep Learning", "NLP", "Fine-Tuning", "RAG", "LLMs", "Model Training", "Chatbot"],
  },
  "Databases": {
    icon: <FaDatabase size={28} style={{ marginRight: '10px', color: '#ef476f' }} />,
    items: ["SQLite", "Vector Databases", "Web Scraping"],
  },
  "Tools & Frameworks": {
    icon: <FaTools size={28} style={{ marginRight: '10px', color: '#ffd166' }} />,
    items: ["HuggingFace", "LangChain", "AWS (Lex, Polly, Lambda)", "REST APIs", "Git"],
  },
};

const containerStyle = {
  padding: '50px 20px',
  minHeight: '100vh',
  maxWidth: '1300px',
  margin: 'auto',
  fontFamily: 'Poppins, sans-serif',
  color: 'white',
};

const titleStyle = {
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '40px',
  fontWeight: '700',
};

const spanStyle = {
  color: '#4da6ff',
  borderBottom: '2px solid #4da6ff',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '30px',
};

const cardStyle = {
  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.2))',
  borderRadius: '16px',
  padding: '25px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transform: 'translateY(0)',
};

const cardHoverStyle = {
  transform: 'translateY(-8px)',
  boxShadow: '0 12px 25px rgba(0, 0, 0, 0.4)',
};

const categoryStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.3rem',
  marginBottom: '15px',
  color: '#9bd1ff',
  fontWeight: 'bold',
};

const listItemStyle = {
  marginBottom: '10px',
  fontSize: '1rem',
  transition: 'transform 0.3s ease',
  paddingLeft: '5px',
  cursor: 'default',
};

const Skills = () => {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>
        My <span style={spanStyle}>Skills</span>
      </h2>
      <div style={gridStyle}>
        {Object.entries(skills).map(([category, { icon, items }], index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHoverStyle.transform;
              e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = cardStyle.boxShadow;
            }}
          >
            <h3 style={categoryStyle}>
              {icon} {category}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {items.map((skill, i) => (
                <li
                  key={i}
                  style={listItemStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(8px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
