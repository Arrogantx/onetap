import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Analytics That Drive Better Marketing Decisions | One Tap Media',
  description: 'Our analytics solutions provide 400% clearer insights than standard reporting, turning complex data into actionable marketing strategies.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/services/analytics',
    siteName: 'One Tap Media',
    title: 'Data Analytics That Drive Better Marketing Decisions | One Tap Media',
    description: 'Our analytics solutions provide 400% clearer insights than standard reporting, turning complex data into actionable marketing strategies.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/analytics-page.png',
        width: 1200,
        height: 630,
        alt: 'Data Analytics That Drive Better Marketing Decisions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Analytics That Drive Better Marketing Decisions | One Tap Media',
    description: 'Our analytics solutions provide 400% clearer insights than standard reporting, turning complex data into actionable marketing strategies.',
    images: ['https://onetapxmedia.com/images/social-share/analytics-page.png'],
    creator: '@onetapmedia',
  },
};

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}