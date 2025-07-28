// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import type { PropsWithChildren } from 'react';

// ✅ ClientWrapper is dynamically imported to avoid hydration mismatch
const ClientWrapper = dynamic(() => import('./client-wrapper'), { ssr: false });

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

// ✅ Define metadata with metadataBase
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.onetapxmedia.com'),
  title: {
    default: 'One Tap Media',
    template: '%s | One Tap Media',
  },
  openGraph: {
    images: ['/og-image.png'], // ✅ replace with your actual OG image
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        {/* Move client-side logic into a wrapper */}
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
