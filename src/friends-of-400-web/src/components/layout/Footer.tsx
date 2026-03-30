import { Link } from 'react-router';
import Container from '../ui/Container';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10" />
              <div>
                <h3 className="text-white font-bold text-lg">Friends of 400</h3>
                <p className="text-xs text-brand-green italic">
                  Planting Strong Roots for the Future
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Supporting youth through education, sports, and community programs
              in our neighborhoods.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-gray-400 hover:text-white text-sm no-underline">
                About Us
              </Link>
              <Link to="/get-involved" className="text-gray-400 hover:text-white text-sm no-underline">
                Get Involved
              </Link>
              <Link to="/donate" className="text-gray-400 hover:text-white text-sm no-underline">
                Donate
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              Have questions? We'd love to hear from you.
            </p>
            <Link
              to="/get-involved"
              className="text-brand-green hover:text-brand-green-light text-sm no-underline"
            >
              Get in touch &rarr;
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Friends of 400. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
