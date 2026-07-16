import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Friends of 400 | Planting Strong Roots for the Future',
    description:
      'Friends of 400 supports young people through education, scouting, sports, and community support.',
  },
  '/about': {
    title: 'About | Friends of 400',
    description: 'Learn about the mission, story, and values guiding Friends of 400.',
  },
  '/impact': {
    title: 'Academic Impact | Friends of 400',
    description:
      'See how Friends of 400 students are making measurable academic progress and closing grade-level gaps.',
  },
  '/programs': {
    title: 'Programs | Friends of 400',
    description: 'Explore scouting, education and tutoring, and sports programs for young people.',
  },
  '/partners': {
    title: 'Community Partners | Friends of 400',
    description: 'Learn how organizations can become active community partners or program sponsors.',
  },
  '/get-involved': {
    title: 'Get Involved | Friends of 400',
    description: 'Donate, volunteer, partner, or subscribe for Friends of 400 updates.',
  },
  '/donate': {
    title: 'Donate | Friends of 400',
    description: 'Choose a giving category and continue to the configured secure donation provider.',
  },
  '/contact': {
    title: 'Contact | Friends of 400',
    description: 'Contact Friends of 400 about programs, volunteering, partnerships, or giving.',
  },
};

export default function Layout() {
  const location = useLocation();
  const basePath = location.pathname.startsWith('/donate/') ? '/donate' : location.pathname;
  const metadata = pageMetadata[basePath] ?? {
    title: 'Friends of 400',
    description: 'Planting strong roots for the future.',
  };

  useEffect(() => {
    document.title = metadata.title;
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute('content', metadata.description);

    if (location.hash) {
      requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ block: 'start' });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash, metadata.title, metadata.description]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <div className="sr-only" aria-live="polite">
        {metadata.title}
      </div>
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
