import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectList from './ProjectList';
import { COLORS } from '../constants/colors';
import ThemeContext from '../context/ThemeContext';
import { fetchMyProjects } from '../services/cmsService';
import { Project } from '../interface/projects';

const MyProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { color } = useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetchMyProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center text-white p-8">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl font-bold mb-4">{t('projects.title')} 
          <span style={{ color }}>{t('projects.title2')}</span>
        </h2>
        <p className="mb-8">
          {t('projects.description')}
        </p>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};

export default MyProjects;
