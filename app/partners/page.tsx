'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Handshake, Users, DollarSign, Award, CheckCircle, Globe, Building } from 'lucide-react';
import { Gift, Coins, Trophy } from 'lucide-react';

const partnerTypes = [
  {
    title: 'Agency Partners',
    description: 'Join our agency partner program to expand your service offerings and deliver exceptional results to your clients.',
    benefits: [
      'White-label marketing services',
      'Dedicated account manager',
      'Competitive commission structure',
      'Co-marketing opportunities',
      'Training and certification',
      'Priority support'
    ],
    icon: Building
  },
  {
    title: 'Technology Partners',
    description: 'Integrate your technology with our marketing services to create powerful solutions for mutual clients.',
    benefits: [
      'API integration support',
      'Joint product development',
      'Co-branded marketing materials',
      'Shared case studies',
      'Partner directory listing',
      'Joint webinars and events'
    ],
    icon: Globe
  },
  {
    title: 'Referral Partners',
    description: 'Earn commissions by referring clients to our digital marketing services.',
    benefits: [
      'Industry-leading commission rates',
      'Transparent tracking dashboard',
      'Marketing materials and resources',
      'Regular commission payments',
      'No minimum referral requirements',
      'Dedicated partner support'
    ],
    icon: Handshake
  }
];

// Add the referral program to partner types
partnerTypes.push({
  title: 'OneTap Hustle Hub',
  description: 'Earn points and cash by helping businesses discover OneTap. Refer leads, complete missions, and climb the leaderboard to win monthly cash prizes.',
  benefits: [
    'Earn up to $250 per client',
    'Monthly cash prizes',
    'Points-based rewards system',
    'Free training resources',
    'No experience needed',
    'Exclusive community access'
  ],
  icon: Trophy
});

const partnerLogos = [
  { name: 'Partner 1', logo: '🏢' },
  { name: 'Partner 2', logo: '🏢' },
  { name: 'Partner 3', logo: '🏢' },
  { name: 'Partner 4', logo: '🏢' },
  { name: 'Partner 5', logo: '🏢' },
  { name: 'Partner 6', logo: '🏢' }
];

export default function PartnersPage() {
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Partner Program
              <span className="block text-red-200">Grow Together</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join our partner program to expand your service offerings, increase your revenue, 
              and deliver exceptional results to your clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Users className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-red-100">Active Partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <DollarSign className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">$2M+</div>
                <div className="text-red-100">Partner Commissions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-red-100">Partner Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
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
              Partnership Opportunities
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business needs and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-disruptive-red/10 rounded-full flex items-center justify-center mb-6">
                      <type.icon className="w-8 h-8 text-disruptive-red" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4 group-hover:text-disruptive-red transition-colors">
                      {type.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-6">{type.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {type.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-disruptive-red flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    {type.title === 'OneTap Hustle Hub' ? (
                      <Button asChild className="w-full bg-disruptive-red hover:bg-disruptive-dark-red text-white">
                        <Link href="/partners/referral">
                          JOIN HUSTLE HUB
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button className="w-full bg-disruptive-red hover:bg-disruptive-dark-red text-white">
                        APPLY NOW
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-disruptive-black mb-6">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partner program is designed to be simple, transparent, and mutually beneficial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', description: 'Complete our simple application form to join our partner program.' },
              { step: '02', title: 'Onboard', description: 'Get access to our partner portal, resources, and dedicated account manager.' },
              { step: '03', title: 'Collaborate', description: 'Start referring clients or collaborating on projects with our team.' },
              { step: '04', title: 'Grow', description: 'Earn commissions, expand your services, and grow your business with us.' }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-disruptive-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
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
              Partner Testimonials
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our partners have to say about working with One Tap Media.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Partnering with One Tap Media has been a game-changer for our agency. We've been able to offer high-quality digital marketing services to our clients without having to build an in-house team. The results have been exceptional, and our clients are thrilled.",
                name: "Michael Johnson",
                title: "CEO, Design Agency Partners",
                image: "MJ"
              },
              {
                quote: "The white-label services from One Tap Media have allowed us to expand our service offerings and increase our revenue significantly. Their team is responsive, professional, and delivers outstanding results for our clients.",
                name: "Sarah Williams",
                title: "Founder, Digital Solutions Co.",
                image: "SW"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <blockquote className="text-gray-700 text-lg italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-disruptive-red rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-disruptive-black">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-disruptive-black mb-4">
              Our Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our growing network of successful partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="text-4xl">{partner.logo}</div>
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
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Apply to join our partner program today and start growing your business with One Tap Media.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                APPLY NOW
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={openTypeform}
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