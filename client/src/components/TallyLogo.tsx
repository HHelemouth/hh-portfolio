/*
  TallyLogo — Vrai logo HH d'Helena Hadjitournos
  SVG inline pour fiabilité maximale — coloré en bleu #3B3FD8
*/

interface TallyLogoProps {
  mode?: 'color' | 'outline' | 'white';
  size?: number;
  className?: string;
}

export default function TallyLogo({ size = 72, className = '' }: TallyLogoProps) {
  const height = Math.round(size * (148 / 294));

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 294 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Helena Hadjitournos — logo HH"
    >
      <rect x="56.0187" y="2" width="20.5118" height="143.433" fill="#3B3FD8" stroke="#3B3FD8" strokeWidth="4"/>
      <rect x="172.025" y="2" width="20.5118" height="143.433" fill="#3B3FD8" stroke="#3B3FD8" strokeWidth="4"/>
      <rect x="102.308" y="2" width="20.5118" height="143.433" fill="#3B3FD8" stroke="#3B3FD8" strokeWidth="4"/>
      <rect x="217.891" y="2" width="20.5118" height="143.433" fill="#3B3FD8" stroke="#3B3FD8" strokeWidth="4"/>
      <rect x="4.91036" y="103.668" width="20.5118" height="289.275" transform="rotate(-97.4717 4.91036 103.668)" fill="#3B3FD8" stroke="#3B3FD8" strokeWidth="4"/>
    </svg>
  );
}
