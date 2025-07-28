'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Brain, Zap, Cog, Bot, Lightbulb, Workflow, MessageSquare, BarChart3, Shield, Rocket, Target } from 'lucide-react';

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
    icon: Brain,
    title: 'Custom AI Solutions',
    description: 'Tailored artificial intelligence solutions designed specifically for your business needs and industry requirements.'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation that reduces manual work and increases efficiency.'
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Assistants',
    description: 'Deploy intelligent conversational AI to enhance customer service and support operations.'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Leverage machine learning to predict trends, customer behavior, and business outcomes.'
  }
];

const services = [
  {
    title: 'AI Strategy & Consulting',
    description: 'Comprehensive AI strategy development to identify opportunities and create implementation roadmaps.',
    features: ['AI Readiness Assessment', 'Use Case Identification', 'ROI Analysis', 'Implementation Planning', 'Technology Selection', 'Change Management'],
    icon: Lightbulb
  },
  {
    title: 'Custom AI Development',
    description: 'Build bespoke AI solutions tailored to your specific business processes and requirements.',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Recommendation Systems', 'API Integration'],
    icon: Cog
  },
  {
    title: 'Business Process Automation',
    description: 'Automate repetitive tasks and workflows using AI to increase efficiency and reduce costs.',
    features: ['Document Processing', 'Data Entry Automation', 'Email Classification', 'Invoice Processing', 'Customer Onboarding', 'Report Generation'],
    icon: Workflow
  },
  {
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Deploy intelligent conversational AI to handle customer inquiries and support operations.',
    features: ['Customer Support Bots', 'Lead Qualification', 'Appointment Scheduling', 'FAQ Automation', 'Multi-language Support', 'CRM Integration'],
    icon: Bot
  },
  {
    title: 'Marketing AI & Personalization',
    description: 'Enhance your marketing efforts with AI-powered personalization and optimization.',
    features: ['Dynamic Content', 'Behavioral Targeting', 'Predictive Lead Scoring', 'Campaign Optimization', 'Customer Segmentation', 'Churn Prevention'],
    icon: Target
  },
  {
    title: 'AI Training & Support',
    description: 'Comprehensive training and ongoing support to ensure successful AI adoption across your organization.',
    features: ['Team Training', 'Best Practices', 'Ongoing Support', 'Performance Monitoring', 'Model Updates', 'Troubleshooting'],
    icon: Shield
  }
];

const aiSolutions = [
  {
    title: 'Customer Service Automation',
    description: 'AI-powered chatbots and virtual assistants that handle customer inquiries 24/7',
    benefits: ['Reduce response time by 90%', 'Handle 80% of routine inquiries', 'Improve customer satisfaction'],
    industry: 'All Industries'
  },
  {
    title: 'Sales Process Optimization',
    description: 'Intelligent lead scoring and sales automation to increase conversion rates',
    benefits: ['Increase qualified leads by 60%', 'Reduce sales cycle time', 'Improve conversion rates'],
    industry: 'B2B & B2C'
  },
  {
    title: 'Content Generation & Optimization',
    description: 'AI-powered content creation and optimization for marketing campaigns',
    benefits: ['Generate content 10x faster', 'Improve engagement rates', 'Personalize at scale'],
    industry: 'Marketing & Media'
  },
  {
    title: 'Predictive Analytics',
    description: 'Machine learning models that predict customer behavior and business trends',
    benefits: ['Forecast demand accurately', 'Prevent customer churn', 'Optimize inventory'],
    industry: 'E-commerce & Retail'
  }
];

const caseStudies: CaseStudy[] = [
  {
    company: 'E-commerce Retailer',
    industry: 'Online Retail',
    challenge: 'High customer service volume and slow response times affecting customer satisfaction',
    solution: 'Implemented AI chatbot with natural language processing and integrated with existing CRM',
    results: {
      responseTime: '-90%',
      satisfaction: '+45%',
      efficiency: '+300%'
    }
  },
  {
    company: 'Manufacturing Company',
    industry: 'Manufacturing',
    challenge: 'Manual invoice processing taking 5+ hours daily and prone to errors',
    solution: 'Deployed AI-powered document processing system with automated data extraction',
    results: {
      processingTime: '-85%',
      accuracy: '+99%',
      costSavings: '$50K/year'
    }
  },
  {
    company: 'SaaS Platform',
    industry: 'Technology',
    challenge: 'Difficulty identifying high-value leads and personalizing marketing campaigns',
    solution: 'Built predictive lead scoring model and AI-powered personalization engine',
    results: {
      leadQuality: '+180%',
      conversions: '+120%',
      revenue: '+250%'
    }
  }
];

const aiTechnologies = [
  { name: 'OpenAI GPT', description: 'Advanced language models for text generation and analysis' },
  { name: 'TensorFlow', description: 'Machine learning framework for custom model development' },
  { name: 'Microsoft Azure AI', description: 'Cloud-based AI services and cognitive APIs' },
  { name: 'Google Cloud AI', description: 'Comprehensive AI and machine learning platform' },
  { name: 'Amazon AWS AI', description: 'Scalable AI services and infrastructure' },
  { name: 'Hugging Face', description: 'Open-source AI models and transformers' }
];

export default function AIPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);

  const openTypeform = (type: 'audit' | 'strategy' = 'audit') => {
    document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type } }));
  };
  
  const closeTypeform = () => setIsTypeformOpen(false);

  return (
    <main className="min-h-screen">
      <Navigation onOpenTypeform={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform'))} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-24 overflow-hidden">
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
                Artificial Intelligence
                <span className="block text-purple-200">Solutions & Consulting</span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Transform your business with custom AI automation and intelligent solutions. 
                From chatbots to predictive analytics, we help you harness the power of artificial intelligence.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Button
                  onClick={() => openTypeform('audit')}
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
                >
                  GET FREE AI CONSULTATION
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  onClick={() => openTypeform('strategy')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
                >
                  SCHEDULE AI STRATEGY CALL
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">90%</div>
                  <div className="text-purple-200 text-sm">Process Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-purple-200 text-sm">AI Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">300%</div>
                  <div className="text-purple-200 text-sm">Efficiency Gains</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* AI Dashboard mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">AI Performance Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-sm opacity-80">AI Automation</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">95%</div>
                    <div className="text-sm opacity-80">Accuracy Rate</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Chatbot Responses</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <span className="text-sm font-bold">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Process Automation</span>
                    <div className="flex-1 mx-4 bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <span className="text-sm font-bold">88%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Predictive Accuracy</span>
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
              Why Choose Our AI Solutions
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep business expertise to deliver 
              solutions that drive real results and competitive advantages.
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

      {/* AI Solutions Section */}
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
              Popular AI Solutions
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI can transform different aspects of your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-disruptive-black">{solution.title}</h3>
                      <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium">
                        {solution.industry}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    
                    <div className="space-y-3">
                      {solution.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
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
              Complete AI Services
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
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
                <Card className="h-full border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
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

      {/* Technologies Section */}
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
              AI Technologies We Use
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest AI technologies and platforms to build robust, scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-purple-600" />
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
              AI Success Stories
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI solutions have transformed businesses and delivered measurable results.
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
                      {Object.entries(study.results).map(([key, value]: [string, string]) => (
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
              Our AI Implementation Process
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Assessment', description: 'Analyze your business processes and identify AI opportunities' },
              { step: '02', title: 'Strategy & Planning', description: 'Develop comprehensive AI strategy and implementation roadmap' },
              { step: '03', title: 'Development & Testing', description: 'Build and test custom AI solutions tailored to your needs' },
              { step: '04', title: 'Deployment & Support', description: 'Deploy solutions and provide ongoing support and optimization' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's explore how artificial intelligence can automate your processes, enhance customer experiences, 
              and drive unprecedented growth for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openTypeform('audit')}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET FREE AI CONSULTATION
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => openTypeform('strategy')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
              >
                SCHEDULE AI STRATEGY CALL
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}