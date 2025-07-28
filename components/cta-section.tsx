'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {}

export function CTASection({}: CTASectionProps) {
  return (
    <section className="py-16 md:py-20 bg-disruptive-red text-white relative overflow-hidden">
      {/* Background diagonal */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-disruptive-black transform skew-x-12 origin-bottom-right"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Scale Smart?
            </h2>
            
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              LET'S DISCUSS YOUR GROWTH GOALS AND CREATE A CUSTOM 
              STRATEGY THAT ACTUALLY DELIVERS RESULTS
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'strategy' } }))}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide cursor-pointer growth-plan-button focus:outline-none focus:ring-2 focus:ring-disruptive-black focus:ring-offset-2"
              >
                SCHEDULE YOUR STRATEGY SESSION →
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Logo/Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }}
            viewport={{ once: true }}
            className="text-center lg:text-right"
          >
            <div className="mb-8">
              <h3 className="text-4xl md:text-6xl font-bold mb-4">
                ONE<span className="text-red-200">TAP</span> MEDIA
              </h3>
              <div className="text-xl md:text-2xl font-bold mb-6">(267) 817-7323</div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'contact' } }))}
                className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide bg-transparent cursor-pointer"
              >
                CONTACT US
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}