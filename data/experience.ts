export interface ExperienceItem {
  type: 'work' | 'education';
  range: string;
  title: string;
  title_en: string;
  institution: string;
  description: string;
  description_en: string;
}

export const experiences: ExperienceItem[] = [
  {
    type: 'work',
    range: '06/2021 - Present',
    title: 'Analista de Sistemas',
    title_en: 'Systems Analyst',
    institution: 'Accenture',
    description: 'Participei da modernização tecnológica em um banco, migrando aplicações monolíticas para uma arquitetura de microserviços. Atuei no desenvolvimento de microsserviços back-end para integração com um portal administrativo e criei aplicações de alta disponibilidade para funcionalidades de débito, utilizando metodologias ágeis e práticas de integração contínua para garantir um ambiente robusto e eficiente.',
    description_en: 'I contributed to the technological modernization of a bank by migrating monolithic applications to a microservices architecture. I worked on back-end microservices for integrating an administrative portal and developed high-availability applications for debit functionalities, using agile methodologies and continuous integration practices to ensure a robust and efficient environment.'
  },
  {
    type: 'work',
    range: '04/2020 - 04/2021',
    title: 'Full-Stack Developer',
    title_en: 'Full-Stack Developer',
    institution: 'Assert Campina Grande',
    description: 'Implementação de um sistema de aquisição de dados em tempo real com Node.js utilizando o framework Express e Socket.io, para monitorar e realizar o controle constante de dispositivos baseados em Internet das Coisas (IoT), utilizando análise de dados.',
    description_en: 'Implementation of a real-time data acquisition system with Node.js using the Express framework and Socket.io, to monitor and perform constant control of IoT (Internet of Things) devices, utilizing data analysis and scraping.'
  },
  {
    type: 'education',
    range: '02/2019 - 02/2024',
    title: 'Bacharel em Engenharia de Computação',
    title_en: 'Bachelor of Computer Engineering',
    institution: 'IFPB Campina Grande',
    description: 'Estudei vários aspectos da ciência da computação, incluindo algoritmos, estruturas de dados e desenvolvimento web. Tenho pesquisas na área, com artigos publicados, e meu TCC envolveu análise de dados e inteligência artificial.',
    description_en: 'Studied various aspects of computer science including algorithms, data structures, and web development. I have research in the field with published articles, and my thesis involved data analysis and artificial intelligence.',
  }
];