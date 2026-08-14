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
    slugs: ['city-manager', 'territoire-360', 'elm-codata'],
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
    body: "L'IA m'intéresse comme outil de réflexion, pas comme argument marketing. Chez Explore, j'ai exploré la recherche en langage naturel sur un POC dont les fondations ont été reprises en production sur OneSearch. En parallèle, j'ai construit seule L'Interprète de Rêves, de l'idée à la mise en ligne, pour comprendre de l'intérieur ce que ça change de designer avec l'IA au quotidien, pas juste d'en parler.",
    slugs: ['interprete-de-reves', 'poc-llm-carto'],
  },
  {
    eyebrow: '04 : Organiser et structurer',
    title: 'Figma & Design System',
    body: "Sur 5 produits, je gérais plusieurs design systems en parallèle. J'ai contribué à leur convergence vers un système unique multi-produits : une source de vérité commune, des mises à jour propagées partout en une fois, et des nouvelles fonctionnalités qui s'implémentent plus vite, sans plus rien redévelopper en double. Je raconte ce chemin en détail dans l'étude de cas.",
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
      className="py-10 sm:py-14"
      style={{
        borderTop: index === 0 ? 'none' : '1px solid oklch(0.91 0.02 264)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl">
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
        className="pt-14 pb-16 sm:pt-20 sm:pb-24"
        style={{
          backgroundColor: '#3B3FD8',
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl flex flex-col sm:flex-row sm:items-start sm:gap-14">
          {/* Portrait mobile */}
          <div className="flex sm:hidden mb-6">
            <div
              className="w-24 h-24 rounded-full overflow-hidden"
              style={{ border: '3px solid rgba(255,255,255,0.85)', boxShadow: '5px 5px 0 rgba(255,255,255,0.15)' }}
            >
              <img src={PORTRAIT_URL} alt="Helena Hadjitournos" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Texte */}
          <div className="flex-1">
            <p
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Product Designer, Région nantaise
            </p>
            <h1
              className="text-4xl sm:text-6xl md:text-7xl mb-6"
              style={{ fontFamily: 'Jost, sans-serif', fontWeight: 700, color: '#fff', lineHeight: 1.02, letterSpacing: '-0.03em' }}
            >
              Helena<br />Hadjitournos
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed mb-6 max-w-md"
              style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
            >
              Product Designer senior, spécialisée en discovery et design systems pour des produits SaaS B2B. Direction artistique en parallèle depuis 2019 : deux façons de résoudre le même problème, poser la bonne stratégie et lui donner une forme qui donne envie.
            </p>
            <div className="flex gap-2 flex-wrap mb-7">
              {['UX Research', 'Product Design', 'UI Design', 'Design System', 'Direction Artistique'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.9)',
                    fontFamily: 'DM Sans, sans-serif',
                    letterSpacing: '0.02em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 transition-all"
                style={{ backgroundColor: '#fff', color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', borderRadius: '2px' }}
              >
                Me contacter
              </Link>
              <Link
                href="/projets"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 transition-all"
                style={{ color: '#fff', fontFamily: 'DM Sans, sans-serif', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '2px' }}
              >
                Voir tous les projets
              </Link>
            </div>
          </div>

          {/* Portrait desktop */}
          <div className="flex-shrink-0 hidden sm:block">
            <div
              className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden"
              style={{ border: '4px solid rgba(255,255,255,0.85)', boxShadow: '8px 8px 0 rgba(255,255,255,0.15)' }}
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
        className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl py-6 sm:py-8 text-xs"
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
