import ConfiguredAction from '../components/ui/ConfiguredAction';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import SectionHeading from '../components/ui/SectionHeading';
import {
  externalLinks,
  images,
  partnerRequirements,
  partners,
  partnershipWays,
} from '../content/siteContent';

const accentStyles = {
  plum: 'bg-brand-plum/10',
  forest: 'bg-brand-forest/10',
  sky: 'bg-brand-sky/20',
  sunshine: 'bg-brand-sunshine/25',
  coral: 'bg-brand-coral/20',
  leaf: 'bg-brand-leaf/20',
};

export default function PartnersPage() {
  const featuredPartners = partners.filter((partner) => partner.featured);
  const updatesUrl = externalLinks.newsletterUrl || externalLinks.social.facebook;
  const updatesLabel = externalLinks.newsletterUrl
    ? 'Sign up for updates'
    : 'Follow on Facebook';

  return (
    <>
      <PageHero
        eyebrow="Community partners"
        title="Partnership means showing up together"
        description="Friends of 400 works with organizations that want to make an active, ongoing contribution to opportunities for young people."
        image={images.communityPartners}
        accent="sunshine"
      />

      <section className="bg-white py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Two ways to support"
            title="Ongoing partners and time-limited sponsors play different roles"
            description="Clear definitions help Friends of 400 recognize support accurately and build relationships that last."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-brand-plum/10 bg-brand-cream p-7 sm:p-9">
              <span className="inline-flex rounded-full bg-brand-forest px-4 py-2 text-sm font-black uppercase tracking-wider text-white">
                Community partner
              </span>
              <h3 className="mt-5 text-3xl font-semibold text-brand-plum">An ongoing annual commitment</h3>
              <p className="mt-4 leading-relaxed text-brand-ink/78">
                A Community Partner contributes funding, in-kind support, volunteers, facilities,
                transportation, or expertise on an ongoing basis. Partners share Friends of 400’s
                mission and youth-safety expectations and confirm the relationship annually.
              </p>
            </article>
            <article className="rounded-[2rem] border border-brand-plum/10 bg-brand-sky/14 p-7 sm:p-9">
              <span className="inline-flex rounded-full bg-brand-plum px-4 py-2 text-sm font-black uppercase tracking-wider text-white">
                Sponsor
              </span>
              <h3 className="mt-5 text-3xl font-semibold text-brand-plum">Support for a defined effort</h3>
              <p className="mt-4 leading-relaxed text-brand-ink/78">
                A Sponsor supports a particular event, campaign, or program for a set period.
                Sponsorship is meaningful, but it does not automatically represent an ongoing
                partnership. Public dollar tiers are established only when approved.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {partners.length > 0 && (
        <section className="bg-brand-cream py-18 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="Our partner community"
              title="Organizations investing in strong roots"
              align="center"
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((partner) => (
                <article key={partner.name} className="soft-card flex min-h-52 flex-col items-center justify-center p-6 text-center">
                  {partner.logo && (
                    <ResponsiveImage
                      image={partner.logo}
                      sizes="(min-width: 1024px) 20vw, 42vw"
                      className="mb-5 max-h-24 w-auto object-contain"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-brand-plum">{partner.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">{partner.summary}</p>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex min-h-11 items-center font-extrabold text-brand-forest"
                    >
                      Visit website
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {featuredPartners.length > 0 && (
        <section className="bg-white py-18 sm:py-24">
          <Container>
            <SectionHeading eyebrow="Partner spotlight" title="What active partnership can make possible" />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {featuredPartners.map((partner) => (
                <article key={partner.name} className="rounded-[2rem] bg-brand-plum p-8 text-white">
                  <h3 className="text-3xl font-semibold text-white">{partner.name}</h3>
                  <p className="mt-4 leading-relaxed text-white/80">{partner.summary}</p>
                  {partner.contribution && (
                    <p className="mt-4 border-l-4 border-brand-sunshine pl-4 leading-relaxed text-white">
                      {partner.contribution}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-brand-cream py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Ways to partner"
            title="Bring the resources your organization can share"
            description="A strong partnership begins with a contribution that is useful, sustainable, and aligned with current needs."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnershipWays.map((way) => (
              <article key={way.title} className={`rounded-[1.75rem] border border-brand-plum/10 p-6 ${accentStyles[way.accent]}`}>
                <h3 className="text-2xl font-semibold text-brand-plum">{way.title}</h3>
                <p className="mt-3 leading-relaxed text-brand-ink/75">{way.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Partnership requirements"
              title="A shared commitment protects the meaning of partnership"
              description="Before an organization is publicly listed as a Community Partner, Friends of 400 confirms the following:"
            />
            <ul className="mt-8 space-y-4">
              {partnerRequirements.map((requirement) => (
                <li key={requirement} className="flex gap-4 rounded-[1.25rem] bg-brand-cream p-4">
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-forest font-black text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="pt-1 leading-relaxed text-brand-ink/80">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside id="become-a-partner" className="scroll-mt-32 rounded-[2rem] bg-brand-plum p-7 text-white sm:p-9">
            <p className="text-sm font-black uppercase tracking-[.14em] text-brand-sunshine">
              Become a partner
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">Start with a conversation</h2>
            <p className="mt-5 leading-relaxed text-white/80">
              Tell Friends of 400 what your organization can contribute, how often you hope to
              engage, and which parts of the mission are the best fit.
            </p>
            <ConfiguredAction
              href={externalLinks.partnerInquiryUrl}
              fallbackHref="/contact?topic=partner"
              variant="white"
              className="mt-8"
            >
              Start a partnership inquiry
            </ConfiguredAction>
            <div className="mt-8 border-t border-white/15 pt-7">
              <h3 className="text-2xl font-semibold text-white">Stay informed</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Follow updates about needs, service opportunities, and community progress.
              </p>
              <ConfiguredAction
                href={updatesUrl}
                variant="outline"
                className="mt-5 border-white text-white hover:bg-white hover:text-brand-plum"
              >
                {updatesLabel}
              </ConfiguredAction>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
