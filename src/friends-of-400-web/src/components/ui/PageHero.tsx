import type { AccentName, ImageAsset } from '../../types';
import Container from './Container';
import ResponsiveImage from './ResponsiveImage';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: ImageAsset;
  accent?: AccentName;
}

const accentClasses: Record<AccentName, string> = {
  plum: 'bg-brand-plum',
  forest: 'bg-brand-forest',
  sky: 'bg-brand-sky',
  sunshine: 'bg-brand-sunshine',
  coral: 'bg-brand-coral',
  leaf: 'bg-brand-leaf',
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  accent = 'sunshine',
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand-plum/10 bg-brand-cream">
      <div
        className={`absolute -left-16 top-10 h-44 w-44 rounded-full opacity-20 ${accentClasses[accent]}`}
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 bottom-0 h-56 w-56 rounded-[42%_58%_58%_42%/55%_40%_60%_45%] bg-brand-leaf/15"
        aria-hidden="true"
      />
      <Container className={`relative grid gap-10 py-14 md:py-20 ${image ? 'lg:grid-cols-[1.05fr_.95fr] lg:items-center' : ''}`}>
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="text-4xl font-semibold leading-[1.05] text-brand-plum sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-ink/80 sm:text-xl">
            {description}
          </p>
        </div>

        {image && (
          <div className="organic-frame rotate-[1.5deg]">
            <ResponsiveImage
              image={image}
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="aspect-[4/3] h-full w-full object-cover"
              loading="eager"
            />
          </div>
        )}
      </Container>
    </section>
  );
}
