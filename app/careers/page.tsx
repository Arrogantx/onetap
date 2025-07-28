'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin, Clock, DollarSign, Users, Heart, Lightbulb, TrendingUp, Coffee, Laptop, Globe } from 'lucide-react';

const openPositions = [
  {
    title: 'Senior PPC Specialist',
    department: 'Paid Media',
    location: 'Remote / New York',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    description: 'Lead Google Ads and Bing Ads campaigns for our enterprise clients. 3+ years experience required.',
    requirements: ['Google Ads Certification', '3+ years PPC experience', 'Experience with $100K+ monthly budgets', 'Data analysis skills'],
    benefits: ['Health Insurance', 'Remote Work', '401k Match', 'Professional Development']
  },
  {
    title: 'SEO Content Strategist',
    department: 'SEO',
    location: 'Remote / Los Angeles',
    type: 'Full-time',
    salary: '$60,000 - $80,000',
    description: 'Develop and execute content strategies that drive organic traffic and rankings for our clients.',
    requirements: ['SEO experience', 'Content writing skills', 'Keyword research expertise', 'Analytics proficiency'],
    benefits: ['Health Insurance', 'Flexible Hours', 'Learning Budget', 'Team Retreats']
  },
  {
    title: 'Social Media Manager',
    department: 'Paid Social',
    location: 'Remote / Chicago',
    type: 'Full-time',
    salary: '$55,000 - $70,000',
    description: 'Manage Facebook, Instagram, and LinkedIn advertising campaigns for diverse client portfolio.',
    requirements: ['Social media advertising experience', 'Creative mindset', 'Facebook Blueprint certification', 'Project management skills'],
    benefits: ['Health Insurance', 'Remote Work', 'Profit Sharing', 'Wellness Program']
  },
  {
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'Remote / New York',
    type: 'Full-time',
    salary: '$65,000 - $85,000',
    description: 'Analyze marketing performance data and create actionable insights for client campaigns.',
    requirements: ['Google Analytics expertise', 'SQL knowledge', 'Data visualization skills', 'Statistical analysis'],
    benefits: ['Health Insurance', 'Stock Options', 'Learning Budget', 'Flexible PTO']
  },
  {
    title: 'Account Manager',
    department: 'Client Success',
    location: 'Remote / Los Angeles',
    type: 'Full-time',
    salary: '$50,000 - $65,000',
    description: 'Build strong relationships with clients and ensure successful campaign execution and growth.',
    requirements: ['Client management experience', 'Marketing knowledge', 'Communication skills', 'Problem-solving abilities'],
    benefits: ['Health Insurance', 'Commission Structure', 'Career Growth', 'Team Events']
  },
  {
    title: 'Marketing Intern',
    department: 'Various',
    location: 'Remote / All Offices',
    type: 'Internship',
    salary: '$20 - $25/hour',
    description: 'Gain hands-on experience in digital marketing while supporting various teams and projects.',
    requirements: ['Marketing education', 'Eagerness to learn', 'Basic digital marketing knowledge', 'Strong work ethic'],
    benefits: ['Mentorship Program', 'Real Project Experience', 'Potential Full-time Offer', 'Flexible Schedule']
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, dental, vision, and wellness programs to keep you healthy.'
  },
  {
    icon: Laptop,
    title: 'Remote-First Culture',
    description: 'Work from anywhere with flexible hours and a home office setup allowance.'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear advancement paths, mentorship programs, and leadership development opportunities.'
  },
  {
    icon: Lightbulb,
    title: 'Learning & Development',
    description: 'Annual learning budget, conference attendance, and certification reimbursements.'
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'Market-rate salaries, performance bonuses, and equity participation for senior roles.'
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Unlimited PTO, flexible schedules, and company-wide mental health days.'
  }
];

const companyValues = [
  {
    title: 'Results-Driven',
    description: 'We measure success by the results we deliver for our clients and the growth we achieve together.'
  },
  {
    title: 'Continuous Learning',
    description: 'The marketing landscape evolves rapidly, and we invest in keeping our team at the forefront of industry knowledge.'
  },
  {
    title: 'Collaboration',
    description: 'We believe the best results come from diverse perspectives and collaborative problem-solving.'
  },
  {
    title: 'Innovation',
    description: 'We encourage creative thinking and testing new approaches to stay ahead of the competition.'
  }
];

export default function CareersPage() {
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
              Join Our Team
              <span className="block text-red-200">Shape the Future of Marketing</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're looking for passionate marketers, data analysts, and creative thinkers who want to 
              drive real results for growing businesses. Join a team that values innovation, growth, and work-life balance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-red-100">Team Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-red-100">Remote Friendly</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-red-100">Employee Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career while making a real impact on business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-disruptive-black mb-2">{position.title}</h3>
                        <p className="text-disruptive-red font-medium">{position.department}</p>
                      </div>
                      <span className="bg-disruptive-red/10 text-disruptive-red px-3 py-1 rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{position.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-disruptive-black mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req) => (
                          <li key={req} className="flex items-center space-x-2 text-sm text-gray-700">
                            <div className="w-2 h-2 bg-disruptive-red rounded-full"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-disruptive-black mb-3">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.benefits.map((benefit) => (
                          <span key={benefit} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-disruptive-red hover:bg-disruptive-dark-red text-white">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Work With Us
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team so they can take care of our clients. 
              Here's what makes One Tap Media a great place to work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-disruptive-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-disruptive-red" />
                </div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Values
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide how we work, make decisions, and treat each other every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-disruptive-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              We're always looking for talented people to join our team. Send us your resume and 
              tell us how you'd like to contribute to our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                SEND YOUR RESUME
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={openTypeform}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
              >
                SCHEDULE A CHAT
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