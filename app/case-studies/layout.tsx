import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Case Studies: Real Results, Real Growth | One Tap Media',
  description: 'See how we\'ve helped businesses achieve remarkable growth with strategies that deliver measurable ROI, unlike vague case studies with cherry-picked metrics.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/case-studies',
    siteName: 'One Tap Media',
    title: 'Marketing Case Studies: Real Results, Real Growth | One Tap Media',
    description: 'See how we\'ve helped businesses achieve remarkable growth with strategies that deliver measurable ROI, unlike vague case studies with cherry-picked metrics.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/case-studies-page.png',
        width: 1200,
        height: 630,
        alt: 'Marketing Case Studies: Real Results, Real Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Case Studies: Real Results, Real Growth | One Tap Media',
    description: 'See how we\'ve helped businesses achieve remarkable growth with strategies that deliver measurable ROI, unlike vague case studies with cherry-picked metrics.',
    images: ['https://onetapxmedia.com/images/social-share/case-studies-page.png'],
    creator: '@onetapmedia',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}