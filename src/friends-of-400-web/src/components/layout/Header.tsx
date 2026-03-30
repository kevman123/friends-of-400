import { useState } from 'react';
import { Link } from 'react-router';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import MobileNav from './MobileNav';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <Container className="flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <Logo className="w-12 h-12" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight m-0">
              Friends of 400
            </h1>
            <p className="text-xs text-brand-green italic m-0">
              Planting Strong Roots for the Future
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium no-underline">
            About Us
          </Link>
          <Link to="/get-involved" className="text-gray-600 hover:text-gray-900 font-medium no-underline">
            Get Involved
          </Link>
          <Button href="/donate" size="sm">
            Donate
          </Button>
        </nav>

        <button
          className="md:hidden p-2 text-gray-600 cursor-pointer"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </Container>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
