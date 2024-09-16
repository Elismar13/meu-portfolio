import ASM from '../assets/asmonitor.png';
import GETHUB from '../assets/gethub.png';
import HOME from '../assets/inhome.png';
import OPENSNAKE from '../assets/opensnake.png';
import TRANSACTION from '../assets/transaction.png';

export interface Project {
  title: string;
  description: string;
  description_en: string
  github: string
  image: string;
  technologies: string[];
  deploy?: string,
};

export const projects: Project[] = [
  {
    title: "ASMonitor",
    description: "Um sistema de monitoramento sobre informações do seu computador, tudo isso diretamente do terminal.",
    description_en: "A monitoring system for information about your computer, all directly from the terminal.",
    github: "https://github.com/Elismar13/ASMonitor",
    image: ASM,
    technologies: ["Node.js", "Blessed"],
  },
  {
    title: "Gethub",
    description: "Uma aplicação mobile para consultar informações e repositórios publicos de desenvolvedores no Github.",
    description_en: "A mobile application to consult information and public repositories of developers on Github.",
    github: "https://github.com/Matheus-0/GetHub",
    image: GETHUB,
    technologies: ["React Native", "Expo"],
  },
  {
    title: "inHome",
    description: "inHome é um aplicativo para monitoramento e controle de ambientes.",
    description_en: "inHome is an application for monitoring and controlling environments.",
    github: "https://github.com/Elismar13/inHome_backend",
    image: HOME,
    technologies: ["React", "Java"],
  },
  {
    title: "Transaction balance",
    description: "Sistema de orçamento utilizando Java, Apache Kafka, CQRS e Quarkus.",
    description_en: "Budgeting system using Java, Apache Kafka, CQRS, and Quarkus.",
    github: "https://github.com/Elismar13/transaction-balance",
    image: TRANSACTION,
    technologies: ["Java", "Quarkus", "CQRS", "Apache Kafka"],
  },
  {
    title: "OpenSnake",
    description: "Jogo da cobrinha desenvolvido do zero sem um motor gráfico, feito em C++ com a biblioteca OpenGL.",
    description_en: "Snake game developed from scratch without a game engine, made in C++ with the OpenGL library.",
    github: "https://github.com/Elismar13/OpenSnake",
    image: OPENSNAKE,
    technologies: ["C++", "OpenGL", "GLUT"],
  }
];
