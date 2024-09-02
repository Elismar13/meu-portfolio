import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaTimes, FaPalette } from 'react-icons/fa';

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string>('blue'); // Cor padrão

  const applyColor = (color: string) => {
    document.documentElement.style.setProperty('--highlight-color', color);
    setSelectedColor(color);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className={`fixed left-0 top-24 shadow-lg w-44 max-w-44 bg-gray-100 dark:bg-gray-800 p-4 transition-transform transform ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold mb-2">Dark Mode</h3>
          <div className="absolute top-3 right-3 flex space-x-2">
            <button
              onClick={handleClose}
              className="w-5 h-5 flex items-center justify-center bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"
              aria-label="Fechar"
            >
              <FaTimes className="text-white text-xs" />
            </button>
          </div>
        </div>
        <button onClick={toggleTheme} className="mb-4 flex items-center">
          {theme === 'light' ? (
            <>
              <FiMoon className="text-blue-400 mr-2" size={20} />
              <span className="mr-2">/</span>
              <FiSun className="text-yellow-500" size={20} />
            </>
          ) : (
            <>
              <FiSun className="text-yellow-500 mr-2" size={20} />
              <span className="mr-2">/</span>
              <FiMoon className="text-blue-400" size={20} />
            </>
          )}
        </button>
        <h4 className="font-bold mb-2">Style Switcher</h4>
        <div className="grid grid-cols-4 gap-1">
          {Object.keys(COLORS).map((key) => (
            <button
              key={key}
              onClick={() => applyColor(COLORS[key as keyof typeof COLORS])}
              className="flex items-center justify-center w-8 h-8 rounded-full"
              style={{ borderColor: key === selectedColor ? 'black' : 'transparent', borderWidth: '2px' }}
            >
              <FaPalette size={20} color={COLORS[key as keyof typeof COLORS]} />
            </button>
          ))}
        </div>
      </div>
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed left-0 top-24 p-2 bg-gray-800 text-white rounded-r-lg"
        >
          Configurações
        </button>
      )}
    </>
  );
};

export default DarkModeToggle;
