/*
  ElmCodata.tsx, Cas d'étude : ELM by Codata
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
  { id: 'parcours', label: { fr: 'Parcours utilisateur', en: 'User flow' } },
  { id: 'criteres', label: { fr: 'Configuration des critères', en: 'Criteria configuration' } },
  { id: 'compte', label: { fr: 'Compte & perspectives', en: 'Account & outcome' } },
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

export default function ElmCodata() {
  const [active, setActive] = useState('contexte');
  const { lang } = useLanguage();

  return (
    <>
    <SEOHead
      title="ELM by Codata"
      description="Lancement d'une plateforme d'études locales de marché en libre-service, pour les commerçants et réseaux de franchise. Parcours utilisateur, configuration des critères, compte multi-utilisateurs."
      canonicalPath="/projet/elm-codata"
    />
    <div className="min-h-screen w-full" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>

      <CaseStudyHeader
        title="ELM by Codata"
        titleEn="ELM by Codata"
        tags={['Lancement produit', 'Étude de marché', 'SaaS B2B', 'Product Discovery']}
        tagsEn={['Product launch', 'Market research', 'B2B SaaS', 'Product Discovery']}
        description="Concevoir une plateforme en libre-service pour évaluer le potentiel d'un emplacement commercial, en autonomie et en quelques minutes."
        descriptionEn="Designing a self-service platform to assess the potential of a commercial location, independently and in a few minutes."
        meta={[
          { label: 'Rôle', value: 'Product Designer' },
          { label: 'Contexte', value: 'Codata, groupe Intescia' },
          { label: 'Cible', value: 'Commerçants, réseaux de franchise' },
          { label: 'Type', value: 'Nouveau produit B2B, en production' },
        ]}
        metaEn={[
          { label: 'Role', value: 'Product Designer' },
          { label: 'Context', value: 'Codata, Intescia group' },
          { label: 'Target', value: 'Retailers, franchise networks' },
          { label: 'Type', value: 'New B2B product, in production' },
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
            {sectionTitle(lang, { fr: "Rendre l'étude de marché accessible en libre-service", en: 'Making market research self-service' })}
            {bodyText(lang, {
              fr: "ELM (Étude Locale de Marché) est une plateforme géomarketing pensée pour évaluer le potentiel d'un futur emplacement commercial. L'objectif : que l'étude qui demandait auparavant l'intervention d'un expert devienne accessible en autonomie, en quelques minutes. Le produit a depuis été lancé sous le nom Mon Implantation.",
              en: "ELM (Local Market Study) is a geomarketing platform built to assess the potential of a future commercial location. The goal: turn a study that used to require an expert into something anyone can do on their own, in a few minutes. The product has since launched under the name Mon Implantation.",
            })}
            <div className="my-4" />
            {bodyText(lang, {
              fr: "Deux cibles aux besoins différents. D'un côté, les porteurs de projet qui se lancent dans le commerce et n'ont pas toujours les moyens de commander une étude classique, mais ont besoin d'être rassurés avant de s'engager. De l'autre, les réseaux de franchise, pour qui produire ce type d'étude est une obligation légale récurrente à chaque nouvelle implantation.",
              en: "Two audiences with different needs. On one side, people starting a retail business who can't always afford a traditional study, but need reassurance before committing. On the other, franchise networks, for whom producing this kind of study is a recurring legal requirement for every new location.",
            })}

            <CaseImage
              src={`${import.meta.env.BASE_URL}elm-codata/persona.jpg`}
              alt={{ fr: 'Persona Maxime Durand, entrepreneur en phase de démarrage, besoins et frustrations identifiés', en: 'Persona Maxime Durand, early-stage entrepreneur, identified needs and frustrations' }}
              caption={{ fr: "Persona principal : Maxime Durand, entrepreneur en phase de démarrage. Peu de capital, pas d'expertise en géomarketing, besoin d'être guidé étape par étape", en: 'Main persona: Maxime Durand, early-stage entrepreneur. Limited capital, no geomarketing expertise, needs to be guided step by step' }}
            />

            {bodyText(lang, {
              fr: "Deux frustrations identifiées chez ce profil ont directement guidé des choix de conception : la peur des coûts cachés (d'où le prix qui s'actualise en direct pendant la configuration, jamais une surprise en fin de parcours) et la complexité perçue des outils d'étude classiques (d'où le choix d'une configuration par défaut crédible à chaque étape, la personnalisation restant optionnelle plutôt qu'imposée).",
              en: "Two frustrations identified for this profile directly shaped design decisions: the fear of hidden costs (hence a price that updates live during configuration, never a surprise at the end) and the perceived complexity of traditional study tools (hence a credible default configuration at every step, with customization staying optional rather than mandatory).",
            })}

            {accent(lang, {
              fr: "Codata dispose d'une base de données propriétaire unique sur le marché (historique de plus de 15 ans, taux de vacance commerciale, évolution du chiffre d'affaires) : la plateforme devait rendre cette richesse de données lisible et actionnable, sans expertise préalable de la part de l'utilisateur.",
              en: "Codata holds a proprietary database unique in the market (15+ years of history, commercial vacancy rates, revenue trends): the platform had to make this wealth of data readable and actionable, without requiring any prior expertise from the user.",
            })}

            {bodyText(lang, {
              fr: "Le principe retenu : aller à l'essentiel dès la landing page, avec un accès direct aux fonctionnalités clés, puis un parcours en quatre étapes qui construit l'étude pas à pas, sans jamais demander plus d'informations que nécessaire.",
              en: "The approach: get straight to the point on the landing page, with direct access to key features, then a four-step flow that builds the study step by step, never asking for more information than needed.",
            })}
          </section>
        )}

        {/* ── PARCOURS UTILISATEUR ── */}
        {active === 'parcours' && (
          <section>
            {sectionTitle(lang, { fr: "De la landing page à l'étude commandée", en: 'From landing page to a completed order' })}
            {bodyText(lang, {
              fr: "La page d'accueil pose la promesse en une phrase (\"Évaluez le potentiel d'un emplacement commercial en 1min chrono\") et met en avant trois bénéfices concrets : anticiper la dynamique du quartier, maîtriser l'environnement commercial, mesurer la clientèle potentielle.",
              en: "The homepage states the promise in one line (\"Assess a commercial location's potential in 1 minute flat\") and highlights three concrete benefits: anticipate the neighborhood's momentum, understand the commercial environment, measure potential customer reach.",
            })}

            <CaseImage
              src={`${import.meta.env.BASE_URL}elm-codata/landing-page.jpg`}
              alt={{ fr: "Landing page ELM by Codata avec accroche, bénéfices et exemples d'études", en: 'ELM by Codata landing page with tagline, benefits and study examples' }}
              caption={{ fr: "Landing page : promesse claire, bénéfices illustrés, exemples d'études réelles pour rassurer avant l'engagement", en: 'Landing page: clear promise, illustrated benefits, real study examples to build trust before committing' }}
            />

            {bodyText(lang, {
              fr: "Le parcours se déroule ensuite en quatre étapes visibles dans un stepper permanent : choix de l'emplacement, configuration des critères, informations de commande, paiement. L'utilisateur sait toujours où il en est et combien d'étapes il lui reste.",
              en: "The flow then unfolds in four steps, always visible in a persistent stepper: choosing the location, configuring criteria, order details, payment. The user always knows where they stand and how many steps are left.",
            })}
            <div className="my-4" />
            {bodyText(lang, {
              fr: "La première étape laisse le choix entre saisir une adresse ou chercher directement sur la carte interactive. Dès la sélection, l'interface remonte des informations de contexte (transports, services publics à proximité) pour donner une première impression de la zone avant même de lancer l'étude complète.",
              en: "The first step lets the user either type an address or search directly on the interactive map. As soon as a location is picked, the interface surfaces contextual information (transit, nearby public services) to give a first impression of the area even before running the full study.",
            })}

            <CaseImage
              src={`${import.meta.env.BASE_URL}elm-codata/etape-emplacement.jpg`}
              alt={{ fr: "Étape 1 du parcours, choix de l'emplacement avec carte interactive et informations de contexte", en: 'Flow step 1, choosing the location with an interactive map and contextual information' }}
              caption={{ fr: "Étape 1, choix de l'emplacement : recherche d'adresse ou sélection directe sur la carte, avec un premier niveau d'information contextuelle", en: 'Step 1, choosing the location: search by address or select directly on the map, with a first layer of contextual data' }}
            />
          </section>
        )}

        {/* ── CONFIGURATION DES CRITÈRES ── */}
        {active === 'criteres' && (
          <section>
            {sectionTitle(lang, { fr: 'Configurer sans se noyer dans les options', en: 'Configuring without drowning in options' })}
            {bodyText(lang, {
              fr: "C'est l'étape la plus dense du parcours : définir le secteur d'activité, les zones de chalandise, la surface du local, le trafic estimé. Pour éviter de tout demander d'un coup, elle est découpée en cinq sous-étapes internes (Activité, Zone de chalandise, Surface, Trafic, Descriptif), avec une progression visible dans un fil d'onglets secondaire.",
              en: "This is the densest step in the flow: defining the business sector, catchment areas, unit size, estimated foot traffic. To avoid asking for everything at once, it's split into five internal sub-steps (Activity, Catchment area, Size, Traffic, Description), with visible progress in a secondary tab bar.",
            })}

            <CaseImage
              src={`${import.meta.env.BASE_URL}elm-codata/etape-criteres.jpg`}
              alt={{ fr: 'Étape 2 du parcours, configuration des critères avec sous-onglets et rappel de la sélection', en: 'Flow step 2, criteria configuration with sub-tabs and a selection recap' }}
              caption={{ fr: "Étape 2, configuration des critères : sous-navigation en 5 temps, avec un panneau de rappel fixe (adresse, prix en cours de calcul) toujours visible à droite", en: 'Step 2, criteria configuration: 5-step sub-navigation, with a fixed recap panel (address, live price) always visible on the right' }}
            />

            {bodyText(lang, {
              fr: "Chaque critère peut être choisi via une configuration par défaut, pensée pour couvrir la majorité des cas, ou personnalisé finement si l'utilisateur a des besoins spécifiques. Les listes de secteurs d'activité peuvent être enregistrées et réutilisées, un vrai gain de temps pour les franchises qui répètent la même étude sur des dizaines d'emplacements.",
              en: "Each criterion can either follow a default configuration, designed to cover most cases, or be finely tuned if the user has specific needs. Lists of business sectors can be saved and reused, a real time saver for franchises repeating the same study across dozens of locations.",
            })}
            <div className="my-4" />
            {bodyText(lang, {
              fr: "Le panneau de droite reste fixe pendant toute la configuration : adresse choisie, prix qui s'actualise en direct à mesure que les critères se précisent. L'utilisateur garde en permanence une vision du \"où j'en suis\" et du \"combien ça va coûter\", sans avoir à valider tout le parcours pour le découvrir.",
              en: "The right-hand panel stays fixed throughout configuration: the chosen address, a price that updates live as criteria get more specific. The user always has a clear sense of \"where am I\" and \"how much will this cost,\" without having to complete the whole flow to find out.",
            })}

            {accent(lang, {
              fr: "Question centrale du projet : jusqu'où pousser la personnalisation sans noyer l'utilisateur ? Le choix a été de toujours proposer une configuration par défaut crédible, la personnalisation restant une option et non une obligation.",
              en: "The central question of the project: how far can you push customization without overwhelming the user? The answer was to always offer a credible default configuration, with customization staying an option, never a requirement.",
            })}
          </section>
        )}

        {/* ── COMPTE & PERSPECTIVES ── */}
        {active === 'compte' && (
          <section>
            {sectionTitle(lang, { fr: 'Un compte pensé pour les réseaux de franchise', en: 'An account built for franchise networks' })}
            {bodyText(lang, {
              fr: "La gestion de compte devait répondre à un besoin spécifique des franchises : plusieurs utilisateurs, une facturation centralisée, un historique des études commandées consultable par toute l'équipe. L'espace \"Mon compte\" régroupe ainsi les commandes ELM, les informations personnelles, les modes de paiement, la gestion des utilisateurs et les adresses de facturation.",
              en: "Account management had to serve a specific franchise need: multiple users, centralized billing, an order history visible to the whole team. The \"My account\" area brings together ELM orders, personal information, payment methods, user management and billing addresses.",
            })}

            <CaseImage
              src={`${import.meta.env.BASE_URL}elm-codata/mon-compte.jpg`}
              alt={{ fr: 'Espace Mon compte, onglet Mes commandes ELM avec liste des études passées et statut PDF', en: 'My Account area, ELM Orders tab with a list of past studies and PDF status' }}
              caption={{ fr: "Onglet « Mes commandes ELM » : historique des études, avec le statut du PDF (en cours ou disponible), consultable par toute l'équipe côté franchise", en: '"My ELM Orders" tab: study history, with PDF status (in progress or ready), visible to the whole team on the franchise side' }}
            />

            {bodyText(lang, {
              fr: "Un point de vigilance identifié tôt : à quel moment demander la création de compte sans frustrer l'utilisateur qui n'a pas encore décidé de s'engager ? Le choix retenu était de rendre la connexion accessible via la barre de navigation, au bon vouloir de l'utilisateur, plutôt que de l'imposer en barrage avant même d'avoir vu la valeur de l'outil.",
              en: "A concern flagged early: when should account creation be asked for without frustrating a user who hasn't decided to commit yet? The chosen approach was to make sign-in accessible from the nav bar, at the user's own pace, rather than forcing it as a gate before they've even seen the tool's value.",
            })}

            {h3(lang, { fr: "Le produit aujourd'hui", en: 'The product today' })}
            {bodyText(lang, {
              fr: "Le projet a été mené jusqu'à sa mise en production, sous le nom Mon Implantation. La grille tarifaire imaginée pendant la conception (achat à l'unité, packs pour les gros volumes, offre sur devis pour les réseaux de franchise) est celle qui a été retenue au lancement, preuve que la logique de configuration pensée dès les maquettes correspondait bien aux usages réels.",
              en: "The project went all the way to production, under the name Mon Implantation. The pricing structure designed during the process (single purchase, bundles for high volume, custom quotes for franchise networks) is the one that shipped, a sign that the configuration logic thought through at the mockup stage matched real-world usage.",
            })}
            <div className="my-4" />
            {bodyText(lang, {
              fr: "Le produit est aujourd'hui accessible en ligne, avec des exemples d'études téléchargeables et une offre structurée en quatre paliers selon le volume de rapports commandés.",
              en: "The product is now live, with downloadable sample studies and an offer structured into four tiers based on report volume.",
            })}

            <div className="my-6">
              <a
                href="https://monimplantation.codata.eu/index"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-sm transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#3B3FD8', color: '#fff', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
              >
                {lang === 'en' ? 'View the live product, Mon Implantation ↗' : 'Voir le produit en ligne, Mon Implantation ↗'}
              </a>
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
