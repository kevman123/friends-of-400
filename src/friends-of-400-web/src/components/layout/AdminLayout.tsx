import { NavLink, Outlet } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import Container from '../ui/Container';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${
    isActive
      ? 'bg-brand-green text-white'
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  }`;

export default function AdminLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-[60vh]">
      <div className="bg-gray-50 border-b border-gray-200">
        <Container className="flex items-center justify-between py-3">
          <nav className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-400 mr-2">Admin</span>
            <NavLink to="/admin" end className={navLinkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/admin/donations" className={navLinkClass}>
              Donations
            </NavLink>
            <NavLink to="/admin/contacts" className={navLinkClass}>
              Contacts
            </NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{user?.email}</span>
            <button
              onClick={logout}
              className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              Sign out
            </button>
          </div>
        </Container>
      </div>
      <Outlet />
    </div>
  );
}
