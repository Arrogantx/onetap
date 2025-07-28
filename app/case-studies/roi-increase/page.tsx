'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PageShareSection } from '@/components/page-share-section';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, DollarSign, Target, BarChart3, CheckCircle, Calendar, Building, User } from 'lucide-react';

export default function ROIIncreaseCaseStudy() {
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
              How We Increased ROI by
              <span className="block text-red-200">500% in 90 Days</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              A comprehensive case study on how we transformed a struggling PPC campaign into a 
              high-performing revenue engine for a B2B SaaS company.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">500%</div>
                <div className="text-red-100">ROI Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">90</div>
                <div className="text-red-100">Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">$2.5M</div>
                <div className="text-red-100">Revenue Generated</div>
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
                      <span className="text-gray-600">B2B SaaS</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Company Size:</span>
                      <span className="text-gray-600">50-100 employees</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Target Market:</span>
                      <span className="text-gray-600">Mid-market businesses</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Product:</span>
                      <span className="text-gray-600">Project management software</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-disruptive-black mb-4">Project Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Timeframe:</span>
                      <span className="text-gray-600">90 days</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Monthly Budget:</span>
                      <span className="text-gray-600">$50,000</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Channels:</span>
                      <span className="text-gray-600">Google Ads, LinkedIn Ads</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Primary KPI:</span>
                      <span className="text-gray-600">Cost per qualified lead</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-disruptive-black">The Challenge</h3>
              <p className="text-gray-700">
                The client came to us with a struggling PPC campaign that was generating leads but at an unsustainable cost. Their previous agency had focused on vanity metrics like impressions and clicks, but the quality of leads was poor, resulting in a low conversion rate to paid customers and a negative ROI.
              </p>
              <p className="text-gray-700">
                Key challenges included:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">High cost per acquisition ($650) that exceeded customer lifetime value</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Poor quality leads that weren't converting to sales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Inefficient campaign structure with keyword cannibalization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Lack of alignment between ad messaging and landing pages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">No clear attribution model to understand which channels were performing</span>
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
              <Target className="w-8 h-8 text-disruptive-red mr-4" />
              <h2 className="text-3xl font-bold text-disruptive-black">Our Approach</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">1. Comprehensive Audit & Analysis</h3>
                <p className="text-gray-700 mb-4">
                  We began with a deep dive into the client's PPC accounts, analytics data, and sales funnel to identify issues and opportunities.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-disruptive-black mb-3">Key Findings:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Budget was being wasted on broad match keywords with low intent</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Ad copy wasn't effectively qualifying prospects</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Landing pages had poor conversion rates (1.2%)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">No lead scoring system to prioritize follow-up</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">2. Strategic Restructuring</h3>
                <p className="text-gray-700 mb-4">
                  Based on our findings, we completely restructured the campaign architecture to focus on high-intent keywords and qualified leads.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-disruptive-black mb-3">Key Actions:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Implemented SKAG (Single Keyword Ad Group) structure for high-value keywords</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Created negative keyword lists to prevent wasted spend</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Developed customer intent matrix to align keywords with buying stages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Implemented advanced bid strategies based on lead quality</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">3. Landing Page Optimization</h3>
                <p className="text-gray-700 mb-4">
                  We redesigned the client's landing pages to improve conversion rates and better qualify leads.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-disruptive-black mb-3">Key Improvements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Created industry-specific landing pages with relevant messaging</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Implemented multi-step forms to better qualify leads</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Added social proof and case studies relevant to each target industry</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Improved page load speed by 65%</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">4. Lead Nurturing & Scoring</h3>
                <p className="text-gray-700 mb-4">
                  We implemented a lead scoring system and nurturing sequences to improve lead quality and conversion rates.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-disruptive-black mb-3">Key Components:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Developed behavioral scoring model based on engagement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Created automated email sequences for different buyer personas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Implemented lead routing based on score and qualification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Set up retargeting campaigns for high-value prospects</span>
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
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-disruptive-black mb-2">500%</div>
                <div className="text-xl font-medium text-gray-700">Increase in ROI</div>
                <p className="text-gray-600 mt-4">From 0.8x to 5x return on ad spend</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-disruptive-black mb-2">-68%</div>
                <div className="text-xl font-medium text-gray-700">Reduction in CPA</div>
                <p className="text-gray-600 mt-4">From $650 to $208 per acquisition</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-disruptive-black mb-2">4.8x</div>
                <div className="text-xl font-medium text-gray-700">Conversion Rate</div>
                <p className="text-gray-600 mt-4">From 1.2% to 5.8% on landing pages</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-disruptive-black mb-2">$2.5M</div>
                <div className="text-xl font-medium text-gray-700">Revenue Generated</div>
                <p className="text-gray-600 mt-4">In the first 90 days of the campaign</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-disruptive-black">Additional Outcomes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Sales cycle reduced by 35% due to better lead qualification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Customer lifetime value increased by 20% through better customer-product fit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Marketing and sales alignment improved, with 90% of leads now accepted by sales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Scalable campaign structure allowed for 3x budget increase in month 4</span>
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
              "One Tap Media completely transformed our digital marketing strategy. Within 90 days, they turned our struggling campaigns into a major revenue driver for the business. Their data-driven approach and focus on quality over quantity has changed how we think about marketing. The ROI speaks for itself - we're now getting 5x return on our ad spend."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-disruptive-red rounded-full flex items-center justify-center text-white font-bold mr-4">
                MS
              </div>
              <div>
                <div className="font-bold text-disruptive-black">Michael Smith</div>
                <div className="text-gray-600">CMO, SaaS Solutions Inc.</div>
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
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Let's analyze your current marketing performance and create a strategy to dramatically improve your ROI.
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