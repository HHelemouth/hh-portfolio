/*
  ProjectPage, Fiche de projet enrichie
  Charte : fond blanc, bleu #3B3FD8 en accent, Syne + DM Sans
  Structure : Hero image pleine largeur → sections dans l'ordre exact du portfolio original
*/

import { Link, useParams } from 'wouter';
import SEOHead from '@/components/SEOHead';
import CaseStudyHeader from '@/components/CaseStudyHeader';

const CDN = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2';

interface Section {
  type: 'text' | 'image' | 'metric' | 'callout' | 'image-pair' | 'link-button' | 'quote' | 'quote-grid';  href?: string;
  title?: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  caption?: string;
  metrics?: { value: string; label: string }[];
  images?: { src: string; alt: string; caption?: string }[];
  calloutText?: string;
  author?: string;
  quoteTag?: string;
  quotes?: { author: string; tag: string; text: string }[];
}

interface Project {
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  hero: string;
  heroAlt: string;
  intro?: string;
  sections: Section[];
}

const projects: Record<string, Project> = {

  /* ─────────────────────────────────────────────
     FIOULREDUC, 4 sections dans l'ordre du site
  ───────────────────────────────────────────── */
  'fioulreduc': {
    title: 'Fioulreduc',
    subtitle: 'UX · UI · Refonte produit',
    year: '2023',
    tags: ['UX', 'UI Design', 'Refonte', 'Conversion'],
    hero: `${CDN}/fioul_formulaire_137c663a.png`,
    heroAlt: 'Formulaire de devis Fioulreduc, avant et après optimisation',
    intro: 'Mission longue durée sur la plateforme de commande de fioul domestique Fioulreduc. J\'ai travaillé sur quatre chantiers successifs : l\'optimisation du formulaire de devis, une nouvelle fonctionnalité de retour au devis, la refonte complète de l\'image et du tunnel d\'achat, et la création de visuels pour les opérations commerciales.',
    sections: [
      // ── SECTION 1 : Formulaire de devis ──
      {
        type: 'text',
        title: '1, Optimisation du formulaire de devis',
        body: 'Formulaire de demande de devis permettant de créer de l\'embasement. Le but : prendre le client par la main et le guider, en évitant de lui créer trop de questionnements. Le bloc de gauche sert à la complétion, celui de droite sert de guide et indique au client ce qui est attendu de lui.',
      },
      {
        type: 'callout',
        title: 'Problématiques identifiées',
        calloutText: '• Cible facilement déroutée par les technologies : besoin d\'accompagnement et de réassurance\n• Charte actuelle pesante et désuète : besoin d\'une refonte en douceur\n• Tunnel de conversion fragile',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_formulaire_137c663a.png`,
        imageAlt: 'Formulaire de devis Fioulreduc, étapes guidées pas à pas',
        caption: 'Formulaire en deux blocs : à gauche la saisie, à droite le guide contextuel, chaque étape rassure et contextualise',
      },

      // ── SECTION 2 : Nouvelle fonctionnalité ──
      {
        type: 'text',
        title: '2, Nouvelle fonctionnalité : la top barre',
        body: 'Top barre permettant à l\'utilisateur de revenir à sa commande en cours, à tout moment, à n\'importe quel endroit du site. Cette fonctionnalité simple a eu un impact direct et mesurable sur le taux de conversion.',
      },
      {
        type: 'metric',
        metrics: [
          { value: '+44%', label: 'Taux de conversion' },
          { value: '↓', label: 'Taux de rebond' },
          { value: '100%', label: 'Du site couvert' },
        ],
      },
      {
        type: 'image',
        image: `${CDN}/fioul_topbarre_b7aac717.png`,
        imageAlt: 'Top barre Fioulreduc, retour à la commande en cours depuis n\'importe quelle page',
        caption: 'La top barre persiste sur toutes les pages, l\'utilisateur peut reprendre son devis à tout moment sans perdre sa progression',
      },

      // ── SECTION 3 : Refonte image et technologie ──
      {
        type: 'text',
        title: '3, Refonte image et technologie',
        body: 'Intégration de nouveaux services, de nouvelles fonctionnalités et refonte complète du tunnel d\'achat. Ce chantier a démarré par une recherche utilisateur approfondie pour comprendre les comportements et les freins de la cible.',
      },
      {
        type: 'callout',
        title: 'Promesses UX définies',
        calloutText: '• L\'utilisateur doit comprendre l\'intérêt et le coût d\'une option (prix clairs et visibles)\n• Si une économie peut être réalisée, l\'utilisateur doit toujours être prévenu\n• Ne jamais forcer la main : l\'utilisateur doit pouvoir maîtriser ses coûts, options et moyens de paiement',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_persona_bernard_7b89997b.jpg`,
        imageAlt: 'Persona Bernard, profil utilisateur Fioulreduc, 55 ans, CSP+, méfiant mais curieux des nouvelles technologies',
        caption: 'Persona "Bernard", 55 ans, CSP+, prof de maths à Hossegor. Serein sur le rapport qualité/prix, mais infidèle si une meilleure affaire se présente. Déteste qu\'on lui force la main.',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_refonte_logo_full_099acd43.png`,
        imageAlt: 'Nouveau logo Fioulreduc, refonte de l\'identité visuelle',
        caption: 'Refonte de l\'identité visuelle, nouveau logo Fioulreduc, plus sobre et moderne',
      },
      {
        type: 'text',
        title: 'Architecture du nouveau tunnel d\'achat',
        body: 'Avant de passer aux interfaces finales, j\'ai cartographié l\'ensemble du nouveau parcours d\'achat. Ce wireframe d\'architecture définit les étapes clés, les points de décision et les nouvelles fonctionnalités intégrées (commande groupée, catalogue services, options d\'entretien).',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_wireframe_tunnel_9e5d2998.png`,
        imageAlt: 'Architecture du nouveau tunnel d\'achat Fioulreduc, wireframe des étapes et parcours',
        caption: 'Architecture du tunnel d\'achat, cartographie des étapes, points de décision et nouvelles fonctionnalités',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_ui_wireframe_achat_09da6723.png`,
        imageAlt: 'Wireframe de la nouvelle interface d\'achat de fioul, mise en page et structure',
        caption: 'Wireframe de la nouvelle interface d\'achat, structure claire, prix mis en avant, options transparentes',
      },
      {
        type: 'text',
        title: 'Nouvelle interface, UI finale',
        body: 'Les interfaces finales traduisent les promesses UX en design concret : prix toujours visibles, options clairement présentées, commande groupée mise en avant pour générer des économies. La nouvelle charte graphique modernise l\'image de marque tout en conservant la confiance de la cible.',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_ui_coloree_1_23f3660f.png`,
        imageAlt: 'Nouvelle interface Fioulreduc, achat de fioul avec prix en temps réel et options de livraison',
        caption: 'Nouvelle interface d\'achat, prix en temps réel, options de livraison claires, commande groupée pour économiser',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_ui_chaudiere_wire_7eb5a507.png`,
        imageAlt: 'Wireframe service entretien chaudière, nouvelle fonctionnalité',
        caption: 'Wireframe du service entretien chaudière, nouvelle offre intégrée au tunnel d\'achat',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_ui_chaudiere_color_db22fe19.png`,
        imageAlt: 'Interface finale entretien chaudière Fioulreduc, options et tarifs',
        caption: 'Interface finale du service entretien, options détaillées, tarifs transparents, certifications RGE mises en avant',
      },
      {
        type: 'image',
        image: `${CDN}/fioul_ui_complete_85d99f64.png`,
        imageAlt: 'Vue complète de la nouvelle interface Fioulreduc, tunnel d\'achat complet',
        caption: 'Vue complète du nouveau tunnel d\'achat, de la commande au récapitulatif, avec avis clients intégrés',
      },

      // ── SECTION 4 : Opérations commerciales ──
      {
        type: 'text',
        title: '4, Opérations commerciales',
        body: 'En parallèle des missions UX, UI et refonte, j\'ai élaboré des visuels pour les opérations commerciales. Ces créations devaient respecter la nouvelle charte tout en étant suffisamment percutantes pour capter l\'attention.',
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
      },
    ],
  },

  /* ─────────────────────────────────────────────
     TERRITOIRE 360
  ───────────────────────────────────────────── */
  'territoire-360': {
    title: 'Territoire 360',
    subtitle: 'Lancement produit · UX Research · UI Design',
    year: '2024',
    tags: ['Lancement produit', 'UX Research', 'UI Design'],
    hero: `${CDN}/t360_main_0184e6ca.jpg`,
    heroAlt: 'Interface Territoire 360, plateforme de veille territoriale sur laptop',
    intro: 'Territoire 360 est une plateforme de ciblage, de veille et d\'analyse des communes et de leurs acteurs. J\'ai contribué au lancement du produit en travaillant sur la recherche UX et la conception des interfaces principales.',
    sections: [
      {
        type: 'text',
        title: 'Contexte',
        body: 'La plateforme offre une compréhension intuitive des enjeux des territoires et permet d\'accéder à des millions de sources d\'informations locales en temps réel, élus, projets, décisions des acteurs publics. Trois piliers structurent le produit : Suivre (l\'actualité des territoires), Identifier (les élus influents, analyser leurs prises de parole), Appréhender (les enjeux des donneurs d\'ordre).',
      },
      {
        type: 'metric',
        metrics: [
          { value: 'B2B', label: 'Marché cible' },
          { value: '3', label: 'Piliers fonctionnels' },
          { value: '2024', label: 'Lancement' },
        ],
      },
      {
        type: 'image',
        image: `${CDN}/t360_main_0184e6ca.jpg`,
        imageAlt: 'Interface Territoire 360, navigation cartographique et veille territoriale',
        caption: 'Interface principale, navigation cartographique, données territoriales et veille en temps réel',
      },
      {
        type: 'text',
        title: 'Démarche',
        body: 'La démarche a combiné des enquêtes utilisateurs auprès d\'acteurs publics, une analyse des usages existants, et des cycles courts de conception-test. L\'enjeu était de rendre accessibles des données complexes à des utilisateurs aux profils variés : élus, chargés de mission, analystes.',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     SWANEO
  ───────────────────────────────────────────── */
  'swaneo': {
    title: 'Swaneo',
    subtitle: 'Identité visuelle · Logo',
    year: '2023',
    tags: ['Identité visuelle', 'Logo', 'Branding'],
    hero: `${CDN}/swaneo_main_d6d5d8c7.jpg`,
    heroAlt: 'Identité visuelle Swaneo, logo et déclinaisons',
    intro: 'Création de l\'identité visuelle complète pour Swaneo, une startup spécialisée dans les batteries haute performance (technologie LTO).',
    sections: [
      {
        type: 'text',
        title: 'Contexte',
        body: 'Swan était le nom initial du projet, mais aussi la marque de très beaux voiliers de plaisance des années 80, choisi sans réflexion préalable. Le nom SWANEO a été créé pour éviter un conflit avec Swan Nautor. Deux partenaires techniques, Patrick Rondeau et Dominique Richard, avec plus de 20 ans d\'expérience, ont rejoint le projet.',
      },
      {
        type: 'image',
        image: `${CDN}/swaneo_main_d6d5d8c7.jpg`,
        imageAlt: 'Identité visuelle Swaneo complète, logo, palette orange et typographie',
        caption: 'Identité visuelle complète, le logo en forme de molécule traduit la chimie LTO, l\'orange évoque la puissance et l\'énergie',
      },
      {
        type: 'callout',
        title: 'Promesse de marque',
        calloutText: 'La puissance qui perdure, la durabilité qui résiste.\n\nTrois valeurs : Durabilité · Résistance · Puissance',
      },
      {
        type: 'metric',
        metrics: [
          { value: 'LTO', label: 'Technologie batterie' },
          { value: '3', label: 'Valeurs de marque' },
          { value: '2023', label: 'Lancement' },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────
     QG MÉDIA LIBRE
  ───────────────────────────────────────────── */
  'qg-media-libre': {
    title: 'QG — Média Libre',
    subtitle: 'Identité visuelle · Logo · Animation',
    year: '2020',
    tags: ['Identité visuelle', 'Logo', 'Branding'],
    hero: `${CDN}/qg_banner_ead05c8e.png`,
    heroAlt: 'Identité visuelle QG Média Libre, logo rouge sur fond photographique',
    intro: 'Création de l\'identité visuelle pour Quartier Général, un média indépendant qui se définit comme "le média libre". L\'identité devait refléter une posture engagée, directe et sans compromis.',
    sections: [
      // ── SECTION 1 : Parti pris graphique ──
      {
        type: 'text',
        title: 'Parti pris graphique',
        body: 'Le signe devait être fort, immédiatement reconnaissable, et fonctionner aussi bien en noir et blanc qu\'en couleur. Le "G" stylisé en forme de cible et le rouge vif traduisent l\'engagement et la liberté de ton du média. Le logo est construit autour d\'un cercle épais qui rappelle à la fois le viseur et la cible, une métaphore du média qui vise juste et ne recule devant rien.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/qg_logo_anim_caeedb4d.gif',
        imageAlt: 'Animation du logo QG Média Libre, construction du signe',
        caption: 'Animation du logo, le signe se construit progressivement, symbole d\'un média qui vise juste',
      },

      // ── SECTION 2 : Logo et déclinaisons couleur ──
      {
        type: 'text',
        title: 'Logo et déclinaisons',
        body: 'Le logo principal est décliné en quatre variantes couleur, chacune associée à une rubrique du média. Cette systématique permet une identification immédiate des contenus tout en conservant une unité graphique forte. Le rouge reste la couleur signature, les autres couleurs signalent les différents espaces éditoriaux.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/qg_logo_rouge_ce3d90be.png',
        imageAlt: 'Logo QG Média Libre rouge sur fond blanc, avec les quatre déclinaisons couleur : Quartier Interdit (rose), Pas de Quartier (noir), Quartier Libre (bleu), Quartier Jaune (jaune)',
        caption: 'Logo principal et quatre déclinaisons couleur, chaque variante correspond à une rubrique du média',
      },

      // ── SECTION 3 : Application sur supports ──
      {
        type: 'text',
        title: 'Application sur supports',
        body: 'L\'identité a été testée et appliquée sur différents supports physiques et numériques. Le tote bag illustre la force du signe en grand format : le logo tient seul, sans texte, et reste immédiatement identifiable. Les déclinaisons de rubriques sont listées en version monochrome pour les usages éditoriaux.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/qg_declinaisons_e257b891.png',
        imageAlt: 'Application de l\'identité QG sur tote bag blanc avec logo rouge, et déclinaisons des rubriques en version monochrome',
        caption: 'Application sur tote bag et déclinaisons des rubriques. Le signe tient seul en grand format, sans texte d\'accompagnement.',
      },

      // ── SECTION 4 : Système typographique ──
      {
        type: 'text',
        title: 'Système typographique',
        body: 'Deux polices structurent l\'identité éditoriale. Assistant, créée par Ilan Nathan, est choisie pour son impact, sa polyvalence et sa modernité : elle habille les titres en majuscules et donne au média sa voix directe. Helvetica Neue, créée par Max Miedinger, est retenue pour son efficacité fonctionnelle et sa facilité de lecture sur les longs contenus texte.',
      },

      // ── SECTION 5 : Application en contexte ──
      {
        type: 'image',
        image: `${CDN}/qg_banner_ead05c8e.png`,
        imageAlt: 'Application du logo QG Média Libre en contexte, fond photographique rouge',
        caption: 'Application en contexte éditorial, le rouge vif et la typographie bold traduisent l\'engagement du média sur tous les supports',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     APPVIZER
  ───────────────────────────────────────────── */
  'appvizer': {
    title: 'Appvizer',
    subtitle: 'Identité visuelle · Logo',
    year: '2020',
    tags: ['Identité visuelle', 'Logo', 'Branding'],
    hero: `${CDN}/appvizer_main_09ae863c.png`,
    heroAlt: 'Identité visuelle Appvizer, logo AV et cartes de visite',
    intro: 'Création de l\'identité visuelle pour Appvizer, lancé en 2015 et devenu la première plateforme de recommandation de logiciels en Europe.',
    sections: [
      {
        type: 'text',
        title: 'Contexte',
        body: 'Appvizer a été lancé officiellement en mai 2015 sur l\'idée simple d\'offrir un espace de visibilité aux logiciels qui peuvent jouer un rôle important dans la croissance des entreprises. Trois ans après, c\'est devenu la première plateforme de recommandation de logiciels en Europe.',
      },
      {
        type: 'metric',
        metrics: [
          { value: '#1', label: 'En Europe' },
          { value: '2015', label: 'Lancement' },
          { value: '∞', label: 'Logiciels référencés' },
        ],
      },
      {
        type: 'image',
        image: `${CDN}/appvizer_main_09ae863c.png`,
        imageAlt: 'Identité visuelle Appvizer, logo AV stylisé, palette vert émeraude et violet, cartes de visite',
        caption: 'Identité complète, logo "AV" stylisé, palette vert émeraude et violet, déclinaison sur cartes de visite',
      },
      {
        type: 'text',
        title: 'Parti pris graphique',
        body: 'L\'identité combine un vert émeraude dynamique et un violet profond pour signifier à la fois la croissance et la confiance. Le logo "AV" stylisé est conçu pour être mémorable et fonctionner à toutes les tailles. Les cartes de visite déclinent l\'identité avec une mise en page aérée et moderne.',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     UPTILAB
  ───────────────────────────────────────────── */
  'uptilab': {
    title: 'Uptilab',
    subtitle: 'Direction artistique · Identité complète',
    year: '2017',
    tags: ['Direction artistique', 'Identité visuelle', 'Print', 'Web'],
    hero: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_site_9427fe92.jpg',
    heroAlt: 'Site web Uptilab affiché sur un iMac, fond montagne avec tagline we test with data',
    intro: 'Refonte complète de l\'identité visuelle d\'Uptilab, agence spécialisée en conversion, test A/B et personnalisation. La mission couvrait l\'ensemble des supports : logo, site web, animations, print et communication interne.',
    sections: [
      // ── SECTION 1 : Contexte ──
      {
        type: 'text',
        title: 'Contexte',
        body: 'Uptilab accompagne les entreprises dans l\'optimisation de leurs dispositifs digitaux grâce à une approche basée sur la data. L\'identité existante ne reflétait plus l\'ambition de l\'agence ni la rigueur de sa méthode. La refonte devait projeter une image à la fois sérieuse et moderne, capable de fonctionner aussi bien sur un site web que sur des supports physiques.',
      },
      {
        type: 'metric',
        metrics: [
          { value: 'Web', label: 'Site & animations' },
          { value: 'Print', label: 'Cartes, carnets, mugs' },
          { value: 'Interne', label: 'Communication équipe' },
        ],
      },

      // ── SECTION 2 : Site web ──
      {
        type: 'text',
        title: 'Site web',
        body: 'La page d\'accueil du site pose immédiatement le positionnement de l\'agence : "we test with data". Le fond photographique de montagne installe une atmosphère de précision et de dépassement. La navigation est sobre, la typographie aérée, et l\'accent jaune-vert vient ponctuer les éléments clés sans surcharger.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_site_9427fe92.jpg',
        imageAlt: 'Site web Uptilab sur iMac, hero avec fond montagne et tagline we test with data, navigation sobre',
        caption: 'Page d\'accueil du site Uptilab, fond photographique, typographie aérée et accent couleur sur les mots-clés',
      },

      // ── SECTION 3 : Supports mobiles ──
      {
        type: 'text',
        title: 'Déclinaison mobile',
        body: 'Les pages de service sont conçues pour être lisibles sur tous les formats. La section A/B testing utilise un fond teal structuré, tandis que la section data adopte un fond jaune-orangé plus chaud. Cette distinction chromatique par rubrique facilite la navigation et renforce la mémorisation des offres.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_mobile_2686cc70.jpg',
        imageAlt: 'Mockups mobiles Uptilab : section ab testing fond teal et section data fond jaune-orangé',
        caption: 'Déclinaison mobile, chaque offre dispose de sa propre couleur de fond pour une identification immédiate',
      },

      // ── SECTION 4 : Supports print ──
      {
        type: 'text',
        title: 'Supports print',
        body: 'L\'identité a été déclinée sur l\'ensemble des supports physiques de l\'agence. Les cartes de visite jouent sur le contraste bleu marine et jaune-vert, signature visuelle d\'Uptilab. Le carnet de notes, en teal, est conçu pour être utilisé au quotidien par les équipes et les clients lors des ateliers.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_cartes_e74266ea.jpg',
        imageAlt: 'Stack de cartes de visite Uptilab, bleu marine avec logo jaune-vert',
        caption: 'Cartes de visite, bleu marine et accent jaune-vert, le contraste renforce la mémorisation de la marque',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_carnet_283d7b36.jpg',
        imageAlt: 'Carnet de notes Uptilab, couverture teal avec titre Retours mit DATA et logo',
        caption: 'Carnet de notes, support atelier pour les équipes et les clients, couverture teal avec logo',
      },

      // ── SECTION 5 : Communication interne ──
      {
        type: 'text',
        title: 'Communication interne',
        body: 'Pour ancrer la culture data dans l\'équipe, une série d\'affiches internes a été créée sur un ton décalé. Chaque affiche détourne une référence culturelle populaire pour parler de data avec humour. "Hakuna ma data", "with big data comes great responsability", "first you get the data, then you get the power" : ces visuels ont été imprimés et affichés dans les locaux.',
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/uptilab_hakuna_aebfee0b.jpg',
        imageAlt: 'Affiche interne Uptilab hakuna ma data, détournement du Roi Lion sur fond sombre',
        caption: '"Hakuna ma data", série d\'affiches internes pour ancrer la culture data dans l\'équipe avec humour',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     L'INTERPRÈTE DE RÊVES — Projet personnel, product building
  ───────────────────────────────────────────── */
  'proveil': {
    title: 'Proveil',
    subtitle: 'Refonte ergonomique et graphique du logiciel interne',
    year: '2023',
    tags: ['UX Research', 'Test Hassenzahl', 'Refonte', 'Outil interne'],
    hero: '/proveil/ui-fiche-approbation.png',
    heroAlt: 'Interface Proveil, comparateur de fiches et approbation',
    intro: "Proveil est un logiciel de récolte, de paramétrage et de saisie de données utilisé par l'ensemble des collaborateurs de l'entreprise Explore : la production (8 services de traitement des données), le service client, les commerciaux ainsi que les managers de chaque service avec leurs usages particuliers.",
    sections: [
      {
        type: 'text',
        title: 'Objectifs',
        body: "L'outil a plus de 12 ans d'existence. Une révision était indispensable en raison des nombreuses évolutions du logiciel et de son interface peu attrayante, nécessitant une maintenance excessive. L'objectif est d'améliorer le quotidien des documentalistes mais surtout d'optimiser leur temps et leur volumétrie de traitement de l'information. Ce service mobilise 3 personnes.",
      },
      {
        type: 'text',
        title: 'Analyse et état des lieux de l\'interface actuelle : Test Hassenzahl',
        body: "Dans un premier temps, j'ai réalisé un test Hassenzahl pour connaître les impressions des utilisateurs et apprivoiser cet outil.",
      },
      {
        type: 'callout',
        title: 'Ce que l\'enquête a remonté',
        calloutText: "✅ Le système reste professionnel donc répond à cette intention\n⚠️ Le système n'est pas captivant. Nous avons une note générale d'attractivité très basse, donc un usage quotidien pénible\n⚠️ Il n'est pas assez clair, efficace, pratique ni assez structuré\n⚠️ Il n'est pas assez contrôlable. Le système est décrit comme challengant, voire décourageant. Les retours nous rapportent une source de frustration profonde\n⚠️ L'outil semble peu présentable, ce qui marque un manque de fierté de la présentation/démonstration lors de la formation des nouveaux collaborateurs. Les retours notent difficilement le maîtriser aisément l'outil.",
      },
      {
        type: 'text',
        title: 'Premières recommandations',
        body: "Alléger le système de toute feature et fonctionnalité superflue pour le rendre plus captivant, plus clair et surtout plus efficace. Revoir l'organisation, la hiérarchisation et composants techniques du système, de manière à le rendre plus structuré, plus contrôlable, plus intuitif et plus fonctionnel (orienté tâche). Revoir la charte du système plus présentable et plus désirable tout en restant professionnel pour un système plus clair et plus agréable.",
      },
      {
        type: 'text',
        title: 'Entretiens d\'usage',
        body: "Au cours des entretiens d'utilisation, les utilisateurs ont pu me partager leurs impressions confirmant le test Hassenzahl. C'était l'occasion de découvrir des usages inédits. En effet, les utilisateurs multiplient les outils pour arriver à leurs fins sur Proveil : partage d'informations sur Teams, recherches externes sur le navigateur, prises de note sur un calepin personnel et une capture d'écran informelle ne pas oser… Or, les usages peuvent et devraient se faire directement sur l'interface de l'outil pour faciliter leur organisation de travail.",
      },
      {
        type: 'quote-grid',
        quotes: [
          { author: 'Claire', tag: 'Process', text: "Il n'y a pas de langage universel — c'est sa popotte interne, on fait comme elle à l'habitude" },
          { author: 'Audrey', tag: 'Mode de traitement', text: "Ce n'est pas intuitif" },
          { author: 'Audrey', tag: 'Faire une approbation', text: "J'aime pas le faire, je trouve ça pénible" },
        ],
      },
      {
        type: 'text',
        body: "Des décisions arbitraires sont prises dans le verbatim de l'encodage de l'information par les utilisateurs. Certains documentalistes adoptent une approche de travail très individuelle sans concertation avec le reste de l'équipe. En outre, Proveil génère une surabondance de fenêtres d'affichage, entraînant une saturation d'informations qui requiert une concentration maximale de la part des utilisateurs afin d'éviter toute confusion. En résumé, Proveil offre une plétore d'éléments non pertinents au mal organisés au lieu de fournir l'essentiel nécessaire pour accompagner leur travail.",
      },
      {
        type: 'text',
        title: 'Analyse quantitative',
        body: "Avant de proposer des solutions, j'ai voulu objectiver le problème : mesurer précisément le temps passé sur chaque type de tâche dans l'interface existante, pour identifier où se concentre la friction.",
      },
      {
        type: 'image',
        image: '/proveil/efficacite-comparatif.png',
        imageAlt: 'Analyse comparative du temps de traitement des tâches, ancien vs nouveau Proveil',
        caption: "Analyse quantitative du temps de réalisation des tâches : ancien système vs nouvelle version Proveil Web",
      },
      {
        type: 'text',
        body: "La constatation révèle que l'approbation représente une tâche particulièrement consommatrice de temps. Cette situation découle de l'utilisation multiple d'outils et de l'affichage simultané de plusieurs fenêtres, imposant ainsi la nécessité de jongler entre elles, alors qu'une intégration simplifiée serait envisageable. Les fiches livrées mettent du temps également, mais ce temps est indispensable à la qualité de l'information générée par la documentation. Cependant, il est possible d'automatiser certaines informations qualifiées afin d'économiser du temps pour les utilisateurs, les orientant ainsi vers un processus de vérification plutôt que de collecte d'informations. Cette automatisation permettrait de ne plus laisser des choix arbitraires se faire et d'harmoniser l'encodage de l'information d'un utilisateur à l'autre.",
      },
      {
        type: 'text',
        title: 'Atelier de co-conception',
        body: "Pendant cet atelier, nous avons identifié les éléments superflus de l'interface. Les participants ont saisi l'opportunité de faire part de leurs besoins en termes de fonctionnalités inexistantes, et nous les avons envisagés ensemble avec eux leur solution. Grâce à cette collaboration, nous avons résolu le problème des affichages simultanés et de la pollution visuelle de Proveil, faisant ainsi place à des fonctionnalités plus pertinentes et essentielles pour améliorer leur interface.",
      },
      {
        type: 'image',
        image: '/proveil/atelier-co-conception.jpg',
        imageAlt: 'Atelier de co-conception avec les documentalistes autour d\'une table',
        caption: "Atelier de co-conception avec l'équipe documentation, autour des besoins et des irritants relevés",
      },
      {
        type: 'image',
        image: '/proveil/ui-diffusion-presse.png',
        imageAlt: 'Interface ancien Proveil annotée, éléments superflus et améliorables entourés en jaune',
        caption: "Exemple d'indicateurs d'éléments superflus et améliorables identifiés en atelier",
      },
      {
        type: 'text',
        title: 'Conception',
        body: "Application des expressions de besoin durant toute l'exploration du service. La focalisation des utilisateurs s'opère au travers d'une interface unique qui intègre les éléments nécessaires pour la consultation de l'information, l'encodage et la qualification élaborée par l'utilisateur. De plus, une liste \"tiroir\" consolide l'ensemble des tâches à exécuter jusqu'à leur complétion.",
      },
      {
        type: 'text',
        body: "À droite, sur un écran secondaire disponible, les utilisateurs peuvent dédoubler à l'aide d'un comparateur pour repérer immédiatement des similitudes entre les fiches déjà livrées sur le même sujet. Cet écran aide également pour les approbations afin de lier deux avis entre eux. Les prototypes ont été soumis à des tests d'utilisation, confirmant la convivialité de cette nouvelle proposition.",
      },
      {
        type: 'image',
        image: '/proveil/ui-fiches-liees.png',
        imageAlt: 'Écran d\'encodage et de consultation avec la liste tiroir',
        caption: "Écran d'encodage et de consultation avec la liste tiroir",
      },
      {
        type: 'image',
        image: '/proveil/ui-fiche-approbation.png',
        imageAlt: 'Écran comparateur pour dédoubler et lier les approbations',
        caption: "Écran comparateur pour dédoubler et lier les approbations",
      },
      {
        type: 'text',
        title: 'Corrélation avant/après',
        body: "Après le développement de l'interface et quelques retours d'usage, les chiffres parlent d'eux-mêmes. Ce n'est pas seulement que les résultats sont au-dessus des espérances. Les utilisateurs déclarent effectivement un temps moyen gagné surtout sur les approbations (le poste le plus lent à traiter) et plus loin sur les tâches, également, réalisées plus rapidement.",
      },
      {
        type: 'metric',
        metrics: [
          { value: '−32%', label: 'Temps de traitement des fiches livrées' },
          { value: '−61%', label: 'Temps de traitement des rejets' },
          { value: '−54%', label: 'Temps de traitement du dédoublonnage' },
          { value: '−37%', label: 'Temps moyen pondéré global' },
          { value: '×1,79', label: 'Facteur multiplicatif de fiches traitées à temps égal' },
          { value: '+45%', label: 'Estimation du volume traitable par heure' },
        ],
      },
      {
        type: 'quote',
        author: 'Service de Planification Urbaine',
        body: "Le développement de notre outil Proveil Web avance avec le déploiement récent d'un nouvel écran de Planification Urbaine et est une avancée pour le traitement des enquêtes publiques et approbations des plans locaux (informatique et UX UI Design). Il permet aujourd'hui d'avoir une vision rapide de ce qui est déjà livré et gagnons un précieux temps pour le dédoublonnage. Les titres, dates, zonage et liens sociétés sont automatisés. Grâce à ces nouvelles fonctionnalités, le temps de traitement des planifications urbaines est quasiment divisé par deux !",
      },
    ],
  },

  'interprete-de-reves': {
    title: "L'Interprète de Rêves",
    subtitle: 'Product Design · Développement · Recherche',
    year: '2025',
    tags: ['Product Design', 'UX', 'Développement', 'IA', 'Product Building'],
    hero: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/reves_hero_29ad58f1.webp',
    heroAlt: "Interface de L'Interprète de Rêves, outil d'analyse symbolique des rêves",
    intro: "Projet personnel conçu et développé de A à Z, de l'idée initiale à la mise en ligne. L'Interprète de Rêves est une application web qui analyse les rêves décrits en langage naturel et en extrait les symboles clés, en s'appuyant sur un corpus de connaissances construit à partir d'ouvrages de référence en psychanalyse et en symbolique.",
    sections: [
      {
        type: 'text',
        title: 'Genèse du projet',
        body: "L'idée est née d'une curiosité personnelle pour la symbolique des rêves et d'une envie de construire un outil utile de bout en bout. Plutôt que de partir d'un brief client, j'ai défini moi-même le périmètre : un outil sobre, analytique, qui ne prétend pas tout savoir mais qui donne des clés de lecture sérieuses. La contrainte principale était de rester honnête sur les limites de l'interprétation automatisée.",
      },
      {
        type: 'callout',
        title: 'Problématique',
        calloutText: '• La plupart des outils d\'interprétation des rêves en ligne sont superficiels ou ésotériques\n• Il n\'existe pas d\'outil sobre et analytique qui s\'appuie sur des références sérieuses (Freud, Jung, symbolique universelle)\n• Comment rendre l\'inconscient accessible sans le trahir ?',
      },
      {
        type: 'text',
        title: 'Recherche & construction du corpus',
        body: "La phase de recherche a été la plus longue. J'ai constitué un corpus de symboles oniriques en croisant plusieurs sources : ouvrages de référence en psychanalyse (Freud, Jung), traités de symbolique universelle, et littérature sur l'analyse des rêves. L'IA m'a aidée à structurer, synthétiser et mettre en forme ce corpus, mais la sélection des sources et la logique éditoriale sont entièrement les miennes. Chaque symbole du dictionnaire a été pensé pour être à la fois rigoureux et accessible.",
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/reves_dico_34cd6920.webp',
        imageAlt: 'Dictionnaire de symboles oniriques : Serpent, Voler, Chute, Eau, Mort, Dents',
        caption: 'Le dictionnaire couvre les grandes catégories symboliques : animaux, éléments, mouvements, corps humain, événements de vie',
      },
      {
        type: 'text',
        title: 'Conception de l\'interface',
        body: "Le parti pris design est volontairement sobre : fond crème, typographie sérif, palette réduite. L'objectif était de créer un espace calme, presque contemplatif, qui invite à la réflexion plutôt qu'à la consommation rapide. Trois espaces distincts ont été définis : l'Interprète (analyse libre), le Dictionnaire (consultation par symbole), et le Guide d'analyse (méthode et grandes écoles de lecture).",
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/reves_guide_9ce919a8.webp',
        imageAlt: "Guide d'exploration, 4 étapes d'analyse et les grandes écoles de lecture (Freud, Jung)",
        caption: "Le Guide d'analyse présente une méthode en 4 étapes et les deux grandes traditions d'interprétation : l'approche freudienne et l'approche jungienne",
      },
      {
        type: 'text',
        title: 'Mise en production autonome',
        body: "Le développement a été réalisé en mode product building, en m'appuyant sur l'IA comme outil d'accélération : génération de code, les arbitrages techniques et la mise en production sur Google Cloud Run. C'est un projet que j'ai porté seule, de la définition du concept à la publication, ce qui m'a permis de comprendre l'ensemble de la chaîne de valeur d'un produit numérique.",
      },
      {
        type: 'text',
        title: 'Ce que l\'outil produit',
        body: "Pour chaque rêve décrit en langage naturel, l'outil génère une analyse structurée en plusieurs couches. D'abord une synthèse thématique globale : le message subconscient du rêve. Ensuite, chaque symbole détecté est identifié et interprété individuellement (ici : le désert, la voiture noire, le frère, les nomades, la mort). Les vecteurs émotionnels sont mesurés : 75 % peur, 70 % confusion, 10 % émerveillement, 25 % clarté. Enfin, deux lectures parallèles sont proposées : une lecture freudienne, une lecture jungienne, suivies d'une consigne de journalisation personnalisée pour inviter à la réflexion.",
      },
      {
        type: 'image',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/reves_resultat_918d9c36.webp',
        imageAlt: "Résultat d'analyse d'un rêve : synthèse thématique, symboles détectés, vecteurs émotionnels, lectures freudienne et jungienne",
        caption: "Exemple de résultat complet : synthèse, 5 symboles interprétés, vecteurs émotionnels mesurés, double lecture Freud / Jung et consigne de journalisation",
      },
      {
        type: 'callout',
        title: 'Et après ?',
        calloutText: "Je travaille en ce moment sur une évolution du produit : passer d'un simple outil d'interprétation à un véritable journal des rêves. L'idée, c'est de permettre à l'utilisateur de garder une trace de ses rêves dans le temps, de détecter des patterns récurrents dans ses symboles, et de construire progressivement une lecture personnalisée de son inconscient. Un produit plus intime, plus continu.",
      },
      {
        type: 'link-button',
        title: 'Voir le projet en ligne',
        href: 'https://l-interpr-te-de-r-ves-683443942804.europe-west2.run.app/',
      },
    ],
  },

  'elements': {
    title: 'Elements',
    subtitle: 'Identité visuelle, Direction artistique',
    year: '2020',
    tags: ['Identité visuelle', 'Logo', 'Direction artistique', 'Print'],
    hero: `${import.meta.env.BASE_URL}elements/hero.jpg`,
    heroAlt: 'Logo Elements sur fond de bois et métal, créations artisanales bois et métal',
    intro: 'Elements, c\'est le projet d\'un artisan passionné qui a refait sa maison et a décidé d\'en faire son métier. Fred propose du mobilier sur mesure et de l\'optimisation d\'habitat en alliant deux matériaux nobles : le bois et le métal. Un vrai homme des champs qui a du goût. Mission : lui créer une identité à la hauteur de son savoir-faire.',
    sections: [
      {
        type: 'image',
        image: `${import.meta.env.BASE_URL}elements/hero.jpg`,
        imageAlt: 'Logo Elements sur fond de bois et métal, créations artisanales bois et métal',
        caption: 'Le logo Elements sur fond de chutes de bois brut, matière première de l\'atelier',
      },
      {
        type: 'text',
        title: 'Le brief',
        body: 'Créer une identité visuelle complète pour une activité artisanale de création bois et métal. L\'enjeu : trouver un équilibre entre la robustesse des matériaux travaillés et l\'élégance du mobilier produit. Le logo devait être à la fois simple, mémorisable et porteur du caractère de Fred.',
      },
      {
        type: 'image',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028937907/vtcIJFvsQaElFUax.png',
        imageAlt: 'Logo Elements déclinaison fond vert forêt avec lignes dorées',
        caption: 'Déclinaison principale du logo sur fond vert forêt, avec les lignes dorées qui évoquent les stries du bois et les découpes du métal',
      },
      {
        type: 'text',
        title: 'Le logo',
        body: 'Le symbole est construit autour d\'un "E" stylisé, dont les barres horizontales rappellent les stries du bois et les découpes nettes du métal. La verticalité de la forme évoque la robustesse, tandis que l\'épure du trait traduit le soin apporté à chaque réalisation. Deux déclinaisons coexistent : une version sombre sur fond clair pour les supports print, une version inversée sur fond vert forêt pour les supports de communication.',
      },
      {
        type: 'image',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028937907/gyGPItxLscnhaUDZ.png',
        imageAlt: 'Charte graphique Elements : palette de couleurs, typographies Gotham Black et Roboto, étiquettes produit',
        caption: 'Charte graphique complète : palette vert forêt, terracotta et crème, typos Gotham Black pour les titres et Roboto pour le contenu, déclinaison sur étiquettes produit',
      },
      {
        type: 'callout',
        title: 'Système typographique',
        calloutText: 'Gotham Black pour les titres et éléments forts, Roboto en trois graisses (bold, regular, italic) pour le contenu. Un duo qui combine la force d\'une typo géométrique américaine avec la lisibilité d\'une sans-serif digitale.',
      },
    ],
  },

  'tao': {
    title: 'TAO',
    subtitle: 'Direction artistique, Logo, Identité visuelle',
    year: '2019',
    tags: ['Direction artistique', 'Identité visuelle', 'Logo', 'Print'],
    hero: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028937907/fMeGzhgPiAzOUaru.webp',
    heroAlt: 'Brand guidelines TAO, la performance énergétique, logo boussole vert et violet',
    intro: 'TAO, c\'est une structure spécialisée dans la performance énergétique. La mission : créer une identité visuelle complète qui incarne à la fois le mouvement, la précision et l\'engagement vers un objectif. Du logo à la charte graphique complète, en passant par les guidelines d\'habillage des images et le système typographique.',
    sections: [
      {
        type: 'text',
        title: 'Le brief',
        body: 'Concevoir une identité visuelle forte pour TAO, une structure orientée performance énergétique. L\'enjeu était de trouver un symbole à la fois dynamique et précis, qui évoque le mouvement et la direction sans tomber dans les codes génériques du secteur énergétique.',
      },
      {
        type: 'text',
        title: 'Le logo',
        body: 'Le symbole central est une boussole stylisée, dont l\'aiguille évoquée par un éclair traduit l\'idée de performance et d\'orientation vers un objectif. Le logotype "tao" en Gotham, avec son "a" ouvert et ses courbes géométriques, équilibre la force du symbole. La tagline "La performance énergétique" ancre le positionnement.',
      },
      {
        type: 'image',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028937907/fMeGzhgPiAzOUaru.webp',
        imageAlt: 'Brand guidelines TAO complets : logo, palette de couleurs, typographies Gotham et Sofia Pro, habillage des images',
        caption: 'Brand guidelines complets : logo boussole, palette vert #2BD081 et bleu-violet #5569D1, typos Gotham et Sofia Pro, règles d\'habillage des images avec les contours de la boussole',
      },
      {
        type: 'text',
        title: 'La palette',
        body: 'Deux couleurs principales structurent l\'identité : le vert électrique #2BD081 (RGB 43, 208, 129) pour l\'énergie et la vitalité, et le bleu-violet #5569D1 (RGB 85, 105, 209) pour la confiance et l\'expertise. Deux teintes secondaires plus douces (#B9EAD3 et #6C82D0) permettent les dégradés et les fonds. Le blanc #FFFFFF et le navy profond #0F1E6F complètent le système.',
      },
      {
        type: 'callout',
        title: 'Système typographique',
        calloutText: 'Gotham pour les titres et éléments forts : ses majuscules architecturales, inspirées de l\'enseigne new-yorkaise, apportent une signalisation claire et une présence affichée. Sofia Pro pour les textes courants : 16 polices, conçue pour la marque, la signalisation et le web. Un duo qui combine l\'impact d\'une géométrique ambitieuse avec la lisibilité d\'une sans-serif digitale.',
      },
      {
        type: 'text',
        title: 'Habillage des images',
        body: 'Les contours de la boussole servent de cadres pour les photos. Ils peuvent aussi créer des compositions dynamiques en gardant la trame colorée de l\'identité. Les jeux de couleurs ne sont pas figés : il est possible d\'intervertir les bleus et verts selon l\'harmonie de l\'ensemble. Les contours et les aiguilles sont simplifiés pour conserver la mise en valeur des images. Pour garder le dynamisme, les images sélectionnées doivent être travaillées de manière à désaturer les contrastes.',
      },
    ],
  },

  'illustrations': {
    title: 'Illustrations, Cyanotype',
    subtitle: 'Création personnelle · Artiste Auteur',
    year: '2020',
    tags: ['Illustration', 'Art', 'Cyanotype'],
    hero: `${CDN}/illustrations_cyanotype_67bc2b38.jpg`,
    heroAlt: 'Série de cyanotypes, œuvres bleues sur fond sombre',
    intro: 'Série d\'œuvres cyanotypées, travail personnel en tant qu\'Artiste Auteur indépendante. Le cyanotype est une technique photographique ancienne qui produit des tirages bleus caractéristiques.',
    sections: [
      {
        type: 'text',
        title: 'Démarche',
        body: 'Chaque œuvre est le résultat d\'une expérimentation avec les propriétés chimiques du cyanotype, la lumière et les matières. La série explore les thèmes de la mémoire, de la trace et de la nature. Les œuvres ont été créées, vendues et exposées.',
      },
      {
        type: 'image',
        image: `${CDN}/illustrations_cyanotype_67bc2b38.jpg`,
        imageAlt: 'Œuvres cyanotypées, série bleue',
        caption: 'Série de cyanotypes, chaque œuvre est unique, résultat d\'une expérimentation avec la lumière',
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

function ProjectSection({ section }: { section: Section }) {
  if (section.type === 'metric' && section.metrics) {
    return (
      <div className="grid grid-cols-3 gap-2 sm:gap-3 my-8 sm:my-10">
        {section.metrics.map((m, i) => (
          <MetricCard key={i} value={m.value} label={m.label} />
        ))}
      </div>
    );
  }

  if (section.type === 'callout') {
    return <Callout title={section.title} text={section.calloutText || ''} />;
  }

  if (section.type === 'link-button') {
    return (
      <div className="my-8 flex flex-col items-start gap-2">
        {section.title && (
          <p
            className="text-xs uppercase tracking-widest mb-1"
            style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
          >
            {section.title}
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
          Ouvrir le site
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
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
            alt={section.imageAlt || ''}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
        {section.caption && (
          <p
            className="text-xs mt-2"
            style={{ color: 'oklch(0.52 0.04 264)', fontFamily: 'DM Sans, sans-serif', fontStyle: 'italic' }}
          >
            {section.caption}
          </p>
        )}
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
            {section.author}
          </span>
          {section.quoteTag && (
            <span className="text-xs" style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}>
              {section.quoteTag}
            </span>
          )}
        </div>
        <p
          className="text-sm italic leading-relaxed"
          style={{ color: 'oklch(0.25 0.05 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
        >
          « {section.body} »
        </p>
      </div>
    );
  }

  if (section.type === 'quote-grid' && section.quotes) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
        {section.quotes.map((q, i) => (
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
            {section.title}
          </h2>
        )}
        {section.body && (
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'oklch(0.33 0.03 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300, maxWidth: '70ch' }}
          >
            {section.body}
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

  if (!project) {
    return (
      <div className="px-10 py-16">
        <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.5 0.04 264)' }}>
          Projet non trouvé.
        </p>
        <Link href="/" className="text-sm mt-4 inline-block" style={{ color: 'oklch(0.42 0.22 264)' }}>
          ← Retour aux projets
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
        tags={project.tags}
        description={project.subtitle}
      />

      {/* Contenu */}
      <main className="content-col max-w-3xl lg:max-w-4xl xl:max-w-5xl py-8 sm:py-14">
        {/* Intro */}
        {project.intro && (
          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: 'oklch(0.28 0.04 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 400, maxWidth: '65ch' }}
          >
            {project.intro}
          </p>
        )}

        {/* Sections */}
        {project.sections.map((section, i) => (
          <ProjectSection key={i} section={section} />
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
            ← Tous les projets
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
            Me contacter
          </Link>
        </div>
      </main>
    </div>
    </>
  );
}
