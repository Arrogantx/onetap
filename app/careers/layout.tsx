import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at One Tap Media: Join Our Results-Driven Team',
  description: 'Join a team that values innovation, growth, and work-life balance, offering opportunities that outpace traditional agency career paths.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/careers',
    siteName: 'One Tap Media',
    title: 'Careers at One Tap Media: Join Our Results-Driven Team',
    description: 'Join a team that values innovation, growth, and work-life balance, offering opportunities that outpace traditional agency career paths.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/careers-page.png',
        width: 1200,
        height: 630,
        alt: 'Careers at One Tap Media: Join Our Results-Driven Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at One Tap Media: Join Our Results-Driven Team',
    description: 'Join a team that values innovation, growth, and work-life balance, offering opportunities that outpace traditional agency career paths.',
    images: ['https://onetapxmedia.com/images/social-share/careers-page.png'],
    creator: '@onetapmedia',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}