'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download, FileText, Search, Smartphone, Target, ShoppingCart, BarChart3, Mail } from 'lucide-react';
import Link from 'next/link';

const guides = [
  {
    id: 1,
    title: 'The Complete Guide to Google Ads in 2024',
    description: 'Learn how to create, optimize, and scale profitable Google Ads campaigns with our comprehensive guide.',
    category: 'PPC',
    pages: 45,
    icon: Search,
    featured: true
  },
  {
    id: 2,
    title: 'SEO Checklist: 100 Ways to Improve Your Rankings',
    description: 'A step-by-step checklist to audit and improve your website\'s SEO performance and search rankings.',
    category: 'SEO',
    pages: 32,
    icon: FileText,
    featured: true
  },
  {
    id: 3,
    title: 'Social Media Advertising Playbook',
    description: 'Strategies and tactics for creating high-performing social media ad campaigns across all major platforms.',
    category: 'Social Media',
    pages: 38,
    icon: Smartphone,
    featured: false
  },
  {
    id: 4,
    title: 'E-commerce Conversion Rate Optimization Guide',
    description: 'Proven techniques to improve your e-commerce store\'s conversion rate and increase sales.',
    category: 'CRO',
    pages: 29,
    icon: ShoppingCart,
    featured: false
  },
  {
    id: 5,
    title: 'B2B Lead Generation Blueprint',
    description: 'A comprehensive guide to generating high-quality B2B leads through digital marketing channels.',
    category: 'Lead Generation',
    pages: 41,
    icon: Target,
    featured: false
  },
  {
    id: 6,
    title: 'Google Analytics 4 Setup & Reporting Guide',
    description: 'Step-by-step instructions for setting up GA4 and creating actionable reports for your business.',
    category: 'Analytics',
    pages: 36,
    icon: BarChart3,
    featured: false
  },
  {
    id: 7,
    title: 'Email Marketing Automation Handbook',
    description: 'Learn how to create automated email sequences that nurture leads and drive conversions.',
    category: 'Email Marketing',
    pages: 33,
    icon: Mail,
    featured: false
  },
  {
    id: 8,
    title: 'Local SEO Success Guide',
    description: 'Everything you need to know to dominate local search results and attract more local customers.',
    category: 'SEO',
    pages: 30,
    icon: Search,
    featured: false
  }
];

const categories = [
  'All',
  'PPC',
  'SEO',
  'Social Media',
  'CRO',
  'Lead Generation',
  'Analytics',
  'Email Marketing'
];

export default function GuidesPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const openTypeform = () => setIsTypeformOpen(true);
  const closeTypeform = () => setIsTypeformOpen(false);
  
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  const filteredGuides = activeCategory === 'All' 
    ? guides 
    : guides.filter(guide => guide.category === activeCategory);

  const featuredGuides = guides.filter(guide => guide.featured);

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
              Marketing Guides
              <span className="block text-red-200">Free Resources & Templates</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Access our comprehensive collection of marketing guides, templates, and resources 
              to help you improve your digital marketing skills and grow your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-white text-disruptive-red hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                BROWSE GUIDES
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={openTypeform}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
              >
                REQUEST A GUIDE
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Guides */}
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
              Featured Guides
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and comprehensive marketing guides to help you achieve better results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="mr-6">
                        <div className="w-16 h-16 bg-disruptive-red/10 rounded-full flex items-center justify-center">
                          <guide.icon className="w-8 h-8 text-disruptive-red" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-sm bg-disruptive-red/10 text-disruptive-red px-3 py-1 rounded-full font-medium mr-2">
                            {guide.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {guide.pages} pages
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-disruptive-black mb-3 group-hover:text-disruptive-red transition-colors">
                          {guide.title}
                        </h3>
                        
                        <p className="text-gray-700 mb-6">{guide.description}</p>
                        
                        <Button 
                          onClick={openTypeform}
                          className="bg-disruptive-red hover:bg-disruptive-dark-red text-white"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          DOWNLOAD FREE GUIDE
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section id="guides" className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-disruptive-red text-white hover:bg-disruptive-dark-red'
                    : 'text-disruptive-gray hover:text-disruptive-red hover:border-disruptive-red'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-disruptive-red/10 rounded-full flex items-center justify-center mb-4">
                      <guide.icon className="w-6 h-6 text-disruptive-red" />
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <span className="text-xs bg-disruptive-red/10 text-disruptive-red px-2 py-1 rounded-full font-medium mr-2">
                        {guide.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {guide.pages} pages
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-disruptive-black mb-3 group-hover:text-disruptive-red transition-colors line-clamp-2">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{guide.description}</p>
                    
                    <Button 
                      onClick={openTypeform}
                      className="w-full bg-disruptive-red hover:bg-disruptive-dark-red text-white text-sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      DOWNLOAD
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No guides found in this category.</p>
              <Button
                onClick={() => setActiveCategory('All')}
                className="mt-4 bg-disruptive-red hover:bg-disruptive-dark-red text-white"
              >
                View All Guides
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
              Need Custom Marketing Help?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Our guides are a great starting point, but if you need personalized help with your marketing strategy, 
              our team of experts is ready to assist.
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
      
      {/* Modals */}
      <TypeformModal isOpen={isTypeformOpen} onClose={closeTypeform} />
      <CalendlyPopup isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </main>
  );
}