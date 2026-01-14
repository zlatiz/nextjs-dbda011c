"use client";
import { useState } from 'react';
import Link from 'next/link';

export function MobileNav({ links }: { links: Array<{ href: string; label: string }> }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-2 bg-muted rounded-md">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-background shadow-lg p-4">
          {(Array.isArray(links) ? links : []).map(link => (
            <a key={link.href} href={link.href} className="block py-2 text-center font-medium">{link.label}</a>
          ))}
          <a href="https://ridgefieldlions.square.site/" className="block mt-2 py-2 text-center font-semibold bg-accent text-white rounded-lg">Donate</a>
        </nav>
      )}
    </div>
  );
}

export default MobileNav;
