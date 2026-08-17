/*
  CV.tsx, Page CV consultable directement sur le site
  Charte : fond blanc, bleu #3B3FD8 en accent, Jost titres + DM Sans corps
  Bilingue FR/EN, piloté par le contexte de langue (voir lib/i18n.tsx)
*/

import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/lib/i18n';

const PORTRAIT_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/portrait_060f4807.jpg';

const SKILLS = {
  fr: ['Gouvernance multi-produits', 'Cadrage de projet', 'Stratégie design', 'Discovery, UX Research, Facilitation', 'Exploration R&D', "Intégration de l'IA", 'Design System', 'Lancement produit', "Encadrement, formation d'apprentis", 'Direction artistique et identité visuelle'],
  en: ['Multi-product governance', 'Project scoping', 'Design strategy', 'Discovery, UX Research, Facilitation', 'R&D exploration', 'AI integration', 'Design System', 'Product launch', 'Mentoring, training juniors', 'Art direction and visual identity'],
};

const TOOLS = {
  fr: [
    { cat: 'Design', items: 'Figma, FigJam, Figma Make, Suite Adobe' },
    { cat: 'IA', items: 'Claude, Manus, Copilot' },
    { cat: 'Recherche & tracking', items: 'Hotjar, UserFlow, Modjo' },
  ],
  en: [
    { cat: 'Design', items: 'Figma, FigJam, Figma Make, Adobe Suite' },
    { cat: 'AI', items: 'Claude, Manus, Copilot' },
    { cat: 'Research & tracking', items: 'Hotjar, UserFlow, Modjo' },
  ],
};

const EXPERIENCE = [
  {
    role: { fr: 'Product Designer', en: 'Product Designer' },
    company: 'Explore, groupe Intescia',
    location: { fr: 'Carquefou', en: 'Carquefou, France' },
    period: { fr: 'Juillet 2022, aujourd\'hui', en: 'July 2022, present' },
    desc: {
      fr: "Unique Product Designer sur un portefeuille de 5 produits SaaS B2B, en appui sur les expertises métier de l'entreprise pour explorer de nouveaux marchés. Design system multi-produits, exploration R&D et IA.",
      en: "Sole Product Designer across a portfolio of 5 B2B SaaS products, working alongside the company's business experts to explore new markets. Multi-product design system, R&D and AI exploration.",
    },
  },
  {
    role: { fr: 'Product Builder IA', en: 'AI Product Builder' },
    company: "L'Interprète de Rêves",
    location: { fr: 'Projet personnel, Nantes', en: 'Personal project, Nantes' },
    period: { fr: '2024, 2026', en: '2024, 2026' },
    desc: {
      fr: "Conception et développement autonome d'une application web d'analyse symbolique des rêves par IA, de l'idée à la mise en production.",
      en: "Independently designed and built an AI-powered web application for symbolic dream analysis, from idea to production.",
    },
  },
  {
    role: { fr: 'Designer Graphique & Artiste Auteur', en: 'Graphic Designer & Independent Artist' },
    company: { fr: 'Indépendante', en: 'Self-employed' },
    location: 'Nantes',
    period: { fr: 'Novembre 2019, aujourd\'hui', en: 'November 2019, present' },
    desc: {
      fr: 'Identités visuelles, logos et illustrations pour des clients variés. Tableaux cyanotypés.',
      en: 'Visual identities, logos and illustrations for a range of clients. Cyanotype artwork.',
    },
  },
  {
    role: 'UX/UI Designer',
    company: 'Fioulreduc',
    location: 'Paris',
    period: { fr: 'Octobre 2016, novembre 2019', en: 'October 2016, November 2019' },
    desc: {
      fr: "Refonte du formulaire de devis, nouvelle fonctionnalité de suivi de commande, refonte de l'image de marque et du tunnel d'achat.",
      en: "Quote form redesign, new order-tracking feature, brand and purchase-funnel redesign.",
    },
  },
  {
    role: 'UX/UI Designer',
    company: 'Jogg.in',
    location: 'Paris',
    period: { fr: 'Juin 2016, octobre 2016', en: 'June 2016, October 2016' },
  },
  {
    role: 'UX/UI Designer',
    company: 'Agence Uptilab',
    location: 'Paris',
    period: { fr: 'Avril 2015, avril 2016', en: 'April 2015, April 2016' },
  },
  {
    role: { fr: 'Designer Graphique', en: 'Graphic Designer' },
    company: 'Estampes',
    location: 'Vern-sur-Seiche',
    period: { fr: 'Avril 2012, juin 2012', en: 'April 2012, June 2012' },
  },
];

const EDUCATION = [
  { degree: { fr: 'Master Direction Artistique Multimédia', en: 'Master in Multimedia Art Direction' }, school: 'École Multimédia, Paris', year: '2016' },
  { degree: { fr: 'Licence Communication Stratégique', en: 'Bachelor in Strategic Communication' }, school: "Sup de Com', Nantes", year: '2012' },
  { degree: { fr: 'BTS Communication Visuelle Multimédia', en: 'Advanced Technician Diploma, Visual & Multimedia Communication' }, school: 'Le Paraclet, Quimper', year: '2011' },
  { degree: { fr: 'BAC Arts Appliqués', en: 'Baccalaureate, Applied Arts' }, school: 'Sainte Geneviève, Rennes', year: '2009' },
];

export default function CV() {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  return (
    <>
    <SEOHead
      title={isEn ? 'CV' : 'CV'}
      description={isEn ? "Helena Hadjitournos's resume, Senior Product Designer." : 'Le CV de Helena Hadjitournos, Senior Product Designer.'}
      canonicalPath="/cv"
    />
    <div className="min-h-screen w-full" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>
      <div className="content-col max-w-3xl lg:max-w-4xl pt-10 sm:pt-14 pb-16 sm:pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs mb-8 sm:mb-10 transition-colors"
          style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
        >
          {isEn ? '← Back to home' : "← Retour à l'accueil"}
        </Link>

        {/* En-tête */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 mb-10 sm:mb-14 pb-8 sm:pb-10" style={{ borderBottom: '1px solid oklch(0.91 0.02 264)' }}>
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 mb-4 sm:mb-0"
            style={{ border: '2px solid oklch(0.45 0.22 264)', boxShadow: '4px 4px 0 oklch(0.94 0.04 264)' }}
          >
            <img src={PORTRAIT_URL} alt="Helena Hadjitournos" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h1
              className="text-2xl sm:text-4xl font-bold mb-1"
              style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)', letterSpacing: '-0.02em' }}
            >
              Helena Hadjitournos
            </h1>
            <p
              className="text-sm sm:text-base mb-3"
              style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
            >
              {isEn ? 'Senior Product Designer' : 'Senior Product Designer'}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs" style={{ color: 'oklch(0.45 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}>
              <span>{isEn ? 'Nantes area, France' : 'Île de Nantes'}</span>
              <a href="mailto:hhadjitournos@gmail.com" style={{ color: 'oklch(0.45 0.22 264)' }}>hhadjitournos@gmail.com</a>
              <span>06 59 29 14 82</span>
            </div>
          </div>
        </div>

        {/* Compétences */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>
            {isEn ? 'Skills' : 'Compétences'}
          </h2>
          <div className="flex flex-wrap gap-2">
            {SKILLS[lang].map((s) => (
              <span key={s} className="mission-tag">{s}</span>
            ))}
          </div>
        </section>

        {/* Outils */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>
            {isEn ? 'Tools' : 'Outils'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TOOLS[lang].map((t) => (
              <div key={t.cat}>
                <p className="text-xs font-semibold mb-1" style={{ color: 'oklch(0.13 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}>{t.cat}</p>
                <p className="text-sm" style={{ color: 'oklch(0.4 0.03 264)', fontFamily: 'DM Sans, sans-serif' }}>{t.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expériences */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>
            {isEn ? 'Experience' : 'Expériences'}
          </h2>
          <div className="space-y-6 sm:space-y-7">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-6">
                <div className="sm:w-40 flex-shrink-0 mb-1 sm:mb-0">
                  <p className="text-xs" style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}>
                    {typeof exp.period === 'string' ? exp.period : exp.period[lang]}
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold" style={{ fontFamily: 'Jost, sans-serif', color: 'oklch(0.13 0.02 264)' }}>
                    {typeof exp.role === 'string' ? exp.role : exp.role[lang]}
                    <span style={{ fontWeight: 400, color: 'oklch(0.45 0.04 264)' }}> — {typeof exp.company === 'string' ? exp.company : exp.company[lang]}</span>
                  </h3>
                  <p className="text-xs mb-2" style={{ color: 'oklch(0.55 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}>
                    {typeof exp.location === 'string' ? exp.location : exp.location[lang]}
                  </p>
                  {exp.desc && (
                    <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.33 0.03 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                      {exp.desc[lang]}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formation */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>
            {isEn ? 'Education' : 'Formation'}
          </h2>
          <div className="space-y-3">
            {EDUCATION.map((ed, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-6">
                <div className="sm:w-40 flex-shrink-0">
                  <p className="text-xs" style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}>{ed.year}</p>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.13 0.02 264)' }}>{ed.degree[lang]}</p>
                  <p className="text-xs" style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}>{ed.school}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activités */}
        <section
          className="p-5 sm:p-7 rounded-sm"
          style={{ backgroundColor: 'oklch(0.94 0.04 264)' }}
        >
          <h2 className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#3B3FD8', fontFamily: 'DM Sans, sans-serif' }}>
            {isEn ? 'Outside work' : 'En dehors du travail'}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.28 0.05 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
            {isEn ? 'Photography, illustration, golf, volleyball.' : 'Photographie, illustration, golf, volley.'}
          </p>
        </section>

        {/* Lien de contact */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 flex justify-between items-center" style={{ borderTop: '1px solid oklch(0.91 0.02 264)' }}>
          <Link href="/projets" className="text-sm transition-opacity hover:opacity-60" style={{ color: 'oklch(0.42 0.22 264)', fontFamily: 'DM Sans, sans-serif' }}>
            {isEn ? 'See all projects →' : 'Voir tous les projets →'}
          </Link>
          <Link
            href="/contact"
            className="text-sm px-4 py-2 rounded-sm transition-opacity hover:opacity-80"
            style={{ backgroundColor: 'oklch(0.42 0.22 264)', color: '#fff', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
          >
            {isEn ? 'Get in touch' : 'Me contacter'}
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
