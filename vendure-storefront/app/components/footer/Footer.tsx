import { RootLoaderData } from '~/root';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram } from 'lucide-react';
import { Logo } from '../Logo';
import { TronSeparator } from '~/components/ui/tron-separator';

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Store", href: "/store" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61571779267667",
      icon: Facebook,
    },
    {
      name: "Instagram", 
      href: "https://www.instagram.com/pure__catch",
      icon: Instagram,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@purecatch8",
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
        </svg>
      ),
    },
  ],
};

export default function Footer({
  collections,
}: {
  collections: RootLoaderData['collections'];
}) {
  const { t } = useTranslation();

  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-cyan-500/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Collections */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <Logo />
            </Link>
            <p className="text-gray-400 text-sm">
              Elevating goalkeeper performance through innovative equipment and training solutions.
            </p>
            <div className="mt-4">
              <h3 className="text-cyan-400 font-semibold mb-4">Collections</h3>
              <ul className="space-y-2">
                {collections.map((collection) => (
                  <li key={collection.id}>
                    <Link
                      to={'/collections/' + collection.slug}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {collection.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-400 text-sm not-italic space-y-2">
              <p>Creative Dock</p>
              <p>Malahide Marina</p>
              <p>Malahide, Co. Dublin</p>
              <p className="mt-4">
                <span className="text-cyan-400">Business Hours:</span><br />
                24/7 Online Support<br />
                Office Hours: 08:00 - 18:00
              </p>
              <p className="mt-4">
                <Link to="mailto:info@purecatch.ie" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  info@purecatch.ie
                </Link>
              </p>
            </address>
          </div>
        </div>

        <TronSeparator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Pure Catch. All rights reserved.</p>
            <p className="mt-1">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              {" · "}
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}