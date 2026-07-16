import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import MobileNav from './MobileNav';
import { publicNavigation } from '../../content/siteContent';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMobileMenu() {
    setMobileOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  return (
    <header className="sticky top-0 z-40 border-b border-brand-plum/10 bg-brand-cream/95 shadow-[0_4px_24px_rgba(36,49,58,.06)] backdrop-blur">
      <Container className="flex min-h-24 items-center justify-between gap-6">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center no-underline"
          aria-label="Friends of 400 home"
        >
          <Logo className="h-auto w-[104px] sm:w-[116px]" />
        </Link>

        <nav className="hidden items-center gap-3 lg:flex xl:gap-5" aria-label="Primary navigation">
          {publicNavigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-2 py-3 text-sm font-bold no-underline transition-colors xl:px-3 ${
                  isActive
                    ? 'text-brand-plum underline decoration-brand-coral decoration-4 underline-offset-8'
                    : 'text-brand-ink/75 hover:text-brand-plum'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button href="/donate" size="sm">
            Donate
          </Button>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-12 min-w-12 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-brand-plum/20 bg-white text-brand-plum lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span className="h-0.5 w-5 rounded-full bg-current" />
          <span className="h-0.5 w-5 rounded-full bg-current" />
          <span className="h-0.5 w-5 rounded-full bg-current" />
        </button>
      </Container>

      <MobileNav isOpen={mobileOpen} onClose={closeMobileMenu} />
    </header>
  );
}
