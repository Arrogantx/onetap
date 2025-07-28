import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Advertising That Reaches Your Ideal Customers | One Tap Media',
  description: 'Our targeted social campaigns deliver 280% better lead quality than traditional agencies by focusing on precision targeting and creative testing.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/services/paid-social',
    siteName: 'One Tap Media',
    title: 'Social Media Advertising That Reaches Your Ideal Customers | One Tap Media',
    description: 'Our targeted social campaigns deliver 280% better lead quality than traditional agencies by focusing on precision targeting and creative testing.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/paid-social-page.png',
        width: 1200,
        height: 630,
        alt: 'Social Media Advertising That Reaches Your Ideal Customers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Advertising That Reaches Your Ideal Customers | One Tap Media',
    description: 'Our targeted social campaigns deliver 280% better lead quality than traditional agencies by focusing on precision targeting and creative testing.',
    images: ['https://onetapxmedia.com/images/social-share/paid-social-page.png'],
    creator: '@onetapmedia',
  },
};

export default function PaidSocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}