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
      const prefersDark = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

      const systemTheme = prefersDark ? 'dark' : 'light';
      setTheme(systemTheme);
      document.documentElement.classList.add(systemTheme);
    }

    const savedColor = localStorage.getItem('color');
    if (savedColor) {
      setColor(savedColor);
      document.documentElement.style.setProperty('--highlight-color', savedColor);
    } else {
      document.documentElement.style.setProperty('--highlight-color', '#3490dc');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const changeColor = (newColor: string) => {
    setColor(newColor);
    document.documentElement.style.setProperty('--highlight-color', newColor);
    localStorage.setItem('color', newColor);
  };

  return (
    <ThemeContext.Provider value={{ theme, color, toggleTheme, setColor: changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
