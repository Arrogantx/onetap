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
import { ArrowRight, CheckCircle, Search, TrendingUp, Globe, FileText, Link, MapPin, BarChart3, Users } from 'lucide-react';

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
    title: 'Technical SEO Audits',
    description: 'Comprehensive site analysis to identify and fix technical issues that impact rankings.'
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Data-driven content planning that targets high-value keywords and user intent.'
  },
  {
    icon: Link,
    title: 'Link Building',
    description: 'White-hat link acquisition strategies that build domain authority and trust.'
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Dominate local search results and drive foot traffic to your business.'
  }
];

const services = [
  {
    title: 'Technical SEO',
    description: 'Optimize your website\'s technical foundation for better search engine crawling and indexing.',
    features: ['Site Speed Optimization', 'Mobile Optimization', 'Schema Markup', 'XML Sitemaps', 'Robots.txt Optimization', 'Core Web Vitals']
  },
  {
    title: 'On-Page SEO',
    description: 'Optimize individual pages to rank higher and earn more relevant traffic.',
    features: ['Keyword Optimization', 'Title Tag Optimization', 'Meta Descriptions', 'Header Tag Structure', 'Internal Linking', 'Content Optimization']
  },
  {
    title: 'Content Marketing',
    description: 'Create valuable, SEO-optimized content that attracts and engages your target audience.',
    features: ['Keyword Research', 'Content Planning', 'Blog Writing', 'Landing Page Copy', 'Content Audits', 'Content Updates']
  },
  {
    title: 'Link Building',
    description: 'Build high-quality backlinks that improve your domain authority and search rankings.',
    features: ['Link Prospecting', 'Outreach Campaigns', 'Guest Posting', 'Resource Page Links', 'Broken Link Building', 'Digital PR']
  },
  {
    title: 'Local SEO',
    description: 'Optimize your online presence to attract more business from local searches.',
    features: ['Google My Business', 'Local Citations', 'Review Management', 'Local Content', 'NAP Consistency', 'Local Link Building']
  },
  {
    title: 'SEO Analytics',
    description: 'Track, measure, and report on your SEO performance with detailed analytics.',
    features: ['Ranking Tracking', 'Traffic Analysis', 'Conversion Tracking', 'Competitor Analysis', 'Custom Reporting', 'ROI Measurement']
  }
];

const caseStudies: CaseStudy[] = [
  {
    company: 'Local Law Firm',
    industry: 'Legal Services',
    challenge: 'Poor local visibility and low organic traffic',
    solution: 'Local SEO optimization, content strategy, and citation building',
    results: {
      traffic: '+450%',
      rankings: '+280%',
      leads: '+320%'
    }
  },
  {
    company: 'B2B Software Company',
    industry: 'Technology',
    challenge: 'Competing with established players for competitive keywords',
    solution: 'Long-tail keyword strategy, technical SEO, and content marketing',
    results: {
      traffic: '+380%',
      keywords: '+250%',
      conversions: '+190%'
    }
  },
  {
    company: 'E-commerce Store',
    industry: 'Retail',
    challenge: 'Low product page rankings and poor site structure',
    solution: 'Technical SEO overhaul, product page optimization, and link building',
    results: {
      revenue: '+520%',
      traffic: '+340%',
      rankings: '+280%'
    }
  }
];

export default function SEOPage() {
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
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-24 overflow-hidden">
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
                SEO That Drives
                <span className="block text-green-200">Long-Term Growth</span>
              </h1>
              
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Build sustainable organic traffic and dominate search results with our comprehensive 
                SEO strategies. We focus on long-term growth, not quick fixes.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Button
                  onClick={openTypeform}
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
                >
                  GET FREE SEO AUDIT
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  onClick={openTypeform}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
                >
                  SCHEDULE CONSULTATION
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">250%</div>
                  <div className="text-green-200 text-sm">Avg Traffic Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-green-200 text-sm">Keywords Ranked</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">150+</div>
                  <div className="text-green-200 text-sm">SEO Projects</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* SEO Dashboard mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">SEO Performance</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">45,280</div>
                    <div className="text-sm opacity-80">Monthly Organic Traffic</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">1,247</div>
                    <div className="text-sm opacity-80">Keywords Ranking</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Page 1 Rankings</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <span className="text-sm font-bold">78%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Domain Authority</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <span className="text-sm font-bold">65</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Organic CTR</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                    <span className="text-sm font-bold">8.2%</span>
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
              Our SEO Approach
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with strategic thinking to deliver SEO results 
              that drive sustainable business growth.
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-green-600" />
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
              Comprehensive SEO Services
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
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
              SEO Success Stories
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our SEO strategies have delivered long-term growth for businesses across industries.
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
                <Card className="h-full border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-disruptive-black mb-2">{study.company}</h3>
                      <p className="text-green-600 font-medium">{study.industry}</p>
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
                          <div className="text-lg font-bold text-green-600">{value}</div>
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
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Dominate Organic Search?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let's analyze your current SEO performance and create a strategy to drive sustainable organic growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET FREE SEO AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={openTypeform}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
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