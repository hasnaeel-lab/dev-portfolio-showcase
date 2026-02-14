export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "2020",
    title: "Début en développement web",
    description: "Premiers projets en HTML/CSS/JavaScript. Découverte de React et Node.js.",
  },
  {
    year: "2022",
    title: "Développeuse Fullstack",
    description: "Maîtrise de React, Node.js et Python. Premiers projets professionnels et stages.",
  },
  {
    year: "2024",
    title: "Intégration des outils IA",
    description: "Adoption de GitHub Copilot, Lovable et autres outils IA pour booster la productivité.",
  },
  {
    year: "2026",
    title: "Développeuse augmentée par l'IA",
    description: "Expertise en prompt engineering et utilisation avancée des outils IA dans le workflow quotidien.",
  },
];
