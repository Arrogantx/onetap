'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { FileText, Download, BarChart3, TrendingUp, Search, Smartphone } from 'lucide-react';
import Link from 'next/link';

const reports = [
  {
    title: 'The State of Digital Marketing 2024',
    description: 'A comprehensive analysis of digital marketing trends, challenges, and opportunities for businesses in 2024.',
    date: 'January 2024',
    category: 'Industry Report',
    icon: BarChart3,
    featured: true
  },
  {
    title: 'PPC Benchmarks by Industry',
    description: 'Detailed benchmarks for Google Ads and Microsoft Advertising performance across 20 industries.',
    date: 'December 2023',
    category: 'Benchmark Report',
    icon: TrendingUp,
    featured: true
  },
  {
    title: 'SEO Ranking Factors Study',
    description: 'An analysis of the most important ranking factors for organic search in 2024.',
    date: 'November 2023',
    category: 'Research Study',
    icon: Search,
    featured: false
  },
  {
    title: 'Social Media Advertising Trends',
    description: 'Insights into the latest trends and best practices for social media advertising.',
    date: 'October 2023',
    category: 'Trend Report',
    icon: Smartphone,
    featured: false
  },
  {
    title: 'E-commerce Conversion Optimization Guide',
    description: 'Strategies and tactics for improving e-commerce conversion rates and customer experience.',
    date: 'September 2023',
    category: 'Best Practices',
    icon: TrendingUp,
    featured: false
  },
  {
    title: 'B2B Marketing Benchmark Report',
    description: 'Performance benchmarks and strategies for B2B marketing across channels.',
    date: 'August 2023',
    category: 'Benchmark Report',
    icon: BarChart3,
    featured: false
  }
];

export default function ReportsPage() {
  return (
    <main className="min-h-screen">
      <Navigation onOpenTypeform={() => {}} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-disruptive-red via-red-600 to-disruptive-dark-red text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Industry Reports</h1>
            <p className="text-xl text-red-100">
              Access our latest research, benchmarks, and insights to stay ahead of the curve in digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-disruptive-black mb-6">Featured Reports</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our most recent and comprehensive research on digital marketing trends and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reports.filter(r => r.featured).map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-start">
                    <div className="mr-6">
                      <div className="w-16 h-16 bg-disruptive-red/10 rounded-full flex items-center justify-center">
                        <report.icon className="w-8 h-8 text-disruptive-red" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-disruptive-red font-medium mb-2">{report.category} • {report.date}</div>
                      <h3 className="text-xl font-bold text-disruptive-black mb-3">{report.title}</h3>
                      <p className="text-gray-700 mb-6">{report.description}</p>
                      
                      <Link 
                        href="#"
                        className="inline-flex items-center text-disruptive-red hover:text-disruptive-dark-red font-medium"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Report
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reports */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-disruptive-black mb-6">All Reports</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our complete library of digital marketing research and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-disruptive-red/10 rounded-full flex items-center justify-center mr-4">
                      <report.icon className="w-5 h-5 text-disruptive-red" />
                    </div>
                    <div className="text-sm text-gray-500">{report.category}</div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-disruptive-black mb-3">{report.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{report.date}</div>
                    <Link 
                      href="#"
                      className="inline-flex items-center text-disruptive-red hover:text-disruptive-dark-red font-medium text-sm"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-disruptive-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated with Our Latest Research
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Subscribe to receive our latest reports, benchmarks, and insights directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-disruptive-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold tracking-wide"
              >
                SUBSCRIBE
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}