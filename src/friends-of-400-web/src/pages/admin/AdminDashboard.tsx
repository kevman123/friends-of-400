import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Container from '../../components/ui/Container';
import { useAuth } from '../../contexts/AuthContext';
import { getAdminStats } from '../../services/api';
import type { AdminStats } from '../../types';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<AdminStats | null>(null);

  useEffect(() => {
    getAdminStats().then(setStats);
  }, []);

  return (
    <Container className="py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Welcome back, {user?.name}
      </h1>
      <p className="text-gray-500 mb-8">Friends of 400 Admin Dashboard</p>

      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-500">Total Donations</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.totalDonations}</p>
            <Link to="/admin/donations" className="text-sm text-brand-green hover:underline mt-2 inline-block">
              View all
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-500">Total Raised</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">
              ${stats.totalAmount.toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-500">Contact Submissions</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.totalContacts}</p>
            <Link to="/admin/contacts" className="text-sm text-brand-green hover:underline mt-2 inline-block">
              View all
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
}
