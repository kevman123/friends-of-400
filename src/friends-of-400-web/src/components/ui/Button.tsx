import { Link } from 'react-router';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    'border-2 border-brand-plum bg-brand-plum text-white shadow-[0_8px_0_rgba(82,37,95,.14)] hover:-translate-y-0.5 hover:bg-brand-plum-dark',
  secondary:
    'border-2 border-brand-forest bg-brand-forest text-white shadow-[0_8px_0_rgba(47,111,62,.14)] hover:-translate-y-0.5 hover:bg-brand-forest-dark',
  outline:
    'border-2 border-brand-plum bg-transparent text-brand-plum hover:-translate-y-0.5 hover:bg-brand-plum hover:text-white',
  white:
    'border-2 border-white bg-white text-brand-plum hover:-translate-y-0.5 hover:bg-brand-cream',
};

const sizeStyles: Record<string, string> = {
  sm: 'min-h-11 px-4 py-2 text-sm',
  md: 'min-h-12 px-6 py-3 text-base',
  lg: 'min-h-14 px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-bold no-underline transition duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'cursor-not-allowed opacity-55 shadow-none' : 'cursor-pointer'} ${className}`;

  if (href) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
        >
          {children}
          {href.startsWith('http') && <span className="sr-only"> (opens in a new tab)</span>}
        </a>
      );
    }

    return (
      <Link to={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
