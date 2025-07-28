'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

export default function MetaCertificationPage() {
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
            <div className="text-6xl mb-6">📘</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Meta Business Partner</h1>
            <p className="text-xl text-blue-100">
              Certified expertise in Facebook and Instagram advertising with a proven track record of driving results for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">Meta Business Partner Program</h2>
              <p className="text-gray-700 mb-6">
                As a Meta Business Partner, we have demonstrated expertise in Facebook and Instagram advertising, helping businesses reach their target audiences and achieve their marketing objectives.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">Our Meta Certifications</h2>
              <div className="space-y-4">
                {[
                  'Meta Certified Media Buying Professional',
                  'Meta Certified Marketing Science Professional',
                  'Meta Certified Creative Strategy Professional',
                  'Facebook Ads Manager Certification',
                  'Instagram Advertising Certification',
                  'Facebook Blueprint Certification'
                ].map((cert) => (
                  <div key={cert} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
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