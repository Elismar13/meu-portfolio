import React, { useEffect } from 'react';

const Header: React.FC = () => {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header className="fixed top-0 z-50 flex justify-between items-center w-full p-4 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <nav className="flex space-x-4">
        <a className="hover:text-blue-500 dark:hover:text-blue-300">Home</a>
        <a className="hover:text-blue-500 dark:hover:text-blue-300">Projects</a>
      </nav>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Toggle Dark Mode
        </button>
        <a className="hover:text-blue-500 dark:hover:text-blue-300">Access my resume</a>
      </div>
    </header>
  );
};

export default Header;
