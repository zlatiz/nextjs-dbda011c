import Link from 'next/link';

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-border bg-surface py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold">Ridgefield Lions Club</p>
            <p className="text-xs text-muted-foreground">Ridgefield, WA - We Serve</p>
          </div>

          <div className="flex gap-6">
            <Link href="https://www.ridgefieldlions.org/about-lions/" className="text-sm">About</Link>
            <Link href="https://www.ridgefieldlions.org/event-list/" className="text-sm">Events</Link>
            <Link href="https://www.ridgefieldlions.org/contact-us/" className="text-sm">Contact</Link>
            <Link href="https://www.ridgefieldlions.org/volunteer_opportunities/" className="text-sm">Volunteer</Link>
          </div>

          <div className="text-sm text-muted-foreground text-center sm:text-right">
            <p>© 2026 Ridgefield Lions Club. All rights reserved.</p>
            <p className="mt-1">Made with <span aria-hidden>❤</span> by <a href="https://www.graphene-theme.com/" className="underline">Graphene Themes</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
