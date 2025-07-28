import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paid Search Management That Converts | One Tap Media',
  description: 'Our Google Ads experts deliver 340% average ROI increase through data-driven optimization, outperforming industry standards by 3x.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/services/paid-search',
    siteName: 'One Tap Media',
    title: 'Paid Search Management That Converts | One Tap Media',
    description: 'Our Google Ads experts deliver 340% average ROI increase through data-driven optimization, outperforming industry standards by 3x.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/paid-search-page.png',
        width: 1200,
        height: 630,
        alt: 'Paid Search Management That Converts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paid Search Management That Converts | One Tap Media',
    description: 'Our Google Ads experts deliver 340% average ROI increase through data-driven optimization, outperforming industry standards by 3x.',
    images: ['https://onetapxmedia.com/images/social-share/paid-search-page.png'],
    creator: '@onetapmedia',
  },
};

export default function PaidSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}