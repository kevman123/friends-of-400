import { useState } from 'react';
import { submitDonation } from '../services/api';
import type { DonationRequest, DonationResponse } from '../types';

export function useDonation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<DonationResponse | null>(null);

  async function donate(data: DonationRequest) {
    setLoading(true);
    setError(null);
    try {
      const res = await submitDonation(data);
      setResponse(res);
      return res;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setError(null);
    setResponse(null);
  }

  return { donate, loading, error, response, reset };
}
