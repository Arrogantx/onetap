import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Results: Real Growth, Real ROI | One Tap Media',
  description: 'Discover how we\'ve helped businesses across industries achieve remarkable growth through strategic digital marketing that delivers measurable results.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/results',
    siteName: 'One Tap Media',
    title: 'Our Results: Real Growth, Real ROI | One Tap Media',
    description: 'Discover how we\'ve helped businesses across industries achieve remarkable growth through strategic digital marketing that delivers measurable results.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/results-page.png',
        width: 1200,
        height: 630,
        alt: 'Our Results: Real Growth, Real ROI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Results: Real Growth, Real ROI | One Tap Media',
    description: 'Discover how we\'ve helped businesses across industries achieve remarkable growth through strategic digital marketing that delivers measurable results.',
    images: ['https://onetapxmedia.com/images/social-share/results-page.png'],
    creator: '@onetapmedia',
  },
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}