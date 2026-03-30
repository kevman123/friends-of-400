import { Link } from 'react-router';
import Button from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { user, login } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-72 bg-white shadow-xl p-6 flex flex-col gap-6">
        <button
          onClick={onClose}
          className="self-end text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
          aria-label="Close menu"
        >
          &times;
        </button>
        <nav className="flex flex-col gap-4">
          <Link
            to="/about"
            onClick={onClose}
            className="text-lg text-gray-700 hover:text-brand-green font-medium no-underline"
          >
            About Us
          </Link>
          <Link
            to="/get-involved"
            onClick={onClose}
            className="text-lg text-gray-700 hover:text-brand-green font-medium no-underline"
          >
            Get Involved
          </Link>
          <Button href="/donate" onClick={onClose}>
            Donate
          </Button>
          {user ? (
            <Link
              to="/admin"
              onClick={onClose}
              className="text-sm text-gray-400 hover:text-gray-600 font-medium no-underline"
            >
              Admin
            </Link>
          ) : (
            <button
              onClick={() => { onClose(); login(); }}
              className="text-sm text-gray-400 hover:text-gray-600 font-medium cursor-pointer text-left"
            >
              Login
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
