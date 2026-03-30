import { NavLink, Outlet } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import Container from '../ui/Container';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-lg text-sm font-medium no-underline transition-colors whitespace-nowrap ${
    isActive
      ? 'bg-brand-green text-white'
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  }`;

export default function AdminLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-[60vh]">
      <div className="bg-gray-50 border-b border-gray-200">
        <Container className="py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
              <span className="text-sm font-semibold text-gray-400 mr-1 sm:mr-2 shrink-0">Admin</span>
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
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500 truncate">{user?.email}</span>
              <button
                onClick={logout}
                className="text-gray-500 hover:text-gray-700 cursor-pointer shrink-0"
              >
                Sign out
              </button>
            </div>
          </div>
        </Container>
      </div>
      <Outlet />
    </div>
  );
}
