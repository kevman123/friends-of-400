import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import ResponsiveImage from '../ui/ResponsiveImage';
import { images, organization } from '../../content/siteContent';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-sky/15"
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 top-0 h-64 w-64 rounded-[44%_56%_35%_65%/55%_35%_65%_45%] bg-brand-sunshine/25"
        aria-hidden="true"
      />
      <div className="dot-pattern absolute bottom-4 left-[45%] hidden h-36 w-52 opacity-50 lg:block" aria-hidden="true" />

      <Container className="relative grid gap-12 py-14 sm:py-18 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:py-24">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Logo variant="mark" className="h-16 w-16 sm:h-20 sm:w-20" />
            <p className="max-w-[13rem] text-sm font-black uppercase tracking-[0.13em] text-brand-forest">
              {organization.tagline}
            </p>
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] text-brand-plum sm:text-6xl lg:text-7xl">
            Every child deserves room to grow.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-ink/80 sm:text-xl">
            {organization.mission}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/donate" size="lg">
              Donate today
          </Button>
            <Button href="/programs" variant="outline" size="lg">
              Explore programs
          </Button>
        </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-extrabold text-brand-ink/70" aria-label="Program focus areas">
            <li>Scouting</li>
            <li>Education</li>
            <li>Sports</li>
            <li>Community support</li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
          <div className="organic-frame relative z-10 -rotate-[1.5deg]">
            <ResponsiveImage
              image={images.communityKids}
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="aspect-[4/3] h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 z-20 max-w-[15rem] rotate-[-2deg] rounded-[1.5rem] border border-brand-plum/10 bg-white p-4 shadow-xl sm:-left-8 sm:p-5">
            <p className="font-heading text-xl font-semibold leading-tight text-brand-plum">
              Growing confidence. Building community.
            </p>
          </div>
          <div
            className="absolute -right-4 -top-5 h-24 w-24 rounded-[35%_65%_55%_45%] bg-brand-coral sm:-right-8 sm:h-32 sm:w-32"
            aria-hidden="true"
          />
        </div>
      </Container>
    </section>
  );
}
