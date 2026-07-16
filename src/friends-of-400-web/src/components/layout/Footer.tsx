import { Link } from 'react-router';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import {
  externalLinks,
  organization,
  publicNavigation,
} from '../../content/siteContent';

export default function Footer() {
  const socialLinks = [
    { label: 'Facebook', href: externalLinks.social.facebook },
    { label: 'Instagram', href: externalLinks.social.instagram },
    { label: 'YouTube', href: externalLinks.social.youtube },
    { label: 'LinkedIn', href: externalLinks.social.linkedin },
  ].filter((item) => item.href);

  return (
    <footer className="bg-brand-plum py-14 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_.75fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="rounded-[1.4rem] bg-brand-cream p-2">
                <Logo variant="mark" className="h-16 w-16" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">{organization.name}</h2>
                <p className="mt-1 text-sm font-bold text-brand-sunshine">{organization.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">
              {organization.mission}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer navigation">
              {publicNavigation.slice(0, 3).map((item) => (
                <Link key={item.to} to={item.to} className="inline-flex min-h-11 items-center text-sm text-white/75 no-underline hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Take action</h3>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer action links">
              <Link to="/get-involved" className="inline-flex min-h-11 items-center text-sm text-white/75 no-underline hover:text-white">
                Volunteer
              </Link>
              <Link to="/partners" className="inline-flex min-h-11 items-center text-sm text-white/75 no-underline hover:text-white">
                Become a partner
              </Link>
              <Link to="/donate" className="inline-flex min-h-11 items-center text-sm text-white/75 no-underline hover:text-white">
                Donate
              </Link>
              <Link to="/contact#updates" className="inline-flex min-h-11 items-center text-sm text-white/75 no-underline hover:text-white">
                Sign up for updates
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              {organization.contactEmail && (
                <a href={`mailto:${organization.contactEmail}`} className="inline-flex min-h-11 items-center text-inherit hover:text-white">
                  {organization.contactEmail}
                </a>
              )}
              {organization.contactPhone && (
                <a
                  href={`tel:${organization.contactPhone.replace(/[^\d+]/g, '')}`}
                  className="inline-flex min-h-11 items-center text-inherit hover:text-white"
                >
                  {organization.contactPhone}
                </a>
              )}
              {organization.serviceArea && <p>{organization.serviceArea}</p>}
              {!organization.contactEmail && !organization.contactPhone && (
                <Link to="/contact" className="inline-flex min-h-11 items-center text-brand-sunshine no-underline hover:text-white">
                  Contact Friends of 400
                </Link>
              )}
            </div>

            {socialLinks.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center text-sm font-bold text-brand-sunshine hover:text-white"
                  >
                    {item.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-7 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Friends of 400. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {organization.taxId && <span>Tax ID: {organization.taxId}</span>}
            {externalLinks.privacyUrl && (
              <a href={externalLinks.privacyUrl} className="inline-flex min-h-11 items-center text-inherit hover:text-white">
                Privacy
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
