import { useState } from 'react';
import { submitContact } from '../services/api';
import type { ContactRequest, ContactResponse } from '../types';

export function useContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ContactResponse | null>(null);

  async function send(data: ContactRequest) {
    setLoading(true);
    setError(null);
    try {
      const res = await submitContact(data);
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

  return { send, loading, error, response, reset };
}
