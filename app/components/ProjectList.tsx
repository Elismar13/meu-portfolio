import { Project } from '@/data/myProjects';
import Image from 'next/image';
import React from 'react';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative group p-4 rounded shadow-md w-full max-w-md mx-auto"
        >
          <div className="relative w-full h-60">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
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
