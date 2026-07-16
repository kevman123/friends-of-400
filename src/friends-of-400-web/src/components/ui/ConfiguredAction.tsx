import Button from './Button';

interface ConfiguredActionProps {
  href: string;
  fallbackHref?: string;
  children: React.ReactNode;
  unavailableLabel?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ConfiguredAction({
  href,
  fallbackHref,
  children,
  unavailableLabel = 'Link coming soon',
  variant = 'primary',
  size = 'md',
  className = '',
}: ConfiguredActionProps) {
  const destination = href || fallbackHref;

  if (!destination) {
    return (
      <Button variant={variant} size={size} disabled className={className}>
        {unavailableLabel}
      </Button>
    );
  }

  return (
    <Button href={destination} variant={variant} size={size} className={className}>
      {children}
    </Button>
  );
}
