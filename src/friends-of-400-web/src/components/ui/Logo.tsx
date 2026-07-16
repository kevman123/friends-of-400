interface LogoProps {
  className?: string;
  variant?: 'wordmark' | 'mark';
}

export default function Logo({ className = '', variant = 'wordmark' }: LogoProps) {
  const isMark = variant === 'mark';

  return (
    <img
      src={isMark ? '/images/logo-tree.png' : '/images/logo-original.png'}
      width={isMark ? 256 : 600}
      height={isMark ? 256 : 462}
      alt={isMark ? '' : 'Friends of 400 — Planting Strong Roots for the Future'}
      className={className}
      aria-hidden={isMark ? 'true' : undefined}
    />
  );
}
