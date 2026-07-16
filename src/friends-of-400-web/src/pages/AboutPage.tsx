import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import PageHero from '../components/ui/PageHero';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import SectionHeading from '../components/ui/SectionHeading';
import {
  images,
  impactStats,
  leadership,
  organization,
} from '../content/siteContent';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Friends of 400"
        title="Strong roots begin with people who care"
        description="Friends of 400 connects young people with practical support, positive experiences, and a community committed to their future."
        image={images.volunteersAndYouth}
        accent="coral"
      />

      <section className="bg-white py-18 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="organic-frame -rotate-[1deg]">
            <ResponsiveImage
              image={images.educationSupport}
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Our story" title="A local commitment to young people" />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-brand-ink/78">
              <p>
                Friends of 400 was created around a straightforward belief: every child deserves
                access to education, enriching activities, and a safe, supportive place to grow.
              </p>
              <p>
                The organization responds to practical needs through tutoring, school support,
                scouting, sports, transportation assistance, essential supplies, and community
                experiences that help young people feel seen and encouraged.
              </p>
              <p>
                Volunteers, donors, families, and community partners make that work possible.
                Together, they create the relationships and resources that help children build
                confidence and imagine what comes next.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What guides us"
            title="Professional care with a joyful, child-centered spirit"
            description="The details vary by program, but these commitments remain constant."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Opportunity',
                description:
                  'Young people should have meaningful chances to learn, participate, lead, and discover their strengths.',
                color: 'bg-brand-sky/20',
              },
              {
                title: 'Relationships',
                description:
                  'Consistent, caring adults and community connections help children feel that they belong.',
                color: 'bg-brand-coral/18',
              },
              {
                title: 'Practical support',
                description:
                  'Supplies, transportation, fees, tutoring, and encouragement can remove everyday barriers to growth.',
                color: 'bg-brand-sunshine/25',
              },
            ].map((value) => (
              <article key={value.title} className={`rounded-[1.75rem] border border-brand-plum/10 p-7 ${value.color}`}>
                <h3 className="text-2xl font-semibold text-brand-plum">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-brand-ink/78">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {organization.serviceArea && (
        <section className="bg-white py-16">
          <Container className="text-center">
            <p className="eyebrow">Where we serve</p>
            <h2 className="text-3xl font-semibold text-brand-plum">{organization.serviceArea}</h2>
          </Container>
        </section>
      )}

      {impactStats.length > 0 && (
        <section className="bg-brand-forest py-16 text-white" aria-labelledby="about-impact-heading">
          <Container>
            <h2 id="about-impact-heading" className="text-center text-3xl font-semibold text-white">
              Verified community impact
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-4xl font-semibold text-brand-sunshine">{stat.value}</p>
                  <p className="mt-2 font-bold">{stat.label}</p>
                  {stat.context && <p className="mt-1 text-sm text-white/85">{stat.context}</p>}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {leadership.length > 0 && (
        <section className="bg-white py-18 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="Leadership"
              title="The people guiding Friends of 400"
              align="center"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {leadership.map((member) => (
                <article key={member.name} className="soft-card overflow-hidden p-7 text-center">
                  {member.photo && (
                    <ResponsiveImage
                      image={member.photo}
                      sizes="(min-width: 1024px) 28vw, 44vw"
                      className="mx-auto mb-5 aspect-square w-40 rounded-full object-cover"
                    />
                  )}
                  <h3 className="text-2xl font-semibold text-brand-plum">{member.name}</h3>
                  <p className="mt-1 font-bold text-brand-forest">{member.role}</p>
                  {member.bio && <p className="mt-4 leading-relaxed text-brand-ink/75">{member.bio}</p>}
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-brand-plum py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[.14em] text-brand-sunshine">
              Grow with us
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
              Help create the next positive opportunity for a young person.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/get-involved" variant="white">
              Get involved
            </Button>
            <Button href="/donate" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-plum">
              Support the work
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
