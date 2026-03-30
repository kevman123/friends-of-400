import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/serve-day/Apr2022Serve4.JPG)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-brand-green/40" />

      <Container className="relative py-24 md:py-36 text-center">
        <Logo className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-6 drop-shadow-lg" />
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
