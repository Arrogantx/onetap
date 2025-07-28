'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, BarChart3, TrendingUp, Target, Eye, Database, Zap, PieChart, Activity } from 'lucide-react';

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
    icon: BarChart3,
    title: 'Custom Dashboards',
    description: 'Build personalized dashboards that display the metrics that matter most to your business goals.'
  },
  {
    icon: Target,
    title: 'Attribution Modeling',
    description: 'Understand the complete customer journey and accurately attribute conversions to marketing touchpoints.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Tracking',
    description: 'Monitor campaign performance in real-time with automated alerts and detailed reporting.'
  },
  {
    icon: Eye,
    title: 'Data Visualization',
    description: 'Transform complex data into clear, actionable insights with advanced visualization tools.'
  }
];

const services = [
  {
    title: 'Google Analytics Setup & Optimization',
    description: 'Complete Google Analytics 4 implementation with custom tracking, goals, and advanced reporting.',
    features: ['GA4 Implementation', 'Custom Events', 'Conversion Tracking', 'Enhanced E-commerce', 'Audience Building', 'Custom Reports'],
    icon: BarChart3
  },
  {
    title: 'Custom Dashboard Development',
    description: 'Build personalized dashboards that consolidate data from all your marketing channels in one place.',
    features: ['Multi-Channel Integration', 'Real-time Updates', 'Custom Metrics', 'Automated Reporting', 'Mobile Optimization', 'Data Export'],
    icon: PieChart
  },
  {
    title: 'Attribution Modeling',
    description: 'Advanced attribution models to understand the true impact of each marketing touchpoint.',
    features: ['Multi-Touch Attribution', 'Cross-Device Tracking', 'Customer Journey Mapping', 'ROI Analysis', 'Channel Performance', 'Conversion Paths'],
    icon: Target
  },
  {
    title: 'Performance Reporting',
    description: 'Comprehensive reporting that provides actionable insights for data-driven decision making.',
    features: ['Automated Reports', 'Executive Summaries', 'Trend Analysis', 'Competitive Benchmarking', 'Forecasting', 'Action Recommendations'],
    icon: TrendingUp
  },
  {
    title: 'Data Integration & ETL',
    description: 'Connect and consolidate data from multiple sources for a complete view of your marketing performance.',
    features: ['API Integrations', 'Data Warehousing', 'Real-time Sync', 'Data Cleaning', 'Historical Data', 'Backup Solutions'],
    icon: Database
  },
  {
    title: 'Marketing Intelligence',
    description: 'Advanced analytics and machine learning to predict trends and optimize marketing strategies.',
    features: ['Predictive Analytics', 'Trend Forecasting', 'Anomaly Detection', 'Customer Segmentation', 'Lifetime Value', 'Churn Prediction'],
    icon: Activity
  }
];

const caseStudies: CaseStudy[] = [
  {
    company: 'E-commerce Retailer',
    industry: 'Online Retail',
    challenge: 'Fragmented data across multiple platforms with no unified view of performance',
    solution: 'Implemented comprehensive analytics stack with custom dashboards and attribution modeling',
    results: {
      dataClarity: '+400%',
      decisionSpeed: '+180%',
      roi: '+250%'
    }
  },
  {
    company: 'B2B SaaS Company',
    industry: 'Technology',
    challenge: 'Unable to track customer journey from awareness to conversion accurately',
    solution: 'Built advanced attribution model with cross-platform tracking and customer journey mapping',
    results: {
      attribution: '+320%',
      optimization: '+150%',
      efficiency: '+200%'
    }
  },
  {
    company: 'Multi-Location Service Business',
    industry: 'Professional Services',
    challenge: 'No visibility into which marketing efforts drove the most valuable customers',
    solution: 'Created unified reporting system with location-based tracking and customer lifetime value analysis',
    results: {
      visibility: '+380%',
      targeting: '+220%',
      profitability: '+160%'
    }
  }
];

const analyticsTools = [
  { name: 'Google Analytics 4', description: 'Advanced web and app analytics' },
  { name: 'Google Tag Manager', description: 'Tag management and tracking' },
  { name: 'Data Studio', description: 'Data visualization and reporting' },
  { name: 'BigQuery', description: 'Data warehousing and analysis' },
  { name: 'Tableau', description: 'Advanced data visualization' },
  { name: 'Power BI', description: 'Business intelligence platform' }
];

export default function AnalyticsPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);


  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-24 overflow-hidden">
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
                Data Analytics
                <span className="block text-teal-200">That Drive Decisions</span>
              </h1>
              
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                Transform your marketing data into actionable insights with advanced analytics, 
                custom dashboards, and intelligent reporting that drives better business decisions.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Button
                  onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'audit' } }))}
                  size="lg"
                  className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
                >
                  GET FREE ANALYTICS AUDIT
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'strategy' } }))}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-700 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
                >
                  SCHEDULE CONSULTATION
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">400%</div>
                  <div className="text-teal-200 text-sm">Data Clarity Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-teal-200 text-sm">Analytics Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-teal-200 text-sm">Real-time Monitoring</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Analytics Dashboard mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Analytics Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">2.4M</div>
                    <div className="text-sm opacity-80">Total Sessions</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">4.8x</div>
                    <div className="text-sm opacity-80">ROI Tracking</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Organic Traffic</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm font-bold">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Paid Traffic</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                    <span className="text-sm font-bold">72%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Conversion Rate</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                    <span className="text-sm font-bold">6.8%</span>
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
              Our Analytics Approach
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We transform complex data into clear, actionable insights that drive better 
              marketing decisions and improved business outcomes.
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
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-teal-600" />
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
              Complete Analytics Services
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
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
                <Card className="h-full border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <service.icon className="w-12 h-12 text-teal-600 mb-4" />
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
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

      {/* Tools Section */}
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
              Analytics Tools We Master
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're certified experts in all major analytics platforms and tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-disruptive-black">{tool.name}</h3>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>
                </div>
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
              Analytics Success Stories
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our analytics solutions have provided clarity and driven growth for businesses.
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
                <Card className="h-full border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-disruptive-black mb-2">{study.company}</h3>
                      <p className="text-teal-600 font-medium">{study.industry}</p>
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
                          <div className="text-lg font-bold text-teal-600">{value}</div>
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
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Let's audit your current analytics setup and show you how to turn data into actionable insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'audit' } }))}
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET FREE ANALYTICS AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'strategy' } }))}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
              >
                SCHEDULE A CALL
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}