import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import { publicNavigation } from '../../content/siteContent';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();

      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 cursor-default bg-brand-ink/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-navigation-title"
        className="mobile-nav-surface fixed bottom-0 right-0 top-0 flex w-[min(88vw,22rem)] flex-col overflow-y-auto border-l border-white/10 p-6 text-white shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white shadow-xl">
              <Logo variant="mark" className="h-14 w-14" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.15em] text-brand-sunshine">
                Friends of 400
              </p>
              <h2 id="mobile-navigation-title" className="mt-1 text-2xl font-semibold text-white">
                Explore
              </h2>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 text-3xl leading-none text-white transition hover:border-white/45 hover:bg-white/20"
            aria-label="Close navigation menu"
          >
            &times;
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile navigation">
          <NavLink
            to="/"
            end
            onClick={onClose}
            className={({ isActive }) =>
              `rounded-2xl px-4 py-3 text-lg font-bold no-underline transition ${
                isActive
                  ? 'bg-brand-sunshine text-brand-plum shadow-lg'
                  : 'text-white/85 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            Home
          </NavLink>
          {publicNavigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-lg font-bold no-underline transition ${
                  isActive
                    ? 'bg-brand-sunshine text-brand-plum shadow-lg'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button
            href="/donate"
            variant="sunshine"
            onClick={onClose}
            className="mt-4 w-full"
          >
            Donate
          </Button>
        </nav>

        <div className="mt-auto pt-10">
          <div className="mb-5 flex gap-2" aria-hidden="true">
            <span className="h-2.5 w-10 rounded-full bg-brand-sky" />
            <span className="h-2.5 w-10 rounded-full bg-brand-sunshine" />
            <span className="h-2.5 w-10 rounded-full bg-brand-coral" />
            <span className="h-2.5 w-10 rounded-full bg-brand-leaf" />
          </div>
          <p className="text-sm leading-relaxed text-white/65">
            Planting strong roots through education, scouting, sports, and community support.
          </p>
        </div>
      </div>
    </div>
  );
}
