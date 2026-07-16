import { Link } from 'react-router';
import Hero from '../components/home/Hero';
import ImpactSection from '../components/home/ImpactSection';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ConfiguredAction from '../components/ui/ConfiguredAction';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import SectionHeading from '../components/ui/SectionHeading';
import {
  externalLinks,
  images,
  programs,
} from '../content/siteContent';

const accentStyles = {
  plum: 'bg-brand-plum/10 text-brand-plum',
  forest: 'bg-brand-forest/10 text-brand-forest',
  sky: 'bg-brand-sky/20 text-brand-ink',
  sunshine: 'bg-brand-sunshine/25 text-brand-ink',
  coral: 'bg-brand-coral/20 text-brand-plum',
  leaf: 'bg-brand-leaf/20 text-brand-forest',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactSection />

      <section className="bg-white py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we help"
            title="Programs that meet young people where they are"
            description="Each program creates practical opportunities to learn, connect, build confidence, and take part in the community."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <article key={program.id} className="soft-card group overflow-hidden">
                <div className="overflow-hidden">
                  <ResponsiveImage
                    image={program.image}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                    className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${accentStyles[program.accent]}`}>
                    {program.shortName}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-brand-plum">{program.name}</h3>
                  <p className="mt-3 leading-relaxed text-brand-ink/75">{program.summary}</p>
                  <Link
                    to={`/programs#${program.id}`}
                    className="mt-5 inline-flex min-h-11 items-center font-extrabold text-brand-forest underline decoration-brand-sunshine decoration-4 underline-offset-4"
                  >
                    Learn about {program.shortName.toLowerCase()}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-brand-cream py-18 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="organic-frame rotate-[1deg]">
              <ResponsiveImage
                image={images.volunteersAndYouth}
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-5 h-28 w-28 rounded-[60%_40%_55%_45%] bg-brand-sunshine"
              aria-hidden="true"
            />
          </div>
          <div className="relative">
            <SectionHeading
              eyebrow="Rooted in community"
              title="Real support grows through relationships"
              description="Friends of 400 brings young people, families, volunteers, and supporters together around practical needs and positive experiences."
            />
            <p className="mt-6 text-lg leading-relaxed text-brand-ink/75">
              From school supplies and tutoring to scouting, recreation, and neighborhood events,
              the work is personal. It succeeds because people show up consistently and care about
              what happens next.
            </p>
            <Button href="/about" variant="outline" className="mt-8">
              Read our story
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Community partners"
              title="More is possible when organizations work together"
              description="Ongoing partners can contribute funding, supplies, volunteers, facilities, transportation, or professional expertise."
            />
            <p className="mt-6 leading-relaxed text-brand-ink/75">
              Partnership is an active relationship, not simply a logo placement. Friends of 400
              recognizes organizations that make a continuing annual commitment and share our
              expectations for safe, respectful service.
            </p>
            <Button href="/partners" className="mt-8">
              Explore partnerships
            </Button>
          </div>
          <div className="organic-frame -rotate-[1deg]">
            <ResponsiveImage
              image={images.communityPartners}
              sizes="(min-width: 1024px) 50vw, 92vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-brand-forest py-16 text-white sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/15 bg-white/8 p-7 sm:p-9">
              <p className="text-sm font-black uppercase tracking-[.14em] text-brand-sunshine">
                Give your time
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Help a young person thrive</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/80">
                Volunteer needs may include tutoring, coaching, event support, mentoring, and
                practical help behind the scenes.
              </p>
              <ConfiguredAction
                href={externalLinks.volunteerUrl}
                fallbackHref="/contact?topic=volunteer"
                variant="white"
                className="mt-7"
              >
                Volunteer with us
              </ConfiguredAction>
            </div>

            <div className="rounded-[2rem] bg-brand-sunshine p-7 text-brand-ink sm:p-9">
              <p className="text-sm font-black uppercase tracking-[.14em] text-brand-plum">
                Stay connected
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-plum">Get Friends of 400 updates</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-brand-ink/80">
                Hear about program needs, volunteer opportunities, community events, and ways to
                support the work.
              </p>
              <ConfiguredAction
                href={externalLinks.newsletterUrl}
                fallbackHref="/contact#updates"
                className="mt-7"
              >
                Sign up for updates
              </ConfiguredAction>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
