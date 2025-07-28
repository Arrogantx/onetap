'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, User, Clock, Tag, Search } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Complete Guide to Google Ads in 2024: Strategies That Actually Work',
    excerpt: 'Discover the latest Google Ads strategies, features, and best practices that top marketers use to drive profitable growth in 2024.',
    author: 'John Dill',
    date: '2024-01-15',
    readTime: '12 min read',
    category: 'PPC',
    featured: true,
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'SEO Trends 2024: What Google\'s Latest Updates Mean for Your Rankings',
    excerpt: 'Stay ahead of the curve with insights into Google\'s algorithm changes and how to optimize your content for better search visibility.',
    author: 'Emily Rodriguez',
    date: '2024-01-12',
    readTime: '8 min read',
    category: 'SEO',
    featured: true,
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'Facebook Ads vs. Google Ads: Which Platform Delivers Better ROI?',
    excerpt: 'A comprehensive comparison of Facebook and Google advertising platforms to help you allocate your marketing budget effectively.',
    author: 'David Thompson',
    date: '2024-01-10',
    readTime: '10 min read',
    category: 'Paid Social',
    featured: false,
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'Conversion Rate Optimization: 15 Proven Tactics to Boost Your Sales',
    excerpt: 'Learn the most effective CRO techniques that can immediately improve your website\'s conversion rates and revenue.',
    author: 'Lisa Park',
    date: '2024-01-08',
    readTime: '15 min read',
    category: 'CRO',
    featured: false,
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    title: 'Amazon PPC Strategy: How to Dominate Your Product Category',
    excerpt: 'Master Amazon advertising with advanced strategies for Sponsored Products, Brands, and Display campaigns.',
    author: 'Michael Curtis',
    date: '2024-01-05',
    readTime: '11 min read',
    category: 'Amazon',
    featured: false,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    title: 'Email Marketing Automation: Building Campaigns That Convert',
    excerpt: 'Create high-converting email sequences that nurture leads and drive revenue on autopilot.',
    author: 'Robert Kim',
    date: '2024-01-03',
    readTime: '9 min read',
    category: 'Email Marketing',
    featured: false,
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const categories = [
  'All Posts',
  'PPC',
  'SEO',
  'Paid Social',
  'CRO',
  'Amazon',
  'Email Marketing',
  'Analytics'
];

export default function BlogPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchTerm, setSearchTerm] = useState('');

  const openTypeform = () => setIsTypeformOpen(true);
  const closeTypeform = () => setIsTypeformOpen(false);
  
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All Posts' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
              Marketing Insights
              <span className="block text-red-200">That Drive Growth</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights, proven strategies, and actionable tips 
              from our team of digital marketing professionals.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-disruptive-black text-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
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
              Featured Articles
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-xl overflow-hidden group-hover:scale-105">
                  <div className="relative h-64 bg-gradient-to-br from-disruptive-red to-red-600 overflow-hidden">
                    <div className="absolute inset-0 bg-disruptive-black/40"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="bg-disruptive-red px-3 py-1 rounded-full text-sm font-bold">
                          {post.category}
                        </span>
                        <span className="text-sm opacity-90">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4 group-hover:text-disruptive-red transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-disruptive-red group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
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
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden">
                    <div className="absolute inset-0 bg-disruptive-black/40"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-disruptive-red px-3 py-1 rounded-full text-white text-sm font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-disruptive-black mb-3 group-hover:text-disruptive-red transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
              <Button
                onClick={() => {
                  setActiveCategory('All Posts');
                  setSearchTerm('');
                }}
                className="mt-4 bg-disruptive-red hover:bg-disruptive-dark-red text-white"
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-disruptive-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Stay Updated with Marketing Insights
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Get the latest marketing strategies, tips, and industry insights delivered to your inbox weekly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-disruptive-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 font-bold tracking-wide"
              >
                SUBSCRIBE
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