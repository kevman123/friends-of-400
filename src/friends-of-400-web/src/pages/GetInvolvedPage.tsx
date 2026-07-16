import Button from '../components/ui/Button';
import ConfiguredAction from '../components/ui/ConfiguredAction';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { externalLinks, images } from '../content/siteContent';

export default function GetInvolvedPage() {
  const involvementPaths = [
    {
      number: '01',
      eyebrow: 'Give',
      title: 'Donate',
      description:
        'Choose a program priority or give where support is needed most.',
      color: 'bg-brand-sunshine/28',
      action: <Button href="/donate">Explore giving options</Button>,
    },
    {
      number: '02',
      eyebrow: 'Serve',
      title: 'Volunteer',
      description:
        'Share time as a tutor, coach, mentor, event helper, or behind-the-scenes volunteer.',
      color: 'bg-brand-sky/18',
      action: (
        <ConfiguredAction
          href={externalLinks.volunteerUrl}
          fallbackHref="/contact?topic=volunteer"
          variant="secondary"
        >
          Volunteer with us
        </ConfiguredAction>
      ),
    },
    {
      number: '03',
      eyebrow: 'Collaborate',
      title: 'Partner or sponsor',
      description:
        'Bring funding, supplies, volunteers, facilities, transportation, or expertise.',
      color: 'bg-brand-coral/16',
      action: (
        <Button href="/partners" variant="outline">
          Explore partnerships
        </Button>
      ),
    },
    {
      number: '04',
      eyebrow: 'Connect',
      title: 'Get updates',
      description:
        'Hear about current needs, program opportunities, and community events.',
      color: 'bg-brand-leaf/16',
      action: (
        <ConfiguredAction
          href={externalLinks.newsletterUrl}
          fallbackHref="/contact#updates"
          variant="outline"
        >
          Sign up for updates
        </ConfiguredAction>
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="There is more than one way to help"
        description="Give, volunteer, partner, or simply stay connected. Choose the path that fits the time and resources you can share."
        image={images.communityKids}
        accent="leaf"
      />

      <section className="bg-white py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Choose your path"
            title="Every contribution can strengthen the work"
            description="Start with the option that feels most natural. Friends of 400 can help you understand the current needs."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {involvementPaths.map((path) => (
              <article
                key={path.title}
                className={`rounded-[2rem] border border-brand-plum/10 p-7 sm:p-9 ${path.color}`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[.14em] text-brand-forest">
                      {path.eyebrow}
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold text-brand-plum">{path.title}</h3>
                  </div>
                  <span className="font-heading text-4xl font-semibold text-brand-plum/22" aria-hidden="true">
                    {path.number}
                  </span>
                </div>
                <p className="mt-4 max-w-xl leading-relaxed text-brand-ink/78">{path.description}</p>
                <div className="mt-7">{path.action}</div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream py-18 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Volunteer"
              title="Bring your skills—and your consistency"
              description="Volunteer roles vary with current program needs. The most helpful volunteers are dependable, encouraging, and ready to follow youth-safety requirements."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Tutoring and academic encouragement',
                'Sports coaching and recreation support',
                'Community event assistance',
                'Mentoring and positive relationship-building',
                'Transportation and logistics support',
                'Supplies, setup, and behind-the-scenes help',
              ].map((role) => (
                <li key={role} className="flex gap-3 rounded-[1.25rem] bg-white p-4 shadow-sm">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-coral" aria-hidden="true" />
                  <span className="leading-relaxed text-brand-ink/78">{role}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-[2rem] bg-brand-forest p-7 text-white sm:p-9">
            <p className="text-sm font-black uppercase tracking-[.14em] text-brand-sunshine">
              Not sure where to start?
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">Tell us how you hope to help</h2>
            <p className="mt-5 leading-relaxed text-white/80">
              Share your interests, availability, and any experience you would like to contribute.
              Friends of 400 can connect you with the most appropriate current opportunity.
            </p>
            <Button href="/contact" variant="white" className="mt-8">
              Contact Friends of 400
            </Button>
          </aside>
        </Container>
      </section>
    </>
  );
}
