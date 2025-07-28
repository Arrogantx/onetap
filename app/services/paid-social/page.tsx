'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Smartphone, Users, Target, TrendingUp, Eye, MessageCircle, Heart, Share2 } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Advanced audience targeting using demographics, interests, behaviors, and custom audiences.'
  },
  {
    icon: Eye,
    title: 'Creative Testing',
    description: 'Systematic A/B testing of ad creatives to identify top-performing content formats.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Continuous optimization of campaigns based on real-time performance data and insights.'
  },
  {
    icon: Users,
    title: 'Audience Development',
    description: 'Building and nurturing custom audiences for improved targeting and higher conversion rates.'
  }
];

const platforms = [
  {
    name: 'Facebook Advertising',
    description: 'Reach your ideal customers on the world\'s largest social network with precision targeting and compelling creatives.',
    features: ['News Feed Ads', 'Stories Advertising', 'Video Campaigns', 'Lead Generation', 'Retargeting', 'Lookalike Audiences'],
    icon: '📘'
  },
  {
    name: 'Instagram Marketing',
    description: 'Engage audiences with visually stunning content on Instagram\'s highly engaged platform.',
    features: ['Feed Advertising', 'Stories & Reels', 'Shopping Ads', 'Influencer Partnerships', 'User-Generated Content', 'Brand Awareness'],
    icon: '📷'
  },
  {
    name: 'LinkedIn Advertising',
    description: 'Connect with professionals and decision-makers through LinkedIn\'s powerful B2B advertising platform.',
    features: ['Sponsored Content', 'Message Ads', 'Lead Gen Forms', 'Account Targeting', 'Job Title Targeting', 'Company Targeting'],
    icon: '💼'
  },
  {
    name: 'TikTok Advertising',
    description: 'Capture the attention of younger audiences with engaging short-form video content on TikTok.',
    features: ['In-Feed Ads', 'Branded Effects', 'TopView Campaigns', 'Spark Ads', 'Collection Ads', 'Video Shopping'],
    icon: '🎵'
  },
  {
    name: 'Twitter Advertising',
    description: 'Join conversations and drive engagement with Twitter\'s real-time advertising opportunities.',
    features: ['Promoted Tweets', 'Trend Takeovers', 'Video Ads', 'Conversation Ads', 'Website Cards', 'App Install Campaigns'],
    icon: '🐦'
  },
  {
    name: 'Pinterest Advertising',
    description: 'Inspire and drive action with visually appealing content on Pinterest\'s discovery platform.',
    features: ['Promoted Pins', 'Shopping Ads', 'Video Pins', 'Carousel Ads', 'Collection Ads', 'Idea Pins'],
    icon: '📌'
  }
];

const caseStudies = [
  {
    company: 'Fashion Retailer',
    industry: 'E-commerce Fashion',
    challenge: 'Low brand awareness and poor social media ROI',
    solution: 'Multi-platform social strategy with UGC campaigns and influencer partnerships',
    results: {
      reach: '+680%',
      engagement: '+420%',
      roas: '7.2x'
    }
  },
  {
    company: 'B2B SaaS Platform',
    industry: 'Technology',
    challenge: 'Difficulty reaching decision-makers and generating qualified leads',
    solution: 'LinkedIn advertising with account-based marketing and lead nurturing',
    results: {
      leads: '+340%',
      cpl: '-55%',
      conversions: '+280%'
    }
  },
  {
    company: 'Local Restaurant Chain',
    industry: 'Food & Beverage',
    challenge: 'Increasing competition and declining foot traffic',
    solution: 'Location-based Facebook and Instagram campaigns with video content',
    results: {
      footTraffic: '+250%',
      orders: '+380%',
      roas: '5.8x'
    }
  }
];

export default function PaidSocialPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);

  const openTypeform = (type: 'audit' | 'strategy' = 'audit') => {
    document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type } }));
  };
  
  const closeTypeform = () => setIsTypeformOpen(false);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-24 overflow-hidden">
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
                Paid Social Media
                <span className="block text-purple-200">That Converts</span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Reach your ideal customers where they spend their time with strategic social media advertising 
                that drives engagement, builds brand awareness, and generates real business results.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Button
                  onClick={() => openTypeform('audit')}
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
                >
                  GET FREE SOCIAL AUDIT
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  onClick={() => openTypeform('strategy')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
                >
                  SCHEDULE CONSULTATION
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">280%</div>
                  <div className="text-purple-200 text-sm">Avg Engagement Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">$5M+</div>
                  <div className="text-purple-200 text-sm">Social Ad Spend</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">300+</div>
                  <div className="text-purple-200 text-sm">Social Campaigns</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Social Media Dashboard mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Social Performance</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">2.4M</div>
                    <div className="text-sm opacity-80">Total Reach</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">6.8%</div>
                    <div className="text-sm opacity-80">Engagement Rate</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Facebook</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm font-bold">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Instagram</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-pink-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-sm font-bold">92%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">LinkedIn</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <span className="text-sm font-bold">78%</span>
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
              Why Our Social Media Advertising Works
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our social media advertising strategies combine creative excellence with data-driven optimization 
              to deliver campaigns that engage audiences and drive measurable business results.
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
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
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
              Social Media Platforms We Master
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're experts across all major social media platforms, ensuring your message reaches 
              the right audience on the right platform at the right time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{platform.icon}</div>
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4">{platform.name}</h3>
                    <p className="text-gray-600 mb-6">{platform.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {platform.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
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
              Social Media Success Stories
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our social media advertising strategies have delivered exceptional results 
              for businesses across different industries and platforms.
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
                <Card className="h-full border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-disruptive-black mb-2">{study.company}</h3>
                      <p className="text-purple-600 font-medium">{study.industry}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-disruptive-black mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                      
                      <h4 className="font-bold text-disruptive-black mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-purple-600">{value}</div>
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
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Dominate Social Media?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's audit your current social media presence and create a strategy that drives real engagement and conversions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openTypeform('audit')}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET FREE SOCIAL AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => openTypeform('strategy')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
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