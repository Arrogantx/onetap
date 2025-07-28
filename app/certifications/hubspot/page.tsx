'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function HubSpotCertificationPage() {
  return (
    <main className="min-h-screen">
      <Navigation onOpenTypeform={() => {}} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">🧡</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">HubSpot Certified Partner</h1>
            <p className="text-xl text-orange-100">
              Expertise in inbound marketing, sales, and customer service using the HubSpot platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">HubSpot Partnership</h2>
              <p className="text-gray-700 mb-6">
                As a HubSpot Certified Partner, we help businesses implement and optimize their inbound marketing strategies using HubSpot's powerful platform.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">Our HubSpot Certifications</h2>
              <div className="space-y-4">
                {[
                  'HubSpot Inbound Marketing Certification',
                  'HubSpot Content Marketing Certification',
                  'HubSpot Email Marketing Certification',
                  'HubSpot Social Media Certification',
                  'HubSpot SEO Certification',
                  'HubSpot Sales Software Certification'
                ].map((cert) => (
                  <div key={cert} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
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