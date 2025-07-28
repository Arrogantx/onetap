'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, ShoppingCart, Star, Search, TrendingUp, Package, Award, Zap, BarChart3 } from 'lucide-react';

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
    title: 'Keyword Optimization',
    description: 'Strategic keyword research and optimization to improve product visibility and ranking.'
  },
  {
    icon: Star,
    title: 'Listing Optimization',
    description: 'Complete product listing optimization including titles, bullets, descriptions, and images.'
  },
  {
    icon: TrendingUp,
    title: 'PPC Management',
    description: 'Expert management of Sponsored Products, Brands, and Display campaigns for maximum ROI.'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Advanced analytics and reporting to track performance and identify growth opportunities.'
  }
];

const services = [
  {
    title: 'Amazon PPC Advertising',
    description: 'Maximize your Amazon advertising ROI with expertly managed Sponsored Products, Brands, and Display campaigns.',
    features: ['Sponsored Products', 'Sponsored Brands', 'Sponsored Display', 'DSP Advertising', 'Video Ads', 'Stores Creation'],
    icon: Zap
  },
  {
    title: 'Product Listing Optimization',
    description: 'Optimize your product listings to improve visibility, conversion rates, and organic ranking.',
    features: ['Title Optimization', 'Bullet Points', 'Product Descriptions', 'Backend Keywords', 'A+ Content', 'Image Optimization'],
    icon: Package
  },
  {
    title: 'Amazon SEO',
    description: 'Improve your organic ranking on Amazon through strategic keyword optimization and listing improvements.',
    features: ['Keyword Research', 'Competitor Analysis', 'Ranking Optimization', 'Category Optimization', 'Review Management', 'Brand Registry'],
    icon: Search
  },
  {
    title: 'Inventory Management',
    description: 'Strategic inventory planning and management to avoid stockouts and maximize sales velocity.',
    features: ['Demand Forecasting', 'Inventory Planning', 'FBA Optimization', 'Seasonal Planning', 'Reorder Management', 'Cost Optimization'],
    icon: ShoppingCart
  },
  {
    title: 'Brand Protection',
    description: 'Protect your brand on Amazon with comprehensive monitoring and enforcement strategies.',
    features: ['Brand Registry', 'Counterfeit Monitoring', 'MAP Enforcement', 'Unauthorized Seller Removal', 'IP Protection', 'Review Monitoring'],
    icon: Award
  },
  {
    title: 'Amazon Analytics',
    description: 'Advanced analytics and reporting to track performance and identify growth opportunities.',
    features: ['Sales Analytics', 'PPC Reporting', 'Competitor Tracking', 'Profit Analysis', 'Custom Dashboards', 'Growth Insights'],
    icon: BarChart3
  }
];

const caseStudies: CaseStudy[] = [
  {
    company: 'Electronics Brand',
    industry: 'Consumer Electronics',
    challenge: 'Low visibility and poor conversion rates on key products',
    solution: 'Complete listing optimization, PPC campaigns, and A+ content creation',
    results: {
      sales: '+420%',
      acos: '-35%',
      ranking: 'Top 3'
    }
  },
  {
    company: 'Home & Garden',
    industry: 'Home Improvement',
    challenge: 'High advertising costs and low profitability',
    solution: 'PPC optimization, keyword strategy, and inventory management',
    results: {
      roas: '6.8x',
      profit: '+280%',
      acos: '-45%'
    }
  },
  {
    company: 'Beauty Brand',
    industry: 'Health & Beauty',
    challenge: 'Struggling to compete with established brands',
    solution: 'Brand building, content optimization, and strategic advertising',
    results: {
      brandAwareness: '+350%',
      sales: '+520%',
      marketShare: '+180%'
    }
  }
];

const amazonStats = [
  { number: '300M+', label: 'Active Amazon Users' },
  { number: '2.7B+', label: 'Products on Amazon' },
  { number: '54%', label: 'Product Searches Start on Amazon' },
  { number: '$469B', label: 'Amazon Revenue 2021' }
];

export default function AmazonPage() {
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
      <section className="relative bg-gradient-to-br from-yellow-600 via-yellow-700 to-orange-600 text-white py-24 overflow-hidden">
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
                Amazon Marketing
                <span className="block text-yellow-200">That Dominates</span>
              </h1>
              
              <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                Maximize your Amazon presence with strategic advertising, listing optimization, and brand building. 
                We help you dominate your category and drive profitable growth on the world's largest marketplace.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Button
                  onClick={openTypeform}
                  size="lg"
                  className="bg-white text-yellow-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
                >
                  GET FREE AMAZON AUDIT
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  onClick={openTypeform}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-yellow-700 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
                >
                  SCHEDULE CONSULTATION
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">320%</div>
                  <div className="text-yellow-200 text-sm">Avg Sales Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">$2M+</div>
                  <div className="text-yellow-200 text-sm">Amazon Ad Spend</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">150+</div>
                  <div className="text-yellow-200 text-sm">Amazon Accounts</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Amazon Dashboard mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Amazon Performance</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">$48,250</div>
                    <div className="text-sm opacity-80">Monthly Revenue</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">6.8x</div>
                    <div className="text-sm opacity-80">ROAS</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Sponsored Products</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <span className="text-sm font-bold">88%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Sponsored Brands</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="text-sm font-bold">75%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Organic Ranking</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-sm font-bold">Top 5</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amazon Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-disruptive-black mb-4">
              Why Amazon Marketing Matters
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Amazon is the world's largest marketplace and the starting point for most product searches.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amazonStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Our Amazon Expertise
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep Amazon knowledge with proven strategies to help brands 
              succeed on the world's most competitive marketplace.
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
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Complete Amazon Services
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
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
                <Card className="h-full border-2 border-gray-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <service.icon className="w-12 h-12 text-yellow-600 mb-4" />
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
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
              Amazon Success Stories
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our Amazon strategies have helped brands achieve significant growth 
              and dominate their categories on the marketplace.
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
                <Card className="h-full border-2 border-gray-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-disruptive-black mb-2">{study.company}</h3>
                      <p className="text-yellow-600 font-medium">{study.industry}</p>
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
                          <div className="text-lg font-bold text-yellow-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
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
      <section className="py-20 bg-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Dominate Amazon?
            </h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Let's analyze your Amazon presence and create a strategy to increase your sales and market share.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET FREE AMAZON AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={openTypeform}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
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