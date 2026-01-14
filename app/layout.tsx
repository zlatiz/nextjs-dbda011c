import * as React from "react";
import "./globals.css";
import './globals.css';
import { Manrope } from "next/font/google";
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Manrope({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Ridgefield Lions Club | Ridgefield, WA - We Serve',
  description: 'Ridgefield Lions Club — Ridgefield, WA - We Serve. Local Lions Club providing community aid, vision & hearing assistance, scholarships, events and fundraising.',
  keywords: ['Ridgefield Lions','Lions Club','Ridgefield WA','community','donate','volunteer'],
  authors: [{ name: 'Ridgefield Lions Club' }],
  openGraph: {
    title: 'Ridgefield Lions Club | Ridgefield, WA - We Serve',
    description: 'Ridgefield Lions Club — Ridgefield, WA - We Serve. Local Lions Club providing community aid, vision & hearing assistance, scholarships, events and fundraising.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ridgefield Lions Club'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ridgefield Lions Club | Ridgefield, WA - We Serve',
    description: 'Ridgefield Lions Club — Ridgefield, WA - We Serve.'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: 'Ridgefield Lions Club',
    description: 'Ridgefield Lions Club — Ridgefield, WA - We Serve.',
    url: 'https://www.ridgefieldlions.org'
  } as const;

  return (
    <html lang="en-US" className={inter.variable}>
      <head />
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        ></script>
      </body>
    </html>
  );
}
