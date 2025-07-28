import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO That Drives Long-Term Organic Growth | One Tap Media',
  description: 'Our technical SEO strategies deliver 250% average traffic increase, focusing on sustainable growth rather than quick fixes that don\'t last.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/services/seo',
    siteName: 'One Tap Media',
    title: 'SEO That Drives Long-Term Organic Growth | One Tap Media',
    description: 'Our technical SEO strategies deliver 250% average traffic increase, focusing on sustainable growth rather than quick fixes that don\'t last.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/seo-page.png',
        width: 1200,
        height: 630,
        alt: 'SEO That Drives Long-Term Organic Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO That Drives Long-Term Organic Growth | One Tap Media',
    description: 'Our technical SEO strategies deliver 250% average traffic increase, focusing on sustainable growth rather than quick fixes that don\'t last.',
    images: ['https://onetapxmedia.com/images/social-share/seo-page.png'],
    creator: '@onetapmedia',
  },
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}