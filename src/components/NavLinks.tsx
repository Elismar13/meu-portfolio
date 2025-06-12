import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';

const NavLinks = ({
  activeSection,
  closeMenu,
}: {
  activeSection?: string;
  closeMenu?: () => void;
}) => {
  const { t } = useTranslation();
  const { color } = useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };

  const links = [
    { id: 'about', label: t('header.home') },
    { id: 'projects', label: t('header.projects') },
    { id: 'experience', label: t('header.education') },
    { id: 'contact', label: t('header.contact') },
  ];

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    const header = document.getElementsByTagName('header')[0];
    if (section) {
      const headerOffset = header ? header.offsetHeight : 50;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    closeMenu?.();
  };

  return (
    <>
      {links.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="block sm:inline cursor-pointer text-white hover:text-blue-500"
          style={activeSection === `#${id}` ? { color } : {}}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(`#${id}`);
          }}
        >
          {label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
