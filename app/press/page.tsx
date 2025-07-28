'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Newspaper, Award, Calendar, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const pressReleases = [
  {
    title: 'One Tap Media Achieves Google Premier Partner Status',
    date: 'January 15, 2024',
    excerpt: 'One Tap Media has been recognized as a Google Premier Partner, joining the top 3% of agencies worldwide.',
    link: '#'
  },
  {
    title: 'One Tap Media Expands AI Solutions Division',
    date: 'December 5, 2023',
    excerpt: 'One Tap Media announces the expansion of its AI Solutions division to help businesses leverage artificial intelligence for marketing automation and growth.',
    link: '#'
  },
  {
    title: 'One Tap Media Named Top Digital Marketing Agency',
    date: 'October 20, 2023',
    excerpt: 'One Tap Media has been recognized as a top digital marketing agency by industry publication MarketingTech Weekly.',
    link: '#'
  },
  {
    title: 'One Tap Media Launches Free Marketing Tools Platform',
    date: 'September 12, 2023',
    excerpt: 'One Tap Media introduces a suite of free marketing tools designed to help businesses optimize their digital marketing efforts.',
    link: '#'
  }
];

const mediaAppearances = [
  {
    outlet: 'Marketing Today Podcast',
    title: 'The Future of PPC Advertising',
    date: 'February 2, 2024',
    featuring: 'John Dill, CEO',
    link: '#'
  },
  {
    outlet: 'Digital Marketing Weekly',
    title: 'How AI is Transforming Digital Marketing',
    date: 'January 18, 2024',
    featuring: 'Michael Curtis, Creative Director',
    link: '#'
  },
  {
    outlet: 'SEO Insights Conference',
    title: 'Advanced SEO Strategies for 2024',
    date: 'December 10, 2023',
    featuring: 'Emily Rodriguez, SEO Director',
    link: '#'
  },
  {
    outlet: 'E-commerce Growth Summit',
    title: 'Maximizing ROAS for E-commerce Brands',
    date: 'November 5, 2023',
    featuring: 'David Thompson, Head of Paid Search',
    link: '#'
  }
];

const awards = [
  {
    name: 'Best PPC Agency',
    organization: 'Digital Marketing Awards',
    year: '2023',
    description: 'Recognized for excellence in paid search campaign management and results.'
  },
  {
    name: 'Top SEO Consultancy',
    organization: 'SEO Excellence Awards',
    year: '2023',
    description: 'Honored for outstanding organic search results and client satisfaction.'
  },
  {
    name: 'Innovation in Marketing Technology',
    organization: 'MarTech Breakthrough Awards',
    year: '2023',
    description: 'Awarded for innovative use of AI in marketing automation and optimization.'
  },
  {
    name: 'Best Workplace in Marketing',
    organization: 'Workplace Excellence Awards',
    year: '2023',
    description: 'Recognized for company culture, employee satisfaction, and work-life balance.'
  }
];

export default function PressPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-disruptive-red via-red-600 to-disruptive-dark-red text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Newspaper className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl text-red-100">
              Latest news, press releases, media coverage, and resources from One Tap Media.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-disruptive-black mb-12">Press Releases</h2>
          
          <div className="space-y-12">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-gray-200 pb-8 last:border-0"
              >
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {release.date}
                </div>
                <h3 className="text-xl font-bold text-disruptive-black mb-3">{release.title}</h3>
                <p className="text-gray-700 mb-4">{release.excerpt}</p>
                <Link 
                  href={release.link}
                  className="inline-flex items-center text-disruptive-red hover:text-disruptive-dark-red font-medium"
                >
                  Read Full Release
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Appearances */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-disruptive-black mb-12">Media Appearances</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaAppearances.map((appearance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-sm text-disruptive-red font-medium mb-2">{appearance.outlet}</div>
                <h3 className="text-lg font-bold text-disruptive-black mb-2">{appearance.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {appearance.date}
                </div>
                <p className="text-gray-700 text-sm mb-4">Featuring: {appearance.featuring}</p>
                <Link 
                  href={appearance.link}
                  className="inline-flex items-center text-disruptive-red hover:text-disruptive-dark-red font-medium text-sm"
                >
                  View Details
                  <ExternalLink className="ml-2 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-disruptive-black mb-12">Awards & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="mr-4">
                  <Award className="w-10 h-10 text-disruptive-red" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-disruptive-black mb-1">{award.name}</h3>
                  <div className="text-sm text-gray-500 mb-2">{award.organization} | {award.year}</div>
                  <p className="text-gray-700 text-sm">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-disruptive-black mb-8">Media Resources</h2>
          
          <div className="space-y-6">
            <p className="text-gray-700">
              For press inquiries, please contact our media relations team at <a href="mailto:press@onetapmedia.com" className="text-disruptive-red hover:text-disruptive-dark-red">press@onetapmedia.com</a> or call (555) 123-4567.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-disruptive-black mb-4">Downloadable Assets</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-disruptive-red mr-3" />
                    <span className="text-gray-700">One Tap Media Logo Pack</span>
                  </div>
                  <a href="#" className="text-disruptive-red hover:text-disruptive-dark-red font-medium">Download</a>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-disruptive-red mr-3" />
                    <span className="text-gray-700">Company Fact Sheet</span>
                  </div>
                  <a href="#" className="text-disruptive-red hover:text-disruptive-dark-red font-medium">Download</a>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-disruptive-red mr-3" />
                    <span className="text-gray-700">Executive Headshots</span>
                  </div>
                  <a href="#" className="text-disruptive-red hover:text-disruptive-dark-red font-medium">Download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}