import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';
import { experiences } from '../../data/experience';

const Experience: React.FC = () => {
  const { color } = useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };
  const { i18n, t } = useTranslation();

  return (
    <section id="experience" className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t('experience.title')}
          <span style={{ color }}>{t('experience.title2')}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 auto-cols-auto sm:grid-flow-col-dense">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`self-start relative flex space-x-4 ${exp.type === 'work' ? 'sm:col-start-1' : 'sm:col-start-2'}`}
            >
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full"
                  style={{ backgroundColor: color }}
                >
                  {exp.type === 'work' ? (
                    <FaBriefcase size={20} className="text-white" />
                  ) : (
                    <FaGraduationCap size={24} className="text-white" />
                  )}
                </div>
                <div className="flex-grow w-0.5 bg-gray-300"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {i18n.language === 'pt' ? exp.title : exp.title_en}
                </h3>
                <p className="text-gray-400 dark:text-gray-300">
                  {exp.range} - {exp.institution}
                </p>
                <p className="mt-1 whitespace-pre-line">
                  {i18n.language === 'pt' ? exp.description : exp.description_en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
