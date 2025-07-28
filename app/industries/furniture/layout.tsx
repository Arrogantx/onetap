import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Marketing for Furniture Retailers | One Tap Media',
  description: 'We help furniture retailers choose and implement the right digital tools, platforms, and campaigns to scale sales—in-store and online.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/industries/furniture',
    siteName: 'One Tap Media',
    title: 'Strategic Marketing for Furniture Retailers | One Tap Media',
    description: 'We help furniture retailers choose and implement the right digital tools, platforms, and campaigns to scale sales—in-store and online.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/furniture-retailers.png',
        width: 1200,
        height: 630,
        alt: 'Strategic Marketing for Furniture Retailers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategic Marketing for Furniture Retailers | One Tap Media',
    description: 'We help furniture retailers choose and implement the right digital tools, platforms, and campaigns to scale sales—in-store and online.',
    images: ['https://onetapxmedia.com/images/social-share/furniture-retailers.png'],
    creator: '@onetapmedia',
  },
};

export default function FurnitureRetailersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}