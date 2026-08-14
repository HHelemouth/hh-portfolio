/*
  Données des projets, centralisées pour être utilisées à la fois par :
  - Home.tsx (sections narratives, sous-ensembles de projets)
  - Projets.tsx (grille complète)
*/

export const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2';

export interface ProjectEntry {
  slug: string;
  label: string;
  year: string;
  tags: string[];
  isNew?: boolean;
  thumb?: string;
  thumbFit?: 'cover' | 'contain';
  cardSubtitle?: string;
  cardIcon?: 'design-system' | 'compass' | 'moon' | 'map' | 'store';
  color: string;
}

export const projects: ProjectEntry[] = [
  {
    slug: 'city-manager',
    label: 'City Manager',
    year: '2024',
    tags: ['Étude de marché', 'Lancement produit', 'SaaS B2B'],
    isNew: true,
    thumb: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    color: '#3B3FD8',
  },
  {
    slug: 'design-system',
    label: 'Design System Multi-Produits',
    year: '2024',
    tags: ['Design System', 'Figma', 'Tokens'],
    cardSubtitle: 'Multi-Produits · Figma',
    cardIcon: 'design-system',
    color: '#3B3FD8',
  },
  {
    slug: 'territoire-360',
    label: 'Territoire 360',
    year: '2024',
    tags: ['Lancement produit', 'UX', 'UI'],
    thumb: `${CDN}/territoire_360_66b1fb96.png`,
    color: '#1E3A5F',
  },
  {
    slug: 'elm-codata',
    label: 'ELM by Codata',
    year: '2024',
    isNew: true,
    tags: ['Lancement produit', 'Étude de marché', 'SaaS B2B'],
    cardSubtitle: 'Géomarketing · Self-service',
    cardIcon: 'store',
    color: '#0A5C36',
  },
  {
    slug: 'proveil',
    label: 'Proveil',
    year: '2023',
    tags: ['UX Research', 'Test Hassenzahl', 'Refonte'],
    thumb: `${import.meta.env.BASE_URL}proveil/logo.png`,
    thumbFit: 'contain',
    cardSubtitle: 'UX Research · Refonte',
    color: '#0F4C81',
  },
  {
    slug: 'interprete-de-reves',
    label: "L'Interprète de Rêves",
    year: '2025',
    isNew: true,
    tags: ['Product Design', 'Développement', 'IA', 'Product Building'],
    cardSubtitle: 'IA · Product Building',
    cardIcon: 'moon',
    color: '#8B4513',
  },
  {
    slug: 'poc-llm-carto',
    label: 'Exploration IA & Cartographie',
    year: '2025',
    isNew: true,
    tags: ['R&D', 'Intelligence Artificielle', 'UX Research'],
    cardSubtitle: 'POC LLM · Recherche cartographique',
    cardIcon: 'map',
    color: '#1F6F5C',
  },
  {
    slug: 'fioulreduc',
    label: 'Fioulreduc',
    year: '2023',
    tags: ['UX', 'UI', 'Conversion'],
    thumb: `${CDN}/fioulreduc_5c6f18e4.jpg`,
    color: '#1A4FA0',
  },
  {
    slug: 'swaneo',
    label: 'Swaneo',
    year: '2023',
    tags: ['Identité visuelle', 'Logo'],
    thumb: `${CDN}/swaneo_5987b29a.jpg`,
    color: '#E07B00',
  },
  {
    slug: 'qg-media-libre',
    label: 'QG — Média Libre',
    year: '2020',
    tags: ['Identité visuelle', 'Logo'],
    thumb: `${CDN}/qg_media_libre_e53b2941.png`,
    color: '#C0392B',
  },
  {
    slug: 'appvizer',
    label: 'Appvizer',
    year: '2020',
    tags: ['Identité visuelle', 'Logo'],
    thumb: `${CDN}/appvizer_0492eb6b.png`,
    color: '#00B4A0',
  },
  {
    slug: 'uptilab',
    label: 'Uptilab',
    year: '2017',
    tags: ['Direction artistique', 'Print', 'Web'],
    thumb: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_site_9427fe92.jpg',
    color: '#1B3A52',
  },
  {
    slug: 'elements',
    label: 'Elements',
    year: '2020',
    tags: ['Identité visuelle', 'Logo', 'Direction artistique'],
    thumb: `${import.meta.env.BASE_URL}elements/hero.jpg`,
    color: '#2D5A3D',
  },
  {
    slug: 'tao',
    label: 'TAO',
    year: '2019',
    tags: ['Direction artistique', 'Identité visuelle', 'Logo'],
    thumb: `${import.meta.env.BASE_URL}tao/logo.png`,
    thumbFit: 'contain',
    color: '#2BD081',
  },
  {
    slug: 'illustrations',
    label: 'Illustrations, Cyanotype',
    year: '2020',
    tags: ['Illustration', 'Art'],
    thumb: `${CDN}/illustrations_cyanotype_67bc2b38.jpg`,
    color: '#2C3E50',
  },
];

export function getProject(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug);
}
