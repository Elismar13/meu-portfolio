import React from "react";
import { FiChevronDown } from "react-icons/fi";

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce-smooth cursor-pointer">
      <FiChevronDown size={28} className="text-gray-500 dark:text-gray-300" />
    </div>
  );
};

export default ScrollIndicator;
