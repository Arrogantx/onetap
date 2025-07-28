'use client';

import { useState, useRef } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  CheckCircle, 
  Store, 
  ShoppingCart, 
  TrendingUp, 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  Palette, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import Link from 'next/link';
import { TYPEFORM_IDS } from '@/components/typeform-modal';

export default function FurnitureRedtailersPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef);

  const openTypeform = () => setIsTypeformOpen(true);
  const closeTypeform = () => setIsTypeformOpen(false);
  
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
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
              Grow Your Furniture Store
              <span className="block text-red-200">With the Right Marketing, Strategy & Technology</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              We help furniture retailers choose and implement the right digital tools, platforms, and campaigns 
              to scale sales—in-store and online.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button
                onClick={openTypeform}
                size="lg" 
                id="furniture-cta-button"
                className="bg-white text-disruptive-red hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
              >
                GET YOUR CUSTOM GROWTH PLAN
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <span className="text-white font-medium">Meta Partner</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <span className="text-white font-medium">Google Partner</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <span className="text-white font-medium">HubSpot Certified</span>
              </div>
            </div>
            
            {/* Client Logos */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4">
                <span className="text-white font-bold">Curly's Furniture</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4">
                <span className="text-white font-bold">5th Avenue Furniture</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4">
                <span className="text-white font-bold">Best Buy Furniture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
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
              See the Real Results Furniture Stores Are Getting
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: '5.7x',
                label: 'Return on Ad Spend (ROAS)',
                description: 'with strategic Google & Facebook ads',
                icon: TrendingUp
              },
              {
                stat: '3x',
                label: 'Foot Traffic',
                description: 'by aligning local and online campaigns',
                icon: Store
              },
              {
                stat: '47%',
                label: 'Sales Increase',
                description: 'through smarter technology integrations',
                icon: ShoppingCart
              }
            ].map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-xl text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-disruptive-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <result.icon className="w-8 h-8 text-disruptive-red" />
                    </div>
                    
                    <div className="text-4xl font-bold text-disruptive-black mb-2">{result.stat}</div>
                    <div className="text-xl font-bold text-gray-700 mb-3">{result.label}</div>
                    <p className="text-gray-600">{result.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-disruptive-red hover:bg-disruptive-dark-red text-white">
              <Link href="/case-studies">
                EXPLORE MORE SUCCESS STORIES
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Standard Marketing Isn't Enough */}
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
              Today's Furniture Buyers Expect More. So Should You.
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that simply running ads won't cut it anymore. Success requires the right digital strategy, 
              precise platform selection, and tools working together seamlessly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Omni-Channel Growth',
                description: 'We integrate digital marketing with your physical showroom strategy, driving measurable foot traffic and online sales simultaneously.',
                icon: Store
              },
              {
                title: 'Tailored Tech Stack',
                description: 'Every furniture business is different. We help you select the right POS, website platforms, CRMs, and integrations to support your unique goals.',
                icon: Database
              },
              {
                title: 'Measured Results & Attribution',
                description: 'We make sure you know exactly where sales are coming from—online or offline—with clear, actionable analytics and reporting.',
                icon: BarChart3
              }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-disruptive-red/10 rounded-full flex items-center justify-center mb-6">
                      <pillar.icon className="w-8 h-8 text-disruptive-red" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-disruptive-black mb-4">{pillar.title}</h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Client */}
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
              Featured Client: Curly's Furniture
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-disruptive-black mb-6">Before Working With Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-600 font-bold">✕</span>
                    </div>
                    <span className="text-gray-700">Unclear ROI on marketing spend</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-600 font-bold">✕</span>
                    </div>
                    <span className="text-gray-700">Random ad spending without strategy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-600 font-bold">✕</span>
                    </div>
                    <span className="text-gray-700">Scattered tools without integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-600 font-bold">✕</span>
                    </div>
                    <span className="text-gray-700">Difficulty tracking in-store vs. online sales</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-disruptive-black mb-6">After 60 Days With Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Integrated tech stack with clear data flow</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Tailored marketing campaigns with measurable ROI</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Accurate attribution between online and in-store</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700"><span className="font-bold text-green-600">47% sales increase</span> in just 60 days</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-50 p-8 rounded-xl"
          >
            <div className="text-center">
              <div className="text-4xl text-disruptive-red mb-6">"</div>
              <p className="text-xl text-gray-700 italic mb-6">
                One Tap took our marketing to another level—now every dollar is accounted for, and every strategy has a clear ROI.
              </p>
              <div className="font-bold text-disruptive-black">— Owner, Curly's Furniture</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
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
              How We Work (Without the Guesswork)
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you find, choose, and implement the ideal combination of marketing campaigns 
              and digital tools for your business goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Ad Strategy',
                description: 'Targeted campaigns on Google, Facebook, Instagram, and TikTok designed specifically for furniture retailers.',
                icon: TrendingUp
              },
              {
                title: 'E-Commerce & Website Consulting',
                description: 'Expert guidance on Shopify, Webflow, BigCommerce, and custom solutions for furniture businesses.',
                icon: ShoppingCart
              },
              {
                title: 'CRM & Email Automation',
                description: 'Implement and optimize HubSpot, Salesforce, or Klaviyo to nurture leads and drive repeat business.',
                icon: Database
              },
              {
                title: 'POS & Inventory Integration',
                description: 'Seamlessly connect Storis, Furniture Wizard, or Shopify POS with your marketing systems.',
                icon: Store
              },
              {
                title: 'Data & Analytics',
                description: 'Set up GA4, Meta Conversions API, and offline sales tracking for complete visibility.',
                icon: BarChart3
              },
              {
                title: 'Creative & Branding',
                description: 'Develop high-converting ads, emails, and website visuals that showcase your furniture beautifully.',
                icon: Palette
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-disruptive-red/10 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-disruptive-red" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-disruptive-black mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This a Fit */}
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
              Is This a Fit for Your Store?
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We might be right for you if...
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                'You have a showroom (or multiple locations)',
                'You\'re committed to scaling, not just maintaining',
                'You\'re investing in marketing and want clear ROI',
                'You want help selecting and integrating the best digital solutions'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="bg-gray-50 p-6 rounded-xl inline-block">
                <p className="text-xl font-bold text-disruptive-black">
                  If this sounds like you, let's create your growth plan.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="py-20 bg-gray-50" id="growth-plan-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-disruptive-black mb-6">
              Your Custom Growth Plan
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete the quick form below and we'll reach out with personalized next steps.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-disruptive-black mb-6">Ready for Your Custom Growth Plan?</h3>
              <p className="text-gray-600 mb-8">Our team will analyze your business and create a tailored strategy to help you grow.</p>
              <Button
                onClick={openTypeform}
                id="furniture-form-button"
                size="lg"
                className="w-full bg-disruptive-red hover:bg-disruptive-dark-red text-white px-8 py-4 text-lg font-bold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
              >
                GET YOUR CUSTOM GROWTH PLAN
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: 'Do you provide technology recommendations even if we don\'t use your ongoing marketing?',
                  answer: 'Yes, we offer strategic consultations that help you choose the right tools and solutions, regardless of ongoing marketing services.'
                },
                {
                  question: 'Can you track in-store sales from digital ads?',
                  answer: 'Absolutely. Our integrated setup accurately measures online-to-offline conversions for clear ROI.'
                },
                {
                  question: 'Do we have to change our POS or website to work with you?',
                  answer: 'Not necessarily. We\'ll help you decide if your current solutions work, or if there\'s a better option to achieve your goals.'
                },
                {
                  question: 'How do you price your services?',
                  answer: 'Every client is unique. A typical furniture retail client invests $2,000–$5,000/month for comprehensive marketing and strategic guidance.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-disruptive-black">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-disruptive-red flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-disruptive-red flex-shrink-0" />
                    )}
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="p-6 pt-0 bg-white">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
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
              Ready to Grow Your Furniture Business?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Let's create a custom growth plan tailored specifically for your furniture store.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                id="furniture-bottom-cta"
                className="bg-white text-disruptive-red hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
              >
                GET YOUR CUSTOM GROWTH PLAN
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      <TypeformModal
        isOpen={isTypeformOpen}
        onClose={closeTypeform}
        typeformId={TYPEFORM_IDS.DEFAULT}
      />
      
      {/* Modals */}
      <TypeformModal isOpen={isTypeformOpen} onClose={closeTypeform} />
    </main>
  );
}