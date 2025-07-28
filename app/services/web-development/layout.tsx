import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development That Performs | One Tap Media',
  description: 'Our websites deliver 250% better performance metrics, focusing on speed, conversions, and search visibility rather than just aesthetics.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/services/web-development',
    siteName: 'One Tap Media',
    title: 'Web Development That Performs | One Tap Media',
    description: 'Our websites deliver 250% better performance metrics, focusing on speed, conversions, and search visibility rather than just aesthetics.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/web-development-page.png',
        width: 1200,
        height: 630,
        alt: 'Web Development That Performs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development That Performs | One Tap Media',
    description: 'Our websites deliver 250% better performance metrics, focusing on speed, conversions, and search visibility rather than just aesthetics.',
    images: ['https://onetapxmedia.com/images/social-share/web-development-page.png'],
    creator: '@onetapmedia',
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}