import Container from '../components/ui/Container';
import ContactForm from '../components/contact/ContactForm';

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/70 to-brand-blue/70" />
        <div className="absolute inset-0 bg-black/20" />
        <Container className="relative py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            There are so many ways to make a difference. Join us!
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Ways to help */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Ways to Help
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Volunteer',
                    description:
                      'Join our team of volunteers and make a direct impact. We need help with tutoring, events, sports coaching, and more.',
                    icon: '&#9829;',
                  },
                  {
                    title: 'Sponsor a Child',
                    description:
                      'Your sponsorship can provide a child with educational supplies, sports equipment, and essential resources.',
                    icon: '&#9733;',
                  },
                  {
                    title: 'Partner With Us',
                    description:
                      'Organizations and businesses can partner with Friends of 400 to amplify our community impact.',
                    icon: '&#9998;',
                  },
                  {
                    title: 'Spread the Word',
                    description:
                      'Follow us on social media and share our story. Every voice matters in building awareness for our cause.',
                    icon: '&#9742;',
                  },
                ].map((way) => (
                  <div key={way.title} className="flex gap-4">
                    <div
                      className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-2xl shrink-0"
                      dangerouslySetInnerHTML={{ __html: way.icon }}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {way.title}
                      </h3>
                      <p className="text-gray-600">{way.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Connect With Us
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <ContactForm type="volunteer" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
