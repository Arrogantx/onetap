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
import { ArrowRight, CheckCircle, Search, Target, TrendingUp, Zap, BarChart3, MousePointer, DollarSign, Users } from 'lucide-react';

type CaseStudyResults = Record<string, string>;

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseStudyResults;
}

const features = [
  {
    icon: Search,
    title: 'Keyword Research & Strategy',
    description: 'In-depth keyword analysis to identify high-converting search terms and opportunities.'
  },
  {
    icon: Target,
    title: 'Campaign Optimization',
    description: 'Continuous optimization of ad copy, bidding strategies, and targeting for maximum ROI.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Tracking',
    description: 'Real-time monitoring and detailed reporting on campaign performance and KPIs.'
  },
  {
    icon: Zap,
    title: 'Quick Implementation',
    description: 'Fast campaign setup and launch to start driving qualified traffic immediately.'
  }
];

const services = [
  {
    title: 'Google Ads Management',
    description: 'Complete Google Ads account management including search, display, and video campaigns.',
    features: ['Search Campaigns', 'Display Advertising', 'YouTube Ads', 'Shopping Campaigns', 'Performance Max', 'Local Campaigns']
  },
  {
    title: 'Bing Ads Management',
    description: 'Maximize your reach with Microsoft Advertising across Bing, Yahoo, and partner networks.',
    features: ['Search Campaigns', 'Shopping Campaigns', 'Audience Targeting', 'Import from Google', 'LinkedIn Profile Targeting', 'In-market Audiences']
  },
  {
    title: 'Shopping Campaigns',
    description: 'Product-focused campaigns that showcase your inventory directly in search results.',
    features: ['Product Feed Optimization', 'Smart Shopping', 'Standard Shopping', 'Local Inventory Ads', 'Showcase Shopping', 'Performance Max for Retail']
  },
  {
    title: 'Performance Max',
    description: 'Google\'s newest campaign type that uses machine learning to optimize across all channels.',
    features: ['Asset Group Creation', 'Audience Signals', 'Creative Optimization', 'Cross-Channel Reach', 'Smart Bidding', 'Performance Insights']
  }
];

const caseStudies: CaseStudy[] = [
  {
    company: 'TechSaaS Pro',
    industry: 'B2B Software',
    challenge: 'High cost per acquisition and low conversion rates',
    solution: 'Restructured campaigns, improved landing pages, and implemented smart bidding',
    results: {
      cpa: '-65%',
      conversions: '+280%',
      roas: '4.8x'
    }
  },
  {
    company: 'E-commerce Plus',
    industry: 'Online Retail',
    challenge: 'Struggling to compete with larger competitors',
    solution: 'Long-tail keyword strategy and shopping campaign optimization',
    results: {
      revenue: '+420%',
      traffic: '+180%',
      roas: '6.2x'
    }
  },
  {
    company: 'Local Services Co',
    industry: 'Professional Services',
    challenge: 'Limited local visibility and high competition',
    solution: 'Local campaign optimization and geo-targeted bidding strategies',
    results: {
      leads: '+340%',
      cpl: '-45%',
      roas: '5.1x'
    }
  }
];

export default function PaidSearchPage() {
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
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/10 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8"
            >
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                Paid Search
                <span className="block text-blue-200">That Converts</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Drive qualified traffic and maximize ROI with expertly managed Google Ads and Bing Ads campaigns. 
                Our data-driven approach ensures every click counts.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Button
                  onClick={openTypeform}
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
                >
                  GET FREE PPC AUDIT
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                 onClick={openTypeform}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
                >
                  SCHEDULE CONSULTATION
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">340%</div>
                  <div className="text-blue-200 text-sm">Avg ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">$10M+</div>
                  <div className="text-blue-200 text-sm">Ad Spend Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-blue-200 text-sm">Campaigns Launched</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Dashboard mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Campaign Performance</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">$24,580</div>
                    <div className="text-sm opacity-80">Revenue This Month</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">4.8x</div>
                    <div className="text-sm opacity-80">Return on Ad Spend</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Google Ads</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm font-bold">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Bing Ads</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                    <span className="text-sm font-bold">72%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Shopping</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '91%' }}></div>
                    </div>
                    <span className="text-sm font-bold">91%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Our Paid Search Works
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology combines strategic thinking with tactical execution to deliver 
              campaigns that consistently outperform industry benchmarks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Paid Search Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
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

      {/* Case Studies Section */}
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
              Paid Search Success Stories
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our paid search strategies have delivered exceptional results for businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-disruptive-black mb-2">{study.company}</h3>
                      <p className="text-blue-600 font-medium">{study.industry}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-disruptive-black mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                      
                      <h4 className="font-bold text-disruptive-black mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      {Object.entries(study.results).map(([key, value]: [string, string]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key}</div>
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's audit your current campaigns and show you exactly how to improve your paid search performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET FREE PPC AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={openTypeform}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
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