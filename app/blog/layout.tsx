import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Insights That Drive Growth | One Tap Media Blog',
  description: 'Expert insights, proven strategies, and actionable tips from our team of digital marketing professionals, delivering more value than generic marketing blogs.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/blog',
    siteName: 'One Tap Media',
    title: 'Marketing Insights That Drive Growth | One Tap Media Blog',
    description: 'Expert insights, proven strategies, and actionable tips from our team of digital marketing professionals, delivering more value than generic marketing blogs.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/blog-page.png',
        width: 1200,
        height: 630,
        alt: 'Marketing Insights That Drive Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Insights That Drive Growth | One Tap Media Blog',
    description: 'Expert insights, proven strategies, and actionable tips from our team of digital marketing professionals, delivering more value than generic marketing blogs.',
    images: ['https://onetapxmedia.com/images/social-share/blog-page.png'],
    creator: '@onetapmedia',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}