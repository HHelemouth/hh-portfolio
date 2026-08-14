/*
  PocLlmCarto.tsx, Cas d'étude : Exploration IA appliquée à la cartographie
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

function ImagePair({ images }: { images: { src: string; alt: string; caption?: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 my-8">
      {images.map((img, i) => (
        <div key={i}>
          <div className="overflow-hidden rounded-sm" style={{ border: '1px solid oklch(0.91 0.02 264)' }}>
            <img src={img.src} alt={img.alt} className="w-full h-auto block" loading="lazy" />
          </div>
          {img.caption && (
            <p className="text-xs mt-2" style={{ color: 'oklch(0.52 0.04 264)', fontFamily: 'DM Sans, sans-serif', fontStyle: 'italic' }}>
              {img.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function Verbatim({ text }: { text: string }) {
  return (
    <div
      className="rounded-sm px-5 py-4 my-4"
      style={{ backgroundColor: 'oklch(0.95 0.03 264)', borderLeft: '3px solid #8D9DFF' }}
    >
      <p
        className="text-sm italic"
        style={{ color: 'oklch(0.3 0.06 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}
      >
        « {text} »
      </p>
      <p
        className="text-xs mt-2 uppercase tracking-widest"
        style={{ color: 'oklch(0.5 0.06 264)', fontFamily: 'DM Sans, sans-serif' }}
      >
        Verbatim utilisateur, test client
      </p>
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
    <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: 'oklch(0.99 0 0)', overflowY: 'visible' }}>

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
            {bodyText("Il n'y a pas eu de ticket, pas de brief formel retraçant le détail du travail. Mais le sujet lui-même était bien un projet d'entreprise : un POC LLM Carto mené en interne pour évaluer comment l'intelligence artificielle pouvait s'intégrer utilement dans les applications du groupe Intescia, au-delà de l'effet de mode.")}
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
              alt="Interface chat avec suggestions de questions et zone de résultats vide"
              caption="Écran d'accueil du chat : suggestions de questions types, liste des données couvertes par le modèle accessible en info-bulle"
            />

            {bodyText("Les résultats s'affichent sous forme de fiches détaillées, avec bascule immédiate vers une carte interactive. L'utilisateur peut ajouter des couches sur cette carte, les recolorer, les renommer, les masquer ou les partager.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/carte-parcelles.jpg`}
              alt="Résultats de recherche en fiches détaillées et carte avec une couche de parcelles"
              caption="Résultat pour « Quelles sont les parcelles de + de 1000m² à Toulouse ? » : fiches détaillées à gauche, couche cartographiée à droite, export possible"
            />

            {bodyText("Le vrai intérêt du format conversationnel apparaît dans l'enchaînement : chaque nouvelle question s'ajoute à la carte comme une couche supplémentaire, sans repartir de zéro. Poser une question de suivi (\"quelles boulangeries dans ces parcelles ?\") superpose le résultat sur la carte existante plutôt que de la remplacer.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/carte-multi-couches.jpg`}
              alt="Carte avec deux couches superposées, parcelles et boulangeries, suite à une question de suivi"
              caption="Question de suivi « Quelles sont les boulangeries dans ces parcelles ? » : la nouvelle couche (points roses) se superpose à la précédente sans perdre le contexte"
            />

            {bodyText("Le geste \"Recherche dans cette zone\" reprend un pattern connu (type Google Maps / Airbnb) : plutôt que de tout re-décrire en langage naturel, l'utilisateur peut simplement déplacer la carte et relancer la recherche sur la zone visible.")}
          </section>
        )}

        {/* ── RECHERCHE MOTS-CLÉS VS IA ── */}
        {active === 'recherche' && (
          <section>
            {sectionTitle('Trois façons de chercher, une seule interface')}
            {bodyText("En parallèle du chat cartographique, j'ai travaillé sur une refonte du moteur de recherche de T360 lui-même : une refonte qui n'a jamais vu le jour faute de budget, mais suffisamment aboutie pour être testée en clientèle.")}
            <div className="my-4" />
            {bodyText("Plutôt que d'opposer mots-clés et langage naturel, le principe retenu propose trois modes accessibles depuis le même sélecteur : Recherche libre, Mot par mot, et Syntaxe avancée. L'utilisateur choisit son mode selon ce qui lui est le plus naturel à l'instant T, avec un aller-retour possible entre les modes.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/mode-mots-cles.jpg`}
              alt="Interface T360 en mode recherche mots par mot, avec les résultats du fil d'actualité"
              caption="Mode « Mot par mot » : ajout de mots-clés un par un, pour qui sait précisément ce qu'il cherche"
            />

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/mode-syntaxe.jpg`}
              alt="Interface T360 en mode syntaxe avancée, avec un champ de mots-clés embarqués"
              caption="Mode « Syntaxe avancée » : opérateurs booléens explicites (AND, OR, NEAR), pour les utilisateurs experts qui pensent déjà en requêtes"
            />

            {bodyText("Le mode « Recherche libre » est celui qui change vraiment la donne : l'utilisateur formule sa demande en une phrase, et l'interface la traduit en clair avant de lancer la recherche, avec la possibilité de basculer sur la syntaxe technique équivalente pour vérifier ou affiner.")}

            <ImagePair
              images={[
                {
                  src: `${import.meta.env.BASE_URL}poc-llm-carto/traduction-libre.jpg`,
                  alt: "Recherche libre avec traduction en langage clair des critères compris par le système",
                  caption: "Traduction en clair, critères explicites et modifiables individuellement",
                },
                {
                  src: `${import.meta.env.BASE_URL}poc-llm-carto/traduction-syntaxe.jpg`,
                  alt: "La même requête affichée en syntaxe booléenne technique",
                  caption: "La même requête en syntaxe technique (AND / OR / NEAR)",
                },
              ]}
            />

            {bodyText("Cette double lecture (traduction lisible ↔ syntaxe technique) est le cœur de l'hypothèse testée : donner confiance dans ce que l'IA a compris, sans jamais cacher la mécanique à qui veut la voir.")}
          </section>
        )}

        {/* ── TESTS UTILISATEURS ── */}
        {active === 'tests' && (
          <section>
            {sectionTitle('Tester avant de conclure')}
            {bodyText("Ce mode de recherche a été présenté et testé en clientèle, auprès d'interlocuteurs aux profils volontairement différents : un profil directeur, usage stratégique et vision d'ensemble, et un profil chargé de veille, usage quotidien et opérationnel.")}

            {accent("Le postulat de départ n'était pas neutre : est-ce que des utilisateurs habitués à un moteur de recherche très structuré allaient adopter un mode conversationnel, ou le vivre comme une régression ?")}

            <h3 className="text-lg font-semibold mt-8 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              La traduction en clair, plébiscitée
            </h3>
            {bodyText("Le retour le plus net a porté sur la vue \"traduction\" de la recherche libre : voir sa phrase reformulée en critères explicites rassure, parce qu'une erreur de compréhension de l'IA devient immédiatement visible.")}
            <Verbatim text="Oui, c'est une bonne approche. C'est plus facile pour certaines personnes de mettre une phrase en expliquant, et après que ce soit traduit par des mots-clés, ça me semble bien." />
            <Verbatim text="Finalement, la traduction, elle me va bien. Je pense que s'il y avait une erreur, on le verrait dans la traduction." />
            {bodyText("Un interlocuteur a même formulé l'ambition ultime : que le système pose lui-même des questions de clarification avant de lancer la recherche, sur le modèle des outils de recherche approfondie qu'il utilise déjà par ailleurs, une seule recherche affinée par étapes plutôt que reformulée à chaque fois depuis zéro.")}
            <Verbatim text="Le truc ultime, ça serait de pouvoir partir d'une recherche libre très générale, et qu'il y ait un approfondissement, un bot qui dise : attendez, est-ce que vous voulez uniquement tel type de projet ou tel autre ? Ça permet de préciser encore plus. Avec un seul mode de recherche, j'arrive à quelque chose de très affiné." />

            <h3 className="text-lg font-semibold mt-8 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Le mode mot par mot, jugé superflu par les profils avancés
            </h3>
            {bodyText("Un profil très à l'aise avec la syntaxe technique a été clair : il irait spontanément vers la syntaxe avancée plutôt que de passer par un mode intermédiaire mot par mot. Le mode thématique, lui, n'a convaincu qu'une fois recontextualisé comme un point de départ personnalisable, pas comme un premier réflexe de recherche.")}
            <Verbatim text="Naturellement, j'aurais tendance à aller tout de suite vers la syntaxe avancée. Je pense que je n'utiliserais pas forcément le mot par mot." />
            <Verbatim text="Ce n'est pas le plus intuitif pour moi, j'irais peut-être moins vers ce mode de recherche-là." />

            <h3 className="text-lg font-semibold mt-8 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              La traçabilité, non négociable
            </h3>
            {bodyText("Sur les fonctionnalités IA de synthèse, le point qui revient systématiquement est la source : pouvoir vérifier d'où vient une affirmation, avec la date, plutôt que de faire confiance à une synthèse qui pourrait figer une position ancienne comme si elle était toujours d'actualité.")}
            <Verbatim text="Ça serait top que l'IA aille chercher dans toutes ses déclarations passées, et qu'on ait le lien pour retourner à l'article ou à la délibération qui le cite, avec la date." />
            <Verbatim text="Le risque, c'est qu'un acteur ait pris une position à un moment donné, que l'IA la lui attribue, et qu'on garde ça bien en tête alors qu'il a changé d'avis depuis. De ce que je comprends de l'IA, il faut l'utiliser, mais pas la croire les yeux fermés." />
            {bodyText("La concision a aussi été pointée : un résumé IA trop long, qui noie l'information plutôt que de la condenser, était vécu comme un vrai irritant plutôt qu'un gain de temps.")}
            <Verbatim text="Ce qui me frustre parfois avec les IA, c'est qu'on leur pose une question et elles pondent deux paragraphes de blabla pour, au final, ne pas avoir beaucoup d'infos. Elles ne vont pas assez vite droit au but." />

            <h3 className="text-lg font-semibold mt-8 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Ce que ça m'a appris
            </h3>
            {bodyText("Le plus contre-intuitif : ce ne sont pas les profils les moins à l'aise avec l'outil qui ont le plus demandé de garde-fous sur l'IA, mais les plus experts. Plus on maîtrise un domaine, plus on veut vérifier et garder le contrôle sur l'outil qui travaille pour nous. Ça a confirmé une conviction que j'avais déjà sur mes autres explorations IA : le bon réflexe n'est pas de tout automatiser, mais de rendre le raisonnement de l'IA visible et interruptible à tout moment.")}
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
