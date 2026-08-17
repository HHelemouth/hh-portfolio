/*
  CityManager.tsx — Cas d'étude City Manager
  Charte : Jost pour les titres, DM Sans pour le corps, bleu #3B3FD8 en accent
  Structure : 7 chapitres séquencés avec navigation par onglets
  Bilingue FR/EN, piloté par le contexte de langue (voir lib/i18n.tsx)
*/

import { useState, Fragment } from 'react';
import type React from 'react';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import CaseStudyHeader from '@/components/CaseStudyHeader';
import { useLanguage, type Lang } from '@/lib/i18n';

type Bi = { fr: string; en: string };
const t = (lang: Lang, bi: Bi) => bi[lang];

const CHAPTERS: { id: string; label: Bi; bonus?: boolean }[] = [
  { id: 'contexte', label: { fr: 'Contexte', en: 'Context' } },
  { id: 'personnas', label: { fr: 'Personnas', en: 'Personas' } },
  { id: 'entretiens', label: { fr: 'Entretiens utilisateurs', en: 'User interviews' } },
  { id: 'architecture', label: { fr: 'Architecture', en: 'Architecture' } },
  { id: 'promesse', label: { fr: 'La promesse produit', en: 'The product promise' } },
  { id: 'gamification', label: { fr: 'Gamification', en: 'Gamification' } },
  { id: 'perspectives', label: { fr: 'Perspectives', en: 'What comes next' } },
  { id: 'ia', label: { fr: "L'IA dans la démarche", en: 'AI in the process' }, bonus: true },
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
  <h3
    className={`text-lg font-semibold ${extraClass} mb-4`}
    style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
  >
    {t(lang, bi)}
  </h3>
);

export default function CityManager() {
  const [active, setActive] = useState('contexte');
  const { lang } = useLanguage();

  return (
    <>
    <SEOHead
      title="City Manager"
      description="Étude de marché et lancement produit d'une plateforme SaaS pour les managers de ville. Discovery, personnas, architecture, gamification et IA."
      canonicalPath="/projet/city-manager"
    />
    <div className="min-h-screen w-full" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>

      {/* Hero */}
      <CaseStudyHeader
        title="City Manager"
        titleEn="City Manager"
        tags={['Étude de marché', 'Product Discovery', 'UX Research', 'Lancement produit']}
        tagsEn={['Market research', 'Product Discovery', 'UX Research', 'Product launch']}
        description="Concevoir un outil SaaS pour les managers de centre-ville, de la discovery à la vision produit, avec l'IA comme partenaire de travail."
        descriptionEn="Designing a SaaS tool for city-center managers, from discovery to product vision, with AI as a working partner."
        meta={[
          { label: 'Rôle', value: 'Product Designer, Discovery' },
          { label: 'Contexte', value: 'Codata, groupe Intescia' },
          { label: 'Équipe', value: 'Codata (Intescia)' },
          { label: 'Type', value: 'Nouveau marché B2B' },
        ]}
        metaEn={[
          { label: 'Role', value: 'Product Designer, Discovery' },
          { label: 'Context', value: 'Codata, Intescia group' },
          { label: 'Team', value: 'Codata (Intescia)' },
          { label: 'Type', value: 'New B2B market' },
        ]}
        bodyTranslated
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
            <Fragment key={ch.id}>
              {ch.bonus && (
                <div
                  style={{
                    width: '1px',
                    margin: '8px 6px',
                    backgroundColor: 'oklch(0.85 0.02 264)',
                    alignSelf: 'stretch',
                  }}
                />
              )}
              <button
                onClick={() => setActive(ch.id)}
                className="px-2 sm:px-4 py-3 sm:py-4 text-[11px] sm:text-sm transition-all whitespace-nowrap relative"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: active === ch.id ? 700 : 400,
                  color: ch.bonus
                    ? active === ch.id ? 'oklch(0.5 0.04 264)' : 'oklch(0.65 0.02 264)'
                    : active === ch.id ? '#3B3FD8' : 'oklch(0.35 0.02 264)',
                  borderBottom: active === ch.id
                    ? ch.bonus ? '3px solid oklch(0.65 0.02 264)' : '3px solid #3B3FD8'
                    : '3px solid transparent',
                  background: active === ch.id && !ch.bonus
                    ? 'rgba(59,63,216,0.06)'
                    : 'none',
                  cursor: 'pointer',
                  opacity: ch.bonus && active !== ch.id ? 0.55 : 1,
                  fontStyle: ch.bonus ? 'italic' : 'normal',
                  letterSpacing: active === ch.id ? '0' : '0.01em',
                }}
              >
                {t(lang, ch.label)}
              </button>
            </Fragment>
          ))}
        </div>
      </nav>

      {/* Contenu des chapitres */}
      <main className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl py-8 sm:py-14">

        {/* ── CONTEXTE ── */}
        {active === 'contexte' && (
          <section>
            {sectionTitle(lang, { fr: 'Un nouveau marché, une vraie opportunité', en: 'A new market, a real opportunity' })}
            {bodyText(lang, {
              fr: "Dans le cadre d'une étude de marché menée pour Codata (groupe Intescia), j'ai travaillé sur un marché encore peu adressé par les outils digitaux : les managers de centre-ville. Ces professionnels, souvent rattachés aux collectivités ou aux associations de commerçants, pilotent la dynamique commerciale et urbaine de leur territoire. Ils manquent d'outils adaptés à leur réalité de terrain.",
              en: "As part of a market study for Codata (Intescia group), I worked on a market barely addressed by digital tools yet: city-center managers. These professionals, often attached to local authorities or retailer associations, drive the commercial and urban dynamics of their area. They lack tools that fit their reality on the ground.",
            })}
            <div className="my-6" />
            {bodyText(lang, {
              fr: "L'enjeu était double : identifier si un vrai problème existait, et si oui, définir ce qu'un produit digital pourrait apporter de concret à ces utilisateurs, sans partir d'une solution préconçue.",
              en: "The challenge was twofold: find out if a real problem existed, and if so, define what a digital product could concretely bring to these users, without starting from a preconceived solution.",
            })}
            {accent(lang, {
              fr: "« Un problème bien posé est un problème à moitié résolu. Avant de dessiner quoi que ce soit, j'ai voulu comprendre qui étaient vraiment ces utilisateurs et ce qui les bloquait au quotidien. »",
              en: "\"A well-framed problem is half solved. Before designing anything, I wanted to understand who these users really were and what was blocking them day to day.\"",
            })}

            {h3(lang, { fr: 'Une équipe agile, un avantage décisif', en: 'An agile team, a decisive advantage' })}
            {bodyText(lang, {
              fr: "L'équipe de Codata a la particularité d'être très agile. Quand quelque chose coince, on peut rectifier rapidement. Cette capacité à itérer sans friction a été un vrai atout tout au long du projet : les hypothèses pouvaient être testées, ajustées et réorientées sans attendre des cycles longs de validation. C'est ce qui a permis d'avancer vite sur des sujets complexes, sans jamais perdre de vue l'utilisateur.",
              en: "The Codata team is particularly agile. When something isn't working, it can be fixed quickly. This ability to iterate without friction was a real asset throughout the project: hypotheses could be tested, adjusted and redirected without waiting for long validation cycles. That's what made it possible to move fast on complex topics, without ever losing sight of the user.",
            })}

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: '🔍', title: { fr: 'Recherche', en: 'Research' }, desc: { fr: 'Entretiens utilisateurs, analyse des usages existants, immersion dans le métier', en: 'User interviews, analysis of existing usage, immersion in the business' } },
                { icon: '🗺️', title: { fr: 'Cadrage', en: 'Framing' }, desc: { fr: 'Définition du périmètre, priorisation des besoins, formulation des hypothèses', en: 'Scope definition, needs prioritization, hypothesis formulation' } },
                { icon: '✏️', title: { fr: 'Vision', en: 'Vision' }, desc: { fr: 'Conception des parcours clés, wireframes, présentation aux parties prenantes', en: 'Key flow design, wireframes, presentation to stakeholders' } },
              ].map((item) => (
                <div
                  key={item.title.fr}
                  className="p-5 rounded-sm"
                  style={{ border: '1px solid oklch(0.91 0.02 264)', backgroundColor: '#fff' }}
                >
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
                    {t(lang, item.title)}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.4 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}>
                    {t(lang, item.desc)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── PERSONNAS ── */}
        {active === 'personnas' && (
          <section>
            {sectionTitle(lang, { fr: 'Comprendre avant de concevoir', en: 'Understanding before designing' })}
            {bodyText(lang, {
              fr: "Avant de toucher à un seul wireframe, j'ai conduit des entretiens utilisateurs pour comprendre qui sont vraiment les managers de centre-ville. Ce qui est apparu rapidement, c'est l'hétérogénéité des profils : certains sont très à l'aise avec le digital, d'autres beaucoup moins, mais tous partagent les mêmes frustrations fondamentales.",
              en: "Before touching a single wireframe, I conducted user interviews to understand who city-center managers really are. What became clear quickly was how varied the profiles were: some are very comfortable with digital tools, others much less so, but they all share the same core frustrations.",
            })}
            {accent(lang, {
              fr: "L'interface doit être accessible sans être infantilisante. C'est une contrainte de conception forte quand les profils vont du gestionnaire peu digitalisé au manager très outillé.",
              en: "The interface has to be accessible without being condescending. That's a strong design constraint when profiles range from the barely-digital manager to the highly-equipped one.",
            })}

            <div className="mt-8 space-y-6">
              {[
                {
                  name: { fr: 'Le Manager Opérationnel', en: 'The Operational Manager' },
                  role: { fr: 'Chargé de mission centre-ville, collectivité', en: 'City-center project officer, local authority' },
                  color: '#3B3FD8',
                  bg: 'oklch(0.94 0.04 264)',
                  needs: [
                    { fr: 'Une vue consolidée et à jour des locaux commerciaux de son territoire', en: 'A consolidated, up-to-date view of the commercial units in their area' },
                    { fr: 'Des alertes sur les changements de situation (fermetures, vacances)', en: 'Alerts on status changes (closures, vacancies)' },
                    { fr: 'Un outil pour prouver son impact aux élus', en: 'A tool to prove their impact to elected officials' },
                  ],
                  frustrations: [
                    { fr: 'Passe des heures à consolider des données éparpillées (tableurs, mails, terrain)', en: 'Spends hours consolidating scattered data (spreadsheets, emails, fieldwork)' },
                    { fr: 'Apprend les changements de situation par le bouche-à-oreille', en: 'Learns about status changes through word of mouth' },
                    { fr: "N'a aucun indicateur de comparaison avec d'autres territoires", en: 'Has no benchmark against other areas' },
                  ],
                },
                {
                  name: { fr: "Le Directeur d'Association", en: 'The Association Director' },
                  role: { fr: "Directeur d'association de commerçants", en: 'Director of a retailer association' },
                  color: '#1a1a6e',
                  bg: 'oklch(0.95 0.02 264)',
                  needs: [
                    { fr: 'Suivre les enseignes cibles pour attirer de nouveaux commerçants', en: 'Track target brands to attract new retailers' },
                    { fr: 'Gérer ses contacts (propriétaires, élus, commerçants) en un seul endroit', en: 'Manage contacts (landlords, officials, retailers) in one place' },
                    { fr: 'Communiquer des données convaincantes à ses partenaires', en: 'Share convincing data with partners' },
                  ],
                  frustrations: [
                    { fr: 'Jongle entre plusieurs outils sans cohérence (CRM, tableur, email)', en: 'Juggles several disconnected tools (CRM, spreadsheet, email)' },
                    { fr: "Difficile de prioriser ses actions sans vue d'ensemble", en: 'Hard to prioritize actions without an overview' },
                    { fr: 'Manque de légitimité face aux élus sans données chiffrées', en: 'Lacks credibility with officials without hard numbers' },
                  ],
                },
              ].map((p) => (
                <div
                  key={p.name.fr}
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid oklch(0.91 0.02 264)' }}
                >
                  <div
                    className="px-6 py-4"
                    style={{ backgroundColor: p.bg }}
                  >
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: 'Jost, sans-serif', color: p.color }}
                    >
                      {t(lang, p.name)}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: 'oklch(0.45 0.05 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {t(lang, p.role)}
                    </p>
                  </div>
                  <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest font-semibold mb-3"
                        style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {lang === 'en' ? 'Needs' : 'Besoins'}
                      </p>
                      <ul className="space-y-2">
                        {p.needs.map((n) => (
                          <li
                            key={n.fr}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: 'oklch(0.28 0.03 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
                          >
                            <span style={{ color: '#3B3FD8', marginTop: '3px', flexShrink: 0 }}>→</span>
                            {t(lang, n)}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest font-semibold mb-3"
                        style={{ color: 'oklch(0.55 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {lang === 'en' ? 'Frustrations' : 'Frustrations'}
                      </p>
                      <ul className="space-y-2">
                        {p.frustrations.map((f) => (
                          <li
                            key={f.fr}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: 'oklch(0.5 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
                          >
                            <span style={{ color: 'oklch(0.6 0.02 264)', marginTop: '3px', flexShrink: 0 }}>→</span>
                            {t(lang, f)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  label: { fr: 'La vacance commerciale est un angle mort', en: 'Commercial vacancy is a blind spot' },
                  text: { fr: "Les managers n'ont pas de vue temps réel sur les locaux vacants. Ils apprennent souvent les changements de situation par le bouche-à-oreille.", en: "Managers have no real-time view of vacant units. They often learn about status changes through word of mouth." },
                },
                {
                  label: { fr: "L'information zéro est une information", en: 'Zero information is still information' },
                  text: { fr: "Ne pas savoir pourquoi un local est vide depuis 18 mois est aussi précieux que de savoir qu'il est en négociation. L'outil doit rendre l'inconnu visible.", en: "Not knowing why a unit has been empty for 18 months is as valuable as knowing it's under negotiation. The tool needs to make the unknown visible." },
                },
                {
                  label: { fr: 'Le comparatif territorial est un levier de légitimité', en: 'Benchmarking is a legitimacy lever' },
                  text: { fr: "Pouvoir dire « mon taux de vacance est inférieur à la moyenne des villes comparables » change le rapport aux élus. La donnée comparative est une arme politique.", en: "Being able to say \"my vacancy rate is below the average for comparable cities\" changes the relationship with elected officials. Comparative data is a political tool." },
                },
                {
                  label: { fr: 'Profils très hétérogènes', en: 'Very mixed skill levels' },
                  text: { fr: "Du manager très digital au gestionnaire peu à l'aise avec les outils, l'interface doit être accessible sans être condescendante.", en: "From the highly digital manager to the one uncomfortable with tools, the interface has to be accessible without being condescending." },
                },
              ].map((item) => (
                <div
                  key={item.label.fr}
                  className="p-5 rounded-sm"
                  style={{ backgroundColor: 'oklch(0.94 0.04 264)' }}
                >
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.35 0.1 264)' }}
                  >
                    {t(lang, item.label)}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'oklch(0.28 0.05 264)', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {t(lang, item.text)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── ENTRETIENS UTILISATEURS ── */}
        {active === 'entretiens' && (
          <section>
            {sectionTitle(lang, { fr: 'Le terrain challenge la promesse', en: 'The field tests the promise' })}
            {bodyText(lang, {
              fr: "Une fois le prototype posé, il fallait le confronter à la réalité. Quatre managers de centre-ville (Orléans, Strasbourg, Limoges, Pau) ont testé l'interface en visio, en manipulant eux-mêmes le prototype Figma. L'exercice n'était pas de valider un pitch, mais de regarder, en direct, où l'outil tenait et où il se fissurait.",
              en: "Once the prototype was in place, it had to be tested against reality. Four city-center managers (Orléans, Strasbourg, Limoges, Pau) tested the interface over video calls, navigating the Figma prototype themselves. The point wasn't to validate a pitch, but to watch, live, where the tool held up and where it cracked.",
            })}
            {accent(lang, {
              fr: "Certaines choses que j'avais présentées comme figées ont changé pendant les entretiens eux-mêmes. Ce n'était pas de la validation, c'était de la co-construction.",
              en: "Some things I'd presented as settled changed during the interviews themselves. This wasn't validation, it was co-design.",
            })}

            {h3(lang, { fr: 'Ce qui a été confirmé', en: 'What got confirmed' })}
            <div className="space-y-4 mb-8">
              {[
                {
                  title: { fr: "La friction est l'ennemi n°1", en: 'Friction is enemy number one' },
                  desc: {
                    fr: 'À Limoges, Samuel a été le plus direct : "plus vous avez des manips, plus vous avez des tâches à faire, moins vous en faites." Il a rejeté d\'emblée l\'idée d\'un statut de qualification de la vacance en plus du triptyque vacant/occupé, au profit d\'un système binaire simple avec bascule directe vers "en négociation". L\'idée a été retenue.',
                    en: 'In Limoges, Samuel was the most direct: "the more clicks you need, the more tasks there are, the less people actually do." He rejected outright the idea of an extra vacancy-qualification status on top of the vacant/occupied pair, in favor of a simple binary system with a direct switch to "under negotiation." That change was kept.',
                  },
                },
                {
                  title: { fr: "Le rôle détermine l'usage", en: 'Role determines usage' },
                  desc: {
                    fr: 'À Strasbourg, Thomas a été explicite sur le manque de fraîcheur des données existantes ("une frustration, même, je dirais") et sur l\'intérêt du matching prospects/locaux. À Limoges, Samuel a au contraire jugé le module Analyse quasiment sans intérêt pour son usage, révélant que ce module sert d\'autres profils, plus stratégiques.',
                    en: 'In Strasbourg, Thomas was explicit about how stale the existing data felt ("a source of frustration, actually") and how valuable the prospect/unit matching was. In Limoges, Samuel, by contrast, found the Analysis module almost irrelevant to his own use, revealing that this module serves other, more strategic profiles.',
                  },
                },
                {
                  title: { fr: 'Le terme "demandeur" ne convenait à personne', en: 'The term "applicant" didn\'t work for anyone' },
                  desc: {
                    fr: 'Remonté indépendamment par Angélique (Orléans), Samuel (Limoges, "contact potentiel") et pendant l\'entretien du Havre, où le glissement s\'est fait en direct : "au début on pensait enseigne, ensuite on a rayé enseigne pour se dire demandeur, mais finalement le mot clé c\'est prospect." Le terme a été changé sur le champ.',
                    en: 'Raised independently by Angélique (Orléans), Samuel (Limoges, "potential contact"), and during the Le Havre interview, where the shift happened live: "at first we thought \'brand,\' then we crossed out \'brand\' for \'applicant,\' but really the key word is \'prospect.\'" The term was changed on the spot.',
                  },
                },
              ].map((item) => (
                <div key={item.title.fr} className="p-4 rounded-lg border" style={{ borderColor: 'oklch(0.88 0.02 264)', background: 'oklch(0.97 0.01 264)' }}>
                  <div className="font-semibold mb-1" style={{ fontFamily: 'Jost, sans-serif', color: '#3B3FD8' }}>{t(lang, item.title)}</div>
                  <div className="text-sm leading-relaxed" style={{ color: 'oklch(0.35 0.02 264)' }}>{t(lang, item.desc)}</div>
                </div>
              ))}
            </div>

            {h3(lang, { fr: 'Ce qui a fait bouger le produit', en: 'What actually changed the product' })}
            {bodyText(lang, {
              fr: "Le cas le plus net vient de Strasbourg. Le statut Occupé/Vacant avait été présenté comme verrouillé, entièrement piloté par la donnée Codata, pour éviter que des collectivités ne \"trichent\" sur leurs statistiques. Anne-Cécile a opposé un cas concret : une enseigne fermée le 15 janvier restée affichée comme occupée pendant un an, parce que le relevé Codata suivant tombait aussi en janvier.",
              en: "The clearest case came from Strasbourg. The Occupied/Vacant status had been presented as locked, entirely driven by Codata data, to prevent local authorities from \"gaming\" their statistics. Anne-Cécile pushed back with a concrete case: a store that closed on January 15th stayed listed as occupied for a full year, because the next Codata survey also fell in January.",
            })}
            {accent(lang, {
              fr: "L'argument a suffi à faire revenir sur la règle : le statut est devenu librement modifiable par l'utilisateur, avec la valeur Codata toujours conservée et restaurable en arrière-plan. Elle n'est jamais écrasée ni perdue, seulement mise en concurrence avec la correction terrain.",
              en: "That argument was enough to overturn the rule: the status became freely editable by the user, with the Codata value always kept and restorable in the background. It's never overwritten or lost, just weighed against the correction from the field.",
            })}

            {h3(lang, { fr: 'Une opportunité inattendue', en: 'An unexpected opportunity' })}
            {bodyText(lang, {
              fr: "À Pau, Jérôme a fait remonter un signal commercial fort qui n'était pas anticipé : sa collectivité paie environ 18 000 €/an pour MyTraffic (flux, zone de chalandise, pouvoir d'achat, sociodémographie), en plus de l'abonnement Codata. Son message a été direct : \"si vous proposez ces critères-là dans votre solution, ça peut remettre en question notre abonnement à MyTraffic (...) le choix va être vite fait.\"",
              en: "In Pau, Jérôme surfaced an unanticipated commercial signal: his local authority pays roughly €18,000/year for MyTraffic (foot traffic, catchment area, purchasing power, demographics), on top of the Codata subscription. His message was direct: \"if you offer those same criteria in your solution, it could put our MyTraffic subscription in question (...) the choice would be made pretty fast.\"",
            })}
            {accent(lang, {
              fr: "Un signal net : la donnée de flux et de chalandise n'est pas un simple enrichissement de fiche, mais un axe de différenciation concurrentielle à part entière.",
              en: "A clear signal: foot-traffic and catchment-area data isn't just a nice-to-have enrichment, it's a genuine competitive differentiator.",
            })}

            {h3(lang, { fr: 'Ce qui reste ouvert', en: 'What stays open' })}
            {bodyText(lang, {
              fr: "Le pilier Engager (gamification, badges, objectifs) n'a été testé dans aucun de ces quatre entretiens. Ce n'est pas un oubli : le coût de développement de ces mécaniques a été jugé trop élevé pour justifier leur place dans un MVP centré sur le strict minimum fonctionnel. Sa pertinence reste donc entièrement à valider sur le terrain plutôt que supposée.",
              en: "The Engage pillar (gamification, badges, goals) wasn't tested in any of these four interviews. That's not an oversight: the development cost of these mechanics was judged too high to justify a place in an MVP built around the strict functional minimum. Its relevance still needs to be validated in the field rather than assumed.",
            })}
            {bodyText(lang, {
              fr: "Ces entretiens ont aussi rendu caduques les personas initiaux (Marie, Thomas), remplacés depuis par des personas ancrés dans ces quatre échanges : Camille (Orléans), Léa (Strasbourg), Vincent (Pau), Karim (Limoges), chacun révélant un rapport différent à l'outil, du plus opérationnel au plus stratégique.",
              en: "These interviews also made the initial personas (Marie, Thomas) obsolete. They've since been replaced by personas grounded in these four conversations: Camille (Orléans), Léa (Strasbourg), Vincent (Pau), Karim (Limoges), each revealing a different relationship to the tool, from the most operational to the most strategic.",
            })}
          </section>
        )}

        {/* ── ARCHITECTURE ── */}
        {active === 'architecture' && (
          <section>
            {sectionTitle(lang, { fr: 'Structurer avant de dessiner', en: 'Structuring before designing' })}
            {bodyText(lang, {
              fr: "Une fois les personnas posés et les besoins identifiés, j'ai travaillé sur l'architecture de l'information du site. L'enjeu était de trouver une structure qui soit à la fois simple pour les profils peu digitalisés et suffisamment puissante pour les utilisateurs avancés.",
              en: "Once the personas were set and needs identified, I worked on the site's information architecture. The challenge was finding a structure simple enough for less digital-native profiles, yet powerful enough for advanced users.",
            })}
            {accent(lang, {
              fr: "La règle que je me suis fixée : chaque information doit être accessible en 2 clics maximum depuis n'importe quel point de l'interface.",
              en: "The rule I set for myself: every piece of information had to be reachable within 2 clicks, from anywhere in the interface.",
            })}

            {h3(lang, { fr: 'Les 4 modules structurants', en: 'The 4 core modules' })}
            <div className="space-y-3 mb-8">
              {[
                {
                  num: '1',
                  title: { fr: 'Carte des locaux', en: 'Unit map' },
                  desc: { fr: "Vue interactive avec statuts nuancés : vacant, en négociation, occupé, à risque. Historique des occupations pour chaque local. C'est le point d'entrée principal, celui que tous les profils utilisent en premier.", en: 'Interactive view with nuanced statuses: vacant, under negotiation, occupied, at risk. Occupancy history for each unit. This is the main entry point, the one every profile uses first.' },
                },
                {
                  num: '2',
                  title: { fr: 'Veille enseignes', en: 'Brand watch' },
                  desc: { fr: "Recherche et suivi des enseignes cibles. Alertes sur les signaux de dynamique commerciale (ouvertures, fermetures, liquidations). Un outil de prospection intégré au quotidien du manager.", en: "Search and tracking of target brands. Alerts on commercial-activity signals (openings, closures, liquidations). A prospecting tool built into the manager's daily routine." },
                },
                {
                  num: '3',
                  title: { fr: 'Mini-CRM territorial', en: 'Local mini-CRM' },
                  desc: { fr: "Gestion des contacts (propriétaires, commerçants, élus), suivi des échanges, gestion documentaire intégrée. Remplace les tableurs et les carnets d'adresses éparpillés.", en: 'Contact management (landlords, retailers, officials), exchange tracking, built-in document management. Replaces scattered spreadsheets and address books.' },
                },
                {
                  num: '4',
                  title: { fr: 'Tableau de bord comparatif', en: 'Benchmark dashboard' },
                  desc: { fr: "Indicateurs de performance du centre-ville, comparaison avec des villes de taille similaire, suivi des objectifs personnalisés. Le module qui donne de la légitimité aux managers face aux élus.", en: 'City-center performance indicators, comparison with similarly-sized cities, custom goal tracking. The module that gives managers credibility with elected officials.' },
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 p-5 rounded-sm"
                  style={{ border: '1px solid oklch(0.91 0.02 264)', backgroundColor: '#fff' }}
                >
                  <span
                    className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-xs font-bold rounded-sm"
                    style={{ backgroundColor: '#3B3FD8', color: '#fff', fontFamily: 'Jost, sans-serif' }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
                    >
                      {t(lang, item.title)}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.4 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {t(lang, item.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {h3(lang, { fr: 'Les parcours clés conçus', en: 'The key flows designed' }, 'mt-10')}
            <div className="space-y-4">
              {[
                { step: '01', title: { fr: 'Prise en main du tableau de bord', en: 'First look at the dashboard' }, text: { fr: 'Premier contact avec la plateforme, découverte de la carte et des indicateurs clés. Pensé pour être compréhensible sans formation.', en: 'First contact with the platform, discovering the map and key indicators. Designed to be understandable without any training.' } },
                { step: '02', title: { fr: "Mise à jour du statut d'un local", en: 'Updating a unit\'s status' }, text: { fr: 'Action la plus fréquente du manager. Doit être rapide, intuitive, réalisable depuis le terrain (mobile).', en: "The manager's most frequent action. Has to be fast, intuitive, doable from the field (mobile)." } },
                { step: '03', title: { fr: "Recherche d'une enseigne cible", en: 'Searching for a target brand' }, text: { fr: "Parcours de prospection : identifier une enseigne, consulter ses signaux, l'ajouter à une liste de suivi, programmer une alerte.", en: 'Prospecting flow: identify a brand, review its signals, add it to a watch list, schedule an alert.' } },
                { step: '04', title: { fr: 'Génération d\'un rapport pour les élus', en: 'Generating a report for officials' }, text: { fr: "Synthèse automatique des indicateurs du territoire, comparaison avec les villes similaires, export en un clic.", en: 'Automatic summary of local indicators, comparison with similar cities, one-click export.' } },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-sm text-sm font-bold"
                    style={{ backgroundColor: '#3B3FD8', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
                    >
                      {t(lang, item.title)}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.28 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {t(lang, item.text)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── PROMESSE PRODUIT ── */}
        {active === 'promesse' && (
          <section>
            {sectionTitle(lang, { fr: 'Cibler, Détecter, Sécuriser, Engager', en: 'Target, Detect, Reassure, Engage' })}
            {bodyText(lang, {
              fr: "City Manager n'est pas simplement un outil de détection de vacance commerciale. C'est une plateforme d'engagement, pensée pour accompagner le manager à chaque étape de son action sur le terrain. Cette promesse se décline en quatre temps, qui correspondent aux quatre grandes phases du travail d'un manager de centre-ville.",
              en: "City Manager isn't just a commercial-vacancy detection tool. It's an engagement platform, designed to support the manager at every step of their work on the ground. This promise breaks down into four stages, matching the four main phases of a city-center manager's job.",
            })}

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                {
                  word: { fr: 'Cibler', en: 'Target' },
                  num: '01',
                  color: '#3B3FD8',
                  bg: 'oklch(0.94 0.04 264)',
                  desc: { fr: "Identifier les locaux prioritaires, les enseignes à fort potentiel, les zones à risque. L'IA analyse les données du territoire pour faire remonter les signaux faibles avant qu'ils ne deviennent des problèmes.", en: "Identify priority units, high-potential brands, at-risk areas. AI analyzes local data to surface weak signals before they turn into real problems." },
                },
                {
                  word: { fr: 'Détecter', en: 'Detect' },
                  num: '02',
                  color: '#1a1a6e',
                  bg: 'oklch(0.95 0.02 264)',
                  desc: { fr: "Repérer les changements de situation en temps réel : fermeture imminente, enseigne en liquidation, local vacant depuis trop longtemps. Les algorithmes croisent des sources multiples pour alerter le manager au bon moment.", en: "Spot status changes in real time: imminent closure, a brand going into liquidation, a unit vacant for too long. Algorithms cross-reference multiple sources to alert the manager at the right moment." },
                },
                {
                  word: { fr: 'Sécuriser', en: 'Reassure' },
                  num: '03',
                  color: '#3B3FD8',
                  bg: 'oklch(0.94 0.04 264)',
                  desc: { fr: "Fournir des informations fiables et contextualisées qui permettent au manager d'agir avec confiance. Pas de données brutes incompréhensibles : des insights actionnables, accompagnés d'un contexte rassurant.", en: "Provide reliable, contextualized information that lets the manager act with confidence. No incomprehensible raw data: actionable insights, backed by reassuring context." },
                },
                {
                  word: { fr: 'Engager', en: 'Engage' },
                  num: '04',
                  color: '#1a1a6e',
                  bg: 'oklch(0.95 0.02 264)',
                  desc: { fr: "Passer à l'action : contacter un propriétaire, proposer un local à une enseigne cible, partager un rapport avec les élus. La plateforme transforme l'information en action concrète, en un minimum de clics.", en: "Move to action: contact a landlord, propose a unit to a target brand, share a report with officials. The platform turns information into concrete action, with a minimum of clicks." },
                },
              ].map((item) => (
                <div
                  key={item.word.fr}
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid oklch(0.91 0.02 264)' }}
                >
                  <div
                    className="px-6 py-4 flex items-center gap-3"
                    style={{ backgroundColor: item.bg }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{ color: 'oklch(0.6 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {item.num}
                    </span>
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: 'Jost, sans-serif', color: item.color }}
                    >
                      {t(lang, item.word)}
                    </h3>
                  </div>
                  <div className="px-6 py-5 bg-white">
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.28 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {t(lang, item.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {h3(lang, { fr: "L'IA et les algorithmes au cœur du produit", en: 'AI and algorithms at the core of the product' }, 'mt-10')}
            {bodyText(lang, {
              fr: "Ce qui distingue City Manager d'un simple outil de cartographie, c'est l'intelligence embarquée. Les algorithmes croisent des données hétérogènes (données cadastrales, signaux commerciaux, historique des occupations, données de flux) pour produire des insights actionnables. L'IA ne remplace pas le jugement du manager, elle l'amplifie : elle lui dit où regarder, quand agir, et avec quelles informations.",
              en: "What sets City Manager apart from a simple mapping tool is the built-in intelligence. Algorithms cross-reference heterogeneous data (land registry data, commercial signals, occupancy history, foot-traffic data) to produce actionable insights. AI doesn't replace the manager's judgment, it amplifies it: it tells them where to look, when to act, and with what information.",
            })}
            {accent(lang, {
              fr: "L'information sécurisante est une fonctionnalité à part entière. Un manager qui agit avec des données fiables est un manager qui agit plus vite, et qui convainc plus facilement ses interlocuteurs.",
              en: "Reassuring information is a feature in its own right. A manager acting on reliable data acts faster, and convinces the people they talk to more easily.",
            })}
          </section>
        )}

        {/* ── GAMIFICATION ── */}
        {active === 'gamification' && (
          <section>
            {sectionTitle(lang, { fr: 'Un sujet qui a ouvert une réflexion au niveau groupe', en: 'A topic that sparked a group-wide conversation' })}
            {bodyText(lang, {
              fr: "Au fil du projet, un sujet inattendu a émergé : la gamification. L'idée est née d'une observation simple : les managers de centre-ville travaillent souvent seuls, sans feedback immédiat sur leurs actions. Ils ne savent pas si ce qu'ils font a un impact, et cette absence de retour peut être démotivante sur la durée.",
              en: "As the project unfolded, an unexpected topic emerged: gamification. The idea started from a simple observation: city-center managers often work alone, with no immediate feedback on their actions. They don't know whether what they're doing has an impact, and that lack of feedback can become demotivating over time.",
            })}
            {accent(lang, {
              fr: "Et si la plateforme récompensait les bonnes pratiques ? Et si elle rendait visible le progrès, pas seulement le résultat ?",
              en: "What if the platform rewarded good practices? What if it made progress visible, not just the outcome?",
            })}

            {h3(lang, { fr: 'Les mécanismes explorés', en: 'The mechanics explored' })}
            <div className="space-y-3 mb-8">
              {[
                {
                  title: { fr: 'Indicateurs de progression', en: 'Progress indicators' },
                  desc: { fr: "Visualiser l'évolution du taux de vacance dans le temps, avec des jalons et des objectifs personnalisés. Rendre le progrès tangible, même quand il est lent.", en: 'Visualize the vacancy rate over time, with milestones and custom goals. Make progress tangible, even when it\'s slow.' },
                },
                {
                  title: { fr: 'Badges et reconnaissance', en: 'Badges and recognition' },
                  desc: { fr: "Valoriser les actions clés : premier local remis en activité, 10 enseignes suivies, rapport partagé avec les élus. Des marqueurs symboliques qui donnent du sens au travail quotidien.", en: 'Highlight key actions: first unit back in business, 10 brands tracked, report shared with officials. Symbolic markers that give meaning to day-to-day work.' },
                },
                {
                  title: { fr: 'Comparaison entre territoires', en: 'Comparison between areas' },
                  desc: { fr: "Un classement bienveillant entre villes comparables, qui stimule sans stigmatiser. L'objectif n'est pas de créer de la compétition, mais de l'émulation positive.", en: "A friendly ranking between comparable cities, motivating without stigmatizing. The goal isn't to create competition, but positive emulation." },
                },
                {
                  title: { fr: 'Streaks et régularité', en: 'Streaks and consistency' },
                  desc: { fr: "Encourager la mise à jour régulière des données (un local mis à jour par semaine, une enseigne suivie par mois). La plateforme devient un outil de routine professionnelle.", en: 'Encourage regular data updates (one unit updated per week, one brand tracked per month). The platform becomes part of a professional routine.' },
                },
              ].map((item) => (
                <div
                  key={item.title.fr}
                  className="flex items-start gap-4 p-5 rounded-sm"
                  style={{ border: '1px solid oklch(0.91 0.02 264)', backgroundColor: '#fff' }}
                >
                  <span style={{ color: '#3B3FD8', fontSize: '1.2rem', flexShrink: 0, marginTop: '2px' }}>◆</span>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
                    >
                      {t(lang, item.title)}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.4 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {t(lang, item.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {h3(lang, { fr: 'Un sujet qui dépasse City Manager', en: 'A topic bigger than City Manager' }, 'mt-10')}
            {bodyText(lang, {
              fr: "Ce qui était au départ une piste d'amélioration de l'expérience utilisateur est devenu un sujet de réflexion au niveau du groupe Intescia. La question posée est plus large : comment intégrer des mécaniques d'engagement dans des outils B2B sans tomber dans le gadget ? Comment rendre un outil professionnel motivant sans le transformer en jeu ?",
              en: "What started as a UX improvement idea became a topic of discussion at the Intescia group level. The broader question: how do you build engagement mechanics into B2B tools without turning them into a gimmick? How do you make a professional tool motivating without turning it into a game?",
            })}
            {bodyText(lang, {
              fr: "Cette réflexion est en cours. City Manager a servi de terrain d'exploration pour un sujet qui pourrait irriguer d'autres produits de l'écosystème.",
              en: "That conversation is ongoing. City Manager served as a testing ground for a topic that could eventually reach other products in the ecosystem.",
            })}
          </section>
        )}

        {/* ── IA DANS LA DÉMARCHE ── */}
        {active === 'ia' && (
          <section>
            {sectionTitle(lang, { fr: "L'IA comme partenaire de travail", en: 'AI as a working partner' })}
            {bodyText(lang, {
              fr: "Ce projet a été l'occasion d'intégrer l'IA à ma démarche de design de façon concrète et structurée, pas comme un gadget, mais comme un vrai partenaire de travail. De la phase de discovery jusqu'à la conception, l'IA a été présente à chaque étape.",
              en: "This project was a chance to bring AI into my design process in a concrete, structured way, not as a gimmick, but as a real working partner. From discovery through to design, AI was present at every stage.",
            })}

            <div className="mt-8 space-y-6">
              {[
                {
                  num: '01',
                  title: { fr: 'Accompagnement dès la phase de discovery', en: 'Support from the discovery phase' },
                  desc: {
                    fr: "Dès le début du projet, j'ai travaillé avec Manus pour structurer ma démarche de discovery : formuler les bonnes questions d'entretien, analyser les verbatims, identifier les patterns dans les retours utilisateurs. L'IA m'a permis d'aller plus vite sur les phases analytiques pour consacrer plus de temps à l'interprétation et à la décision.",
                    en: "From the start of the project, I worked with Manus to structure my discovery process: framing the right interview questions, analyzing verbatims, spotting patterns in user feedback. AI let me move faster through the analytical phases so I could spend more time on interpretation and decision-making.",
                  },
                  tag: 'Manus',
                },
                {
                  num: '02',
                  title: { fr: 'Maquettage sur Figma Make', en: 'Prototyping with Figma Make' },
                  desc: {
                    fr: "Pour les premières itérations de wireframes, j'ai utilisé Figma Make pour générer rapidement des variantes d'interface à partir de descriptions textuelles. Cela m'a permis d'explorer un espace de solutions plus large en moins de temps, et de présenter des options concrètes aux parties prenantes dès les premières réunions.",
                    en: "For the first wireframe iterations, I used Figma Make to quickly generate interface variants from text descriptions. That let me explore a wider solution space in less time, and bring concrete options to stakeholders from the very first meetings.",
                  },
                  tag: 'Figma Make',
                },
                {
                  num: '03',
                  title: { fr: 'Design system assisté par Claude', en: 'Design system, assisted by Claude' },
                  desc: {
                    fr: "La construction du design system a bénéficié de l'assistance de Claude (Anthropic) pour structurer l'architecture des tokens, documenter les décisions et générer les premières versions des guidelines. L'IA n'a pas remplacé le jugement de design, elle a accéléré la production de la documentation et aidé à maintenir la cohérence à travers les itérations.",
                    en: "Building the design system was supported by Claude (Anthropic), used to structure the token architecture, document decisions and draft the first versions of the guidelines. AI didn't replace design judgment, it sped up documentation and helped maintain consistency across iterations.",
                  },
                  tag: 'Claude',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid oklch(0.91 0.02 264)' }}
                >
                  <div
                    className="px-6 py-4 flex items-center justify-between"
                    style={{ backgroundColor: 'oklch(0.94 0.04 264)' }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-bold"
                        style={{ color: 'oklch(0.6 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.num}
                      </span>
                      <h3
                        className="text-base font-bold"
                        style={{ fontFamily: 'Jost, sans-serif', color: '#3B3FD8' }}
                      >
                        {t(lang, item.title)}
                      </h3>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: '#3B3FD8',
                        color: '#fff',
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="px-6 py-5 bg-white">
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.28 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {t(lang, item.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {accent(lang, {
              fr: "Ce projet m'a convaincue que l'IA ne remplace pas le designer, elle amplifie sa capacité à explorer, à documenter et à itérer. Le jugement, la sensibilité utilisateur et les décisions stratégiques restent humains.",
              en: "This project convinced me that AI doesn't replace the designer, it amplifies their ability to explore, document and iterate. Judgment, user sensitivity and strategic decisions stay human.",
            })}

            {h3(lang, { fr: "L'IA dans le produit lui-même", en: 'AI in the product itself' })}
            {bodyText(lang, {
              fr: "Au-delà de la démarche de design, l'IA est aussi au cœur du produit City Manager. Les algorithmes qui croisent les données territoriales, détectent les signaux faibles et génèrent des insights actionnables sont eux-mêmes des systèmes d'IA. Concevoir une interface qui rend ces algorithmes compréhensibles et utilisables par des non-experts a été l'un des défis de conception les plus stimulants du projet.",
              en: "Beyond the design process, AI is also core to the City Manager product itself. The algorithms that cross-reference local data, detect weak signals and generate actionable insights are themselves AI systems. Designing an interface that makes these algorithms understandable and usable by non-experts was one of the most stimulating design challenges of the project.",
            })}
          </section>
        )}

        {/* ── PERSPECTIVES ── */}
        {active === 'perspectives' && (
          <section>
            {sectionTitle(lang, { fr: "Une plateforme prometteuse, un marché qui s'élargit", en: 'A promising platform, a widening market' })}
            {bodyText(lang, {
              fr: "City Manager a été conçu pour les managers de centre-ville, mais le travail de discovery a révélé quelque chose d'intéressant : le mécanisme de base de la plateforme (cibler, détecter, sécuriser, engager) est pertinent bien au-delà de ce premier marché.",
              en: "City Manager was designed for city-center managers, but the discovery work revealed something interesting: the platform's core mechanism (target, detect, reassure, engage) is relevant well beyond that first market.",
            })}

            {accent(lang, {
              fr: "Ce n'est pas juste un outil pour les managers de centre-ville. C'est un mécanisme d'engagement territorial qui peut s'adapter à d'autres typologies de professionnels.",
              en: "This isn't just a tool for city-center managers. It's a local-engagement mechanism that can adapt to other kinds of professionals.",
            })}

            {h3(lang, { fr: "D'autres typologies de clients identifiées", en: 'Other customer profiles identified' })}
            <div className="space-y-3 mb-10">
              {[
                {
                  title: { fr: 'Gestionnaires de centres commerciaux', en: 'Shopping center managers' },
                  desc: {
                    fr: "Même problématique de vacance, même besoin de suivi des enseignes, même enjeu de légitimité face aux propriétaires et aux investisseurs. Le mécanisme Cibler, Détecter, Sécuriser, Engager s'applique directement.",
                    en: "Same vacancy problem, same need to track brands, same legitimacy challenge with landlords and investors. The Target, Detect, Reassure, Engage mechanism applies directly.",
                  },
                },
                {
                  title: { fr: 'Brokers en immobilier commercial', en: 'Commercial real estate brokers' },
                  desc: {
                    fr: "Besoin de veille sur les enseignes en expansion, de détection des opportunités avant les concurrents, de gestion d'un portefeuille de contacts et de locaux. City Manager pourrait devenir leur outil de prospection principal.",
                    en: "Need to watch expanding brands, spot opportunities ahead of competitors, manage a portfolio of contacts and units. City Manager could become their primary prospecting tool.",
                  },
                },
                {
                  title: { fr: 'Collectivités et agences de développement économique', en: 'Local authorities and economic development agencies' },
                  desc: {
                    fr: "Suivi de l'attractivité économique d'un territoire, pilotage des zones d'activité, reporting aux élus. Un marché public potentiellement très large.",
                    en: "Tracking an area's economic appeal, managing business zones, reporting to elected officials. A potentially very large public-sector market.",
                  },
                },
              ].map((item) => (
                <div
                  key={item.title.fr}
                  className="flex items-start gap-4 p-5 rounded-sm"
                  style={{ border: '1px solid oklch(0.91 0.02 264)', backgroundColor: '#fff' }}
                >
                  <span style={{ color: '#3B3FD8', fontSize: '1.1rem', flexShrink: 0, marginTop: '2px' }}>→</span>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
                    >
                      {t(lang, item.title)}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.4 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {t(lang, item.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {h3(lang, { fr: "Ce que j'ai appris", en: 'What I learned' }, 'mt-10')}
            {bodyText(lang, {
              fr: "Ce projet m'a confirmé que le travail de discovery est le plus structurant d'un projet produit. Prendre le temps de comprendre un métier avant de proposer une solution, c'est ce qui permet d'éviter de construire quelque chose d'inutile, même bien fait. J'ai également appris à travailler avec des utilisateurs aux profils très différents, et à concevoir des interfaces qui ne présupposent pas un niveau d'aisance technique élevé, sans pour autant être condescendantes.",
              en: "This project confirmed that discovery is the most foundational work in a product project. Taking the time to understand a job before proposing a solution is what keeps you from building something useless, no matter how well-crafted. I also learned to work with very different user profiles, and to design interfaces that don't assume a high level of technical comfort, without being condescending either.",
            })}
            <div className="my-4" />
            {bodyText(lang, {
              fr: "L'intégration de l'IA dans ma démarche de design a été une révélation : non pas comme un raccourci, mais comme un amplificateur. Elle m'a permis d'explorer plus large, de documenter plus vite, et de rester concentrée sur ce qui compte vraiment : comprendre les utilisateurs et prendre les bonnes décisions de conception.",
              en: "Bringing AI into my design process was a revelation: not as a shortcut, but as an amplifier. It let me explore more broadly, document faster, and stay focused on what actually matters: understanding users and making the right design decisions.",
            })}
          </section>
        )}

        {/* Navigation bas de page */}
        <div
          className="pt-10 mt-14 flex justify-between items-center"
          style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}
        >
          <Link
            href="/"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
          >
            {lang === 'en' ? '← All projects' : '← Tous les projets'}
          </Link>
          <Link
            href="/projet/territoire-360"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
          >
            {lang === 'en' ? 'Territoire 360 →' : 'Territoire 360 →'}
          </Link>
        </div>
      </main>
    </div>
    </>
  );
}
