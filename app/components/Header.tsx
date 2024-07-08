import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 flex justify-between items-center w-full p-4 bg-black text-white">
      <nav className="flex space-x-4">
        <Link href="#home" legacyBehavior>
          <a className="hover:text-blue-500">Home</a>
        </Link>
        <Link href="#projects" legacyBehavior>
          <a className="hover:text-blue-500">Projects</a>
        </Link>
      </nav>
      <div>
        <Link href="#resume" legacyBehavior>
          <a className="hover:text-blue-500">Access my resume</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
