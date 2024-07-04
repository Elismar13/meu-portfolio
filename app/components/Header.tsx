import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="header flex flex-col h-screen w-screen bg-gray-800 text-white py-8 text-center items-center justify-center">
      <h1 className="text-6xl font-bold">Elismar Silva</h1>
      <p className="mt-2 mb-4">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
      <div className="flex mt-4">
        <a href="#linkedin" className="text-white hover:text-blue-500 mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 12H6a2 2 0 0 0-2 2v7h8v-7a2 2 0 0 0-2-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m16-11V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4" />
          </svg>
        </a>
        <a href="#discord" className="text-white hover:text-blue-500 mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 2H9C5.686 2 3 4.686 3 8v8c0 3.314 2.686 6 6 6h4c3.314 0 6-2.686 6-6V8c0-3.314-2.686-6-6-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12h2m4 0h2m-2-3v6" />
          </svg>
        </a>
        <a href="#etc" className="text-white hover:text-blue-500 mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Header;
