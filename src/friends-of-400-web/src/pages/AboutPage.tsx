import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/70 to-brand-blue/70" />
        <div className="absolute inset-0 bg-black/20" />
        <Container className="relative py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Learn about our mission and the community we serve.
          </p>
        </Container>
      </section>

      {/* Mission section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Friends of 400 is dedicated to planting strong roots for the future
              by investing in the youth of our community. We believe every child
              deserves access to quality education, enriching extracurricular
              activities, and a safe, supportive environment to grow.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Through our programs in education, sports, tutoring, and community
              events, we're building a foundation that empowers young people to
              reach their full potential. From hygiene kits to soccer
              sponsorships, from educational incentives to transportation, we
              address the real needs of real families.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our name represents the more than 400 youth and families we serve,
              and our commitment to each and every one of them. Together with our
              volunteers, donors, and community partners, we're making a lasting
              impact.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button href="/get-involved">Get Involved</Button>
              <Button href="/donate" variant="outline">
                Support Our Work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact stats */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '400+', label: 'Youth Served' },
              { number: '50+', label: 'Volunteers' },
              { number: '6', label: 'Programs' },
              { number: '1', label: 'Community' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-brand-green mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
