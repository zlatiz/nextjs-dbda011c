import Link from 'next/link';
import React from 'react';

export default function Button({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' }): JSX.Element {
  const base = 'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all';
  const primary = 'bg-accent text-white hover:bg-accent/90';
  const secondary = 'border border-border bg-transparent text-foreground hover:bg-muted';
  return (
    <Link href={href} className={`${base} ${variant === 'primary' ? primary : secondary}`}>
      {children}
    </Link>
  );
}
