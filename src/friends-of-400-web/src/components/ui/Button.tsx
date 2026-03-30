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
  primary: 'bg-brand-green hover:bg-brand-green-dark text-white',
  secondary: 'bg-brand-blue hover:bg-blue-700 text-white',
  outline: 'border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white',
  white: 'bg-white text-brand-green hover:bg-gray-100',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
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
  const classes = `inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes}>
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
