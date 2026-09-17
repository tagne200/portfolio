export const PROFILE = {
  name: "Kenneth Tagne Nathan",
  initials: "KT",
  role: "Développeur full-stack — Web, mobile & cloud",
  tagline:
    "Je conçois des applications web et mobiles de l'API au déploiement cloud : backend NestJS ou Laravel, front React et Vue, tests logiciels et administration de serveurs Linux.",
  signature: "Kenneth",
  bio: [
    "Développeur full-stack en Master 2 (Expert en architecture et développement logiciel) à 3iL Ingénieurs, je construis des produits complets : conception de l'API, interfaces web et mobiles, puis mise en production sur VPS ou AWS.",
    "J'associe le développement backend (NestJS, Laravel, Python), le front-end (React.js, Vue.js, Next.js), les tests logiciels (Postman, SonarQube, non-régression) et l'administration de serveurs Linux. Je recherche actuellement un stage de développeur full-stack.",
  ],
  location: "Limoges, France",
  email: "kenneth.tagne@gmail.com",
  phone: "+33 7 455 522 18",
  languages: "Français (natif) · Anglais (intermédiaire)",
  interests: ["Cinéma", "Sport", "Musique", "Développement de jeux vidéo"],
  qualities: ["Autonomie", "Curiosité", "Rigueur", "Dynamisme", "Créativité"],
  status: {
    label: "En recherche d'un stage de développeur full-stack",
    live: true,
  },
  socials: [
    { label: "GitHub", url: "https://github.com/tagne200", icon: "github" },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/kenneth-tagne-nathan-362355245",
      icon: "linkedin",
    },
    { label: "Email", url: "mailto:kenneth.tagne@gmail.com", icon: "mail" },
  ],
  stats: [
    { value: "3 ans", label: "d'expérience en développement" },
    { value: "2", label: "plateformes en production" },
    { value: "Master 2", label: "architecture & dév. logiciel" },
  ],
};

export const NAV_LINKS = [
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "experience", label: "Expérience" },
  { id: "projects", label: "Projets" },
  { id: "academics", label: "Formation" },
  { id: "games", label: "Jeux" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  {
    group: "Front-end",
    accent: "var(--color-primary)",
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "Vite",
      "Bootstrap 5",
      "HTML",
      "CSS",
    ],
  },
  {
    group: "Back-end",
    accent: "var(--color-teal)",
    items: ["NestJS", "Node.js", "Python", "PHP", "Laravel", "API REST"],
  },
  {
    group: "Mobile",
    accent: "var(--color-pink)",
    items: ["Flutter", "React Native"],
  },
  {
    group: "Bases de données",
    accent: "var(--color-blue)",
    items: ["PostgreSQL", "MySQL", "Microsoft Access"],
  },
  {
    group: "Cloud & DevOps",
    accent: "var(--color-purple)",
    items: ["AWS", "GitHub Actions", "CI/CD", "VPS", "Nginx Proxy Manager", "cPanel", "Git"],
  },
  {
    group: "IA & Agentics",
    accent: "var(--color-coral)",
    items: [
      "Anthropic Claude API",
      "OpenAI",
      "Orchestration de LLM",
      "Cursor",
      "Claude Code",
      "AntiGravity",
    ],
  },
  {
    group: "Tests & Qualité",
    accent: "var(--color-teal)",
    items: [
      "Postman",
      "SonarQube",
      "Tests d'API",
      "Tests manuels",
      "Non-régression",
      "Gestion des anomalies",
    ],
  },
  {
    group: "Méthodes",
    accent: "var(--color-primary)",
    items: [
      "Développement assisté par IA",
      "Refactorisation de code",
      "Documentation technique",
      "Travail en équipe",
    ],
  },
];

export const EXPERIENCES = [
  {
    company: "Ettrans Sarl",
    role: "Développeur Backend & Testeur Logiciel",
    period: "2026 — présent",
    location: "Douala, Cameroun",
    description:
      "Développement du backend de la plateforme Ettrans et garantie de sa qualité logicielle, pour les clients web et mobile.",
    highlights: [
      "Développé le backend NestJS de la plateforme (endpoints d'API) pour le web et le mobile.",
      "Conçu et exécuté les tests d'API avec Postman, amélioré la qualité du code via SonarQube.",
      "Réalisé les tests manuels et de non-régression, corrigé les bugs et documenté les anomalies.",
    ],
    stack: ["NestJS", "Postman", "SonarQube", "API REST"],
  },
  {
    company: "Univers Visual",
    role: "Stagiaire — Développeur d'Applications",
    period: "mai 2025 — août 2025",
    location: "Douala, Cameroun",
    description:
      "Participation à la conception et à la livraison d'applications métier, du design d'interface au déploiement.",
    highlights: [
      "Participé à la conception d'une application de gestion de stock.",
      "Conçu l'interface graphique de l'application MonPiol.",
      "Développé et livré l'application MonPiol.",
    ],
    stack: ["Vue.js", "Flutter", "UI Design"],
  },
  {
    company: "ENEO Cameroun — Agence de Koumassi",
    role: "Stagiaire Académique",
    period: "août 2023 — sept. 2023",
    location: "Douala, Cameroun",
    description:
      "Stage chez le fournisseur d'énergie électrique du Cameroun (aujourd'hui Socadel) : analyse métier et outillage interne.",
    highlights: [
      "Analysé des problématiques opérationnelles et découvert l'ERP SAP.",
      "Assuré la maintenance et l'assistance sur les outils de gestion.",
      "Conçu une application web de gestion des stocks et des commandes avec tableaux de bord par rôle.",
    ],
    stack: ["SAP", "Web", "Gestion de stock"],
  },
  {
    company: "Vantech",
    role: "Technicien Maintenance & Développeur Front-end",
    period: "mai 2023 — présent",
    location: "Douala, Cameroun",
    description:
      "Double casquette : administration du parc informatique et développement front-end sur les projets clients.",
    highlights: [
      "Gestion du parc informatique, contrôle des périphériques et sécurisation du réseau.",
      "Participé à la conception d'un site e-commerce (front-end).",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Réseau"],
  },
];

export const PROJECTS = [
  {
    title: "MonPiol",
    subtitle: "Recherche et gestion de logements — 2025/2026",
    description:
      "Plateforme web et mobile de recherche de logements catégorisés et cartographiés : avis, commentaires et classements, messagerie bailleur / futur locataire, gestion multi-utilisateur, boost de publications et espace de gestion des biens pour les bailleurs.",
    tags: ["Vue.js", "NestJS", "Flutter", "API partagée"],
    accent: "var(--color-primary)",
    links: { demo: "https://monpiol.site", code: "https://github.com/tagne200" },
    featured: true,
  },
  {
    title: "Check Game",
    subtitle: "Jeu de cartes hybride — 2026/présent",
    description:
      "Application web et Android inspirée de concepts camerounais : jouable en ligne, en réseau local ou contre l'ordinateur, avec un mode aventure dédié.",
    tags: ["Web", "Android", "Multijoueur", "Jeu"],
    accent: "var(--color-teal)",
    links: { demo: "https://check-game.site", code: "https://github.com/tagne200" },
    featured: true,
  },
  {
    title: "Laboratoire de déploiement personnel",
    subtitle: "Cloud & infrastructure — en continu",
    description:
      "Environnement personnel d'expérimentation cloud : configuration de VPS, noms de domaine, reverse proxy et hébergements cPanel, avec du déploiement continu via AWS et GitHub Actions.",
    tags: ["AWS", "GitHub Actions", "Nginx", "VPS", "cPanel"],
    accent: "var(--color-blue)",
    links: { demo: "#", code: "https://github.com/tagne200" },
    featured: false,
  },
  {
    title: "Gestion de stocks & commandes",
    subtitle: "Application web métier — ENEO",
    description:
      "Application web de gestion des stocks et des commandes conçue lors du stage chez ENEO, avec des tableaux de bord différenciés selon le rôle de l'utilisateur.",
    tags: ["Web", "Tableaux de bord", "Gestion"],
    accent: "var(--color-purple)",
    links: { demo: "#", code: "https://github.com/tagne200" },
    featured: false,
  },
];

export const ACADEMICS = [
  {
    school: "3iL Ingénieurs · Limoges, France",
    degree: "Master 2 — Expert en architecture et développement logiciel (EADL)",
    period: "2026 — 2027",
    grade: "En cours",
    details: [
      "Architecture logicielle et conception d'applications distribuées.",
      "Développement full-stack avancé et pratiques DevOps.",
    ],
  },
  {
    school: "3iL Ingénieurs / Institut Universitaire de la Côte · Douala",
    degree: "Master 1 — Expert en architecture et développement logiciel (EADL)",
    period: "2025 — 2026",
    grade: "Validé",
    details: [
      "Conception d'applications web et mobiles multi-plateformes.",
      "Qualité logicielle, tests et intégration continue.",
    ],
  },
  {
    school: "3iL Ingénieurs / Institut Universitaire de la Côte · Douala",
    degree: "Bachelor — Systèmes d'information, développement web & mobile",
    period: "2024 — 2025",
    grade: "Obtenu",
    details: [
      "Développement web et mobile, bases de données relationnelles.",
      "Systèmes d'information et gestion de projet.",
    ],
  },
  {
    school: "Institut Universitaire de la Côte · Douala, Cameroun",
    degree: "BTS — Génie logiciel",
    period: "2022 — 2024",
    grade: "Obtenu",
    details: [
      "Fondamentaux de la programmation et du génie logiciel.",
      "Premiers projets applicatifs et travail en équipe.",
    ],
  },
];

export const MEMORY_CARDS = ["⚛️", "🧩", "🚀", "🎯", "🛠️", "☁️"];

export const QUIZ = [
  {
    question: "Quel framework backend est-ce que j'utilise le plus sur mes projets ?",
    options: ["Django", "NestJS", "Spring Boot"],
    answer: 1,
  },
  {
    question: "Avec quelle techno est développée l'application mobile MonPiol ?",
    options: ["Flutter", "Ionic", "Kotlin natif"],
    answer: 0,
  },
  {
    question: "Quel outil est-ce que j'utilise pour analyser la qualité du code ?",
    options: ["Jenkins", "Sentry", "SonarQube"],
    answer: 2,
  },
  {
    question: "Quel est mon niveau d'études actuel ?",
    options: ["Licence 3", "Master 1", "Master 2"],
    answer: 2,
  },
];

export const RESUME = {
  file: "/CV_Kenneth_Tagne_Nathan.pdf",
  updated: "Mis à jour en septembre 2026",
  summary:
    "Développeur full-stack en Master 2, spécialisé web, mobile et cloud — à la recherche d'un stage.",
  quickFacts: [
    { label: "Poste recherché", value: "Stage développeur full-stack" },
    { label: "Localisation", value: "Limoges, France" },
    { label: "Langues", value: "Français, Anglais" },
    { label: "Permis", value: "Permis B" },
  ],
};
