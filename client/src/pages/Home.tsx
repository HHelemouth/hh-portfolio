/*
  Home, Page d'accueil du portfolio
  Charte : fond blanc, bleu #3B3FD8 en accent, Jost + DM Sans
  Layout : hero asymétrique + 5 sections narratives (pourquoi j'aime ça, quels projets)
  Principe : la home raconte une démarche, la grille complète vit sur /projets
*/

import { Link } from 'wouter';
import { useRef } from 'react';
import SEOHead from '@/components/SEOHead';
import ProjectCard, { useIntersection } from '@/components/ProjectCard';
import { getProject } from '@/data/projects';

const PORTRAIT_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/portrait_060f4807.jpg';

interface Chapter {
  eyebrow: string;
  title: string;
  body: string;
  slugs: string[];
  extraNote?: string;
}

const chapters: Chapter[] = [
  {
    eyebrow: '01 : Partir de zéro',
    title: 'Lancement de produit',
    body: "J'aime lancer des produits sur des marchés pas encore adressés : le moment où il faut poser les bonnes hypothèses avant de coder quoi que ce soit. Chez Explore, j'ai porté 3 lancements de zéro. À chaque fois, même méthode : comprendre le métier, tester le problème avant la solution, itérer vite.",
    slugs: ['city-manager', 'territoire-360'],
    extraNote: "Un 3ᵉ lancement, ELM Codata, arrivera bientôt en étude de cas.",
  },
  {
    eyebrow: '02 : Améliorer l\'existant',
    title: "Optimisation de l'expérience utilisateur",
    body: "Un outil qui existe déjà se regarde différemment. Il faut d'abord mesurer ce qui coince avant de proposer quoi que ce soit. Sur Proveil et Fioulreduc, j'ai commencé par du terrain : tests utilisateurs, entretiens, mesure du temps passé sur chaque tâche. La refonte vient après, jamais avant.",
    slugs: ['proveil', 'fioulreduc'],
  },
  {
    eyebrow: '03 : Vivre avec son temps',
    title: 'IA appliquée au produit',
    body: "L'IA m'intéresse comme outil de réflexion, pas comme argument marketing. Chez Explore, j'ai exploré la recherche en langage naturel sur un POC dont les fondations ont été reprises en production sur OneSearch. En parallèle, j'ai construit seule L'Interprète de Rêves, de l'idée à la mise en ligne, pour comprendre de l'intérieur ce qu'implique le design avec l'IA plutôt que pour elle.",
    slugs: ['interprete-de-reves'],
  },
  {
    eyebrow: '04 : Organiser et structurer',
    title: 'Figma & Design System',
    body: "Sur 5 produits et plus de 40 000 utilisateurs, je suis devenue la référence Figma du groupe sans que ce soit écrit sur ma fiche de poste. Tokens, composants partagés, gouvernance multi-produits : je préfère un système qui tient dans le temps à une bibliothèque qu'on retape à chaque projet.",
    slugs: ['design-system'],
  },
  {
    eyebrow: '05 : Chercher des concepts',
    title: 'Direction artistique',
    body: "J'aime accompagner des structures qui démarrent et qui ont besoin d'une identité pour exister visuellement. À chaque fois, construire une image de marque à partir de rien, pour des entreprises qui grandissent vite.",
    slugs: ['swaneo', 'tao', 'elements', 'qg-media-libre', 'uptilab', 'illustrations'],
  },
];

function ChapterSection({ chapter, index }: { chapter: Chapter; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersection(ref as React.RefObject<Element>);
  const chapterProjects = chapter.slugs.map(getProject).filter(Boolean) as NonNullable<ReturnType<typeof getProject>>[];

  return (
    <section
      ref={ref}
      className="px-5 sm:px-10 py-10 sm:py-14"
      style={{
        borderTop: index === 0 ? 'none' : '1px solid oklch(0.91 0.02 264)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-medium tracking-[0.18em] uppercase mb-3"
          style={{ color: 'oklch(0.45 0.22 264)', fontFamily: 'DM Sans, sans-serif' }}
        >
          {chapter.eyebrow}
        </p>
        <h2
          className="text-xl sm:text-3xl font-bold mb-4"
          style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)', letterSpacing: '-0.01em' }}
        >
          {chapter.title}
        </h2>
        <p
          className="text-sm sm:text-base leading-relaxed max-w-2xl mb-3"
          style={{ color: 'oklch(0.35 0.03 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
        >
          {chapter.body}
        </p>
        {chapter.extraNote && (
          <p
            className="text-xs italic mb-6"
            style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
          >
            {chapter.extraNote}
          </p>
        )}

        <div className={`grid grid-cols-2 ${chapterProjects.length > 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-3'} gap-x-3 sm:gap-x-6 gap-y-7 sm:gap-y-10 mt-6`}>
          {chapterProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={Math.min(i + 1, 6)} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroVisible = useIntersection(heroRef as React.RefObject<Element>);

  return (
    <>
    <SEOHead canonicalPath="/" />
    <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="px-5 sm:px-10 pt-10 sm:pt-16 pb-10 sm:pb-12"
        style={{
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 max-w-3xl mx-auto">
          {/* Portrait mobile */}
          <div className="flex sm:hidden mb-5">
            <div
              className="w-20 h-20 rounded-full overflow-hidden"
              style={{ border: '2px solid oklch(0.45 0.22 264)', boxShadow: '4px 4px 0 oklch(0.94 0.04 264)' }}
            >
              <img src={PORTRAIT_URL} alt="Helena Hadjitournos" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Texte */}
          <div className="flex-1">
            <p
              className="text-xs font-medium tracking-[0.18em] uppercase mb-3"
              style={{ color: 'oklch(0.45 0.22 264)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Product Designer, Région nantaise
            </p>
            <h1
              className="text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: 'Jost, sans-serif', fontWeight: 700, color: 'oklch(0.13 0.02 264)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              Helena<br />Hadjitournos
            </h1>
            <p
              className="text-sm sm:text-base leading-relaxed mb-5 max-w-sm"
              style={{ color: 'oklch(0.35 0.03 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
            >
              Product Designer senior, spécialisée en discovery et design systems pour des produits SaaS B2B. Direction artistique en parallèle depuis 2019 : deux façons de résoudre le même problème, poser la bonne stratégie et lui donner une forme qui donne envie.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="mission-tag">UX Research</span>
              <span className="mission-tag">Product Design</span>
              <span className="mission-tag">UI Design</span>
              <span className="mission-tag">Design System</span>
              <span className="mission-tag">Direction Artistique</span>
            </div>
            <div className="mt-5 flex gap-3 flex-wrap items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 transition-all"
                style={{ backgroundColor: 'oklch(0.45 0.22 264)', color: '#fff', fontFamily: 'DM Sans, sans-serif', borderRadius: '2px' }}
              >
                Me contacter
              </Link>
              <Link
                href="/projets"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 transition-all"
                style={{ color: 'oklch(0.45 0.22 264)', fontFamily: 'DM Sans, sans-serif', border: '1px solid oklch(0.45 0.22 264)', borderRadius: '2px' }}
              >
                Voir tous les projets
              </Link>
            </div>
          </div>

          {/* Portrait desktop */}
          <div className="flex-shrink-0 hidden sm:block">
            <div
              className="w-36 h-36 rounded-full overflow-hidden"
              style={{ border: '3px solid oklch(0.45 0.22 264)', boxShadow: '6px 6px 0 oklch(0.94 0.04 264)' }}
            >
              <img src={PORTRAIT_URL} alt="Helena Hadjitournos" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTIONS NARRATIVES ── */}
      {chapters.map((chapter, i) => (
        <ChapterSection key={chapter.title} chapter={chapter} index={i} />
      ))}

      {/* ── FOOTER ── */}
      <footer
        className="px-5 sm:px-10 py-6 sm:py-8 text-xs"
        style={{ borderTop: '1px solid oklch(0.91 0.02 264)', color: 'oklch(0.6 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
      >
        <div className="flex justify-between items-center">
          <span>© 2024 Helena Hadjitournos</span>
          <a href="mailto:hhadjitournos@gmail.com" style={{ color: 'oklch(0.45 0.22 264)' }}>
            hhadjitournos@gmail.com
          </a>
        </div>
      </footer>
    </div>
    </>
  );
}
