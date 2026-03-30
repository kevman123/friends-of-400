import { useState, useEffect } from 'react';
import Container from '../../components/ui/Container';
import { getAdminDonations } from '../../services/api';
import type { AdminDonation } from '../../types';

export default function AdminDonations() {
  const [donations, setDonations] = useState<AdminDonation[]>([]);

  useEffect(() => {
    getAdminDonations().then(setDonations);
  }, []);

  return (
    <Container className="py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Donations</h1>

      {/* Desktop table */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {donations.map((d) => (
                <tr key={d.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{d.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{d.donorName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{d.donorEmail}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{d.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">${d.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{d.frequency}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 font-mono text-xs">{d.referenceId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {donations.map((d) => (
          <div key={d.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-900">{d.donorName}</span>
              <span className="text-lg font-bold text-gray-900">${d.amount.toFixed(2)}</span>
            </div>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Date</span>
                <span className="text-gray-700">{d.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Email</span>
                <span className="text-gray-700 truncate ml-4">{d.donorEmail}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Category</span>
                <span className="text-gray-700">{d.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Frequency</span>
                <span className="text-gray-700 capitalize">{d.frequency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Reference</span>
                <span className="text-gray-400 font-mono text-xs">{d.referenceId}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
