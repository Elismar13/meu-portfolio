import React from 'react';
import ProjectList from './ProjectList';
import { projects } from '@/data/myProjects';

const MyProjects: React.FC = () => {
  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center text-white p-8">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="mb-10">Here are my projects, including bots and websites.</p>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};

export default MyProjects;
