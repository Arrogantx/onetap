import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Center | One Tap Media',
  description: 'Find answers to common questions, learn about our services, or contact our support team for assistance with your marketing needs.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/help',
    siteName: 'One Tap Media',
    title: 'Help Center | One Tap Media',
    description: 'Find answers to common questions, learn about our services, or contact our support team for assistance with your marketing needs.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/help-page.png',
        width: 1200,
        height: 630,
        alt: 'Help Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Help Center | One Tap Media',
    description: 'Find answers to common questions, learn about our services, or contact our support team for assistance with your marketing needs.',
    images: ['https://onetapxmedia.com/images/social-share/help-page.png'],
    creator: '@onetapmedia',
  },
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}