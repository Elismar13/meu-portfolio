import React from 'react';
import { Project } from '../interface/projects';
import { FaMinus, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white dark:bg-gray-800 p-6 text-left rounded-2xl shadow-lg max-w-md w-full">
        <div className="absolute top-3 right-3 flex space-x-3">
          <button
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center bg-yellow-500 rounded-full hover:bg-yellow-600 focus:outline-none"
            aria-label="Minimizar"
          >
            <FaMinus className="text-white text-xs" />
          </button>
          <button
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"
            aria-label="Fechar"
          >
            <FaTimes className="text-white text-xs" />
          </button>
        </div>

        <h2 className="text-2xl text-center font-bold mb-8">{project.title}</h2>

        <ul className="mb-4">
          <li className="mb-2">
            <span className="text-base font-semibold">
              {t('projectModal.description')}
            </span>
            <span className="text-base mb-4">
              {language === 'pt' ?project.description : project.description_en}
            </span>
          </li>
          <li className="mb-2">
            <span className="text-base font-semibold">
              {t('projectModal.languages')}
            </span>
            {project.technologies.map((tech, index) => (
              (index === project.technologies.length - 1) ? (
                <span key={index} className="text-base mb-4">{tech}</span>
              ) : (
                <span key={index} className="text-base mb-4">{tech}; </span>
              )
            ))}
          </li>
          <li className="mb-2">
            <span className="text-base font-semibold">Github: </span>
            <a className="font-normal text-gray-700 dark:text-gray-100 hover:underline" href={project.github} target="_blank" rel="noopener noreferrer">
              {project.github}
            </a>
          </li>
          {project.deploy && (
            <li className="mb-2">
              <span className="text-base font-semibold">Deploy: </span>
              <a className="font-normal text-gray-700 dark:text-gray-100 hover:underline" href={project.deploy} rel="noopener noreferrer">
                {project.deploy}
              </a>
            </li>
          )}
        </ul>
        <img
          src={project.image}
          alt={project.title}
        />
      </div>
    </div>
  );
};

export default ProjectModal;
