import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversion Rate Optimization That Maximizes Your Traffic Value | One Tap Media',
  description: 'Our systematic CRO approach increases conversion rates by 180% on average, turning more visitors into customers without increasing ad spend.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/services/conversion-optimization',
    siteName: 'One Tap Media',
    title: 'Conversion Rate Optimization That Maximizes Your Traffic Value | One Tap Media',
    description: 'Our systematic CRO approach increases conversion rates by 180% on average, turning more visitors into customers without increasing ad spend.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/conversion-optimization-page.png',
        width: 1200,
        height: 630,
        alt: 'Conversion Rate Optimization That Maximizes Your Traffic Value',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversion Rate Optimization That Maximizes Your Traffic Value | One Tap Media',
    description: 'Our systematic CRO approach increases conversion rates by 180% on average, turning more visitors into customers without increasing ad spend.',
    images: ['https://onetapxmedia.com/images/social-share/conversion-optimization-page.png'],
    creator: '@onetapmedia',
  },
};

export default function ConversionOptimizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}