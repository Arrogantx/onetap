'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

export default function GoogleCertificationPage() {
  return (
    <main className="min-h-screen">
      <Navigation onOpenTypeform={() => {}} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">🔍</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Google Premier Partner</h1>
            <p className="text-xl text-blue-100">
              We maintain the highest level of Google Ads certification, demonstrating our expertise in managing large advertising budgets and delivering exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">What is Google Premier Partner Status?</h2>
              <p className="text-gray-700 mb-6">
                Google Premier Partner is the highest tier of Google's partner program, reserved for agencies that demonstrate exceptional performance, expertise, and client growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Top 3% of Agencies</h3>
                  <p className="text-sm text-gray-600">Only the top 3% of Google Partners achieve Premier status</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Proven Performance</h3>
                  <p className="text-sm text-gray-600">Demonstrated client growth and campaign optimization</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Expert Team</h3>
                  <p className="text-sm text-gray-600">Certified specialists with advanced Google Ads knowledge</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">Benefits for Our Clients</h2>
              <div className="space-y-4">
                {[
                  'Priority support from Google representatives',
                  'Early access to beta features and new products',
                  'Advanced training and certification programs',
                  'Exclusive insights and industry benchmarks',
                  'Direct communication channels with Google',
                  'Enhanced account management tools'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">Our Google Ads Expertise</h2>
              <p className="text-gray-700 mb-6">
                Our team holds multiple Google Ads certifications across all campaign types and specializations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Google Ads Search Certification',
                  'Google Ads Display Certification',
                  'Google Ads Video Certification',
                  'Google Ads Shopping Certification',
                  'Google Ads Apps Certification',
                  'Google Ads Measurement Certification'
                ].map((cert) => (
                  <div key={cert} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}