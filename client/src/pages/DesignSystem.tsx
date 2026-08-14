/*
  DesignSystem.tsx, Cas d'étude : Design System Multi-Produits (Intescia)
  Charte : Jost pour les titres, DM Sans pour le corps, bleu #3B3FD8 en accent
  Structure : même pattern à onglets que les autres études de cas, + navigation
  Précédent/Suivant en bas de chaque chapitre (contenu plus narratif qu'ailleurs).
*/

import { useState } from 'react';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import CaseStudyHeader from '@/components/CaseStudyHeader';

const CHAPTERS = [
  { id: 'contexte', label: 'Contexte' },
  { id: 'primitif-semantique', label: 'Primitif ou sémantique' },
  { id: 'architecture', label: 'Architecture en 4 niveaux' },
  { id: 'epreuve-reel', label: "L'épreuve du réel" },
  { id: 'retenir', label: "Ce qu'on retient" },
];

function PrevNext({ current }: { current: string }) {
  const i = CHAPTERS.findIndex((c) => c.id === current);
  const prev = i > 0 ? CHAPTERS[i - 1] : null;
  const next = i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : null;
  return (
    <div
      className="mt-12 sm:mt-16 pt-6 sm:pt-8 flex justify-between items-center gap-4"
      style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}
    >
      {prev ? (
        <button
          onClick={() => document.getElementById('ds-nav-' + prev.id)?.click()}
          className="text-sm transition-opacity hover:opacity-60"
          style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif' }}
        >
          ← {prev.label}
        </button>
      ) : <span />}
      {next ? (
        <button
          onClick={() => document.getElementById('ds-nav-' + next.id)?.click()}
          className="text-sm px-4 py-2 rounded-sm transition-opacity hover:opacity-80"
          style={{ backgroundColor: 'oklch(0.42 0.22 264)', color: '#fff', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
        >
          {next.label} →
        </button>
      ) : <span />}
    </div>
  );
}

export default function DesignSystem() {
  const [active, setActive] = useState('contexte');

  return (
    <>
    <SEOHead
      title="Design System Multi-Produits"
      description="Construction d'un design system pour 7 produits chez Intescia. Architecture en 4 niveaux, tokens sémantiques, Extended Collection Figma."
      canonicalPath="/projet/design-system"
    />
    <div className="min-h-screen w-full" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>

      <CaseStudyHeader
        title="Construire un design system pour 7 produits"
        tags={['Design System', 'Figma', 'Multi-produits', 'Tokens']}
        description="Ce que personne ne vous dit sur le chemin."
        meta={[
          { label: 'Entreprise', value: 'Intescia' },
          { label: 'Rôle', value: 'Product Designer' },
          { label: 'Périmètre', value: '7 produits · 2 entités' },
          { label: 'Outil', value: 'Figma · Variables' },
        ]}
      />

      {/* Navigation par onglets */}
      <nav
        className="sticky top-14 md:top-0 z-40 overflow-x-auto"
        style={{
          backgroundColor: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottom: '2px solid oklch(0.91 0.02 264)',
          boxShadow: '0 2px 12px rgba(59,63,216,0.08)',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
        } as React.CSSProperties}
      >
        <div className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl flex gap-0 min-w-max">
          {CHAPTERS.map((ch) => (
            <button
              key={ch.id}
              id={'ds-nav-' + ch.id}
              onClick={() => setActive(ch.id)}
              className="px-2 sm:px-4 py-3 sm:py-4 text-[11px] sm:text-sm transition-all whitespace-nowrap relative"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: active === ch.id ? 700 : 400,
                color: active === ch.id ? '#3B3FD8' : 'oklch(0.35 0.02 264)',
                borderBottom: active === ch.id ? '3px solid #3B3FD8' : '3px solid transparent',
                background: active === ch.id ? 'rgba(59,63,216,0.06)' : 'none',
                cursor: 'pointer',
                letterSpacing: active === ch.id ? '0' : '0.01em',
              }}
            >
              {ch.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl py-8 sm:py-14">

        {/* ── CONTEXTE ── */}
        {active === 'contexte' && (
          <section>
            <p
              className="text-base md:text-lg italic mb-6"
              style={{
                color: 'oklch(0.4 0.02 264)',
                fontFamily: 'DM Sans, sans-serif',
                lineHeight: 1.7,
                borderLeft: '3px solid #3B3FD8',
                paddingLeft: '1.5rem',
              }}
            >
              Cet article n'est pas un guide méthodologique. C'est le récit honnête de notre parcours, nos doutes, nos frictions et les leçons apprises en construisant un écosystème de design system pour sept produits chez Intescia.
            </p>
            <p
              className="text-base mb-10"
              style={{ color: 'oklch(0.3 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}
            >
              Il y a deux ans, Intescia a été façonnée par le rachat de plusieurs entités aux cultures distinctes, notamment les groupes Explore et Insight. Cette fusion a donné naissance à un portefeuille de sept produits, mais aussi à un paysage design profondément fragmenté : des design systems à des niveaux de maturité très différents, une dette qui se creusait à chaque sprint, et une expérience utilisateur qui perdait en cohérence à travers tout l'écosystème.
            </p>

            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-5"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)', lineHeight: 1.25 }}
            >
              Un groupe, deux entités, sept produits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: '1', text: 'Deux entités fusionnées, des cultures design très différentes' },
                { num: '2', text: '7 produits, des design systems à des maturités très différentes' },
                { num: '3', text: 'Une Extended Collection déjà bien engagée quand on a rejoint le projet' },
                { num: '4', text: 'Une équipe qui découvrait l\'Extended Collection' },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ backgroundColor: '#3B3FD8' }}
                >
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', fontFamily: 'Jost, sans-serif' }}
                  >
                    {item.num}
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <PrevNext current="contexte" />
          </section>
        )}

        {/* ── PRIMITIF OU SÉMANTIQUE ── */}
        {active === 'primitif-semantique' && (
          <section>
            <span
              className="text-xs uppercase tracking-widest mb-3 block"
              style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
            >
              La première question
            </span>
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.25, color: 'oklch(0.13 0.02 264)' }}
            >
              Primitif ou sémantique ?
            </h2>
            <p
              className="text-base mb-10"
              style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}
            >
              Le premier obstacle n'a pas été technique, mais conceptuel. Deux visions de l'organisation des design tokens se sont rapidement opposées au sein de l'équipe.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div
                className="p-6 rounded-xl border"
                style={{ borderColor: 'oklch(0.88 0.02 264)', backgroundColor: 'oklch(0.97 0.01 264)' }}
              >
                <div
                  className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest font-semibold"
                  style={{ color: 'oklch(0.55 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  <span style={{ color: '#e53e3e' }}>✕</span> Primitif seul
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  {['color/red-500', 'color/blue-dark-500', 'color/grey-100'].map((t) => (
                    <span
                      key={t}
                      className="text-sm px-3 py-1.5 rounded line-through break-all"
                      style={{ backgroundColor: 'oklch(0.92 0.02 264)', color: 'oklch(0.55 0.02 264)', fontFamily: 'monospace' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs" style={{ color: 'oklch(0.55 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
                  Le nom décrit la valeur. Pas l'usage. Le designer doit interpréter.
                </p>
              </div>

              <div
                className="p-6 rounded-xl border"
                style={{ borderColor: 'oklch(0.82 0.08 264)', backgroundColor: 'oklch(0.95 0.04 264)' }}
              >
                <div
                  className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest font-semibold"
                  style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
                >
                  <span>✓</span> Sémantique
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  {['color/background/subtle/error', 'color/text/primary', 'color/border/focus'].map((t) => (
                    <span
                      key={t}
                      className="text-sm px-3 py-1.5 rounded break-all"
                      style={{ backgroundColor: 'rgba(59,63,216,0.1)', color: '#3B3FD8', fontFamily: 'monospace' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
                  Le nom dit à quoi ça sert. Aucune interprétation nécessaire.
                </p>
              </div>
            </div>

            <div
              className="p-5 rounded-xl mb-10"
              style={{ backgroundColor: 'oklch(0.95 0.04 264)', borderLeft: '3px solid #3B3FD8' }}
            >
              <p className="text-base font-medium" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
                La différence semble petite. Elle change tout à l'échelle de 7 produits.
              </p>
            </div>

            <p className="text-sm mb-4 font-medium" style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}>
              Pour objectiver le débat, nous nous sommes appuyés sur les standards de l'industrie :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: 'oklch(0.95 0.03 264)' }}>
                    <th className="text-left px-4 py-3 text-xs uppercase tracking-wider" style={{ color: 'oklch(0.45 0.08 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>Source</th>
                    <th className="text-left px-4 py-3 text-xs uppercase tracking-wider" style={{ color: 'oklch(0.45 0.08 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>Architecture de tokens</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { src: 'Google Material Design 3', arch: 'Ref tokens (primitifs) → Sys tokens (sémantiques) → Comp tokens' },
                    { src: 'Salesforce Lightning', arch: 'Global tokens (primitifs) → Alias tokens (sémantiques)' },
                    { src: 'Atlassian Design System', arch: 'Base tokens (primitifs) → Semantic tokens (sémantiques)' },
                    { src: 'Adobe Spectrum', arch: 'Global tokens (primitifs) → Semantic tokens → Component tokens' },
                  ].map((row, i) => (
                    <tr key={row.src} style={{ backgroundColor: i % 2 === 0 ? 'white' : 'oklch(0.98 0.01 264)', borderBottom: '1px solid oklch(0.92 0.02 264)' }}>
                      <td className="px-4 py-3 font-medium" style={{ color: 'oklch(0.2 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}>{row.src}</td>
                      <td className="px-4 py-3" style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'monospace', fontSize: '0.8rem' }}>{row.arch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <PrevNext current="primitif-semantique" />
          </section>
        )}

        {/* ── ARCHITECTURE EN 4 NIVEAUX ── */}
        {active === 'architecture' && (
          <section>
            <span className="text-xs uppercase tracking-widest mb-3 block" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>
              La structure
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.25, color: 'oklch(0.13 0.02 264)' }}>
              Une architecture en 4 niveaux
            </h2>

            <div className="flex flex-col gap-3 mb-10">
              {[
                { num: '1', title: 'Primitives', desc: 'Les valeurs brutes, jamais utilisées directement. Palette complète, toutes les tailles, toutes les graisses. Non publiées, cachées des designers.' },
                { num: '2', title: 'Tokens sémantiques (Extended Collection)', desc: 'in-background · in-border · in-icon · in-text · in-color. Chaque token est un alias vers une primitive. Grâce aux modes Figma, chaque produit surcharge uniquement ses valeurs propres.' },
                { num: '3', title: 'Core DS', desc: 'Les composants communs, boutons, inputs, modals. Chaque propriété pointe vers un token sémantique, jamais vers une primitive. Aucune valeur en dur.' },
                { num: '4', title: 'DS Produits × 7', desc: 'Chacun des sept produits active simplement le bon mode, tout s\'adapte automatiquement.' },
              ].map((item, i) => (
                <div key={item.num}>
                  <div className="flex items-start gap-5 p-5 rounded-xl" style={{ backgroundColor: '#3B3FD8' }}>
                    <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', fontFamily: 'Jost, sans-serif' }}>
                      {item.num}
                    </span>
                    <div>
                      <p className="font-semibold text-white mb-1" style={{ fontFamily: 'Jost, sans-serif', fontSize: '1rem' }}>{item.title}</p>
                      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="flex justify-center py-1">
                      <span style={{ color: 'oklch(0.7 0.05 264)', fontSize: '1.2rem' }}>↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <span className="text-xs uppercase tracking-widest mb-3 block" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>
              Le principe des modes
            </span>
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Un composant, 7 produits
            </h3>
            <p className="text-base mb-8" style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}>
              Le même bouton dans le Core DS. Le mode fait tout le travail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {[
                { label: 'Mode Produit 1 activé →', bg: '#38b2ac', text: 'Découvrir' },
                { label: 'Mode Produit 2 activé →', bg: '#4299e1', text: 'Découvrir' },
                { label: 'Mode Produit 3 activé →', bg: '#3B3FD8', text: 'Découvrir' },
              ].map((btn) => (
                <div key={btn.label}>
                  <p className="text-xs mb-2" style={{ color: 'oklch(0.55 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}>{btn.label}</p>
                  <button className="px-6 py-3 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: btn.bg, fontFamily: 'DM Sans, sans-serif', cursor: 'default' }}>
                    {btn.text}
                  </button>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl mb-10" style={{ backgroundColor: 'oklch(0.95 0.04 264)', borderLeft: '3px solid #3B3FD8' }}>
              <p className="text-base font-medium" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
                Aucune duplication de composant. Une seule source de vérité. Le mode résout tout.
              </p>
            </div>

            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Les catégories sémantiques de couleur
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: 'oklch(0.95 0.03 264)' }}>
                    {['Catégorie', 'Usage', 'Exemple'].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-xs uppercase tracking-wider" style={{ color: 'oklch(0.45 0.08 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: 'in-background', usage: 'Couleurs de fond d\'éléments', ex: 'in-background/subtle, in-background/error' },
                    { cat: 'in-border', usage: 'Couleurs de bordures', ex: 'in-border/default, in-border/focus' },
                    { cat: 'in-icon', usage: 'Couleurs d\'icônes', ex: 'in-icon/default, in-icon/muted' },
                    { cat: 'in-text', usage: 'Couleurs de texte', ex: 'in-text/default, in-text/muted' },
                    { cat: 'in-color', usage: 'Couleurs transversales (statuts, marque)', ex: 'in-color/status/success, in-color/brand/primary' },
                  ].map((row, i) => (
                    <tr key={row.cat} style={{ backgroundColor: i % 2 === 0 ? 'white' : 'oklch(0.98 0.01 264)', borderBottom: '1px solid oklch(0.92 0.02 264)' }}>
                      <td className="px-4 py-3 font-medium" style={{ color: '#3B3FD8', fontFamily: 'monospace', fontSize: '0.82rem' }}>{row.cat}</td>
                      <td className="px-4 py-3" style={{ color: 'oklch(0.3 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}>{row.usage}</td>
                      <td className="px-4 py-3" style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'monospace', fontSize: '0.78rem' }}>{row.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <PrevNext current="architecture" />
          </section>
        )}

        {/* ── L'ÉPREUVE DU RÉEL ── */}
        {active === 'epreuve-reel' && (
          <section>
            <span className="text-xs uppercase tracking-widest mb-3 block" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>
              L'anecdote qui dit tout
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.25, color: 'oklch(0.13 0.02 264)' }}>
              size/14 = 12px
            </h2>
            <p className="text-base mb-8" style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}>
              Pendant des heures, un composant affichait la mauvaise taille de police. Toute la chaîne semblait correcte.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl border" style={{ borderColor: 'oklch(0.88 0.02 264)', backgroundColor: 'oklch(0.97 0.01 264)' }}>
                <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: 'oklch(0.55 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}>Le problème</p>
                <span className="inline-block text-sm px-3 py-1.5 rounded mb-3 line-through" style={{ backgroundColor: 'oklch(0.92 0.02 264)', color: 'oklch(0.55 0.02 264)', fontFamily: 'monospace' }}>
                  Primitives/size/14 → 12px
                </span>
                <p className="text-sm" style={{ color: 'oklch(0.5 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
                  Un doublon créé par erreur. Une valeur silencieusement fausse depuis le début.
                </p>
              </div>

              <div className="p-6 rounded-xl border" style={{ borderColor: 'oklch(0.82 0.08 264)', backgroundColor: 'oklch(0.95 0.04 264)' }}>
                <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>La leçon</p>
                <p className="text-sm mb-2" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
                  Une architecture rigoureuse n'est pas du perfectionnisme.
                </p>
                <p className="text-sm font-bold" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>
                  C'est de la survie.
                </p>
              </div>
            </div>

            <p className="text-base mb-10" style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}>
              Le second défi fut plus conceptuel : sur notre composant CTA, la taille de l'icône devait être fixe sur un produit mais variable sur un autre. Les modes de variables ont offert une solution élégante, un seul composant Core qui s'adapte intelligemment à chaque contexte.
            </p>

            <span className="text-xs uppercase tracking-widest mb-3 block" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>
              Ce que les guides ne disent pas
            </span>
            <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Prendre les décisions au bon moment
            </h3>
            <p className="text-base mb-8" style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}>
              Ce qui évite les frictions entre designers, devs et PO, et évite de devoir tout reprendre en cours de route.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {[
                'Impliquer les designers avant que la structure soit figée',
                'Aligner les expertises UX, dev et produit dès le départ',
                'Partager un vocabulaire commun avant de construire',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', marginTop: '2px' }}>→</span>
                  <p className="text-base" style={{ color: 'oklch(0.3 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl mb-6" style={{ backgroundColor: 'oklch(0.95 0.04 264)', borderLeft: '3px solid #3B3FD8' }}>
              <p className="text-base font-medium" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>
                L'architecture parfaite n'existe pas. Il existe celle que votre organisation est capable de maintenir ensemble.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ backgroundColor: 'oklch(0.97 0.01 264)', border: '1px solid oklch(0.88 0.02 264)' }}>
              <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: 'oklch(0.55 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}>
                Dette consciente assumée
              </p>
              <p className="text-sm" style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
                La couche <span style={{ fontFamily: 'monospace', color: '#3B3FD8' }}>in-component</span> n'a pas été gardée. Un risque réel si un produit a besoin d'un delta sur un composant spécifique. Documenté comme dette consciente, pas pour s'en plaindre, mais pour ne pas l'oublier.
              </p>
            </div>

            <PrevNext current="epreuve-reel" />
          </section>
        )}

        {/* ── CE QU'ON RETIENT ── */}
        {active === 'retenir' && (
          <section>
            <span className="text-xs uppercase tracking-widest mb-3 block" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>
              Ce qu'on retient
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.25, color: 'oklch(0.13 0.02 264)' }}>
              3 choses qu'on referait pareil
            </h2>

            <div className="flex flex-col gap-4 mb-12">
              {[
                { num: '1', text: 'S\'appuyer sur les standards de l\'industrie, Material, Atlassian, Spectrum. Ce n\'est pas une opinion, c\'est documenté.' },
                { num: '2', text: 'Documenter le chemin, pas seulement le résultat. L\'hésitation est aussi une information.' },
                { num: '3', text: 'Impliquer les devs tôt. Ce sont les meilleurs arbitres des décisions d\'architecture.' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-5 p-5 rounded-xl" style={{ backgroundColor: '#3B3FD8' }}>
                  <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', fontFamily: 'Jost, sans-serif' }}>
                    {item.num}
                  </span>
                  <p className="text-base" style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}>{item.text}</p>
                </div>
              ))}
            </div>

            <span className="text-xs uppercase tracking-widest mb-3 block" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>
              La leçon la plus précieuse
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.25, color: 'oklch(0.13 0.02 264)' }}>
              Ne pas avancer la tête dans le guidon
            </h3>

            <blockquote
              className="text-lg italic mb-8"
              style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7, borderLeft: '3px solid #3B3FD8', paddingLeft: '1.5rem' }}
            >
              « L'important, ce n'est peut-être pas le résultat, mais le chemin parcouru. »
            </blockquote>

            <p className="text-base mb-6" style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}>
              Le plus grand gain de ces derniers mois n'est pas l'architecture de tokens. C'est la compétence collective développée en tant qu'équipe, apprendre à débattre d'idées complexes, à s'appuyer sur des standards externes pour dépasser les opinions, et à tracer une erreur avec méthode.
            </p>

            <p className="text-base" style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}>
              Un design system n'est pas un livrable, c'est un organisme vivant, fait de logique, de code, mais aussi de compromis humains. Et c'est peut-être ça, la véritable définition d'un design system en entreprise : <strong style={{ color: 'oklch(0.13 0.02 264)' }}>le reflet d'une organisation qui apprend à travailler ensemble.</strong>
            </p>

            {/* Navigation bas de page */}
            <div
              className="mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center"
              style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}
            >
              <button
                onClick={() => document.getElementById('ds-nav-epreuve-reel')?.click()}
                className="text-sm transition-opacity hover:opacity-60"
                style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif' }}
              >
                ← L'épreuve du réel
              </button>
              <Link
                href="/"
                className="text-sm transition-opacity hover:opacity-60"
                style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif' }}
              >
                Tous les projets
              </Link>
              <Link
                href="/contact"
                className="text-sm px-4 py-2 rounded-sm transition-opacity hover:opacity-80"
                style={{ backgroundColor: 'oklch(0.42 0.22 264)', color: '#fff', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
              >
                Me contacter
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
    </>
  );
}
