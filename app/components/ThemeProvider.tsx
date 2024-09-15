import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  primaryColor: string;
  secondaryColor: string;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState('#000000');
  const [secondaryColor, setSecondaryColor] = useState('#ffffff');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const { primaryColor: savedPrimary, secondaryColor: savedSecondary } = JSON.parse(savedTheme);
      setPrimaryColor(savedPrimary);
      setSecondaryColor(savedSecondary);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify({ primaryColor, secondaryColor }));
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
  }, [primaryColor, secondaryColor]);

  return (
    <ThemeContext.Provider value={{ primaryColor, secondaryColor, setPrimaryColor, setSecondaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
