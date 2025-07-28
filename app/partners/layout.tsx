import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner Program: Grow Together with One Tap Media',
  description: 'Join our partner program to expand your service offerings and increase revenue with commission rates that outperform standard affiliate programs.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/partners',
    siteName: 'One Tap Media',
    title: 'Partner Program: Grow Together with One Tap Media',
    description: 'Join our partner program to expand your service offerings and increase revenue with commission rates that outperform standard affiliate programs.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/partners-page.png',
        width: 1200,
        height: 630,
        alt: 'Partner Program: Grow Together with One Tap Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner Program: Grow Together with One Tap Media',
    description: 'Join our partner program to expand your service offerings and increase revenue with commission rates that outperform standard affiliate programs.',
    images: ['https://onetapxmedia.com/images/social-share/partners-page.png'],
    creator: '@onetapmedia',
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}