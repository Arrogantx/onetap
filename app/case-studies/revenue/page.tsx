'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { PageShareSection } from '@/components/page-share-section';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, DollarSign, ShoppingCart, TrendingUp, BarChart3, CheckCircle, Calendar, Building, User } from 'lucide-react';

export default function RevenueGeneratedCaseStudy() {
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
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-white font-bold">CASE STUDY</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              $2M+ Revenue Generated
              <span className="block text-red-200">For E-commerce Brand</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              How we helped an e-commerce furniture brand scale their online sales and generate 
              over $2 million in revenue through strategic digital marketing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">$2.1M</div>
                <div className="text-red-100">Revenue Generated</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">6.8x</div>
                <div className="text-red-100">ROAS</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">420%</div>
                <div className="text-red-100">Sales Growth</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Building className="w-8 h-8 text-disruptive-red mr-4" />
              <h2 className="text-3xl font-bold text-disruptive-black">Client Overview</h2>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-disruptive-black mb-4">Company Profile</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Industry:</span>
                      <span className="text-gray-600">E-commerce Furniture</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Company Size:</span>
                      <span className="text-gray-600">20-50 employees</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Target Market:</span>
                      <span className="text-gray-600">Home owners, 25-45</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Products:</span>
                      <span className="text-gray-600">Modern furniture & home decor</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-disruptive-black mb-4">Project Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Timeframe:</span>
                      <span className="text-gray-600">6 months</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Monthly Budget:</span>
                      <span className="text-gray-600">$30,000</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Channels:</span>
                      <span className="text-gray-600">Google Ads, Facebook/Instagram, Email</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Primary KPI:</span>
                      <span className="text-gray-600">ROAS (Return on Ad Spend)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-disruptive-black">The Challenge</h3>
              <p className="text-gray-700">
                FurnitureMax was struggling to scale their e-commerce business despite having quality products and competitive pricing. Their digital marketing efforts were fragmented and inefficient, resulting in high customer acquisition costs and low conversion rates.
              </p>
              <p className="text-gray-700">
                Key challenges included:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">High cart abandonment rate (78%) and poor mobile conversion experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Inefficient ad spend with a ROAS of only 2.1x</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Limited customer data and no segmentation strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Disjointed marketing channels with no cohesive strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Seasonal sales fluctuations with no strategy to smooth revenue</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <ShoppingCart className="w-8 h-8 text-disruptive-red mr-4" />
              <h2 className="text-3xl font-bold text-disruptive-black">Our Approach</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">1. Conversion Rate Optimization</h3>
                <p className="text-gray-700 mb-4">
                  We began by optimizing the website and checkout experience to improve conversion rates before scaling ad spend.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-disruptive-black mb-3">Key Actions:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Redesigned product pages with improved imagery and social proof</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Streamlined checkout process, reducing steps from 5 to 2</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Implemented exit-intent popups with targeted offers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Optimized mobile experience with simplified navigation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">2. Multi-Channel Strategy</h3>
                <p className="text-gray-700 mb-4">
                  We developed an integrated multi-channel strategy to reach customers at every stage of the buying journey.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-disruptive-black mb-3">Key Components:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Google Shopping campaigns with product feed optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Facebook/Instagram dynamic product ads with lifestyle imagery</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Email marketing automation for cart abandonment and customer retention</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Cross-channel retargeting with sequential messaging</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">3. Customer Segmentation & Personalization</h3>
                <p className="text-gray-700 mb-4">
                  We implemented advanced customer segmentation to deliver personalized experiences and offers.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-disruptive-black mb-3">Key Strategies:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Created customer segments based on purchase history and browsing behavior</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Developed personalized product recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Implemented dynamic pricing and promotions based on customer value</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Created lookalike audiences based on high-value customer profiles</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">4. Data-Driven Optimization</h3>
                <p className="text-gray-700 mb-4">
                  We implemented a continuous optimization process based on real-time data and testing.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-disruptive-black mb-3">Key Processes:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Weekly performance analysis and budget reallocation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">A/B testing of ad creative, landing pages, and offers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Customer journey analysis to identify and fix conversion bottlenecks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Competitor monitoring and strategic adjustments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <BarChart3 className="w-8 h-8 text-disruptive-red mr-4" />
              <h2 className="text-3xl font-bold text-disruptive-black">Results</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-disruptive-black mb-2">$2.1M</div>
                <div className="text-xl font-medium text-gray-700">Revenue Generated</div>
                <p className="text-gray-600 mt-4">In 6 months from digital channels</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-disruptive-black mb-2">6.8x</div>
                <div className="text-xl font-medium text-gray-700">ROAS</div>
                <p className="text-gray-600 mt-4">Up from 2.1x before our engagement</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <ShoppingCart className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-disruptive-black mb-2">-65%</div>
                <div className="text-xl font-medium text-gray-700">Cart Abandonment</div>
                <p className="text-gray-600 mt-4">From 78% to 27% abandonment rate</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-disruptive-black mb-2">+35%</div>
                <div className="text-xl font-medium text-gray-700">Average Order Value</div>
                <p className="text-gray-600 mt-4">Through cross-selling and upselling</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-disruptive-black">Additional Outcomes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Customer retention rate increased by 40%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Mobile conversion rate improved by 250%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Email marketing revenue increased by 320%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Seasonal revenue fluctuations reduced by 60%</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <div className="flex items-center mb-6">
              <User className="w-8 h-8 text-disruptive-red mr-4" />
              <h2 className="text-2xl font-bold text-disruptive-black">Client Testimonial</h2>
            </div>
            
            <blockquote className="text-gray-700 text-lg italic mb-6">
              "Working with One Tap Media has been transformative for our business. They didn't just run ads - they completely overhauled our digital strategy and customer experience. The results have been incredible, with over $2 million in revenue generated in just 6 months. Their data-driven approach and attention to detail is unmatched. We now view them as true partners in our growth."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-disruptive-red rounded-full flex items-center justify-center text-white font-bold mr-4">
                SJ
              </div>
              <div>
                <div className="font-bold text-disruptive-black">Sarah Johnson</div>
                <div className="text-gray-600">CEO, FurnitureMax</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-disruptive-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Generate Similar Results?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Let's analyze your e-commerce business and create a strategy to drive significant revenue growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET YOUR FREE AUDIT
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
     
     {/* Share Section */}
     <PageShareSection />
      
      {/* Modals */}
      <TypeformModal isOpen={isTypeformOpen} onClose={closeTypeform} />
      <CalendlyPopup isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </main>
  );
}