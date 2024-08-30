import React, { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className="absolute left-0 top-24 shadow-sm">
      <button
        className="fixed p-4 bg-gray-600 text-white border rounded-l-none focus:outline-none"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <FiSun
            className={`transition-colors duration-300 text-yellow-500`}
            size={24}
          />
        ) : (
          <FiMoon
            className={`transition-colors duration-300 text-blue-400`}
            size={24}
          />
        )}
      </button>
    </div>

  );
};

export default DarkModeToggle;
