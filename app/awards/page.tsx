'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Award, Calendar, Trophy, Star, Medal, Crown } from 'lucide-react';

const awards = [
  {
    name: 'Best PPC Agency',
    organization: 'Digital Marketing Awards',
    year: '2023',
    description: 'Recognized for excellence in paid search campaign management and results.',
    icon: Trophy
  },
  {
    name: 'Top SEO Consultancy',
    organization: 'SEO Excellence Awards',
    year: '2023',
    description: 'Honored for outstanding organic search results and client satisfaction.',
    icon: Star
  },
  {
    name: 'Innovation in Marketing Technology',
    organization: 'MarTech Breakthrough Awards',
    year: '2023',
    description: 'Awarded for innovative use of AI in marketing automation and optimization.',
    icon: Medal
  },
  {
    name: 'Best Workplace in Marketing',
    organization: 'Workplace Excellence Awards',
    year: '2023',
    description: 'Recognized for company culture, employee satisfaction, and work-life balance.',
    icon: Crown
  },
  {
    name: 'Excellence in E-commerce Marketing',
    organization: 'E-commerce Growth Awards',
    year: '2022',
    description: 'Awarded for exceptional results in e-commerce marketing campaigns.',
    icon: Trophy
  },
  {
    name: 'Best Social Media Campaign',
    organization: 'Social Media Marketing Awards',
    year: '2022',
    description: 'Recognized for creative excellence and performance in social media advertising.',
    icon: Star
  },
  {
    name: 'Top Conversion Rate Optimization Agency',
    organization: 'CRO Excellence Awards',
    year: '2022',
    description: 'Honored for delivering exceptional conversion rate improvements for clients.',
    icon: Medal
  },
  {
    name: 'Best Client Results',
    organization: 'Client Success Awards',
    year: '2022',
    description: 'Awarded for consistently delivering outstanding ROI for clients across industries.',
    icon: Crown
  }
];

export default function AwardsPage() {
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
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Awards & Recognition</h1>
            <p className="text-xl text-red-100">
              We're proud to be recognized for our commitment to excellence and the results we deliver for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-16 h-16 bg-disruptive-red/10 rounded-full flex items-center justify-center">
                      <award.icon className="w-8 h-8 text-disruptive-red" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-disruptive-black">{award.name}</h3>
                      <div className="ml-3 px-3 py-1 bg-disruptive-red/10 text-disruptive-red text-sm font-medium rounded-full">
                        {award.year}
                      </div>
                    </div>
                    <div className="text-gray-600 font-medium mb-3">{award.organization}</div>
                    <p className="text-gray-700">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-disruptive-black mb-6">Industry Recognition</h2>
            <p className="text-gray-700">
              In addition to our awards, One Tap Media has been featured in leading industry publications and recognized as a thought leader in digital marketing.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-disruptive-red mr-3" />
                <div className="text-sm text-gray-500">December 2023</div>
              </div>
              <h3 className="text-lg font-bold text-disruptive-black mb-2">
                Named to "Top 50 Digital Marketing Agencies" List
              </h3>
              <p className="text-gray-700">
                One Tap Media was recognized as one of the top 50 digital marketing agencies by MarketingTech Weekly, highlighting our innovative approach and client results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-disruptive-red mr-3" />
                <div className="text-sm text-gray-500">October 2023</div>
              </div>
              <h3 className="text-lg font-bold text-disruptive-black mb-2">
                Featured in "The Future of Digital Marketing" Report
              </h3>
              <p className="text-gray-700">
                Our CEO John Dill was interviewed for a special report on the future of digital marketing, sharing insights on emerging trends and technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-disruptive-red mr-3" />
                <div className="text-sm text-gray-500">August 2023</div>
              </div>
              <h3 className="text-lg font-bold text-disruptive-black mb-2">
                Google Premier Partner Status Achieved
              </h3>
              <p className="text-gray-700">
                One Tap Media earned Google Premier Partner status, placing us in the top 3% of agencies worldwide for Google Ads expertise and client performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}