import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';

const NAV = [
  { href: 'https://www.ridgefieldlions.org/about-lions/', label: 'About Lions' },
  { href: 'https://www.ridgefieldlions.org/event-list/', label: 'Events' },
  { href: 'https://www.ridgefieldlions.org/volunteer_opportunities/', label: 'Volunteer' },
  { href: 'https://www.ridgefieldlions.org/contact-us/', label: 'Contact' }
];

export default function Header(): JSX.Element {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white font-semibold">RFLC</div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold">Ridgefield Lions Club</p>
              <p className="text-xs text-muted-foreground">Ridgefield, WA - We Serve</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {(Array.isArray(NAV) ? NAV : []).map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground hover:text-primary">
                {link.label}
              </Link>
            ))}
            <a href="https://ridgefieldlions.square.site/" className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white">Donate</a>
          </nav>

          <div className="md:hidden">
            <MobileNav links={NAV} />
          </div>
        </div>
      </div>
    </header>
  );
}
