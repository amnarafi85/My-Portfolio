import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const containerStyle = {
    textAlign: 'center',
    paddingTop: '70px',
    paddingBottom: '70px',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '30px',
    color: '#a0d2eb',
  };

  const infoStyle = {
    fontSize: '1.1rem',
    margin: '10px 0',
  };

  const iconContainerStyle = {
    marginTop: '25px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };

  const iconStyle = {
    color: '#ffffff',
    fontSize: '2rem',
    transition: 'transform 0.3s ease, color 0.3s ease',
  };

  const handleHover = (e, hoverColor) => {
    e.target.style.color = hoverColor;
    e.target.style.transform = 'scale(1.3)';
  };

  const handleLeave = (e) => {
    e.target.style.color = '#ffffff';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Contact Me</h2>
      <p style={infoStyle}>📧 Email: <span style={{ color: '#ccc' }}>amnarafi06@gmail.com</span></p>


      <div style={iconContainerStyle}>
        <a
          href="https://github.com/amnarafi85"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            style={iconStyle}
            onMouseEnter={(e) => handleHover(e, '#6e5494')}
            onMouseLeave={handleLeave}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/amna-rafi-3783a5368/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            style={iconStyle}
            onMouseEnter={(e) => handleHover(e, '#0e76a8')}
            onMouseLeave={handleLeave}
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
