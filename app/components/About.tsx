import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full flex bg-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-6">
          Olá, me chamo Elismar Silva e tenho 22 
          <br /> Moro em Paraíba, Brasil.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        <h3 className="text-2xl font-semibold mb-2">Experience</h3>
        <p className="mb-6">
          Tenho trabalhado em projetos diversos, desde aplicações web até serviços backend robustos. Minha experiência inclui trabalhar em equipes ágeis e fornecer soluções de alta qualidade.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Projects</h3>
        <p>
          Confira alguns dos meus projetos no GitHub e LinkedIn:
        </p>
        <div className="flex justify-center mt-4">
          <a href="#github" className="text-white hover:text-blue-500 mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.982 1.029-2.682-.103-.253-.446-1.273.098-2.65 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.8a9.563 9.563 0 012.51.338c1.91-1.296 2.75-1.026 2.75-1.026.544 1.377.201 2.397.099 2.65.64.7 1.029 1.592 1.029 2.682 0 3.841-2.336 4.687-4.563 4.938.359.309.678.919.678 1.854 0 1.338-.012 2.417-.012 2.742 0 .268.18.578.688.48C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a href="#linkedin" className="text-white hover:text-blue-500 mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zm-4 8h-8v8h8v-8zm-8-10h8v2h-8V6zm0 4h8v10H4V10z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
