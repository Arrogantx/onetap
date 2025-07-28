'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Play, Clock, BarChart3, Search, Smartphone, Target, ShoppingCart, Download, Lock } from 'lucide-react';
import Link from 'next/link';

const trainingCategories = [
  'All',
  'PPC',
  'SEO',
  'Social Media',
  'Analytics',
  'E-commerce',
  'Conversion Optimization'
];

const trainingVideos = [
  {
    id: 1,
    title: 'Google Ads Fundamentals: Campaign Structure for Success',
    duration: '45 min',
    level: 'Beginner',
    category: 'PPC',
    description: 'Learn how to structure your Google Ads campaigns for maximum performance and ROI.',
    instructor: 'John Dill, CEO',
    premium: false,
    image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'Technical SEO Audit: Step-by-Step Process',
    duration: '60 min',
    level: 'Intermediate',
    category: 'SEO',
    description: 'A comprehensive guide to conducting a technical SEO audit to identify and fix issues affecting your rankings.',
    instructor: 'Emily Rodriguez, SEO Director',
    premium: false,
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'Facebook Ads: Advanced Targeting Strategies',
    duration: '50 min',
    level: 'Advanced',
    category: 'Social Media',
    description: 'Discover advanced targeting techniques to reach your ideal customers on Facebook and Instagram.',
    instructor: 'David Thompson, Head of Paid Search',
    premium: true,
    image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'Google Analytics 4: Essential Reports for Marketers',
    duration: '55 min',
    level: 'Intermediate',
    category: 'Analytics',
    description: 'Learn how to navigate GA4 and set up the essential reports every marketer needs.',
    instructor: 'Lisa Park, VP of Sales',
    premium: false,
    image: 'https://images.pexels.com/photos/6476250/pexels-photo-6476250.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    title: 'E-commerce Conversion Optimization Masterclass',
    duration: '75 min',
    level: 'Advanced',
    category: 'E-commerce',
    description: 'A comprehensive guide to optimizing your e-commerce store for maximum conversions and sales.',
    instructor: 'Michael Curtis, Creative Director',
    premium: true,
    image: 'https://images.pexels.com/photos/6476558/pexels-photo-6476558.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    title: 'A/B Testing: From Hypothesis to Implementation',
    duration: '65 min',
    level: 'Intermediate',
    category: 'Conversion Optimization',
    description: 'Learn how to develop and test hypotheses to continuously improve your website performance.',
    instructor: 'Robert Kim, Client Success Manager',
    premium: false,
    image: 'https://images.pexels.com/photos/6476492/pexels-photo-6476492.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function TrainingPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const openTypeform = () => setIsTypeformOpen(true);
  const closeTypeform = () => setIsTypeformOpen(false);
  
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  const filteredVideos = activeCategory === 'All' 
    ? trainingVideos 
    : trainingVideos.filter(video => video.category === activeCategory);

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
              Training Videos
              <span className="block text-red-200">Learn Digital Marketing</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Access our library of training videos to learn digital marketing strategies, 
              tactics, and best practices from our team of experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-white text-disruptive-red hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                BROWSE VIDEOS
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={openTypeform}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
              >
                REQUEST A TOPIC
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section id="videos" className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {trainingCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-disruptive-red text-white hover:bg-disruptive-dark-red'
                    : 'text-disruptive-gray hover:text-disruptive-red hover:border-disruptive-red'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Training Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden">
                    {video.image && (
                      <img 
                        src={video.image} 
                        alt={video.title} 
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-disruptive-black/50 flex items-center justify-center">
                      <div className="w-16 h-16 bg-disruptive-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                    {video.premium && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-disruptive-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Lock className="w-3 h-3 mr-1" />
                        PREMIUM
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm bg-disruptive-red/10 text-disruptive-red px-3 py-1 rounded-full font-medium">
                        {video.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {video.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-disruptive-black mb-3 group-hover:text-disruptive-red transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        {video.instructor}
                      </div>
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {video.level}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No videos found in this category.</p>
              <Button
                onClick={() => setActiveCategory('All')}
                className="mt-4 bg-disruptive-red hover:bg-disruptive-dark-red text-white"
              >
                View All Videos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Courses */}
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
              Premium Courses
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take your skills to the next level with our comprehensive premium courses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Google Ads Mastery',
                icon: Search,
                lessons: 12,
                hours: 8,
                price: '$299',
                description: 'A comprehensive course on Google Ads from beginner to advanced strategies.'
              },
              {
                title: 'Social Media Advertising',
                icon: Smartphone,
                lessons: 10,
                hours: 6,
                price: '$249',
                description: 'Master Facebook, Instagram, and LinkedIn advertising to drive results.'
              },
              {
                title: 'E-commerce Growth',
                icon: ShoppingCart,
                lessons: 15,
                hours: 10,
                price: '$349',
                description: 'Learn how to scale your e-commerce business with proven marketing strategies.'
              }
            ].map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-disruptive-red p-6 text-white">
                  <course.icon className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <BarChart3 className="w-4 h-4 mr-1" />
                      <span>{course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{course.hours} Hours</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-disruptive-black">{course.price}</span>
                    <Button className="bg-disruptive-red hover:bg-disruptive-dark-red text-white">
                      LEARN MORE
                    </Button>
                  </div>
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
              Need Custom Training?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              We offer custom training sessions for teams and organizations. Contact us to discuss your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                REQUEST CUSTOM TRAINING
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