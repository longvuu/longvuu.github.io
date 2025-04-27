import React, { createContext, useContext, useEffect } from 'react';

type ThemeContextType = {
  darkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always use dark mode, no toggle functionality
  const darkMode = true;

  useEffect(() => {
    // Apply dark theme class to body and remove any light-mode class
    document.body.classList.remove('light-mode');
    
    // Save dark theme preference
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};