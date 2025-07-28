'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Globe, Smartphone, Zap, Shield, Code, Rocket, Monitor, Search } from 'lucide-react';

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
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with Core Web Vitals scores that improve your search rankings.'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Responsive design that looks perfect on every device and screen size.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Built with security best practices and reliable hosting infrastructure.'
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Search engine optimized from the ground up to drive organic traffic.'
  }
];

const services = [
  {
    title: 'Custom Website Development',
    description: 'Fully custom websites built from scratch to match your exact business requirements and brand.',
    features: ['Custom Design', 'Responsive Layout', 'CMS Integration', 'E-commerce Ready', 'SEO Optimized', 'Performance Focused'],
    icon: Code
  },
  {
    title: 'E-commerce Development',
    description: 'Complete online stores with shopping carts, payment processing, and inventory management.',
    features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Tracking', 'Customer Accounts', 'Analytics Integration'],
    icon: Globe
  },
  {
    title: 'Landing Page Development',
    description: 'High-converting landing pages designed specifically for your marketing campaigns.',
    features: ['Conversion Focused', 'A/B Testing Ready', 'Fast Loading', 'Mobile Optimized', 'Analytics Tracking', 'Lead Capture'],
    icon: Rocket
  },
  {
    title: 'Website Optimization',
    description: 'Improve your existing website\'s performance, speed, and conversion rates.',
    features: ['Speed Optimization', 'SEO Improvements', 'Conversion Rate Optimization', 'Mobile Optimization', 'Security Updates', 'Performance Monitoring'],
    icon: Zap
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing website maintenance, updates, and technical support to keep your site running smoothly.',
    features: ['Regular Updates', 'Security Monitoring', 'Backup Management', 'Performance Monitoring', 'Bug Fixes', '24/7 Support'],
    icon: Shield
  },
  {
    title: 'Web Applications',
    description: 'Custom web applications and portals tailored to your specific business processes.',
    features: ['Custom Functionality', 'User Management', 'Database Integration', 'API Development', 'Third-party Integrations', 'Scalable Architecture'],
    icon: Monitor
  }
];

const technologies = [
  { name: 'React & Next.js', description: 'Modern JavaScript frameworks for fast, interactive websites' },
  { name: 'WordPress', description: 'Flexible CMS for easy content management' },
  { name: 'Shopify', description: 'Powerful e-commerce platform for online stores' },
  { name: 'Node.js', description: 'Server-side JavaScript for web applications' },
  { name: 'Python & Django', description: 'Robust backend development framework' },
  { name: 'Cloud Hosting', description: 'Scalable hosting on AWS, Google Cloud, and Azure' }
];

const caseStudies: CaseStudy[] = [
  {
    company: 'E-commerce Fashion Store',
    industry: 'Retail',
    
    challenge: 'Outdated website with poor mobile experience and slow loading times',
    solution: 'Complete redesign with mobile-first approach, speed optimization, and improved checkout flow',
    results: {
      speed: '+300%',
      conversions: '+180%',
      mobileTraffic: '+250%'
    }
  },
  {
    company: 'Professional Services Firm',
    industry: 'Legal Services',
    challenge: 'Low online visibility and poor lead generation from website',
    solution: 'SEO-optimized website with lead capture forms and content management system',
    results: {
      organicTraffic: '+420%',
      leads: '+280%',
      rankings: 'Page 1'
    }
  },
  {
    company: 'Manufacturing Company',
    industry: 'Industrial',
    challenge: 'Complex product catalog difficult to navigate and manage',
    solution: 'Custom web application with advanced search, filtering, and product management',
    results: {
      userExperience: '+350%',
      inquiries: '+190%',
      efficiency: '+240%'
    }
  }
];

export default function WebDevelopmentPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openTypeform = () => setIsTypeformOpen(true);
  const closeTypeform = () => setIsTypeformOpen(false);
  
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 text-white py-24 overflow-hidden">
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
                Web Development
                <span className="block text-gray-200">That Performs</span>
              </h1>
              
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Fast, secure, and conversion-optimized websites that drive business growth. 
                We build modern web experiences that your customers love and search engines reward.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Button
                  onClick={openTypeform}
                  size="lg"
                  className="bg-white text-gray-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
                >
                  GET FREE WEBSITE AUDIT
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  onClick={openTypeform}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-700 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
                >
                  SCHEDULE CONSULTATION
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">250%</div>
                  <div className="text-gray-200 text-sm">Avg Performance Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">200+</div>
                  <div className="text-gray-200 text-sm">Websites Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">99.9%</div>
                  <div className="text-gray-200 text-sm">Uptime Guarantee</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Website Performance mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Website Performance</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">0.8s</div>
                    <div className="text-sm opacity-80">Load Time</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">98</div>
                    <div className="text-sm opacity-80">Performance Score</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Page Speed</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    <span className="text-sm font-bold">98</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SEO Score</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <span className="text-sm font-bold">95</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Accessibility</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-sm font-bold">100</span>
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
              Why Our Websites Outperform
            </h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build websites with performance, user experience, and business goals in mind. 
              Every site is optimized for speed, conversions, and search engine visibility.
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
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-gray-600" />
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
              Complete Web Development Services
            </h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto mb-8"></div>
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
                <Card className="h-full border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <service.icon className="w-12 h-12 text-gray-600 mb-4" />
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-gray-600 flex-shrink-0" />
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

      {/* Technologies Section */}
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
              Technologies We Master
            </h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest technologies and frameworks to build fast, secure, and scalable websites.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-disruptive-black">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
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
              Web Development Success Stories
            </h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our web development solutions have transformed businesses and delivered exceptional results.
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
                <Card className="h-full border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-disruptive-black mb-2">{study.company}</h3>
                      <p className="text-gray-600 font-medium">{study.industry}</p>
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
                          <div className="text-lg font-bold text-gray-600">{value}</div>
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
      <section className="py-20 bg-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Build Your Perfect Website?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Let's create a website that not only looks amazing but also drives real business results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-white text-gray-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET FREE WEBSITE AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={openTypeform}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-600 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
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