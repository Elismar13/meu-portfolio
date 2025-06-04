import React from 'react';
import { useTranslation } from 'react-i18next';

const Divider: React.FC = () => {
  return (
    <>
      <hr className="w-1/3 max-w-sm mx-auto border-t border-gray-400" />
    </>
  );
};

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="block justify-center py-8">
      <Divider />
      <div className="pt-8 text-center">
        <p>{t('footer.description')}</p>
      </div>
    </footer>
  );
};

export default Footer;
