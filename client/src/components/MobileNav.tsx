/*
  MobileNav — Navigation mobile (hamburger)
  Charte : fond blanc, bleu #3B3FD8 en accent
*/

import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import TallyLogo from './TallyLogo';
import LanguageSwitcher from './LanguageSwitcher';
import { getProject } from '@/data/projects';
import { chapters } from '@/data/chapters';
import { useLanguage } from '@/lib/i18n';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { lang } = useLanguage();

  return (
    <div className="md:hidden">
      {/* Barre mobile */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3"
        style={{ backgroundColor: '#fff', borderBottom: '1px solid oklch(0.91 0.02 264)' }}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <TallyLogo mode="color" size={44} />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className="block w-5 h-0.5 transition-all"
            style={{
              backgroundColor: 'oklch(0.13 0.02 264)',
              transform: open ? 'rotate(45deg) translateY(8px)' : 'none',
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all"
            style={{
              backgroundColor: 'oklch(0.13 0.02 264)',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all"
            style={{
              backgroundColor: 'oklch(0.13 0.02 264)',
              transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 pt-14"
          style={{ backgroundColor: '#fff' }}
        >
          <nav className="px-6 py-8">
            <div className="mb-6">
              <LanguageSwitcher />
            </div>
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Work
            </p>
            <Link
              href="/projets"
              onClick={() => setOpen(false)}
              className="block text-sm mb-4 py-2 px-3 -mx-3 rounded-sm"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: location === '/projets' ? 'oklch(0.45 0.22 264)' : 'oklch(0.4 0.03 264)',
                fontWeight: location === '/projets' ? 500 : 400,
                backgroundColor: location === '/projets' ? 'oklch(0.94 0.04 264)' : 'transparent',
              }}
            >
              {lang === 'en' ? 'All projects ↗' : 'Tous les projets ↗'}
            </Link>
            <div className="mb-8 space-y-5">
              {chapters.map((chapter) => {
                const chapterProjects = chapter.slugs
                  .map(getProject)
                  .filter((p) => p && !p.comingSoon) as NonNullable<ReturnType<typeof getProject>>[];
                if (chapterProjects.length === 0) return null;

                return (
                  <div key={chapter.title.fr}>
                    <p
                      className="text-[0.65rem] uppercase tracking-widest mb-1.5"
                      style={{ color: 'oklch(0.6 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {chapter.title[lang]}
                    </p>
                    <ul className="space-y-1">
                      {chapterProjects.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/projet/${p.slug}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between py-2.5 px-3 rounded-sm"
                            style={{
                              backgroundColor: location === `/projet/${p.slug}` ? 'oklch(0.94 0.04 264)' : 'transparent',
                              color: location === `/projet/${p.slug}` ? 'oklch(0.45 0.22 264)' : 'oklch(0.13 0.02 264)',
                            }}
                          >
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem' }}>
                              {p.label}
                              {p.isNew && (
                                <span
                                  className="ml-2 px-1.5 py-0.5 rounded-sm"
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
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div style={{ borderTop: '1px solid oklch(0.91 0.02 264)', paddingTop: '1.5rem' }} className="flex flex-col gap-3">
              <Link
                href="/cv"
                onClick={() => setOpen(false)}
                style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.13 0.02 264)', fontSize: '0.95rem' }}
              >
                CV
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.13 0.02 264)', fontSize: '0.95rem' }}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
