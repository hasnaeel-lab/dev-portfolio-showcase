export interface Article {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  content: string;
}

export const articles: Article[] = [
  {
    slug: "lovable-outils-ia-developpeurs",
    title: "Lovable et les outils IA pour développeurs",
    summary: "Comment les outils IA comme Lovable transforment le quotidien des développeurs et accélèrent la création d'applications.",
    date: "2026-02-10",
    tags: ["IA", "Lovable", "Productivité"],
    content: `## Lovable : l'IA au service du développement

L'arrivée des outils IA dans le développement web a profondément changé notre façon de travailler. Lovable fait partie de ces plateformes qui permettent de **prototyper et construire des applications complètes** en un temps record.

### Ce que Lovable apporte

- **Génération de code React** à partir de descriptions en langage naturel
- **Design system intégré** avec Tailwind CSS et shadcn/ui
- **Déploiement simplifié** avec prévisualisation en temps réel

### Mon expérience

En tant que développeuse, j'utilise Lovable pour accélérer la phase de prototypage. Cela me permet de me concentrer sur la logique métier et l'architecture plutôt que sur le boilerplate.

> L'IA ne remplace pas le développeur, elle amplifie ses capacités.

### Conclusion

Les outils IA sont devenus des alliés indispensables. L'important est de savoir les utiliser intelligemment tout en gardant une compréhension profonde du code généré.`,
  },
  {
    slug: "evolution-developpeuse-ia",
    title: "Évolution du métier de développeuse avec l'IA",
    summary: "Retour d'expérience sur l'évolution de ma position de développeuse depuis l'arrivée des outils IA.",
    date: "2026-02-05",
    tags: ["IA", "Carrière", "Retour d'expérience"],
    content: `## De développeuse classique à développeuse augmentée

L'IA a redéfini les contours de notre métier. Voici comment ma pratique a évolué.

### Avant l'IA

- Écriture manuelle de chaque ligne de code
- Recherche longue sur Stack Overflow
- Prototypage lent et itératif

### Avec l'IA

- **Pair programming avec l'IA** : suggestions en temps réel
- **Documentation automatique** : génération de docs à partir du code
- **Tests assistés** : couverture de tests améliorée

### Les compétences qui comptent désormais

1. **Prompt engineering** — savoir formuler ses demandes
2. **Revue de code critique** — valider ce que l'IA propose
3. **Architecture logicielle** — les fondamentaux restent essentiels

### Mon conseil

Embrassez ces outils, mais ne perdez jamais vos fondamentaux. La compréhension du code reste votre meilleur atout.`,
  },
  {
    slug: "design-system-react",
    title: "Créer un Design System en React",
    summary: "Guide pratique pour construire un design system maintenable et réutilisable avec React et TypeScript.",
    date: "2026-01-28",
    tags: ["React", "Design System", "TypeScript"],
    content: `## Pourquoi un Design System ?

Un design system assure la **cohérence visuelle** et **accélère le développement** en fournissant des composants réutilisables.

### Les fondations

\`\`\`tsx
// Exemple de token de design
const theme = {
  colors: {
    primary: 'hsl(250, 65%, 55%)',
    secondary: 'hsl(170, 60%, 42%)',
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
  }
}
\`\`\`

### Composants essentiels

1. **Button** avec variants (primary, secondary, ghost)
2. **Input** avec états (default, error, disabled)
3. **Card** pour structurer le contenu
4. **Typography** pour la hiérarchie textuelle

### Outils recommandés

- **Storybook** pour documenter et tester visuellement
- **Chromatic** pour la régression visuelle
- **Tailwind CSS** pour le styling utilitaire

### Conclusion

Un bon design system est un investissement qui se rentabilise rapidement sur les projets d'équipe.`,
  },
  {
    slug: "redux-bonnes-pratiques",
    title: "Redux — Bonnes pratiques",
    summary: "Les patterns essentiels pour un state management Redux propre et performant.",
    date: "2026-01-20",
    tags: ["Redux", "React", "State Management"],
    content: `## Redux en 2026

Redux Toolkit a simplifié l'utilisation de Redux. Voici les bonnes pratiques à adopter.

### Structure recommandée

\`\`\`
src/
  store/
    slices/
      userSlice.ts
      cartSlice.ts
    store.ts
    hooks.ts
\`\`\`

### Slice pattern avec RTK

\`\`\`tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', isLoggedIn: false },
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.name = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.name = '';
      state.isLoggedIn = false;
    },
  },
});
\`\`\`

### Règles d'or

1. **Un slice par domaine** métier
2. **Sélecteurs mémorisés** avec createSelector
3. **Actions asynchrones** avec createAsyncThunk
4. **Normaliser les données** avec createEntityAdapter

### Quand utiliser Redux ?

Redux excelle pour les **états partagés complexes**. Pour les états locaux, préférez useState ou useReducer.`,
  },
  {
    slug: "git-flow-explique",
    title: "Git Flow expliqué",
    summary: "Comprendre et appliquer la stratégie de branching Git Flow dans vos projets.",
    date: "2026-01-15",
    tags: ["Git", "Git Flow", "DevOps"],
    content: `## Git Flow : la stratégie de branching

Git Flow organise votre historique Git avec des branches dédiées à chaque phase du développement.

### Les branches principales

- **main** : code en production
- **develop** : intégration des features

### Les branches de support

- **feature/** : nouvelles fonctionnalités
- **release/** : préparation d'une release
- **hotfix/** : correctifs urgents en production

### Workflow type

1. Créer une branche \`feature/ma-feature\` depuis \`develop\`
2. Développer et commiter sur cette branche
3. Merger dans \`develop\` via Pull Request
4. Créer \`release/1.0.0\` quand prêt
5. Merger \`release\` dans \`main\` et \`develop\`

### Alternatives

- **GitHub Flow** : plus simple, idéal pour le déploiement continu
- **Trunk-based development** : branches très courtes

### Mon avis

Git Flow convient aux projets avec des cycles de release définis. Pour les projets agiles avec CI/CD, GitHub Flow est souvent plus adapté.`,
  },
  {
    slug: "vscode-plugins-essentiels",
    title: "Fonctionnalités et plugins VS Code",
    summary: "Les extensions et fonctionnalités VS Code indispensables pour booster votre productivité.",
    date: "2026-01-10",
    tags: ["VS Code", "Productivité", "Outils"],
    content: `## VS Code : optimiser son environnement

VS Code est devenu l'IDE de référence. Voici comment en tirer le meilleur parti.

### Extensions essentielles

| Extension | Usage |
|-----------|-------|
| ESLint | Linting JavaScript/TypeScript |
| Prettier | Formatage automatique |
| GitLens | Historique Git avancé |
| Thunder Client | Tester les API REST |
| GitHub Copilot | Assistance IA |

### Raccourcis indispensables

- \`Ctrl+P\` : recherche rapide de fichiers
- \`Ctrl+Shift+P\` : palette de commandes
- \`Ctrl+D\` : sélection multiple
- \`Alt+Shift+F\` : formater le document

### Fonctionnalités méconnues

1. **Multi-cursor editing** pour modifier plusieurs lignes
2. **Snippets personnalisés** pour accélérer la saisie
3. **Tasks** pour automatiser les commandes
4. **Workspace settings** pour des configs par projet

### Mon setup

Je combine Copilot avec Prettier et ESLint pour un workflow fluide où le code est toujours propre et bien formaté.`,
  },
  {
    slug: "deployer-github-pages",
    title: "Déployer sur GitHub Pages",
    summary: "Guide pas à pas pour déployer une application React sur GitHub Pages gratuitement.",
    date: "2026-01-05",
    tags: ["GitHub Pages", "React", "Déploiement"],
    content: `## Déployer React sur GitHub Pages

GitHub Pages permet d'héberger gratuitement des sites statiques. Voici comment y déployer votre app React.

### Prérequis

- Un repository GitHub
- Une app React (Create React App ou Vite)

### Étapes avec Vite

1. Installer gh-pages :
\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

2. Configurer vite.config.ts :
\`\`\`tsx
export default defineConfig({
  base: '/nom-du-repo/',
  plugins: [react()],
})
\`\`\`

3. Ajouter les scripts dans package.json :
\`\`\`json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
\`\`\`

4. Déployer :
\`\`\`bash
npm run deploy
\`\`\`

### Ressources

- [react-gh-pages](https://github.com/gitname/react-gh-pages) — guide de référence
- Documentation officielle GitHub Pages

### Limitations

- Sites **statiques uniquement** (pas de serveur)
- Un seul site par repository
- Idéal pour les portfolios et la documentation`,
  },
  {
    slug: "creer-librairie-react",
    title: "Créer une librairie React",
    summary: "De l'initialisation à la publication sur npm : créer votre propre librairie de composants React.",
    date: "2025-12-28",
    tags: ["React", "npm", "TypeScript"],
    content: `## Créer et publier une librairie React

Partager vos composants React sous forme de package npm est un excellent moyen de contribuer à la communauté.

### Setup avec Vite Library Mode

\`\`\`bash
npm create vite@latest ma-lib -- --template react-ts
\`\`\`

### Configuration vite.config.ts

\`\`\`tsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MaLib',
      fileName: 'ma-lib',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
})
\`\`\`

### Bonnes pratiques

1. **Typage strict** avec TypeScript
2. **Tree-shaking** pour optimiser le bundle
3. **Documentation** avec Storybook
4. **Tests** avec Vitest et Testing Library
5. **Versioning sémantique** (semver)

### Publication

\`\`\`bash
npm login
npm publish --access public
\`\`\`

Votre librairie est maintenant disponible pour la communauté !`,
  },
  {
    slug: "nouveautes-react-nodejs-python",
    title: "Nouveautés React / Node.js / Python",
    summary: "Tour d'horizon des dernières évolutions dans l'écosystème React, Node.js et Python.",
    date: "2025-12-20",
    tags: ["React", "Node.js", "Python"],
    content: `## Les dernières nouveautés

### React 19+

- **React Server Components** pour le rendu côté serveur
- **use()** hook pour les promesses et contexts
- **Actions** pour simplifier les mutations
- Amélioration des performances avec le compilateur React

### Node.js 22+

- **Support natif de TypeScript** (expérimental)
- **Permission model** pour la sécurité
- **Test runner intégré** plus mature
- Meilleure compatibilité ESM/CommonJS

### Python 3.13+

- **Free-threaded mode** (no GIL)
- **Pattern matching** amélioré
- Performances améliorées avec le JIT compiler
- Meilleur typage avec les nouvelles annotations

### Tendances communes

Les trois écosystèmes convergent vers :
1. **Plus de performance** native
2. **Meilleur typage** statique
3. **Outils intégrés** (test, lint, format)
4. **IA et ML** comme citoyens de première classe`,
  },
];
