import { useLanguage } from '@/lib/i18n';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full p-0.5 ${className}`}
      style={{ backgroundColor: 'oklch(0.94 0.02 264)' }}
    >
      {(['fr', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="px-2.5 py-1 text-xs rounded-full transition-all"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: lang === l ? 600 : 400,
            backgroundColor: lang === l ? '#3B3FD8' : 'transparent',
            color: lang === l ? '#fff' : 'oklch(0.45 0.04 264)',
            cursor: 'pointer',
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
