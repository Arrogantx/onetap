import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Marketing Guides & Resources | One Tap Media',
  description: 'Access our comprehensive collection of marketing guides, templates, and resources with actionable strategies you won\'t find in typical marketing content.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/guides',
    siteName: 'One Tap Media',
    title: 'Free Marketing Guides & Resources | One Tap Media',
    description: 'Access our comprehensive collection of marketing guides, templates, and resources with actionable strategies you won\'t find in typical marketing content.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/guides-page.png',
        width: 1200,
        height: 630,
        alt: 'Free Marketing Guides & Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Marketing Guides & Resources | One Tap Media',
    description: 'Access our comprehensive collection of marketing guides, templates, and resources with actionable strategies you won\'t find in typical marketing content.',
    images: ['https://onetapxmedia.com/images/social-share/guides-page.png'],
    creator: '@onetapmedia',
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}