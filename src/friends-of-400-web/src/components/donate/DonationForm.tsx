import { useState } from 'react';
import AmountSelector from './AmountSelector';
import { useDonation } from '../../hooks/useDonation';
import Logo from '../ui/Logo';

interface DonationFormProps {
  category?: string;
}

export default function DonationForm({ category = 'General Fund' }: DonationFormProps) {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<number | null>(25);
  const { donate, loading, error, response, reset } = useDonation();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!amount || amount <= 0) return;
    await donate({ category, amount, frequency });
  }

  if (response?.success) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">&#10003;</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you for your generosity!</h3>
        <p className="text-gray-600 mb-6">
          Your ${amount} {frequency === 'monthly' ? 'monthly ' : ''}donation to {category} has been received.
          <br />
          Reference: {response.referenceId}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-brand-green text-white rounded-full font-semibold hover:bg-brand-green-dark transition-colors cursor-pointer"
        >
          Make Another Donation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <Logo className="w-20 h-20 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900">Friends of 400</h3>
        <p className="text-gray-500">{category}</p>
      </div>

      {/* Frequency toggle */}
      <div className="flex rounded-xl border-2 border-gray-200 overflow-hidden mb-6">
        <button
          type="button"
          onClick={() => setFrequency('one-time')}
          className={`flex-1 py-3 font-semibold transition-colors cursor-pointer ${
            frequency === 'one-time'
              ? 'bg-brand-blue text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          One Time
        </button>
        <button
          type="button"
          onClick={() => setFrequency('monthly')}
          className={`flex-1 py-3 font-semibold transition-colors cursor-pointer ${
            frequency === 'monthly'
              ? 'bg-brand-blue text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          Monthly
        </button>
      </div>

      <AmountSelector amount={amount} onAmountChange={setAmount} />

      {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

      <button
        type="submit"
        disabled={!amount || amount <= 0 || loading}
        className="w-full mt-6 py-4 bg-brand-blue text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? 'Processing...' : 'Continue'}
      </button>
    </form>
  );
}
