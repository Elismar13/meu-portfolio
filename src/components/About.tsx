import React, { useContext } from 'react';
import { FaDatabase, FaJava } from 'react-icons/fa';
import { SiGithub, SiLinkedin, SiReact, SiNodedotjs, SiMongodb, SiPostgresql } from 'react-icons/si';
import { SiJavascript, SiPython, SiTypescript, SiExpress, SiSpring, SiFlask, SiQuarkus, SiHtml5, SiCss3, SiAngular } from 'react-icons/si';
import SkillCard from './SkillCard';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { color } = useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };
  const { t } = useTranslation();
  const description: string[] = t("about.description").split("\n");

  return (
    <section id="about" className="w-full flex text-white py-8 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8">
          {t('about.title')}
          <span style={{ color }}>{t('about.title2')}</span>
        </h2>
        {description.map((paragraph, index) =>
          <p key={index} className="text-lg text-justify">
            {paragraph}
          </p>
        )}

        <h3 className="mt-6 text-2xl font-semibold text-center mb-4">{t('about.skillsTitle')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <SkillCard title="Frontend">
            <SiJavascript size={32} color={color} title='JavaScript' aria-label='JavaScript' />
            <SiReact size={32} color={color} title='React' aria-label='React' />
            <SiAngular size={32} color={color} title='Angular' aria-label='Angular' />
            <SiTypescript size={32} color={color} title='TypeScript' aria-label='TypeScript' />
            <SiHtml5 size={32} color={color} title='HTML5' aria-label='HTML5' />
            <SiCss3 size={32} color={color} title='CSS3' aria-label='CSS3' />
          </SkillCard>
          <SkillCard title="Backend">
            <FaJava size={32} color={color} title='Java' aria-label='Java' />
            <SiNodedotjs size={32} color={color} title='Node.js' aria-label='Node.js' />
            <SiPython size={32} color={color} title='Python' aria-label='Python' />
            <SiSpring size={32} color={color} title='Spring' aria-label='Spring' />
            <SiQuarkus size={32} color={color} title='Quarkus' aria-label='Quarkus' />
            <SiExpress size={32} color={color} title='Express' aria-label='Express' />
            <SiFlask size={32} color={color} title='Flask' aria-label='Flask' />
          </SkillCard>
          <SkillCard title="Databases">
            <SiPostgresql size={32} color={color} title='PostgreSQL' aria-label='PostgreSQL' />
            <SiMongodb size={32} color={color} title='MongoDB' aria-label='MongoDB' />
            <FaDatabase size={32} color={color} title='Database' aria-label='Database' />
          </SkillCard>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-4">{t('about.experienceTitle')}</h3>
        <p className="text-lg mb-8">
          {t('about.experienceDescription')}
        </p>

        <h3 className="text-2xl font-semibold text-center mb-4">{t('about.projectsTitle')}</h3>
        <p className="text-lg">
          {t('about.projectsDescription')}
        </p>
        <div className="flex justify-center mt-6 space-x-6">
          <a href="#github" className="text-gray-700 dark:text-gray-100 hover:text-blue-500" aria-label="GitHub">
            <SiGithub size={32} color={ color } />
          </a>
          <a href="#linkedin" className="text-gray-700 dark:text-gray-100 hover:text-blue-500" aria-label="LinkedIn">
            <SiLinkedin size={32} color={ color } />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
