import { useParams } from 'react-router';
import Container from '../components/ui/Container';
import DonationForm from '../components/donate/DonationForm';

const categoryNames: Record<string, string> = {
  'general-fund': 'General Fund',
  'monthly-support': 'Monthly Support',
  'educational-incentives': 'Educational Incentives',
  'hygiene-kits': 'Hygiene Kits',
  'soccer-sponsorships': 'Soccer Sponsorships',
  'transportation-fund': 'Transportation Fund',
};

export default function DonatePage() {
  const { category } = useParams();
  const categoryName = category ? categoryNames[category] ?? 'General Fund' : 'General Fund';

  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/70 to-brand-yellow/70" />
        <div className="absolute inset-0 bg-black/20" />
        <Container className="relative py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Donate</h1>
          <p className="text-lg text-gray-200">
            Your generosity changes lives. Every dollar makes a difference.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-lg mx-auto">
            <DonationForm category={categoryName} />
          </div>
        </Container>
      </section>
    </>
  );
}
