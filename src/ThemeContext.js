import React, { createContext, useState } from 'react';
import themes from './themes';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.lightBlue);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ color: theme.text }}>{children}</div>
    </ThemeContext.Provider>
  );
}
