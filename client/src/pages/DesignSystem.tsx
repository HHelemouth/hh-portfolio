/*
  DesignSystem.tsx, Cas d'étude : Design System Multi-Produits (Intescia)
  Charte : Jost pour les titres, DM Sans pour le corps
  Bleu #3B3FD8 en accent, fond blanc, sections alternées
*/

import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import { ArrowLeft } from 'lucide-react';
import CaseStudyHeader from '@/components/CaseStudyHeader';

export default function DesignSystem() {
  return (
    <>
    <SEOHead
      title="Design System Multi-Produits"
      description="Construction d'un design system pour 7 produits chez Intescia. Architecture en 4 niveaux, tokens sémantiques, Extended Collection Figma."
      canonicalPath="/projet/design-system"
    />
    <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>

      {/* Hero */}
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

      {/* Intro, Le chaos organisé */}
      <section className="px-5 py-10 sm:px-8 sm:py-16 md:px-16 md:py-20 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
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
          className="text-base"
          style={{ color: 'oklch(0.3 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}
        >
          Il y a deux ans, Intescia a été façonnée par le rachat de plusieurs entités aux cultures distinctes, notamment les groupes Explore et Insight. Cette fusion a donné naissance à un portefeuille de sept produits, mais aussi à un paysage design profondément fragmenté : des design systems à des niveaux de maturité très différents, une dette qui se creusait à chaque sprint, et une expérience utilisateur qui perdait en cohérence à travers tout l'écosystème.
        </p>
      </section>

      {/* Chapitre 1, Point de départ */}
      <section
        className="px-5 py-10 sm:px-8 sm:py-16 md:px-16 md:py-20 w-full overflow-x-hidden"
        style={{ backgroundColor: '#3B3FD8' }}
      >
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif' }}
          >
            Le point de départ
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-10"
            style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.2 }}
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
                className="flex items-start gap-4 p-5 rounded-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
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
        </div>
      </section>

      {/* Chapitre 1, Primitif vs Sémantique */}
      <section className="px-5 py-10 sm:px-8 sm:py-16 md:px-16 md:py-20 w-full overflow-x-hidden">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
          >
            La première question
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.2, color: 'oklch(0.13 0.02 264)' }}
          >
            Primitif ou sémantique ?
          </h2>
          <p
            className="text-base mb-10 max-w-2xl"
            style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}
          >
            Le premier obstacle n'a pas été technique, mais conceptuel. Deux visions de l'organisation des design tokens se sont rapidement opposées au sein de l'équipe.
          </p>

          {/* Comparaison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Primitif */}
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
                    style={{
                      backgroundColor: 'oklch(0.92 0.02 264)',
                      color: 'oklch(0.55 0.02 264)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p
                className="text-xs"
                style={{ color: 'oklch(0.55 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
              >
                Le nom décrit la valeur. Pas l'usage. Le designer doit interpréter.
              </p>
            </div>

            {/* Sémantique */}
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
                    style={{
                      backgroundColor: 'rgba(59,63,216,0.1)',
                      color: '#3B3FD8',
                      fontFamily: 'monospace',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p
                className="text-xs"
                style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
              >
                Le nom dit à quoi ça sert. Aucune interprétation nécessaire.
              </p>
            </div>
          </div>

          {/* Citation */}
          <div
            className="p-5 rounded-xl"
            style={{ backgroundColor: 'oklch(0.95 0.04 264)', borderLeft: '3px solid #3B3FD8' }}
          >
            <p
              className="text-base font-medium"
              style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
            >
              La différence semble petite. Elle change tout à l'échelle de 7 produits.
            </p>
          </div>

          {/* Standards industrie */}
          <div className="mt-10">
            <p
              className="text-sm mb-4 font-medium"
              style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Pour objectiver le débat, nous nous sommes appuyés sur les standards de l'industrie :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: 'oklch(0.95 0.03 264)' }}>
                    <th
                      className="text-left px-4 py-3 text-xs uppercase tracking-wider"
                      style={{ color: 'oklch(0.45 0.08 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
                    >
                      Source
                    </th>
                    <th
                      className="text-left px-4 py-3 text-xs uppercase tracking-wider"
                      style={{ color: 'oklch(0.45 0.08 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
                    >
                      Architecture de tokens
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { src: 'Google Material Design 3', arch: 'Ref tokens (primitifs) → Sys tokens (sémantiques) → Comp tokens' },
                    { src: 'Salesforce Lightning', arch: 'Global tokens (primitifs) → Alias tokens (sémantiques)' },
                    { src: 'Atlassian Design System', arch: 'Base tokens (primitifs) → Semantic tokens (sémantiques)' },
                    { src: 'Adobe Spectrum', arch: 'Global tokens (primitifs) → Semantic tokens → Component tokens' },
                  ].map((row, i) => (
                    <tr
                      key={row.src}
                      style={{ backgroundColor: i % 2 === 0 ? 'white' : 'oklch(0.98 0.01 264)', borderBottom: '1px solid oklch(0.92 0.02 264)' }}
                    >
                      <td
                        className="px-4 py-3 font-medium"
                        style={{ color: 'oklch(0.2 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {row.src}
                      </td>
                      <td
                        className="px-4 py-3"
                        style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'monospace', fontSize: '0.8rem' }}
                      >
                        {row.arch}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Chapitre 2, Architecture 4 niveaux */}
      <section
        className="px-5 py-10 sm:px-8 sm:py-16 md:px-16 md:py-20 w-full overflow-x-hidden"
        style={{ backgroundColor: '#3B3FD8' }}
      >
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif' }}
          >
            La structure
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-10"
            style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.2 }}
          >
            Une architecture en 4 niveaux
          </h2>

          <div className="flex flex-col gap-3">
            {[
              {
                num: '1',
                title: 'Primitives',
                desc: 'Les valeurs brutes, jamais utilisées directement. Palette complète, toutes les tailles, toutes les graisses. Non publiées, cachées des designers.',
              },
              {
                num: '2',
                title: 'Tokens sémantiques (Extended Collection)',
                desc: 'in-background · in-border · in-icon · in-text · in-color. Chaque token est un alias vers une primitive. Grâce aux modes Figma, chaque produit surcharge uniquement ses valeurs propres.',
              },
              {
                num: '3',
                title: 'Core DS',
                desc: 'Les composants communs, boutons, inputs, modals. Chaque propriété pointe vers un token sémantique, jamais vers une primitive. Aucune valeur en dur.',
              },
              {
                num: '4',
                title: 'DS Produits × 7',
                desc: 'Chacun des sept produits active simplement le bon mode, tout s\'adapte automatiquement.',
              },
            ].map((item, i) => (
              <div key={item.num}>
                <div
                  className="flex items-start gap-5 p-5 rounded-xl"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', fontFamily: 'Jost, sans-serif' }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <p
                      className="font-semibold text-white mb-1"
                      style={{ fontFamily: 'Jost, sans-serif', fontSize: '1rem' }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
                {i < 3 && (
                  <div className="flex justify-center py-1">
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem' }}>↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principe des modes */}
      <section className="px-5 py-10 sm:px-8 sm:py-16 md:px-16 md:py-20 w-full overflow-x-hidden">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
          >
            Le principe des modes
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.2, color: 'oklch(0.13 0.02 264)' }}
          >
            Un composant, 7 produits
          </h2>
          <p
            className="text-base mb-10 max-w-2xl"
            style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}
          >
            Le même bouton dans le Core DS. Le mode fait tout le travail.
          </p>

          <div className="flex flex-col gap-4 mb-8 max-w-xs">
            {[
              { label: 'Mode Produit 1 activé →', bg: '#38b2ac', text: 'Découvrir' },
              { label: 'Mode Produit 2 activé →', bg: '#4299e1', text: 'Découvrir' },
              { label: 'Mode Produit 3 activé →', bg: '#3B3FD8', text: 'Découvrir' },
            ].map((btn) => (
              <div key={btn.label}>
                <p
                  className="text-xs mb-2"
                  style={{ color: 'oklch(0.55 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {btn.label}
                </p>
                <button
                  className="px-6 py-3 rounded-lg text-white font-semibold text-sm"
                  style={{ backgroundColor: btn.bg, fontFamily: 'DM Sans, sans-serif', cursor: 'default' }}
                >
                  {btn.text}
                </button>
              </div>
            ))}
          </div>

          <div
            className="p-5 rounded-xl max-w-2xl"
            style={{ backgroundColor: 'oklch(0.95 0.04 264)', borderLeft: '3px solid #3B3FD8' }}
          >
            <p
              className="text-base font-medium"
              style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
            >
              Aucune duplication de composant. Une seule source de vérité. Le mode résout tout.
            </p>
          </div>

          {/* Tableau des catégories sémantiques */}
          <div className="mt-12">
            <h3
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              Les catégories sémantiques de couleur
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: 'oklch(0.95 0.03 264)' }}>
                    {['Catégorie', 'Usage', 'Exemple'].map((h) => (
                      <th
                        key={h}
                        className="text-left px-4 py-3 text-xs uppercase tracking-wider"
                        style={{ color: 'oklch(0.45 0.08 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
                      >
                        {h}
                      </th>
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
                    <tr
                      key={row.cat}
                      style={{ backgroundColor: i % 2 === 0 ? 'white' : 'oklch(0.98 0.01 264)', borderBottom: '1px solid oklch(0.92 0.02 264)' }}
                    >
                      <td
                        className="px-4 py-3 font-medium"
                        style={{ color: '#3B3FD8', fontFamily: 'monospace', fontSize: '0.82rem' }}
                      >
                        {row.cat}
                      </td>
                      <td
                        className="px-4 py-3"
                        style={{ color: 'oklch(0.3 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {row.usage}
                      </td>
                      <td
                        className="px-4 py-3"
                        style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'monospace', fontSize: '0.78rem' }}
                      >
                        {row.ex}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Chapitre 3, L'épreuve du réel */}
      <section
        className="px-5 py-10 sm:px-8 sm:py-16 md:px-16 md:py-20 w-full overflow-x-hidden"
        style={{ backgroundColor: 'oklch(0.97 0.01 264)' }}
      >
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
          >
            L'anecdote qui dit tout
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.2, color: 'oklch(0.13 0.02 264)' }}
          >
            size/14 = 12px
          </h2>
          <p
            className="text-base mb-8 max-w-2xl"
            style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}
          >
            Pendant des heures, un composant affichait la mauvaise taille de police. Toute la chaîne semblait correcte.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div
              className="p-6 rounded-xl border"
              style={{ borderColor: 'oklch(0.88 0.02 264)', backgroundColor: 'white' }}
            >
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-4"
                style={{ color: 'oklch(0.55 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}
              >
                Le problème
              </p>
              <span
                className="inline-block text-sm px-3 py-1.5 rounded mb-3 line-through"
                style={{
                  backgroundColor: 'oklch(0.92 0.02 264)',
                  color: 'oklch(0.55 0.02 264)',
                  fontFamily: 'monospace',
                }}
              >
                Primitives/size/14 → 12px
              </span>
              <p
                className="text-sm"
                style={{ color: 'oklch(0.5 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
              >
                Un doublon créé par erreur. Une valeur silencieusement fausse depuis le début.
              </p>
            </div>

            <div
              className="p-6 rounded-xl border"
              style={{ borderColor: 'oklch(0.82 0.08 264)', backgroundColor: 'oklch(0.95 0.04 264)' }}
            >
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-4"
                style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
              >
                La leçon
              </p>
              <p
                className="text-sm mb-2"
                style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
              >
                Une architecture rigoureuse n'est pas du perfectionnisme.
              </p>
              <p
                className="text-sm font-bold"
                style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
              >
                C'est de la survie.
              </p>
            </div>
          </div>

          <p
            className="text-base max-w-2xl"
            style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}
          >
            Le second défi fut plus conceptuel : sur notre composant CTA, la taille de l'icône devait être fixe sur un produit mais variable sur un autre. Les modes de variables ont offert une solution élégante, un seul composant Core qui s'adapte intelligemment à chaque contexte.
          </p>
        </div>
      </section>

      {/* Chapitre 4, Ne pas avancer la tête dans le guidon */}
      <section className="px-5 py-10 sm:px-8 sm:py-16 md:px-16 md:py-20 w-full overflow-x-hidden">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
          >
            Ce que les guides ne disent pas
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.2, color: 'oklch(0.13 0.02 264)' }}
          >
            Prendre les décisions au bon moment
          </h2>
          <p
            className="text-base mb-8 max-w-2xl"
            style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}
          >
            Ce qui évite les frictions entre designers, devs et PO, et évite de devoir tout reprendre en cours de route.
          </p>

          <div className="flex flex-col gap-4 mb-8 max-w-2xl">
            {[
              'Impliquer les designers avant que la structure soit figée',
              'Aligner les expertises UX, dev et produit dès le départ',
              'Partager un vocabulaire commun avant de construire',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <span style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', marginTop: '2px' }}>→</span>
                <p
                  className="text-base"
                  style={{ color: 'oklch(0.3 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div
            className="p-5 rounded-xl mb-10 max-w-2xl"
            style={{ backgroundColor: 'oklch(0.95 0.04 264)', borderLeft: '3px solid #3B3FD8' }}
          >
            <p
              className="text-base font-medium"
              style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
            >
              L'architecture parfaite n'existe pas. Il existe celle que votre organisation est capable de maintenir ensemble.
            </p>
          </div>

          <div
            className="p-5 rounded-xl max-w-2xl"
            style={{ backgroundColor: 'oklch(0.97 0.01 264)', border: '1px solid oklch(0.88 0.02 264)' }}
          >
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-2"
              style={{ color: 'oklch(0.55 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Dette consciente assumée
            </p>
            <p
              className="text-sm"
              style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}
            >
              La couche <span style={{ fontFamily: 'monospace', color: '#3B3FD8' }}>in-component</span> n'a pas été gardée. Un risque réel si un produit a besoin d'un delta sur un composant spécifique. Documenté comme dette consciente, pas pour s'en plaindre, mais pour ne pas l'oublier.
            </p>
          </div>
        </div>
      </section>

      {/* Ce qu'on retient */}
      <section
        className="px-5 py-10 sm:px-8 sm:py-16 md:px-16 md:py-20 w-full overflow-x-hidden"
        style={{ backgroundColor: '#3B3FD8' }}
      >
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif' }}
          >
            Ce qu'on retient
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-10"
            style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.2 }}
          >
            3 choses qu'on referait pareil
          </h2>

          <div className="flex flex-col gap-4">
            {[
              {
                num: '1',
                text: 'S\'appuyer sur les standards de l\'industrie, Material, Atlassian, Spectrum. Ce n\'est pas une opinion, c\'est documenté.',
              },
              {
                num: '2',
                text: 'Documenter le chemin, pas seulement le résultat. L\'hésitation est aussi une information.',
              },
              {
                num: '3',
                text: 'Impliquer les devs tôt. Ce sont les meilleurs arbitres des décisions d\'architecture.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-5 p-5 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', fontFamily: 'Jost, sans-serif' }}
                >
                  {item.num}
                </span>
                <p
                  className="text-base"
                  style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="px-8 py-16 md:px-16 md:py-24">
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl w-full mx-auto">
          <span
            className="text-xs uppercase tracking-widest mb-3 block"
            style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
          >
            La leçon la plus précieuse
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'Jost, sans-serif', lineHeight: 1.2, color: 'oklch(0.13 0.02 264)' }}
          >
            Ne pas avancer la tête dans le guidon
          </h2>

          <blockquote
            className="text-lg italic mb-8"
            style={{
              color: 'oklch(0.4 0.02 264)',
              fontFamily: 'DM Sans, sans-serif',
              lineHeight: 1.7,
              borderLeft: '3px solid #3B3FD8',
              paddingLeft: '1.5rem',
            }}
          >
            "L'important, ce n'est peut-être pas le résultat, mais le chemin parcouru."
          </blockquote>

          <p
            className="text-base mb-6"
            style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}
          >
            Le plus grand gain de ces derniers mois n'est pas l'architecture de tokens. C'est la compétence collective développée en tant qu'équipe, apprendre à débattre d'idées complexes, à s'appuyer sur des standards externes pour dépasser les opinions, et à tracer une erreur avec méthode.
          </p>

          <p
            className="text-base"
            style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}
          >
            Un design system n'est pas un livrable, c'est un organisme vivant, fait de logique, de code, mais aussi de compromis humains. Et c'est peut-être ça, la véritable définition d'un design system en entreprise : <strong style={{ color: 'oklch(0.13 0.02 264)' }}>le reflet d'une organisation qui apprend à travailler ensemble.</strong>
          </p>
        </div>
      </section>

      {/* Navigation bas de page */}
      <section
        className="px-8 py-12 md:px-16"
        style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
          style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
        >
          <ArrowLeft size={14} />
          Retour aux projets
        </Link>
      </section>
    </div>
    </>
  );
}
