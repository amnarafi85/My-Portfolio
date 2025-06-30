import React, { useEffect, useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Amna Rafi";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index]);

  const containerStyle = {
    textAlign: 'center',
    padding: '80px 10%',
    minHeight: '90vh',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    animation: 'fadeIn 1.5s ease-in-out',
  };

  const headingStyle = {
    fontSize: '3.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#4da6ff',
    textShadow: '0 0 12px rgba(77,166,255,0.8)',
    animation: 'pulseGlow 2s infinite',
  };

  const subheadingStyle = {
    fontSize: '1.3rem',
    fontWeight: 400,
    marginBottom: '2rem',
    color: '#cccccc',
    letterSpacing: '1px',
    animation: 'fadeIn 2s ease-in-out 1s both',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    textAlign: 'justify',
    color: '#dddddd',
    animation: 'fadeIn 2s ease-in-out 2s both',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>{text}<span className="cursor">|</span></h1>

      <h3 style={subheadingStyle}>
        AI Engineer | AI Researcher | Full-Stack Developer
      </h3>

      <p style={paragraphStyle}>
        I’m AI/ML developer passionate about Generative AI and Large Language Models (LLMs).
        With a strong foundation in fine-tuning models and full-stack development, I build intelligent solutions like custom chatbots,
        Django applications, and educational tools. Projects like my <strong>Teacher Recommendation System</strong> demonstrate my
        commitment to data-driven innovation that solves real-world problems.
      </p>

      {/* Embedded CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseGlow {
          0% { text-shadow: 0 0 12px #4da6ff; }
          50% { text-shadow: 0 0 24px #4da6ff; }
          100% { text-shadow: 0 0 12px #4da6ff; }
        }

        .cursor {
          display: inline-block;
          width: 1px;
          background-color: white;
          animation: blink 1s step-start infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @media (max-width: 768px) {
          h1 { font-size: 2rem; }
          h3 { font-size: 1.1rem; }
          p { font-size: 0.95rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
