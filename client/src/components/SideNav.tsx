/*
  SideNav, Navigation latérale fixe
  Charte : fond blanc, bleu #3B3FD8 pour l'état actif
  Logo tally marks en haut, liens de navigation, contact en bas
*/

import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronDown } from 'lucide-react';
import TallyLogo from './TallyLogo';
import LanguageSwitcher from './LanguageSwitcher';
import { getProject } from '@/data/projects';
import { chapters } from '@/data/chapters';
import { useLanguage } from '@/lib/i18n';

export default function SideNav() {
  const [location] = useLocation();
  const { lang } = useLanguage();

  const activeChapterTitle = chapters.find((c) => c.slugs.some((s) => location === `/projet/${s}`))?.title.fr;
  const [openChapter, setOpenChapter] = useState<string | null>(activeChapterTitle ?? chapters[0].title.fr);

  return (
    <nav
      className="fixed top-0 left-0 h-screen w-52 flex flex-col border-r border-border bg-background z-50 py-8 px-6"
      style={{ borderColor: 'oklch(0.91 0.02 264)' }}
    >
      {/* Logo */}
      <Link href="/" className="mb-6 block">
        <TallyLogo mode="color" size={56} />
      </Link>

      <div className="mb-8">
        <LanguageSwitcher />
      </div>

      {/* Lien Work */}
      <div className="mb-3">
        <span
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
        >
          Work
        </span>
      </div>

      <Link
        href="/projets"
        className="text-sm mb-4 py-1.5 px-2 -mx-2 rounded-sm transition-colors"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          color: location === '/projets' ? 'oklch(0.45 0.22 264)' : 'oklch(0.4 0.03 264)',
          fontWeight: location === '/projets' ? 500 : 400,
          backgroundColor: location === '/projets' ? 'oklch(0.94 0.04 264)' : 'transparent',
        }}
      >
        {lang === 'en' ? 'All projects ↗' : 'Tous les projets ↗'}
      </Link>

      {/* Liste des projets, groupée par chapitre de la home, en accordéon */}
      <div className="flex flex-col gap-1 flex-1 overflow-y-auto">
        {chapters.map((chapter) => {
          const chapterProjects = chapter.slugs
            .map(getProject)
            .filter((p) => p && !p.comingSoon) as NonNullable<ReturnType<typeof getProject>>[];
          if (chapterProjects.length === 0) return null;

          const isOpen = openChapter === chapter.title.fr;

          return (
            <div key={chapter.title.fr}>
              <button
                onClick={() => setOpenChapter(isOpen ? null : chapter.title.fr)}
                className="w-full flex items-center justify-between py-1.5 -mx-0 group"
              >
                <span
                  className="text-[0.65rem] font-medium tracking-widest uppercase"
                  style={{ color: isOpen ? 'oklch(0.45 0.22 264)' : 'oklch(0.6 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {chapter.title[lang]}
                </span>
                <ChevronDown
                  size={13}
                  strokeWidth={2}
                  style={{
                    color: 'oklch(0.6 0.03 264)',
                    transform: isOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>
              {isOpen && (
                <ul className="flex flex-col gap-1 mt-1 mb-2">
                  {chapterProjects.map((p) => {
                    const isActive = location === `/projet/${p.slug}`;
                    return (
                      <li key={p.slug}>
                        <Link
                          href={`/projet/${p.slug}`}
                          className="flex items-center justify-between py-1.5 px-2 rounded-sm transition-colors group"
                          style={{
                            backgroundColor: isActive ? 'oklch(0.94 0.04 264)' : 'transparent',
                            color: isActive ? 'oklch(0.45 0.22 264)' : 'oklch(0.13 0.02 264)',
                          }}
                        >
                          <span
                            className="text-sm leading-tight"
                            style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: isActive ? 500 : 400 }}
                          >
                            {p.label}
                            {p.isNew && (
                              <span
                                className="ml-1.5 text-xs px-1 py-0.5 rounded-sm"
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
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* CV & Contact en bas */}
      <div className="mt-6 pt-6 flex flex-col gap-2" style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}>
        <Link
          href="/cv"
          className="text-sm transition-colors"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            color: location === '/cv' ? 'oklch(0.45 0.22 264)' : 'oklch(0.13 0.02 264)',
            fontWeight: location === '/cv' ? 500 : 400,
          }}
        >
          CV
        </Link>
        <Link
          href="/contact"
          className="text-sm transition-colors"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            color: location === '/contact' ? 'oklch(0.45 0.22 264)' : 'oklch(0.13 0.02 264)',
            fontWeight: location === '/contact' ? 500 : 400,
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
