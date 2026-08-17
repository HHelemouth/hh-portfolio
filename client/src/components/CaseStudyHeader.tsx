/*
  CaseStudyHeader — En-tête unique pour toutes les études de cas.
  Garantit une typographie, un espacement et une structure identiques
  d'une page projet à l'autre : lien retour, tags, titre, description,
  grille méta optionnelle (Rôle / Contexte / etc.)
*/

import { Link } from 'wouter';
import { ArrowLeft, Info } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface MetaItem {
  label: string;
  value: string;
}

export default function CaseStudyHeader({
  title,
  titleEn,
  tags,
  tagsEn,
  description,
  descriptionEn,
  meta,
  metaEn,
  backHref = '/',
  backLabel = 'Retour aux projets',
  bodyTranslated = false,
}: {
  title: string;
  titleEn?: string;
  tags: string[];
  tagsEn?: string[];
  description: string;
  descriptionEn?: string;
  meta?: MetaItem[];
  metaEn?: MetaItem[];
  backHref?: string;
  backLabel?: string;
  /** Passe à true une fois que le corps de la page a aussi été traduit en anglais */
  bodyTranslated?: boolean;
}) {
  const { lang } = useLanguage();
  const isEn = lang === 'en';
  const activeMeta = isEn && metaEn ? metaEn : meta;

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
        <ArrowLeft size={13} /> {isEn ? 'Back to projects' : backLabel}
      </Link>

      <div className="flex flex-wrap gap-2 mb-4">
        {(isEn && tagsEn ? tagsEn : tags).map((t) => (
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
        {isEn && titleEn ? titleEn : title}
      </h1>
      <p
        className="text-sm sm:text-lg max-w-2xl"
        style={{ color: 'oklch(0.35 0.03 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}
      >
        {isEn && descriptionEn ? descriptionEn : description}
      </p>

      {activeMeta && activeMeta.length > 0 && (
        <div
          className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8"
          style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}
        >
          {activeMeta.map((item) => (
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

      {isEn && !bodyTranslated && (
        <div
          className="mt-6 flex items-start gap-2 text-xs px-4 py-3 rounded-sm"
          style={{ backgroundColor: 'oklch(0.96 0.03 90)', color: 'oklch(0.4 0.08 90)', fontFamily: 'DM Sans, sans-serif' }}
        >
          <Info size={14} className="flex-shrink-0 mt-0.5" />
          <span>The rest of this case study is currently written in French only. Happy to walk through it in English directly.</span>
        </div>
      )}
    </header>
  );
}
