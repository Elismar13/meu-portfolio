import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';
import { useTranslation } from 'react-i18next';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import ScrollIndicator from './ScrollIndicator';

const Me: React.FC = () => {
  const { color } = useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };
  const { t } = useTranslation();

  return (
    <section id="me" className="w-screen">

      <div className="flex flex-col h-screen p-8 text-center items-center justify-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold relative w-[max-content]
          before:absolute before:inset-0 before:animate-typewriter
          before:bg-white
          dark:before:bg-gray-950
          after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
          after:bg-gray-950
          dark:after:bg-white"
          style={{ color }}
        >
          Elismar Silva
        </h1>
        <p className="mt-2 mb-4">
          {t('me.description')}
        </p>
        <div className="flex mt-4">
          <a href="https://www.linkedin.com/in/elismarsilva/" target='_blank' rel="noopener noreferrer" className="mx-2">
            <FaLinkedin size={32} color={color} />
          </a>
          <a href="https://github.com/Elismar13" target='_blank' rel="noopener noreferrer" className="mx-2">
            <FaGithub size={32} color={color} />
          </a>
          <a href="#discord" className="mx-2">
            <FaDiscord size={32} color={color} />
          </a>
        </div>
      </div>

      <ScrollIndicator />
    </section>

  );
};

export default Me;
