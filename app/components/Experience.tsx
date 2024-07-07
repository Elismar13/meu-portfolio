// components/Experience.tsx
import React from 'react';

interface ExperienceItem {
  type: 'work' | 'education';
  range: string;
  title: string;
  institution: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    type: 'work',
    range: '2020 - Present',
    title: 'Full-Stack Developer',
    institution: 'Tech Company',
    description: 'Developing and maintaining web applications using React, Node.js, and other technologies.'
  },
  {
    type: 'education',
    range: '2016 - 2020',
    title: 'Bachelor of Computer Science',
    institution: 'University of Tech',
    description: 'Studied various aspects of computer science including algorithms, data structures, and web development.'
  },
  {
    type: 'education',
    range: '2016 - 2020',
    title: 'Bachelor of Computer Science',
    institution: 'University of Tech',
    description: 'Studied various aspects of computer science including algorithms, data structures, and web development.'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience & Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="relative flex-shrink-0">
                <div className="flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full">
                  {exp.type === 'work' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0-4v-6m4 4h-8m4 4H8m8 4H8m8 4H8" />
                    </svg>
                  )}
                </div>
                <div className="absolute top-8 left-4 w-0.5 h-full bg-gray-300"></div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-400">{exp.range} - {exp.institution}</p>
                <p className="mt-1">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
