import React, { createContext, useState, useContext } from 'react';
import { themes } from '../themes';

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('grass');
  return (
    <ThemeContext.Provider value={{
        theme: themes[themeName],
        themeName,
        setThemeName
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);