/*
  ProjectPage, Fiche de projet enrichie
  Charte : fond blanc, bleu #3B3FD8 en accent, Syne + DM Sans
  Structure : Hero image pleine largeur → sections dans l'ordre exact du portfolio original
*/

import { Link, useParams } from 'wouter';
import SEOHead from '@/components/SEOHead';
import CaseStudyHeader from '@/components/CaseStudyHeader';
import { useLanguage, type Lang } from '@/lib/i18n';

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2';

interface Section {
  type: 'text' | 'image' | 'metric' | 'callout' | 'image-pair' | 'link-button' | 'quote' | 'quote-grid' | 'video';  href?: string;
  title?: string; titleEn?: string;
  body?: string; bodyEn?: string;
  image?: string;
  imageAlt?: string; imageAltEn?: string;
  caption?: string; captionEn?: string;
  metrics?: { value: string; label: string }[]; metricsEn?: { value: string; label: string }[];
  images?: { src: string; alt: string; caption?: string }[]; imagesEn?: { src: string; alt: string; caption?: string }[];
  calloutText?: string; calloutTextEn?: string;
  author?: string; authorEn?: string;
  quoteTag?: string; quoteTagEn?: string;
  quotes?: { author: string; tag: string; text: string }[]; quotesEn?: { author: string; tag: string; text: string }[];
  video?: string;
}

interface Project {
  title: string; titleEn?: string;
  subtitle: string; subtitleEn?: string;
  year: string;
  tags: string[]; tagsEn?: string[];
  hero: string;
  heroAlt: string; heroAltEn?: string;
  intro?: string; introEn?: string;
  sections: Section[];
}

const projects: Record<string, Project> = {

  /* ─────────────────────────────────────────────
     FIOULREDUC, 4 sections dans l'ordre du site
  ───────────────────────────────────────────── */
  'fioulreduc': {
    title: 'Fioulreduc',
    titleEn: 'Fioulreduc',
    subtitle: 'UX · UI · Refonte produit',
    subtitleEn: 'UX · UI · Product redesign',
    year: '2023',
    tags: ['UX', 'UI Design', 'Refonte', 'Conversion'],
    tagsEn: ['UX', 'UI Design', 'Redesign', 'Conversion'],
    hero: `${CDN}/fioul_formulaire_137c663a.png`,
    heroAlt: 'Formulaire de devis Fioulreduc, avant et après optimisation',
    heroAltEn: 'Fioulreduc quote form, before and after optimization',
    intro: 'Mission longue durée sur la plateforme de commande de fioul domestique Fioulreduc. J\'ai travaillé sur quatre chantiers successifs : l\'optimisation du formulaire de devis, une nouvelle fonctionnalité de retour au devis, la refonte complète de l\'image et du tunnel d\'achat, et la création de visuels pour les opérations commerciales.',
    introEn: "Long-term engagement on Fioulreduc, a home heating-oil ordering platform. I worked across four successive projects: optimizing the quote form, a new feature to resume a quote in progress, a full redesign of the brand and purchase funnel, and creating visuals for marketing campaigns.",
    sections: [
      // ── SECTION 1 : Formulaire de devis ──
      {
        type: 'text',
        title: '1, Optimisation du formulaire de devis',
        titleEn: '1, Optimizing the quote form',
        body: 'Formulaire de demande de devis permettant de créer de l\'embasement. Le but : prendre le client par la main et le guider, en évitant de lui créer trop de questionnements. Le bloc de gauche sert à la complétion, celui de droite sert de guide et indique au client ce qui est attendu de lui.',
        bodyEn: "A quote request form designed to build the customer database. The goal: hold the customer's hand and guide them, without raising too many questions along the way. The left block is for filling in details, the right one acts as a guide, showing the customer what's expected of them.",
      },
      {
        type: 'callout',
        title: 'Problématiques identifiées',
        titleEn: 'Problems identified',
        calloutText: '• Cible facilement déroutée par les technologies : besoin d\'accompagnement et de réassurance\n• Charte actuelle pesante et désuète : besoin d\'une refonte en douceur\n• Tunnel de conversion fragile',
        calloutTextEn: '• Audience easily thrown off by technology: needs guidance and reassurance\n• Current visual identity felt heavy and dated: needed a gentle redesign\n• Fragile conversion funnel',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_formulaire_137c663a.png`,
        imageAlt: 'Formulaire de devis Fioulreduc, étapes guidées pas à pas',
        imageAltEn: 'Fioulreduc quote form, guided step-by-step flow',
        caption: 'Formulaire en deux blocs : à gauche la saisie, à droite le guide contextuel, chaque étape rassure et contextualise',
        captionEn: 'Two-block form: input on the left, contextual guidance on the right, each step reassures and adds context',
      },

      // ── SECTION 2 : Nouvelle fonctionnalité ──
      {
        type: 'text',
        title: '2, Nouvelle fonctionnalité : la top barre',
        titleEn: '2, New feature: the top bar',
        body: 'Top barre permettant à l\'utilisateur de revenir à sa commande en cours, à tout moment, à n\'importe quel endroit du site. Cette fonctionnalité simple a eu un impact direct et mesurable sur le taux de conversion.',
        bodyEn: "A top bar letting the user return to their in-progress order, at any time, from anywhere on the site. This simple feature had a direct, measurable impact on conversion rate.",
      },
      {
        type: 'metric',
        metrics: [
          { value: '+44%', label: 'Taux de conversion' },
          { value: '↓', label: 'Taux de rebond' },
          { value: '100%', label: 'Du site couvert' },
        ],
        metricsEn: [
          { value: '+44%', label: 'Conversion rate' },
          { value: '↓', label: 'Bounce rate' },
          { value: '100%', label: 'Site coverage' },
        ],
      },
      {
        type: 'image',
        image: `${CDN}/fioul_topbarre_b7aac717.png`,
        imageAlt: 'Top barre Fioulreduc, retour à la commande en cours depuis n\'importe quelle page',
        imageAltEn: 'Fioulreduc top bar, resume the in-progress order from any page',
        caption: 'La top barre persiste sur toutes les pages, l\'utilisateur peut reprendre son devis à tout moment sans perdre sa progression',
        captionEn: "The top bar persists on every page, the user can resume their quote at any time without losing progress",
      },

      // ── SECTION 3 : Refonte image et technologie ──
      {
        type: 'text',
        title: '3, Refonte image et technologie',
        titleEn: '3, Brand and technology overhaul',
        body: 'Intégration de nouveaux services, de nouvelles fonctionnalités et refonte complète du tunnel d\'achat. Ce chantier a démarré par une recherche utilisateur approfondie pour comprendre les comportements et les freins de la cible.',
        bodyEn: "Integrating new services, new features, and a full redesign of the purchase funnel. This phase started with in-depth user research to understand the target audience's behaviors and hesitations.",
      },
      {
        type: 'callout',
        title: 'Promesses UX définies',
        titleEn: 'UX promises defined',
        calloutText: '• L\'utilisateur doit comprendre l\'intérêt et le coût d\'une option (prix clairs et visibles)\n• Si une économie peut être réalisée, l\'utilisateur doit toujours être prévenu\n• Ne jamais forcer la main : l\'utilisateur doit pouvoir maîtriser ses coûts, options et moyens de paiement',
        calloutTextEn: "• The user must understand the value and cost of every option (clear, visible pricing)\n• If savings are possible, the user must always be told\n• Never force a choice: the user must stay in control of their costs, options and payment methods",
      },
      {
        type: 'image',
        image: `${CDN}/fioul_persona_bernard_7b89997b.jpg`,
        imageAlt: 'Persona Bernard, profil utilisateur Fioulreduc, 55 ans, CSP+, méfiant mais curieux des nouvelles technologies',
        imageAltEn: 'Persona Bernard, Fioulreduc user profile, 55, upper-income, wary but curious about new technology',
        caption: 'Persona "Bernard", 55 ans, CSP+, prof de maths à Hossegor. Serein sur le rapport qualité/prix, mais infidèle si une meilleure affaire se présente. Déteste qu\'on lui force la main.',
        captionEn: '"Bernard" persona, 55, upper-income, maths teacher in Hossegor. Relaxed about price-to-value, but disloyal if a better deal comes along. Hates being pushed into anything.',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_refonte_logo_full_099acd43.png`,
        imageAlt: 'Nouveau logo Fioulreduc, refonte de l\'identité visuelle',
        imageAltEn: 'New Fioulreduc logo, visual identity redesign',
        caption: 'Refonte de l\'identité visuelle, nouveau logo Fioulreduc, plus sobre et moderne',
        captionEn: "Visual identity redesign, new Fioulreduc logo, more sober and modern",
      },
      {
        type: 'text',
        title: 'Architecture du nouveau tunnel d\'achat',
        titleEn: 'Architecture of the new purchase funnel',
        body: 'Avant de passer aux interfaces finales, j\'ai cartographié l\'ensemble du nouveau parcours d\'achat. Ce wireframe d\'architecture définit les étapes clés, les points de décision et les nouvelles fonctionnalités intégrées (commande groupée, catalogue services, options d\'entretien).',
        bodyEn: "Before moving to final interfaces, I mapped out the entire new purchase journey. This architecture wireframe defines the key steps, decision points, and new features built in (group ordering, services catalog, maintenance options).",
      },
      {
        type: 'image',
        image: `${CDN}/fioul_wireframe_tunnel_9e5d2998.png`,
        imageAlt: 'Architecture du nouveau tunnel d\'achat Fioulreduc, wireframe des étapes et parcours',
        imageAltEn: 'Architecture of the new Fioulreduc purchase funnel, step-by-step journey wireframe',
        caption: 'Architecture du tunnel d\'achat, cartographie des étapes, points de décision et nouvelles fonctionnalités',
        captionEn: 'Purchase funnel architecture, mapping steps, decision points and new features',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_ui_wireframe_achat_09da6723.png`,
        imageAlt: 'Wireframe de la nouvelle interface d\'achat de fioul, mise en page et structure',
        imageAltEn: 'Wireframe of the new heating-oil purchase interface, layout and structure',
        caption: 'Wireframe de la nouvelle interface d\'achat, structure claire, prix mis en avant, options transparentes',
        captionEn: 'Wireframe of the new purchase interface, clear structure, price front and center, transparent options',
      },
      {
        type: 'text',
        title: 'Nouvelle interface, UI finale',
        titleEn: 'New interface, final UI',
        body: 'Les interfaces finales traduisent les promesses UX en design concret : prix toujours visibles, options clairement présentées, commande groupée mise en avant pour générer des économies. La nouvelle charte graphique modernise l\'image de marque tout en conservant la confiance de la cible.',
        bodyEn: "The final interfaces turn the UX promises into concrete design: price always visible, options clearly presented, group ordering highlighted to generate savings. The new visual identity modernizes the brand while keeping the audience's trust.",
      },
      {
        type: 'image',
        image: `${CDN}/fioul_ui_coloree_1_23f3660f.png`,
        imageAlt: 'Nouvelle interface Fioulreduc, achat de fioul avec prix en temps réel et options de livraison',
        imageAltEn: 'New Fioulreduc interface, buying heating oil with live pricing and delivery options',
        caption: 'Nouvelle interface d\'achat, prix en temps réel, options de livraison claires, commande groupée pour économiser',
        captionEn: 'New purchase interface, live pricing, clear delivery options, group ordering to save money',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_ui_chaudiere_wire_7eb5a507.png`,
        imageAlt: 'Wireframe service entretien chaudière, nouvelle fonctionnalité',
        imageAltEn: 'Wireframe of the boiler maintenance service, new feature',
        caption: 'Wireframe du service entretien chaudière, nouvelle offre intégrée au tunnel d\'achat',
        captionEn: 'Wireframe of the boiler maintenance service, new offer built into the purchase funnel',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_ui_chaudiere_color_db22fe19.png`,
        imageAlt: 'Interface finale entretien chaudière Fioulreduc, options et tarifs',
        imageAltEn: 'Final Fioulreduc boiler maintenance interface, options and pricing',
        caption: 'Interface finale du service entretien, options détaillées, tarifs transparents, certifications RGE mises en avant',
        captionEn: 'Final maintenance service interface, detailed options, transparent pricing, certifications highlighted',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_ui_complete_85d99f64.png`,
        imageAlt: 'Vue complète de la nouvelle interface Fioulreduc, tunnel d\'achat complet',
        imageAltEn: 'Full view of the new Fioulreduc interface, complete purchase funnel',
        caption: 'Vue complète du nouveau tunnel d\'achat, de la commande au récapitulatif, avec avis clients intégrés',
        captionEn: 'Full view of the new purchase funnel, from order to summary, with customer reviews built in',
      },

      // ── SECTION 4 : Opérations commerciales ──
      {
        type: 'text',
        title: '4, Opérations commerciales',
        titleEn: '4, Marketing campaigns',
        body: 'En parallèle des missions UX, UI et refonte, j\'ai élaboré des visuels pour les opérations commerciales. Ces créations devaient respecter la nouvelle charte tout en étant suffisamment percutantes pour capter l\'attention.',
        bodyEn: "Alongside the UX, UI and redesign work, I created visuals for marketing campaigns. These had to follow the new visual identity while staying punchy enough to grab attention.",
      },
      {
        type: 'image-pair',
        images: [
          {
            src: `${CDN}/fioul_ops_com_1_378a6333.png`,
            alt: 'Opération commerciale Fioulreduc, email promotionnel rentrée',
            caption: 'Email promotionnel, opération rentrée avec offre groupée'
          },
          {
            src: `${CDN}/fioul_ops_com_2_324f29dc.png`,
            alt: 'Opération commerciale Fioulreduc, email avec codes promo',
            caption: 'Email promotionnel, codes promo et offres saisonnières'
          }
        ],
        imagesEn: [
          {
            src: `${CDN}/fioul_ops_com_1_378a6333.png`,
            alt: 'Fioulreduc marketing campaign, back-to-school promotional email',
            caption: 'Promotional email, back-to-school campaign with a group-order deal'
          },
          {
            src: `${CDN}/fioul_ops_com_2_324f29dc.png`,
            alt: 'Fioulreduc marketing campaign, email with promo codes',
            caption: 'Promotional email, promo codes and seasonal offers'
          }
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────
     TERRITOIRE 360
  ───────────────────────────────────────────── */
  'territoire-360': {
    title: 'Territoire 360',
    titleEn: 'Territoire 360',
    subtitle: 'Lancement produit · UX Research · UI Design',
    subtitleEn: 'Product launch · UX Research · UI Design',
    year: '2024',
    tags: ['Lancement produit', 'UX Research', 'UI Design'],
    tagsEn: ['Product launch', 'UX Research', 'UI Design'],
    hero: `${CDN}/t360_main_0184e6ca.jpg`,
    heroAlt: 'Interface Territoire 360, plateforme de veille territoriale sur laptop',
    heroAltEn: 'Territoire 360 interface, local intelligence platform on a laptop',
    intro: 'Territoire 360 est une plateforme de ciblage, de veille et d\'analyse des communes et de leurs acteurs. J\'ai contribué au lancement du produit en travaillant sur la recherche UX et la conception des interfaces principales.',
    introEn: "Territoire 360 is a targeting, monitoring and analysis platform for local authorities and the people who run them. I contributed to the product's launch, working on UX research and the design of the core interfaces.",
    sections: [
      {
        type: 'text',
        title: 'Contexte',
        titleEn: 'Context',
        body: 'La plateforme offre une compréhension intuitive des enjeux des territoires et permet d\'accéder à des millions de sources d\'informations locales en temps réel, élus, projets, décisions des acteurs publics. Trois piliers structurent le produit : Suivre (l\'actualité des territoires), Identifier (les élus influents, analyser leurs prises de parole), Appréhender (les enjeux des donneurs d\'ordre).',
        bodyEn: "The platform gives an intuitive understanding of local issues and provides access to millions of real-time local information sources: officials, projects, public-sector decisions. Three pillars structure the product: Follow (local news), Identify (influential officials, analyze their public statements), Understand (the priorities of decision-makers).",
      },
      {
        type: 'metric',
        metrics: [
          { value: 'B2B', label: 'Marché cible' },
          { value: '3', label: 'Piliers fonctionnels' },
          { value: '2024', label: 'Lancement' },
        ],
        metricsEn: [
          { value: 'B2B', label: 'Target market' },
          { value: '3', label: 'Functional pillars' },
          { value: '2024', label: 'Launch' },
        ],
      },
      {
        type: 'image',
        image: `${CDN}/t360_main_0184e6ca.jpg`,
        imageAlt: 'Interface Territoire 360, navigation cartographique et veille territoriale',
        imageAltEn: 'Territoire 360 interface, map navigation and local monitoring',
        caption: 'Interface principale, navigation cartographique, données territoriales et veille en temps réel',
        captionEn: 'Main interface, map navigation, local data and real-time monitoring',
      },
      {
        type: 'text',
        title: 'Démarche',
        titleEn: 'Approach',
        body: 'La démarche a combiné des enquêtes utilisateurs auprès d\'acteurs publics, une analyse des usages existants, et des cycles courts de conception-test. L\'enjeu était de rendre accessibles des données complexes à des utilisateurs aux profils variés : élus, chargés de mission, analystes.',
        bodyEn: "The approach combined user research with public-sector professionals, an analysis of existing usage patterns, and short design-test cycles. The challenge was making complex data accessible to users with very different profiles: officials, project officers, analysts.",
      },
    ],
  },

  /* ─────────────────────────────────────────────
     SWANEO
  ───────────────────────────────────────────── */
  'swaneo': {
    title: 'Swaneo',
    titleEn: 'Swaneo',
    subtitle: 'Identité visuelle · Logo',
    subtitleEn: 'Visual identity · Logo',
    year: '2023',
    tags: ['Identité visuelle', 'Logo', 'Branding'],
    tagsEn: ['Visual identity', 'Logo', 'Branding'],
    hero: `${CDN}/swaneo_main_d6d5d8c7.jpg`,
    heroAlt: 'Identité visuelle Swaneo, logo et déclinaisons',
    heroAltEn: 'Swaneo visual identity, logo and variations',
    intro: 'Création de l\'identité visuelle complète pour Swaneo, une startup spécialisée dans les batteries haute performance (technologie LTO).',
    introEn: "Creating the full visual identity for Swaneo, a startup specializing in high-performance batteries (LTO technology).",
    sections: [
      {
        type: 'text',
        title: 'Contexte',
        titleEn: 'Context',
        body: 'Swan était le nom initial du projet, mais aussi la marque de très beaux voiliers de plaisance des années 80, choisi sans réflexion préalable. Le nom SWANEO a été créé pour éviter un conflit avec Swan Nautor. Deux partenaires techniques, Patrick Rondeau et Dominique Richard, avec plus de 20 ans d\'expérience, ont rejoint le projet.',
        bodyEn: "Swan was the project's original name, chosen without much thought, but it's also the brand of some beautiful 1980s sailing yachts. The name SWANEO was created to avoid a conflict with Swan Nautor. Two technical partners, Patrick Rondeau and Dominique Richard, both with 20+ years of experience, joined the project.",
      },
      {
        type: 'image',
        image: `${CDN}/swaneo_main_d6d5d8c7.jpg`,
        imageAlt: 'Identité visuelle Swaneo complète, logo, palette orange et typographie',
        imageAltEn: 'Full Swaneo visual identity, logo, orange palette and typography',
        caption: 'Identité visuelle complète, le logo en forme de molécule traduit la chimie LTO, l\'orange évoque la puissance et l\'énergie',
        captionEn: "Full visual identity, the molecule-shaped logo reflects the LTO chemistry, orange evokes power and energy",
      },
      {
        type: 'callout',
        title: 'Promesse de marque',
        titleEn: 'Brand promise',
        calloutText: 'La puissance qui perdure, la durabilité qui résiste.\n\nTrois valeurs : Durabilité · Résistance · Puissance',
        calloutTextEn: 'Power that lasts, durability that holds up.\n\nThree values: Durability · Resilience · Power',
      },
      {
        type: 'metric',
        metrics: [
          { value: 'LTO', label: 'Technologie batterie' },
          { value: '3', label: 'Valeurs de marque' },
          { value: '2023', label: 'Lancement' },
        ],
        metricsEn: [
          { value: 'LTO', label: 'Battery technology' },
          { value: '3', label: 'Brand values' },
          { value: '2023', label: 'Launch' },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────
     QG MÉDIA LIBRE
  ───────────────────────────────────────────── */
  'qg-media-libre': {
    title: 'QG — Média Libre',
    titleEn: 'QG — Média Libre',
    subtitle: 'Identité visuelle · Logo · Animation',
    subtitleEn: 'Visual identity · Logo · Animation',
    year: '2020',
    tags: ['Identité visuelle', 'Logo', 'Branding'],
    tagsEn: ['Visual identity', 'Logo', 'Branding'],
    hero: `${CDN}/qg_banner_ead05c8e.png`,
    heroAlt: 'Identité visuelle QG Média Libre, logo rouge sur fond photographique',
    heroAltEn: 'QG Média Libre visual identity, red logo on a photographic background',
    intro: 'Création de l\'identité visuelle pour Quartier Général, un média indépendant qui se définit comme "le média libre". L\'identité devait refléter une posture engagée, directe et sans compromis.',
    introEn: 'Creating the visual identity for Quartier Général, an independent media outlet that defines itself as "the free press." The identity had to reflect a committed, direct, uncompromising stance.',
    sections: [
      // ── SECTION 1 : Parti pris graphique ──
      {
        type: 'text',
        title: 'Parti pris graphique',
        titleEn: 'Design approach',
        body: 'Le signe devait être fort, immédiatement reconnaissable, et fonctionner aussi bien en noir et blanc qu\'en couleur. Le "G" stylisé en forme de cible et le rouge vif traduisent l\'engagement et la liberté de ton du média. Le logo est construit autour d\'un cercle épais qui rappelle à la fois le viseur et la cible, une métaphore du média qui vise juste et ne recule devant rien.',
        bodyEn: 'The mark had to be strong, instantly recognizable, and work equally well in black and white or color. The stylized "G," shaped like a target, and the bright red convey the outlet\'s commitment and outspoken tone. The logo is built around a thick circle recalling both a scope and a target, a metaphor for a media outlet that aims true and backs down from nothing.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/qg_logo_anim_caeedb4d.gif',
        imageAlt: 'Animation du logo QG Média Libre, construction du signe',
        imageAltEn: 'QG Média Libre logo animation, the mark being built',
        caption: 'Animation du logo, le signe se construit progressivement, symbole d\'un média qui vise juste',
        captionEn: 'Logo animation, the mark builds up progressively, symbolizing a media outlet that aims true',
      },

      // ── SECTION 2 : Logo et déclinaisons couleur ──
      {
        type: 'text',
        title: 'Logo et déclinaisons',
        titleEn: 'Logo and variations',
        body: 'Le logo principal est décliné en quatre variantes couleur, chacune associée à une rubrique du média. Cette systématique permet une identification immédiate des contenus tout en conservant une unité graphique forte. Le rouge reste la couleur signature, les autres couleurs signalent les différents espaces éditoriaux.',
        bodyEn: 'The main logo comes in four color variants, each tied to a section of the media outlet. This system allows instant content identification while keeping a strong visual unity. Red stays the signature color, the other colors flag the different editorial spaces.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/qg_logo_rouge_ce3d90be.png',
        imageAlt: 'Logo QG Média Libre rouge sur fond blanc, avec les quatre déclinaisons couleur : Quartier Interdit (rose), Pas de Quartier (noir), Quartier Libre (bleu), Quartier Jaune (jaune)',
        imageAltEn: 'QG Média Libre red logo on white, with the four color variants: Quartier Interdit (pink), Pas de Quartier (black), Quartier Libre (blue), Quartier Jaune (yellow)',
        caption: 'Logo principal et quatre déclinaisons couleur, chaque variante correspond à une rubrique du média',
        captionEn: 'Main logo and four color variants, each one matches a section of the media outlet',
      },

      // ── SECTION 3 : Application sur supports ──
      {
        type: 'text',
        title: 'Application sur supports',
        titleEn: 'Applied to materials',
        body: 'L\'identité a été testée et appliquée sur différents supports physiques et numériques. Le tote bag illustre la force du signe en grand format : le logo tient seul, sans texte, et reste immédiatement identifiable. Les déclinaisons de rubriques sont listées en version monochrome pour les usages éditoriaux.',
        bodyEn: 'The identity was tested and applied across different physical and digital materials. The tote bag shows how strong the mark is at large scale: the logo stands alone, without text, and stays instantly recognizable. Section variants are shown in monochrome for editorial use.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/qg_declinaisons_e257b891.png',
        imageAlt: 'Application de l\'identité QG sur tote bag blanc avec logo rouge, et déclinaisons des rubriques en version monochrome',
        imageAltEn: 'QG identity applied to a white tote bag with red logo, and section variants in monochrome',
        caption: 'Application sur tote bag et déclinaisons des rubriques. Le signe tient seul en grand format, sans texte d\'accompagnement.',
        captionEn: 'Applied to a tote bag and section variants. The mark stands alone at large scale, with no accompanying text.',
      },

      // ── SECTION 4 : Système typographique ──
      {
        type: 'text',
        title: 'Système typographique',
        titleEn: 'Typographic system',
        body: 'Deux polices structurent l\'identité éditoriale. Assistant, créée par Ilan Nathan, est choisie pour son impact, sa polyvalence et sa modernité : elle habille les titres en majuscules et donne au média sa voix directe. Helvetica Neue, créée par Max Miedinger, est retenue pour son efficacité fonctionnelle et sa facilité de lecture sur les longs contenus texte.',
        bodyEn: "Two typefaces structure the editorial identity. Assistant, by Ilan Nathan, was chosen for its impact, versatility and modern feel: it dresses the uppercase headlines and gives the outlet its direct voice. Helvetica Neue, by Max Miedinger, was chosen for its functional efficiency and readability on longer text content.",
      },

      // ── SECTION 5 : Application en contexte ──
      {
        type: 'image',
        image: `${CDN}/qg_banner_ead05c8e.png`,
        imageAlt: 'Application du logo QG Média Libre en contexte, fond photographique rouge',
        imageAltEn: 'QG Média Libre logo applied in context, red photographic background',
        caption: 'Application en contexte éditorial, le rouge vif et la typographie bold traduisent l\'engagement du média sur tous les supports',
        captionEn: "Applied in an editorial context, the bright red and bold typography convey the outlet's commitment across every medium",
      },
    ],
  },

  /* ─────────────────────────────────────────────
     APPVIZER
  ───────────────────────────────────────────── */
  'appvizer': {
    title: 'Appvizer',
    titleEn: 'Appvizer',
    subtitle: 'Identité visuelle · Logo',
    subtitleEn: 'Visual identity · Logo',
    year: '2020',
    tags: ['Identité visuelle', 'Logo', 'Branding'],
    tagsEn: ['Visual identity', 'Logo', 'Branding'],
    hero: `${CDN}/appvizer_main_09ae863c.png`,
    heroAlt: 'Identité visuelle Appvizer, logo AV et cartes de visite',
    heroAltEn: 'Appvizer visual identity, AV logo and business cards',
    intro: 'Création de l\'identité visuelle pour Appvizer, lancé en 2015 et devenu la première plateforme de recommandation de logiciels en Europe.',
    introEn: "Creating the visual identity for Appvizer, launched in 2015 and now Europe's leading software recommendation platform.",
    sections: [
      {
        type: 'text',
        title: 'Contexte',
        titleEn: 'Context',
        body: 'Appvizer a été lancé officiellement en mai 2015 sur l\'idée simple d\'offrir un espace de visibilité aux logiciels qui peuvent jouer un rôle important dans la croissance des entreprises. Trois ans après, c\'est devenu la première plateforme de recommandation de logiciels en Europe.',
        bodyEn: "Appvizer officially launched in May 2015 on a simple idea: give visibility to software that can play a real role in company growth. Three years later, it had become Europe's leading software recommendation platform.",
      },
      {
        type: 'metric',
        metrics: [
          { value: '#1', label: 'En Europe' },
          { value: '2015', label: 'Lancement' },
          { value: '∞', label: 'Logiciels référencés' },
        ],
        metricsEn: [
          { value: '#1', label: 'In Europe' },
          { value: '2015', label: 'Launch' },
          { value: '∞', label: 'Software listed' },
        ],
      },
      {
        type: 'image',
        image: `${CDN}/appvizer_main_09ae863c.png`,
        imageAlt: 'Identité visuelle Appvizer, logo AV stylisé, palette vert émeraude et violet, cartes de visite',
        imageAltEn: 'Appvizer visual identity, stylized AV logo, emerald green and purple palette, business cards',
        caption: 'Identité complète, logo "AV" stylisé, palette vert émeraude et violet, déclinaison sur cartes de visite',
        captionEn: 'Full identity, stylized "AV" logo, emerald green and purple palette, applied to business cards',
      },
      {
        type: 'text',
        title: 'Parti pris graphique',
        titleEn: 'Design approach',
        body: 'L\'identité combine un vert émeraude dynamique et un violet profond pour signifier à la fois la croissance et la confiance. Le logo "AV" stylisé est conçu pour être mémorable et fonctionner à toutes les tailles. Les cartes de visite déclinent l\'identité avec une mise en page aérée et moderne.',
        bodyEn: 'The identity combines a dynamic emerald green with a deep purple to convey both growth and trust. The stylized "AV" logo is designed to be memorable and work at any size. The business cards carry the identity through with an airy, modern layout.',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     UPTILAB
  ───────────────────────────────────────────── */
  'uptilab': {
    title: 'Uptilab',
    titleEn: 'Uptilab',
    subtitle: 'Direction artistique · Identité complète',
    subtitleEn: 'Art direction · Full identity',
    year: '2017',
    tags: ['Direction artistique', 'Identité visuelle', 'Print', 'Web'],
    tagsEn: ['Art direction', 'Visual identity', 'Print', 'Web'],
    hero: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_site_9427fe92.jpg',
    heroAlt: 'Site web Uptilab affiché sur un iMac, fond montagne avec tagline we test with data',
    heroAltEn: 'Uptilab website shown on an iMac, mountain background with the tagline "we test with data"',
    intro: 'Refonte complète de l\'identité visuelle d\'Uptilab, agence spécialisée en conversion, test A/B et personnalisation. La mission couvrait l\'ensemble des supports : logo, site web, animations, print et communication interne.',
    introEn: 'Full visual identity redesign for Uptilab, an agency specializing in conversion, A/B testing and personalization. The engagement covered every touchpoint: logo, website, animations, print and internal communication.',
    sections: [
      // ── SECTION 1 : Contexte ──
      {
        type: 'text',
        title: 'Contexte',
        titleEn: 'Context',
        body: 'Uptilab accompagne les entreprises dans l\'optimisation de leurs dispositifs digitaux grâce à une approche basée sur la data. L\'identité existante ne reflétait plus l\'ambition de l\'agence ni la rigueur de sa méthode. La refonte devait projeter une image à la fois sérieuse et moderne, capable de fonctionner aussi bien sur un site web que sur des supports physiques.',
        bodyEn: "Uptilab helps companies optimize their digital setups through a data-driven approach. The existing identity no longer reflected the agency's ambition or the rigor of its method. The redesign had to project an image that was both credible and modern, working equally well on a website and on physical materials.",
      },
      {
        type: 'metric',
        metrics: [
          { value: 'Web', label: 'Site & animations' },
          { value: 'Print', label: 'Cartes, carnets, mugs' },
          { value: 'Interne', label: 'Communication équipe' },
        ],
        metricsEn: [
          { value: 'Web', label: 'Site & animations' },
          { value: 'Print', label: 'Cards, notebooks, mugs' },
          { value: 'Internal', label: 'Team communication' },
        ],
      },

      // ── SECTION 2 : Site web ──
      {
        type: 'text',
        title: 'Site web',
        titleEn: 'Website',
        body: 'La page d\'accueil du site pose immédiatement le positionnement de l\'agence : "we test with data". Le fond photographique de montagne installe une atmosphère de précision et de dépassement. La navigation est sobre, la typographie aérée, et l\'accent jaune-vert vient ponctuer les éléments clés sans surcharger.',
        bodyEn: 'The homepage states the agency\'s positioning right away: "we test with data." The mountain photography sets a tone of precision and pushing limits. Navigation stays sober, typography breathes, and the yellow-green accent punctuates key elements without overloading the page.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_site_9427fe92.jpg',
        imageAlt: 'Site web Uptilab sur iMac, hero avec fond montagne et tagline we test with data, navigation sobre',
        imageAltEn: 'Uptilab website on an iMac, hero with mountain background and the tagline "we test with data," sober navigation',
        caption: 'Page d\'accueil du site Uptilab, fond photographique, typographie aérée et accent couleur sur les mots-clés',
        captionEn: "Uptilab homepage, photographic background, airy typography and color accent on key words",
      },

      // ── SECTION 3 : Supports mobiles ──
      {
        type: 'text',
        title: 'Déclinaison mobile',
        titleEn: 'Mobile version',
        body: 'Les pages de service sont conçues pour être lisibles sur tous les formats. La section A/B testing utilise un fond teal structuré, tandis que la section data adopte un fond jaune-orangé plus chaud. Cette distinction chromatique par rubrique facilite la navigation et renforce la mémorisation des offres.',
        bodyEn: 'Service pages are designed to read well on every format. The A/B testing section uses a structured teal background, while the data section uses a warmer yellow-orange. This color distinction by section makes navigation easier and helps the offers stick in memory.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_mobile_2686cc70.jpg',
        imageAlt: 'Mockups mobiles Uptilab : section ab testing fond teal et section data fond jaune-orangé',
        imageAltEn: 'Uptilab mobile mockups: teal-background A/B testing section and yellow-orange data section',
        caption: 'Déclinaison mobile, chaque offre dispose de sa propre couleur de fond pour une identification immédiate',
        captionEn: 'Mobile version, each offer has its own background color for instant identification',
      },

      // ── SECTION 4 : Supports print ──
      {
        type: 'text',
        title: 'Supports print',
        titleEn: 'Print materials',
        body: 'L\'identité a été déclinée sur l\'ensemble des supports physiques de l\'agence. Les cartes de visite jouent sur le contraste bleu marine et jaune-vert, signature visuelle d\'Uptilab. Le carnet de notes, en teal, est conçu pour être utilisé au quotidien par les équipes et les clients lors des ateliers.',
        bodyEn: "The identity was carried through every physical material the agency uses. Business cards play on the navy-blue and yellow-green contrast, Uptilab's visual signature. The teal notebook is designed for everyday use by teams and clients during workshops.",
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_cartes_e74266ea.jpg',
        imageAlt: 'Stack de cartes de visite Uptilab, bleu marine avec logo jaune-vert',
        imageAltEn: 'Stack of Uptilab business cards, navy blue with a yellow-green logo',
        caption: 'Cartes de visite, bleu marine et accent jaune-vert, le contraste renforce la mémorisation de la marque',
        captionEn: 'Business cards, navy blue with a yellow-green accent, the contrast helps the brand stick in memory',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_carnet_283d7b36.jpg',
        imageAlt: 'Carnet de notes Uptilab, couverture teal avec titre Retours mit DATA et logo',
        imageAltEn: 'Uptilab notebook, teal cover with the title "Retours mit DATA" and logo',
        caption: 'Carnet de notes, support atelier pour les équipes et les clients, couverture teal avec logo',
        captionEn: 'Notebook, workshop material for teams and clients, teal cover with logo',
      },

      // ── SECTION 5 : Communication interne ──
      {
        type: 'text',
        title: 'Communication interne',
        titleEn: 'Internal communication',
        body: 'Pour ancrer la culture data dans l\'équipe, une série d\'affiches internes a été créée sur un ton décalé. Chaque affiche détourne une référence culturelle populaire pour parler de data avec humour. "Hakuna ma data", "with big data comes great responsability", "first you get the data, then you get the power" : ces visuels ont été imprimés et affichés dans les locaux.',
        bodyEn: 'To root a data culture within the team, a series of internal posters was created with a playful tone. Each poster spins a well-known pop-culture reference to talk about data with humor. "Hakuna ma data," "with big data comes great responsibility," "first you get the data, then you get the power": these visuals were printed and put up around the office.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_hakuna_aebfee0b.jpg',
        imageAlt: 'Affiche interne Uptilab hakuna ma data, détournement du Roi Lion sur fond sombre',
        imageAltEn: 'Uptilab internal poster "hakuna ma data," a Lion King spin on a dark background',
        caption: '"Hakuna ma data", série d\'affiches internes pour ancrer la culture data dans l\'équipe avec humour',
        captionEn: '"Hakuna ma data," a series of internal posters using humor to root a data culture in the team',
      },
    ],
  },

  'interprete-de-reves': {
    title: "L'Interprète de Rêves",
    titleEn: "L'Interprète de Rêves",
    subtitle: 'Product Design · Développement · Recherche',
    subtitleEn: 'Product Design · Development · Research',
    year: '2025',
    tags: ['Product Design', 'UX', 'Développement', 'IA', 'Product Building'],
    tagsEn: ['Product Design', 'UX', 'Development', 'AI', 'Product Building'],
    hero: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/reves_hero_29ad58f1.webp',
    heroAlt: "Interface de L'Interprète de Rêves, outil d'analyse symbolique des rêves",
    heroAltEn: "L'Interprète de Rêves interface, a dream symbolism analysis tool",
    intro: "Projet personnel conçu et développé de A à Z, de l'idée initiale à la mise en ligne. L'Interprète de Rêves est une application web qui analyse les rêves décrits en langage naturel et en extrait les symboles clés, en s'appuyant sur un corpus de connaissances construit à partir d'ouvrages de référence en psychanalyse et en symbolique.",
    introEn: "A personal project designed and built from scratch, from the initial idea to going live. L'Interprète de Rêves is a web app that analyzes dreams described in natural language and extracts their key symbols, drawing on a knowledge base built from reference works in psychoanalysis and symbolism.",
    sections: [
      {
        type: 'text',
        title: 'Genèse du projet',
        titleEn: 'Where it started',
        body: "L'idée est née d'une curiosité personnelle pour la symbolique des rêves et d'une envie de construire un outil utile de bout en bout. Plutôt que de partir d'un brief client, j'ai défini moi-même le périmètre : un outil sobre, analytique, qui ne prétend pas tout savoir mais qui donne des clés de lecture sérieuses. La contrainte principale était de rester honnête sur les limites de l'interprétation automatisée.",
        bodyEn: "The idea grew out of a personal curiosity about dream symbolism and a wish to build something genuinely useful, end to end. Instead of starting from a client brief, I defined the scope myself: a sober, analytical tool that doesn't claim to know everything but offers serious reading keys. The main constraint was staying honest about the limits of automated interpretation.",
      },
      {
        type: 'callout',
        title: 'Problématique',
        titleEn: 'The problem',
        calloutText: '• La plupart des outils d\'interprétation des rêves en ligne sont superficiels ou ésotériques\n• Il n\'existe pas d\'outil sobre et analytique qui s\'appuie sur des références sérieuses (Freud, Jung, symbolique universelle)\n• Comment rendre l\'inconscient accessible sans le trahir ?',
        calloutTextEn: "• Most online dream-interpretation tools are shallow or purely esoteric\n• There's no sober, analytical tool grounded in serious references (Freud, Jung, universal symbolism)\n• How do you make the unconscious accessible without distorting it?",
      },
      {
        type: 'text',
        title: 'Recherche & construction du corpus',
        titleEn: 'Research & building the knowledge base',
        body: "La phase de recherche a été la plus longue. J'ai constitué un corpus de symboles oniriques en croisant plusieurs sources : ouvrages de référence en psychanalyse (Freud, Jung), traités de symbolique universelle, et littérature sur l'analyse des rêves. L'IA m'a aidée à structurer, synthétiser et mettre en forme ce corpus, mais la sélection des sources et la logique éditoriale sont entièrement les miennes. Chaque symbole du dictionnaire a été pensé pour être à la fois rigoureux et accessible.",
        bodyEn: "The research phase took the longest. I built a corpus of dream symbols by cross-referencing several sources: reference works in psychoanalysis (Freud, Jung), treatises on universal symbolism, and literature on dream analysis. AI helped me structure, summarize and format this corpus, but the source selection and editorial logic are entirely mine. Every symbol in the dictionary was designed to be both rigorous and accessible.",
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/reves_dico_34cd6920.webp',
        imageAlt: 'Dictionnaire de symboles oniriques : Serpent, Voler, Chute, Eau, Mort, Dents',
        imageAltEn: 'Dictionary of dream symbols: Snake, Flying, Falling, Water, Death, Teeth',
        caption: 'Le dictionnaire couvre les grandes catégories symboliques : animaux, éléments, mouvements, corps humain, événements de vie',
        captionEn: 'The dictionary covers the main symbolic categories: animals, elements, movements, the human body, life events',
      },
      {
        type: 'text',
        title: 'Conception de l\'interface',
        titleEn: 'Interface design',
        body: "Le parti pris design est volontairement sobre : fond crème, typographie sérif, palette réduite. L'objectif était de créer un espace calme, presque contemplatif, qui invite à la réflexion plutôt qu'à la consommation rapide. Trois espaces distincts ont été définis : l'Interprète (analyse libre), le Dictionnaire (consultation par symbole), et le Guide d'analyse (méthode et grandes écoles de lecture).",
        bodyEn: "The design approach is deliberately understated: cream background, serif typography, a limited palette. The goal was to create a calm, almost contemplative space that invites reflection rather than quick consumption. Three distinct spaces were defined: the Interpreter (free-form analysis), the Dictionary (browse by symbol), and the Analysis Guide (method and major interpretive traditions).",
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/reves_guide_9ce919a8.webp',
        imageAlt: "Guide d'exploration, 4 étapes d'analyse et les grandes écoles de lecture (Freud, Jung)",
        imageAltEn: 'Exploration guide, 4 analysis steps and the major interpretive traditions (Freud, Jung)',
        caption: "Le Guide d'analyse présente une méthode en 4 étapes et les deux grandes traditions d'interprétation : l'approche freudienne et l'approche jungienne",
        captionEn: "The Analysis Guide presents a 4-step method and the two major interpretive traditions: the Freudian approach and the Jungian approach",
      },
      {
        type: 'text',
        title: 'Mise en production autonome',
        titleEn: 'Shipping it on my own',
        body: "Le développement a été réalisé en mode product building, en m'appuyant sur l'IA comme outil d'accélération : génération de code, les arbitrages techniques et la mise en production sur Google Cloud Run. C'est un projet que j'ai porté seule, de la définition du concept à la publication, ce qui m'a permis de comprendre l'ensemble de la chaîne de valeur d'un produit numérique.",
        bodyEn: "Development happened in a product-building mode, using AI as an acceleration tool: code generation, technical trade-offs, and deployment to Google Cloud Run. I carried this project alone, from defining the concept through to publishing it, which gave me a full understanding of a digital product's entire value chain.",
      },
      {
        type: 'text',
        title: 'Ce que l\'outil produit',
        titleEn: 'What the tool produces',
        body: "Pour chaque rêve décrit en langage naturel, l'outil génère une analyse structurée en plusieurs couches. D'abord une synthèse thématique globale : le message subconscient du rêve. Ensuite, chaque symbole détecté est identifié et interprété individuellement (ici : le désert, la voiture noire, le frère, les nomades, la mort). Les vecteurs émotionnels sont mesurés : 75 % peur, 70 % confusion, 10 % émerveillement, 25 % clarté. Enfin, deux lectures parallèles sont proposées : une lecture freudienne, une lecture jungienne, suivies d'une consigne de journalisation personnalisée pour inviter à la réflexion.",
        bodyEn: "For every dream described in natural language, the tool generates a layered analysis. First, an overall thematic summary: the dream's subconscious message. Then, each detected symbol is identified and interpreted individually (here: the desert, the black car, the brother, the nomads, death). Emotional vectors are measured: 75% fear, 70% confusion, 10% wonder, 25% clarity. Finally, two parallel readings are offered, a Freudian one and a Jungian one, followed by a personalized journaling prompt to invite further reflection.",
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/reves_resultat_918d9c36.webp',
        imageAlt: "Résultat d'analyse d'un rêve : synthèse thématique, symboles détectés, vecteurs émotionnels, lectures freudienne et jungienne",
        imageAltEn: 'Dream analysis result: thematic summary, detected symbols, emotional vectors, Freudian and Jungian readings',
        caption: "Exemple de résultat complet : synthèse, 5 symboles interprétés, vecteurs émotionnels mesurés, double lecture Freud / Jung et consigne de journalisation",
        captionEn: 'Example of a full result: summary, 5 interpreted symbols, measured emotional vectors, dual Freud / Jung reading and a journaling prompt',
      },
      {
        type: 'callout',
        title: 'Et après ?',
        titleEn: "What's next?",
        calloutText: "Je travaille en ce moment sur une évolution du produit : passer d'un simple outil d'interprétation à un véritable journal des rêves. L'idée, c'est de permettre à l'utilisateur de garder une trace de ses rêves dans le temps, de détecter des patterns récurrents dans ses symboles, et de construire progressivement une lecture personnalisée de son inconscient. Un produit plus intime, plus continu.",
        calloutTextEn: "I'm currently working on evolving the product: moving from a simple interpretation tool to a real dream journal. The idea is to let users keep track of their dreams over time, spot recurring patterns in their symbols, and gradually build a personalized reading of their unconscious. A more intimate, more ongoing product.",
      },
      {
        type: 'link-button',
        title: 'Voir le projet en ligne',
        titleEn: 'View the live project',
        href: 'https://l-interpr-te-de-r-ves-683443942804.europe-west2.run.app/',
      },
    ],
  },

  'elements': {
    title: 'Elements',
    titleEn: 'Elements',
    subtitle: 'Identité visuelle, Direction artistique',
    subtitleEn: 'Visual identity, Art direction',
    year: '2020',
    tags: ['Identité visuelle', 'Logo', 'Direction artistique', 'Print'],
    tagsEn: ['Visual identity', 'Logo', 'Art direction', 'Print'],
    hero: `${import.meta.env.BASE_URL}elements/hero.jpg`,
    heroAlt: 'Logo Elements sur fond de bois et métal, créations artisanales bois et métal',
    heroAltEn: 'Elements logo on a wood and metal background, handcrafted wood and metal creations',
    intro: 'Elements, c\'est le projet d\'un artisan passionné qui a refait sa maison et a décidé d\'en faire son métier. Fred propose du mobilier sur mesure et de l\'optimisation d\'habitat en alliant deux matériaux nobles : le bois et le métal. Un vrai homme des champs qui a du goût. Mission : lui créer une identité à la hauteur de son savoir-faire.',
    introEn: "Elements is the project of a passionate craftsman who renovated his own house and decided to make it his trade. Fred offers custom furniture and home-optimization work, combining two noble materials: wood and metal. A real countryman with real taste. The mission: build him an identity worthy of his craft.",
    sections: [
      {
        type: 'image',
        image: `${import.meta.env.BASE_URL}elements/hero.jpg`,
        imageAlt: 'Logo Elements sur fond de bois et métal, créations artisanales bois et métal',
        imageAltEn: 'Elements logo on a wood and metal background, handcrafted wood and metal creations',
        caption: 'Le logo Elements sur fond de chutes de bois brut, matière première de l\'atelier',
        captionEn: "The Elements logo on a background of raw wood offcuts, the workshop's raw material",
      },
      {
        type: 'text',
        title: 'Le brief',
        titleEn: 'The brief',
        body: 'Créer une identité visuelle complète pour une activité artisanale de création bois et métal. L\'enjeu : trouver un équilibre entre la robustesse des matériaux travaillés et l\'élégance du mobilier produit. Le logo devait être à la fois simple, mémorisable et porteur du caractère de Fred.',
        bodyEn: "Create a full visual identity for a wood-and-metal craft business. The challenge: find a balance between the toughness of the materials used and the elegance of the furniture produced. The logo had to be simple, memorable, and carry Fred's character.",
      },
      {
        type: 'image',
        image: `${import.meta.env.BASE_URL}elements/logo-vert.jpg`,
        imageAlt: 'Logo Elements déclinaison fond vert forêt',
        imageAltEn: 'Elements logo, forest-green background variant',
        caption: 'Déclinaison principale du logo sur fond vert forêt, avec les lignes dorées qui évoquent les stries du bois et les découpes du métal',
        captionEn: "Main logo variant on a forest-green background, with golden lines evoking wood grain and metal cuts",
      },
      {
        type: 'text',
        title: 'Le logo',
        titleEn: 'The logo',
        body: 'Le symbole est construit autour d\'un "E" stylisé, dont les barres horizontales rappellent les stries du bois et les découpes nettes du métal. La verticalité de la forme évoque la robustesse, tandis que l\'épure du trait traduit le soin apporté à chaque réalisation. Deux déclinaisons coexistent : une version sombre sur fond clair pour les supports print, une version inversée sur fond vert forêt pour les supports de communication.',
        bodyEn: 'The mark is built around a stylized "E," whose horizontal bars recall wood grain and clean metal cuts. The shape\'s verticality conveys sturdiness, while the clean line reflects the care put into every piece. Two variants coexist: a dark version on a light background for print, and an inverted version on forest green for communication materials.',
      },
      {
        type: 'image',
        image: `${import.meta.env.BASE_URL}elements/charte-complete.jpg`,
        imageAlt: 'Charte graphique Elements : marque-pages, palette de couleurs, typographies Gotham Black et Roboto',
        imageAltEn: 'Elements style guide: bookmarks, color palette, Gotham Black and Roboto typography',
        caption: 'Charte graphique complète : marque-pages en réel, palette vert forêt / terracotta / crème, typos Gotham Black pour les titres et Roboto pour le contenu',
        captionEn: 'Full style guide: real bookmarks, forest-green / terracotta / cream palette, Gotham Black for headlines and Roboto for body text',
      },
      {
        type: 'callout',
        title: 'Système typographique',
        titleEn: 'Typographic system',
        calloutText: 'Gotham Black pour les titres et éléments forts, Roboto en trois graisses (bold, regular, italic) pour le contenu. Un duo qui combine la force d\'une typo géométrique américaine avec la lisibilité d\'une sans-serif digitale.',
        calloutTextEn: 'Gotham Black for headlines and strong elements, Roboto in three weights (bold, regular, italic) for body content. A pairing that combines the strength of an American geometric typeface with the readability of a digital sans-serif.',
      },
    ],
  },

  'tao': {
    title: 'TAO',
    titleEn: 'TAO',
    subtitle: 'Direction artistique, Logo, Identité visuelle',
    subtitleEn: 'Art direction, Logo, Visual identity',
    year: '2019',
    tags: ['Direction artistique', 'Identité visuelle', 'Logo', 'Print'],
    tagsEn: ['Art direction', 'Visual identity', 'Logo', 'Print'],
    hero: `${import.meta.env.BASE_URL}tao/logo.png`,
    heroAlt: 'Logo TAO, boussole verte et bleu-violet',
    heroAltEn: 'TAO logo, green and blue-purple compass',
    intro: 'TAO, c\'est une structure spécialisée dans la performance énergétique. La mission : créer une identité visuelle complète qui incarne à la fois le mouvement, la précision et l\'engagement vers un objectif. Du logo à la charte graphique complète, en passant par les guidelines d\'habillage des images, le système typographique et une déclinaison motion design.',
    introEn: "TAO is an organization specializing in energy performance. The mission: create a full visual identity embodying movement, precision, and commitment to a goal. From the logo to the complete style guide, including image-treatment guidelines, the typographic system, and a motion-design extension.",
    sections: [
      {
        type: 'text',
        title: 'Le brief',
        titleEn: 'The brief',
        body: 'Concevoir une identité visuelle forte pour TAO, une structure orientée performance énergétique. L\'enjeu était de trouver un symbole à la fois dynamique et précis, qui évoque le mouvement et la direction sans tomber dans les codes génériques du secteur énergétique.',
        bodyEn: "Design a strong visual identity for TAO, an organization focused on energy performance. The challenge was finding a symbol that felt both dynamic and precise, evoking movement and direction without falling into the generic codes of the energy sector.",
      },
      {
        type: 'text',
        title: 'Le logo',
        titleEn: 'The logo',
        body: 'Le symbole central est une boussole stylisée, dont l\'aiguille évoquée par un éclair traduit l\'idée de performance et d\'orientation vers un objectif. Le logotype "tao" en Gotham, avec son "a" ouvert et ses courbes géométriques, équilibre la force du symbole. La tagline "La performance énergétique" ancre le positionnement.',
        bodyEn: 'The central symbol is a stylized compass, its needle rendered as a lightning bolt to convey performance and goal orientation. The "tao" logotype in Gotham, with its open "a" and geometric curves, balances the strength of the symbol. The tagline "La performance énergétique" anchors the positioning.',
      },
      {
        type: 'image',
        image: `${import.meta.env.BASE_URL}tao/logo.png`,
        imageAlt: 'Logo TAO, boussole verte et bleu-violet, tagline la performance énergétique',
        imageAltEn: 'TAO logo, green and blue-purple compass, "La performance énergétique" tagline',
        caption: 'Le logo TAO : boussole stylisée, logotype Gotham, tagline "La performance énergétique"',
        captionEn: 'The TAO logo: stylized compass, Gotham logotype, "La performance énergétique" tagline',
      },
      {
        type: 'text',
        title: 'Habillage des images',
        titleEn: 'Image treatment',
        body: 'Les contours de la boussole servent de cadres pour les photos. Ils peuvent aussi créer des compositions dynamiques en gardant la trame colorée de l\'identité. Les jeux de couleurs ne sont pas figés : il est possible d\'intervertir les bleus et verts selon l\'harmonie de l\'ensemble. Les contours et les aiguilles sont simplifiés pour conserver la mise en valeur des images.',
        bodyEn: "The compass outline is used as a frame for photos. It can also build dynamic compositions while keeping the identity's color scheme. Color choices aren't fixed: blues and greens can be swapped depending on overall harmony. Outlines and needles are kept simple to keep the focus on the images themselves.",
      },
      {
        type: 'image',
        image: `${import.meta.env.BASE_URL}tao/header-full.jpg`,
        imageAlt: 'Bandeau de couverture TAO et règles d\'habillage des images avec les contours de la boussole',
        imageAltEn: 'TAO cover banner and image-treatment rules using the compass outline',
        caption: 'Bandeau de couverture et règles d\'habillage : les contours de la boussole cadrent les portraits et créent des compositions dynamiques',
        captionEn: 'Cover banner and treatment rules: the compass outline frames portraits and builds dynamic compositions',
      },
      {
        type: 'text',
        title: 'Le système typographique',
        titleEn: 'The typographic system',
        body: 'Gotham pour les titres et éléments forts : ses majuscules architecturales, inspirées de l\'enseigne new-yorkaise, apportent une signalisation claire et une présence affichée. Sofia Pro pour les textes courants : 16 polices, conçue pour la marque, la signalisation et le web. Un duo qui combine l\'impact d\'une géométrique ambitieuse avec la lisibilité d\'une sans-serif digitale.',
        bodyEn: "Gotham for headlines and strong elements: its architectural uppercase letters, inspired by New York signage, bring clear signaling and a bold presence. Sofia Pro for body text: 16 fonts, designed for branding, signage and web. A pairing that combines the impact of an ambitious geometric face with the readability of a digital sans-serif.",
      },
      {
        type: 'image',
        image: `${import.meta.env.BASE_URL}tao/typography.jpg`,
        imageAlt: 'Système typographique TAO : Gotham et Sofia Pro, graisses Light à Black',
        imageAltEn: 'TAO typographic system: Gotham and Sofia Pro, Light to Black weights',
        caption: 'Le duo typographique : Gotham (titres) et Sofia Pro (texte courant), en 4 et 8 graisses respectivement',
        captionEn: 'The typographic pairing: Gotham (headlines) and Sofia Pro (body text), in 4 and 8 weights respectively',
      },
      {
        type: 'text',
        title: 'La palette',
        titleEn: 'The palette',
        body: 'Deux couleurs principales structurent l\'identité : le vert électrique #2BD081 (RGB 43, 208, 129) pour l\'énergie et la vitalité, et le bleu-violet #5569D1 (RGB 85, 105, 209) pour la confiance et l\'expertise. Deux teintes secondaires plus douces (#B9EAD3 et #6C82D0) permettent les dégradés et les fonds. Le blanc #FFFFFF et le navy profond #0F1E6F complètent le système.',
        bodyEn: "Two main colors structure the identity: electric green #2BD081 (RGB 43, 208, 129) for energy and vitality, and blue-purple #5569D1 (RGB 85, 105, 209) for trust and expertise. Two softer secondary tones (#B9EAD3 and #6C82D0) allow for gradients and backgrounds. White #FFFFFF and deep navy #0F1E6F complete the system.",
      },
      {
        type: 'image',
        image: `${import.meta.env.BASE_URL}tao/colors.jpg`,
        imageAlt: 'Palette de couleurs TAO : vert #2BD081, bleu-violet #5569D1, teintes secondaires et navy',
        imageAltEn: 'TAO color palette: green #2BD081, blue-purple #5569D1, secondary tones and navy',
        caption: 'La palette complète, avec les codes RGB et CMJN de chaque teinte',
        captionEn: 'The full palette, with RGB and CMYK codes for each color',
      },
      {
        type: 'quote',
        author: 'François Jeanmaire',
        quoteTag: '18/11/2022',
        body: 'Philippe et moi partageons une vision commune du projet et de ses orientations futures ainsi que des enjeux associés.',
        bodyEn: "Philippe and I share a common vision for the project, its future direction, and the issues at stake.",
      },
      {
        type: 'text',
        title: 'Déclinaison motion design',
        titleEn: 'Motion design extension',
        body: 'Au-delà du print et du digital, l\'identité s\'est prolongée en motion design pour la présentation du TAO EMS (Energy Management System). J\'ai réalisé les rushs vidéo qui illustrent le système en mouvement, fidèle à la charte graphique et à ses codes visuels.',
        bodyEn: "Beyond print and digital, the identity extended into motion design for presenting TAO EMS (Energy Management System). I produced the video footage illustrating the system in motion, staying true to the style guide and its visual codes.",
      },
      {
        type: 'video',
        video: `${import.meta.env.BASE_URL}tao/motion-design.mp4`,
        caption: 'Présentation TAO EMS (Energy Management System), motion design',
        captionEn: 'TAO EMS (Energy Management System) presentation, motion design',
      },
    ],
  },

  'illustrations': {
    title: 'Illustrations, Cyanotype',
    titleEn: 'Illustrations, Cyanotype',
    subtitle: 'Création personnelle · Artiste Auteur',
    subtitleEn: 'Personal work · Independent artist',
    year: '2020',
    tags: ['Illustration', 'Art', 'Cyanotype'],
    tagsEn: ['Illustration', 'Art', 'Cyanotype'],
    hero: `${CDN}/illustrations_cyanotype_67bc2b38.jpg`,
    heroAlt: 'Série de cyanotypes, œuvres bleues sur fond sombre',
    heroAltEn: 'Cyanotype series, blue artworks on a dark background',
    intro: 'Série d\'œuvres cyanotypées, travail personnel en tant qu\'Artiste Auteur indépendante. Le cyanotype est une technique photographique ancienne qui produit des tirages bleus caractéristiques.',
    introEn: "A series of cyanotype artworks, personal work as an independent artist. Cyanotype is an early photographic technique that produces distinctive blue prints.",
    sections: [
      {
        type: 'text',
        title: 'Démarche',
        titleEn: 'Approach',
        body: 'Chaque œuvre est le résultat d\'une expérimentation avec les propriétés chimiques du cyanotype, la lumière et les matières. La série explore les thèmes de la mémoire, de la trace et de la nature. Les œuvres ont été créées, vendues et exposées.',
        bodyEn: "Each piece results from experimenting with cyanotype's chemical properties, light and materials. The series explores themes of memory, trace, and nature. The works have been created, sold and exhibited.",
      },
      {
        type: 'image',
        image: `${CDN}/illustrations_cyanotype_67bc2b38.jpg`,
        imageAlt: 'Œuvres cyanotypées, série bleue',
        imageAltEn: 'Cyanotype artworks, blue series',
        caption: 'Série de cyanotypes, chaque œuvre est unique, résultat d\'une expérimentation avec la lumière',
        captionEn: 'Cyanotype series, each piece is unique, the result of experimenting with light',
      },
    ],
  },
};

/* ─── Composants ─── */

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center p-5 rounded-sm"
      style={{ backgroundColor: 'oklch(0.95 0.03 264)', border: '1px solid oklch(0.88 0.06 264)' }}
    >
      <span
        className="text-3xl mb-1"
        style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 800, color: 'oklch(0.42 0.22 264)' }}
      >
        {value}
      </span>
      <span
        className="text-xs text-center uppercase tracking-wider"
        style={{ color: 'oklch(0.4 0.06 264)', fontFamily: 'DM Sans, sans-serif' }}
      >
        {label}
      </span>
    </div>
  );
}

function Callout({ title, text }: { title?: string; text: string }) {
  return (
    <div
      className="my-8 p-5 rounded-sm"
      style={{
        borderLeft: '3px solid oklch(0.42 0.22 264)',
        backgroundColor: 'oklch(0.97 0.015 264)',
      }}
    >
      {title && (
        <p
          className="text-xs uppercase tracking-widest mb-2"
          style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
        >
          {title}
        </p>
      )}
      {text.split('\n').map((line, i) => (
        <p
          key={i}
          className="text-sm leading-relaxed"
          style={{ color: 'oklch(0.28 0.04 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, marginTop: i > 0 ? '0.35rem' : 0 }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}

function ProjectSection({ section, lang }: { section: Section; lang: Lang }) {
  const isEn = lang === 'en';
  if (section.type === 'metric' && section.metrics) {
    const metrics = isEn && section.metricsEn ? section.metricsEn : section.metrics;
    return (
      <div className="grid grid-cols-3 gap-2 sm:gap-3 my-8 sm:my-10">
        {metrics.map((m, i) => (
          <MetricCard key={i} value={m.value} label={m.label} />
        ))}
      </div>
    );
  }

  if (section.type === 'callout') {
    return <Callout title={isEn && section.titleEn ? section.titleEn : section.title} text={(isEn && section.calloutTextEn ? section.calloutTextEn : section.calloutText) || ''} />;
  }

  if (section.type === 'link-button') {
    return (
      <div className="my-8 flex flex-col items-start gap-2">
        {section.title && (
          <p
            className="text-xs uppercase tracking-widest mb-1"
            style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
          >
            {isEn && section.titleEn ? section.titleEn : section.title}
          </p>
        )}
        <a
          href={section.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-medium transition-opacity hover:opacity-80"
          style={{
            backgroundColor: 'oklch(0.42 0.22 264)',
            color: '#fff',
            fontFamily: 'DM Sans, sans-serif',
            textDecoration: 'none',
          }}
        >
          {isEn ? 'Open the site' : 'Ouvrir le site'}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    );
  }

  if (section.type === 'video') {
    return (
      <div className="my-10">
        <div
          className="overflow-hidden rounded-sm"
          style={{ border: '1px solid oklch(0.91 0.02 264)' }}
        >
          <video
            src={section.video}
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto block"
          />
        </div>
        {section.caption && (
          <p
            className="text-xs mt-2"
            style={{ color: 'oklch(0.52 0.04 264)', fontFamily: 'DM Sans, sans-serif', fontStyle: 'italic' }}
          >
            {isEn && section.captionEn ? section.captionEn : section.caption}
          </p>
        )}
      </div>
    );
  }

  if (section.type === 'image') {
    return (
      <div className="my-10">
        <div
          className="overflow-hidden rounded-sm"
          style={{ border: '1px solid oklch(0.91 0.02 264)' }}
        >
          <img
            src={section.image}
            alt={(isEn && section.imageAltEn ? section.imageAltEn : section.imageAlt) || ''}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
        {section.caption && (
          <p
            className="text-xs mt-2"
            style={{ color: 'oklch(0.52 0.04 264)', fontFamily: 'DM Sans, sans-serif', fontStyle: 'italic' }}
          >
            {isEn && section.captionEn ? section.captionEn : section.caption}
          </p>
        )}
      </div>
    );
  }

  if (section.type === 'image-pair' && section.images) {
    const images = isEn && section.imagesEn ? section.imagesEn : section.images;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
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

  if (section.type === 'quote') {
    return (
      <div
        className="my-6 p-5 rounded-sm"
        style={{ border: '1px solid oklch(0.91 0.02 264)', backgroundColor: 'oklch(0.98 0.01 264)' }}
      >
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-xs font-semibold" style={{ color: 'oklch(0.13 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}>
            {isEn && section.authorEn ? section.authorEn : section.author}
          </span>
          {section.quoteTag && (
            <span className="text-xs" style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}>
              {isEn && section.quoteTagEn ? section.quoteTagEn : section.quoteTag}
            </span>
          )}
        </div>
        <p
          className="text-sm italic leading-relaxed"
          style={{ color: 'oklch(0.25 0.05 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
        >
          « {isEn && section.bodyEn ? section.bodyEn : section.body} »
        </p>
      </div>
    );
  }

  if (section.type === 'quote-grid' && section.quotes) {
    const quotes = isEn && section.quotesEn ? section.quotesEn : section.quotes;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
        {quotes.map((q, i) => (
          <div
            key={i}
            className="p-4 rounded-sm"
            style={{ border: '1px solid oklch(0.91 0.02 264)', backgroundColor: 'oklch(0.98 0.01 264)' }}
          >
            <div className="flex justify-between items-baseline mb-3">
              <span className="text-xs font-semibold" style={{ color: 'oklch(0.13 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}>
                {q.author}
              </span>
              <span className="text-xs" style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}>
                {q.tag}
              </span>
            </div>
            <p
              className="text-sm italic leading-relaxed"
              style={{ color: 'oklch(0.25 0.05 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
            >
              « {q.text} »
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (section.type === 'text') {
    return (
      <div className="my-8">
        {section.title && (
          <h2
            className="text-xl mb-3"
            style={{ fontFamily: 'Jost, sans-serif', fontWeight: 600, color: 'oklch(0.13 0.02 264)', lineHeight: 1.35, letterSpacing: '-0.005em' }}
          >
            {isEn && section.titleEn ? section.titleEn : section.title}
          </h2>
        )}
        {section.body && (
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'oklch(0.33 0.03 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, maxWidth: '70ch' }}
          >
            {isEn && section.bodyEn ? section.bodyEn : section.body}
          </p>
        )}
      </div>
    );
  }

  return null;
}

/* ─── Page principale ─── */

export default function ProjectPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || '';
  const project = projects[slug];
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  if (!project) {
    return (
      <div className="px-10 py-16">
        <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.5 0.04 264)' }}>
          {isEn ? 'Project not found.' : 'Projet non trouvé.'}
        </p>
        <Link href="/" className="text-sm mt-4 inline-block" style={{ color: 'oklch(0.42 0.22 264)' }}>
          {isEn ? '← Back to projects' : '← Retour aux projets'}
        </Link>
      </div>
    );
  }

  return (
    <>
    <SEOHead
      title={project.title}
      description={project.subtitle + (project.intro ? ', ' + project.intro.slice(0, 120) : '')}
      ogImage={project.hero}
      canonicalPath={`/projet/${slug}`}
    />
    <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>
      <CaseStudyHeader
        title={project.title}
        titleEn={project.titleEn}
        tags={project.tags}
        tagsEn={project.tagsEn}
        description={project.subtitle}
        descriptionEn={project.subtitleEn}
        bodyTranslated={!!project.titleEn}
      />

      {/* Contenu */}
      <main className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl py-8 sm:py-14">
        {/* Intro */}
        {project.intro && (
          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: 'oklch(0.28 0.04 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 400, maxWidth: '65ch' }}
          >
            {isEn && project.introEn ? project.introEn : project.intro}
          </p>
        )}

        {/* Sections */}
        {project.sections.map((section, i) => (
          <ProjectSection key={i} section={section} lang={lang} />
        ))}

        {/* Navigation bas de page */}
        <div
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center"
          style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}
        >
          <Link
            href="/"
            className="text-sm transition-opacity hover:opacity-60"
            style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif' }}
          >
            {isEn ? '← All projects' : '← Tous les projets'}
          </Link>
          <Link
            href="/contact"
            className="text-sm px-4 py-2 rounded-sm transition-opacity hover:opacity-80"
            style={{
              backgroundColor: 'oklch(0.42 0.22 264)',
              color: '#fff',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
            }}
          >
            {isEn ? 'Get in touch' : 'Me contacter'}
          </Link>
        </div>
      </main>
    </div>
    </>
  );
}
