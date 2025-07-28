'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, PlaneTakeoff, Cog, TrendingUp } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { TYPEFORM_IDS } from '@/components/typeform-modal';

interface ProcessSectionProps {
  onOpenTypeform: () => void;
}

const processSteps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We analyze your business, competitors, and market opportunities to create a data-driven strategy.',
    details: ['Market Research', 'Competitor Analysis', 'Audience Insights', 'Goal Setting'],
  },
  {
    icon: PlaneTakeoff,
    title: 'Plan',
    description: 'Develop a comprehensive marketing strategy tailored to your business objectives and budget.',
    details: ['Strategy Development', 'Channel Selection', 'Budget Allocation', 'Timeline Creation'],
  },
  {
    icon: Cog,
    title: 'Execute',
    description: 'Launch and manage your campaigns with precision, monitoring performance in real-time.',
    details: ['Campaign Launch', 'Creative Development', 'A/B Testing', 'Performance Monitoring'],
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'Optimize and scale successful campaigns while eliminating what doesn\'t work.',
    details: ['Performance Analysis', 'Optimization', 'Scaling Winners', 'Continuous Improvement'],
  },
];

export function ProcessSection({ onOpenTypeform }: ProcessSectionProps) {
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);
  
  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  
  return (
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
            How We Drive <span className="text-disruptive-red">Results</span>
          </h2>
          <div className="w-16 h-1 bg-disruptive-red mx-auto mb-8"></div>
          <p className="text-xl text-disruptive-gray max-w-3xl mx-auto">
            Our data-driven methodology ensures every marketing dollar works harder 
            and delivers measurable results for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Step number */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-disruptive-red rounded-full flex items-center justify-center text-white font-bold text-xl relative" aria-hidden="true">
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-disruptive-black rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-disruptive-black mb-4 group-hover:text-disruptive-red transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-disruptive-gray mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (detailIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center text-sm text-disruptive-gray"
                    >
                      <div className="w-2 h-2 bg-disruptive-red rounded-full mr-2"></div>
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Subtle arrow between steps (hidden on mobile) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 z-20" aria-hidden="true">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (index * 0.2) + 0.4 }}
                    viewport={{ once: true }}
                    className="text-disruptive-red/30"
                  >
                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                      <path d="M0 8H30M30 8L24 2M30 8L24 14" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-disruptive-light-gray rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-disruptive-black mb-4">
             Ready to Experience Our Process?
            </h3>
            <p className="text-disruptive-gray mb-6">
             Start with a free marketing audit and see how our process can transform your results.
            </p>
            <Button
              onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'strategy' } }))}
              id="free-audit"
              className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-8 py-4 rounded-lg font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-disruptive-red focus:ring-offset-2 cursor-pointer"
            >
             SCHEDULE STRATEGY SESSION →
            </Button>
          </div>
        </motion.div>

       {/* FAQ Section */}
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-8"
         >
           <h3 className="text-3xl font-bold text-disruptive-black mb-4">
             Frequently Asked Questions
           </h3>
           <div className="w-16 h-1 bg-disruptive-red mx-auto mb-6"></div>
         </motion.div>

         <div className="space-y-4">
           {[
             {
               question: "How quickly can you start working on my campaigns?",
               answer: "We can typically begin work within 48-72 hours of signing our agreement. For urgent projects, we offer expedited onboarding to get your campaigns up and running as quickly as possible."
             },
             {
               question: "What's included in your free marketing audit?",
               answer: "Our comprehensive audit includes PPC account review, SEO analysis, conversion rate assessment, and a custom growth strategy with specific recommendations. We'll identify opportunities for improvement and provide actionable insights to enhance your marketing performance."
             },
             {
               question: "Do you work with businesses in my industry?",
               answer: "We work with businesses across all industries including B2B SaaS, e-commerce, healthcare, professional services, and more. Our strategies are customized for each industry's unique challenges and opportunities."
             },
             {
               question: "What's your minimum contract length?",
               answer: "We offer flexible contract terms starting from 3 months, with most clients seeing significant results within the first 90 days. We believe in earning your business each month through results, not long-term contracts."
             }
           ].map((faq, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4, delay: index * 0.1 }}
               viewport={{ once: true, margin: "0px 0px 100px 0px" }}
               className="border border-gray-200 rounded-lg overflow-hidden"
             >
               <button 
                 className="w-full flex items-center justify-between p-5 bg-white cursor-pointer hover:bg-gray-50 transition-colors text-left"
                 onClick={() => toggleFaq(index)}
                 aria-expanded={expandedFaqs.includes(index)}
                 aria-controls={`faq-content-${index}`}
               >
                 <h4 className="text-lg font-bold text-disruptive-black">{faq.question}</h4>
                 {expandedFaqs.includes(index) ? (
                   <ChevronUp className="w-5 h-5 text-disruptive-red flex-shrink-0" />
                 ) : (
                   <ChevronDown className="w-5 h-5 text-disruptive-red flex-shrink-0" />
                 )}
               </button>
               
               <AnimatePresence>
                 {expandedFaqs.includes(index) && (
                   <motion.div 
                     id={`faq-content-${index}`}
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ duration: 0.2 }}
                     className="overflow-hidden"
                   >
                     <div className="p-5 pt-0 bg-white border-t border-gray-100">
                       <p className="text-gray-600">{faq.answer}</p>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </motion.div>
           ))}
         </div>
       </div>
      </div>
    </section>
  );
}