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
    <header className="site-header-surface sticky top-0 z-40 border-b border-brand-plum/10 shadow-[0_8px_26px_rgba(36,49,58,.09)]">
      <div
        className="h-1 bg-gradient-to-r from-brand-sky via-brand-leaf via-45% to-brand-sunshine"
        aria-hidden="true"
      />
      <Container className="flex min-h-20 items-center justify-between gap-4 sm:gap-6">
        <Link
          to="/"
          className="group inline-flex shrink-0 items-center gap-3 no-underline"
          aria-label="Friends of 400 home"
        >
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-brand-plum/10 bg-white shadow-[0_8px_22px_rgba(36,49,58,.12)] transition duration-200 group-hover:-rotate-2 group-hover:scale-[1.03]">
            <Logo variant="mark" className="h-12 w-12" />
          </span>
          <span>
            <span className="block font-heading text-xl font-semibold leading-none text-brand-plum sm:text-2xl">
              Friends of 400
            </span>
            <span className="mt-1 hidden text-[0.63rem] font-black uppercase tracking-[0.15em] text-brand-forest sm:block">
              Planting strong roots
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-brand-plum/10 bg-white/75 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,.8),0_8px_24px_rgba(36,49,58,.05)] lg:flex"
          aria-label="Primary navigation"
        >
          {publicNavigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-2.5 py-2.5 text-sm font-bold no-underline transition duration-200 xl:px-3.5 ${
                  isActive
                    ? 'bg-brand-plum text-white shadow-md'
                    : 'text-brand-ink/70 hover:bg-brand-plum/[.07] hover:text-brand-plum'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button href="/donate" size="sm" className="ml-1">
            Donate
          </Button>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-12 min-w-12 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-brand-plum/15 bg-white text-brand-plum shadow-md transition hover:border-brand-plum/30 hover:bg-brand-cream lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span className="h-0.5 w-5 rounded-full bg-brand-sky" />
          <span className="h-0.5 w-5 rounded-full bg-brand-sunshine" />
          <span className="h-0.5 w-5 rounded-full bg-brand-coral" />
        </button>
      </Container>

      <MobileNav isOpen={mobileOpen} onClose={closeMobileMenu} />
    </header>
  );
}
