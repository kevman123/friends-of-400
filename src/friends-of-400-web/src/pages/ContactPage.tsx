import { Link, useSearchParams } from 'react-router';
import ConfiguredAction from '../components/ui/ConfiguredAction';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import {
  externalLinks,
  getContactHref,
  images,
  organization,
} from '../content/siteContent';

const topicLabels: Record<string, string> = {
  volunteer: 'Volunteer inquiry',
  partner: 'Partnership inquiry',
  donation: 'Giving question',
  programs: 'Program question',
  'program-scouts': 'Scouting program question',
  'program-education': 'Education and tutoring question',
  'program-sports': 'Sports and recreation question',
};

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get('topic') ?? '';
  const topicLabel = topicLabels[topic] ?? 'General question';
  const contactHref = getContactHref(topicLabel);
  const hasPublicContact = Boolean(
    organization.contactEmail ||
      organization.contactPhone ||
      externalLinks.contactFormUrl,
  );
  const updatesUrl = externalLinks.newsletterUrl || externalLinks.social.facebook;
  const updatesLabel = externalLinks.newsletterUrl
    ? 'Sign up for updates'
    : 'Follow on Facebook';

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s find the right next step"
        description="Ask about programs, volunteering, partnerships, giving, or staying connected with Friends of 400."
        image={images.volunteersAndYouth}
        accent="coral"
      />

      <section className="bg-white py-18 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={topic ? topicLabel : 'Get in touch'}
              title="How can Friends of 400 help?"
              description="Use the verified contact option below. If a public form or email address has not yet been configured, the site will not pretend to submit a message."
            />

            {hasPublicContact ? (
              <div className="mt-8 space-y-5">
                {organization.contactEmail && (
                  <div className="soft-card p-6">
                    <h3 className="text-xl font-semibold text-brand-plum">Email</h3>
                    <a
                      href={`mailto:${organization.contactEmail}?subject=${encodeURIComponent(topicLabel)}`}
                      className="mt-2 inline-flex min-h-11 items-center break-all font-extrabold text-brand-forest"
                    >
                      {organization.contactEmail}
                    </a>
                  </div>
                )}
                {organization.contactPhone && (
                  <div className="soft-card p-6">
                    <h3 className="text-xl font-semibold text-brand-plum">Phone</h3>
                    <a
                      href={`tel:${organization.contactPhone.replace(/[^\d+]/g, '')}`}
                      className="mt-2 inline-flex min-h-11 items-center font-extrabold text-brand-forest"
                    >
                      {organization.contactPhone}
                    </a>
                  </div>
                )}
                {externalLinks.contactFormUrl && (
                  <div className="soft-card p-6">
                    <h3 className="text-xl font-semibold text-brand-plum">Online contact form</h3>
                    <p className="mt-2 leading-relaxed text-brand-ink/72">
                      Open the configured form to send a message securely.
                    </p>
                    <ConfiguredAction href={contactHref} className="mt-5">
                      Open contact form
                    </ConfiguredAction>
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-8 rounded-[1.75rem] border border-brand-sunshine/70 bg-brand-sunshine/18 p-6">
                <h2 className="text-2xl font-semibold text-brand-plum">Public contact details are being finalized</h2>
                <p className="mt-3 leading-relaxed text-brand-ink/75">
                  No message form is active on this website, and nothing entered here is submitted
                  or stored. A verified email address or contact form will appear once configured.
                </p>
              </div>
            )}
          </div>

          <aside className="rounded-[2rem] bg-brand-cream p-7 sm:p-9">
            <p className="eyebrow">Common destinations</p>
            <h2 className="text-3xl font-semibold text-brand-plum">You may also be looking for</h2>
            <div className="mt-7 grid gap-4">
              {[
                { title: 'Programs', copy: 'Learn about scouting, education, and sports.', href: '/programs' },
                { title: 'Volunteer', copy: 'See the ways people can give their time.', href: '/get-involved' },
                { title: 'Partners', copy: 'Review partner requirements and sponsorship.', href: '/partners' },
                { title: 'Donate', copy: 'Choose a giving category and secure provider link.', href: '/donate' },
              ].map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="rounded-[1.25rem] border border-brand-plum/10 bg-white p-5 no-underline transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-brand-plum">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-ink/70">{item.copy}</p>
                </Link>
              ))}
            </div>

            {(organization.serviceArea || organization.taxId) && (
              <dl className="mt-8 border-t border-brand-plum/10 pt-7">
                {organization.serviceArea && (
                  <div>
                    <dt className="font-extrabold text-brand-plum">Service area</dt>
                    <dd className="mt-1 text-brand-ink/72">{organization.serviceArea}</dd>
                  </div>
                )}
                {organization.taxId && (
                  <div className={organization.serviceArea ? 'mt-5' : ''}>
                    <dt className="font-extrabold text-brand-plum">Tax ID</dt>
                    <dd className="mt-1 text-brand-ink/72">{organization.taxId}</dd>
                  </div>
                )}
              </dl>
            )}
          </aside>
        </Container>
      </section>

      <section id="updates" className="scroll-mt-32 bg-brand-plum py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[.14em] text-brand-sunshine">
              Community updates
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">Stay connected to the work</h2>
            <p className="mt-4 leading-relaxed text-white/78">
              Follow program news, current needs, volunteer opportunities, and community events.
            </p>
          </div>
          <ConfiguredAction
            href={updatesUrl}
            variant="white"
            size="lg"
          >
            {updatesLabel}
          </ConfiguredAction>
        </Container>
      </section>
    </>
  );
}
