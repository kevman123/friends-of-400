interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/images/logo-original.png"
      alt="Friends of 400 - Planting Strong Roots for the Future"
      className={className}
    />
  );
}
