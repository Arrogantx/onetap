'use client';

import { motion } from 'framer-motion';
import { Linkedin, Youtube, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  services: [
    { name: 'Paid Search', href: '/services/paid-search' },
    { name: 'SEO', href: '/services/seo' },
    { name: 'Paid Social', href: '/services/paid-social' },
    { name: 'Amazon', href: '/services/amazon' },
    { name: 'Conversion Optimization', href: '/services/conversion-optimization' },
    { name: 'Email Marketing', href: '/services/email-marketing' },
  ],
  aboutUs: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Values', href: '/about' },
    { name: 'Our Mission', href: '/about' },
    { name: 'Meet Our Team', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  results: [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Client Reviews', href: '/reviews' },
  ],
  resources: [
    { name: 'Our Blog', href: '/blog' },
    { name: 'Free Tools', href: '/tools' },
    { name: 'Contact Us', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-disruptive-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Services column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6 text-white">SERVICES</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-disruptive-red transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* About Us column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6 text-white">ABOUT US</h3>
              <ul className="space-y-3">
                {footerLinks.aboutUs.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-disruptive-red transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Results column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6 text-white">RESULTS</h3>
              <ul className="space-y-3">
                {footerLinks.results.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-disruptive-red transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6 text-white">RESOURCES</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-disruptive-red transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="mb-6">
                  <h3 className="text-4xl font-bold mb-2">
                    ONE<span className="text-disruptive-red">TAP</span> MEDIA
                  </h3>
                  <div className="text-xl font-bold mb-4">(267) 817-7323</div>
                  <a href="tel:+12678177323" className="inline-block bg-disruptive-red hover:bg-red-600 text-white px-6 py-3 rounded font-bold tracking-wide transition-colors growth-plan-button">
                    GET STARTED
                  </a>
                </div>

                {/* Social links */}
                <div className="flex justify-center space-x-4">
                  <Link 
                    href="https://facebook.com/onetapmedia" 
                    className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-disruptive-red transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="https://instagram.com/onetapmedia" 
                    className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-disruptive-red transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="https://linkedin.com/company/onetapmedia" 
                    className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-disruptive-red transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certifications - Using text instead of images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-700"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            <div className="flex items-center justify-center h-20">
              <div className="w-full h-full flex items-center justify-center p-2">
                <Image
                  src="/images/Google-Premier-Partner-Logo-White-1.webp"
                  width={120}
                  height={60}
                  alt="Google Premier Partner"
                  className="max-w-full max-h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex items-center justify-center h-20">
              <div className="w-full h-full flex items-center justify-center p-2">
                <Image
                  src="/images/amazon-partner-badge-2.webp"
                  width={120}
                  height={60}
                  alt="Amazon Partner"
                  className="max-w-full max-h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex items-center justify-center h-20">
              <div className="w-full h-full flex items-center justify-center p-2">
                <Image
                  src="/images/Hubspot-Certified-Partner-Logo.webp"
                  width={120}
                  height={60}
                  alt="HubSpot Certified Partner"
                  className="max-w-full max-h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex items-center justify-center h-20">
              <div className="w-full h-full flex items-center justify-center p-2">
                <Image
                  src="/images/Bing-Ads-Accredited-Professional-Logo-1.webp"
                  width={120}
                  height={60}
                  alt="Bing Ads Accredited Professional"
                  className="max-w-full max-h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex items-center justify-center h-20">
              <div className="w-full h-full flex items-center justify-center p-2">
                <Image
                  src="/images/meta-partner-badge-3.webp"
                  width={120}
                  height={60}
                  alt="Meta Business Partner"
                  className="max-w-full max-h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex items-center justify-center h-20">
              <div className="w-full h-full flex items-center justify-center p-2">
                <Image
                  src="/images/Klaviyo-Master-Elite-Logo-1.webp"
                  width={120}
                  height={60}
                  alt="Klaviyo Master Elite"
                  className="max-w-full max-h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
            <div>
              © 2025 One Tap Media. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}