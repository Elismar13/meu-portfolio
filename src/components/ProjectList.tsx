import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../interface/myProjects';
import ProjectModal from './ProjectModal';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useTranslation();

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center content-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded shadow-md w-full max-w-md mx-auto"
          >
            <div className="relative w-full">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md group-hover:opacity-75 transition duration-300"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <button onClick={() => openModal(project)} className="text-blue-500 hover:underline">
                  {t('projects.viewProject')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};

export default ProjectList;
