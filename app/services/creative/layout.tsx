import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creative & Design Services That Convert | One Tap Media',
  description: 'Our data-driven creative approach increases engagement by 320%, creating visuals that not only look great but drive measurable business results.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/services/creative',
    siteName: 'One Tap Media',
    title: 'Creative & Design Services That Convert | One Tap Media',
    description: 'Our data-driven creative approach increases engagement by 320%, creating visuals that not only look great but drive measurable business results.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/creative-page.png',
        width: 1200,
        height: 630,
        alt: 'Creative & Design Services That Convert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative & Design Services That Convert | One Tap Media',
    description: 'Our data-driven creative approach increases engagement by 320%, creating visuals that not only look great but drive measurable business results.',
    images: ['https://onetapxmedia.com/images/social-share/creative-page.png'],
    creator: '@onetapmedia',
  },
};

export default function CreativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}