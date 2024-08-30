import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 flex justify-between items-center w-full p-4 bg-black text-white">
      <nav className="flex space-x-4">
        <a className="hover:text-blue-500">Home</a>
        <a className="hover:text-blue-500">Projects</a>
      </nav>
      <div className="flex items-center space-x-4">
        <a className="hover:text-blue-500">Access my resume</a>
      </div>
    </header>
  );
};

export default Header;
