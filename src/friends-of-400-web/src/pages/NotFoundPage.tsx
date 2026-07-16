import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import Logo from '../components/ui/Logo';

export default function NotFoundPage() {
  return (
    <section className="bg-brand-cream py-24">
      <Container className="text-center">
        <Logo variant="mark" className="mx-auto h-24 w-24" />
        <p className="eyebrow mt-6">Page not found</p>
        <h1 className="text-5xl font-semibold text-brand-plum">This path needs a new root.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-ink/75">
          The page may have moved or the address may be incomplete.
        </p>
        <Button href="/" className="mt-8">
          Return home
        </Button>
      </Container>
    </section>
  );
}
