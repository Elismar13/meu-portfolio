import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ExperienceComponent from './ExperienceItem';
import { COLORS } from '../constants/colors';
import { fetchExperience } from '../services/cmsService';
import { ExperienceItem } from '../interface/experience';

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchExperiences = async () => {
      const data = await fetchExperience();
      setExperiences(data);
    };
    fetchExperiences();
  }, []);

  return (
    <section id="experience" className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          {t('experience.title')}
          <span style={{ color: COLORS.CUSTOM_BLUE }}>{t('experience.title2')}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            {experiences.filter((exp) => exp.type === 'work').map((exp, index) => (
              <ExperienceComponent key={index} index={index} exp={exp} />
            ))}
          </div>
          <div>
            {experiences.filter((exp) => exp.type === 'education').map((exp, index) => (
              <ExperienceComponent key={index} index={index} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;