'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, DollarSign, Target, Filter } from 'lucide-react';

type CaseStudyResults = Record<string, string>;

interface CaseStudy {
  id: number;
  company: string;
  industry: string;
  category: string;
  challenge: string;
  solution: string;
  results: CaseStudyResults;
  timeline: string;
  featured: boolean;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    company: 'TechSaaS Pro',
    industry: 'B2B Software',
    category: 'saas',
    challenge: 'High customer acquisition costs and low trial-to-paid conversion rates',
    solution: 'Implemented comprehensive PPC strategy with landing page optimization and email nurturing sequences',
    results: {
      revenue: '+420%',
      cac: '-65%',
      ltv: '+280%',
      conversions: '+340%'
    },
    timeline: '6 months',
    featured: true,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    company: 'FurnitureMax',
    industry: 'E-commerce Furniture',
    category: 'ecommerce',
    challenge: 'Low online sales, high cart abandonment, and poor mobile experience',
    solution: 'Complete website redesign, mobile optimization, and strategic PPC campaigns with retargeting',
    results: {
      revenue: '+520%',
      cartCompletion: '+85%',
      mobileConversions: '+180%',
      roas: '6.8x'
    },
    timeline: '8 months',
    featured: true,
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    company: 'LocalService Hub',
    industry: 'Professional Services',
    category: 'local',
    challenge: 'Limited local visibility and difficulty competing with larger competitors',
    solution: 'Local SEO optimization, Google My Business management, and geo-targeted advertising campaigns',
    results: {
      localRankings: '+350%',
      leads: '+275%',
      callVolume: '+180%',
      marketShare: '+120%'
    },
    timeline: '4 months',
    featured: true,
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    company: 'HealthTech Solutions',
    industry: 'Healthcare Technology',
    category: 'healthcare',
    challenge: 'Difficulty reaching decision-makers and generating qualified B2B leads',
    solution: 'LinkedIn advertising with account-based marketing and content strategy for thought leadership',
    results: {
      qualifiedLeads: '+380%',
      cpl: '-55%',
      pipelineValue: '+450%',
      closingRate: '+90%'
    },
    timeline: '5 months',
    featured: false,
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    company: 'Fashion Forward',
    industry: 'Fashion Retail',
    category: 'retail',
    challenge: 'Low brand awareness and poor social media engagement',
    solution: 'Influencer partnerships, social media advertising, and user-generated content campaigns',
    results: {
      brandAwareness: '+290%',
      socialEngagement: '+420%',
      sales: '+180%',
      customerAcquisition: '+240%'
    },
    timeline: '7 months',
    featured: false,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    company: 'Manufacturing Plus',
    industry: 'Industrial Manufacturing',
    category: 'manufacturing',
    challenge: 'Outdated digital presence and lack of online lead generation',
    solution: 'Website modernization, SEO optimization, and B2B content marketing strategy',
    results: {
      organicTraffic: '+380%',
      leads: '+250%',
      salesCycle: '-30%',
      revenue: '+320%'
    },
    timeline: '9 months',
    featured: false,
    image: 'https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const categories = [
  { id: 'all', label: 'All Industries' },
  { id: 'saas', label: 'SaaS' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'local', label: 'Local Business' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'retail', label: 'Retail' },
  { id: 'manufacturing', label: 'Manufacturing' }
];

const stats = [
  { number: '150+', label: 'Success Stories' },
  { number: '340%', label: 'Average ROI Increase' },
  { number: '$50M+', label: 'Revenue Generated' },
  { number: '98%', label: 'Client Satisfaction' }
];

export default function CaseStudiesPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const openTypeform = () => setIsTypeformOpen(true);
  const closeTypeform = () => setIsTypeformOpen(false);
  
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  const filteredCaseStudies = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

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
              Case Studies
              <span className="block text-red-200">Real Results, Real Growth</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve remarkable growth through 
              strategic digital marketing. Every case study represents real results and measurable ROI.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-red-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-disruptive-red text-white hover:bg-disruptive-dark-red'
                    : 'text-disruptive-gray hover:text-disruptive-red hover:border-disruptive-red'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/50 transition-all duration-300 hover:shadow-xl overflow-hidden group-hover:scale-105">
                  {/* Image Header */}
                  <div className="relative h-48 bg-gradient-to-br from-disruptive-red to-red-600 overflow-hidden">
                    <div className="absolute inset-0 bg-disruptive-black/60 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                        <p className="text-sm opacity-90">{study.industry}</p>
                      </div>
                    </div>
                    {study.featured && (
                      <div className="absolute top-4 left-4 bg-yellow-500 text-disruptive-black px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <ArrowRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-disruptive-red bg-disruptive-red/10 px-2 py-1 rounded">
                          {study.timeline}
                        </span>
                        <span className="text-sm text-gray-500 capitalize">{study.category}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-disruptive-black mb-2">Challenge:</h4>
                      <p className="text-disruptive-gray text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-disruptive-black mb-2">Solution:</h4>
                      <p className="text-disruptive-gray text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      {Object.entries(study.results).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            {key.includes('revenue') || key.includes('sales') ? (
                              <DollarSign className="w-4 h-4 text-green-500" />
                            ) : key.includes('leads') || key.includes('conversions') ? (
                              <TrendingUp className="w-4 h-4 text-disruptive-red" />
                            ) : key.includes('users') || key.includes('customers') ? (
                              <Users className="w-4 h-4 text-blue-500" />
                            ) : (
                              <Target className="w-4 h-4 text-purple-500" />
                            )}
                          </div>
                          <div className="text-lg font-bold text-disruptive-black">{value}</div>
                          <div className="text-xs text-disruptive-gray capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No case studies found for this category.</p>
              <Button
                onClick={() => setActiveCategory('all')}
                className="mt-4 bg-disruptive-red hover:bg-disruptive-dark-red text-white"
              >
                View All Case Studies
              </Button>
            </div>
          )}
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your business goals and create a custom strategy that delivers the same 
              kind of results you've seen in these case studies.
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
                SCHEDULE A CONSULTATION
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