import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function AnimatedButton({ text, onClick }) {
  const { theme } = useContext(ThemeContext);

  const buttonStyle = {
    backgroundColor: theme.primary,
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: `0 4px 15px ${theme.secondary}`,
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default AnimatedButton;
