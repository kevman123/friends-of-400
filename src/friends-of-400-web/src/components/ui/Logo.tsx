interface LogoProps {
  className?: string;
  variant?: 'wordmark' | 'mark';
}

export default function Logo({ className = '', variant = 'wordmark' }: LogoProps) {
  const isMark = variant === 'mark';

  return (
    <img
      src={isMark ? '/images/logo-tree.png' : '/images/logo-original.png'}
      width={isMark ? 160 : 283}
      height={isMark ? 160 : 218}
      alt={isMark ? '' : 'Friends of 400 — Planting Strong Roots for the Future'}
      className={className}
      aria-hidden={isMark ? 'true' : undefined}
    />
  );
}
