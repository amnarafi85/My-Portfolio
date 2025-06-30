import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import themes from '../themes';

const ThemeSelector = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div style={styles.selectorContainer}>
      {Object.entries(themes).map(([key, value]) => (
        <div
          key={key}
          style={{
            ...styles.colorCircle,
            backgroundColor: value.primary,
          }}
          onClick={() => setTheme(value)}
          title={key}
        />
      ))}
    </div>
  );
};

const styles = {
  selectorContainer: {
    position: 'fixed',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: 100,
  },
  colorCircle: {
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    cursor: 'pointer',
    border: '2px solid white',
    boxShadow: '0 0 6px rgba(255, 255, 255, 0.5)',
  },
};

export default ThemeSelector;
