import { useState } from 'react';
import Modal from '../ui/Modal';
import Logo from '../ui/Logo';
import AmountSelector from './AmountSelector';
import { useDonation } from '../../hooks/useDonation';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

export default function DonationModal({ isOpen, onClose, category }: DonationModalProps) {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<number | null>(25);
  const { donate, loading, error, response, reset } = useDonation();

  function handleClose() {
    reset();
    setAmount(25);
    setFrequency('one-time');
    onClose();
  }

  async function handleSubmit() {
    if (!amount || amount <= 0) return;
    await donate({ category, amount, frequency });
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-6 pt-8 text-center">
        <Logo className="w-16 h-16 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-gray-900">Friends of 400</h3>
        <p className="text-sm text-gray-500 mb-6">{category}</p>

        {response?.success ? (
          <div className="py-8">
            <div className="text-4xl mb-4">&#10003;</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h4>
            <p className="text-gray-600 mb-6">
              Your donation of ${amount} has been received.
              <br />
              Reference: {response.referenceId}
            </p>
            <button
              onClick={handleClose}
              className="w-full py-3 bg-brand-green text-white rounded-xl font-semibold hover:bg-brand-green-dark transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Frequency toggle */}
            <div className="flex rounded-xl border-2 border-gray-200 overflow-hidden mb-6">
              <button
                type="button"
                onClick={() => setFrequency('one-time')}
                className={`flex-1 py-2.5 font-semibold text-sm transition-colors cursor-pointer ${
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
                className={`flex-1 py-2.5 font-semibold text-sm transition-colors cursor-pointer ${
                  frequency === 'monthly'
                    ? 'bg-brand-blue text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                Monthly
              </button>
            </div>

            <AmountSelector amount={amount} onAmountChange={setAmount} />

            {error && (
              <p className="text-red-500 text-sm mt-3">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={!amount || amount <= 0 || loading}
              className="w-full mt-6 py-3.5 bg-brand-blue text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? 'Processing...' : 'Continue'}
            </button>
          </>
        )}
      </div>
    </Modal>
  );
}
