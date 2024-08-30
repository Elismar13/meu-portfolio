// ProjectModal.tsx
import React from 'react';
import { Project } from '../../data/myProjects';
import { FaMinus, FaTimes } from 'react-icons/fa';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white dark:bg-gray-800 p-6 text-left rounded shadow-lg max-w-md w-full">
        <div className="absolute top-3 right-3 flex space-x-2">
          <button
            onClick={onClose}
            className="w-5 h-5 flex items-center justify-center bg-yellow-500 rounded-full hover:bg-yellow-600 focus:outline-none"
            aria-label="Minimizar"
          >
            <FaMinus className="text-white text-xs" />
          </button>
          <button
            onClick={onClose}
            className="w-5 h-5 flex items-center justify-center bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"
            aria-label="Fechar"
          >
            <FaTimes className="text-white text-xs" />
          </button>
        </div>
        <h2 className="text-2xl text-center font-bold mb-8">{project.title}</h2>
        <ul className="mb-4">
          <li className="mb-2">
            <span className="text-base font-semibold">Descrição: </span>
            <span className="text-base mb-4">{project.description}</span>
          </li>
          <li className="mb-2">
            <span className="text-base font-semibold">Linguagens: </span>
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
            <a className="font-normal text-gray-700 dark:text-gray-100 hover:underline" target="_blank" rel="noopener noreferrer">{project.github}</a>
          </li>
          <li className="mb-2">
            <span className="text-base font-semibold">Deploy: </span>
            <a className="font-normal text-gray-700 dark:text-gray-100 hover:underline" target="_blank" rel="noopener noreferrer">{project.deploy}</a>
          </li>
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
