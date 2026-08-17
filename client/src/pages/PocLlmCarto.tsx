/*
  PocLlmCarto.tsx, Cas d'étude : Exploration IA appliquée à la cartographie
  Charte : Jost pour les titres, DM Sans pour le corps, bleu #3B3FD8 en accent
  Structure : 4 chapitres séquencés. Bilingue FR/EN (voir lib/i18n.tsx)
*/

import { useState } from 'react';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import CaseStudyHeader from '@/components/CaseStudyHeader';
import { useLanguage, type Lang } from '@/lib/i18n';

type Bi = { fr: string; en: string };
const t = (lang: Lang, bi: Bi) => bi[lang];

const CHAPTERS: { id: string; label: Bi }[] = [
  { id: 'contexte', label: { fr: 'Contexte', en: 'Context' } },
  { id: 'chat-carte', label: { fr: 'Chat & carte interactive', en: 'Chat & interactive map' } },
  { id: 'recherche', label: { fr: 'Mots-clés vs IA', en: 'Keywords vs AI' } },
  { id: 'tests', label: { fr: 'Tests utilisateurs', en: 'User testing' } },
];

const sectionTitle = (lang: Lang, bi: Bi) => (
  <h2
    className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 break-words"
    style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)', lineHeight: 1.25, letterSpacing: '-0.01em' }}
  >
    {t(lang, bi)}
  </h2>
);

const bodyText = (lang: Lang, bi: Bi, className = '') => (
  <p
    className={`text-sm sm:text-base leading-relaxed break-words ${className}`}
    style={{ color: 'oklch(0.28 0.03 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.75 }}
  >
    {t(lang, bi)}
  </p>
);

const accent = (lang: Lang, bi: Bi) => (
  <div
    className="rounded-sm px-6 py-5 my-8"
    style={{ backgroundColor: 'oklch(0.94 0.04 264)', borderLeft: '3px solid #3B3FD8' }}
  >
    <p
      className="text-base italic"
      style={{ color: 'oklch(0.25 0.05 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}
    >
      {t(lang, bi)}
    </p>
  </div>
);

const h3 = (lang: Lang, bi: Bi) => (
  <h3 className="text-lg font-semibold mt-8 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
    {t(lang, bi)}
  </h3>
);

function CaseImage({ src, alt, caption }: { src: string; alt: Bi; caption?: Bi }) {
  const { lang } = useLanguage();
  return (
    <div className="my-8">
      <div className="overflow-hidden rounded-sm" style={{ border: '1px solid oklch(0.91 0.02 264)' }}>
        <img src={src} alt={t(lang, alt)} className="w-full h-auto block" loading="lazy" />
      </div>
      {caption && (
        <p className="text-xs mt-2" style={{ color: 'oklch(0.52 0.04 264)', fontFamily: 'DM Sans, sans-serif', fontStyle: 'italic' }}>
          {t(lang, caption)}
        </p>
      )}
    </div>
  );
}

function ImagePair({ images }: { images: { src: string; alt: Bi; caption?: Bi }[] }) {
  const { lang } = useLanguage();
  return (
    <div className="grid grid-cols-2 gap-4 my-8">
      {images.map((img, i) => (
        <div key={i}>
          <div className="overflow-hidden rounded-sm" style={{ border: '1px solid oklch(0.91 0.02 264)' }}>
            <img src={img.src} alt={t(lang, img.alt)} className="w-full h-auto block" loading="lazy" />
          </div>
          {img.caption && (
            <p className="text-xs mt-2" style={{ color: 'oklch(0.52 0.04 264)', fontFamily: 'DM Sans, sans-serif', fontStyle: 'italic' }}>
              {t(lang, img.caption)}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function Verbatim({ text }: { text: Bi }) {
  const { lang } = useLanguage();
  return (
    <div
      className="rounded-sm px-5 py-4 my-4"
      style={{ backgroundColor: 'oklch(0.95 0.03 264)', borderLeft: '3px solid #8D9DFF' }}
    >
      <p
        className="text-sm italic"
        style={{ color: 'oklch(0.3 0.06 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}
      >
        « {t(lang, text)} »
      </p>
      <p
        className="text-xs mt-2 uppercase tracking-widest"
        style={{ color: 'oklch(0.5 0.06 264)', fontFamily: 'DM Sans, sans-serif' }}
      >
        {lang === 'en' ? 'User verbatim, client testing' : 'Verbatim utilisateur, test client'}
      </p>
    </div>
  );
}

export default function PocLlmCarto() {
  const [active, setActive] = useState('contexte');
  const { lang } = useLanguage();

  return (
    <>
    <SEOHead
      title="Exploration IA appliquée à la cartographie"
      description="POC LLM au sein du groupe Intescia : recherche en langage naturel, chat conversationnel couplé à une carte interactive, refonte du moteur de recherche T360 et tests utilisateurs."
      canonicalPath="/projet/poc-llm-carto"
    />
    <div className="min-h-screen w-full" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>

      <CaseStudyHeader
        title="Exploration IA appliquée à la cartographie"
        titleEn="AI applied to mapping, an exploration"
        tags={['R&D', 'Intelligence Artificielle', 'UX Research', 'Exploration produit']}
        tagsEn={['R&D', 'Artificial Intelligence', 'UX Research', 'Product exploration']}
        description="Explorer comment l'IA peut transformer la recherche de données dans les outils du groupe Intescia, avec T360 comme terrain d'expérimentation."
        descriptionEn="Exploring how AI can transform data search across the Intescia group's tools, using T360 as the testing ground."
        meta={[
          { label: 'Rôle', value: 'Product Designer, Exploration R&D' },
          { label: 'Contexte', value: 'Groupe Intescia' },
          { label: 'Terrain', value: 'T360 (cobaye du process)' },
          { label: 'Type', value: 'POC, exploration produit' },
        ]}
        metaEn={[
          { label: 'Role', value: 'Product Designer, R&D exploration' },
          { label: 'Context', value: 'Intescia group' },
          { label: 'Testing ground', value: 'T360 (first product to test on)' },
          { label: 'Type', value: 'POC, product exploration' },
        ]}
        bodyTranslated
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
              {t(lang, ch.label)}
            </button>
          ))}
        </div>
      </nav>

      <main className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl py-8 sm:py-14">

        {/* ── CONTEXTE ── */}
        {active === 'contexte' && (
          <section>
            {sectionTitle(lang, { fr: "Un terrain d'exploration, pas un cahier des charges", en: 'A testing ground, not a spec sheet' })}
            {bodyText(lang, {
              fr: "Il n'y a pas eu de ticket, pas de brief formel retraçant le détail du travail. Mais le sujet lui-même était bien un projet d'entreprise : un POC LLM Carto mené en interne pour évaluer comment l'intelligence artificielle pouvait s'intégrer utilement dans les applications du groupe Intescia, au-delà de l'effet de mode.",
              en: "There was no ticket, no formal brief tracing the detail of the work. But the subject itself was a real company project: a POC LLM Carto run internally to assess how AI could be usefully integrated into the Intescia group's applications, beyond the hype.",
            })}
            <div className="my-4" />
            {bodyText(lang, {
              fr: "T360 a servi de cobaye. C'est l'outil sur lequel j'ai le plus de recul, avec la base d'utilisateurs la plus large et la plus grande diversité de profils. Idéal pour tester des hypothèses avant de penser à les généraliser à d'autres produits du portefeuille.",
              en: "T360 served as the testing ground. It's the tool I know best, with the widest user base and the most diverse range of profiles. Ideal for testing hypotheses before even thinking about generalizing them to other products in the portfolio.",
            })}

            {accent(lang, {
              fr: "Deux pistes explorées en parallèle : un chat conversationnel couplé à une carte interactive pour la donnée cartographique, et une refonte du moteur de recherche existant pour qu'il comprenne le langage naturel autant que les mots-clés.",
              en: "Two directions explored in parallel: a conversational chat paired with an interactive map for mapping data, and a redesign of the existing search engine so it would understand natural language as well as keywords.",
            })}

            {bodyText(lang, {
              fr: "Les deux chantiers partagent le même postulat de départ : la recherche de données ne devrait pas obliger l'utilisateur à apprendre le vocabulaire ou la structure de l'outil. Il devrait pouvoir exprimer son besoin avec ses propres mots, et laisser le système faire le travail de traduction.",
              en: "Both efforts share the same starting premise: searching for data shouldn't force the user to learn the tool's vocabulary or structure. They should be able to express their need in their own words, and let the system do the work of translating it.",
            })}
          </section>
        )}

        {/* ── CHAT & CARTE ── */}
        {active === 'chat-carte' && (
          <section>
            {sectionTitle(lang, { fr: 'Un chat qui pilote une carte interactive', en: 'A chat that drives an interactive map' })}
            {bodyText(lang, {
              fr: "Le principe : explorer toutes les données du groupe (contours administratifs, base immeuble, parcellaire, transactions, PLU, friches, projets d'aménagement...) en formulant simplement sa question, plutôt qu'en naviguant dans des filtres successifs.",
              en: "The idea: explore all of the group's data (administrative boundaries, building database, land parcels, transactions, zoning plans, brownfield sites, development projects...) by simply asking a question, instead of navigating through successive filters.",
            })}
            <div className="my-4" />
            {bodyText(lang, {
              fr: "J'ai exploré deux dispositions : le chat en colonne à gauche avec les résultats à droite, et le chat en bandeau horizontal en haut avec les résultats en dessous. Plusieurs itérations pour trouver l'équilibre entre la place laissée à la conversation et celle laissée à la carte.",
              en: "I explored two layouts: chat in a left column with results on the right, and chat as a horizontal bar on top with results below. Several iterations to find the right balance between space for the conversation and space for the map.",
            })}

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/chat-onboarding.jpg`}
              alt={{ fr: 'Interface chat avec suggestions de questions et zone de résultats vide', en: 'Chat interface with suggested questions and an empty results area' }}
              caption={{ fr: "Écran d'accueil du chat : suggestions de questions types, liste des données couvertes par le modèle accessible en info-bulle", en: "Chat home screen: sample question suggestions, list of data the model covers available as a tooltip" }}
            />

            {bodyText(lang, {
              fr: "Les résultats s'affichent sous forme de fiches détaillées, avec bascule immédiate vers une carte interactive. L'utilisateur peut ajouter des couches sur cette carte, les recolorer, les renommer, les masquer ou les partager.",
              en: "Results appear as detailed cards, with an immediate switch to an interactive map. The user can add layers to that map, recolor them, rename them, hide them or share them.",
            })}

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/carte-parcelles.jpg`}
              alt={{ fr: 'Résultats de recherche en fiches détaillées et carte avec une couche de parcelles', en: 'Search results as detailed cards and a map with a parcels layer' }}
              caption={{ fr: "Résultat pour « Quelles sont les parcelles de + de 1000m² à Toulouse ? » : fiches détaillées à gauche, couche cartographiée à droite, export possible", en: 'Result for "Which parcels over 1000m² are in Toulouse?": detailed cards on the left, mapped layer on the right, exportable' }}
            />

            {bodyText(lang, {
              fr: "Le vrai intérêt du format conversationnel apparaît dans l'enchaînement : chaque nouvelle question s'ajoute à la carte comme une couche supplémentaire, sans repartir de zéro. Poser une question de suivi (\"quelles boulangeries dans ces parcelles ?\") superpose le résultat sur la carte existante plutôt que de la remplacer.",
              en: "The real value of the conversational format shows up in the sequence: every new question is added to the map as an extra layer, without starting over. Asking a follow-up question (\"which bakeries are in these parcels?\") layers the result on top of the existing map instead of replacing it.",
            })}

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/carte-multi-couches.jpg`}
              alt={{ fr: 'Carte avec deux couches superposées, parcelles et boulangeries, suite à une question de suivi', en: 'Map with two overlaid layers, parcels and bakeries, after a follow-up question' }}
              caption={{ fr: "Question de suivi « Quelles sont les boulangeries dans ces parcelles ? » : la nouvelle couche (points roses) se superpose à la précédente sans perdre le contexte", en: 'Follow-up question "Which bakeries are in these parcels?": the new layer (pink dots) overlays the previous one without losing context' }}
            />

            {bodyText(lang, {
              fr: "Le geste \"Recherche dans cette zone\" reprend un pattern connu (type Google Maps / Airbnb) : plutôt que de tout re-décrire en langage naturel, l'utilisateur peut simplement déplacer la carte et relancer la recherche sur la zone visible.",
              en: "The \"Search this area\" gesture reuses a familiar pattern (think Google Maps / Airbnb): rather than re-describing everything in natural language, the user can simply move the map and rerun the search on the visible area.",
            })}
          </section>
        )}

        {/* ── RECHERCHE MOTS-CLÉS VS IA ── */}
        {active === 'recherche' && (
          <section>
            {sectionTitle(lang, { fr: 'Trois façons de chercher, une seule interface', en: 'Three ways to search, one interface' })}
            {bodyText(lang, {
              fr: "En parallèle du chat cartographique, j'ai travaillé sur une refonte du moteur de recherche de T360 lui-même : une refonte qui n'a jamais vu le jour faute de budget, mais suffisamment aboutie pour être testée en clientèle.",
              en: "Alongside the mapping chat, I worked on a redesign of T360's own search engine: a redesign that never shipped due to budget, but was developed enough to be tested with clients.",
            })}
            <div className="my-4" />
            {bodyText(lang, {
              fr: "Plutôt que d'opposer mots-clés et langage naturel, le principe retenu propose trois modes accessibles depuis le même sélecteur : Recherche libre, Mot par mot, et Syntaxe avancée. L'utilisateur choisit son mode selon ce qui lui est le plus naturel à l'instant T, avec un aller-retour possible entre les modes.",
              en: "Instead of pitting keywords against natural language, the approach offers three modes accessible from the same selector: Free search, Word by word, and Advanced syntax. The user picks whichever feels most natural at the moment, and can switch back and forth between modes.",
            })}

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/mode-mots-cles.jpg`}
              alt={{ fr: 'Interface T360 en mode recherche mots par mot, avec les résultats du fil d\'actualité', en: "T360 interface in word-by-word search mode, with news feed results" }}
              caption={{ fr: "Mode « Mot par mot » : ajout de mots-clés un par un, pour qui sait précisément ce qu'il cherche", en: '"Word by word" mode: adding keywords one at a time, for anyone who knows exactly what they\'re looking for' }}
            />

            <CaseImage
              src={`${import.meta.env.BASE_URL}poc-llm-carto/mode-syntaxe.jpg`}
              alt={{ fr: 'Interface T360 en mode syntaxe avancée, avec un champ de mots-clés embarqués', en: 'T360 interface in advanced syntax mode, with an embedded keyword field' }}
              caption={{ fr: "Mode « Syntaxe avancée » : opérateurs booléens explicites (AND, OR, NEAR), pour les utilisateurs experts qui pensent déjà en requêtes", en: '"Advanced syntax" mode: explicit boolean operators (AND, OR, NEAR), for expert users who already think in queries' }}
            />

            {bodyText(lang, {
              fr: "Le mode « Recherche libre » est celui qui change vraiment la donne : l'utilisateur formule sa demande en une phrase, et l'interface la traduit en clair avant de lancer la recherche, avec la possibilité de basculer sur la syntaxe technique équivalente pour vérifier ou affiner.",
              en: '"Free search" mode is the real game-changer: the user phrases their request as a sentence, and the interface translates it in plain terms before running the search, with the option to switch to the equivalent technical syntax to check or refine it.',
            })}

            <ImagePair
              images={[
                {
                  src: `${import.meta.env.BASE_URL}poc-llm-carto/traduction-libre.jpg`,
                  alt: { fr: "Recherche libre avec traduction en langage clair des critères compris par le système", en: 'Free search with a plain-language translation of the criteria the system understood' },
                  caption: { fr: "Traduction en clair, critères explicites et modifiables individuellement", en: 'Plain-language translation, criteria made explicit and individually editable' },
                },
                {
                  src: `${import.meta.env.BASE_URL}poc-llm-carto/traduction-syntaxe.jpg`,
                  alt: { fr: "La même requête affichée en syntaxe booléenne technique", en: 'The same query shown as technical boolean syntax' },
                  caption: { fr: "La même requête en syntaxe technique (AND / OR / NEAR)", en: 'The same query in technical syntax (AND / OR / NEAR)' },
                },
              ]}
            />

            {bodyText(lang, {
              fr: "Cette double lecture (traduction lisible ↔ syntaxe technique) est le cœur de l'hypothèse testée : donner confiance dans ce que l'IA a compris, sans jamais cacher la mécanique à qui veut la voir.",
              en: "This dual view (readable translation ↔ technical syntax) is at the heart of the hypothesis being tested: build confidence in what the AI understood, without ever hiding the mechanics from anyone who wants to see them.",
            })}
          </section>
        )}

        {/* ── TESTS UTILISATEURS ── */}
        {active === 'tests' && (
          <section>
            {sectionTitle(lang, { fr: 'Tester avant de conclure', en: 'Testing before concluding' })}
            {bodyText(lang, {
              fr: "Ce mode de recherche a été présenté et testé en clientèle, auprès d'interlocuteurs aux profils volontairement différents : un profil directeur, usage stratégique et vision d'ensemble, et un profil chargé de veille, usage quotidien et opérationnel.",
              en: "This search approach was presented and tested with clients, with deliberately different profiles: a director-level profile, strategic use and big-picture view, and a monitoring-officer profile, daily operational use.",
            })}

            {accent(lang, {
              fr: "Le postulat de départ n'était pas neutre : est-ce que des utilisateurs habitués à un moteur de recherche très structuré allaient adopter un mode conversationnel, ou le vivre comme une régression ?",
              en: "The starting premise wasn't neutral: would users used to a very structured search engine actually adopt a conversational mode, or experience it as a step backward?",
            })}

            {h3(lang, { fr: 'La traduction en clair, plébiscitée', en: 'Plain-language translation, a clear favorite' })}
            {bodyText(lang, {
              fr: "Le retour le plus net a porté sur la vue \"traduction\" de la recherche libre : voir sa phrase reformulée en critères explicites rassure, parce qu'une erreur de compréhension de l'IA devient immédiatement visible.",
              en: "The clearest feedback was about the \"translation\" view in free search: seeing your sentence rephrased into explicit criteria is reassuring, because any misunderstanding by the AI becomes immediately visible.",
            })}
            <Verbatim text={{
              fr: "Oui, c'est une bonne approche. C'est plus facile pour certaines personnes de mettre une phrase en expliquant, et après que ce soit traduit par des mots-clés, ça me semble bien.",
              en: "Yes, it's a good approach. For some people it's easier to just write a sentence explaining what they want, and then have it translated into keywords, that seems good to me.",
            }} />
            <Verbatim text={{
              fr: "Finalement, la traduction, elle me va bien. Je pense que s'il y avait une erreur, on le verrait dans la traduction.",
              en: "Honestly, the translation works for me. I think if there were a mistake, you'd see it in the translation.",
            }} />
            {bodyText(lang, {
              fr: "Un interlocuteur a même formulé l'ambition ultime : que le système pose lui-même des questions de clarification avant de lancer la recherche, sur le modèle des outils de recherche approfondie qu'il utilise déjà par ailleurs, une seule recherche affinée par étapes plutôt que reformulée à chaque fois depuis zéro.",
              en: "One interviewee even spelled out the ultimate ambition: having the system ask its own clarifying questions before running the search, similar to the deep-research tools he already uses elsewhere, one search refined step by step rather than rewritten from scratch every time.",
            })}
            <Verbatim text={{
              fr: "Le truc ultime, ça serait de pouvoir partir d'une recherche libre très générale, et qu'il y ait un approfondissement, un bot qui dise : attendez, est-ce que vous voulez uniquement tel type de projet ou tel autre ? Ça permet de préciser encore plus. Avec un seul mode de recherche, j'arrive à quelque chose de très affiné.",
              en: "The ultimate thing would be starting from a very broad free search, and then having a deeper follow-up, a bot that says: wait, do you want only this type of project or that one? That lets you refine it further. With a single search mode, I end up with something really fine-tuned.",
            }} />

            {h3(lang, { fr: 'Le mode mot par mot, jugé superflu par les profils avancés', en: 'Word-by-word mode, seen as redundant by advanced users' })}
            {bodyText(lang, {
              fr: "Un profil très à l'aise avec la syntaxe technique a été clair : il irait spontanément vers la syntaxe avancée plutôt que de passer par un mode intermédiaire mot par mot. Le mode thématique, lui, n'a convaincu qu'une fois recontextualisé comme un point de départ personnalisable, pas comme un premier réflexe de recherche.",
              en: "One user very comfortable with technical syntax was clear: they'd go straight to advanced syntax rather than through an intermediate word-by-word mode. The thematic mode only landed once reframed as a customizable starting point, not as a first search instinct.",
            })}
            <Verbatim text={{
              fr: "Naturellement, j'aurais tendance à aller tout de suite vers la syntaxe avancée. Je pense que je n'utiliserais pas forcément le mot par mot.",
              en: "Naturally, I'd tend to go straight to advanced syntax. I don't think I'd necessarily use word-by-word.",
            }} />
            <Verbatim text={{
              fr: "Ce n'est pas le plus intuitif pour moi, j'irais peut-être moins vers ce mode de recherche-là.",
              en: "It's not the most intuitive for me, I'd probably reach for that search mode less often.",
            }} />

            {h3(lang, { fr: 'La traçabilité, non négociable', en: 'Traceability, non-negotiable' })}
            {bodyText(lang, {
              fr: "Sur les fonctionnalités IA de synthèse, le point qui revient systématiquement est la source : pouvoir vérifier d'où vient une affirmation, avec la date, plutôt que de faire confiance à une synthèse qui pourrait figer une position ancienne comme si elle était toujours d'actualité.",
              en: "On the AI summary features, the point that came up every time was the source: being able to check where a claim came from, with a date, rather than trusting a summary that might freeze an old position as if it were still current.",
            })}
            <Verbatim text={{
              fr: "Ça serait top que l'IA aille chercher dans toutes ses déclarations passées, et qu'on ait le lien pour retourner à l'article ou à la délibération qui le cite, avec la date.",
              en: "It would be great if the AI searched through all their past statements, and we had the link back to the article or the deliberation that quotes it, with the date.",
            }} />
            <Verbatim text={{
              fr: "Le risque, c'est qu'un acteur ait pris une position à un moment donné, que l'IA la lui attribue, et qu'on garde ça bien en tête alors qu'il a changé d'avis depuis. De ce que je comprends de l'IA, il faut l'utiliser, mais pas la croire les yeux fermés.",
              en: "The risk is that someone took a position at some point, the AI attributes it to them, and we keep that in mind even though they've since changed their view. From what I understand of AI, you should use it, but not trust it blindly.",
            }} />
            {bodyText(lang, {
              fr: "La concision a aussi été pointée : un résumé IA trop long, qui noie l'information plutôt que de la condenser, était vécu comme un vrai irritant plutôt qu'un gain de temps.",
              en: "Conciseness came up too: an AI summary that's too long, drowning the information instead of condensing it, was experienced as a real annoyance rather than a time saver.",
            })}
            <Verbatim text={{
              fr: "Ce qui me frustre parfois avec les IA, c'est qu'on leur pose une question et elles pondent deux paragraphes de blabla pour, au final, ne pas avoir beaucoup d'infos. Elles ne vont pas assez vite droit au but.",
              en: "What frustrates me sometimes with AI is you ask a question and it writes two paragraphs of filler, and in the end there's not much actual information. It doesn't get to the point fast enough.",
            }} />

            {h3(lang, { fr: 'Ce que ça m\'a appris', en: 'What it taught me' })}
            {bodyText(lang, {
              fr: "Le plus contre-intuitif : ce ne sont pas les profils les moins à l'aise avec l'outil qui ont le plus demandé de garde-fous sur l'IA, mais les plus experts. Plus on maîtrise un domaine, plus on veut vérifier et garder le contrôle sur l'outil qui travaille pour nous. Ça a confirmé une conviction que j'avais déjà sur mes autres explorations IA : le bon réflexe n'est pas de tout automatiser, mais de rendre le raisonnement de l'IA visible et interruptible à tout moment.",
              en: "The most counter-intuitive finding: it wasn't the least comfortable users who asked for the most guardrails on AI, it was the most expert ones. The more you master a domain, the more you want to check and stay in control of the tool working for you. That confirmed a conviction I already had from my other AI explorations: the right instinct isn't to automate everything, but to make the AI's reasoning visible and interruptible at any time.",
            })}
          </section>
        )}

        {/* Navigation bas de page */}
        <div
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center"
          style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}
        >
          <Link href="/" className="text-sm transition-opacity hover:opacity-60" style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif' }}>
            {lang === 'en' ? '← All projects' : '← Tous les projets'}
          </Link>
          <Link
            href="/contact"
            className="text-sm px-4 py-2 rounded-sm transition-opacity hover:opacity-80"
            style={{ backgroundColor: 'oklch(0.42 0.22 264)', color: '#fff', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
          >
            {lang === 'en' ? 'Get in touch' : 'Me contacter'}
          </Link>
        </div>
      </main>
    </div>
    </>
  );
}
