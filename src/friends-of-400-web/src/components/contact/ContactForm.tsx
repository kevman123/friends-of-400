import { useState } from 'react';
import { useContact } from '../../hooks/useContact';
import type { ContactRequest } from '../../types';

interface ContactFormProps {
  type?: ContactRequest['type'];
}

export default function ContactForm({ type = 'general' }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const { send, loading, error, response, reset } = useContact();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await send({ ...form, type });
  }

  if (response?.success) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">&#9993;</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. We'll get back to you soon.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-brand-green text-white rounded-full font-semibold hover:bg-brand-green-dark transition-colors cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-green"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-green"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-green"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-green resize-none"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-brand-green text-white rounded-xl font-semibold hover:bg-brand-green-dark transition-colors disabled:opacity-50 cursor-pointer"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
