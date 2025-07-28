import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Increased ROI by 500% in Just 90 Days | One Tap Media',
  description: 'See how our data-driven approach transformed a struggling campaign into a high-performing revenue engine, delivering 5x better results than industry standards.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/case-studies/roi-increase',
    siteName: 'One Tap Media',
    title: 'How We Increased ROI by 500% in Just 90 Days | One Tap Media',
    description: 'See how our data-driven approach transformed a struggling campaign into a high-performing revenue engine, delivering 5x better results than industry standards.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/roi-increase-case-study.png',
        width: 1200,
        height: 630,
        alt: 'How We Increased ROI by 500% in Just 90 Days',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Increased ROI by 500% in Just 90 Days | One Tap Media',
    description: 'See how our data-driven approach transformed a struggling campaign into a high-performing revenue engine, delivering 5x better results than industry standards.',
    images: ['https://onetapxmedia.com/images/social-share/roi-increase-case-study.png'],
    creator: '@onetapmedia',
  },
};

export default function ROIIncreaseCaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}