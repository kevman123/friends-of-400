interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold leading-tight text-brand-plum sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-brand-ink/80">{description}</p>
      )}
    </div>
  );
}
