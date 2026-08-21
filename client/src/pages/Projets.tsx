/*
  Projets — Grille complète de tous les projets, sans narration.
  Pour qui préfère tout parcourir d'un coup plutôt que suivre les sections
  thématiques de la home.
*/

import { Link } from 'wouter';
import { useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import ProjectCard from '@/components/ProjectCard';
import { projects, FILTER_CATEGORIES, type FilterCategory } from '@/data/projects';
import { useLanguage } from '@/lib/i18n';

export default function Projets() {
  const { lang } = useLanguage();
  const [activeFilters, setActiveFilters] = useState<FilterCategory[]>([]);

  const toggleFilter = (id: FilterCategory) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filteredProjects = useMemo(() => {
    if (activeFilters.length === 0) return projects;
    return projects.filter((p) => p.categories.some((c) => activeFilters.includes(c)));
  }, [activeFilters]);

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
          <ArrowLeft size={13} /> {lang === 'en' ? 'Back to home' : "Retour à l'accueil"}
        </Link>
        <h1
          className="text-2xl sm:text-4xl font-bold mb-2"
          style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)', letterSpacing: '-0.02em' }}
        >
          {lang === 'en' ? 'All projects' : 'Tous les projets'}
        </h1>
        <p
          className="text-sm sm:text-base mb-6"
          style={{ color: 'oklch(0.4 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
        >
          {lang === 'en'
            ? `${filteredProjects.length} of ${projects.length} projects, from B2B SaaS product launches to art direction.`
            : `${filteredProjects.length} projet${filteredProjects.length > 1 ? 's' : ''} sur ${projects.length}, du lancement produit SaaS B2B à la direction artistique.`}
        </p>

        <div className="flex flex-wrap gap-2" role="group" aria-label={lang === 'en' ? 'Filter by category' : 'Filtrer par catégorie'}>
          {FILTER_CATEGORIES.map((cat) => {
            const active = activeFilters.includes(cat.id);
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => toggleFilter(cat.id)}
                aria-pressed={active}
                className="text-xs px-3 py-1.5 rounded-full transition-colors"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  border: active ? '1px solid oklch(0.45 0.22 264)' : '1px solid oklch(0.88 0.02 264)',
                  backgroundColor: active ? 'oklch(0.45 0.22 264)' : 'transparent',
                  color: active ? '#fff' : 'oklch(0.4 0.03 264)',
                  fontWeight: active ? 600 : 500,
                  cursor: 'pointer',
                }}
              >
                {lang === 'en' ? cat.en : cat.fr}
              </button>
            );
          })}
          {activeFilters.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveFilters([])}
              className="text-xs px-3 py-1.5 transition-opacity hover:opacity-70"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.5 0.04 264)', textDecoration: 'underline' }}
            >
              {lang === 'en' ? 'Clear filters' : 'Réinitialiser'}
            </button>
          )}
        </div>
      </header>

      <section className="content-col max-w-5xl lg:max-w-6xl xl:max-w-7xl pb-20">
        {filteredProjects.length > 0 ? (
          <div
            className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-x-3 sm:gap-x-6 gap-y-7 sm:gap-y-10"
          >
            {filteredProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={Math.min((i % 3) + 1, 6)} />
            ))}
          </div>
        ) : (
          <p
            className="text-sm py-10"
            style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
          >
            {lang === 'en' ? 'No projects match these filters.' : 'Aucun projet ne correspond à ces filtres.'}
          </p>
        )}
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
