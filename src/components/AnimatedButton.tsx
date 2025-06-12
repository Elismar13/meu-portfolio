import React, { useContext } from 'react';
import { FiSend } from 'react-icons/fi';
import { COLORS } from '../constants/colors';
import ThemeContext from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const AnimatedButton: React.FC = () => {
  const { color } = useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };
  const { t } = useTranslation();
  
  return (
    <button
      className="relative flex items-center pl-5 justify-center rounded-full border border-gray-500 overflow-hidden group transition-all duration-500 ease-in-out"
      type="submit"
    >
      <span style={{ background: color }} className="absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out transform translate-x-full group-hover:translate-x-0"></span>
      <span className="relative z-10 text-gray-700 dark:text-gray-100 mr-6 transition-opacity duration-500 ease-in-out ">
        {t('contact.send')}
      </span>
      <div style={{ background: color }} className="relative rounded-full h-full p-4">
        <FiSend className="relative z-10 text-gray-200 text-xl transition-transform duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-0 group-hover:text-white" />
      </div>
    </button>
  );
};

export default AnimatedButton;
