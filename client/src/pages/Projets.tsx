/*
  Projets — Grille complète de tous les projets, sans narration.
  Pour qui préfère tout parcourir d'un coup plutôt que suivre les sections
  thématiques de la home.
*/

import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Projets() {
  return (
    <>
    <SEOHead title="Tous les projets" canonicalPath="/projets" />
    <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>
      <header className="content-col max-w-5xl lg:max-w-6xl xl:max-w-7xl pt-10 sm:pt-16 pb-8 sm:pb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs mb-6 transition-opacity hover:opacity-70"
          style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
        >
          <ArrowLeft size={13} /> Retour à l'accueil
        </Link>
        <h1
          className="text-2xl sm:text-4xl font-bold mb-2"
          style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)', letterSpacing: '-0.02em' }}
        >
          Tous les projets
        </h1>
        <p
          className="text-sm sm:text-base"
          style={{ color: 'oklch(0.4 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
        >
          {projects.length} projets, du lancement produit SaaS B2B à la direction artistique.
        </p>
      </header>

      <section className="content-col max-w-5xl lg:max-w-6xl xl:max-w-7xl pb-20">
        <div
          className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-x-3 sm:gap-x-6 gap-y-7 sm:gap-y-10"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={Math.min((i % 3) + 1, 6)} />
          ))}
        </div>
      </section>

      <footer
        className="content-col max-w-5xl lg:max-w-6xl xl:max-w-7xl py-6 sm:py-8 text-xs"
        style={{
          borderTop: '1px solid oklch(0.91 0.02 264)',
          color: 'oklch(0.6 0.04 264)',
          fontFamily: 'DM Sans, sans-serif',
        }}
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
