import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | One Tap Media',
  description: 'Find answers to common questions about our services, process, and results. Get the information you need to make informed decisions about your marketing.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/faq',
    siteName: 'One Tap Media',
    title: 'Frequently Asked Questions | One Tap Media',
    description: 'Find answers to common questions about our services, process, and results. Get the information you need to make informed decisions about your marketing.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/faq-page.png',
        width: 1200,
        height: 630,
        alt: 'Frequently Asked Questions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | One Tap Media',
    description: 'Find answers to common questions about our services, process, and results. Get the information you need to make informed decisions about your marketing.',
    images: ['https://onetapxmedia.com/images/social-share/faq-page.png'],
    creator: '@onetapmedia',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}