import React from 'react';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaJava, FaDatabase } from 'react-icons/fa';
import { DiJavascript1, DiPython, DiPostgresql, DiMongodb } from 'react-icons/di';
import { SiTypescript, SiExpress, SiSpring, SiFlask, SiQuarkus, SiHtml5, SiCss3, SiAngular } from 'react-icons/si';
import SkillCard from './SkillCard';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full flex text-white py-16 px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8">About Me</h2>
        <p className="text-lg mb-6">
          Olá, me chamo Elismar Silva e tenho 22 anos. Moro em Paraíba, Brasil.
        </p>

        <h3 className="text-3xl font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <SkillCard title="Backend">
            <FaJava size={36} />
            <FaNodeJs size={36} />
            <DiPython size={36} />
            <SiSpring size={36} />
            <SiQuarkus size={36} />
            <SiExpress size={36} />
            <SiFlask size={36} />
          </SkillCard>
          <SkillCard title="Frontend">
            <DiJavascript1 size={36} />
            <FaReact size={36} />
            <SiAngular size={36} />
            <SiTypescript size={36} />
            <SiHtml5 size={36} />
            <SiCss3 size={36} />
          </SkillCard>
          <SkillCard title="Database">
            <DiPostgresql size={36} />
            <DiMongodb size={36} />
            <FaDatabase size={36} />
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
          <a href="#github" className="text-white hover:text-blue-500">
            <FaGithub size={30} />
          </a>
          <a href="#linkedin" className="text-white hover:text-blue-500">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
