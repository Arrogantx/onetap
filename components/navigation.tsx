'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ChevronDown, Star, Award, BookOpen, Users } from 'lucide-react';
import Link from 'next/link';
import { TYPEFORM_IDS } from './typeform-modal';

interface NavigationProps {
  onOpenTypeform: () => void;
}

const whatWeDoServices = {
  'All Services': [
    { name: 'View All Services', href: '/services' },
    { name: 'Paid Search', href: '/services/paid-search', highlight: false },
    { name: 'Paid Social', href: '/services/paid-social', highlight: false },
    { name: 'SEO', href: '/services/seo', highlight: false },
    { name: 'AI Solutions', href: '/services/ai', highlight: false },
  ],
  'Paid Search': [
    { name: 'Google Ads', href: '/services/paid-search', highlight: false },
    { name: 'Bing Ads', href: '/services/paid-search', highlight: false },
    { name: 'Shopping Campaigns', href: '/services/paid-search', highlight: false },
    { name: 'Performance Max', href: '/services/paid-search', highlight: false },
  ],
  'Paid Social': [
    { name: 'Facebook Ads', href: '/services/paid-social', highlight: false },
    { name: 'Instagram Ads', href: '/services/paid-social', highlight: false },
    { name: 'LinkedIn Ads', href: '/services/paid-social', highlight: false },
    { name: 'TikTok Ads', href: '/services/paid-social', highlight: false },
  ],
  'SEO': [
    { name: 'Technical SEO', href: '/services/seo', highlight: false },
    { name: 'Content Strategy', href: '/services/seo', highlight: false },
    { name: 'Link Building', href: '/services/seo', highlight: false },
    { name: 'Local SEO', href: '/services/seo', highlight: false },
  ],
  'CRO': [
    { name: 'A/B Testing', href: '/services/conversion-optimization', highlight: false },
    { name: 'Landing Pages', href: '/services/conversion-optimization', highlight: false },
    { name: 'User Experience', href: '/services/conversion-optimization', highlight: false },
    { name: 'Analytics Setup', href: '/services/conversion-optimization', highlight: false },
  ],
  'Creative': [
    { name: 'Ad Creative', href: '/services/creative', highlight: false },
    { name: 'Video Production', href: '/services/creative', highlight: false },
    { name: 'Graphic Design', href: '/services/creative', highlight: false },
    { name: 'Copywriting', href: '/services/creative', highlight: false },
  ],
  'Data Analytics': [
    { name: 'Google Analytics', href: '/services/analytics', highlight: false },
    { name: 'Custom Dashboards', href: '/services/analytics', highlight: false },
    { name: 'Attribution Modeling', href: '/services/analytics', highlight: false },
    { name: 'Reporting', href: '/services/analytics', highlight: false },
  ],
  'AI Solutions': [
    { name: 'AI Strategy & Consulting', href: '/services/ai', highlight: false },
    { name: 'Custom AI Development', href: '/services/ai', highlight: false },
    { name: 'Process Automation', href: '/services/ai', highlight: false },
    { name: 'AI Chatbots', href: '/services/ai', highlight: false },
  ],
  'Lead Generation': [
    { name: 'Lead Magnets', href: '/services/email-marketing', highlight: false },
    { name: 'Email Marketing', href: '/services/email-marketing', highlight: false },
    { name: 'Nurture Campaigns', href: '/services/email-marketing', highlight: false },
    { name: 'Sales Funnels', href: '/services/email-marketing', highlight: false },
  ],
};

const industriesServices = {
  'Industries We Serve': [
    { name: 'View All Industries', href: '/industries', highlight: false },
    { name: 'Furniture', href: '/industries/furniture', highlight: true },
    { name: 'Healthcare', href: '/industries/healthcare', highlight: true },
    { name: 'Auto Sales', href: '/industries/auto-sales', highlight: true },
    { name: 'E-commerce', href: '/industries/ecommerce', highlight: true },
  ],
  'Furniture Retailers': [
    { name: 'Showroom Marketing', href: '/industries/furniture', highlight: false },
    { name: 'Omnichannel Strategy', href: '/industries/furniture', highlight: false },
    { name: 'POS Integration', href: '/industries/furniture', highlight: false },
    { name: 'Inventory Systems', href: '/industries/furniture', highlight: false },
  ],
  'Healthcare Providers': [
    { name: 'Patient Acquisition', href: '/industries/healthcare', highlight: false },
    { name: 'HIPAA Compliance', href: '/industries/healthcare', highlight: false },
    { name: 'Provider Marketing', href: '/industries/healthcare', highlight: false },
    { name: 'Telehealth Promotion', href: '/industries/healthcare', highlight: false },
  ],
  'Auto Dealerships': [
    { name: 'Inventory Promotion', href: '/industries/auto-sales', highlight: false },
    { name: 'Lead Generation', href: '/industries/auto-sales', highlight: false },
    { name: 'Local SEO', href: '/industries/auto-sales', highlight: false },
    { name: 'CRM Integration', href: '/industries/auto-sales', highlight: false },
  ],
};

const whoWeAreItems = {
  'About Us': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Values', href: '/about' },
    { name: 'Our Mission', href: '/about' },
    { name: 'Meet Our Team', href: '/about#team-section' },
  ],
  'Company': [
    { name: 'Careers', href: '/careers' },
    { name: 'Culture', href: '/culture' },
    { name: 'Giving Back', href: '/giving-back' },
    { name: 'Press & Media', href: '/press' },
  ],
  'Certifications': [
    { name: 'Google Partner', href: '/certifications/google' },
    { name: 'Meta Business Partner', href: '/certifications/meta' },
    { name: 'HubSpot Certified', href: '/certifications/hubspot' },
    { name: 'All Certifications', href: '/certifications' },
  ],
};

const resultsItems = {
  'Case Studies': [
    { name: 'All Case Studies', href: '/case-studies' },
    { name: 'B2B Success Stories', href: '/case-studies' },
    { name: 'eCommerce Wins', href: '/case-studies' },
    { name: 'Local Business Growth', href: '/case-studies' },
  ],
  'Performance': [
    { name: 'Client Reviews', href: '/reviews' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Awards & Recognition', href: '/awards' },
    { name: 'Industry Reports', href: '/reports' },
  ],
  'Featured Results': [
    { name: '500% ROI Increase', href: '/case-studies/roi-increase' },
    { name: '$2M Revenue Generated', href: '/case-studies/revenue' },
    { name: '300% Lead Growth', href: '/case-studies/leads' },
    { name: 'View All Results', href: '/results' },
  ],
};

const resourcesItems = {
  'Learning': [
    { name: 'Blog', href: '/blog' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training Videos', href: '/training' },
    { name: 'Marketing Guides', href: '/guides' },
  ],
  'Tools & Resources': [
    { name: 'ROI Calculator', href: '/tools' },
    { name: 'Audit Checklist', href: '/tools' },
    { name: 'Templates', href: '/tools' },
    { name: 'Free Tools', href: '/tools' },
  ],
  'Support': [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Partners', href: '/partners' },
    { name: 'Help Center', href: '/help' },
    { name: 'FAQ', href: '/faq' },
  ], 
  'OneTap Growth Alliance': [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Partners', href: '/partners' },
    { name: 'Help Center', href: '/help' },
    { name: 'FAQ', href: '/faq' },
  ],
};

export function Navigation({ onOpenTypeform }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null);
  };

  const handleMobileDropdownToggle = (dropdown: string) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-3xl md:text-5xl font-bold">
                  <span className="text-disruptive-black">ONE</span>
                  <span className="text-disruptive-red">TAP</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-20">
              {/* What We Do Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('whatWeDo')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-disruptive-black hover:text-disruptive-red transition-colors font-medium py-2">
                  <span className="text-lg font-bold tracking-wider">WHAT WE DO</span>
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'whatWeDo' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white shadow-xl border border-gray-100 rounded-lg"
                    >
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-disruptive-black mb-2">WHAT WE DO</h3>
                          <div className="w-16 h-1 bg-disruptive-red mb-4"></div>
                          <p className="text-gray-600 text-sm">Our comprehensive services and industry expertise</p>
                        </div>
                        
                        <div className="grid grid-cols-12 gap-8">
                          {/* Left side: Services (8 columns) */}
                          <div className="col-span-8 grid grid-cols-3 gap-8">
                            <div className="col-span-3 border-b border-gray-200 pb-4 mb-4">
                              <h4 className="font-bold text-disruptive-black mb-0">Our Services</h4>
                            </div>
                            
                            {Object.entries(whatWeDoServices).map(([category, services]) => (
                              <div key={category}>
                                <h4 className="font-bold text-disruptive-black mb-4">{category}</h4>
                                <ul className="space-y-2">
                                  {services.map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        href={service.href}
                                        className={`text-sm ${service.highlight ? 'text-disruptive-red font-medium' : 'text-disruptive-gray'} hover:text-disruptive-red transition-colors`}
                                      >
                                        {service.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          
                          {/* Right side: Industries (4 columns) */}
                          <div className="col-span-4 bg-gray-50 p-6 rounded-lg">
                            <div className="border-b border-gray-200 pb-4 mb-6">
                              <h4 className="font-bold text-disruptive-black mb-0">Industries</h4>
                            </div>
                            
                            {Object.entries(industriesServices).map(([category, services]) => (
                              <div key={category} className="mb-6 last:mb-0">
                                <h4 className="font-bold text-disruptive-black mb-3">{category}</h4>
                                <ul className="space-y-2">
                                  {services.map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        href={service.href}
                                        className={`text-sm ${service.highlight ? 'text-disruptive-red font-medium' : 'text-disruptive-gray'} hover:text-disruptive-red transition-colors`}
                                      >
                                        {service.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-100 bg-disruptive-light-gray rounded-lg p-6">
                          <Link
                            href="/about"
                            className="inline-flex items-center text-disruptive-black hover:text-disruptive-red transition-colors font-bold"
                          >
                            LEARN MORE ABOUT ONE TAP MEDIA
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Who We Are Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('whoWeAre')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-disruptive-black hover:text-disruptive-red transition-colors font-medium py-2">
                  <span className="text-lg font-bold tracking-wider">WHO WE ARE</span>
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'whoWeAre' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-screen max-w-3xl bg-white shadow-xl border border-gray-100 rounded-lg"
                    >
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-disruptive-black mb-2">WHO WE ARE</h3>
                          <div className="w-16 h-1 bg-disruptive-red"></div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-8">
                          {Object.entries(whoWeAreItems).map(([category, items]) => (
                            <div key={category}>
                              <h4 className="font-bold text-disruptive-black mb-4 flex items-center">
                                <Users className="w-4 h-4 mr-2 text-disruptive-red" />
                                {category}
                              </h4>
                              <ul className="space-y-2">
                                {items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="text-sm text-disruptive-gray hover:text-disruptive-red transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-100 bg-disruptive-light-gray rounded-lg p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-bold text-disruptive-black mb-2">Ready to Meet Our Team?</h4>
                              <p className="text-sm text-disruptive-gray">Get to know the experts behind your success</p>
                            </div>
                            <Link
                              href="/about#team-section"
                              className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-4 py-2 rounded font-bold text-sm growth-plan-button"
                            >
                              MEET THE TEAM
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Results Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('results')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-disruptive-black hover:text-disruptive-red transition-colors font-medium py-2">
                  <span className="text-lg font-bold tracking-wider">RESULTS</span>
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'results' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-screen max-w-3xl bg-white shadow-xl border border-gray-100 rounded-lg"
                    >
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-disruptive-black mb-2">RESULTS</h3>
                          <div className="w-16 h-1 bg-disruptive-red"></div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-8">
                          {Object.entries(resultsItems).map(([category, items]) => (
                            <div key={category}>
                              <h4 className="font-bold text-disruptive-black mb-4 flex items-center">
                                {category === 'Case Studies' && <Award className="w-4 h-4 mr-2 text-disruptive-red" />}
                                {category === 'Performance' && <Star className="w-4 h-4 mr-2 text-disruptive-red" />}
                                {category === 'Featured Results' && <ArrowRight className="w-4 h-4 mr-2 text-disruptive-red" />}
                                {category}
                              </h4>
                              <ul className="space-y-2">
                                {items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="text-sm text-disruptive-gray hover:text-disruptive-red transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-100 bg-disruptive-light-gray rounded-lg p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-bold text-disruptive-black mb-2">Want Results Like These?</h4>
                              <p className="text-sm text-disruptive-gray">See how we can grow your business</p>
                            </div>
                            <button
                              onClick={() => onOpenTypeform()}
                              className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-4 py-2 rounded font-bold text-sm growth-plan-button"
                            >
                              GET STARTED
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-disruptive-black hover:text-disruptive-red transition-colors font-medium py-2">
                  <span className="text-lg font-bold tracking-wider">RESOURCES</span>
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-screen max-w-3xl bg-white shadow-xl border border-gray-100 rounded-lg"
                    >
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-disruptive-black mb-2">RESOURCES</h3>
                          <div className="w-16 h-1 bg-disruptive-red"></div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-8">
                          {Object.entries(resourcesItems).map(([category, items]) => (
                            <div key={category}>
                              <h4 className="font-bold text-disruptive-black mb-4 flex items-center">
                                <BookOpen className="w-4 h-4 mr-2 text-disruptive-red" />
                                {category}
                              </h4>
                              <ul className="space-y-2">
                                {items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="text-sm text-disruptive-gray hover:text-disruptive-red transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-100 bg-disruptive-light-gray rounded-lg p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-bold text-disruptive-black mb-2">Need Marketing Help?</h4>
                              <p className="text-sm text-disruptive-gray">Access our free resources and tools</p>
                            </div>
                            <Link
                              href="/tools"
                              className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-4 py-2 rounded font-bold text-sm growth-plan-button"
                            >
                              FREE TOOLS
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                aria-label="Let's talk"
                onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'contact' } }))}
                className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-12 py-5 font-bold tracking-wider text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-disruptive-red focus:ring-offset-2"
              >
                LET'S TALK
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                aria-label="Toggle mobile menu"
                onClick={toggleMobileMenu}
                className="text-disruptive-black hover:text-disruptive-red transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Mega Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto', transition: { duration: 0.3 } }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 max-h-screen overflow-y-auto"
            >
              <div className="px-4 py-6 space-y-6">
                {/* What We Do Mobile Mega Menu */}
                <div>
                  <button
                    onClick={() => handleMobileDropdownToggle('whatWeDo')}
                    className="flex items-center justify-between w-full text-left text-disruptive-black font-bold text-lg"
                  >
                    WHAT WE DO
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeMobileDropdown === 'whatWeDo' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeMobileDropdown === 'whatWeDo' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto', transition: { duration: 0.2 } }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 bg-disruptive-light-gray rounded-lg p-4"
                      >
                        <div className="grid grid-cols-1 gap-6">
                          {Object.entries(whatWeDoServices).map(([category, services]) => (
                            <div key={category}>
                              <h4 className="font-bold text-disruptive-black mb-2">{category}</h4>
                              <ul className="space-y-2 pl-4">
                                {services.map((service) => (
                                  <li key={service.name}>
                                    <Link
                                      href={service.href}
                                      className={`text-sm ${service.highlight ? 'text-disruptive-red font-medium' : 'text-disruptive-gray'} hover:text-disruptive-red transition-colors`}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {service.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Industries section for mobile */}
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <h4 className="font-bold text-disruptive-black mb-3">Industries We Serve</h4>
                          <ul className="space-y-2 pl-4">
                            {industriesServices['Industries We Serve'].map((industry) => (
                              <li key={industry.name}>
                                <Link
                                  href={industry.href}
                                  className={`text-sm ${industry.highlight ? 'text-disruptive-red font-medium' : 'text-disruptive-gray'} hover:text-disruptive-red transition-colors`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {industry.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <Link
                            href="/about"
                            className="inline-flex items-center text-disruptive-black hover:text-disruptive-red transition-colors font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            LEARN MORE ABOUT ONE TAP MEDIA
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Who We Are Mobile Menu */}
                <div>
                  <button
                    onClick={() => handleMobileDropdownToggle('whoWeAre')}
                    className="flex items-center justify-between w-full text-left text-disruptive-black font-bold text-lg"
                  >
                    WHO WE ARE
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeMobileDropdown === 'whoWeAre' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeMobileDropdown === 'whoWeAre' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto', transition: { duration: 0.2 } }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 bg-disruptive-light-gray rounded-lg p-4"
                      >
                        <div className="grid grid-cols-1 gap-6">
                          {Object.entries(whoWeAreItems).map(([category, items]) => (
                            <div key={category}>
                              <h4 className="font-bold text-disruptive-black mb-2 flex items-center">
                                <Users className="w-4 h-4 mr-2 text-disruptive-red" />
                                {category}
                              </h4>
                              <ul className="space-y-2 pl-4">
                                {items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="text-sm text-disruptive-gray hover:text-disruptive-red transition-colors"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <div className="flex flex-col space-y-3">
                            <div>
                              <h4 className="font-bold text-disruptive-black mb-2">Ready to Meet Our Team?</h4>
                              <p className="text-sm text-disruptive-gray">Get to know the experts behind your success</p>
                            </div>
                            <Link
                              href="/about#team-section"
                              className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-4 py-2 rounded font-bold text-sm text-center growth-plan-button"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              MEET THE TEAM
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Results Mobile Menu */}
                <div>
                  <button
                    onClick={() => handleMobileDropdownToggle('results')}
                    className="flex items-center justify-between w-full text-left text-disruptive-black font-bold text-lg"
                  >
                    RESULTS
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeMobileDropdown === 'results' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeMobileDropdown === 'results' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto', transition: { duration: 0.2 } }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 bg-disruptive-light-gray rounded-lg p-4"
                      >
                        <div className="grid grid-cols-1 gap-6">
                          {Object.entries(resultsItems).map(([category, items]) => (
                            <div key={category}>
                              <h4 className="font-bold text-disruptive-black mb-2 flex items-center">
                                {category === 'Case Studies' && <Award className="w-4 h-4 mr-2 text-disruptive-red" />}
                                {category === 'Performance' && <Star className="w-4 h-4 mr-2 text-disruptive-red" />}
                                {category === 'Featured Results' && <ArrowRight className="w-4 h-4 mr-2 text-disruptive-red" />}
                                {category}
                              </h4>
                              <ul className="space-y-2 pl-4">
                                {items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="text-sm text-disruptive-gray hover:text-disruptive-red transition-colors"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <div className="flex flex-col space-y-3">
                            <div>
                              <h4 className="font-bold text-disruptive-black mb-2">Want Results Like These?</h4>
                              <p className="text-sm text-disruptive-gray">See how we can grow your business</p>
                            </div>
                            <button
                              onClick={() => {
                                onOpenTypeform();
                                setIsMobileMenuOpen(false);
                              }}
                              className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-4 py-2 rounded font-bold text-sm growth-plan-button"
                            >
                              GET STARTED
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Resources Mobile Menu */}
                <div>
                  <button
                    onClick={() => handleMobileDropdownToggle('resources')}
                    className="flex items-center justify-between w-full text-left text-disruptive-black font-bold text-lg"
                  >
                    RESOURCES
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeMobileDropdown === 'resources' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeMobileDropdown === 'resources' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto', transition: { duration: 0.2 } }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 bg-disruptive-light-gray rounded-lg p-4"
                      >
                        <div className="grid grid-cols-1 gap-6">
                          {Object.entries(resourcesItems).map(([category, items]) => (
                            <div key={category}>
                              <h4 className="font-bold text-disruptive-black mb-2 flex items-center">
                                <BookOpen className="w-4 h-4 mr-2 text-disruptive-red" />
                                {category}
                              </h4>
                              <ul className="space-y-2 pl-4">
                                {items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="text-sm text-disruptive-gray hover:text-disruptive-red transition-colors"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <div className="flex flex-col space-y-3">
                            <div>
                              <h4 className="font-bold text-disruptive-black mb-2">Need Marketing Help?</h4>
                              <p className="text-sm text-disruptive-gray">Access our free resources and tools</p>
                            </div>
                            <Link
                              href="/tools"
                              className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-4 py-2 rounded font-bold text-sm text-center growth-plan-button"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              FREE TOOLS
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile CTA Button */}
                <div className="pt-4 border-t border-gray-200">
                  <Button
                    aria-label="Let's talk"
                    onClick={() => {
                      document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'contact' } }));
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-disruptive-red hover:bg-disruptive-dark-red text-white px-12 py-5 font-bold tracking-wider text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-disruptive-red focus:ring-offset-2"
                  >
                    LET'S TALK
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}