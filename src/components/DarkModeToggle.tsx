import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';
import { FiSun, FiMoon, FiSettings } from 'react-icons/fi';
import { FaTimes, FaPalette } from 'react-icons/fa';

const DarkModeToggle: React.FC = () => {
  const { theme, color, toggleTheme, setColor } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string>(color);

  const applyColor = (color: string) => {
    setColor(color);
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
      <div className={`fixed left-0 top-24 shadow-lg w-44 max-w-44 bg-gray-300 dark:bg-gray-800 p-4 transition-transform transform rounded-r-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-2">
          <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Dark Mode</h3>
          <div className="absolute top-3 right-3 flex space-x-2">
            <button
              onClick={handleClose}
              className="w-6 h-6 flex items-center justify-center bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"
              aria-label="Fechar"
            >
              <FaTimes className="text-white text-xs" size={14} />
            </button>
          </div>
        </div>
        <button onClick={toggleTheme} className="mb-4 flex items-center">
          {theme === 'dark' ? (
            <>
              <FiMoon className="text-blue-400 mr-2" size={24} />
              <span className="mr-2">/</span>
              <FiSun size={24} />
            </>
          ) : (
            <>
              <FiSun className="text-yellow-600 mr-2" size={24} />
              <span className="mr-2">/</span>
              <FiMoon className="text-gray-700" size={24} />
            </>
          )}
        </button>
        <h4 className={`font-bold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Style Switcher</h4>
        <div className="grid grid-cols-4 gap-1">
          {Object.keys(COLORS).map((key) => (
            <button
              key={key}
              onClick={() => applyColor(COLORS[key as keyof typeof COLORS])}
              className="flex items-center justify-center w-8 h-8 rounded-full"
              style={{ borderColor: key === selectedColor ? 'black' : 'transparent', borderWidth: '2px' }}
            >
              <FaPalette size={24} color={COLORS[key as keyof typeof COLORS]} />
            </button>
          ))}
        </div>
      </div>
      {!isOpen && (
        <button
          onClick={handleOpen}
          className={`fixed left-0 top-24 p-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'} text-white rounded-r-lg`}
        >
          <FiSettings size={24} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
        </button>
      )}
    </>
  );
};

export default DarkModeToggle;
