'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, Play, User, Download, Video, Monitor } from 'lucide-react';
import Link from 'next/link';

const upcomingWebinars = [
  {
    id: 1,
    title: 'The Future of PPC: AI-Powered Advertising Strategies for 2024',
    date: 'March 15, 2024',
    time: '2:00 PM EST',
    host: 'John Dill, CEO',
    description: 'Discover how AI is transforming PPC advertising and learn actionable strategies to leverage these advancements for better campaign performance.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'Advanced SEO Techniques: Beyond the Basics',
    date: 'March 22, 2024',
    time: '1:00 PM EST',
    host: 'Emily Rodriguez, SEO Director',
    description: 'Take your SEO knowledge to the next level with advanced techniques for technical SEO, content optimization, and link building strategies.',
    image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const pastWebinars = [
  {
    id: 3,
    title: 'Conversion Rate Optimization: Turning Traffic into Customers',
    date: 'February 28, 2024',
    host: 'David Thompson, Head of Paid Search',
    description: 'Learn proven strategies for optimizing your website and landing pages to increase conversion rates and maximize the value of your traffic.',
    recording: true,
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'Social Media Advertising in 2024: Platforms, Strategies, and Tactics',
    date: 'February 15, 2024',
    host: 'Lisa Park, VP of Sales',
    description: 'Discover the latest trends in social media advertising and learn how to create campaigns that drive engagement and conversions.',
    recording: true,
    image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    title: 'E-commerce Growth Strategies: From Acquisition to Retention',
    date: 'January 30, 2024',
    host: 'Michael Curtis, Creative Director',
    description: 'A comprehensive look at strategies for growing your e-commerce business, from customer acquisition to retention and lifetime value optimization.',
    recording: true,
    image: 'https://images.pexels.com/photos/6476250/pexels-photo-6476250.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    title: 'Local SEO Mastery: Dominating Your Market',
    date: 'January 15, 2024',
    host: 'Robert Kim, Client Success Manager',
    description: 'Learn how to optimize your local presence and outrank competitors in your area with proven local SEO strategies.',
    recording: true,
    image: 'https://images.pexels.com/photos/6476558/pexels-photo-6476558.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function WebinarsPage() {
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
              Marketing Webinars
              <span className="block text-red-200">Learn From Our Experts</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join our free webinars to learn the latest digital marketing strategies, tips, and insights 
              from our team of experts. Register for upcoming sessions or watch past recordings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-white text-disruptive-red hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                UPCOMING WEBINARS
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={openTypeform}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
              >
                PAST RECORDINGS
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section id="upcoming" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-disruptive-black mb-6">
              Upcoming Webinars
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Register for our upcoming live webinars to learn from our experts and get your questions answered in real-time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden">
                    {webinar.image && (
                      <img 
                        src={webinar.image} 
                        alt={webinar.title} 
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-disruptive-black/50"></div>
                    <div className="absolute top-4 left-4 bg-disruptive-red text-white px-3 py-1 rounded-full text-sm font-bold">
                      UPCOMING
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-disruptive-red" />
                        <span className="text-sm text-gray-600">{webinar.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-disruptive-red" />
                        <span className="text-sm text-gray-600">{webinar.time}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-disruptive-black mb-4 group-hover:text-disruptive-red transition-colors">
                      {webinar.title}
                    </h3>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{webinar.host}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{webinar.description}</p>
                    
                    <Button 
                      onClick={openTypeform}
                      className="w-full bg-disruptive-red hover:bg-disruptive-dark-red text-white"
                    >
                      REGISTER NOW
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section id="past" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-disruptive-black mb-6">
              Past Webinars
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access recordings of our past webinars to learn at your own pace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden">
                    {webinar.image && (
                      <img 
                        src={webinar.image} 
                        alt={webinar.title} 
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-disruptive-black/50 flex items-center justify-center">
                      <div className="w-16 h-16 bg-disruptive-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-disruptive-red" />
                        <span className="text-xs text-gray-600">{webinar.date}</span>
                      </div>
                      {webinar.recording && (
                        <div className="flex items-center space-x-2">
                          <Video className="w-4 h-4 text-disruptive-red" />
                          <span className="text-xs text-gray-600">Recording</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-disruptive-black mb-3 group-hover:text-disruptive-red transition-colors line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-xs text-gray-600">{webinar.host}</span>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{webinar.description}</p>
                    
                    <div className="flex space-x-2">
                      <Button 
                        onClick={openTypeform}
                        className="flex-1 bg-disruptive-red hover:bg-disruptive-dark-red text-white text-sm"
                      >
                        WATCH NOW
                      </Button>
                      <Button 
                        onClick={openTypeform}
                        variant="outline" 
                        className="border-disruptive-red text-disruptive-red hover:bg-disruptive-red hover:text-white text-sm"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-disruptive-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Never Miss a Webinar
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our webinar notifications and be the first to know about upcoming sessions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-disruptive-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                onClick={openTypeform}
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