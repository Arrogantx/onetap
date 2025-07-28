'use client';

import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRef } from 'react';
import { TYPEFORM_IDS } from '@/components/typeform-modal';

const services = [
  {
    title: 'Paid Search',
    description: 'Google Ads campaigns that drive qualified traffic and maximize your ROI with data-driven optimization.',
    features: ['Google Ads Management', 'Bing Ads Optimization', 'Shopping Campaigns', 'Performance Max'],
    results: '+340% Average ROI',
    gradient: 'from-disruptive-red to-red-600',
  },
  {
    title: 'Paid Social',
    description: 'Facebook, Instagram, and LinkedIn campaigns that reach your ideal customers where they spend time.',
    features: ['Facebook & Instagram Ads', 'LinkedIn Lead Generation', 'TikTok Advertising', 'Creative Testing'],
    results: '+280% Lead Quality',
    gradient: 'from-disruptive-red to-red-700',
  },
  {
    title: 'SEO',
    description: 'Organic search strategies that build long-term visibility and drive sustainable traffic growth.',
    features: ['Technical SEO Audits', 'Content Strategy', 'Link Building', 'Local SEO'],
    results: '+250% Organic Traffic',
    gradient: 'from-disruptive-red to-disruptive-dark-red',
  },
  {
    title: 'Conversion Rate Optimization',
    description: 'Turn more visitors into customers through systematic testing and user experience optimization.',
    features: ['A/B Testing', 'Landing Page Design', 'User Experience Audits', 'Analytics Setup'],
    results: '+180% Conversion Rate',
    gradient: 'from-red-600 to-disruptive-dark-red',
  },
  {
    title: 'Creative & Design',
    description: 'High-converting ad creatives and landing pages designed to capture attention and drive action.',
    features: ['Ad Creative Production', 'Video Marketing', 'Graphic Design', 'Copywriting'],
    results: '+320% Engagement',
    gradient: 'from-disruptive-red to-red-800',
  },
  {
    title: 'Data Analytics',
    description: 'Advanced tracking and reporting that provides actionable insights for better decision making.',
    features: ['Custom Dashboards', 'Attribution Modeling', 'Performance Reporting', 'ROI Tracking'],
    results: '+400% Data Clarity',
    gradient: 'from-red-700 to-disruptive-dark-red',
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  
  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.4 } } : {}}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-disruptive-red/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-disruptive-red rounded-full"></span>
            <span className="text-disruptive-red font-bold uppercase tracking-wider text-sm">
              COMPREHENSIVE SOLUTIONS
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-disruptive-black mb-6 leading-tight">
            Services That Drive
            <span className="block text-disruptive-red">Real Growth</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-disruptive-red to-red-600 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From PPC to SEO, we offer comprehensive digital marketing services designed 
            to maximize your ROI and accelerate sustainable business growth. Every strategy 
            is data-driven and results-focused.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 + (index * 0.05) } } : {}}
              className="group"
            >
              <Card className="h-full border-2 border-gray-100 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  {/* Header with gradient - NO ICONS */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                        {service.title}
                      </h3>
                      <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-sm font-bold">{service.results}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 + (featureIndex * 0.05) } } : {}}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-disruptive-red flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Link 
                      href={service.title === 'Creative & Design' ? '/services/creative' : `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group/btn flex items-center text-disruptive-red hover:text-disruptive-dark-red font-bold transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } } : {}}
          className="relative"
        >
          <div className="bg-gradient-to-r from-disruptive-red to-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Not Sure Which Service You Need?
              </h3>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Let's analyze your current marketing and identify the biggest opportunities for growth. 
                Our free audit will show you exactly where to focus for maximum impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => {
                    document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'audit' } }));
                  }}
                  id="free-audit"
                  className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-disruptive-black focus:ring-offset-2"
                >
                  GET YOUR CUSTOM GROWTH PLAN
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Button>
                
                <div className="flex items-center text-red-100">
                  <div className="flex -space-x-2 mr-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm">Join 500+ growing businesses</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } } : {}}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8"
        >
          {[
            { number: '98%', label: 'Client Retention Rate' },
            { number: '340%', label: 'Average ROI Increase' },
            { number: '$50M+', label: 'Ad Spend Optimized' },
            { number: '24hrs', label: 'Average Response Time' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-disruptive-black mb-1">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}