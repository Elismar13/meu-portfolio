import React from 'react';

interface SkillCardProps {
  title: string;
  children: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl">
      <h4 className="font-semibold mb-4">{title}</h4>
      <div className="flex space-x-4 text-gray-700 dark:text-gray-100">{children}</div>
    </div>
  );
};

export default SkillCard;
