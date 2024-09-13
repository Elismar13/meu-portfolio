import React from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 z-50 flex justify-between items-center w-full p-4 bg-black text-white">
      <nav className="flex space-x-4">
        <a href="#home" className="hover:text-blue-500">{t('header.home')}</a>
        <a href="#projects" className="hover:text-blue-500">{t('header.projects')}</a>
      </nav>

      <div className="flex items-center space-x-4">
        <a href="#resume" className="hover:text-blue-500">{t('header.resume')}</a>

        <div className="flex space-x-2">
          {i18n.language === 'pt' ? (
            <button onClick={() => changeLanguage('en')} className="hover:text-blue-500">
              English version
            </button>
          ) : (
            <button onClick={() => changeLanguage('pt')} className="hover:text-blue-500">
              Em Português
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
