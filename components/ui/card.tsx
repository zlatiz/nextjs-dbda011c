import React from 'react';

export default function Card({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <article className="rounded-xl border border-border bg-primary/5 p-6 transition-all hover:border-accent/50 hover:bg-primary/10">
      {children}
    </article>
  );
}
