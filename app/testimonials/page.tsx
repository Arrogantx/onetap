'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Quote, Play, User, Building, Calendar } from 'lucide-react';

const testimonials = [
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
    featured: false,
    video: false
  },
  {
    id: 4,
    name: "David Thompson",
    title: "CMO",
    company: "EcommerceGrow",
    testimonial: "Their Facebook Ads optimization increased our ROAS to 7.2x. The creative testing and audience strategies they implemented were brilliant. Our cost per acquisition dropped by 60% while sales volume doubled.",
    industry: "E-commerce",
    featured: false,
    video: false
  },
  {
    id: 5,
    name: "Lisa Park",
    title: "VP Marketing",
    company: "HealthTech Solutions",
    testimonial: "The B2B lead generation strategy they developed for us exceeded all expectations. Quality leads increased by 220% within 4 months, and our sales team is finally getting the qualified prospects they need.",
    industry: "Healthcare Technology",
    featured: false,
    video: false
  },
  {
    id: 6,
    name: "Robert Kim",
    title: "Owner",
    company: "RetailBrand Co",
    testimonial: "Their omnichannel approach helped us build brand awareness while driving sales. The retargeting campaigns were particularly effective, bringing back customers who had abandoned their carts.",
    industry: "Retail",
    featured: false,
    video: false
  }
];

const industries = ['All', 'E-commerce', 'SaaS', 'Professional Services', 'Healthcare Technology', 'Retail'];

export default function TestimonialsPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState('All');

  const openTypeform = () => setIsTypeformOpen(true);
  const closeTypeform = () => setIsTypeformOpen(false);
  
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  const filteredTestimonials = activeIndustry === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.industry === activeIndustry);

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
              Client Testimonials
              <span className="block text-red-200">Hear From Our Clients</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. See what our clients have to say about working with One Tap Media 
              and the results they've achieved through our marketing strategies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-red-100">Average Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-red-100">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-red-100">Client Retention</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={activeIndustry === industry ? "default" : "outline"}
                onClick={() => setActiveIndustry(industry)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeIndustry === industry
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

      {/* Video Testimonials */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.filter(t => t.video).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden aspect-video cursor-pointer group"
              >
                <div className="absolute inset-0 bg-disruptive-black/60 flex items-center justify-center group-hover:bg-disruptive-black/40 transition-colors">
                  <div className="w-20 h-20 bg-disruptive-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold mb-1">{testimonial.name}, {testimonial.title}</h3>
                  <p className="text-sm opacity-90">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
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
              Client Success Stories
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read what our clients have to say about their experience working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`h-full transition-all duration-300 hover:shadow-xl ${
                  testimonial.featured 
                    ? 'border-2 border-disruptive-red/50 bg-white' 
                    : 'border-2 border-gray-200 hover:border-disruptive-red/30'
                }`}>
                  <CardContent className="p-8">
                    {testimonial.featured && (
                      <div className="bg-disruptive-red text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                        FEATURED
                      </div>
                    )}
                    
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
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-disruptive-red to-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-disruptive-black">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</div>
                      </div>
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