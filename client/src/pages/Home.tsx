/*
  Home, Page d'accueil du portfolio
  Charte : fond blanc, bleu #3B3FD8 en accent, Syne + DM Sans
  Layout : hero asymétrique (texte gauche / portrait droite) + grille 3 colonnes
  Principe : les projets respirent, la charte ne les écrase pas
*/

import { Link } from 'wouter';
import { useEffect, useRef, useState } from 'react';
import SEOHead from '@/components/SEOHead';

const PORTRAIT_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/portrait_060f4807.jpg';

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2';

const projects = [
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
    isNew: true,
    thumb: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/design-system-thumb_12c23e67.png',
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
    slug: 'proveil',
    label: 'Proveil',
    year: '2023',
    isNew: true,
    tags: ['UX Research', 'Test Hassenzahl', 'Refonte'],
    thumb: '/proveil/ui-fiche-approbation.png',
    color: '#0F4C81',
  },
  {
    slug: 'interprete-de-reves',
    label: "L'Interprète de Rêves",
    year: '2025',
    isNew: true,
    tags: ['Product Design', 'Développement', 'IA', 'Product Building'],
    thumb: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/reves_hero_29ad58f1.webp',
    color: '#8B4513',
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
    thumb: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028937907/jeldpRkzsskdmBoA.png',
    color: '#2D5A3D',
  },
  {
    slug: 'tao',
    label: 'TAO',
    year: '2019',
    tags: ['Direction artistique', 'Identité visuelle', 'Logo'],
    thumb: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028937907/fMeGzhgPiAzOUaru.webp',
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

function useIntersection(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersection(ref as React.RefObject<Element>);

  return (
    <div
      ref={ref}
      className={`fade-up fade-up-delay-${delay}`}
      style={{ opacity: visible ? 1 : 0, animationPlayState: visible ? 'running' : 'paused' }}
    >
      <Link href={`/projet/${project.slug}`}>
        <div className="project-card group">
          {project.thumb ? (
            <img
              src={project.thumb}
              alt={project.label}
              loading="lazy"
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#3B3FD8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'Jost, sans-serif', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em', textAlign: 'center', padding: '0 1rem' }}>Design System</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Multi-Produits · Figma</span>
            </div>
          )}
          <div className="overlay">
            <span className="overlay-title">{project.label}</span>
            <div className="overlay-tags">
              {project.tags.map((t) => (
                <span key={t} className="overlay-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2.5 px-0.5">
          <p
            className="text-sm font-medium leading-tight"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.13 0.02 264)' }}
          >
            {project.label}
            {project.isNew && (
              <span
                className="ml-2 text-xs px-1.5 py-0.5 rounded-sm"
                style={{
                  backgroundColor: 'oklch(0.45 0.22 264)',
                  color: '#fff',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  verticalAlign: 'middle',
                }}
              >
                new
              </span>
            )}
          </p>

        </div>
      </Link>
    </div>
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
        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 max-w-3xl">
          {/* Portrait mobile — au-dessus du texte */}
          <div className="flex sm:hidden mb-5">
            <div
              className="w-20 h-20 rounded-full overflow-hidden"
              style={{
                border: '2px solid oklch(0.45 0.22 264)',
                boxShadow: '4px 4px 0 oklch(0.94 0.04 264)',
              }}
            >
              <img
                src={PORTRAIT_URL}
                alt="Helena Hadjitournos"
                className="w-full h-full object-cover"
              />
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
              Je conçois des produits digitaux centrés sur l'humain, de la discovery à l'interface. 
              Spécialisée en UX produit, j'interviens en amont pour définir les bons problèmes avant de les résoudre.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="mission-tag">UX Research</span>
              <span className="mission-tag">Product Design</span>
              <span className="mission-tag">UI Design</span>
              <span className="mission-tag">Design System</span>
            </div>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 transition-all"
                style={{
                  backgroundColor: 'oklch(0.45 0.22 264)',
                  color: '#fff',
                  fontFamily: 'DM Sans, sans-serif',
                  borderRadius: '2px',
                }}
              >
                Me contacter
              </Link>
            </div>
          </div>

          {/* Portrait desktop */}
          <div className="flex-shrink-0 hidden sm:block">
            <div
              className="w-36 h-36 rounded-full overflow-hidden"
              style={{
                border: '3px solid oklch(0.45 0.22 264)',
                boxShadow: '6px 6px 0 oklch(0.94 0.04 264)',
              }}
            >
              <img
                src={PORTRAIT_URL}
                alt="Helena Hadjitournos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SÉPARATEUR ── */}
      <div className="px-5 sm:px-10 mb-8 sm:mb-10">
        <div
          className="h-px w-full"
          style={{ backgroundColor: 'oklch(0.91 0.02 264)' }}
        />
      </div>

      {/* ── GRILLE PROJETS ── */}
      <section className="px-5 sm:px-10 pb-20">
        <h2
          className="section-title text-xs uppercase mb-6 sm:mb-8"
          style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'Jost, sans-serif', fontWeight: 500, letterSpacing: '0.18em' }}
        >
          Projets sélectionnés
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-6 gap-y-7 sm:gap-y-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={Math.min((i % 3) + 1, 6)} />
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="px-5 sm:px-10 py-6 sm:py-8 text-xs"
        style={{
          borderTop: '1px solid oklch(0.91 0.02 264)',
          color: 'oklch(0.6 0.04 264)',
          fontFamily: 'DM Sans, sans-serif',
        }}
      >
        <div className="flex justify-between items-center">
          <span>© 2024 Helena Hadjitournos</span>
          <a
            href="mailto:hhadjitournos@gmail.com"
            style={{ color: 'oklch(0.45 0.22 264)' }}
          >
            hhadjitournos@gmail.com
          </a>
        </div>
      </footer>
    </div>
    </>
  );
}
