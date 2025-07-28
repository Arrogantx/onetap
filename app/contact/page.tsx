'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle, Users, Award } from 'lucide-react';
import { TYPEFORM_IDS } from '@/components/typeform-modal';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our marketing experts',
    contact: '(267) 817-7323',
    action: 'Call Now',
    available: 'Mon-Fri 9AM-6PM EST'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us your questions or project details',
    contact: 'hello@onetapmedia.com',
    action: 'Send Email',
    available: 'Response within 2 hours'
  },
  {
    icon: Clock,
    title: 'Schedule a Call',
    description: 'Book a free 30-minute strategy session',
    contact: 'Free Consultation',
    action: 'Book Meeting',
    available: 'Available 7 days a week'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant answers to your questions',
    contact: 'Chat Support',
    action: 'Start Chat',
    available: 'Mon-Fri 9AM-6PM EST'
  }
];

const faqs = [
  {
    question: 'How quickly can you start working on my campaigns?',
    answer: 'We can typically begin work within 48-72 hours of signing our agreement. For urgent projects, we offer expedited onboarding.'
  },
  {
    question: 'What\'s included in your free marketing audit?',
    answer: 'Our comprehensive audit includes PPC account review, SEO analysis, conversion rate assessment, and a custom growth strategy with specific recommendations.'
  },
  {
    question: 'Do you work with businesses in my industry?',
    answer: 'We work with businesses across all industries including B2B SaaS, e-commerce, healthcare, professional services, and more. Our strategies are customized for each industry\'s unique challenges.'
  },
  {
    question: 'What\'s your minimum contract length?',
    answer: 'We offer flexible contract terms starting from 3 months, with most clients seeing significant results within the first 90 days.'
  }
];

export default function ContactPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    message: ''
  });

  const openTypeform = () => {
    document.documentElement.dispatchEvent(new CustomEvent('openTypeform'));
  };
  const closeTypeform = () => setIsTypeformOpen(false);
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
              Let's Grow Your Business
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to take your marketing to the next level? Get in touch with our team of experts and discover how we can help you achieve your growth goals.
            </p>

            <Button
              onClick={openTypeform}
              size="lg"
              className="bg-white text-disruptive-red hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
            >
              CONTACT US NOW
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {faqs.map((faq, index) => (
                <Card key={index} className="border border-gray-200 bg-white text-left">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-disruptive-black mb-3">{faq.question}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Don't wait to start growing your business. Get in touch today and discover 
              how our proven strategies can drive real results for your company.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform'))}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET FREE AUDIT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openCalendly'))}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
              >
                CONTACT US
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}

      <Footer />
      
      {/* Modals */}
      <TypeformModal isOpen={isTypeformOpen} onClose={closeTypeform} typeformId={TYPEFORM_IDS.DEFAULT} />
    </main>
  );
}