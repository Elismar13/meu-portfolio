import React, { useState, useEffect } from 'react';
import { FiMoon, FiSun, FiSettings, FiX } from 'react-icons/fi';

const SettingsPanel: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark', !darkMode);
    localStorage.theme = !darkMode ? 'dark' : 'light';
  };

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed left-0 top-24 z-50">
      <button
        className="p-4 bg-gray-600 text-white border rounded-r-none focus:outline-none"
        onClick={togglePanel}
      >
        <FiSettings size={24} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={togglePanel}
        ></div>
      )}

      <div
        className={`fixed top-24 left-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '250px' }}
      >
        <div className="p-4">
          <button
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300"
            onClick={togglePanel}
          >
            <FiX size={24} />
          </button>

          <h2 className="text-xl font-bold mb-4">Configurações</h2>

          <button
            className="flex items-center space-x-2 mb-4"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <FiSun className="text-yellow-500" size={24} />
            ) : (
              <FiMoon className="text-blue-400" size={24} />
            )}
            <span>{darkMode ? 'Modo Claro' : 'Modo Escuro'}</span>
          </button>

          <div>
            <p>Configurações adicionais podem ser adicionadas aqui.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
