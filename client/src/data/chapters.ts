/*
  Chapters, structure narrative de la home
  Source unique utilisée par Home.tsx (sections) et SideNav.tsx (groupes de nav),
  pour que les deux restent toujours cohérents.
*/

export interface Chapter {
  eyebrow: { fr: string; en: string };
  title: { fr: string; en: string };
  body: { fr: string; en: string };
  slugs: string[];
  secondary?: boolean;
}

export const chapters: Chapter[] = [
  {
    eyebrow: { fr: '01 : Aller voir avant de proposer', en: '01: Going to see before proposing' },
    title: { fr: "Terrain d'abord", en: 'Field first' },
    body: {
      fr: "Avant de proposer une solution, je vais voir ce qui coince, avec les gens concernés. Sur City Manager, j'ai testé le prototype en visio avec quatre managers de centre-ville, pour voir en direct où l'outil tenait et où il se fissurait. Sur Proveil, un test Hassenzahl et des entretiens d'usage avec les documentalistes. Sur l'exploration IA, des hypothèses de recherche en langage naturel testées directement avec des utilisateurs, des fondations reprises en production sur OneSearch. Dans les trois cas, la solution vient après avoir compris ce qui se joue réellement sur le terrain.",
      en: "Before proposing a solution, I go see what's actually broken, with the people concerned. On City Manager, I tested the prototype over video calls with four city-center managers, watching live where the tool held up and where it cracked. On Proveil, a Hassenzahl test and usage interviews with the documentation team. On the AI exploration, natural language search hypotheses tested directly with users, foundations later carried into production on OneSearch. In all three cases, the solution comes after understanding what's really going on in the field.",
    },
    slugs: ['city-manager', 'proveil', 'poc-llm-carto'],
  },
  {
    eyebrow: { fr: '02 : Partir de zéro', en: '02: Starting from zero' },
    title: { fr: 'Lancement de produit', en: 'Product launch' },
    body: {
      fr: "J'aime lancer des produits sur des marchés pas encore adressés : le moment où il faut poser les bonnes hypothèses avant de coder quoi que ce soit. Chez Explore, j'ai porté plusieurs lancements de zéro, avec la même méthode à chaque fois : comprendre le métier, tester le problème avant la solution, itérer vite.",
      en: "I like launching products on markets that aren't addressed yet: the moment when you have to get the hypotheses right before building anything. At Explore, I led several launches from scratch, with the same method every time: understand the business, test the problem before the solution, iterate fast.",
    },
    slugs: ['territoire-360', 'elm-codata'],
  },
  {
    eyebrow: { fr: '03 : Construire seule', en: '03: Building solo' },
    title: { fr: 'Product Building', en: 'Product Building' },
    body: {
      fr: "En dehors du cadre professionnel, je conçois et je code, de l'idée à la mise en ligne. L'Interprète de Rêves est une application IA d'analyse symbolique des rêves que j'ai construite seule. Le même réflexe m'a servi pour un site de suivi de mon équipe de volley (résultats, compositions, stats par set) et un outil pour créer et analyser des tests UX (AttrakDiff, meCUE). Trois projets, la même méthode : comprendre le besoin, puis construire jusqu'au bout.",
      en: "Outside my day job, I design and code, from idea to live product. L'Interprète de Rêves is an AI app for symbolic dream analysis that I built entirely on my own. The same instinct led me to build a tracking site for my volleyball team (results, lineups, set-by-set stats) and a tool for creating and analyzing UX tests (AttrakDiff, meCUE). Three projects, same method: understand the need, then build it through to the end.",
    },
    slugs: ['interprete-de-reves', 'vls2', 'tests-et-formulaires'],
  },
  {
    eyebrow: { fr: '04 : Organiser et structurer', en: '04: Organizing and structuring' },
    title: { fr: 'Figma & Design System', en: 'Figma & Design System' },
    body: {
      fr: "Sur 5 produits, je gérais plusieurs design systems en parallèle. J'ai contribué à leur convergence vers un système unique multi-produits : une source de vérité commune, des mises à jour propagées partout en une fois, et des nouvelles fonctionnalités qui s'implémentent plus vite, sans plus rien redévelopper en double. Je raconte ce chemin en détail dans l'étude de cas.",
      en: "Across 5 products, I was managing several design systems in parallel. I contributed to their convergence into a single multi-product system: one shared source of truth, updates propagated everywhere at once, and new features that ship faster because nothing gets rebuilt twice. I tell this story in detail in the case study.",
    },
    slugs: ['design-system'],
  },
  {
    eyebrow: { fr: 'Pour aller plus loin', en: 'Going further' },
    title: { fr: 'Direction artistique', en: 'Art direction' },
    body: {
      fr: "En parallèle de mon poste de product designer, je suis aussi indépendante : identités visuelles, logos, illustrations. Une manière de garder la main sur la direction artistique pure, pour des structures qui démarrent et qui ont besoin d'exister visuellement.",
      en: "Alongside my product design job, I also work independently: visual identities, logos, illustrations. A way to keep working on pure art direction, for early-stage structures that need a visual identity to exist.",
    },
    slugs: ['swaneo', 'tao', 'elements', 'qg-media-libre', 'uptilab', 'illustrations'],
    secondary: true,
  },
];
