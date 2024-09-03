import React, { createContext, useState, useEffect } from 'react';

export interface ThemeContextProps {
  theme: string;
  color: string;
  toggleTheme: () => void;
  setColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');
  const [color, setColor] = useState<string>('#3490dc');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      const defaultTheme = 'light';
      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const changeColor = (newColor: string) => {
    setColor(newColor);
    document.documentElement.style.setProperty('--highlight-color', newColor);
  };

  return (
    <ThemeContext.Provider value={{ theme, color, toggleTheme, setColor: changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
