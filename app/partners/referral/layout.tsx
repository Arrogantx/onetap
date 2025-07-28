import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OneTap Hustle Hub: Earn While You Refer | One Tap Media',
  description: 'Join our referral program and earn points, cash, and exclusive perks with rewards that exceed typical referral programs by 2x.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/partners/referral',
    siteName: 'One Tap Media',
    title: 'OneTap Hustle Hub: Earn While You Refer | One Tap Media',
    description: 'Join our referral program and earn points, cash, and exclusive perks with rewards that exceed typical referral programs by 2x.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/referral-program.png',
        width: 1200,
        height: 630,
        alt: 'OneTap Hustle Hub: Earn While You Refer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneTap Hustle Hub: Earn While You Refer | One Tap Media',
    description: 'Join our referral program and earn points, cash, and exclusive perks with rewards that exceed typical referral programs by 2x.',
    images: ['https://onetapxmedia.com/images/social-share/referral-program.png'],
    creator: '@onetapmedia',
  },
};

export default function ReferralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}