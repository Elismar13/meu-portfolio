import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';
import { ExperienceItem } from '../data/experience';

interface ExperienceComponentProps {
  index: number;
  exp: ExperienceItem;
}

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({ index, exp }) => {
  const { color } = useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };
  const { i18n } = useTranslation();
  const { language } = i18n;

  return (
    <div key={index} className="relative flex space-x-4 mt-8">
      <div className="flex flex-col items-center">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{ backgroundColor: color }}
        >
          {exp.type === 'work' ? (
            <FaBriefcase size={20} className="text-gray-100" />
          ) : (
            <FaGraduationCap size={24} className="text-gray-100" />
          )}
        </div>
        <div className="flex-grow w-0.5 bg-gray-300"></div>
      </div>

      <div>
        <h3 className="text-xl font-semibold">{language === 'pt' ? exp.title : exp.title_en}</h3>
        <p className="text-gray-400">{exp.range} - {exp.institution}</p>
        <p className="mt-1">{language === 'pt' ? exp.description : exp.description_en}</p>
      </div>
    </div>

  );
};

export default ExperienceComponent;