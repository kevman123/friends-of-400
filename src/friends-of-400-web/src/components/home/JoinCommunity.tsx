import Container from '../ui/Container';
import Button from '../ui/Button';

export default function JoinCommunity() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/first-day/IMG_0223.JPG"
              alt="Volunteers and children at a Friends of 400 community event"
              className="w-full h-full object-cover aspect-4/3"
            />
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
