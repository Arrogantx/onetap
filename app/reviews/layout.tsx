import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews: Real Results, Real Feedback | One Tap Media',
  description: 'See what our clients say about working with One Tap Media and the results they\'ve achieved through our marketing strategies.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/reviews',
    siteName: 'One Tap Media',
    title: 'Client Reviews: Real Results, Real Feedback | One Tap Media',
    description: 'See what our clients say about working with One Tap Media and the results they\'ve achieved through our marketing strategies.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/reviews-page.png',
        width: 1200,
        height: 630,
        alt: 'Client Reviews: Real Results, Real Feedback',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Reviews: Real Results, Real Feedback | One Tap Media',
    description: 'See what our clients say about working with One Tap Media and the results they\'ve achieved through our marketing strategies.',
    images: ['https://onetapxmedia.com/images/social-share/reviews-page.png'],
    creator: '@onetapmedia',
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}