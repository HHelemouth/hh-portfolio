/*
  Proveil.tsx — Cas d'étude Proveil
  Charte : Jost pour les titres, DM Sans pour le corps, bleu #3B3FD8 en accent
  Structure : 5 chapitres séquencés avec navigation par onglets
  1. Contexte
  2. Test Hassenzahl
  3. Entretiens d'usage
  4. Atelier & Conception
  5. Résultats
*/

import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const CHAPTERS = [
  { id: 'contexte', label: 'Contexte' },
  { id: 'hassenzahl', label: 'Test Hassenzahl' },
  { id: 'entretiens', label: "Entretiens d'usage" },
  { id: 'atelier', label: 'Atelier & Conception' },
  { id: 'resultats', label: 'Résultats' },
];

const sectionTitle = (text: string) => (
  <h2
    className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 break-words"
    style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)', lineHeight: 1.25, letterSpacing: '-0.01em' }}
  >
    {text}
  </h2>
);

const bodyText = (text: string, className = '') => (
  <p
    className={`text-sm sm:text-base leading-relaxed break-words ${className}`}
    style={{ color: 'oklch(0.28 0.03 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}
  >
    {text}
  </p>
);

const accent = (text: string) => (
  <div
    className="rounded-sm px-6 py-5 my-8"
    style={{ backgroundColor: 'oklch(0.94 0.04 264)', borderLeft: '3px solid #3B3FD8' }}
  >
    <p
      className="text-base italic"
      style={{ color: 'oklch(0.25 0.05 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}
    >
      {text}
    </p>
  </div>
);

function CaseImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="my-8">
      <div className="overflow-hidden rounded-sm" style={{ border: '1px solid oklch(0.91 0.02 264)' }}>
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
      </div>
      {caption && (
        <p className="text-xs mt-2" style={{ color: 'oklch(0.52 0.04 264)', fontFamily: 'DM Sans, sans-serif', fontStyle: 'italic' }}>
          {caption}
        </p>
      )}
    </div>
  );
}

export default function Proveil() {
  const [active, setActive] = useState('contexte');

  return (
    <>
    <SEOHead
      title="Proveil"
      description="Refonte ergonomique et graphique d'un logiciel interne. Test Hassenzahl, entretiens d'usage, atelier de co-conception et résultats mesurés."
      canonicalPath="/projet/proveil"
    />
    <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>

      {/* Hero */}
      <header
        className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl pt-8 pb-8 sm:pt-12 sm:pb-10"
        style={{ borderBottom: '1px solid oklch(0.91 0.02 264)' }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs mb-8 transition-opacity hover:opacity-70"
          style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
        >
          <ArrowLeft size={13} /> Retour aux projets
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          {['UX Research', 'Test Hassenzahl', 'Refonte', 'Outil interne'].map((t) => (
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
          Proveil
        </h1>
        <p
          className="text-sm sm:text-lg max-w-2xl"
          style={{ color: 'oklch(0.35 0.03 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}
        >
          Refonte ergonomique et graphique du logiciel interne utilisé par l'ensemble des collaborateurs d'Explore.
        </p>

        <div
          className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8"
          style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}
        >
          {[
            { label: 'Rôle', value: 'UX Research, Refonte' },
            { label: 'Contexte', value: 'Explore, groupe Intescia' },
            { label: 'Service', value: 'Documentalistes (+80 utilisateurs)' },
            { label: 'Type', value: 'Refonte outil interne' },
          ].map((item) => (
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
      </header>

      {/* Bandeau résultats — teaser en tête, avant même le détail de la démarche */}
      <div
        style={{ backgroundColor: 'oklch(0.97 0.015 264)', borderBottom: '1px solid oklch(0.91 0.02 264)' }}
      >
        <div className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl py-6 sm:py-8">
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
        >
          Le résultat, en un coup d'œil
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-x-12 mb-4">
          {[
            { value: '−37%', label: 'Temps de traitement moyen' },
            { value: '×1,79', label: 'Fiches traitées à temps égal' },
            { value: '+80', label: 'Utilisateurs impactés' },
          ].map((m) => (
            <div key={m.label}>
              <span
                className="block text-2xl sm:text-3xl"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 800, color: 'oklch(0.42 0.22 264)' }}
              >
                {m.value}
              </span>
              <span className="text-xs" style={{ color: 'oklch(0.4 0.06 264)', fontFamily: 'DM Sans, sans-serif' }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>
        </div>
      </div>

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

      {/* Contenu des chapitres */}
      <main className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl py-8 sm:py-14">

        {/* ── CONTEXTE ── */}
        {active === 'contexte' && (
          <section>
            {sectionTitle('Proveil, c\'est quoi ?')}
            {bodyText("Proveil est un logiciel de récolte, de paramétrage et de saisie de données utilisé par l'ensemble des collaborateurs de l'entreprise Explore : la production (8 services de traitement des données), le service client, les commerciaux ainsi que les managers de chaque service avec leurs usages particuliers.")}

            <h3 className="text-lg font-semibold mt-8 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Objectifs
            </h3>
            {bodyText("L'outil a plus de 12 ans d'existence. Une révision était indispensable en raison des nombreuses évolutions du logiciel et de son interface peu attrayante, nécessitant une maintenance excessive.")}
            <div className="my-4" />
            {bodyText("L'objectif est d'améliorer le quotidien des documentalistes mais surtout d'optimiser leur temps et leur volumétrie de traitement de l'information. Ce service mobilise 3 personnes.")}

            {accent("Voici une explication de mon processus d'amélioration pour les interfaces liées au traitement des planifications urbaines, ce service mobilise 3 personnes.")}
          </section>
        )}

        {/* ── TEST HASSENZAHL ── */}
        {active === 'hassenzahl' && (
          <section>
            {sectionTitle('Analyse et état des lieux de l\'interface actuelle')}
            {bodyText("Dans un premier temps, j'ai réalisé un test Hassenzahl pour connaître les impressions des utilisateurs et apprivoiser cet outil.")}

            <h3 className="text-lg font-semibold mt-8 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Ce que l'enquête a remonté
            </h3>
            <div className="space-y-3 my-6">
              {[
                { ok: true, text: 'Le système reste professionnel donc répond à cette intention' },
                { ok: false, text: "Le système n'est pas captivant. Nous avons une note générale d'attractivité très basse, donc un usage quotidien pénible" },
                { ok: false, text: "Il n'est pas assez clair, efficace, pratique ni assez structuré" },
                { ok: false, text: "Il n'est pas assez contrôlable. Le système est décrit comme challengant, voire décourageant. Les retours nous rapportent une source de frustration profonde" },
                { ok: false, text: "L'outil semble peu présentable, ce qui marque un manque de fierté de la présentation/démonstration lors de la formation des nouveaux collaborateurs. Les retours notent difficilement le maîtriser aisément l'outil." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-sm" style={{ backgroundColor: item.ok ? 'oklch(0.96 0.05 145)' : 'oklch(0.97 0.03 60)' }}>
                  <span className="text-base flex-shrink-0">{item.ok ? '✅' : '⚠️'}</span>
                  <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.28 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}>{item.text}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Premières recommandations
            </h3>
            {bodyText("Alléger le système de toute feature et fonctionnalité superflue pour le rendre plus captivant, plus clair et surtout plus efficace.")}
            <div className="my-3" />
            {bodyText("Revoir l'organisation, la hiérarchisation et composants techniques du système, de manière à le rendre plus structuré, plus contrôlable, plus intuitif et plus fonctionnel (orienté tâche).")}
            <div className="my-3" />
            {bodyText("Revoir la charte du système plus présentable et plus désirable tout en restant professionnel pour un système plus clair et plus agréable.")}
          </section>
        )}

        {/* ── ENTRETIENS D'USAGE ── */}
        {active === 'entretiens' && (
          <section>
            {sectionTitle("Entretiens d'usage")}
            {bodyText("Au cours des entretiens d'utilisation, les utilisateurs ont pu me partager leurs impressions confirmant le test Hassenzahl. C'était l'occasion de découvrir des usages inédits.")}
            <div className="my-4" />
            {bodyText("En effet, les utilisateurs multiplient les outils pour arriver à leurs fins sur Proveil : partage d'informations sur Teams, recherches externes sur le navigateur, prises de note sur un calepin personnel et une capture d'écran informelle. Or, les usages peuvent et devraient se faire directement sur l'interface de l'outil pour faciliter leur organisation de travail.")}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              <CaseImage src={`${import.meta.env.BASE_URL}proveil/verbatim-claire.png`} alt="Verbatim de Claire : il n'y a pas de langage universel, c'est sa popotte interne" />
              <CaseImage src={`${import.meta.env.BASE_URL}proveil/verbatim-audrey-2.png`} alt="Verbatim d'Audrey : ce n'est pas intuitif" />
              <CaseImage src={`${import.meta.env.BASE_URL}proveil/verbatim-audrey-1.png`} alt="Verbatim d'Audrey : j'aime pas le faire, je trouve ça pénible" />
            </div>

            {bodyText("Des décisions arbitraires sont prises dans l'encodage de l'information par les utilisateurs. Certains documentalistes adoptent une approche de travail très individuelle sans concertation avec le reste de l'équipe. En outre, Proveil génère une surabondance de fenêtres d'affichage, entraînant une saturation d'informations qui requiert une concentration maximale de la part des utilisateurs afin d'éviter toute confusion.")}

            {accent("En résumé, Proveil offre une plétore d'éléments non pertinents au mal organisés au lieu de fournir l'essentiel nécessaire pour accompagner leur travail.")}
          </section>
        )}

        {/* ── ATELIER & CONCEPTION ── */}
        {active === 'atelier' && (
          <section>
            {sectionTitle('Atelier de co-conception')}
            {bodyText("Pendant cet atelier, nous avons identifié les éléments superflus de l'interface. Les participants ont saisi l'opportunité de faire part de leurs besoins en termes de fonctionnalités inexistantes, et nous avons envisagé ensemble avec eux leur solution.")}
            <div className="my-4" />
            {bodyText("Grâce à cette collaboration, nous avons résolu le problème des affichages simultanés et de la pollution visuelle de Proveil, faisant ainsi place à des fonctionnalités plus pertinentes et essentielles pour améliorer leur interface.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}proveil/atelier-co-conception.jpg`}
              alt="Atelier de co-conception avec les documentalistes autour d'une table"
              caption="Atelier de co-conception avec l'équipe documentation, autour des besoins et des irritants relevés"
            />
            <CaseImage
              src={`${import.meta.env.BASE_URL}proveil/ui-diffusion-presse.png`}
              alt="Interface ancien Proveil annotée, éléments superflus et améliorables entourés en jaune"
              caption="Exemple d'indicateurs d'éléments superflus et améliorables identifiés en atelier"
            />

            <h3 className="text-lg font-semibold mt-10 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Conception
            </h3>
            {bodyText("Application des expressions de besoin durant toute l'exploration du service. La focalisation des utilisateurs s'opère au travers d'une interface unique qui intègre les éléments nécessaires pour la consultation de l'information, l'encodage et la qualification élaborée par l'utilisateur. De plus, une liste \"tiroir\" consolide l'ensemble des tâches à exécuter jusqu'à leur complétion.")}
            <div className="my-4" />
            {bodyText("À droite, sur un écran secondaire disponible, les utilisateurs peuvent dédoubler à l'aide d'un comparateur pour repérer immédiatement des similitudes entre les fiches déjà livrées sur le même sujet. Cet écran aide également pour les approbations afin de lier deux avis entre eux. Les prototypes ont été soumis à des tests d'utilisation, confirmant la convivialité de cette nouvelle proposition.")}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <CaseImage src={`${import.meta.env.BASE_URL}proveil/ui-fiches-liees.png`} alt="Écran d'encodage et de consultation avec la liste tiroir" caption="Écran d'encodage et de consultation avec la liste tiroir" />
              <CaseImage src={`${import.meta.env.BASE_URL}proveil/ui-fiche-approbation.png`} alt="Écran comparateur pour dédoubler et lier les approbations" caption="Écran comparateur pour dédoubler et lier les approbations" />
            </div>
          </section>
        )}

        {/* ── RÉSULTATS ── */}
        {active === 'resultats' && (
          <section>
            {sectionTitle('Corrélation avant/après')}
            {bodyText("Après le développement de l'interface et quelques retours d'usage, les chiffres parlent d'eux-mêmes. Les utilisateurs déclarent effectivement un temps moyen gagné surtout sur les approbations (le poste le plus lent à traiter), et les autres tâches sont également réalisées plus rapidement.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}proveil/efficacite-comparatif.png`}
              alt="Analyse comparative du temps de traitement des tâches, ancien vs nouveau Proveil"
              caption="Analyse quantitative du temps de réalisation des tâches : ancien système vs nouvelle version Proveil Web"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-10">
              {[
                { value: '−32%', label: 'Temps de traitement des fiches livrées' },
                { value: '−61%', label: 'Temps de traitement des rejets' },
                { value: '−54%', label: 'Temps de traitement du dédoublonnage' },
                { value: '−37%', label: 'Temps moyen pondéré global' },
                { value: '×1,79', label: 'Facteur multiplicatif de fiches traitées à temps égal' },
                { value: '+45%', label: 'Estimation du volume traitable par heure' },
              ].map((m, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center p-4 rounded-sm"
                  style={{ backgroundColor: 'oklch(0.97 0.015 264)', border: '1px solid oklch(0.91 0.02 264)' }}
                >
                  <span className="text-3xl mb-1" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 800, color: 'oklch(0.42 0.22 264)' }}>
                    {m.value}
                  </span>
                  <span className="text-xs text-center uppercase tracking-wider" style={{ color: 'oklch(0.4 0.06 264)', fontFamily: 'DM Sans, sans-serif' }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="my-8 p-5 rounded-sm" style={{ borderLeft: '3px solid oklch(0.42 0.22 264)', backgroundColor: 'oklch(0.97 0.015 264)' }}>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                Service de Planification Urbaine
              </p>
              <p className="text-sm italic leading-relaxed" style={{ color: 'oklch(0.28 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}>
                « Le développement de notre outil Proveil Web avance avec le déploiement récent d'un nouvel écran de Planification Urbaine et est une avancée pour le traitement des enquêtes publiques et approbations des plans locaux. Il permet aujourd'hui d'avoir une vision rapide de ce qui est déjà livré et gagnons un précieux temps pour le dédoublonnage. Les titres, dates, zonage et liens sociétés sont automatisés. Grâce à ces nouvelles fonctionnalités, le temps de traitement des planifications urbaines est quasiment divisé par deux ! »
              </p>
            </div>
          </section>
        )}

        {/* Navigation bas de page */}
        <div
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center"
          style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}
        >
          <Link href="/" className="text-sm transition-opacity hover:opacity-60" style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif' }}>
            ← Tous les projets
          </Link>
          <Link
            href="/contact"
            className="text-sm px-4 py-2 rounded-sm transition-opacity hover:opacity-80"
            style={{ backgroundColor: 'oklch(0.42 0.22 264)', color: '#fff', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
          >
            Me contacter
          </Link>
        </div>
      </main>
    </div>
    </>
  );
}
