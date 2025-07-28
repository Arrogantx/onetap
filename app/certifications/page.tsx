'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, CheckCircle, Star, Trophy, Shield } from 'lucide-react';

const certifications = [
  {
    name: 'Google Premier Partner',
    provider: 'Google',
    description: 'Highest level of Google Ads certification, demonstrating expertise in managing large advertising budgets.',
    benefits: ['Priority support', 'Beta feature access', 'Advanced training'],
    logo: '🔍',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Meta Business Partner',
    provider: 'Meta',
    description: 'Certified expertise in Facebook and Instagram advertising with proven track record.',
    benefits: ['Direct support', 'Early feature access', 'Training resources'],
    logo: '📘',
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: 'HubSpot Certified Partner',
    provider: 'HubSpot',
    description: 'Expertise in inbound marketing, sales, and customer service using HubSpot platform.',
    benefits: ['Partner portal access', 'Co-marketing opportunities', 'Technical support'],
    logo: '🧡',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Bing Ads Accredited',
    provider: 'Microsoft',
    description: 'Certified proficiency in Microsoft Advertising platform and best practices.',
    benefits: ['Platform expertise', 'Advanced features', 'Support resources'],
    logo: '🔷',
    color: 'from-blue-400 to-blue-500'
  },
  {
    name: 'Amazon Verified Partner',
    provider: 'Amazon',
    description: 'Verified expertise in Amazon advertising and marketplace optimization.',
    benefits: ['Amazon support', 'Advanced tools', 'Training programs'],
    logo: '📦',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    name: 'Klaviyo Master Elite',
    provider: 'Klaviyo',
    description: 'Highest level certification for email marketing and automation expertise.',
    benefits: ['Elite support', 'Advanced features', 'Priority training'],
    logo: '📧',
    color: 'from-purple-500 to-purple-600'
  }
];

export default function CertificationsPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openTypeform = () => setIsTypeformOpen(true);
  const closeTypeform = () => setIsTypeformOpen(false);
  
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  return (
    <main className="min-h-screen">
      <Navigation onOpenTypeform={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform'))} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-disruptive-red via-red-600 to-disruptive-dark-red text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/10 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Trophy className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Certifications
              <span className="block text-red-200">& Partnerships</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              We maintain the highest level certifications with all major advertising platforms 
              to ensure we're always using the latest features and best practices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-red-100">Certifications</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-red-100">Premier Partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Star className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-red-100">Certified Team</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-disruptive-black mb-6">
              Platform Certifications
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team holds the highest level certifications across all major digital marketing platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                    <div className="text-4xl mb-4">{cert.logo}</div>
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-sm opacity-90">{cert.provider}</p>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6">{cert.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-disruptive-black">Benefits:</h4>
                      {cert.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-disruptive-red flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-disruptive-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Work with Certified Experts
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Our certifications ensure you're working with experts who know the latest features and best practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET STARTED
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={openCalendly}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
              >
                SCHEDULE A CALL
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Modals */}
      <TypeformModal isOpen={isTypeformOpen} onClose={closeTypeform} />
      <CalendlyPopup isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </main>
  );
}