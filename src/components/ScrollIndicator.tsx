import React from "react";
import { FiChevronDown } from "react-icons/fi";

const ScrollIndicator: React.FC = () => {
const handleClick = () => {
  const aboutSection = document.getElementById("about");
  const header = document.querySelector("header");

  if (aboutSection) {
    const sectionTop = aboutSection.getBoundingClientRect().top + window.scrollY;

    const headerHeight = header?.getBoundingClientRect().height || 0;

    window.scrollTo({
      top: sectionTop - headerHeight,
      behavior: "smooth",
    });
  }
};

  return (
    <button 
      title="scroll-down"
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce-smooth cursor-pointer"
      onClick={handleClick}
    >
      <FiChevronDown size={28} className="text-gray-500 dark:text-gray-300" />
    </button>
  );
};

export default ScrollIndicator;
