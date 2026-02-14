export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Développeuse",
    description: "Site portfolio professionnel construit avec React et Tailwind CSS, déployé sur VPS OVH.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif avec visualisation de données en temps réel et filtres avancés.",
    technologies: ["React", "Node.js", "Redux"],
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "API REST E-commerce",
    description: "API backend complète pour une plateforme e-commerce avec authentification JWT.",
    technologies: ["Node.js", "Python", "PostgreSQL"],
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Design System React",
    description: "Librairie de composants réutilisables avec Storybook et tests automatisés.",
    technologies: ["React", "TypeScript", "Figma"],
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    title: "Chatbot IA",
    description: "Assistant conversationnel intelligent intégrant des modèles de langage modernes.",
    technologies: ["Python", "React", "Node.js"],
    githubUrl: "https://github.com",
  },
  {
    id: "6",
    title: "CI/CD Pipeline",
    description: "Pipeline d'intégration continue avec GitHub Actions et déploiement automatisé.",
    technologies: ["Git Flow", "Node.js", "Docker"],
    githubUrl: "https://github.com",
  },
];

export const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))];
