'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { PageShareSection } from '@/components/page-share-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Quote, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'CEO',
    company: 'FurnitureMax',
    rating: 5,
    review: "One Tap Media completely transformed our online presence. Our revenue increased by 420% in just 6 months, and their team's expertise in conversion optimization is unmatched. They don't just run ads - they build growth engines.",
    results: '+420% Revenue Growth',
    industry: 'E-commerce',
    date: '2024-01-15',
    featured: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Founder',
    company: 'TechStartup Pro',
    rating: 5,
    review: "The PPC campaigns they created for us generated over $2M in revenue. Their data-driven approach and attention to detail is incredible. Every dollar we spend with them returns at least $4 in revenue.",
    results: '+350% User Acquisition',
    industry: 'SaaS',
    date: '2024-01-10',
    featured: true
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Marketing Director',
    company: 'LocalService Hub',
    rating: 5,
    review: "Working with One Tap Media has been a game-changer for our local business. Their local SEO strategy helped us dominate our market and triple our qualified leads. The ROI speaks for itself.",
    results: '+275% Lead Generation',
    industry: 'Professional Services',
    date: '2024-01-08',
    featured: true
  },
  {
    id: 4,
    name: 'David Thompson',
    title: 'CMO',
    company: 'EcommerceGrow',
    rating: 5,
    review: "Their Facebook Ads optimization increased our ROAS to 7.2x. The creative testing and audience strategies they implemented were brilliant. Our cost per acquisition dropped by 60% while sales volume doubled.",
    results: '+520% Revenue Increase',
    industry: 'E-commerce',
    date: '2024-01-05',
    featured: false
  },
  {
    id: 5,
    name: 'Lisa Park',
    title: 'VP Marketing',
    company: 'HealthTech Solutions',
    rating: 5,
    review: "The B2B lead generation strategy they developed for us exceeded all expectations. Quality leads increased by 220% within 4 months, and our sales team is finally getting the qualified prospects they need.",
    results: '+380% B2B Leads',
    industry: 'Healthcare Technology',
    date: '2024-01-03',
    featured: false
  },
  {
    id: 6,
    name: 'Robert Kim',
    title: 'Owner',
    company: 'RetailBrand Co',
    rating: 5,
    review: "Their omnichannel approach helped us build brand awareness while driving sales. The retargeting campaigns were particularly effective, bringing back customers who had abandoned their carts.",
    results: '+290% Brand Awareness',
    industry: 'Retail',
    date: '2024-01-01',
    featured: false
  },
  {
    id: 7,
    name: 'Jennifer Walsh',
    title: 'Marketing Manager',
    company: 'FitnessPro',
    rating: 5,
    review: "One Tap Media's email marketing automation increased our customer lifetime value by 180%. Their segmentation strategies and personalized campaigns have transformed how we engage with our members.",
    results: '+180% Customer LTV',
    industry: 'Fitness',
    date: '2023-12-28',
    featured: false
  },
  {
    id: 8,
    name: 'Mark Stevens',
    title: 'Founder',
    company: 'LegalAdvice Pro',
    rating: 5,
    review: "Their local SEO work got us ranking #1 for all our target keywords. Our organic traffic increased 450% and we're now the go-to law firm in our area. The phone hasn't stopped ringing!",
    results: '+450% Organic Traffic',
    industry: 'Legal Services',
    date: '2023-12-25',
    featured: false
  },
  {
    id: 9,
    name: 'Amanda Foster',
    title: 'CEO',
    company: 'BeautyBrand',
    rating: 5,
    review: "The creative team at One Tap Media produced video ads that went viral on TikTok and Instagram. Our brand awareness skyrocketed and sales followed. They understand social media marketing like no one else.",
    results: '+600% Social Engagement',
    industry: 'Beauty',
    date: '2023-12-20',
    featured: false
  }
];

const platforms = [
  { name: 'Google Reviews', rating: 4.9, count: 127, logo: '🔍' },
  { name: 'Clutch', rating: 5.0, count: 43, logo: '🏆' },
  { name: 'Facebook', rating: 4.8, count: 89, logo: '📘' },
  { name: 'LinkedIn', rating: 4.9, count: 56, logo: '💼' },
  { name: 'Trustpilot', rating: 4.9, count: 78, logo: '⭐' },
  { name: 'Yelp', rating: 4.7, count: 34, logo: '🍽️' }
];

const stats = [
  { number: '4.9/5', label: 'Average Rating', icon: Star },
  { number: '427', label: 'Total Reviews', icon: Users },
  { number: '98%', label: 'Client Retention', icon: Award },
  { number: '340%', label: 'Average ROI', icon: TrendingUp }
];

export default function ReviewsPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const openTypeform = () => setIsTypeformOpen(true);
  const closeTypeform = () => setIsTypeformOpen(false);
  
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  const industries = ['All', ...new Set(reviews.map(review => review.industry))];
  const filteredReviews = selectedIndustry === 'All' 
    ? reviews 
    : reviews.filter(review => review.industry === selectedIndustry);

  return (
    <main className="min-h-screen">
      <Navigation />
      
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
              Client Reviews
              <span className="block text-red-200">Real Results, Real Feedback</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. See what our clients say about working with One Tap Media 
              and the results they've achieved through our marketing strategies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-red-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review Platforms */}
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
              Trusted Across All Platforms
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our clients consistently rate us highly across all major review platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{platform.logo}</div>
                <h3 className="font-bold text-disruptive-black mb-2">{platform.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(platform.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">{platform.rating} ({platform.count} reviews)</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-disruptive-red text-white hover:bg-disruptive-dark-red'
                    : 'text-disruptive-gray hover:text-disruptive-red hover:border-disruptive-red'
                }`}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`h-full transition-all duration-300 hover:shadow-xl ${
                  review.featured 
                    ? 'border-2 border-disruptive-red/50 bg-white' 
                    : 'border-2 border-gray-200 hover:border-disruptive-red/30'
                }`}>
                  <CardContent className="p-8">
                    {review.featured && (
                      <div className="bg-disruptive-red text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                        FEATURED REVIEW
                      </div>
                    )}
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="mb-6">
                      <Quote className="w-8 h-8 text-disruptive-red/30 mb-4" />
                      <blockquote className="text-gray-700 leading-relaxed italic">
                        "{review.review}"
                      </blockquote>
                    </div>

                    {/* Result Badge */}
                    <div className="mb-6">
                      <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full">
                        <span className="text-sm font-bold">{review.results}</span>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-disruptive-black">{review.name}</div>
                        <div className="text-sm text-gray-600">{review.title}</div>
                        <div className="text-sm text-gray-500">{review.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-disruptive-red">{review.industry}</div>
                        <div className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Video Section */}
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
              Video Testimonials
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our clients about their experience working with One Tap Media.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((video, index) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden aspect-video cursor-pointer group"
              >
                <div className="absolute inset-0 bg-disruptive-black/60 flex items-center justify-center group-hover:bg-disruptive-black/40 transition-colors">
                  <div className="w-20 h-20 bg-disruptive-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold mb-1">Client Success Story #{video}</h3>
                  <p className="text-sm opacity-90">See how we helped achieve 400% growth</p>
                </div>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Let's create a marketing strategy that delivers the same kind of results our clients rave about.
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