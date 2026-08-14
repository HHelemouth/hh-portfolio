/*
  CaseStudyHeader — En-tête unique pour toutes les études de cas.
  Garantit une typographie, un espacement et une structure identiques
  d'une page projet à l'autre : lien retour, tags, titre, description,
  grille méta optionnelle (Rôle / Contexte / etc.)
*/

import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

interface MetaItem {
  label: string;
  value: string;
}

export default function CaseStudyHeader({
  title,
  tags,
  description,
  meta,
  backHref = '/',
  backLabel = 'Retour aux projets',
}: {
  title: string;
  tags: string[];
  description: string;
  meta?: MetaItem[];
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header
      className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl pt-8 pb-8 sm:pt-12 sm:pb-10"
      style={{ borderBottom: '1px solid oklch(0.91 0.02 264)' }}
    >
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-xs mb-8 transition-opacity hover:opacity-70"
        style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
      >
        <ArrowLeft size={13} /> {backLabel}
      </Link>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full"
            style={{
              backgroundColor: 'oklch(0.94 0.04 264)',
              color: '#3B3FD8',
              fontFamily: 'DM Sans, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <h1
        className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4"
        style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
      >
        {title}
      </h1>
      <p
        className="text-sm sm:text-lg max-w-2xl"
        style={{ color: 'oklch(0.35 0.03 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}
      >
        {description}
      </p>

      {meta && meta.length > 0 && (
        <div
          className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8"
          style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}
        >
          {meta.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}>
                {item.label}
              </p>
              <p className="text-sm font-medium" style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
