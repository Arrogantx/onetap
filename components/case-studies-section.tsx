'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';

type CaseStudyResults = Record<string, string>;

interface CaseStudy {
  id: number;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseStudyResults;
  category: string;
  featured: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    company: 'FurnitureMax',
    industry: 'Furniture Retail',
    challenge: 'Low online sales, high cart abandonment',
    solution: 'PPC campaigns + landing page optimization',
    results: {
      revenue: '+420%',
      conversions: '+280%',
      roas: '6.8x',
    },
    category: 'furniture',
    featured: true,
  },
  {
    id: 2,
    company: 'TechStartup Pro',
    industry: 'SaaS Technology',
    challenge: 'Need to scale user acquisition',
    solution: 'Multi-channel PPC + conversion funnels',
    results: {
      revenue: '+350%',
      conversions: '+180%',
      roas: '4.2x',
    },
    category: 'saas',
    featured: true,
  },
  {
    id: 3,
    company: 'LocalService Hub',
    industry: 'Professional Services',
    challenge: 'Increase local market share',
    solution: 'Local SEO + Google Ads optimization',
    results: {
      revenue: '+275%',
      conversions: '+160%',
      roas: '5.4x',
    },
    category: 'services',
    featured: false,
  },
  {
    id: 4,
    company: 'EcommerceGrow',
    industry: 'E-commerce',
    challenge: 'Improve Facebook Ads performance',
    solution: 'Creative testing + audience optimization',
    results: {
      revenue: '+520%',
      conversions: '+310%',
      roas: '7.2x',
    },
    category: 'ecommerce',
    featured: true,
  },
  {
    id: 5,
    company: 'HealthTech Solutions',
    industry: 'Healthcare Technology',
    challenge: 'Generate qualified B2B leads',
    solution: 'LinkedIn Ads + content marketing funnel',
    results: {
      revenue: '+380%',
      conversions: '+220%',
      roas: '5.8x',
    },
    category: 'healthcare',
    featured: false,
  },
  {
    id: 6,
    company: 'RetailBrand Co',
    industry: 'Fashion Retail',
    challenge: 'Increase online brand awareness',
    solution: 'Omnichannel strategy + retargeting',
    results: {
      revenue: '+290%',
      conversions: '+140%',
      roas: '4.6x',
    },
    category: 'retail',
    featured: false,
  },
];

const categories = [
  { id: 'all', label: 'All Industries' },
  { id: 'furniture', label: 'Furniture' },
  { id: 'saas', label: 'SaaS' },
  { id: 'services', label: 'Services' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'retail', label: 'Retail' },
];

export function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });

  const filteredCaseStudies = activeCategory === 'all' 
    ? caseStudies.filter(study => study.featured)
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <section ref={sectionRef} className="py-20 bg-disruptive-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.4 } } : {}}
          className="text-center mb-16"
        >
          <p className="text-disruptive-red font-bold uppercase tracking-wider mb-4">
            PROVEN RESULTS ACROSS INDUSTRIES
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-disruptive-black mb-6">
            Real Growth Stories From Real Businesses
          </h2>
          <div className="w-16 h-1 bg-disruptive-red mx-auto mb-8"></div>
          <p className="text-xl text-disruptive-gray max-w-4xl mx-auto">
            See how we've helped businesses like yours achieve measurable growth through strategic 
            digital marketing. Every campaign is built on data, optimized for results, and designed to scale.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } } : {}}
          className="flex flex-wrap justify-center gap-4 mb-12"
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
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 + (index * 0.05) } } : {}}
              className="group"
            >
              <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
                <div className="relative h-40 bg-gradient-to-br from-disruptive-red to-red-600">
                  <div className="absolute inset-0 bg-disruptive-black/60 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h4 className="text-xl font-bold mb-2">{study.company}</h4>
                      <p className="text-sm opacity-90">{study.industry}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="mb-4">
                    <h4 className="font-bold text-disruptive-black mb-2">Challenge:</h4>
                    <p className="text-disruptive-gray text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-disruptive-black mb-2">Solution:</h4>
                    <p className="text-disruptive-gray text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <DollarSign className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="text-lg font-bold text-green-500">{study.results.revenue}</div>
                      <div className="text-xs text-disruptive-gray">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="w-4 h-4 text-disruptive-red" />
                      </div>
                      <div className="text-lg font-bold text-disruptive-red">{study.results.conversions}</div>
                      <div className="text-xs text-disruptive-gray">Conversions</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-purple-500" />
                      </div>
                      <div className="text-lg font-bold text-purple-500">{study.results.roas}</div>
                      <div className="text-xs text-disruptive-gray">ROAS</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } } : {}}
          className="text-center"
        >
          <p className="text-xl font-bold text-disruptive-black mb-6">
            Ready to be our next success story?
          </p>
          <Button
            onClick={() => {
              document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'audit' } }));
            }}
            size="lg"
            className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-8 py-4 rounded-lg font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl growth-plan-button"
          >
            START YOUR FREE GROWTH PLAN →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}