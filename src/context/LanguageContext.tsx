import React, { createContext, useState } from 'react';

export const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {}
});

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
