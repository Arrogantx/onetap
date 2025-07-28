'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calculator, CheckSquare, FileText, BarChart3, Target, Zap, Download, ExternalLink } from 'lucide-react';

const tools = [
  {
    id: 1,
    title: 'ROI Calculator',
    description: 'Calculate the potential return on investment for your marketing campaigns with our advanced ROI calculator.',
    icon: Calculator,
    type: 'Calculator',
    features: ['Campaign ROI Analysis', 'Multi-Channel Attribution', 'Profit Margin Calculations', 'Break-even Analysis'],
    category: 'Analytics',
    popular: true
  },
  {
    id: 2,
    title: 'PPC Audit Checklist',
    description: 'Comprehensive checklist to audit your Google Ads and Bing Ads campaigns for optimization opportunities.',
    icon: CheckSquare,
    type: 'Checklist',
    features: ['Account Structure Review', 'Keyword Analysis', 'Ad Copy Evaluation', 'Landing Page Assessment'],
    category: 'PPC',
    popular: true
  },
  {
    id: 3,
    title: 'SEO Content Template',
    description: 'Pre-built template to create SEO-optimized content that ranks higher in search results.',
    icon: FileText,
    type: 'Template',
    features: ['Keyword Research Guide', 'Content Structure', 'Meta Tag Templates', 'Internal Linking Strategy'],
    category: 'SEO',
    popular: false
  },
  {
    id: 4,
    title: 'Conversion Rate Tracker',
    description: 'Track and analyze your website conversion rates across different traffic sources and campaigns.',
    icon: BarChart3,
    type: 'Tracker',
    features: ['Multi-Source Tracking', 'Funnel Analysis', 'A/B Test Results', 'Performance Benchmarks'],
    category: 'CRO',
    popular: true
  },
  {
    id: 5,
    title: 'Social Media Planner',
    description: 'Plan and schedule your social media content across all platforms with our comprehensive planner.',
    icon: Target,
    type: 'Planner',
    features: ['Content Calendar', 'Platform Optimization', 'Hashtag Research', 'Engagement Tracking'],
    category: 'Social Media',
    popular: false
  },
  {
    id: 6,
    title: 'Email Campaign Builder',
    description: 'Build high-converting email campaigns with our drag-and-drop template builder.',
    icon: Zap,
    type: 'Builder',
    features: ['Responsive Templates', 'A/B Testing', 'Automation Workflows', 'Performance Analytics'],
    category: 'Email Marketing',
    popular: false
  }
];

const categories = [
  'All Tools',
  'Analytics',
  'PPC',
  'SEO',
  'CRO',
  'Social Media',
  'Email Marketing'
];

export default function ToolsPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Tools');

  const openTypeform = () => setIsTypeformOpen(true);
  const closeTypeform = () => setIsTypeformOpen(false);
  
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  const filteredTools = activeCategory === 'All Tools' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  const popularTools = tools.filter(tool => tool.popular);

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
              Free Marketing Tools
              <span className="block text-red-200">& Resources</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Access our collection of free marketing tools, calculators, templates, and resources 
              designed to help you optimize your campaigns and drive better results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-red-100">Free Tools</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-red-100">Downloads</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-red-100">Free Access</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Tools */}
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
              Most Popular Tools
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most downloaded and highly-rated marketing tools used by thousands of businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-xl overflow-hidden group-hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-disruptive-red/10 rounded-full flex items-center justify-center">
                        <tool.icon className="w-8 h-8 text-disruptive-red" />
                      </div>
                      <div className="bg-yellow-500 text-disruptive-black px-3 py-1 rounded-full text-sm font-bold">
                        POPULAR
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-disruptive-black mb-3">{tool.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {tool.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-disruptive-red rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-disruptive-red bg-disruptive-red/10 px-3 py-1 rounded-full">
                        {tool.type}
                      </span>
                      <Button className="bg-disruptive-red hover:bg-disruptive-dark-red text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Get Tool
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
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

      {/* All Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-disruptive-red/10 transition-colors">
                        <tool.icon className="w-8 h-8 text-gray-600 group-hover:text-disruptive-red transition-colors" />
                      </div>
                      {tool.popular && (
                        <div className="bg-yellow-500 text-disruptive-black px-3 py-1 rounded-full text-sm font-bold">
                          POPULAR
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-disruptive-black mb-3 group-hover:text-disruptive-red transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{tool.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {tool.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-disruptive-red rounded-full"></div>
                          <span className="text-xs text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {tool.type}
                      </span>
                      <Button size="sm" className="bg-disruptive-red hover:bg-disruptive-dark-red text-white">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Access
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
              Need Custom Marketing Solutions?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              While our free tools are great for getting started, let us create a custom marketing strategy 
              tailored specifically to your business goals and challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET CUSTOM STRATEGY
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={openTypeform}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
              >
                SCHEDULE CONSULTATION
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