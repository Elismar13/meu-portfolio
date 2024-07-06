import React from 'react';
import ProjectList from './ProjectList';

const projects = [
  {
    title: 'Project One',
    description: 'This is a description of project one.',
    link: 'https://github.com/your-username/project-one',
  },
  {
    title: 'Project Two',
    description: 'This is a description of project two.',
    link: 'https://github.com/your-username/project-two',
  },
  {
    title: 'Project Two',
    description: 'This is a description of project two.',
    link: 'https://github.com/your-username/project-two',
  },
  {
    title: 'Project Two',
    description: 'This is a description of project two.',
    link: 'https://github.com/your-username/project-two',
  },
  {
    title: 'Project Two',
    description: 'This is a description of project two.',
    link: 'https://github.com/your-username/project-two',
  },
];

const MyProjects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="mb-10">Here are my projects, including bots and websites.</p>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};

export default MyProjects;
