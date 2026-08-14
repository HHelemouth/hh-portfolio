/*
  ElmCodata.tsx — Cas d'étude : ELM by Codata
  Charte : Jost pour les titres, DM Sans pour le corps, bleu #3B3FD8 en accent
  Structure : 4 chapitres séquencés
  1. Contexte
  2. Parcours utilisateur
  3. Configuration des critères
  4. Compte & perspectives
*/

import { useState } from 'react';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import CaseStudyHeader from '@/components/CaseStudyHeader';

const CHAPTERS = [
  { id: 'contexte', label: 'Contexte' },
  { id: 'parcours', label: 'Parcours utilisateur' },
  { id: 'criteres', label: 'Configuration des critères' },
  { id: 'compte', label: 'Compte & perspectives' },
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

export default function ElmCodata() {
  const [active, setActive] = useState('contexte');

  return (
    <>
    <SEOHead
      title="ELM by Codata"
      description="Lancement d'une plateforme d'études locales de marché en libre-service, pour les commerçants et réseaux de franchise. Parcours utilisateur, configuration des critères, compte multi-utilisateurs."
      canonicalPath="/projet/elm-codata"
    />
    <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>

      <CaseStudyHeader
        title="ELM by Codata"
        tags={['Lancement produit', 'Étude de marché', 'SaaS B2B', 'Product Discovery']}
        description="Concevoir une plateforme en libre-service pour évaluer le potentiel d'un emplacement commercial, en autonomie et en quelques minutes."
        meta={[
          { label: 'Rôle', value: 'Product Designer' },
          { label: 'Contexte', value: 'Codata, groupe Intescia' },
          { label: 'Cible', value: 'Commerçants, réseaux de franchise' },
          { label: 'Type', value: 'Nouveau produit B2B, en production' },
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
            {sectionTitle('Rendre l\'étude de marché accessible en libre-service')}
            {bodyText("ELM (Étude Locale de Marché) est une plateforme géomarketing pensée pour évaluer le potentiel d'un futur emplacement commercial. L'objectif : que l'étude qui demandait auparavant l'intervention d'un expert devienne accessible en autonomie, en quelques minutes. Le produit a depuis été lancé sous le nom Mon Implantation.")}
            <div className="my-4" />
            {bodyText("Deux cibles aux besoins différents. D'un côté, les porteurs de projet qui se lancent dans le commerce et n'ont pas toujours les moyens de commander une étude classique, mais ont besoin d'être rassurés avant de s'engager. De l'autre, les réseaux de franchise, pour qui produire ce type d'étude est une obligation légale récurrente à chaque nouvelle implantation.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}elm-codata/persona.jpg`}
              alt="Persona Maxime Durand, entrepreneur en phase de démarrage, besoins et frustrations identifiés"
              caption="Persona principal : Maxime Durand, entrepreneur en phase de démarrage. Peu de capital, pas d'expertise en géomarketing, besoin d'être guidé étape par étape"
            />

            {bodyText("Deux frustrations identifiées chez ce profil ont directement guidé des choix de conception : la peur des coûts cachés (d'où le prix qui s'actualise en direct pendant la configuration, jamais une surprise en fin de parcours) et la complexité perçue des outils d'étude classiques (d'où le choix d'une configuration par défaut crédible à chaque étape, la personnalisation restant optionnelle plutôt qu'imposée).")}

            {accent("Codata dispose d'une base de données propriétaire unique sur le marché (historique de plus de 15 ans, taux de vacance commerciale, évolution du chiffre d'affaires) : la plateforme devait rendre cette richesse de données lisible et actionnable, sans expertise préalable de la part de l'utilisateur.")}

            {bodyText("Le principe retenu : aller à l'essentiel dès la landing page, avec un accès direct aux fonctionnalités clés, puis un parcours en quatre étapes qui construit l'étude pas à pas, sans jamais demander plus d'informations que nécessaire.")}
          </section>
        )}

        {/* ── PARCOURS UTILISATEUR ── */}
        {active === 'parcours' && (
          <section>
            {sectionTitle('De la landing page à l\'étude commandée')}
            {bodyText("La page d'accueil pose la promesse en une phrase (\"Évaluez le potentiel d'un emplacement commercial en 1min chrono\") et met en avant trois bénéfices concrets : anticiper la dynamique du quartier, maîtriser l'environnement commercial, mesurer la clientèle potentielle.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}elm-codata/landing-page.jpg`}
              alt="Landing page ELM by Codata avec accroche, bénéfices et exemples d'études"
              caption="Landing page : promesse claire, bénéfices illustrés, exemples d'études réelles pour rassurer avant l'engagement"
            />

            {bodyText("Le parcours se déroule ensuite en quatre étapes visibles dans un stepper permanent : choix de l'emplacement, configuration des critères, informations de commande, paiement. L'utilisateur sait toujours où il en est et combien d'étapes il lui reste.")}
            <div className="my-4" />
            {bodyText("La première étape laisse le choix entre saisir une adresse ou chercher directement sur la carte interactive. Dès la sélection, l'interface remonte des informations de contexte (transports, services publics à proximité) pour donner une première impression de la zone avant même de lancer l'étude complète.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}elm-codata/etape-emplacement.jpg`}
              alt="Étape 1 du parcours, choix de l'emplacement avec carte interactive et informations de contexte"
              caption="Étape 1, choix de l'emplacement : recherche d'adresse ou sélection directe sur la carte, avec un premier niveau d'information contextuelle"
            />
          </section>
        )}

        {/* ── CONFIGURATION DES CRITÈRES ── */}
        {active === 'criteres' && (
          <section>
            {sectionTitle('Configurer sans se noyer dans les options')}
            {bodyText("C'est l'étape la plus dense du parcours : définir le secteur d'activité, les zones de chalandise, la surface du local, le trafic estimé. Pour éviter de tout demander d'un coup, elle est découpée en cinq sous-étapes internes (Activité, Zone de chalandise, Surface, Trafic, Descriptif), avec une progression visible dans un fil d'onglets secondaire.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}elm-codata/etape-criteres.jpg`}
              alt="Étape 2 du parcours, configuration des critères avec sous-onglets et rappel de la sélection"
              caption="Étape 2, configuration des critères : sous-navigation en 5 temps, avec un panneau de rappel fixe (adresse, prix en cours de calcul) toujours visible à droite"
            />

            {bodyText("Chaque critère peut être choisi via une configuration par défaut, pensée pour couvrir la majorité des cas, ou personnalisé finement si l'utilisateur a des besoins spécifiques. Les listes de secteurs d'activité peuvent être enregistrées et réutilisées, un vrai gain de temps pour les franchises qui répètent la même étude sur des dizaines d'emplacements.")}
            <div className="my-4" />
            {bodyText("Le panneau de droite reste fixe pendant toute la configuration : adresse choisie, prix qui s'actualise en direct à mesure que les critères se précisent. L'utilisateur garde en permanence une vision du \"où j'en suis\" et du \"combien ça va coûter\", sans avoir à valider tout le parcours pour le découvrir.")}

            {accent("Question centrale du projet : jusqu'où pousser la personnalisation sans noyer l'utilisateur ? Le choix a été de toujours proposer une configuration par défaut crédible, la personnalisation restant une option et non une obligation.")}
          </section>
        )}

        {/* ── COMPTE & PERSPECTIVES ── */}
        {active === 'compte' && (
          <section>
            {sectionTitle('Un compte pensé pour les réseaux de franchise')}
            {bodyText("La gestion de compte devait répondre à un besoin spécifique des franchises : plusieurs utilisateurs, une facturation centralisée, un historique des études commandées consultable par toute l'équipe. L'espace \"Mon compte\" régroupe ainsi les commandes ELM, les informations personnelles, les modes de paiement, la gestion des utilisateurs et les adresses de facturation.")}

            <CaseImage
              src={`${import.meta.env.BASE_URL}elm-codata/mon-compte.jpg`}
              alt="Espace Mon compte, onglet Mes commandes ELM avec liste des études passées et statut PDF"
              caption="Onglet « Mes commandes ELM » : historique des études, avec le statut du PDF (en cours ou disponible), consultable par toute l'équipe côté franchise"
            />

            {bodyText("Un point de vigilance identifié tôt : à quel moment demander la création de compte sans frustrer l'utilisateur qui n'a pas encore décidé de s'engager ? Le choix retenu était de rendre la connexion accessible via la barre de navigation, au bon vouloir de l'utilisateur, plutôt que de l'imposer en barrage avant même d'avoir vu la valeur de l'outil.")}

            <h3 className="text-lg font-semibold mt-8 mb-4" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
              Le produit aujourd'hui
            </h3>
            {bodyText("Le projet a été mené jusqu'à sa mise en production, sous le nom Mon Implantation. La grille tarifaire imaginée pendant la conception (achat à l'unité, packs pour les gros volumes, offre sur devis pour les réseaux de franchise) est celle qui a été retenue au lancement, preuve que la logique de configuration pensée dès les maquettes correspondait bien aux usages réels.")}
            <div className="my-4" />
            {bodyText("Le produit est aujourd'hui accessible en ligne, avec des exemples d'études téléchargeables et une offre structurée en quatre paliers selon le volume de rapports commandés.")}

            <div className="my-6">
              <a
                href="https://monimplantation.codata.eu/index"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-sm transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#3B3FD8', color: '#fff', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
              >
                Voir le produit en ligne, Mon Implantation ↗
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
