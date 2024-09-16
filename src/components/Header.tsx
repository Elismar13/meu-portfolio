import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <button
      onClick={() => changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')}
      className="font-medium hover:text-blue-500"
    >
      {i18n.language === 'pt' ? 'English version' : 'Em Português'}
    </button>
  );
};

const HamburgerMenu = ({  isOpen,  toggleMenu }: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div className="contents sm:hidden">
      <button onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  );
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState('#me');
  const { color } = useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };
  const { t } = useTranslation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);


  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = null;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleThreshold = 0.50;
  
      if (rect.bottom >= windowHeight * visibleThreshold && rect.top <= windowHeight * (1 - visibleThreshold)) {
        currentSection = section;
        break;
      }
    }

    if (currentSection && currentSection.id) {
      setIsActive(`#${currentSection.id}`);
    } else {
      setIsActive('');
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive]); 

  return (
    <header className="fixed top-0 z-50 flex justify-between items-center w-full p-4 bg-black text-white">
      <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />

      <nav className="hidden sm:flex space-x-4">
        <NavLinks activeSection={isActive} />
      </nav>

      <div className="flex items-center space-x-4">
        <a href="#resume" className="text-white hover:text-blue-500">
          {t("header.resume")}
        </a>
        <LanguageToggle />
      </div>

      {menuOpen && (
        <div
          className={`absolute top-14 left-0 w-full bg-black p-4 sm:hidden 
              transition-all duration-700 ease-in-out
              ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
        >
          <NavLinks activeSection={isActive} closeMenu={toggleMenu} />
        </div>
      )}

    </header>
  );
};

export default Header;
