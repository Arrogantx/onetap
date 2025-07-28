'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Palette, Video, PenTool, Camera, Lightbulb, Zap, Eye, TrendingUp } from 'lucide-react';

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
    icon: Palette,
    title: 'Creative Strategy',
    description: 'Develop compelling visual narratives that resonate with your target audience and drive action.'
  },
  {
    icon: Video,
    title: 'Video Production',
    description: 'Professional video content that captures attention and delivers your message effectively.'
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Stunning visual designs that enhance your brand and improve campaign performance.'
  },
  {
    icon: Eye,
    title: 'Creative Testing',
    description: 'Systematic A/B testing of creative elements to identify top-performing content.'
  }
];

const services = [
  {
    title: 'Ad Creative Production',
    description: 'High-converting ad creatives designed to capture attention and drive clicks across all platforms.',
    features: ['Display Ads', 'Social Media Creatives', 'Banner Ads', 'Animated Graphics', 'Interactive Ads', 'Retargeting Creatives'],
    icon: Palette
  },
  {
    title: 'Video Marketing',
    description: 'Professional video content that tells your story and engages audiences across all channels.',
    features: ['Promotional Videos', 'Product Demos', 'Testimonial Videos', 'Animated Explainers', 'Social Media Videos', 'Video Ads'],
    icon: Video
  },
  {
    title: 'Brand Design',
    description: 'Complete brand identity design that creates memorable experiences and builds trust.',
    features: ['Logo Design', 'Brand Guidelines', 'Color Palettes', 'Typography', 'Brand Assets', 'Style Guides'],
    icon: PenTool
  },
  {
    title: 'Landing Page Design',
    description: 'Conversion-optimized landing pages that turn visitors into customers.',
    features: ['Wireframing', 'UI/UX Design', 'Mobile Optimization', 'A/B Testing', 'Conversion Optimization', 'Performance Tracking'],
    icon: Camera
  },
  {
    title: 'Content Creation',
    description: 'Engaging content that educates, entertains, and converts your audience.',
    features: ['Blog Content', 'Social Media Posts', 'Email Templates', 'Infographics', 'Case Studies', 'White Papers'],
    icon: Lightbulb
  },
  {
    title: 'Creative Optimization',
    description: 'Continuous testing and optimization to improve creative performance.',
    features: ['A/B Testing', 'Performance Analysis', 'Creative Refresh', 'Audience Testing', 'Platform Optimization', 'ROI Tracking'],
    icon: TrendingUp
  }
];

const caseStudies: CaseStudy[] = [
  {
    company: 'Fashion Retailer',
    industry: 'E-commerce Fashion',
    challenge: 'Low engagement rates and poor brand recognition',
    solution: 'Complete brand redesign with video-first creative strategy and user-generated content campaigns',
    results: {
      engagement: '+420%',
      brandAwareness: '+280%',
      conversions: '+180%'
    }
  },
  {
    company: 'Tech Startup',
    industry: 'B2B Software',
    challenge: 'Complex product difficult to explain and visualize',
    solution: 'Animated explainer videos and interactive demos with simplified messaging',
    results: {
      understanding: '+350%',
      demos: '+240%',
      signups: '+190%'
    }
  },
  {
    company: 'Local Restaurant Chain',
    industry: 'Food & Beverage',
    challenge: 'Need to showcase food quality and drive foot traffic',
    solution: 'Professional food photography and video content with location-based targeting',
    results: {
      footTraffic: '+320%',
      orders: '+250%',
      socialFollowing: '+400%'
    }
  }
];

const creativeTypes = [
  { name: 'Display Advertising', description: 'Eye-catching banner ads and display creatives' },
  { name: 'Social Media Graphics', description: 'Platform-optimized social media content' },
  { name: 'Video Content', description: 'Engaging video ads and promotional content' },
  { name: 'Print Design', description: 'Professional print materials and collateral' },
  { name: 'Web Design', description: 'Modern, conversion-focused website design' },
  { name: 'Packaging Design', description: 'Product packaging that stands out on shelves' }
];

export default function CreativePage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);

  const openTypeform = (type: 'audit' | 'strategy' = 'audit') => {
    document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type } }));
  };
  
  const closeTypeform = () => setIsTypeformOpen(false);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800 text-white py-24 overflow-hidden">
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
                Creative & Design
                <span className="block text-pink-200">That Converts</span>
              </h1>
              
              <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                Stunning visuals and compelling content that capture attention, build brand awareness, 
                and drive measurable results across all your marketing channels.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Button
                  onClick={() => openTypeform('audit')}
                  size="lg"
                  className="bg-white text-pink-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
                >
                  GET FREE CREATIVE AUDIT
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  onClick={() => openTypeform('strategy')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-pink-700 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
                >
                  SCHEDULE CONSULTATION
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">320%</div>
                  <div className="text-pink-200 text-sm">Avg Engagement Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-pink-200 text-sm">Creative Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">95%</div>
                  <div className="text-pink-200 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Creative Portfolio mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Creative Performance</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">8.2%</div>
                    <div className="text-sm opacity-80">Click-Through Rate</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">420%</div>
                    <div className="text-sm opacity-80">Engagement Boost</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Video Ads</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <span className="text-sm font-bold">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Display Ads</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <span className="text-sm font-bold">88%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Social Graphics</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-sm font-bold">92%</span>
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
              Our Creative Approach
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine artistic vision with data-driven insights to create content that not only 
              looks amazing but also drives real business results.
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
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-pink-600" />
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
              Complete Creative Services
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
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
                <Card className="h-full border-2 border-gray-200 hover:border-pink-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <service.icon className="w-12 h-12 text-pink-600 mb-4" />
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
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

      {/* Creative Types Section */}
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
              Creative Specialties
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create compelling content across all formats and platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Palette className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-disruptive-black">{type.name}</h3>
                    <p className="text-gray-600 text-sm">{type.description}</p>
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
              Creative Success Stories
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our creative solutions have transformed brands and driven exceptional results.
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
                <Card className="h-full border-2 border-gray-200 hover:border-pink-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-disruptive-black mb-2">{study.company}</h3>
                      <p className="text-pink-600 font-medium">{study.industry}</p>
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
                          <div className="text-lg font-bold text-pink-600">{value}</div>
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
      <section className="py-20 bg-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Let's create stunning visuals and compelling content that captures attention and drives results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openTypeform('audit')}
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET FREE CREATIVE AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => openTypeform('strategy')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
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