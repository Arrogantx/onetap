import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Increased Leads by 300% for a Professional Services Firm | One Tap Media',
  description: 'Discover how our strategic approach tripled qualified leads and dominated local search results, outperforming previous agency results by 5x.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onetapxmedia.com/case-studies/leads',
    siteName: 'One Tap Media',
    title: 'How We Increased Leads by 300% for a Professional Services Firm | One Tap Media',
    description: 'Discover how our strategic approach tripled qualified leads and dominated local search results, outperforming previous agency results by 5x.',
    images: [
      {
        url: 'https://onetapxmedia.com/images/social-share/leads-case-study.png',
        width: 1200,
        height: 630,
        alt: 'How We Increased Leads by 300% for a Professional Services Firm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Increased Leads by 300% for a Professional Services Firm | One Tap Media',
    description: 'Discover how our strategic approach tripled qualified leads and dominated local search results, outperforming previous agency results by 5x.',
    images: ['https://onetapxmedia.com/images/social-share/leads-case-study.png'],
    creator: '@onetapmedia',
  },
};

export default function LeadsCaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}