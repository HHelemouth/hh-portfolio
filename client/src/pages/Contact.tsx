/*
  Contact, Page de contact
  Charte : fond blanc, bleu #3B3FD8 en accent, Jost titres + DM Sans corps
  Responsive : empilé sur mobile, horizontal sur desktop
*/

import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';

const PORTRAIT_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028937907/iXtA6pjR75eUXPkXiWpcD2/portrait_060f4807.jpg';

export default function Contact() {
  return (
    <>
    <SEOHead
      title="Contact"
      description="Contacter Helena Hadjitournos, UX/UI Designer basée en région nantaise."
      canonicalPath="/contact"
    />
    <div className="min-h-screen" style={{ backgroundColor: 'oklch(0.99 0 0)' }}>
      <div className="px-5 sm:px-10 pt-10 sm:pt-14 pb-16 sm:pb-20 max-w-2xl lg:max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs mb-8 sm:mb-10 transition-colors"
          style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
        >
          ← Retour aux projets
        </Link>

        {/* Header — empilé sur mobile, côte à côte sur desktop */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-10 mb-10 sm:mb-12">
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 mb-5 sm:mb-0"
            style={{
              border: '2px solid oklch(0.45 0.22 264)',
              boxShadow: '4px 4px 0 oklch(0.94 0.04 264)',
            }}
          >
            <img
              src={PORTRAIT_URL}
              alt="Helena Hadjitournos"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1
              className="text-2xl sm:text-3xl mb-2"
              style={{ fontFamily: 'Jost, sans-serif', fontWeight: 700, color: 'oklch(0.13 0.02 264)', lineHeight: 1.2 }}
            >
              Travaillons ensemble
            </h1>
            <p
              className="text-sm sm:text-base"
              style={{ color: 'oklch(0.35 0.03 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
            >
              Product Designer en région nantaise, disponible pour des missions freelance ou des opportunités en CDI.
            </p>
          </div>
        </div>

        {/* Infos de contact */}
        <div className="space-y-3 mb-10 sm:mb-12">
          {[
            { label: 'Email', value: 'hhadjitournos@gmail.com', href: 'mailto:hhadjitournos@gmail.com' },
            { label: 'Localisation', value: 'Région nantaise', href: null },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col sm:flex-row sm:items-center sm:gap-6 py-3 sm:py-4 px-4 sm:px-5 rounded-sm gap-1"
              style={{ border: '1px solid oklch(0.91 0.02 264)' }}
            >
              <span
                className="text-xs uppercase tracking-widest sm:w-24 flex-shrink-0"
                style={{ color: 'oklch(0.5 0.04 264)', fontFamily: 'DM Sans, sans-serif' }}
              >
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: 'oklch(0.45 0.22 264)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {item.value}
                </a>
              ) : (
                <span
                  className="text-sm"
                  style={{ color: 'oklch(0.13 0.02 264)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* À propos */}
        <div
          className="p-5 sm:p-7 rounded-sm"
          style={{ backgroundColor: 'oklch(0.94 0.04 264)' }}
        >
          <h2
            className="section-title text-base sm:text-lg mb-4"
            style={{ fontFamily: 'Jost, sans-serif', fontWeight: 700, color: 'oklch(0.13 0.02 264)' }}
          >
            À propos
          </h2>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: 'oklch(0.28 0.05 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
          >
            Product Designer avec plus de 8 ans d'expérience, je travaille sur des produits digitaux B2B et B2C,
            de la phase de discovery jusqu'à l'interface finale. Actuellement UX/UI Designer chez Explore à Carquefou,
            je suis garante de 5 produits digitaux et de leurs design systems.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'oklch(0.28 0.05 264)', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
          >
            Ce qui me motive : être impliquée en amont, définir les bons problèmes avant de les résoudre,
            et travailler sur des produits qui ont un impact réel sur leurs utilisateurs.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            <span className="mission-tag">UX Research</span>
            <span className="mission-tag">Product Design</span>
            <span className="mission-tag">UI Design</span>
            <span className="mission-tag">Design System</span>
            <span className="mission-tag">Discovery</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
