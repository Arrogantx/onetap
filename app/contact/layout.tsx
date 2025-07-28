import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact One Tap Media | Let\'s Grow Your Business Together',
  description: 'Ready to take your marketing to the next level? Get in touch with our team of experts and discover how we can help you achieve your growth goals.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/contact',
    siteName: 'One Tap Media',
    title: 'Contact One Tap Media | Let\'s Grow Your Business Together',
    description: 'Ready to take your marketing to the next level? Get in touch with our team of experts and discover how we can help you achieve your growth goals.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/contact-page.png',
        width: 1200,
        height: 630,
        alt: 'Contact One Tap Media | Let\'s Grow Your Business Together',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact One Tap Media | Let\'s Grow Your Business Together',
    description: 'Ready to take your marketing to the next level? Get in touch with our team of experts and discover how we can help you achieve your growth goals.',
    images: ['https://onetapxmedia.com/images/social-share/contact-page.png'],
    creator: '@onetapmedia',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}