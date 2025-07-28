import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Services That Drive Real Growth | One Tap Media',
  description: 'From PPC to SEO, our comprehensive services are designed to maximize ROI and deliver measurable business growth, unlike generic one-size-fits-all approaches.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/services',
    siteName: 'One Tap Media',
    title: 'Digital Marketing Services That Drive Real Growth | One Tap Media',
    description: 'From PPC to SEO, our comprehensive services are designed to maximize ROI and deliver measurable business growth, unlike generic one-size-fits-all approaches.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/services-page.png',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Services That Drive Real Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services That Drive Real Growth | One Tap Media',
    description: 'From PPC to SEO, our comprehensive services are designed to maximize ROI and deliver measurable business growth, unlike generic one-size-fits-all approaches.',
    images: ['https://onetapxmedia.com/images/social-share/services-page.png'],
    creator: '@onetapmedia',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}