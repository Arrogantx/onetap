'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, HelpCircle, Mail, Phone, MessageSquare, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const faqCategories = [
  'General',
  'Services',
  'Pricing',
  'Process',
  'Results',
  'Technical'
];

const faqs = [
  {
    question: 'How quickly can you start working on my campaigns?',
    answer: 'We can typically begin work within 48-72 hours of signing our agreement. For urgent projects, we offer expedited onboarding to get your campaigns up and running as quickly as possible.',
    category: 'General'
  },
  {
    question: 'What\'s included in your free marketing audit?',
    answer: 'Our comprehensive audit includes PPC account review, SEO analysis, conversion rate assessment, and a custom growth strategy with specific recommendations. We\'ll identify opportunities for improvement and provide actionable insights to enhance your marketing performance.',
    category: 'Services'
  },
  {
    question: 'Do you work with businesses in my industry?',
    answer: 'We work with businesses across all industries including B2B SaaS, e-commerce, healthcare, professional services, and more. Our strategies are customized for each industry\'s unique challenges and opportunities.',
    category: 'General'
  },
  {
    question: 'What\'s your minimum contract length?',
    answer: 'We offer flexible contract terms starting from 3 months, with most clients seeing significant results within the first 90 days. We believe in earning your business each month through results, not long-term contracts.',
    category: 'Pricing'
  },
  {
    question: 'How do you measure success?',
    answer: 'We establish clear KPIs at the beginning of our engagement based on your business goals. These might include ROAS, CPA, lead volume, conversion rates, or revenue growth. We provide transparent reporting on these metrics throughout our partnership.',
    category: 'Results'
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing is customized based on your specific needs, goals, and budget. We offer flexible pricing models including percentage of ad spend, fixed monthly retainers, and performance-based pricing. Contact us for a custom quote.',
    category: 'Pricing'
  },
  {
    question: 'Do you offer white-label services for agencies?',
    answer: 'Yes, we offer white-label digital marketing services for agencies looking to expand their service offerings without adding overhead. Contact us about our agency partner program for more details.',
    category: 'Services'
  },
  {
    question: 'How often will I receive reports and updates?',
    answer: 'We provide detailed monthly reports with performance metrics and insights. For active campaigns, you\'ll also receive weekly updates. Additionally, you\'ll have access to a real-time dashboard to monitor performance anytime.',
    category: 'Process'
  },
  {
    question: 'What platforms and tools do you use?',
    answer: 'We use industry-leading tools for campaign management, analytics, and reporting. These include Google Analytics, Google Ads, Facebook Ads Manager, SEMrush, Ahrefs, HubSpot, and custom proprietary tools developed by our team.',
    category: 'Technical'
  },
  {
    question: 'Can you work with my existing website?',
    answer: 'Yes, we can work with your existing website. However, if we identify that your website is limiting your marketing performance, we may recommend improvements or a redesign to maximize your results.',
    category: 'Technical'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'The timeline for results varies by channel and industry. PPC campaigns typically show initial results within 2-4 weeks, while SEO can take 3-6 months to see significant improvements. We focus on quick wins early while building long-term sustainable growth.',
    category: 'Results'
  },
  {
    question: 'Who will be working on my account?',
    answer: 'You\'ll have a dedicated account manager as your primary point of contact, supported by channel specialists (PPC, SEO, etc.) who are experts in their respective fields. Our team approach ensures you get specialized expertise across all aspects of your marketing.',
    category: 'Process'
  }
];

export default function HelpCenterPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('General');
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

  const openTypeform = () => setIsTypeformOpen(true);
  const closeTypeform = () => setIsTypeformOpen(false);
  
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  const toggleFaq = (index: number) => {
    if (expandedFaqs.includes(index)) {
      setExpandedFaqs(expandedFaqs.filter(i => i !== index));
    } else {
      setExpandedFaqs([...expandedFaqs, index]);
    }
  };

  const filteredFaqs = faqs
    .filter(faq => activeCategory === 'General' ? true : faq.category === activeCategory)
    .filter(faq => 
      searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
              Help Center
              <span className="block text-red-200">How Can We Help You?</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions, learn about our services, or contact our support team for assistance.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-disruptive-black text-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-white text-disruptive-red hover:bg-gray-100 px-8 py-4 text-lg font-bold tracking-wide"
              >
                BROWSE FAQs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
              >
                CONTACT SUPPORT
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section id="faqs" className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category) => (
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

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-disruptive-black mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and results.
            </p>
          </motion.div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-disruptive-black">{faq.question}</h3>
                  {expandedFaqs.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-disruptive-red flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-disruptive-red flex-shrink-0" />
                  )}
                </button>
                
                {expandedFaqs.includes(index) && (
                  <div className="p-6 pt-0 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <HelpCircle className="w-12 h-12 text-disruptive-red mx-auto mb-4" />
                <p className="text-xl text-gray-600 mb-4">No FAQs found matching your search.</p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('General');
                  }}
                  className="bg-disruptive-red hover:bg-disruptive-dark-red text-white"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-disruptive-black mb-6">
              Contact Support
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: 'Email Support',
                description: 'Send us an email and we\'ll respond within 24 hours.',
                contact: 'support@onetapmedia.com',
                action: 'Send Email',
                link: 'mailto:support@onetapmedia.com'
              },
              {
                icon: Phone,
                title: 'Phone Support',
                description: 'Speak directly with our support team.',
                contact: '(555) 123-HELP',
                action: 'Call Now',
                link: 'tel:5551234357'
              },
              {
                icon: MessageSquare,
                title: 'Live Chat',
                description: 'Chat with our support team in real-time.',
                contact: 'Available 9AM-6PM EST',
                action: 'Start Chat',
                link: '#'
              }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-xl text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-disruptive-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-disruptive-red group-hover:text-white transition-colors">
                      <method.icon className="w-8 h-8 text-disruptive-red group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-disruptive-black mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="font-bold text-disruptive-red mb-6">{method.contact}</p>
                    
                    <Link href={method.link}>
                      <Button className="w-full bg-disruptive-red hover:bg-disruptive-dark-red text-white">
                        {method.action}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
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
              Additional Resources
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our knowledge base, guides, and tutorials for more information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Knowledge Base',
                description: 'Browse our comprehensive knowledge base for detailed articles and tutorials.',
                link: '/knowledge-base'
              },
              {
                icon: HelpCircle,
                title: 'FAQ',
                description: 'Find answers to the most common questions about our services and process.',
                link: '/faq'
              },
              {
                icon: FileText,
                title: 'Guides & Tutorials',
                description: 'Access our library of guides and tutorials to learn more about digital marketing.',
                link: '/guides'
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl text-center"
              >
                <resource.icon className="w-12 h-12 text-disruptive-red mx-auto mb-6" />
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Link href={resource.link}>
                  <Button className="bg-disruptive-red hover:bg-disruptive-dark-red text-white">
                    Explore
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Schedule a call with our team to get personalized answers to your questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                SUBMIT A QUESTION
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