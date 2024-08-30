export interface Project {
  title: string;
  description: string;
  github: string
  image: string;
  technologies: string[];
  deploy?: string,
};

export const projects: Project[] = [
  {
    title: "ASMonitor",
    description: "Descrição",
    github: "link_projeto",
    image: "..//src/assets/asmonitor.png",
    technologies: ["React", "Java"],
    deploy: "url",
  },
  {
    title: "Gethub",
    description: "Descrição",
    github: "link_projeto",
    image: "../src/assets/gethub.png",
    technologies: ["React", "Java"],
    deploy: "url",
  },
  {
    title: "inHome",
    description: "Descrição",
    github: "link_projeto",
    image: "../src/assets/inhome.png",
    technologies: ["React", "Java"],
    deploy: "url",
  },
  {
    title: "Transaction balance",
    description: "Descrição",
    github: "link_projeto",
    image: "../src/assets/transaction.png",
    technologies: ["React", "Java"],
    deploy: "url",
  },
  {
    title: "OpenSnake",
    description: "Descrição",
    github: "link_projeto",
    image: "../src/assets/opensnake.png",
    technologies: ["React", "Java"],
    deploy: "url",
  }
];