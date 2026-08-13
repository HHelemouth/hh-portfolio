/*
  SideNav, Navigation latérale fixe
  Charte : fond blanc, bleu #3B3FD8 pour l'état actif
  Logo tally marks en haut, liens de navigation, contact en bas
*/

import { Link, useLocation } from 'wouter';
import TallyLogo from './TallyLogo';

const projects = [
  { slug: 'city-manager', label: 'City Manager', year: '2024', isNew: true },
  { slug: 'design-system', label: 'Design System Multi-Produits', year: '2024' },
  { slug: 'territoire-360', label: 'Territoire 360', year: '2024' },
  { slug: 'proveil', label: 'Proveil', year: '2023' },
  { slug: 'interprete-de-reves', label: "L'Interprète de Rêves", year: '2025', isNew: true },
  { slug: 'fioulreduc', label: 'Fioulreduc', year: '2023' },
  { slug: 'swaneo', label: 'Swaneo', year: '2023' },
  { slug: 'qg-media-libre', label: 'QG — Média Libre', year: '2020' },
  { slug: 'appvizer', label: 'Appvizer', year: '2020' },
  { slug: 'uptilab', label: 'Uptilab', year: '2017' },
  { slug: 'elements', label: 'Elements', year: '2020' },
  { slug: 'tao', label: 'TAO', year: '2019' },
  { slug: 'illustrations', label: 'Illustrations', year: '2020' },
];

export default function SideNav() {
  const [location] = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 h-screen w-52 flex flex-col border-r border-border bg-background z-50 py-8 px-6"
      style={{ borderColor: 'oklch(0.91 0.02 264)' }}
    >
      {/* Logo */}
      <Link href="/" className="mb-10 block">
        <TallyLogo mode="color" size={56} />
      </Link>

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
        className="text-sm mb-3 py-1.5 px-2 -mx-2 rounded-sm transition-colors"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          color: location === '/projets' ? 'oklch(0.45 0.22 264)' : 'oklch(0.4 0.03 264)',
          fontWeight: location === '/projets' ? 500 : 400,
          backgroundColor: location === '/projets' ? 'oklch(0.94 0.04 264)' : 'transparent',
        }}
      >
        Tous les projets ↗
      </Link>

      {/* Liste des projets */}
      <ul className="flex flex-col gap-1 flex-1 overflow-y-auto">
        {projects.map((p) => {
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

      {/* Contact en bas */}
      <div className="mt-6 pt-6" style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}>
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
