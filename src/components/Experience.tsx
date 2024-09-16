import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ExperienceComponent from './ExperienceItem';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';
import { experiences } from '../../data/experience';

const Experience: React.FC = () => {
  const { color } = useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };
  const { t } = useTranslation();

  return (
    <section id="experience" className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          {t('experience.title')}
          <span style={{ color }}>{t('experience.title2')}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            {experiences.filter((exp) => exp.type === 'work').map((exp, index) => (
              <ExperienceComponent index={index} exp={exp} />
            ))}
          </div>
          <div>
            {experiences.filter((exp) => exp.type === 'education').map((exp, index) => (
              <ExperienceComponent index={index} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
