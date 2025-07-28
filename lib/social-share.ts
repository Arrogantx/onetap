/**
 * Social Share Image and Text Generator
 * 
 * This utility provides functions to generate page-specific social share images
 * and page-specific share text for improved social media engagement.
 */

// Page-specific social share images mapping
const PAGE_SHARE_IMAGES: {[key: string]: string} = {
  // Home page
  '/': '/images/social-share/home-page.png',
  
  // Services pages
  '/services': '/images/social-share/services-page.png',
  '/services/paid-search': '/images/social-share/paid-search.png',
  '/services/seo': '/images/social-share/seo-page.png',
  '/services/paid-social': '/images/social-share/paid-social-page.png',
  '/services/conversion-optimization': '/images/social-share/conversion-optimization-page.png',
  '/services/amazon': '/images/social-share/amazon-page.png',
  '/services/email-marketing': '/images/social-share/email-marketing-page.png',
  '/services/creative': '/images/social-share/creative-page.png',
  '/services/analytics': '/images/social-share/analytics-page.png',
  '/services/web-development': '/images/social-share/web-development-page.png',
  '/services/ai': '/images/social-share/ai-page.png',
  
  // Industry pages
  '/industries/furniture': '/images/social-share/home-page.png',
  
  // Case Studies
  '/case-studies': '/images/social-share/case-studies-page.png',
  '/case-studies/leads': '/images/social-share/leads-case-study.png',
  '/case-studies/revenue': '/images/social-share/revenue-case-study.png',
  '/case-studies/roi-increase': '/images/social-share/roi-increase-case-study.png',
  
  // About pages
  '/about': '/images/social-share/about-page.png',
  '/careers': '/images/social-share/careers-page.png',
  
  // Resources
  '/blog': '/images/social-share/blog-page.png',
  '/guides': '/images/social-share/guides-page.png',
  '/tools': '/images/social-share/tools-page.png',
  
  // Support
  '/contact': '/images/social-share/contact-page.png',
  '/help': '/images/social-share/help-page.png',
  '/faq': '/images/social-share/faq-page.png',
  
  // Partners
  '/partners': '/images/social-share/partners-page.png',
  '/partners/referral': '/images/social-share/referral-program.png',
  
  // Results
  '/results': '/images/social-share/results-page.png',
  '/reviews': '/images/social-share/reviews-page.png',
};

// Fallback images for when a specific page image is not found
const FALLBACK_SHARE_IMAGES = [
  '/images/social-share/home-page.png'
];

// Page-specific share text configurations
const PAGE_SHARE_TEXT: {[key: string]: { title: string; description: string }} = {
  // Home page
  '/': {
    title: 'One Tap Media - Marketing That Actually Works',
    description: 'Stop wasting your marketing budget. Our data-driven approach delivers 340% average ROI increase, outperforming traditional agencies by 4x.',
  },
  
  // Services pages
  '/services': {
    title: 'Digital Marketing Services That Drive Real Growth',
    description: 'From PPC to SEO, our comprehensive services are designed to maximize ROI and deliver measurable business growth, unlike generic one-size-fits-all approaches.',
  },
  '/services/paid-search': {
    title: 'Paid Search Management That Converts',
    description: 'Our Google Ads experts deliver 340% average ROI increase through data-driven optimization, outperforming industry standards by 3x.',
  },
  '/services/seo': {
    title: 'SEO That Drives Long-Term Organic Growth',
    description: 'Our technical SEO strategies deliver 250% average traffic increase, focusing on sustainable growth rather than quick fixes that don\'t last.',
  },
  '/services/paid-social': {
    title: 'Social Media Advertising That Reaches Your Ideal Customers',
    description: 'Our targeted social campaigns deliver 280% better lead quality than traditional agencies by focusing on precision targeting and creative testing.',
  },
  '/services/conversion-optimization': {
    title: 'Conversion Rate Optimization That Maximizes Your Traffic Value',
    description: 'Our systematic CRO approach increases conversion rates by 180% on average, turning more visitors into customers without increasing ad spend.',
  },
  '/services/amazon': {
    title: 'Amazon Marketing That Dominates Your Category',
    description: 'Our Amazon specialists deliver 320% sales growth through strategic advertising and listing optimization, outperforming marketplace competitors.',
  },
  '/services/email-marketing': {
    title: 'Email Marketing Automation That Drives Consistent Revenue',
    description: 'Our email marketing strategies deliver 400% ROI through advanced segmentation and personalization, outperforming industry benchmarks.',
  },
  '/services/creative': {
    title: 'Creative & Design Services That Convert',
    description: 'Our data-driven creative approach increases engagement by 320%, creating visuals that not only look great but drive measurable business results.',
  },
  '/services/analytics': {
    title: 'Data Analytics That Drive Better Marketing Decisions',
    description: 'Our analytics solutions provide 400% clearer insights than standard reporting, turning complex data into actionable marketing strategies.',
  },
  '/services/web-development': {
    title: 'Web Development That Performs',
    description: 'Our websites deliver 250% better performance metrics, focusing on speed, conversions, and search visibility rather than just aesthetics.',
  },
  '/services/ai': {
    title: 'AI Solutions That Transform Your Business',
    description: 'Our custom AI implementations deliver 300% efficiency gains, automating processes and enhancing customer experiences beyond basic chatbots.',
  },
  
  // Industry pages
  '/industries/furniture': {
    title: 'Strategic Marketing for Furniture Retailers',
    description: 'We help furniture retailers choose and implement the right digital tools, platforms, and campaigns to scale sales—in-store and online.',
  },
  
  // Case Studies
  '/case-studies': {
    title: 'Marketing Case Studies: Real Results, Real Growth',
    description: 'See how we\'ve helped businesses achieve remarkable growth with strategies that deliver measurable ROI, unlike vague case studies with cherry-picked metrics.',
  },
  '/case-studies/leads': {
    title: 'How We Increased Leads by 300% for a Professional Services Firm',
    description: 'Discover how our strategic approach tripled qualified leads and dominated local search results, outperforming previous agency results by 5x.',
  },
  '/case-studies/revenue': {
    title: 'How We Generated $2M+ Revenue for an E-commerce Brand',
    description: 'Learn how our multi-channel strategy increased ROAS to 6.8x and boosted revenue by 520%, delivering results their previous agency couldn\'t match.',
  },
  '/case-studies/roi-increase': {
    title: 'How We Increased ROI by 500% in Just 90 Days',
    description: 'See how our data-driven approach transformed a struggling campaign into a high-performing revenue engine, delivering 5x better results than industry standards.',
  },
  
  // About pages
  '/about': {
    title: 'About One Tap Media: Marketing Experts Obsessed with Results',
    description: 'Meet our team of digital marketing experts focused on driving real, measurable growth for businesses, not vanity metrics that don\'t impact your bottom line.',
  },
  '/careers': {
    title: 'Careers at One Tap Media: Join Our Results-Driven Team',
    description: 'Join a team that values innovation, growth, and work-life balance, offering opportunities that outpace traditional agency career paths.',
  },
  
  // Resources
  '/blog': {
    title: 'Marketing Insights That Drive Growth',
    description: 'Expert insights, proven strategies, and actionable tips from our team of digital marketing professionals, delivering more value than generic marketing blogs.',
  },
  '/guides': {
    title: 'Free Marketing Guides & Resources',
    description: 'Access our comprehensive collection of marketing guides, templates, and resources with actionable strategies you won\'t find in typical marketing content.',
  },
  
  // Partners
  '/partners': {
    title: 'Partner Program: Grow Together with One Tap Media',
    description: 'Join our partner program to expand your service offerings and increase revenue with commission rates that outperform standard affiliate programs.',
  },
  '/partners/referral': {
    title: 'OneTap Hustle Hub: Earn While You Refer',
    description: 'Join our referral program and earn points, cash, and exclusive perks with rewards that exceed typical referral programs by 2x.',
  },
  
  // Default fallback
  'default': {
    title: 'One Tap Media - Marketing That Actually Works',
    description: 'We help businesses turn traffic into real growth through data-driven digital marketing strategies that deliver measurable results.',
  }
};

/**
 * Gets a random social share image from the available options
 * @returns {string} URL path to a random social share image
 * @deprecated Use getPageShareImage instead for page-specific images
 */
export function getRandomSocialShareImage(): string {
  const randomIndex = Math.floor(Math.random() * FALLBACK_SHARE_IMAGES.length);
  return FALLBACK_SHARE_IMAGES[randomIndex];
}

/**
 * Gets the page-specific social share image for the given path
 * @param {string} path - The current page path
 * @returns {string} URL path to the page-specific social share image
 */
export function getPageShareImage(path: string): string {
  // Remove trailing slash if present for consistent matching
  const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
  
  // Return page-specific image if available, otherwise use a fallback
  if (PAGE_SHARE_IMAGES[normalizedPath]) {
    return PAGE_SHARE_IMAGES[normalizedPath];
  }
  
  // If no specific image is found, use a random fallback image
  const randomIndex = Math.floor(Math.random() * FALLBACK_SHARE_IMAGES.length);
  return FALLBACK_SHARE_IMAGES[randomIndex];
}

/**
 * Gets page-specific share text based on the current path
 * @param {string} path - The current page path
 * @returns {Object} Object containing title and description for social sharing
 */
export function getPageShareText(path: string): { title: string; description: string } {
  // Remove trailing slash if present for consistent matching
  const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
  
  // Return page-specific text if available, otherwise use default
  return PAGE_SHARE_TEXT[normalizedPath] || PAGE_SHARE_TEXT['default'];
}