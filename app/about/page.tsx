'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageShareSection } from '@/components/page-share-section';
import { ArrowRight, Users, Target, TrendingUp, Award, Heart, Lightbulb, Shield, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy, campaign, and decision is focused on delivering measurable results that drive real business growth.'
  },
  {
    icon: Shield,
    title: 'Transparency',
    description: 'Complete transparency in our processes, reporting, and communication. You always know what we\'re doing and why.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of industry trends and continuously test new strategies to keep our clients competitive.'
  },
  {
    icon: Heart,
    title: 'Partnership',
    description: 'We view ourselves as an extension of your team, invested in your success and committed to your growth.'
  }
];

const team = [
  {
    name: 'John Dill-Gular',
    role: 'Founder & CEO',
    bio: 'Former Google Ads specialist with 10+ years of experience scaling businesses from startup to $100M+.',
    expertise: ['PPC Strategy', 'Business Growth', 'Team Leadership']
  },
  {
    name: 'Michael Curtis',
    role: 'Creative Director',
    bio: 'Technical specialist & creative who has helped 100+ websites achieve first-page rankings',
    expertise: ['Internet Technology', 'Dev Ops', 'Project Management']
  },
  {
    name: 'Emily Rodriguez',
    role: 'SEO Director',
    bio: 'Google Ads certified expert who has managed over $20M in ad spend across 200+ campaigns.',
    expertise: ['Technical SEO', 'Content Strategy', 'Link Building']
  },
  {
    name: 'David Thompson',
    role: 'Head of Paid Search',
    bio: 'Award-winning creative professional with expertise in high-converting ad creatives and landing pages.',
    expertise: ['Creative Strategy', 'Video Production', 'Conversion Optimization']
  },
  {
    name: 'Lisa Park',
    role: 'VP of Sales',
    bio: 'Data scientist turned marketing analyst, former QuickBooks specialist, now specializing in attribution modeling and performance tracking.',
    expertise: ['Data Analytics', 'Attribution Modeling', 'Performance Tracking']
  },
  {
    name: 'Robert Kim',
    role: 'Client Success Manager',
    bio: 'Dedicated to ensuring client satisfaction and success with a background in customer success and account management.',
    expertise: ['Client Relations', 'Team Management', 'Strategy Consulting']
  }
];

const stats = [
  { number: '150+', label: 'Happy Clients' },
  { number: '$50M+', label: 'Ad Spend Managed' },
  { number: '340%', label: 'Average ROI Increase' },
  { number: '98%', label: 'Client Retention Rate' }
];

const certifications = [
  'Google Premier Partner',
  'Meta Business Partner',
  'HubSpot Certified Partner',
  'Bing Ads Accredited',
  'Amazon Verified Partner',
  'Klaviyo Master Elite'
];

export default function AboutPage() {
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
              About One Tap Media
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're a team of digital marketing experts obsessed with driving real, measurable growth 
              for businesses. No fluff, no vanity metrics—just results that matter.
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

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-disruptive-black mb-6">
                Our Mission
              </h2>
              <div className="w-16 h-1 bg-disruptive-red mb-8"></div>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                To help businesses achieve sustainable growth through data-driven digital marketing 
                strategies that deliver measurable results.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe that marketing should be an investment, not an expense. That's why we focus 
                on strategies that generate real ROI and drive long-term business growth. Every campaign 
                we create is built on data, optimized for performance, and designed to scale.
              </p>

              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                WORK WITH US
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-disruptive-red/10 to-red-600/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <TrendingUp className="w-12 h-12 text-disruptive-red mb-4" />
                    <h3 className="text-xl font-bold text-disruptive-black mb-2">Growth Focused</h3>
                    <p className="text-gray-600 text-sm">Every strategy is designed to drive sustainable business growth.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Target className="w-12 h-12 text-disruptive-red mb-4" />
                    <h3 className="text-xl font-bold text-disruptive-black mb-2">Results Driven</h3>
                    <p className="text-gray-600 text-sm">We measure success by your business outcomes, not vanity metrics.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Users className="w-12 h-12 text-disruptive-red mb-4" />
                    <h3 className="text-xl font-bold text-disruptive-black mb-2">Partnership</h3>
                    <p className="text-gray-600 text-sm">We work as an extension of your team, invested in your success.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Zap className="w-12 h-12 text-disruptive-red mb-4" />
                    <h3 className="text-xl font-bold text-disruptive-black mb-2">Innovation</h3>
                    <p className="text-gray-600 text-sm">We stay ahead of trends to keep our clients competitive.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-disruptive-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-disruptive-black mb-6">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experts brings together decades of experience in digital marketing, 
              data analysis, and business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-disruptive-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-disruptive-black mb-2">{member.name}</h3>
                    <p className="text-disruptive-red font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{member.bio}</p>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill) => (
                        <span key={skill} className="bg-disruptive-red/10 text-disruptive-red px-3 py-1 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
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
              Certifications & Partnerships
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest level certifications with all major advertising platforms 
              to ensure we're always using the latest features and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-disruptive-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-disruptive-red" />
                  </div>
                  <h3 className="font-bold text-disruptive-black text-sm">{cert}</h3>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your business goals and create a custom marketing strategy that drives real results.
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
     
     {/* Share Section */}
     <PageShareSection />
      
      {/* Modals */}
      <TypeformModal isOpen={isTypeformOpen} onClose={closeTypeform} />
      <CalendlyPopup isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </main>
  );
}