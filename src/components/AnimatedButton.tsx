import React from 'react';
import { FiSend } from 'react-icons/fi';

const AnimatedButton: React.FC = () => {
  return (
    <button
      className="relative flex items-center pl-5 justify-center rounded-full border border-gray-500 overflow-hidden group transition-all duration-500 ease-in-out"
      type="submit"
    >
      <span className="absolute inset-0 w-full h-full bg-blue-500 transition-transform duration-500 ease-in-out transform translate-x-full group-hover:translate-x-0"></span>
      <span className="relative z-10 text-gray-300 mr-6 transition-opacity duration-500 ease-in-out ">
        Send
      </span>
      <div className="relative rounded-full h-full p-4 bg-blue-500">
        <FiSend className="relative z-10 text-gray-200 text-xl transition-transform duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-0 group-hover:text-white" />
      </div>
    </button>
  );
};

export default AnimatedButton;
