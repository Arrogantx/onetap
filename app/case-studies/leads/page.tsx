'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageShareSection } from '@/components/page-share-section';
import { ArrowRight, Users, TrendingUp, Target, BarChart3, CheckCircle, Calendar, Building, User, Search } from 'lucide-react';

export default function LeadGrowthCaseStudy() {
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
              300% Lead Growth
              <span className="block text-red-200">For Professional Services Firm</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              How we helped a local law firm triple their qualified leads and dominate 
              their local market through strategic digital marketing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">300%</div>
                <div className="text-red-100">Lead Growth</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">-45%</div>
                <div className="text-red-100">Cost Per Lead</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">#1</div>
                <div className="text-red-100">Local Rankings</div>
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
                      <span className="text-gray-600">Legal Services</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Company Size:</span>
                      <span className="text-gray-600">10-20 employees</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Target Market:</span>
                      <span className="text-gray-600">Local clients within 25 miles</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Services:</span>
                      <span className="text-gray-600">Personal injury, family law</span>
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
                      <span className="text-gray-600">$15,000</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Channels:</span>
                      <span className="text-gray-600">Local SEO, Google Ads, Facebook</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium text-gray-700 w-32">Primary KPI:</span>
                      <span className="text-gray-600">Qualified lead generation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-disruptive-black">The Challenge</h3>
              <p className="text-gray-700">
                LocalService Hub was a well-established law firm with a strong reputation in their community, but they were struggling to grow their client base in an increasingly competitive market. Their digital presence was outdated and they were losing potential clients to more digitally savvy competitors.
              </p>
              <p className="text-gray-700">
                Key challenges included:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Poor visibility in local search results despite 15+ years in business</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Outdated website with low conversion rate (1.5%)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Inefficient Google Ads campaigns with high cost per lead ($350+)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">No system for tracking and nurturing leads</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Limited online reviews and reputation management</span>
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
                <h3 className="text-xl font-bold text-disruptive-black mb-4">1. Local SEO Domination</h3>
                <p className="text-gray-700 mb-4">
                  We implemented a comprehensive local SEO strategy to improve visibility for high-intent local searches.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-disruptive-black mb-3">Key Actions:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Optimized Google Business Profile with service categories, photos, and Q&A</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Built 50+ local citations with consistent NAP information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Created location-specific content targeting local keywords</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Implemented schema markup for attorneys and legal services</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">2. Website Redesign & Conversion Optimization</h3>
                <p className="text-gray-700 mb-4">
                  We redesigned the firm's website with a focus on user experience and conversion optimization.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-disruptive-black mb-3">Key Improvements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Mobile-first design with simplified navigation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Practice area pages with client testimonials and case results</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Implemented live chat and call tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Created practice-specific landing pages for PPC campaigns</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">3. Google Ads Optimization</h3>
                <p className="text-gray-700 mb-4">
                  We restructured and optimized their Google Ads campaigns to focus on high-intent, location-specific keywords.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-disruptive-black mb-3">Key Strategies:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Implemented geo-targeted campaigns with radius bidding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Created ad extensions with location, call, and sitelink information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Developed negative keyword lists to filter out non-qualified traffic</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Implemented call-only campaigns for high-intent mobile searches</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">4. Reputation Management & Reviews</h3>
                <p className="text-gray-700 mb-4">
                  We implemented a systematic approach to building the firm's online reputation and reviews.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-disruptive-black mb-3">Key Actions:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Created automated review request system for satisfied clients</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Developed review monitoring and response protocols</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Featured client testimonials and case results on the website</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-disruptive-red mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Created video testimonials with satisfied clients</span>
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
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-disruptive-black mb-2">+300%</div>
                <div className="text-xl font-medium text-gray-700">Lead Growth</div>
                <p className="text-gray-600 mt-4">Qualified leads increased from 45 to 180 per month</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-disruptive-black mb-2">-45%</div>
                <div className="text-xl font-medium text-gray-700">Cost Per Lead</div>
                <p className="text-gray-600 mt-4">Reduced from $350 to $192 per qualified lead</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <Search className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-disruptive-black mb-2">#1</div>
                <div className="text-xl font-medium text-gray-700">Local Rankings</div>
                <p className="text-gray-600 mt-4">For 35 high-value local keywords</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-disruptive-black mb-2">4.8x</div>
                <div className="text-xl font-medium text-gray-700">Website Conversion Rate</div>
                <p className="text-gray-600 mt-4">Increased from 1.5% to 7.2%</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-disruptive-black">Additional Outcomes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Google reviews increased from 15 to 87 with an average rating of 4.9/5</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Organic traffic increased by 280% year-over-year</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Phone calls from Google Business Profile increased by 320%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Client intake process efficiency improved by 65%</span>
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
              "Working with One Tap Media has been a game-changer for our firm. Their local SEO and digital marketing expertise has completely transformed our online presence and lead generation. We've seen a 300% increase in qualified leads, and we're now the dominant firm in our local market for our practice areas. Their team is responsive, data-driven, and truly cares about our success."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-disruptive-red rounded-full flex items-center justify-center text-white font-bold mr-4">
                ER
              </div>
              <div>
                <div className="font-bold text-disruptive-black">Emily Rodriguez</div>
                <div className="text-gray-600">Marketing Director, LocalService Hub</div>
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
              Ready to Grow Your Lead Generation?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Let's analyze your current lead generation strategy and create a plan to significantly increase your qualified leads.
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