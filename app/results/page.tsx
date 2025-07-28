'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, DollarSign, Target, Filter, Star, Quote, Play } from 'lucide-react';
import Link from 'next/link';

type CaseStudyResults = Record<string, string>;

interface CaseStudy {
  id: number;
  company: string;
  industry: string;
  category: string;
  challenge: string;
  solution: string;
  results: CaseStudyResults;
  timeline: string;
  featured: boolean;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  testimonial: string;
  industry: string;
  featured: boolean;
  video: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    company: 'TechSaaS Pro',
    industry: 'B2B Software',
    category: 'saas',
    challenge: 'High customer acquisition costs and low trial-to-paid conversion rates',
    solution: 'Implemented comprehensive PPC strategy with landing page optimization and email nurturing sequences',
    results: {
      revenue: '+420%',
      cac: '-65%',
      ltv: '+280%',
      conversions: '+340%'
    },
    timeline: '6 months',
    featured: true,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    company: 'FurnitureMax',
    industry: 'E-commerce Furniture',
    category: 'ecommerce',
    challenge: 'Low online sales, high cart abandonment, and poor mobile experience',
    solution: 'Complete website redesign, mobile optimization, and strategic PPC campaigns with retargeting',
    results: {
      revenue: '+520%',
      cartCompletion: '+85%',
      mobileConversions: '+180%',
      roas: '6.8x'
    },
    timeline: '8 months',
    featured: true,
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    company: 'LocalService Hub',
    industry: 'Professional Services',
    category: 'local',
    challenge: 'Limited local visibility and difficulty competing with larger competitors',
    solution: 'Local SEO optimization, Google My Business management, and geo-targeted advertising campaigns',
    results: {
      localRankings: '+350%',
      leads: '+275%',
      callVolume: '+180%',
      marketShare: '+120%'
    },
    timeline: '4 months',
    featured: true,
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO",
    company: "FurnitureMax",
    testimonial: "One Tap Media completely transformed our online presence. Their team's expertise in conversion optimization is unmatched. They don't just run ads - they build growth engines that deliver consistent results month after month.",
    industry: "E-commerce",
    featured: true,
    video: true
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Founder",
    company: "TechStartup Pro",
    testimonial: "The PPC campaigns they created for us generated over $2M in revenue. Their data-driven approach and attention to detail is incredible. Every dollar we spend with them returns at least $4 in revenue.",
    industry: "SaaS",
    featured: true,
    video: true
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Marketing Director",
    company: "LocalService Hub",
    testimonial: "Working with One Tap Media has been a game-changer for our local business. Their local SEO strategy helped us dominate our market and triple our qualified leads. The ROI speaks for itself.",
    industry: "Professional Services",
    featured: true,
    video: false
  }
];

const stats = [
  { number: '150+', label: 'Success Stories' },
  { number: '340%', label: 'Average ROI Increase' },
  { number: '$50M+', label: 'Revenue Generated' },
  { number: '98%', label: 'Client Satisfaction' }
];

export default function ResultsPage() {
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
              Our Results
              <span className="block text-red-200">Real Growth, Real ROI</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve remarkable growth through 
              strategic digital marketing. Every case study represents real results and measurable ROI.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-red-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
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
              Featured Case Studies
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most impressive client success stories and see the results we've achieved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/50 transition-all duration-300 hover:shadow-xl overflow-hidden group-hover:scale-105">
                  {/* Image Header */}
                  <div className="relative h-48 bg-gradient-to-br from-disruptive-red to-red-600 overflow-hidden">
                    {study.image && (
                      <img 
                        src={study.image} 
                        alt={study.company} 
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-disruptive-black/60 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                        <p className="text-sm opacity-90">{study.industry}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <ArrowRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-disruptive-red bg-disruptive-red/10 px-2 py-1 rounded">
                          {study.timeline}
                        </span>
                        <span className="text-sm text-gray-500 capitalize">{study.category}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-disruptive-black mb-2">Challenge:</h4>
                      <p className="text-disruptive-gray text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-disruptive-black mb-2">Solution:</h4>
                      <p className="text-disruptive-gray text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      {Object.entries(study.results).slice(0, 4).map(([key, value]: [string, string]) => (
                        <div key={key} className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            {key.includes('revenue') || key.includes('sales') ? (
                              <DollarSign className="w-4 h-4 text-green-500" />
                            ) : key.includes('leads') || key.includes('conversions') ? (
                              <TrendingUp className="w-4 h-4 text-disruptive-red" />
                            ) : key.includes('users') || key.includes('customers') ? (
                              <Users className="w-4 h-4 text-blue-500" />
                            ) : (
                              <Target className="w-4 h-4 text-purple-500" />
                            )}
                          </div>
                          <div className="text-lg font-bold text-disruptive-black">{value}</div>
                          <div className="text-xs text-disruptive-gray capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-8 py-3">
              <Link href="/case-studies">
                VIEW ALL CASE STUDIES
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
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
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about working with One Tap Media.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="mb-6">
                      <Quote className="w-8 h-8 text-disruptive-red/30 mb-4" />
                      <blockquote className="text-gray-700 leading-relaxed italic">
                        "{testimonial.testimonial}"
                      </blockquote>
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-disruptive-black">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</div>
                      </div>
                      {testimonial.video && (
                        <div className="w-10 h-10 bg-disruptive-red rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 ml-0.5" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-8 py-3">
              <Link href="/reviews">
                READ MORE TESTIMONIALS
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Results By Industry */}
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
              Results By Industry
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results across all industries. See our performance metrics by sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: 'E-commerce',
                metrics: [
                  { label: 'Average ROAS', value: '6.2x' },
                  { label: 'Revenue Growth', value: '+420%' },
                  { label: 'Cart Abandonment Reduction', value: '-65%' }
                ]
              },
              {
                industry: 'B2B SaaS',
                metrics: [
                  { label: 'Lead Generation', value: '+340%' },
                  { label: 'Cost Per Acquisition', value: '-55%' },
                  { label: 'Trial-to-Paid Conversion', value: '+180%' }
                ]
              },
              {
                industry: 'Professional Services',
                metrics: [
                  { label: 'Qualified Leads', value: '+275%' },
                  { label: 'Local Search Visibility', value: '+320%' },
                  { label: 'Cost Per Lead', value: '-45%' }
                ]
              },
              {
                industry: 'Healthcare',
                metrics: [
                  { label: 'Patient Acquisition', value: '+220%' },
                  { label: 'Website Conversion Rate', value: '+180%' },
                  { label: 'Local Search Rankings', value: '#1 Position' }
                ]
              },
              {
                industry: 'Real Estate',
                metrics: [
                  { label: 'Property Inquiries', value: '+310%' },
                  { label: 'Cost Per Lead', value: '-50%' },
                  { label: 'Website Traffic', value: '+280%' }
                ]
              },
              {
                industry: 'Home Services',
                metrics: [
                  { label: 'Call Volume', value: '+350%' },
                  { label: 'Google Maps Visibility', value: '+290%' },
                  { label: 'Service Area Coverage', value: '+200%' }
                ]
              }
            ].map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-disruptive-black mb-6">{industry.industry}</h3>
                    
                    <div className="space-y-4">
                      {industry.metrics.map((metric) => (
                        <div key={metric.label} className="flex items-center justify-between">
                          <span className="text-gray-700">{metric.label}</span>
                          <span className="text-lg font-bold text-disruptive-red">{metric.value}</span>
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
      <section className="py-20 bg-disruptive-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your business goals and create a custom strategy that delivers the same 
              kind of results you've seen in these case studies.
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
                SCHEDULE A CONSULTATION
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