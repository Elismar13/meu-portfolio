import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { COLORS } from '../constants/colors';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

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
  const { color } = useContext(ThemeContext) || { color: COLORS.CUSTOM_BLUE };

  return (
    <section id="experience" className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Experience & <span style={{ color }}>Education</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex space-x-4">
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full"
                  style={{ backgroundColor: color }}
                >
                  {exp.type === 'work' ? (
                    <FaBriefcase size={20} className="text-gray-300" />
                  ) : (
                    <FaGraduationCap size={24} className="text-gray-300" />
                  )}
                </div>
                <div className="flex-grow w-0.5 bg-gray-300"></div>
              </div>

              <div>
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
