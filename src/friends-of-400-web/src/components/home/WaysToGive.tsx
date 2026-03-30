import { useState } from 'react';
import Container from '../ui/Container';
import GradientCard from '../ui/GradientCard';
import DonationModal from '../donate/DonationModal';

const categories = [
  {
    id: 'general-fund',
    name: 'General Fund',
    description:
      "Contribute to the Friends of 400 General Fund to help meet urgent needs and sustain vital programs for local families and children.",
    gradientFrom: '#42A5F5',
    gradientTo: '#1E88E5',
  },
  {
    id: 'monthly-support',
    name: 'Monthly Support',
    description:
      'Support local families and kids — become a monthly donor to Friends of 400. Your ongoing gift helps provide essential resources.',
    gradientFrom: '#42A5F5',
    gradientTo: '#EC407A',
  },
  {
    id: 'educational-incentives',
    name: 'Educational Incentives',
    description:
      'As students grow through our education programs, we celebrate! From fun prizes to milestone rewards, these incentives keep students motivated.',
    gradientFrom: '#29B6F6',
    gradientTo: '#1E88E5',
  },
  {
    id: 'hygiene-kits',
    name: 'Hygiene Kits',
    description:
      "We're raising funds to create hygiene kits for kids in need. Each kit includes essentials like shampoo, deodorant, toothpaste, and more.",
    gradientFrom: '#66BB6A',
    gradientTo: '#FDD835',
  },
  {
    id: 'soccer-sponsorships',
    name: 'Soccer Sponsorships',
    description:
      "Every child deserves the chance to play. Help ensure every kid can experience the joy of soccer — uniforms, equipment, and league fees.",
    gradientFrom: '#EC407A',
    gradientTo: '#EF5350',
  },
  {
    id: 'transportation-fund',
    name: 'Transportation Fund',
    description:
      "Our organization is growing, and so is our need to get kids where they need to be. We're raising funds to purchase a van for events and programs.",
    gradientFrom: '#F48FB1',
    gradientTo: '#EC407A',
  },
];

export default function WaysToGive() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Ways to Give
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Your generosity makes a difference. Choose a cause that speaks to you
          and help us build a stronger community.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <GradientCard
              key={cat.id}
              title={cat.name}
              description={cat.description}
              gradientFrom={cat.gradientFrom}
              gradientTo={cat.gradientTo}
              onClick={() => setSelectedCategory(cat.id)}
            />
          ))}
        </div>
      </Container>

      <DonationModal
        isOpen={selectedCategory !== null}
        onClose={() => setSelectedCategory(null)}
        category={categories.find((c) => c.id === selectedCategory)?.name ?? 'General Fund'}
      />
    </section>
  );
}
