import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Placeholder gradient background - replace with actual hero image */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/80 to-brand-blue/80" />
      <div className="absolute inset-0 bg-black/30" />

      <Container className="relative py-24 md:py-36 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Planting Strong Roots
          <br />
          <span className="text-brand-green-light">for the Future</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Friends of 400 supports youth through education, sports, tutoring,
          and community programs. Together, we're building stronger neighborhoods.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="/donate" size="lg">
            Donate Now
          </Button>
          <Button href="/get-involved" variant="white" size="lg">
            Get Involved
          </Button>
        </div>
      </Container>
    </section>
  );
}
