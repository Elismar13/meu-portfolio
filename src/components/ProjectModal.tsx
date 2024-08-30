// ProjectModal.tsx
import React from 'react';
import { Project } from '../../data/myProjects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        <h3 className="text-lg font-semibold">Tecnologias/Linguagens</h3>
        <ul className="mb-4">
          {project.technologies.map((tech, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <a href={project.github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {project.deploy && (
            <a href={project.deploy} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Deploy
            </a>
          )}
        </div>
        <button
          onClick={onClose}
          className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
