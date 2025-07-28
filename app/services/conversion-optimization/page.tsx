'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Target, BarChart3, MousePointer, Eye, TestTube, Users, Zap, TrendingUp } from 'lucide-react';

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
    icon: TestTube,
    title: 'A/B Testing',
    description: 'Systematic testing of page elements to identify what drives the highest conversion rates.'
  },
  {
    icon: Eye,
    title: 'User Experience Analysis',
    description: 'Deep analysis of user behavior to identify friction points and optimization opportunities.'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description: 'Advanced analytics and heat mapping to understand how users interact with your site.'
  },
  {
    icon: Zap,
    title: 'Rapid Implementation',
    description: 'Quick implementation of winning variations to maximize your conversion improvements.'
  }
];

const services = [
  {
    title: 'Landing Page Optimization',
    description: 'Transform your landing pages into conversion machines with strategic design and copy optimization.',
    features: ['Headline Testing', 'CTA Optimization', 'Form Optimization', 'Page Speed', 'Mobile Optimization', 'Trust Signals'],
    icon: MousePointer
  },
  {
    title: 'A/B Testing Strategy',
    description: 'Systematic testing methodology to continuously improve your conversion rates across all touchpoints.',
    features: ['Test Planning', 'Statistical Analysis', 'Multivariate Testing', 'Winner Implementation', 'Ongoing Testing', 'Results Reporting'],
    icon: TestTube
  },
  {
    title: 'User Experience Audits',
    description: 'Comprehensive analysis of your user journey to identify and eliminate conversion barriers.',
    features: ['User Journey Mapping', 'Heatmap Analysis', 'Session Recordings', 'Usability Testing', 'Mobile UX', 'Accessibility Audits'],
    icon: Eye
  },
  {
    title: 'E-commerce Optimization',
    description: 'Specialized optimization for online stores to increase average order value and reduce cart abandonment.',
    features: ['Product Page Optimization', 'Checkout Flow', 'Cart Abandonment', 'Upselling/Cross-selling', 'Payment Optimization', 'Trust Building'],
    icon: Target
  },
  {
    title: 'Form Optimization',
    description: 'Optimize your lead generation forms to capture more qualified leads with higher completion rates.',
    features: ['Field Reduction', 'Progressive Profiling', 'Smart Defaults', 'Error Handling', 'Multi-step Forms', 'Social Proof'],
    icon: Users
  },
  {
    title: 'Analytics & Tracking',
    description: 'Advanced tracking setup to measure and optimize every aspect of your conversion funnel.',
    features: ['Goal Setup', 'Event Tracking', 'Funnel Analysis', 'Attribution Modeling', 'Custom Dashboards', 'ROI Tracking'],
    icon: BarChart3
  }
];

const caseStudies: CaseStudy[] = [
  {
    company: 'SaaS Platform',
    industry: 'Technology',
    challenge: 'Low trial-to-paid conversion rate and high churn',
    solution: 'Onboarding optimization, pricing page testing, and user experience improvements',
    results: {
      conversions: '+180%',
      churn: '-45%',
      ltv: '+220%'
    }
  },
  {
    company: 'E-commerce Store',
    industry: 'Retail',
    challenge: 'High cart abandonment and low average order value',
    solution: 'Checkout optimization, product page improvements, and upselling strategies',
    results: {
      cartCompletion: '+65%',
      aov: '+35%',
      revenue: '+120%'
    }
  },
  {
    company: 'Lead Generation Site',
    industry: 'Professional Services',
    challenge: 'Poor form completion rates and low-quality leads',
    solution: 'Form optimization, progressive profiling, and lead qualification improvements',
    results: {
      formCompletions: '+240%',
      leadQuality: '+85%',
      costPerLead: '-40%'
    }
  }
];

const testingProcess = [
  {
    step: '01',
    title: 'Audit & Analysis',
    description: 'Comprehensive analysis of your current conversion funnel to identify optimization opportunities.'
  },
  {
    step: '02',
    title: 'Hypothesis Development',
    description: 'Create data-driven hypotheses for what changes will improve your conversion rates.'
  },
  {
    step: '03',
    title: 'Test Design',
    description: 'Design and implement A/B tests with proper statistical significance and control groups.'
  },
  {
    step: '04',
    title: 'Implementation',
    description: 'Deploy winning variations and monitor performance to ensure sustained improvements.'
  }
];

export default function ConversionOptimizationPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);

  const openTypeform = (type: 'audit' | 'strategy' = 'audit') => {
    document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type } }));
  };
  
  const closeTypeform = () => setIsTypeformOpen(false);

  return (
    <main className="min-h-screen">
      <Navigation onOpenTypeform={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform'))} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white py-24 overflow-hidden">
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
                Conversion Rate
                <span className="block text-orange-200">Optimization</span>
              </h1>
              
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Turn more visitors into customers with systematic testing and optimization. 
                We help you maximize the value of your existing traffic through data-driven improvements.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Button
                  onClick={() => openTypeform('audit')}
                  size="lg"
                  className="bg-white text-orange-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
                >
                  GET FREE CRO AUDIT
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  onClick={() => openTypeform('strategy')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-700 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
                >
                  SCHEDULE CONSULTATION
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">180%</div>
                  <div className="text-orange-200 text-sm">Avg Conversion Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-orange-200 text-sm">Tests Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">95%</div>
                  <div className="text-orange-200 text-sm">Statistical Confidence</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* CRO Dashboard mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">A/B Test Results</h3>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Winner Found
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80 mb-1">Control</div>
                    <div className="text-2xl font-bold mb-1">2.4%</div>
                    <div className="text-sm opacity-80">Conversion Rate</div>
                  </div>
                  <div className="bg-green-500/30 rounded-lg p-4 border border-green-400">
                    <div className="text-sm opacity-80 mb-1">Variation B</div>
                    <div className="text-2xl font-bold mb-1">4.3%</div>
                    <div className="text-sm opacity-80">Conversion Rate</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Improvement</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '79%' }}></div>
                    </div>
                    <span className="text-sm font-bold">+79%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Confidence</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    <span className="text-sm font-bold">98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Revenue Impact</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm font-bold">+$24K/mo</span>
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
              Our CRO Methodology
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use a scientific approach to conversion optimization, combining data analysis, 
              user research, and systematic testing to drive measurable improvements.
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
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Testing Process
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
              CRO Services We Offer
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
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
                <Card className="h-full border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <service.icon className="w-12 h-12 text-orange-600 mb-4" />
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
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
              CRO Success Stories
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our conversion optimization strategies have delivered significant 
              improvements in conversion rates and revenue for our clients.
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
                <Card className="h-full border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-disruptive-black mb-2">{study.company}</h3>
                      <p className="text-orange-600 font-medium">{study.industry}</p>
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
                          <div className="text-lg font-bold text-orange-600">{value}</div>
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
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Boost Your Conversions?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Let's analyze your conversion funnel and identify opportunities to turn more visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openTypeform('audit')}
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET FREE CRO AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => openTypeform('strategy')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
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