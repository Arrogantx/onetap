import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amazon Marketing That Dominates Your Category | One Tap Media',
  description: 'Our Amazon specialists deliver 320% sales growth through strategic advertising and listing optimization, outperforming marketplace competitors.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/services/amazon',
    siteName: 'One Tap Media',
    title: 'Amazon Marketing That Dominates Your Category | One Tap Media',
    description: 'Our Amazon specialists deliver 320% sales growth through strategic advertising and listing optimization, outperforming marketplace competitors.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/amazon-page.png',
        width: 1200,
        height: 630,
        alt: 'Amazon Marketing That Dominates Your Category',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Marketing That Dominates Your Category | One Tap Media',
    description: 'Our Amazon specialists deliver 320% sales growth through strategic advertising and listing optimization, outperforming marketplace competitors.',
    images: ['https://onetapxmedia.com/images/social-share/amazon-page.png'],
    creator: '@onetapmedia',
  },
};

export default function AmazonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}