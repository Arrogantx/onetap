'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, CheckCircle, TrendingUp, Users, Award, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  onOpenTypeform: () => void;
}

export function HeroSection({ onOpenTypeform }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 text-disruptive-black py-16 md:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-disruptive-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-disruptive-red/3 to-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          >
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }}
              className="flex items-center space-x-6 mb-8"
            >
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-600">5 Star Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-disruptive-red" />
                <span className="text-sm font-semibold text-gray-600">Google Partner</span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-disruptive-black">Stop Wasting</span>
              <br />
              <span className="text-disruptive-red">Marketing Dollars</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg"
            >
              We've audited 1,000+ campaigns and found that most businesses waste 
              <span className="font-bold text-disruptive-red"> 76% of their ad spend</span>. 
              Let's fix that—starting with your free audit.
            </motion.p>

            {/* Key benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }}
              className="space-y-4 mb-10"
            >
              {[
                'Identify exactly where your budget is leaking',
                'Get a custom growth strategy in 48 hours',
                'No strings attached—keep the plan either way'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }}
              className="flex flex-col sm:flex-row gap-4 items-start mb-16 z-10"
            >
              <Button
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'audit' } }))}
                size="lg"
                className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-8 py-4 text-lg font-bold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer growth-plan-button focus:outline-none focus:ring-2 focus:ring-disruptive-red focus:ring-offset-2"
              >
                GET YOUR FREE AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'strategy' } }))}
                size="lg"
                variant="outline"
                className="border-2 border-disruptive-red text-disruptive-red hover:bg-disruptive-red hover:text-white px-8 py-4 text-lg font-bold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer sm:mr-8 focus:outline-none focus:ring-2 focus:ring-disruptive-red focus:ring-offset-2"
              >
                SCHEDULE STRATEGY SESSION
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="flex items-center text-gray-600 mt-4 sm:mt-0">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm">Join 500+ growing businesses</span>
              </div>
            </motion.div>

            {/* Urgency message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.6 } }}
              className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-800">
                    <span className="font-semibold">Limited spots:</span> We're only taking 5 new clients this month
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }}
            className="relative lg:absolute lg:top-0 lg:right-0 lg:w-1/2 mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-800">Marketing Performance</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                    <div className="text-3xl font-bold text-red-600 mb-1">76%</div>
                    <div className="text-sm text-gray-600 font-medium">Budget Wasted</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-3xl font-bold text-green-600 mb-1">24%</div>
                    <div className="text-sm text-gray-600 font-medium">Effective Spend</div>
                  </div>
                </div>

                {/* Chart representation */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">Google Ads</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-red-600">80% waste</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">Facebook Ads</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-red-600">70% waste</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">SEO</span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-green-600">90% effective</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-disruptive-red text-white p-4 rounded-xl shadow-lg"
              >
                <TrendingUp className="w-6 h-6 mb-2" />
                <div className="text-sm font-bold">+420%</div>
                <div className="text-xs">ROI Increase</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="absolute -bottom-16 -left-16 bg-blue-500 text-white p-4 rounded-xl shadow-lg"
              >
                <Users className="w-6 h-6 mb-2" />
                <div className="text-sm font-bold">$50M+</div>
                <div className="text-xs">Ad Spend Managed</div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Bottom stats */}
          <div className="hidden md:block lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-disruptive-black mb-2">1,000+</div>
                <div className="text-gray-600 font-medium">Marketing Audits Completed</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-disruptive-black mb-2">$50M+</div>
                <div className="text-gray-600 font-medium">Ad Spend Optimized</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-disruptive-black mb-2">150+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}