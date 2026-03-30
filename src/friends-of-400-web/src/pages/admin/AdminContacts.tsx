import { useState, useEffect } from 'react';
import Container from '../../components/ui/Container';
import { getAdminContacts } from '../../services/api';
import type { AdminContact } from '../../types';

const typeBadgeClass = (type: string) =>
  `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
    type === 'volunteer' ? 'bg-green-100 text-green-800' :
    type === 'sponsor' ? 'bg-blue-100 text-blue-800' :
    'bg-gray-100 text-gray-800'
  }`;

export default function AdminContacts() {
  const [contacts, setContacts] = useState<AdminContact[]>([]);

  useEffect(() => {
    getAdminContacts().then(setContacts);
  }, []);

  return (
    <Container className="py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Contact Submissions</h1>

      {/* Desktop table */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contacts.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{c.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.phone ?? '—'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={typeBadgeClass(c.type)}>{c.type}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{c.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {contacts.map((c) => (
          <div key={c.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-900">{c.name}</span>
              <span className={typeBadgeClass(c.type)}>{c.type}</span>
            </div>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Date</span>
                <span className="text-gray-700">{c.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Email</span>
                <span className="text-gray-700 truncate ml-4">{c.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Phone</span>
                <span className="text-gray-700">{c.phone ?? '—'}</span>
              </div>
              {c.message && (
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-gray-500 block mb-1">Message</span>
                  <p className="text-gray-700 text-sm">{c.message}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
