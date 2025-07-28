import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Generated $2M+ Revenue for an E-commerce Brand | One Tap Media',
  description: 'Learn how our multi-channel strategy increased ROAS to 6.8x and boosted revenue by 520%, delivering results their previous agency couldn\'t match.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/case-studies/revenue',
    siteName: 'One Tap Media',
    title: 'How We Generated $2M+ Revenue for an E-commerce Brand | One Tap Media',
    description: 'Learn how our multi-channel strategy increased ROAS to 6.8x and boosted revenue by 520%, delivering results their previous agency couldn\'t match.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/revenue-case-study.png',
        width: 1200,
        height: 630,
        alt: 'How We Generated $2M+ Revenue for an E-commerce Brand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Generated $2M+ Revenue for an E-commerce Brand | One Tap Media',
    description: 'Learn how our multi-channel strategy increased ROAS to 6.8x and boosted revenue by 520%, delivering results their previous agency couldn\'t match.',
    images: ['https://onetapxmedia.com/images/social-share/revenue-case-study.png'],
    creator: '@onetapmedia',
  },
};

export default function RevenueCaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}