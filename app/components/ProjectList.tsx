import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-700 p-4 rounded shadow-md">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="mb-4">{project.description}</p>
          <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
