import { Link } from 'react-router';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import SectionHeading from '../components/ui/SectionHeading';
import { images, programs } from '../content/siteContent';

const accentStyles = {
  plum: 'bg-brand-plum text-white',
  forest: 'bg-brand-forest text-white',
  sky: 'bg-brand-sky text-brand-ink',
  sunshine: 'bg-brand-sunshine text-brand-ink',
  coral: 'bg-brand-coral/25 text-brand-plum',
  leaf: 'bg-brand-leaf text-brand-ink',
};

const donationRoutes: Record<string, string> = {
  scouts: '/donate/general-fund',
  education: '/donate/educational-incentives',
  sports: '/donate/soccer-sponsorships',
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Places to learn, belong, move, and grow"
        description="Friends of 400 supports young people through practical programs that encourage confidence, connection, and new opportunities."
        image={images.scouts}
        accent="sky"
      />

      <section className="bg-white py-14">
        <Container>
          <nav className="flex flex-wrap justify-center gap-3" aria-label="Jump to a program">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className={`inline-flex min-h-11 items-center rounded-full px-5 py-2 font-extrabold no-underline ${accentStyles[program.accent]}`}
              >
                {program.shortName}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <div className="bg-brand-cream">
        {programs.map((program, index) => (
          <section
            key={program.id}
            id={program.id}
            className={`scroll-mt-32 py-18 sm:py-24 ${index % 2 === 1 ? 'bg-white' : ''}`}
            aria-labelledby={`${program.id}-heading`}
          >
            <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="organic-frame">
                  <ResponsiveImage
                    image={program.image}
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className={`inline-flex rounded-full px-4 py-2 text-sm font-black uppercase tracking-wider ${accentStyles[program.accent]}`}>
                  {program.shortName}
                </span>
                <h2
                  id={`${program.id}-heading`}
                  className="mt-5 text-4xl font-semibold leading-tight text-brand-plum sm:text-5xl"
                >
                  {program.name}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-brand-ink/80">{program.summary}</p>

                <div className="mt-7 rounded-[1.5rem] border border-brand-plum/10 bg-white/80 p-6">
                  <h3 className="text-xl font-semibold text-brand-plum">Who it is for</h3>
                  <p className="mt-2 leading-relaxed text-brand-ink/75">{program.audience}</p>
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-semibold text-brand-plum">What the program can include</h3>
                  <ul className="mt-4 space-y-3">
                    {program.activities.map((activity) => (
                      <li key={activity} className="flex gap-3 text-brand-ink/78">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-leaf" aria-hidden="true" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {(program.schedule || program.location) && (
                  <dl className="mt-7 grid gap-4 sm:grid-cols-2">
                    {program.schedule && (
                      <div>
                        <dt className="font-extrabold text-brand-plum">Schedule</dt>
                        <dd className="mt-1 text-brand-ink/75">{program.schedule}</dd>
                      </div>
                    )}
                    {program.location && (
                      <div>
                        <dt className="font-extrabold text-brand-plum">Location</dt>
                        <dd className="mt-1 text-brand-ink/75">{program.location}</dd>
                      </div>
                    )}
                  </dl>
                )}

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-brand-sky/15 p-5">
                    <h3 className="text-lg font-semibold text-brand-plum">Want to participate?</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">{program.participation}</p>
                    <Link
                      to={`/contact?topic=program-${program.id}`}
                      className="mt-4 inline-flex min-h-11 items-center font-extrabold text-brand-forest"
                    >
                      Ask about this program
                    </Link>
                  </div>
                  <div className="rounded-[1.5rem] bg-brand-sunshine/20 p-5">
                    <h3 className="text-lg font-semibold text-brand-plum">Want to help?</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">{program.support}</p>
                    <Link
                      to={donationRoutes[program.id]}
                      className="mt-4 inline-flex min-h-11 items-center font-extrabold text-brand-plum"
                    >
                      Support this work
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <section className="bg-brand-forest py-16 text-white">
        <Container className="text-center">
          <SectionHeading
            eyebrow="Questions about programs?"
            title="We’ll help you find the right next step"
            description="Ask about current opportunities, participation details, or ways to volunteer with a program."
            align="center"
            className="[&_h2]:text-white [&_p]:text-white/80"
          />
          <Button href="/contact?topic=programs" variant="white" className="mt-8">
            Contact Friends of 400
          </Button>
        </Container>
      </section>
    </>
  );
}
