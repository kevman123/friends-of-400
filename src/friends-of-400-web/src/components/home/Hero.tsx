import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import ResponsiveImage from '../ui/ResponsiveImage';
import { images, organization } from '../../content/siteContent';

export default function Hero() {
  return (
    <section className="hero-surface relative isolate overflow-hidden text-white">
      <div
        className="absolute -left-24 bottom-8 h-72 w-72 rotate-12 rounded-[62%_38%_48%_52%/42%_56%_44%_58%] border border-white/10 bg-brand-sky/15"
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 -top-20 h-80 w-80 rounded-[44%_56%_35%_65%/55%_35%_65%_45%] border border-white/10 bg-brand-coral/20"
        aria-hidden="true"
      />
      <div
        className="hero-light-dots absolute left-[42%] top-8 hidden h-44 w-56 rotate-6 opacity-55 lg:block"
        aria-hidden="true"
      />

      <Container className="relative grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:py-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 py-2 pl-2 pr-5 shadow-[0_14px_40px_rgba(20,12,30,.18)] backdrop-blur-sm">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white shadow-lg">
              <Logo variant="mark" className="h-12 w-12" />
            </span>
            <p className="max-w-[14rem] text-xs font-black uppercase tracking-[0.14em] text-white/85 sm:text-sm">
              {organization.tagline}
            </p>
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] text-white sm:text-6xl lg:text-7xl">
            Every child deserves{' '}
            <span className="relative inline-block text-brand-sunshine">
              <span className="relative z-10">room to grow.</span>
              <span
                className="absolute inset-x-1 bottom-1 h-2 -rotate-1 rounded-full bg-brand-coral/70"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            {organization.mission}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/donate" variant="sunshine" size="lg">
              Donate today
            </Button>
            <Button href="/programs" variant="inverse" size="lg">
              Explore programs
            </Button>
          </div>
          <ul
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-extrabold text-white/75"
            aria-label="Program focus areas"
          >
            <li className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-sky" aria-hidden="true" />
              Scouting
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-sunshine" aria-hidden="true" />
              Education
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-coral" aria-hidden="true" />
              Sports
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-leaf" aria-hidden="true" />
              Community support
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
          <div
            className="absolute -inset-3 rotate-[2.5deg] rounded-[3rem_5rem_3.5rem_5.5rem] bg-gradient-to-br from-brand-sunshine via-brand-coral to-brand-sky opacity-90 shadow-[0_32px_80px_rgba(18,10,28,.28)]"
            aria-hidden="true"
          />
          <div className="organic-frame relative z-10 -rotate-[1.5deg]">
            <ResponsiveImage
              image={images.communityKids}
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="aspect-[4/3] h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-7 -left-2 z-20 max-w-[16rem] rotate-[-2deg] rounded-[1.5rem] border border-white/35 bg-brand-sunshine p-4 shadow-[0_18px_45px_rgba(18,10,28,.24)] sm:-left-8 sm:p-5">
            <p className="font-heading text-xl font-semibold leading-tight text-brand-plum">
              Growing confidence. Building community.
            </p>
          </div>
          <div
            className="absolute -right-4 -top-5 z-20 h-24 w-24 rounded-[35%_65%_55%_45%] border-[6px] border-white/80 bg-brand-coral shadow-xl sm:-right-8 sm:h-32 sm:w-32"
            aria-hidden="true"
          />
        </div>
      </Container>

      <div
        className="h-2 bg-gradient-to-r from-brand-sky via-brand-sunshine to-brand-coral"
        aria-hidden="true"
      />
    </section>
  );
}
