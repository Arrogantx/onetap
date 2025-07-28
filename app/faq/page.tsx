'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqCategories = [
  'All',
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
  },
  {
    question: 'Do you guarantee results?',
    answer: 'While we can\'t guarantee specific results due to the many variables involved in digital marketing, we have a proven track record of success across industries. We work closely with you to establish realistic goals and continuously optimize to achieve them.',
    category: 'Results'
  },
  {
    question: 'Can I cancel my service if I\'m not satisfied?',
    answer: 'Yes, our agreements include a 30-day notice period for cancellation. We\'re confident in our ability to deliver results, but we understand that circumstances change and we don\'t believe in locking clients into long-term contracts.',
    category: 'Pricing'
  },
  {
    question: 'Do you handle content creation?',
    answer: 'Yes, we offer content creation services including ad copy, landing page content, blog posts, social media content, and more. Our team includes experienced copywriters and content strategists who can create compelling content that converts.',
    category: 'Services'
  },
  {
    question: 'How do you stay up-to-date with industry changes?',
    answer: 'Our team undergoes continuous training and certification programs. We\'re also Google Premier Partners, Meta Business Partners, and maintain other industry certifications that give us early access to platform changes and beta features.',
    category: 'General'
  },
  {
    question: 'Can you help with website design and development?',
    answer: 'Yes, we offer website design and development services with a focus on conversion optimization and marketing performance. Whether you need a new website, landing pages, or improvements to your existing site, our team can help.',
    category: 'Services'
  },
  {
    question: 'What makes you different from other agencies?',
    answer: 'We focus exclusively on performance and ROI, not vanity metrics. Our team consists of specialists in each marketing discipline, not generalists. We\'re transparent about results and strategy, and we limit our client roster to ensure personalized service.',
    category: 'General'
  }
];

export default function FAQPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
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
    .filter(faq => activeCategory === 'All' ? true : faq.category === activeCategory)
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
              Frequently Asked
              <span className="block text-red-200">Questions</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our services, process, and results.
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
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
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
                    setActiveCategory('All');
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
              Contact our team for personalized answers to your questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                CONTACT US
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