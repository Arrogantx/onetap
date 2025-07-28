import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Marketing Automation That Drives Consistent Revenue | One Tap Media',
  description: 'Our email marketing strategies deliver 400% ROI through advanced segmentation and personalization, outperforming industry benchmarks.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/services/email-marketing',
    siteName: 'One Tap Media',
    title: 'Email Marketing Automation That Drives Consistent Revenue | One Tap Media',
    description: 'Our email marketing strategies deliver 400% ROI through advanced segmentation and personalization, outperforming industry benchmarks.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/email-marketing-page.png',
        width: 1200,
        height: 630,
        alt: 'Email Marketing Automation That Drives Consistent Revenue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Marketing Automation That Drives Consistent Revenue | One Tap Media',
    description: 'Our email marketing strategies deliver 400% ROI through advanced segmentation and personalization, outperforming industry benchmarks.',
    images: ['https://onetapxmedia.com/images/social-share/email-marketing-page.png'],
    creator: '@onetapmedia',
  },
};

export default function EmailMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}