/*
  CityManager.tsx — Cas d'étude City Manager
  Charte : Jost pour les titres, DM Sans pour le corps, bleu #3B3FD8 en accent
  Structure : 7 chapitres séquencés avec navigation par onglets
  1. Contexte
  2. Personnas
  3. Architecture de l'information
  4. La promesse produit (Cibler, Détecter, Sécuriser, Engager)
  5. Gamification
  6. L'IA dans la démarche
  7. Perspectives
*/

import { useState, Fragment } from 'react';
import type React from 'react';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import CaseStudyHeader from '@/components/CaseStudyHeader';

const CHAPTERS = [
  { id: 'contexte', label: 'Contexte' },
  { id: 'personnas', label: 'Personnas' },
  { id: 'entretiens', label: 'Entretiens utilisateurs' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'promesse', label: 'La promesse produit' },
  { id: 'gamification', label: 'Gamification' },
  { id: 'perspectives', label: 'Perspectives' },
  { id: 'ia', label: "L'IA dans la démarche", bonus: true },
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

export default function CityManager() {
  const [active, setActive] = useState('contexte');

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
                {ch.label}
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
            {sectionTitle('Un nouveau marché, une vraie opportunité')}
            {bodyText("Dans le cadre d'une étude de marché menée pour Codata (groupe Intescia), j'ai travaillé sur un marché encore peu adressé par les outils digitaux : les managers de centre-ville. Ces professionnels, souvent rattachés aux collectivités ou aux associations de commerçants, pilotent la dynamique commerciale et urbaine de leur territoire. Ils manquent d'outils adaptés à leur réalité de terrain.")}
            <div className="my-6" />
            {bodyText("L'enjeu était double : identifier si un vrai problème existait, et si oui, définir ce qu'un produit digital pourrait apporter de concret à ces utilisateurs, sans partir d'une solution préconçue.")}
            {accent("« Un problème bien posé est un problème à moitié résolu. Avant de dessiner quoi que ce soit, j'ai voulu comprendre qui étaient vraiment ces utilisateurs et ce qui les bloquait au quotidien. »")}

            <h3
              className="text-lg font-semibold mt-8 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              Une équipe agile, un avantage décisif
            </h3>
            {bodyText("L'équipe de Codata a la particularité d'être très agile. Quand quelque chose coince, on peut rectifier rapidement. Cette capacité à itérer sans friction a été un vrai atout tout au long du projet : les hypothèses pouvaient être testées, ajustées et réorientées sans attendre des cycles longs de validation. C'est ce qui a permis d'avancer vite sur des sujets complexes, sans jamais perdre de vue l'utilisateur.")}

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: '🔍', title: 'Recherche', desc: 'Entretiens utilisateurs, analyse des usages existants, immersion dans le métier' },
                { icon: '🗺️', title: 'Cadrage', desc: 'Définition du périmètre, priorisation des besoins, formulation des hypothèses' },
                { icon: '✏️', title: 'Vision', desc: 'Conception des parcours clés, wireframes, présentation aux parties prenantes' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-sm"
                  style={{ border: '1px solid oklch(0.91 0.02 264)', backgroundColor: '#fff' }}
                >
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.4 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── PERSONNAS ── */}
        {active === 'personnas' && (
          <section>
            {sectionTitle('Comprendre avant de concevoir')}
            {bodyText("Avant de toucher à un seul wireframe, j'ai conduit des entretiens utilisateurs pour comprendre qui sont vraiment les managers de centre-ville. Ce qui est apparu rapidement, c'est l'hétérogénéité des profils : certains sont très à l'aise avec le digital, d'autres beaucoup moins, mais tous partagent les mêmes frustrations fondamentales.")}
            {accent("L'interface doit être accessible sans être infantilisante. C'est une contrainte de conception forte quand les profils vont du gestionnaire peu digitalisé au manager très outillé.")}

            <div className="mt-8 space-y-6">
              {[
                {
                  name: 'Le Manager Opérationnel',
                  role: 'Chargé de mission centre-ville, collectivité',
                  color: '#3B3FD8',
                  bg: 'oklch(0.94 0.04 264)',
                  needs: [
                    'Une vue consolidée et à jour des locaux commerciaux de son territoire',
                    'Des alertes sur les changements de situation (fermetures, vacances)',
                    'Un outil pour prouver son impact aux élus',
                  ],
                  frustrations: [
                    'Passe des heures à consolider des données éparpillées (tableurs, mails, terrain)',
                    'Apprend les changements de situation par le bouche-à-oreille',
                    "N'a aucun indicateur de comparaison avec d'autres territoires",
                  ],
                },
                {
                  name: "Le Directeur d'Association",
                  role: "Directeur d'association de commerçants",
                  color: '#1a1a6e',
                  bg: 'oklch(0.95 0.02 264)',
                  needs: [
                    'Suivre les enseignes cibles pour attirer de nouveaux commerçants',
                    'Gérer ses contacts (propriétaires, élus, commerçants) en un seul endroit',
                    'Communiquer des données convaincantes à ses partenaires',
                  ],
                  frustrations: [
                    "Jongle entre plusieurs outils sans cohérence (CRM, tableur, email)",
                    'Difficile de prioriser ses actions sans vue d\'ensemble',
                    'Manque de légitimité face aux élus sans données chiffrées',
                  ],
                },
              ].map((p) => (
                <div
                  key={p.name}
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
                      {p.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: 'oklch(0.45 0.05 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {p.role}
                    </p>
                  </div>
                  <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest font-semibold mb-3"
                        style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Besoins
                      </p>
                      <ul className="space-y-2">
                        {p.needs.map((n) => (
                          <li
                            key={n}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: 'oklch(0.28 0.03 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
                          >
                            <span style={{ color: '#3B3FD8', marginTop: '3px', flexShrink: 0 }}>→</span>
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest font-semibold mb-3"
                        style={{ color: 'oklch(0.55 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Frustrations
                      </p>
                      <ul className="space-y-2">
                        {p.frustrations.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: 'oklch(0.4 0.02 264)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6 }}
                          >
                            <span style={{ color: 'oklch(0.6 0.02 264)', marginTop: '3px', flexShrink: 0 }}>✕</span>
                            {f}
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
                { label: 'La vacance commerciale est un angle mort', text: "Les managers n'ont pas de vue temps réel sur les locaux vacants. Ils apprennent souvent les changements de situation par le bouche-à-oreille." },
                { label: "L'information zéro est une information", text: "Ne pas savoir pourquoi un local est vide depuis 18 mois est aussi précieux que de savoir qu'il est en négociation. L'outil doit rendre l'inconnu visible." },
                { label: 'Le comparatif territorial est un levier de légitimité', text: "Pouvoir dire « mon taux de vacance est inférieur à la moyenne des villes comparables » change le rapport aux élus. La donnée comparative est une arme politique." },
                { label: 'Profils très hétérogènes', text: "Du manager très digital au gestionnaire peu à l'aise avec les outils, l'interface doit être accessible sans être condescendante." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-sm"
                  style={{ backgroundColor: 'oklch(0.94 0.04 264)' }}
                >
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.35 0.1 264)' }}
                  >
                    {item.label}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'oklch(0.28 0.05 264)', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── ENTRETIENS UTILISATEURS ── */}
        {active === 'entretiens' && (
          <section>
            {sectionTitle("Le terrain challenge la promesse")}
            {bodyText("Une fois le prototype posé, il fallait le confronter à la réalité. Quatre managers de centre-ville (Orléans, Strasbourg, Limoges, Pau) ont testé l'interface en visio, en manipulant eux-mêmes le prototype Figma. L'exercice n'était pas de valider un pitch, mais de regarder, en direct, où l'outil tenait et où il se fissurait.")}
            {accent("Certaines choses que j'avais présentées comme figées ont changé pendant les entretiens eux-mêmes. Ce n'était pas de la validation, c'était de la co-construction.")}

            <h3
              className="text-lg font-semibold mt-8 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              Ce qui a été confirmé
            </h3>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'La friction est l\'ennemi n°1',
                  desc: 'À Limoges, Samuel a été le plus direct : "plus vous avez des manips, plus vous avez des tâches à faire, moins vous en faites." Il a rejeté d\'emblée l\'idée d\'un statut de qualification de la vacance en plus du triptyque vacant/occupé, au profit d\'un système binaire simple avec bascule directe vers "en négociation". L\'idée a été retenue.',
                },
                {
                  title: 'Le rôle détermine l\'usage',
                  desc: 'À Strasbourg, Thomas a été explicite sur le manque de fraîcheur des données existantes ("une frustration, même, je dirais") et sur l\'intérêt du matching prospects/locaux. À Limoges, Samuel a au contraire jugé le module Analyse quasiment sans intérêt pour son usage, révélant que ce module sert d\'autres profils, plus stratégiques.',
                },
                {
                  title: 'Le terme "demandeur" ne convenait à personne',
                  desc: 'Remonté indépendamment par Angélique (Orléans), Samuel (Limoges, "contact potentiel") et pendant l\'entretien du Havre, où le glissement s\'est fait en direct : "au début on pensait enseigne, ensuite on a rayé enseigne pour se dire demandeur, mais finalement le mot clé c\'est prospect." Le terme a été changé sur le champ.',
                },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg border" style={{ borderColor: 'oklch(0.88 0.02 264)', background: 'oklch(0.97 0.01 264)' }}>
                  <div className="font-semibold mb-1" style={{ fontFamily: 'Jost, sans-serif', color: '#3B3FD8' }}>{item.title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: 'oklch(0.35 0.02 264)' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <h3
              className="text-lg font-semibold mt-8 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              Ce qui a fait bouger le produit
            </h3>
            {bodyText("Le cas le plus net vient de Strasbourg. Le statut Occupé/Vacant avait été présenté comme verrouillé, entièrement piloté par la donnée Codata, pour éviter que des collectivités ne \"trichent\" sur leurs statistiques. Anne-Cécile a opposé un cas concret : une enseigne fermée le 15 janvier restée affichée comme occupée pendant un an, parce que le relevé Codata suivant tombait aussi en janvier.")}
            {accent("L'argument a suffi à faire revenir sur la règle : le statut est devenu librement modifiable par l'utilisateur, avec la valeur Codata toujours conservée et restaurable en arrière-plan. Elle n'est jamais écrasée ni perdue, seulement mise en concurrence avec la correction terrain.")}

            <h3
              className="text-lg font-semibold mt-8 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              Une opportunité inattendue
            </h3>
            {bodyText("À Pau, Jérôme a fait remonter un signal commercial fort qui n'était pas anticipé : sa collectivité paie environ 18 000 €/an pour MyTraffic (flux, zone de chalandise, pouvoir d'achat, sociodémographie), en plus de l'abonnement Codata. Son message a été direct : \"si vous proposez ces critères-là dans votre solution, ça peut remettre en question notre abonnement à MyTraffic (...) le choix va être vite fait.\"")}
            {accent("Un signal net : la donnée de flux et de chalandise n'est pas un simple enrichissement de fiche, mais un axe de différenciation concurrentielle à part entière.")}

            <h3
              className="text-lg font-semibold mt-8 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              Ce qui reste ouvert
            </h3>
            {bodyText("Le pilier Engager (gamification, badges, objectifs) n'a été testé dans aucun de ces quatre entretiens. Ce n'est pas un oubli : le coût de développement de ces mécaniques a été jugé trop élevé pour justifier leur place dans un MVP centré sur le strict minimum fonctionnel. Sa pertinence reste donc entièrement à valider sur le terrain plutôt que supposée.")}
            {bodyText("Ces entretiens ont aussi rendu caduques les personas initiaux (Marie, Thomas), remplacés depuis par des personas ancrés dans ces quatre échanges : Camille (Orléans), Léa (Strasbourg), Vincent (Pau), Karim (Limoges), chacun révélant un rapport différent à l'outil, du plus opérationnel au plus stratégique.")}
          </section>
        )}

        {/* ── ARCHITECTURE ── */}
        {active === 'architecture' && (
          <section>
            {sectionTitle("Structurer avant de dessiner")}
            {bodyText("Une fois les personnas posés et les besoins identifiés, j'ai travaillé sur l'architecture de l'information du site. L'enjeu était de trouver une structure qui soit à la fois simple pour les profils peu digitalisés et suffisamment puissante pour les utilisateurs avancés.")}
            {accent("La règle que je me suis fixée : chaque information doit être accessible en 2 clics maximum depuis n'importe quel point de l'interface.")}

            <h3
              className="text-lg font-semibold mt-8 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              Les 4 modules structurants
            </h3>
            <div className="space-y-3 mb-8">
              {[
                {
                  num: '1',
                  title: 'Carte des locaux',
                  desc: 'Vue interactive avec statuts nuancés : vacant, en négociation, occupé, à risque. Historique des occupations pour chaque local. C\'est le point d\'entrée principal, celui que tous les profils utilisent en premier.',
                },
                {
                  num: '2',
                  title: 'Veille enseignes',
                  desc: 'Recherche et suivi des enseignes cibles. Alertes sur les signaux de dynamique commerciale (ouvertures, fermetures, liquidations). Un outil de prospection intégré au quotidien du manager.',
                },
                {
                  num: '3',
                  title: 'Mini-CRM territorial',
                  desc: 'Gestion des contacts (propriétaires, commerçants, élus), suivi des échanges, gestion documentaire intégrée. Remplace les tableurs et les carnets d\'adresses éparpillés.',
                },
                {
                  num: '4',
                  title: 'Tableau de bord comparatif',
                  desc: 'Indicateurs de performance du centre-ville, comparaison avec des villes de taille similaire, suivi des objectifs personnalisés. Le module qui donne de la légitimité aux managers face aux élus.',
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
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.4 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3
              className="text-lg font-semibold mt-10 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              Les parcours clés conçus
            </h3>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Prise en main du tableau de bord', text: 'Premier contact avec la plateforme, découverte de la carte et des indicateurs clés. Pensé pour être compréhensible sans formation.' },
                { step: '02', title: 'Mise à jour du statut d\'un local', text: 'Action la plus fréquente du manager. Doit être rapide, intuitive, réalisable depuis le terrain (mobile).' },
                { step: '03', title: 'Recherche d\'une enseigne cible', text: 'Parcours de prospection : identifier une enseigne, consulter ses signaux, l\'ajouter à une liste de suivi, programmer une alerte.' },
                { step: '04', title: 'Génération d\'un rapport pour les élus', text: 'Synthèse automatique des indicateurs du territoire, comparaison avec les villes similaires, export en un clic.' },
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
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.28 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {item.text}
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
            {sectionTitle('Cibler, Détecter, Sécuriser, Engager')}
            {bodyText("City Manager n'est pas simplement un outil de détection de vacance commerciale. C'est une plateforme d'engagement, pensée pour accompagner le manager à chaque étape de son action sur le terrain. Cette promesse se décline en quatre temps, qui correspondent aux quatre grandes phases du travail d'un manager de centre-ville.")}

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                {
                  word: 'Cibler',
                  num: '01',
                  color: '#3B3FD8',
                  bg: 'oklch(0.94 0.04 264)',
                  desc: 'Identifier les locaux prioritaires, les enseignes à fort potentiel, les zones à risque. L\'IA analyse les données du territoire pour faire remonter les signaux faibles avant qu\'ils ne deviennent des problèmes.',
                },
                {
                  word: 'Détecter',
                  num: '02',
                  color: '#1a1a6e',
                  bg: 'oklch(0.95 0.02 264)',
                  desc: 'Repérer les changements de situation en temps réel : fermeture imminente, enseigne en liquidation, local vacant depuis trop longtemps. Les algorithmes croisent des sources multiples pour alerter le manager au bon moment.',
                },
                {
                  word: 'Sécuriser',
                  num: '03',
                  color: '#3B3FD8',
                  bg: 'oklch(0.94 0.04 264)',
                  desc: 'Fournir des informations fiables et contextualisées qui permettent au manager d\'agir avec confiance. Pas de données brutes incompréhensibles : des insights actionnables, accompagnés d\'un contexte rassurant.',
                },
                {
                  word: 'Engager',
                  num: '04',
                  color: '#1a1a6e',
                  bg: 'oklch(0.95 0.02 264)',
                  desc: 'Passer à l\'action : contacter un propriétaire, proposer un local à une enseigne cible, partager un rapport avec les élus. La plateforme transforme l\'information en action concrète, en un minimum de clics.',
                },
              ].map((item) => (
                <div
                  key={item.word}
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
                      {item.word}
                    </h3>
                  </div>
                  <div className="px-6 py-5 bg-white">
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.28 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3
              className="text-lg font-semibold mt-10 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              L'IA et les algorithmes au cœur du produit
            </h3>
            {bodyText("Ce qui distingue City Manager d'un simple outil de cartographie, c'est l'intelligence embarquée. Les algorithmes croisent des données hétérogènes (données cadastrales, signaux commerciaux, historique des occupations, données de flux) pour produire des insights actionnables. L'IA ne remplace pas le jugement du manager, elle l'amplifie : elle lui dit où regarder, quand agir, et avec quelles informations.")}
            {accent("L'information sécurisante est une fonctionnalité à part entière. Un manager qui agit avec des données fiables est un manager qui agit plus vite, et qui convainc plus facilement ses interlocuteurs.")}
          </section>
        )}

        {/* ── GAMIFICATION ── */}
        {active === 'gamification' && (
          <section>
            {sectionTitle('Un sujet qui a ouvert une réflexion au niveau groupe')}
            {bodyText("Au fil du projet, un sujet inattendu a émergé : la gamification. L'idée est née d'une observation simple : les managers de centre-ville travaillent souvent seuls, sans feedback immédiat sur leurs actions. Ils ne savent pas si ce qu'ils font a un impact, et cette absence de retour peut être démotivante sur la durée.")}
            {accent("Et si la plateforme récompensait les bonnes pratiques ? Et si elle rendait visible le progrès, pas seulement le résultat ?")}

            <h3
              className="text-lg font-semibold mt-8 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              Les mécanismes explorés
            </h3>
            <div className="space-y-3 mb-8">
              {[
                {
                  title: 'Indicateurs de progression',
                  desc: 'Visualiser l\'évolution du taux de vacance dans le temps, avec des jalons et des objectifs personnalisés. Rendre le progrès tangible, même quand il est lent.',
                },
                {
                  title: 'Badges et reconnaissance',
                  desc: 'Valoriser les actions clés : premier local remis en activité, 10 enseignes suivies, rapport partagé avec les élus. Des marqueurs symboliques qui donnent du sens au travail quotidien.',
                },
                {
                  title: 'Comparaison entre territoires',
                  desc: 'Un classement bienveillant entre villes comparables, qui stimule sans stigmatiser. L\'objectif n\'est pas de créer de la compétition, mais de l\'émulation positive.',
                },
                {
                  title: 'Streaks et régularité',
                  desc: 'Encourager la mise à jour régulière des données (un local mis à jour par semaine, une enseigne suivie par mois). La plateforme devient un outil de routine professionnelle.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-sm"
                  style={{ border: '1px solid oklch(0.91 0.02 264)', backgroundColor: '#fff' }}
                >
                  <span style={{ color: '#3B3FD8', fontSize: '1.2rem', flexShrink: 0, marginTop: '2px' }}>◆</span>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.4 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3
              className="text-lg font-semibold mt-10 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              Un sujet qui dépasse City Manager
            </h3>
            {bodyText("Ce qui était au départ une piste d'amélioration de l'expérience utilisateur est devenu un sujet de réflexion au niveau du groupe Intescia. La question posée est plus large : comment intégrer des mécaniques d'engagement dans des outils B2B sans tomber dans le gadget ? Comment rendre un outil professionnel motivant sans le transformer en jeu ?")}
            {bodyText("Cette réflexion est en cours. City Manager a servi de terrain d'exploration pour un sujet qui pourrait irriguer d'autres produits de l'écosystème.")}
          </section>
        )}

        {/* ── IA DANS LA DÉMARCHE ── */}
        {active === 'ia' && (
          <section>
            {sectionTitle("L'IA comme partenaire de travail")}
            {bodyText("Ce projet a été l'occasion d'intégrer l'IA à ma démarche de design de façon concrète et structurée, pas comme un gadget, mais comme un vrai partenaire de travail. De la phase de discovery jusqu'à la conception, l'IA a été présente à chaque étape.")}

            <div className="mt-8 space-y-6">
              {[
                {
                  num: '01',
                  title: 'Accompagnement dès la phase de discovery',
                  desc: "Dès le début du projet, j'ai travaillé avec Manus pour structurer ma démarche de discovery : formuler les bonnes questions d'entretien, analyser les verbatims, identifier les patterns dans les retours utilisateurs. L'IA m'a permis d'aller plus vite sur les phases analytiques pour consacrer plus de temps à l'interprétation et à la décision.",
                  tag: 'Manus',
                },
                {
                  num: '02',
                  title: 'Maquettage sur Figma Make',
                  desc: "Pour les premières itérations de wireframes, j'ai utilisé Figma Make pour générer rapidement des variantes d'interface à partir de descriptions textuelles. Cela m'a permis d'explorer un espace de solutions plus large en moins de temps, et de présenter des options concrètes aux parties prenantes dès les premières réunions.",
                  tag: 'Figma Make',
                },
                {
                  num: '03',
                  title: 'Design system assisté par Claude',
                  desc: "La construction du design system a bénéficié de l'assistance de Claude (Anthropic) pour structurer l'architecture des tokens, documenter les décisions et générer les premières versions des guidelines. L'IA n'a pas remplacé le jugement de design, elle a accéléré la production de la documentation et aidé à maintenir la cohérence à travers les itérations.",
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
                        {item.title}
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
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {accent("Ce projet m'a convaincue que l'IA ne remplace pas le designer, elle amplifie sa capacité à explorer, à documenter et à itérer. Le jugement, la sensibilité utilisateur et les décisions stratégiques restent humains.")}

            <h3
              className="text-lg font-semibold mt-8 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              L'IA dans le produit lui-même
            </h3>
            {bodyText("Au-delà de la démarche de design, l'IA est aussi au cœur du produit City Manager. Les algorithmes qui croisent les données territoriales, détectent les signaux faibles et génèrent des insights actionnables sont eux-mêmes des systèmes d'IA. Concevoir une interface qui rend ces algorithmes compréhensibles et utilisables par des non-experts a été l'un des défis de conception les plus stimulants du projet.")}
          </section>
        )}

        {/* ── PERSPECTIVES ── */}
        {active === 'perspectives' && (
          <section>
            {sectionTitle('Une plateforme prometteuse, un marché qui s\'élargit')}
            {bodyText("City Manager a été conçu pour les managers de centre-ville, mais le travail de discovery a révélé quelque chose d'intéressant : le mécanisme de base de la plateforme (cibler, détecter, sécuriser, engager) est pertinent bien au-delà de ce premier marché.")}

            {accent("Ce n'est pas juste un outil pour les managers de centre-ville. C'est un mécanisme d'engagement territorial qui peut s'adapter à d'autres typologies de professionnels.")}

            <h3
              className="text-lg font-semibold mt-8 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              D'autres typologies de clients identifiées
            </h3>
            <div className="space-y-3 mb-10">
              {[
                {
                  title: 'Gestionnaires de centres commerciaux',
                  desc: 'Même problématique de vacance, même besoin de suivi des enseignes, même enjeu de légitimité face aux propriétaires et aux investisseurs. Le mécanisme Cibler, Détecter, Sécuriser, Engager s\'applique directement.',
                },
                {
                  title: 'Brokers en immobilier commercial',
                  desc: 'Besoin de veille sur les enseignes en expansion, de détection des opportunités avant les concurrents, de gestion d\'un portefeuille de contacts et de locaux. City Manager pourrait devenir leur outil de prospection principal.',
                },
                {
                  title: 'Collectivités et agences de développement économique',
                  desc: 'Suivi de l\'attractivité économique d\'un territoire, pilotage des zones d\'activité, reporting aux élus. Un marché public potentiellement très large.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-sm"
                  style={{ border: '1px solid oklch(0.91 0.02 264)', backgroundColor: '#fff' }}
                >
                  <span style={{ color: '#3B3FD8', fontSize: '1.1rem', flexShrink: 0, marginTop: '2px' }}>→</span>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.4 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3
              className="text-lg font-semibold mt-10 mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
            >
              Ce que j'ai appris
            </h3>
            {bodyText("Ce projet m'a confirmé que le travail de discovery est le plus structurant d'un projet produit. Prendre le temps de comprendre un métier avant de proposer une solution, c'est ce qui permet d'éviter de construire quelque chose d'inutile, même bien fait. J'ai également appris à travailler avec des utilisateurs aux profils très différents, et à concevoir des interfaces qui ne présupposent pas un niveau d'aisance technique élevé, sans pour autant être condescendantes.")}
            <div className="my-4" />
            {bodyText("L'intégration de l'IA dans ma démarche de design a été une révélation : non pas comme un raccourci, mais comme un amplificateur. Elle m'a permis d'explorer plus large, de documenter plus vite, et de rester concentrée sur ce qui compte vraiment : comprendre les utilisateurs et prendre les bonnes décisions de conception.")}
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
            ← Tous les projets
          </Link>
          <Link
            href="/projet/territoire-360"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
          >
            Territoire 360 →
          </Link>
        </div>
      </main>
    </div>
    </>
  );
}
