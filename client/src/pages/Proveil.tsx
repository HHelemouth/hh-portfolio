/*
  Proveil.tsx, Cas d'étude Proveil
  Charte : Jost pour les titres, DM Sans pour le corps, bleu #3B3FD8 en accent
  Structure : 5 chapitres séquencés. Bilingue FR/EN (voir lib/i18n.tsx)
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
  { id: 'hassenzahl', label: { fr: 'Test Hassenzahl', en: 'Hassenzahl test' } },
  { id: 'entretiens', label: { fr: "Entretiens d'usage", en: 'Usage interviews' } },
  { id: 'atelier', label: { fr: 'Atelier & Conception', en: 'Workshop & Design' } },
  { id: 'resultats', label: { fr: 'Résultats', en: 'Results' } },
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

const h3 = (lang: Lang, bi: Bi, extraClass = 'mt-8') => (
  <h3 className={`text-lg font-semibold ${extraClass} mb-4`} style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
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

export default function Proveil() {
  const [active, setActive] = useState('contexte');
  const { lang } = useLanguage();

  return (
    <>
    <SEOHead
      title="Proveil"
      description="Refonte ergonomique et graphique d'un logiciel interne. Test Hassenzahl, entretiens d'usage, atelier de co-conception et résultats mesurés."
      canonicalPath="/projet/proveil"
    />
    <div className="min-h-screen w-full" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>

      {/* Hero */}
      <CaseStudyHeader
        title="Proveil"
        titleEn="Proveil"
        tags={['UX Research', 'Test Hassenzahl', 'Refonte', 'Outil interne']}
        tagsEn={['UX Research', 'Hassenzahl test', 'Redesign', 'Internal tool']}
        description="Refonte ergonomique et graphique du logiciel interne utilisé par l'ensemble des collaborateurs d'Explore."
        descriptionEn="UX and visual redesign of the internal software used by every team at Explore."
        meta={[
          { label: 'Rôle', value: 'UX Research, Refonte' },
          { label: 'Contexte', value: 'Explore, groupe Intescia' },
          { label: 'Service', value: 'Documentalistes (+80 utilisateurs)' },
          { label: 'Type', value: 'Refonte outil interne' },
        ]}
        metaEn={[
          { label: 'Role', value: 'UX Research, Redesign' },
          { label: 'Context', value: 'Explore, Intescia group' },
          { label: 'Team', value: 'Documentation officers (80+ users)' },
          { label: 'Type', value: 'Internal tool redesign' },
        ]}
        bodyTranslated
      />

      {/* Bandeau résultats, teaser en tête, avant même le détail de la démarche */}
      <div
        style={{ backgroundColor: 'oklch(0.97 0.015 264)', borderBottom: '1px solid oklch(0.91 0.02 264)' }}
      >
        <div className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl py-6 sm:py-8">
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
        >
          {lang === 'en' ? 'The result, at a glance' : "Le résultat, en un coup d'œil"}
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-x-12 mb-4">
          {[
            { value: '−37%', label: { fr: 'Temps de traitement moyen', en: 'Average processing time' } },
            { value: '×1,79', label: { fr: 'Fiches traitées à temps égal', en: 'Records processed in the same time' } },
            { value: '+80', label: { fr: 'Utilisateurs impactés', en: 'Users impacted' } },
          ].map((m) => (
            <div key={m.value}>
              <span
                className="block text-2xl sm:text-3xl"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 800, color: 'oklch(0.42 0.22 264)' }}
              >
                {m.value}
              </span>
              <span className="text-xs" style={{ color: 'oklch(0.4 0.06 264)', fontFamily: 'DM Sans, sans-serif' }}>
                {t(lang, m.label)}
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
              {t(lang, ch.label)}
            </button>
          ))}
        </div>
      </nav>

      {/* Contenu des chapitres */}
      <main className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl py-8 sm:py-14">

        {/* ── CONTEXTE ── */}
        {active === 'contexte' && (
          <section>
            {sectionTitle(lang, { fr: "Proveil, c'est quoi ?", en: 'What is Proveil?' })}
            {bodyText(lang, {
              fr: "Proveil est un logiciel de récolte, de paramétrage et de saisie de données utilisé par l'ensemble des collaborateurs de l'entreprise Explore : la production (8 services de traitement des données), le service client, les commerciaux ainsi que les managers de chaque service avec leurs usages particuliers.",
              en: "Proveil is a data collection, configuration and entry tool used across the entire Explore company: production (8 data-processing teams), customer service, sales, and each team's managers, each with their own way of using it.",
            })}

            {h3(lang, { fr: 'Objectifs', en: 'Goals' })}
            {bodyText(lang, {
              fr: "L'outil a plus de 12 ans d'existence. Une révision était indispensable en raison des nombreuses évolutions du logiciel et de son interface peu attrayante, nécessitant une maintenance excessive.",
              en: "The tool is over 12 years old. A revamp was overdue, given how much the software had evolved and how unappealing its interface had become, requiring excessive maintenance.",
            })}
            <div className="my-4" />
            {bodyText(lang, {
              fr: "L'objectif est d'améliorer le quotidien des documentalistes mais surtout d'optimiser leur temps et leur volumétrie de traitement de l'information. Ce service mobilise 3 personnes.",
              en: "The goal is to make life easier for the documentation team day to day, and above all to optimize their time and how much information they can process. This team is made up of 3 people.",
            })}

            {accent(lang, {
              fr: "Voici une explication de mon processus d'amélioration pour les interfaces liées au traitement des planifications urbaines, ce service mobilise 3 personnes.",
              en: "Here's a walkthrough of my improvement process for the interfaces handling urban planning records, a service run by 3 people.",
            })}
          </section>
        )}

        {/* ── TEST HASSENZAHL ── */}
        {active === 'hassenzahl' && (
          <section>
            {sectionTitle(lang, { fr: "Analyse et état des lieux de l'interface actuelle", en: 'Assessing the current interface' })}
            {bodyText(lang, {
              fr: "Dans un premier temps, j'ai réalisé un test Hassenzahl pour connaître les impressions des utilisateurs et apprivoiser cet outil.",
              en: "As a first step, I ran a Hassenzahl test to understand users' impressions and get familiar with the tool.",
            })}

            {h3(lang, { fr: "Ce que l'enquête a remonté", en: 'What the survey revealed' })}
            <div className="space-y-3 my-6">
              {[
                { ok: true, text: { fr: 'Le système reste professionnel donc répond à cette intention', en: 'The system still feels professional, so it meets that intent' } },
                { ok: false, text: { fr: "Le système n'est pas captivant. Nous avons une note générale d'attractivité très basse, donc un usage quotidien pénible", en: 'The system is not engaging. Overall appeal scored very low, making daily use unpleasant' } },
                { ok: false, text: { fr: "Il n'est pas assez clair, efficace, pratique ni assez structuré", en: "It's not clear, efficient, practical or structured enough" } },
                { ok: false, text: { fr: "Il n'est pas assez contrôlable. Le système est décrit comme challengant, voire décourageant. Les retours nous rapportent une source de frustration profonde", en: "It doesn't feel controllable enough. The system is described as challenging, even discouraging. Feedback points to a deep source of frustration" } },
                { ok: false, text: { fr: "L'outil semble peu présentable, ce qui marque un manque de fierté de la présentation/démonstration lors de la formation des nouveaux collaborateurs. Les retours notent difficilement le maîtriser aisément l'outil.", en: "The tool doesn't feel presentable, which shows in a lack of pride when demonstrating it during onboarding. Feedback notes it's hard to master easily." } },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-sm" style={{ backgroundColor: item.ok ? 'oklch(0.96 0.05 145)' : 'oklch(0.97 0.03 60)' }}>
                  <span className="text-base flex-shrink-0">{item.ok ? '✅' : '⚠️'}</span>
                  <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.28 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}>{t(lang, item.text)}</p>
                </div>
              ))}
            </div>

            {h3(lang, { fr: 'Premières recommandations', en: 'Initial recommendations' })}
            {bodyText(lang, {
              fr: "Alléger le système de toute feature et fonctionnalité superflue pour le rendre plus captivant, plus clair et surtout plus efficace.",
              en: "Strip the system of any superfluous feature to make it more engaging, clearer and, above all, more efficient.",
            })}
            <div className="my-3" />
            {bodyText(lang, {
              fr: "Revoir l'organisation, la hiérarchisation et composants techniques du système, de manière à le rendre plus structuré, plus contrôlable, plus intuitif et plus fonctionnel (orienté tâche).",
              en: "Rethink the system's organization, hierarchy and technical components, to make it more structured, more controllable, more intuitive and more task-oriented.",
            })}
            <div className="my-3" />
            {bodyText(lang, {
              fr: "Revoir la charte du système plus présentable et plus désirable tout en restant professionnel pour un système plus clair et plus agréable.",
              en: "Rework the visual identity to make it more presentable and more appealing while staying professional, for a clearer, more pleasant system.",
            })}
          </section>
        )}

        {/* ── ENTRETIENS D'USAGE ── */}
        {active === 'entretiens' && (
          <section>
            {sectionTitle(lang, { fr: "Entretiens d'usage", en: 'Usage interviews' })}
            {bodyText(lang, {
              fr: "Au cours des entretiens d'utilisation, les utilisateurs ont pu me partager leurs impressions confirmant le test Hassenzahl. C'était l'occasion de découvrir des usages inédits.",
              en: "During the usage interviews, users shared impressions that confirmed the Hassenzahl test. It was also a chance to uncover usage patterns I hadn't anticipated.",
            })}
            <div className="my-4" />
            {bodyText(lang, {
              fr: "En effet, les utilisateurs multiplient les outils pour arriver à leurs fins sur Proveil : partage d'informations sur Teams, recherches externes sur le navigateur, prises de note sur un calepin personnel et une capture d'écran informelle. Or, les usages peuvent et devraient se faire directement sur l'interface de l'outil pour faciliter leur organisation de travail.",
              en: "Users were stacking up extra tools just to get things done in Proveil: sharing information over Teams, searching externally in the browser, jotting notes in a personal notebook, taking informal screenshots. Yet all of this could, and should, happen directly within the tool's own interface, to make their work easier to organize.",
            })}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              <CaseImage src={`${import.meta.env.BASE_URL}proveil/verbatim-claire.png`} alt={{ fr: "Verbatim de Claire : il n'y a pas de langage universel, c'est sa popotte interne", en: "Claire's verbatim: there's no universal language, it's everyone's own way of doing things" }} />
              <CaseImage src={`${import.meta.env.BASE_URL}proveil/verbatim-audrey-2.png`} alt={{ fr: "Verbatim d'Audrey : ce n'est pas intuitif", en: "Audrey's verbatim: it's not intuitive" }} />
              <CaseImage src={`${import.meta.env.BASE_URL}proveil/verbatim-audrey-1.png`} alt={{ fr: "Verbatim d'Audrey : j'aime pas le faire, je trouve ça pénible", en: "Audrey's verbatim: I don't like doing it, I find it a pain" }} />
            </div>

            {bodyText(lang, {
              fr: "Des décisions arbitraires sont prises dans l'encodage de l'information par les utilisateurs. Certains documentalistes adoptent une approche de travail très individuelle sans concertation avec le reste de l'équipe. En outre, Proveil génère une surabondance de fenêtres d'affichage, entraînant une saturation d'informations qui requiert une concentration maximale de la part des utilisateurs afin d'éviter toute confusion.",
              en: "Users were making arbitrary calls when encoding information. Some documentation officers had settled into a highly individual way of working, with no coordination across the team. On top of that, Proveil piled up an excessive number of display windows, creating information overload that demanded users' full concentration just to avoid confusion.",
            })}

            {accent(lang, {
              fr: "En résumé, Proveil offre une plétore d'éléments non pertinents au mal organisés au lieu de fournir l'essentiel nécessaire pour accompagner leur travail.",
              en: "In short, Proveil offered a flood of irrelevant or poorly organized elements instead of providing just what was needed to support their work.",
            })}
          </section>
        )}

        {/* ── ATELIER & CONCEPTION ── */}
        {active === 'atelier' && (
          <section>
            {sectionTitle(lang, { fr: 'Atelier de co-conception', en: 'Co-design workshop' })}
            {bodyText(lang, {
              fr: "Pendant cet atelier, nous avons identifié les éléments superflus de l'interface. Les participants ont saisi l'opportunité de faire part de leurs besoins en termes de fonctionnalités inexistantes, et nous avons envisagé ensemble avec eux leur solution.",
              en: "During this workshop, we identified the interface's superfluous elements. Participants seized the chance to voice needs around missing features, and together we worked out solutions with them.",
            })}
            <div className="my-4" />
            {bodyText(lang, {
              fr: "Grâce à cette collaboration, nous avons résolu le problème des affichages simultanés et de la pollution visuelle de Proveil, faisant ainsi place à des fonctionnalités plus pertinentes et essentielles pour améliorer leur interface.",
              en: "Thanks to this collaboration, we solved the problem of simultaneous displays and visual clutter in Proveil, making room for more relevant, essential features to improve their interface.",
            })}

            <CaseImage
              src={`${import.meta.env.BASE_URL}proveil/atelier-co-conception.jpg`}
              alt={{ fr: "Atelier de co-conception avec les documentalistes autour d'une table", en: 'Co-design workshop with the documentation team around a table' }}
              caption={{ fr: "Atelier de co-conception avec l'équipe documentation, autour des besoins et des irritants relevés", en: 'Co-design workshop with the documentation team, working through the needs and pain points identified' }}
            />
            <CaseImage
              src={`${import.meta.env.BASE_URL}proveil/ui-diffusion-presse.png`}
              alt={{ fr: 'Interface ancien Proveil annotée, éléments superflus et améliorables entourés en jaune', en: 'Annotated old Proveil interface, superfluous and improvable elements circled in yellow' }}
              caption={{ fr: "Exemple d'indicateurs d'éléments superflus et améliorables identifiés en atelier", en: 'Example markers of superfluous and improvable elements identified during the workshop' }}
            />

            {h3(lang, { fr: 'Conception', en: 'Design' }, 'mt-10')}
            {bodyText(lang, {
              fr: "Application des expressions de besoin durant toute l'exploration du service. La focalisation des utilisateurs s'opère au travers d'une interface unique qui intègre les éléments nécessaires pour la consultation de l'information, l'encodage et la qualification élaborée par l'utilisateur. De plus, une liste \"tiroir\" consolide l'ensemble des tâches à exécuter jusqu'à leur complétion.",
              en: "The needs expressed during the whole exploration of the service were applied directly. Users now focus through a single interface bringing together information review, encoding, and the qualification the user builds up. On top of that, a \"drawer\" list consolidates every task through to completion.",
            })}
            <div className="my-4" />
            {bodyText(lang, {
              fr: "À droite, sur un écran secondaire disponible, les utilisateurs peuvent dédoubler à l'aide d'un comparateur pour repérer immédiatement des similitudes entre les fiches déjà livrées sur le même sujet. Cet écran aide également pour les approbations afin de lier deux avis entre eux. Les prototypes ont été soumis à des tests d'utilisation, confirmant la convivialité de cette nouvelle proposition.",
              en: "On the right, on an available secondary screen, users can spot duplicates using a comparator, immediately catching similarities between records already delivered on the same subject. This screen also helps with approvals, linking two opinions together. The prototypes were put through usability testing, confirming how user-friendly this new approach was.",
            })}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <CaseImage src={`${import.meta.env.BASE_URL}proveil/ui-fiches-liees.png`} alt={{ fr: "Écran d'encodage et de consultation avec la liste tiroir", en: 'Encoding and review screen with the drawer list' }} caption={{ fr: "Écran d'encodage et de consultation avec la liste tiroir", en: 'Encoding and review screen with the drawer list' }} />
              <CaseImage src={`${import.meta.env.BASE_URL}proveil/ui-fiche-approbation.png`} alt={{ fr: 'Écran comparateur pour dédoubler et lier les approbations', en: 'Comparator screen for spotting duplicates and linking approvals' }} caption={{ fr: 'Écran comparateur pour dédoubler et lier les approbations', en: 'Comparator screen for spotting duplicates and linking approvals' }} />
            </div>
          </section>
        )}

        {/* ── RÉSULTATS ── */}
        {active === 'resultats' && (
          <section>
            {sectionTitle(lang, { fr: 'Corrélation avant/après', en: 'Before/after comparison' })}
            {bodyText(lang, {
              fr: "Après le développement de l'interface et quelques retours d'usage, les chiffres parlent d'eux-mêmes. Les utilisateurs déclarent effectivement un temps moyen gagné surtout sur les approbations (le poste le plus lent à traiter), et les autres tâches sont également réalisées plus rapidement.",
              en: "After building the interface and gathering some usage feedback, the numbers speak for themselves. Users report real time savings, especially on approvals (the slowest task to process), and other tasks are also completed faster.",
            })}

            <CaseImage
              src={`${import.meta.env.BASE_URL}proveil/efficacite-comparatif.png`}
              alt={{ fr: 'Analyse comparative du temps de traitement des tâches, ancien vs nouveau Proveil', en: 'Comparative analysis of task processing time, old vs new Proveil' }}
              caption={{ fr: "Analyse quantitative du temps de réalisation des tâches : ancien système vs nouvelle version Proveil Web", en: 'Quantitative analysis of task completion time: old system vs new Proveil Web version' }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-10">
              {[
                { value: '−32%', label: { fr: 'Temps de traitement des fiches livrées', en: 'Delivered record processing time' } },
                { value: '−61%', label: { fr: 'Temps de traitement des rejets', en: 'Rejection processing time' } },
                { value: '−54%', label: { fr: 'Temps de traitement du dédoublonnage', en: 'Deduplication processing time' } },
                { value: '−37%', label: { fr: 'Temps moyen pondéré global', en: 'Overall weighted average time' } },
                { value: '×1,79', label: { fr: 'Facteur multiplicatif de fiches traitées à temps égal', en: 'Multiplier of records processed in the same time' } },
                { value: '+45%', label: { fr: 'Estimation du volume traitable par heure', en: 'Estimated hourly processing volume' } },
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
                    {t(lang, m.label)}
                  </span>
                </div>
              ))}
            </div>

            <div className="my-8 p-5 rounded-sm" style={{ borderLeft: '3px solid oklch(0.42 0.22 264)', backgroundColor: 'oklch(0.97 0.015 264)' }}>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                {lang === 'en' ? 'Urban Planning department' : 'Service de Planification Urbaine'}
              </p>
              <p className="text-sm italic leading-relaxed" style={{ color: 'oklch(0.28 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}>
                {lang === 'en'
                  ? "\u00ab Our Proveil Web tool keeps improving with the recent rollout of a new Urban Planning screen, a real step forward for handling public inquiries and local plan approvals. We now get a quick view of what's already been delivered and save precious time on deduplication. Titles, dates, zoning and company links are all automated. Thanks to these new features, urban planning processing time has nearly been cut in half! \u00bb"
                  : "« Le développement de notre outil Proveil Web avance avec le déploiement récent d'un nouvel écran de Planification Urbaine et est une avancée pour le traitement des enquêtes publiques et approbations des plans locaux. Il permet aujourd'hui d'avoir une vision rapide de ce qui est déjà livré et gagnons un précieux temps pour le dédoublonnage. Les titres, dates, zonage et liens sociétés sont automatisés. Grâce à ces nouvelles fonctionnalités, le temps de traitement des planifications urbaines est quasiment divisé par deux ! »"}
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
