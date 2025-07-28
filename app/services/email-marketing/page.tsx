'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Mail, Users, Target, TrendingUp, Clock, Zap, BarChart3, Heart } from 'lucide-react';

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
    icon: Target,
    title: 'Advanced Segmentation',
    description: 'Segment your audience based on behavior, demographics, and engagement for personalized messaging.'
  },
  {
    icon: Clock,
    title: 'Marketing Automation',
    description: 'Set up automated email sequences that nurture leads and drive conversions on autopilot.'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track open rates, click-through rates, conversions, and ROI with detailed reporting.'
  },
  {
    icon: Zap,
    title: 'A/B Testing',
    description: 'Test subject lines, content, and send times to optimize your email performance.'
  }
];

const services = [
  {
    title: 'Email Campaign Strategy',
    description: 'Develop comprehensive email marketing strategies that align with your business goals and customer journey.',
    features: ['Campaign Planning', 'Audience Research', 'Content Strategy', 'Send Time Optimization', 'Frequency Planning', 'Goal Setting'],
    icon: Target
  },
  {
    title: 'Marketing Automation',
    description: 'Create sophisticated automation workflows that nurture leads and drive conversions automatically.',
    features: ['Welcome Series', 'Drip Campaigns', 'Behavioral Triggers', 'Lead Nurturing', 'Re-engagement Campaigns', 'Cart Abandonment'],
    icon: Zap
  },
  {
    title: 'Email Design & Content',
    description: 'Create visually stunning, mobile-responsive emails with compelling copy that drives action.',
    features: ['Template Design', 'Mobile Optimization', 'Copywriting', 'Visual Content', 'Brand Consistency', 'CTA Optimization'],
    icon: Mail
  },
  {
    title: 'List Building & Management',
    description: 'Grow your email list with qualified subscribers and maintain list health for optimal deliverability.',
    features: ['Lead Magnets', 'Opt-in Forms', 'List Segmentation', 'Data Hygiene', 'Compliance Management', 'Subscriber Onboarding'],
    icon: Users
  },
  {
    title: 'Lifecycle Marketing',
    description: 'Engage customers at every stage of their journey with targeted email campaigns.',
    features: ['Customer Onboarding', 'Retention Campaigns', 'Win-back Sequences', 'Loyalty Programs', 'Upsell/Cross-sell', 'Referral Programs'],
    icon: Heart
  },
  {
    title: 'Analytics & Optimization',
    description: 'Monitor performance and continuously optimize your email campaigns for better results.',
    features: ['Performance Tracking', 'A/B Testing', 'Deliverability Monitoring', 'ROI Analysis', 'Reporting Dashboards', 'Optimization Recommendations'],
    icon: BarChart3
  }
];

const caseStudies: CaseStudy[] = [
  {
    company: 'E-commerce Fashion Brand',
    industry: 'Retail',
    challenge: 'Low email engagement and poor customer retention',
    solution: 'Implemented segmented campaigns, automation workflows, and personalized product recommendations',
    results: {
      openRate: '+85%',
      clickRate: '+120%',
      revenue: '+340%'
    }
  },
  {
    company: 'B2B SaaS Company',
    industry: 'Technology',
    challenge: 'Long sales cycles and low trial-to-paid conversion',
    solution: 'Created nurture sequences, educational content series, and behavioral trigger campaigns',
    results: {
      leadNurturing: '+180%',
      conversions: '+95%',
      salesCycle: '-30%'
    }
  },
  {
    company: 'Professional Services Firm',
    industry: 'Consulting',
    challenge: 'Difficulty staying top-of-mind with prospects',
    solution: 'Developed thought leadership newsletter and automated follow-up sequences',
    results: {
      engagement: '+220%',
      leads: '+150%',
      clientRetention: '+40%'
    }
  }
];

const emailStats = [
  { number: '4,200%', label: 'Average ROI' },
  { number: '99%', label: 'People Check Email Daily' },
  { number: '3.9B', label: 'Email Users Worldwide' },
  { number: '1:42', label: 'ROI for Every $1 Spent' }
];

export default function EmailMarketingPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);

  const openTypeform = (type: 'audit' | 'strategy' = 'audit') => {
    document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type } }));
  };
  
  const closeTypeform = () => setIsTypeformOpen(false);

  return (
    <main className="min-h-screen">
      <Navigation onOpenTypeform={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform'))} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white py-24 overflow-hidden">
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
                Email Marketing
                <span className="block text-indigo-200">That Converts</span>
              </h1>
              
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Build lasting relationships with your audience and drive consistent revenue through 
                strategic email marketing campaigns that deliver results.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Button
                  onClick={() => openTypeform('audit')}
                  size="lg"
                  className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
                >
                  GET FREE EMAIL AUDIT
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  onClick={() => openTypeform('strategy')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
                >
                  SCHEDULE CONSULTATION
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">400%</div>
                  <div className="text-indigo-200 text-sm">Avg Email ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">$2M+</div>
                  <div className="text-indigo-200 text-sm">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">200+</div>
                  <div className="text-indigo-200 text-sm">Email Campaigns</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Email Dashboard mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Email Performance</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">45.2%</div>
                    <div className="text-sm opacity-80">Open Rate</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">12.8%</div>
                    <div className="text-sm opacity-80">Click Rate</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Welcome Series</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-sm font-bold">92%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Newsletter</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <span className="text-sm font-bold">78%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Promotional</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <span className="text-sm font-bold">65%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Email Stats Section */}
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
              Why Email Marketing Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Email marketing consistently delivers the highest ROI of any digital marketing channel.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {emailStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
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
              Our Email Marketing Approach
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create email campaigns that build relationships, drive engagement, 
              and generate consistent revenue for your business.
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
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-indigo-600" />
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
              Complete Email Marketing Services
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
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
                <Card className="h-full border-2 border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <service.icon className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0" />
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
              Email Marketing Success Stories
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our email marketing strategies have driven significant results for businesses across industries.
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
                <Card className="h-full border-2 border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-disruptive-black mb-2">{study.company}</h3>
                      <p className="text-indigo-600 font-medium">{study.industry}</p>
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
                          <div className="text-lg font-bold text-indigo-600">{value}</div>
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
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Let's audit your current email strategy and create campaigns that drive real engagement and revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openTypeform('audit')}
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET FREE EMAIL AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => openTypeform('strategy')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
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