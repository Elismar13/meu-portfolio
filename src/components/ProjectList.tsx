import React from 'react';
import { Project } from '../../data/myProjects';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
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
              <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
