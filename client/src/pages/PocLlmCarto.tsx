/*
  PocLlmCarto.tsx — Cas d'étude : Exploration IA appliquée à la cartographie
  Charte : Jost pour les titres, DM Sans pour le corps, bleu #3B3FD8 en accent
  Structure : 4 chapitres séquencés
  1. Contexte
  2. Chat conversationnel & carte interactive
  3. Recherche par mots-clés vs recherche IA
  4. Tests utilisateurs & enseignements
*/

import { useState } from 'react';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import CaseStudyHeader from '@/components/CaseStudyHeader';

const CHAPTERS = [
  { id: 'contexte', label: 'Contexte' },
  { id: 'chat-carte', label: 'Chat & carte interactive' },
  { id: 'recherche', label: 'Mots-clés vs IA' },
  { id: 'tests', label: 'Tests utilisateurs' },
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

export default function PocLlmCarto() {
  const [active, setActive] = useState('contexte');

  return (
    <>
    <SEOHead
      title="Exploration IA appliquée à la cartographie"
      description="POC LLM au sein du groupe Intescia : recherche en langage naturel, chat conversationnel couplé à une carte interactive, refonte du moteur de recherche T360 et tests utilisateurs."
      canonicalPath="/projet/poc-llm-carto"
    />
    <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>

      <CaseStudyHeader
        title="Exploration IA appliquée à la cartographie"
        tags={['R&D', 'Intelligence Artificielle', 'UX Research', 'Exploration produit']}
        description="Explorer comment l'IA peut transformer la recherche de données dans les outils du groupe Intescia, avec T360 comme terrain d'expérimentation."
        meta={[
          { label: 'Rôle', value: 'Product Designer, Exploration R&D' },
          { label: 'Contexte', value: 'Groupe Intescia' },
          { label: 'Terrain', value: 'T360 (cobaye du process)' },
          { label: 'Type', value: 'POC, exploration produit' },
        ]}
      />

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

      <main className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl py-8 sm:py-14">

        {/* ── CONTEXTE ── */}
        {active === 'contexte' && (
          <section>
            {sectionTitle('Un terrain d\'exploration, pas un cahier des charges')}
            {bodyText("Il n'y a pas eu de ticket, pas de brief formel pour ce sujet. C'est une exploration que j'ai menée de mon propre chef : comprendre comment l'intelligence artificielle pouvait s'intégrer utilement dans les applications du groupe Intescia, au-delà de l'effet de mode.")}
            <div className="my-4" />
            {bodyText("T360 a servi de cobaye. C'est l'outil sur lequel j'ai le plus de recul, avec la base d'utilisateurs la plus large et la plus grande diversité de profils. Idéal pour tester des hypothèses avant de penser à les généraliser à d'autres produits du portefeuille.")}

            {accent("Deux pistes explorées en parallèle : un chat conversationnel couplé à une carte interactive pour la donnée cartographique, et une refonte du moteur de recherche existant pour qu'il comprenne le langage naturel autant que les mots-clés.")}

            {bodyText("Les deux chantiers partagent le même postulat de départ : la recherche de données ne devrait pas obliger l'utilisateur à apprendre le vocabulaire ou la structure de l'outil. Il devrait pouvoir exprimer son besoin avec ses propres mots, et laisser le système faire le travail de traduction.")}
          </section>
        )}

        {/* ── CHAT & CARTE ── */}
        {active === 'chat-carte' && (
          <section>
            {sectionTitle('Un chat qui pilote une carte interactive')}
            {bodyText("Le principe : explorer toutes les données du groupe (contours administratifs, base immeuble, parcellaire, transactions, PLU, friches, projets d'aménagement...) en formulant simplement sa question, plutôt qu'en naviguant dans des filtres successifs.")}
            <div className="my-4" />
            {bodyText("J'ai exploré deux dispositions : le chat en colonne à gauche avec les résultats à droite, et le chat en bandeau horizontal en haut avec les résultats en dessous. Plusieurs itérations pour trouver l'équilibre entre la place laissée à la conversation et celle laissée à la carte.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/chat-onboarding.jpg`}
              alt="Interface chat avec suggestions de questions et zone de résultats"
              caption="Écran d'accueil du chat : suggestions de questions types, liste des données couvertes par le modèle accessible en info-bulle"
            />

            {bodyText("Les résultats peuvent s'afficher dans la conversation elle-même, ou basculer vers une carte interactive. L'utilisateur peut alors ajouter des couches sur cette carte, les recolorer, les renommer, les masquer ou les partager.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/carte-couches.jpg`}
              alt="Carte interactive avec légende de couches modifiable et recherche dans la zone visible"
              caption="Carte interactive : légende de couche éditable (intitulé, symbologie), recherche affinée dans la zone visible, bascule vue satellite"
            />

            {bodyText("Le geste \"Recherche dans cette zone\" reprend un pattern connu (type Google Maps / Airbnb) : plutôt que de tout re-décrire en langage naturel, l'utilisateur peut simplement déplacer la carte et relancer la recherche sur la zone visible.")}
          </section>
        )}

        {/* ── RECHERCHE MOTS-CLÉS VS IA ── */}
        {active === 'recherche' && (
          <section>
            {sectionTitle('Deux façons de chercher, côte à côte')}
            {bodyText("En parallèle du chat cartographique, j'ai travaillé sur une refonte du moteur de recherche de T360 lui-même : une refonte qui n'a jamais vu le jour faute de budget, mais qui a été suffisamment aboutie pour être testée auprès d'un panel d'utilisateurs.")}
            <div className="my-4" />
            {bodyText("L'idée : ne pas opposer recherche par mots-clés et recherche en langage naturel, mais les faire cohabiter. L'utilisateur choisit son mode selon ce qui lui est le plus naturel à l'instant T, avec un aller-retour possible entre les deux.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/recherche-mots-cles.jpg`}
              alt="Panneau de recherche classique par mots-clés, thème, lieu, période"
              caption="Mode mots-clés : formulaire structuré classique (thème, lieu, acteur, période) — pour qui sait déjà précisément ce qu'il cherche"
            />

            {bodyText("Le second mode ouvre un panneau \"Analyse IA\" : un espace conversationnel avec des raccourcis pré-remplis (synthèse des résultats, synthèse d'un document, synthèse d'un acteur) pour ne pas partir d'une page blanche.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/recherche-ia.jpg`}
              alt="Panneau de recherche IA avec suggestions de synthèse et champ de saisie libre"
              caption="Mode IA : formulation libre, avec des raccourcis de synthèse pour démarrer sans effort de formulation"
            />

            {bodyText("Les deux panneaux partagent la même structure de menu (\"Recherche par : Thèmes / Mots-clés / Recherches enregistrées\"), pour que le changement de mode ne soit jamais une rupture complète de repères.")}
          </section>
        )}

        {/* ── TESTS UTILISATEURS ── */}
        {active === 'tests' && (
          <section>
            {sectionTitle('Tester avant de conclure')}
            {bodyText("Ce mode de recherche a été testé et validé auprès d'un panel d'utilisateurs T360, avec des profils volontairement différents : un directeur (usage stratégique, vision d'ensemble) et une cheffe de projet (usage quotidien, opérationnel).")}

            {accent("Le postulat de départ n'était pas neutre : est-ce que des utilisateurs habitués à un moteur de recherche très structuré allaient adopter un mode conversationnel, ou le vivre comme une régression ?")}

            <h3 className="text-lg font-semibold mt-8 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Ce qu'il fallait absolument garder
            </h3>
            {bodyText("La possibilité de revenir au mode mots-clés à tout moment est ressortie comme non négociable — certains utilisateurs experts du domaine savent exactement quel jargon métier tape juste, et ne veulent pas le \"traduire\" en langage naturel à chaque fois. Les raccourcis de synthèse pré-remplis ont aussi été très bien accueillis : ils lèvent le principal frein du mode conversationnel, la fameuse page blanche.")}

            <h3 className="text-lg font-semibold mt-8 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Ce qu'il fallait retirer ou simplifier
            </h3>
            {bodyText("Le panel a été sans appel sur la surcharge d'information en une seule réponse : les utilisateurs veulent une réponse ciblée, avec la possibilité d'approfondir ensuite, pas un pavé de synthèse à décortiquer. Ressorti aussi : le besoin de garder la main sur ce que l'IA a comme périmètre de recherche, pour éviter la sensation de \"boîte noire\".")}

            <h3 className="text-lg font-semibold mt-8 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Ce que ça m'a appris
            </h3>
            {bodyText("Le plus contre-intuitif : ce ne sont pas les utilisateurs les moins à l'aise avec l'outil qui ont le plus demandé de garde-fous sur l'IA, mais les plus experts. Plus on maîtrise un domaine, plus on veut vérifier et garder le contrôle sur l'outil qui travaille pour nous. Ça a confirmé une conviction que j'avais déjà sur mes autres explorations IA : le bon réflexe n'est pas de tout automatiser, mais de rendre le raisonnement de l'IA visible et interruptible à tout moment.")}
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
