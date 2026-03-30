import Container from '../ui/Container';
import Button from '../ui/Button';

export default function JoinCommunity() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Placeholder for community photo */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-brand-green-light/30 to-brand-blue/20 aspect-[4/3] flex items-center justify-center">
            <div className="text-center text-gray-400 p-8">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Community photo</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join the community.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether it's sports, tutoring, or community events, our programs
              thrive because of people like you. There are so many ways to get
              involved, and we'd love to connect with you!
            </p>
            <Button href="/get-involved">
              Volunteer with us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
