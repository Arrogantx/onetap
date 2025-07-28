import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Solutions That Transform Your Business | One Tap Media',
  description: 'Our custom AI implementations deliver 300% efficiency gains, automating processes and enhancing customer experiences beyond basic chatbots.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/services/ai',
    siteName: 'One Tap Media',
    title: 'AI Solutions That Transform Your Business | One Tap Media',
    description: 'Our custom AI implementations deliver 300% efficiency gains, automating processes and enhancing customer experiences beyond basic chatbots.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/ai-page.png',
        width: 1200,
        height: 630,
        alt: 'AI Solutions That Transform Your Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Solutions That Transform Your Business | One Tap Media',
    description: 'Our custom AI implementations deliver 300% efficiency gains, automating processes and enhancing customer experiences beyond basic chatbots.',
    images: ['https://onetapxmedia.com/images/social-share/ai-page.png'],
    creator: '@onetapmedia',
  },
};

export default function AILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}