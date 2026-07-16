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
        className="fixed inset-0 cursor-default bg-brand-ink/55"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-navigation-title"
        className="fixed bottom-0 right-0 top-0 flex w-[min(88vw,22rem)] flex-col overflow-y-auto bg-brand-cream p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <Logo variant="mark" className="h-16 w-16" />
            <h2 id="mobile-navigation-title" className="mt-2 text-2xl font-semibold text-brand-plum">
              Explore
            </h2>
          </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-brand-plum/20 bg-white text-3xl leading-none text-brand-plum"
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
              `rounded-2xl px-4 py-3 text-lg font-bold no-underline ${
                isActive ? 'bg-brand-plum text-white' : 'text-brand-ink hover:bg-white'
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
                `rounded-2xl px-4 py-3 text-lg font-bold no-underline ${
                  isActive ? 'bg-brand-plum text-white' : 'text-brand-ink hover:bg-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button href="/donate" onClick={onClose} className="mt-3 w-full">
            Donate
          </Button>
        </nav>

        <p className="mt-auto pt-10 text-sm leading-relaxed text-brand-ink/70">
          Planting strong roots through education, scouting, sports, and community support.
        </p>
      </div>
    </div>
  );
}
