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
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, Zap, BarChart3, Search, MousePointer, Smartphone, ShoppingCart, Mail, Palette, Globe, Brain } from 'lucide-react';

const services = [
  {
    id: 'paid-search',
    title: 'Paid Search',
    subtitle: 'Google Ads & Bing Ads Management',
    description: 'Drive qualified traffic and maximize ROI with expertly managed search campaigns that convert.',
    icon: Search,
    features: ['Google Ads Management', 'Bing Ads Optimization', 'Shopping Campaigns', 'Performance Max', 'Keyword Research', 'Bid Management'],
    results: '+340% Average ROI',
    gradient: 'from-blue-600 to-blue-800',
    href: '/services/paid-search'
  },
  {
    id: 'paid-social',
    title: 'Paid Social',
    subtitle: 'Facebook, Instagram & LinkedIn Ads',
    description: 'Reach your ideal customers where they spend time with targeted social media advertising.',
    icon: Smartphone,
    features: ['Facebook & Instagram Ads', 'LinkedIn Lead Generation', 'TikTok Advertising', 'Creative Testing', 'Audience Targeting', 'Retargeting'],
    results: '+280% Lead Quality',
    gradient: 'from-purple-600 to-purple-800',
    href: '/services/paid-social'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    subtitle: 'Organic Search Growth',
    description: 'Build long-term visibility and drive sustainable traffic growth through strategic SEO.',
    icon: TrendingUp,
    features: ['Technical SEO Audits', 'Content Strategy', 'Link Building', 'Local SEO', 'Keyword Optimization', 'Site Speed Optimization'],
    results: '+250% Organic Traffic',
    gradient: 'from-green-600 to-green-800',
    href: '/services/seo'
  },
  {
    id: 'conversion-optimization',
    title: 'Conversion Rate Optimization',
    subtitle: 'Turn Visitors Into Customers',
    description: 'Systematic testing and optimization to maximize the value of your existing traffic.',
    icon: Target,
    features: ['A/B Testing', 'Landing Page Design', 'User Experience Audits', 'Analytics Setup', 'Heat Map Analysis', 'Funnel Optimization'],
    results: '+180% Conversion Rate',
    gradient: 'from-orange-600 to-orange-800',
    href: '/services/conversion-optimization'
  },
  {
    id: 'amazon-advertising',
    title: 'Amazon Advertising',
    subtitle: 'Marketplace Domination',
    description: 'Maximize your Amazon presence with strategic advertising and optimization.',
    icon: ShoppingCart,
    features: ['Sponsored Products', 'Sponsored Brands', 'DSP Advertising', 'Listing Optimization', 'Keyword Research', 'Competitor Analysis'],
    results: '+320% Amazon Sales',
    gradient: 'from-yellow-600 to-yellow-800',
    href: '/services/amazon'
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    subtitle: 'Lifecycle & Automation',
    description: 'Build relationships and drive revenue with strategic email marketing campaigns.',
    icon: Mail,
    features: ['Email Automation', 'Segmentation Strategy', 'A/B Testing', 'List Building', 'Lifecycle Campaigns', 'Performance Analytics'],
    results: '+400% Email ROI',
    gradient: 'from-indigo-600 to-indigo-800',
    href: '/services/email-marketing'
  },
  {
    id: 'creative-design',
    title: 'Creative & Design',
    subtitle: 'High-Converting Creatives',
    description: 'Compelling ad creatives and landing pages designed to capture attention and drive action.',
    icon: Palette,
    features: ['Ad Creative Production', 'Video Marketing', 'Graphic Design', 'Copywriting', 'Brand Development', 'Creative Testing'],
    results: '+320% Engagement',
    gradient: 'from-pink-600 to-pink-800',
    href: '/services/creative'
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    subtitle: 'Insights That Drive Growth',
    description: 'Advanced tracking and reporting that provides actionable insights for better decisions.',
    icon: BarChart3,
    features: ['Custom Dashboards', 'Attribution Modeling', 'Performance Reporting', 'ROI Tracking', 'Data Visualization', 'Predictive Analytics'],
    results: '+400% Data Clarity',
    gradient: 'from-teal-600 to-teal-800',
    href: '/services/analytics'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'High-Performance Websites',
    description: 'Fast, conversion-optimized websites built for growth and user experience.',
    icon: Globe,
    features: ['Website Development', 'Landing Pages', 'E-commerce Sites', 'Mobile Optimization', 'Speed Optimization', 'CMS Integration'],
    results: '+250% Site Performance',
    gradient: 'from-gray-600 to-gray-800',
    href: '/services/web-development'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Automation',
    subtitle: 'Custom AI Development & Consulting',
    description: 'Transform your business with intelligent automation, AI chatbots, and custom machine learning solutions.',
    icon: Brain,
    features: ['AI Strategy & Consulting', 'Custom AI Development', 'Process Automation', 'AI Chatbots & Assistants', 'Predictive Analytics', 'Machine Learning Models'],
    results: '+300% Efficiency Gains',
    gradient: 'from-purple-600 to-indigo-800',
    href: '/services/ai'
  }
];

const industries = [
  { name: 'B2B SaaS', description: 'Lead generation and customer acquisition for software companies' },
  { name: 'E-commerce', description: 'Revenue growth and customer lifetime value optimization' },
  { name: 'Healthcare', description: 'Patient acquisition and practice growth strategies' },
  { name: 'Financial Services', description: 'Compliant marketing that drives qualified leads' },
  { name: 'Professional Services', description: 'Authority building and client acquisition' },
  { name: 'Manufacturing', description: 'B2B lead generation and brand awareness' }
];

const stats = [
  { number: '$50M+', label: 'Ad Spend Managed' },
  { number: '500+', label: 'Campaigns Launched' },
  { number: '98%', label: 'Client Retention' },
  { number: '340%', label: 'Average ROI Increase' }
];

export default function ServicesPage() {
  const [activeTypeformId, setActiveTypeformId] = useState<string | null>(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openTypeform = (type: 'default' | 'audit' | 'strategy' | 'contact' = 'default') => {
    document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type } }));
  };
  
  const closeTypeform = () => setActiveTypeformId(null);
  
  const openCalendly = () => {
    document.documentElement.dispatchEvent(new CustomEvent('openCalendly'));
  };
  const closeCalendly = () => setIsCalendlyOpen(false);

  return (
    <main className="min-h-screen">
      <Navigation onOpenTypeform={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'default' } }))} />
      
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
              Digital Marketing Services
              <span className="block text-red-200">That Actually Work</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              From PPC to SEO, we offer comprehensive digital marketing services designed to maximize your ROI 
              and accelerate sustainable business growth. Every strategy is data-driven and results-focused.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'audit' } }))}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET YOUR FREE MARKETING AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'strategy' } }))}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
              >
                SCHEDULE A CONSULTATION
              </Button>
            </div>

            {/* Stats */}
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

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-disruptive-black mb-6">
              Our Core Services
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth at every stage of your customer journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-100 hover:border-disruptive-red/30 transition-all duration-500 hover:shadow-2xl group-hover:scale-105 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="relative z-10">
                        <service.icon className="w-12 h-12 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-sm opacity-90">{service.subtitle}</p>
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mt-4">
                          <span className="text-sm font-bold">{service.results}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={feature} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-disruptive-red flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link href={service.href}>
                        <Button className="w-full bg-disruptive-red hover:bg-disruptive-dark-red text-white font-bold">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges and opportunities in different industries, 
              allowing us to create tailored strategies that deliver results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
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
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your growth goals and create a custom strategy that delivers real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'audit' } }))}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET YOUR FREE AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'strategy' } }))}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide"
              >
                SCHEDULE A CALL
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Modals */}
      <TypeformModal isOpen={activeTypeformId !== null} onClose={closeTypeform} typeformId={activeTypeformId ?? undefined} />
      <CalendlyPopup isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </main>
  );
}