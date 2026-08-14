/*
  MobileNav — Navigation mobile (hamburger)
  Charte : fond blanc, bleu #3B3FD8 en accent
*/

import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import TallyLogo from './TallyLogo';

const projects = [
  { slug: 'city-manager', label: 'City Manager', year: '2024', isNew: true },
  { slug: 'design-system', label: 'Design System Multi-Produits', year: '2024' },
  { slug: 'territoire-360', label: 'Territoire 360', year: '2024' },
  { slug: 'elm-codata', label: 'ELM by Codata', year: '2024', isNew: true },
  { slug: 'proveil', label: 'Proveil', year: '2023' },
  { slug: 'interprete-de-reves', label: "L'Interprète de Rêves", year: '2025', isNew: true },
  { slug: 'poc-llm-carto', label: 'Exploration IA & Cartographie', year: '2025', isNew: true },
  { slug: 'fioulreduc', label: 'Fioulreduc', year: '2023' },
  { slug: 'swaneo', label: 'Swaneo', year: '2023' },
  { slug: 'qg-media-libre', label: 'QG — Média Libre', year: '2020' },
  { slug: 'appvizer', label: 'Appvizer', year: '2020' },
  { slug: 'uptilab', label: 'Uptilab', year: '2017' },
  { slug: 'elements', label: 'Elements', year: '2020' },
  { slug: 'tao', label: 'TAO', year: '2019' },
  { slug: 'illustrations', label: 'Illustrations', year: '2020' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

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
              Tous les projets ↗
            </Link>
            <ul className="space-y-1 mb-8">
              {projects.map((p) => (
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
            <div style={{ borderTop: '1px solid oklch(0.91 0.02 264)', paddingTop: '1.5rem' }}>
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
