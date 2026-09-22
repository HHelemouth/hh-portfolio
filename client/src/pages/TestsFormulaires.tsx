/*
  TestsFormulaires.tsx — Cas d'étude Tests & Formulaires UX
  Charte : Jost pour les titres, DM Sans pour le corps, bleu #3B3FD8 en accent
  Structure : 4 chapitres séquencés avec navigation par onglets
  Bilingue FR/EN, piloté par le contexte de langue (voir lib/i18n.tsx)
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
  { id: 'bibliotheque', label: { fr: 'Bibliothèque de méthodes', en: 'Methods library' } },
  { id: 'tests', label: { fr: 'Formulaires prêts à l\u2019emploi', en: 'Ready-to-use forms' } },
  { id: 'partage', label: { fr: 'Créer, partager, interpréter', en: 'Create, share, interpret' } },
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

const h3 = (lang: Lang, bi: Bi, extraClass = 'mt-8') => (
  <h3
    className={`text-lg font-semibold ${extraClass} mb-4`}
    style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}
  >
    {t(lang, bi)}
  </h3>
);

export default function TestsFormulaires() {
  const [active, setActive] = useState('contexte');
  const { lang } = useLanguage();

  return (
    <>
    <SEOHead
      title="Tests & Formulaires UX"
      description="Outil personnel pour créer, partager et interpréter des tests UX standardisés (AttrakDiff, meCUE), avec une bibliothèque de méthodes de référence."
      canonicalPath="/projet/tests-et-formulaires"
    />
    <div className="min-h-screen w-full" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>

      {/* Hero */}
      <CaseStudyHeader
        title="Tests & Formulaires UX"
        titleEn="Tests & Formulaires UX"
        tags={['Product Building', 'Développement', 'React', 'UX Research']}
        tagsEn={['Product Building', 'Development', 'React', 'UX Research']}
        description="Un outil pour ne plus reconstruire un questionnaire UX à chaque fois : bibliothèque de méthodes, tests standardisés prêts à l'emploi, partage et interprétation automatique des résultats."
        descriptionEn="A tool to stop rebuilding a UX questionnaire from scratch every time: a methods library, ready-to-use standardized tests, sharing and automatic interpretation of results."
        meta={[
          { label: 'Rôle', value: 'Product Design & Développement' },
          { label: 'Contexte', value: 'Projet personnel' },
          { label: 'Stack', value: 'React, TypeScript, Firebase' },
          { label: 'Type', value: 'Product Building' },
        ]}
        metaEn={[
          { label: 'Role', value: 'Product Design & Development' },
          { label: 'Context', value: 'Personal project' },
          { label: 'Stack', value: 'React, TypeScript, Firebase' },
          { label: 'Type', value: 'Product Building' },
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
        }}
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
            {sectionTitle(lang, { fr: 'Ne plus reconstruire un questionnaire à chaque fois', en: 'No more rebuilding a questionnaire every time' })}
            {bodyText(lang, {
              fr: "En parallèle de mon poste de product designer, j'ai construit cet outil pour un besoin très concret : ne plus dépendre d'un abonnement payant (Maze, UserTesting) ni reconstruire un questionnaire standardisé à la main à chaque fois que j'ai besoin de lancer un test utilisateur rapide.",
              en: "Alongside my product design job, I built this tool for a very concrete need: no longer depending on a paid subscription (Maze, UserTesting) or rebuilding a standardized questionnaire by hand every time I need to run a quick user test.",
            })}
            <div className="my-6" />
            {bodyText(lang, {
              fr: "Le site réunit deux choses : une bibliothèque de méthodes UX de référence à consulter selon le moment d'un projet, et deux questionnaires standardisés prêts à l'emploi (AttrakDiff, meCUE), avec création de session, lien de partage, et résultats interprétés automatiquement.",
              en: "The site brings together two things: a reference library of UX methods to consult depending on where a project stands, and two ready-to-use standardized questionnaires (AttrakDiff, meCUE), with session creation, a shareable link, and automatically interpreted results.",
            })}

            {h3(lang, { fr: 'Stack', en: 'Stack' })}
            {bodyText(lang, {
              fr: "Construit seule avec React, TypeScript et Firebase (authentification Google et base de données Firestore), avec un déploiement automatique à chaque mise à jour du code.",
              en: "Built entirely on my own with React, TypeScript and Firebase (Google authentication and Firestore database), with automatic deployment on every code update.",
            })}

            <div
              className="mt-10 flex items-center justify-between flex-wrap gap-4 rounded-sm px-6 py-5"
              style={{ backgroundColor: 'oklch(0.94 0.04 264)', borderLeft: '3px solid #3B3FD8' }}
            >
              <p className="text-sm" style={{ color: 'oklch(0.25 0.05 264)', fontFamily: 'DM Sans, sans-serif' }}>
                {lang === 'en' ? 'The tool is live and usable today.' : "L'outil est en ligne et utilisable dès aujourd'hui."}
              </p>
              <a
                href="https://tests-et-formulaires.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-4 py-2 rounded-sm transition-opacity hover:opacity-85"
                style={{ backgroundColor: '#3B3FD8', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}
              >
                {lang === 'en' ? 'View the live site ↗' : 'Voir le site en ligne ↗'}
              </a>
            </div>
          </section>
        )}

        {/* ── BIBLIOTHÈQUE DE MÉTHODES ── */}
        {active === 'bibliotheque' && (
          <section>
            {sectionTitle(lang, { fr: 'Une bibliothèque de 15 méthodes, classées par usage', en: 'A library of 15 methods, sorted by use' })}
            {bodyText(lang, {
              fr: "L'idée n'est pas de tout réexpliquer, mais d'avoir le bon réflexe sous la main au bon moment d'un projet. Chaque fiche indique en une phrase à quel moment l'utiliser, avec un lien vers la ressource de référence. 15 méthodes, réparties en 4 catégories.",
              en: "The idea isn't to re-explain everything, it's to have the right reflex at hand at the right point in a project. Each entry states in one sentence when to use it, with a link to the reference source. 15 methods, spread across 4 categories.",
            })}

            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              {[
                { title: { fr: 'Évaluation quantitative', en: 'Quantitative evaluation' }, desc: { fr: "Mesurer, comparer, suivre une évolution dans le temps.", en: 'Measure, compare, track a change over time.' } },
                { title: { fr: 'Évaluation qualitative', en: 'Qualitative evaluation' }, desc: { fr: "Comprendre le pourquoi, recueillir du verbatim.", en: 'Understand the why, collect verbatim feedback.' } },
                { title: { fr: 'Évaluation experte', en: 'Expert evaluation' }, desc: { fr: "Auditer une interface sans mobiliser d'utilisateurs.", en: 'Audit an interface without involving users.' } },
                { title: { fr: 'Idéation & conception', en: 'Ideation & design' }, desc: { fr: "Générer et structurer des pistes de solution.", en: 'Generate and structure solution ideas.' } },
              ].map((cat) => (
                <div
                  key={cat.title.fr}
                  className="p-5 rounded-sm"
                  style={{ border: '1px solid oklch(0.91 0.02 264)', backgroundColor: '#fff' }}
                >
                  <h3 className="text-sm font-semibold mb-1" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
                    {t(lang, cat.title)}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.4 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}>
                    {t(lang, cat.desc)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── TESTS PRÊTS À L'EMPLOI ── */}
        {active === 'tests' && (
          <section>
            {sectionTitle(lang, { fr: 'Deux questionnaires validés scientifiquement, prêts à lancer', en: 'Two scientifically validated questionnaires, ready to launch' })}
            {bodyText(lang, {
              fr: "Contrairement à la bibliothèque de méthodes, ces deux tests ne sont pas juste référencés : ils sont directement utilisables, sans rien reconstruire.",
              en: "Unlike the methods library, these two tests aren't just referenced: they're directly usable, with nothing to rebuild.",
            })}

            {h3(lang, { fr: 'AttrakDiff', en: 'AttrakDiff' })}
            {bodyText(lang, {
              fr: "Évalue une interface sur 4 axes : qualité pragmatique (facilité d'usage), qualité hédonique, identité, attractivité générale. Les répondants situent leur ressenti entre 28 paires de mots opposés (ex. Simple ↔ Compliqué), sans jamais voir de mot positif ou négatif affiché à l'écran : la note se calcule après coup. Compte 5 à 8 minutes de passation. Version française validée par Lallemand, Koenig, Gronier & Martin (2015).",
              en: "Evaluates an interface across 4 axes: pragmatic quality (ease of use), hedonic quality, identity, overall attractiveness. Respondents place their impression between 28 opposite word pairs (e.g. Simple ↔ Complicated), never seeing a positive or negative word on screen: the score is computed afterwards. Takes 5 to 8 minutes to complete. French version validated by Lallemand, Koenig, Gronier & Martin (2015).",
            })}

            {h3(lang, { fr: 'meCUE', en: 'meCUE' })}
            {bodyText(lang, {
              fr: "Va plus loin, sur 10 dimensions indépendantes : utilité, utilisabilité, esthétique, statut social conféré, attachement émotionnel, émotions positives et négatives ressenties à l'usage, fidélité, intention de réutilisation, jugement global. 30 affirmations notées de 1 à 7. Plus complet que l'AttrakDiff, mais aussi plus long : 8 à 12 minutes de passation. Lallemand & Koenig (2017).",
              en: "Goes further, across 10 independent dimensions: usefulness, usability, aesthetics, social status conferred, emotional attachment, positive and negative emotions felt during use, loyalty, intention to reuse, overall judgment. 30 statements rated from 1 to 7. More thorough than AttrakDiff, but also longer: 8 to 12 minutes to complete. Lallemand & Koenig (2017).",
            })}
          </section>
        )}

        {/* ── PARTAGE & RÉSULTATS ── */}
        {active === 'partage' && (
          <section>
            {sectionTitle(lang, { fr: "Créer une session, partager un lien, lire les résultats", en: 'Create a session, share a link, read the results' })}
            {bodyText(lang, {
              fr: "Une fois le test choisi, la session se crée en donnant juste un nom. Un lien de passation est généré immédiatement, prêt à être envoyé aux testeurs.",
              en: "Once the test is chosen, the session is created by just giving it a name. A response link is generated immediately, ready to send to testers.",
            })}
            <div className="my-6" />
            {bodyText(lang, {
              fr: "Les résultats sont interprétés automatiquement selon la méthode utilisée, et peuvent être consultés en lecture seule sans connexion. Pratique pour transmettre un résultat à quelqu'un qui n'a pas de compte sur l'outil, sans avoir à exporter ou reformater quoi que ce soit.",
              en: "Results are automatically interpreted according to the method used, and can be viewed read-only without logging in. Useful for sharing a result with someone who doesn't have an account on the tool, without having to export or reformat anything.",
            })}

            {h3(lang, { fr: 'Ce que ça change concrètement', en: 'What it actually changes' })}
            {bodyText(lang, {
              fr: "Depuis sa mise en ligne, cet outil me sert directement dans mon travail : plus besoin de payer un abonnement pour lancer un questionnaire standardisé, ni de reconstruire un AttrakDiff à la main à chaque nouveau projet.",
              en: "Since it went live, this tool serves me directly in my work: no more paying for a subscription to run a standardized questionnaire, and no more rebuilding an AttrakDiff by hand for every new project.",
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
            href="/projet/interprete-de-reves"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}
          >
            {lang === 'en' ? "L'Interprète de Rêves →" : "L'Interprète de Rêves →"}
          </Link>
        </div>
      </main>
    </div>
    </>
  );
}
