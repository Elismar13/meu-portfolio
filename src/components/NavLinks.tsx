import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';

const NavLinks = ({ closeMenu }: { closeMenu?: () => void }) => {
  const { t } = useTranslation();
  const { color } = useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };

  const links = [
    { id: 'home', label: t('header.home') },
    { id: 'projects', label: t('header.projects') },
    { id: 'contact', label: t('header.contact') },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="block sm:inline text-white hover:text-blue-500"
          style={window.location.hash === `#${link.id}` ? { color } : {}}
          onClick={closeMenu}
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;