import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About One Tap Media: Marketing Experts Obsessed with Results',
  description: 'Meet our team of digital marketing experts focused on driving real, measurable growth for businesses, not vanity metrics that don\'t impact your bottom line.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/about',
    siteName: 'One Tap Media',
    title: 'About One Tap Media: Marketing Experts Obsessed with Results',
    description: 'Meet our team of digital marketing experts focused on driving real, measurable growth for businesses, not vanity metrics that don\'t impact your bottom line.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/about-page.png',
        width: 1200,
        height: 630,
        alt: 'About One Tap Media: Marketing Experts Obsessed with Results',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About One Tap Media: Marketing Experts Obsessed with Results',
    description: 'Meet our team of digital marketing experts focused on driving real, measurable growth for businesses, not vanity metrics that don\'t impact your bottom line.',
    images: ['https://onetapxmedia.com/images/social-share/about-page.png'],
    creator: '@onetapmedia',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}