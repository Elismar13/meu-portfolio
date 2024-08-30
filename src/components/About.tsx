import React from 'react';
import { FaDatabase, FaJava } from 'react-icons/fa';
import { SiGithub, SiLinkedin, SiReact, SiNodedotjs, SiMongodb, SiPostgresql } from 'react-icons/si';
import { SiJavascript, SiPython, SiTypescript, SiExpress, SiSpring, SiFlask, SiQuarkus, SiHtml5, SiCss3, SiAngular } from 'react-icons/si';
import SkillCard from './SkillCard';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full flex text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8">About Me</h2>
        <p className="text-lg mb-6">
          Olá, me chamo Elismar Silva e tenho 22 anos. Moro em Paraíba, Brasil.
        </p>

        <h3 className="text-3xl font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <SkillCard title="Frontend">
            <SiJavascript size={32} />
            <SiReact size={32} />
            <SiAngular size={32} />
            <SiTypescript size={32} />
            <SiHtml5 size={32} />
            <SiCss3 size={32} />
          </SkillCard>
          <SkillCard title="Backend">
            <FaJava size={32} />
            <SiNodedotjs size={32} />
            <SiPython size={32} />
            <SiSpring size={32} />
            <SiQuarkus size={32} />
            <SiExpress size={32} />
            <SiFlask size={32} />
          </SkillCard>
          <SkillCard title="Database">
            <SiPostgresql size={32} />
            <SiMongodb size={32} />
            <FaDatabase size={32} />
          </SkillCard>
        </div>

        <h3 className="text-3xl font-semibold mb-4">Experience</h3>
        <p className="text-lg mb-8">
          Tenho trabalhado em projetos diversos, desde aplicações web até serviços backend robustos. Minha experiência inclui trabalhar em equipes ágeis e fornecer soluções de alta qualidade.
        </p>

        <h3 className="text-3xl font-semibold mb-4">Projects</h3>
        <p className="text-lg">
          Confira alguns dos meus projetos no GitHub e LinkedIn:
        </p>
        <div className="flex justify-center mt-6 space-x-6">
          <a href="#github" className= " text-gray-700 dark:text-gray-100 hover:text-blue-500">
            <SiGithub size={32} />
          </a>
          <a href="#linkedin" className="text-gray-700 dark:text-gray-100 hover:text-blue-500">
            <SiLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
