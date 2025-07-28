import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Marketing Tools & Resources | One Tap Media',
  description: 'Access our collection of free marketing tools, calculators, templates, and resources designed to help you optimize your campaigns and drive better results.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/tools',
    siteName: 'One Tap Media',
    title: 'Free Marketing Tools & Resources | One Tap Media',
    description: 'Access our collection of free marketing tools, calculators, templates, and resources designed to help you optimize your campaigns and drive better results.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/tools-page.png',
        width: 1200,
        height: 630,
        alt: 'Free Marketing Tools & Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Marketing Tools & Resources | One Tap Media',
    description: 'Access our collection of free marketing tools, calculators, templates, and resources designed to help you optimize your campaigns and drive better results.',
    images: ['https://onetapxmedia.com/images/social-share/tools-page.png'],
    creator: '@onetapmedia',
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}