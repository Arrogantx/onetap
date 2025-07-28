'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function SitemapPage() {
  return (
    <main className="min-h-screen">
      <Navigation onOpenTypeform={() => {}} />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-disruptive-black mb-4">Site Map</h1>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete overview of all pages available on the One Tap Media website.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Main Pages */}
            <div>
              <h2 className="text-2xl font-bold text-disruptive-black mb-4 border-b-2 border-disruptive-red pb-2">Main Pages</h2>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-700 hover:text-disruptive-red transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-700 hover:text-disruptive-red transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-700 hover:text-disruptive-red transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold text-disruptive-black mb-4 border-b-2 border-disruptive-red pb-2">Services</h2>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-700 hover:text-disruptive-red transition-colors">All Services</Link></li>
                <li><Link href="/services/paid-search" className="text-gray-700 hover:text-disruptive-red transition-colors">Paid Search</Link></li>
                <li><Link href="/services/paid-social" className="text-gray-700 hover:text-disruptive-red transition-colors">Paid Social</Link></li>
                <li><Link href="/services/seo" className="text-gray-700 hover:text-disruptive-red transition-colors">SEO</Link></li>
                <li><Link href="/services/conversion-optimization" className="text-gray-700 hover:text-disruptive-red transition-colors">Conversion Optimization</Link></li>
                <li><Link href="/services/amazon" className="text-gray-700 hover:text-disruptive-red transition-colors">Amazon</Link></li>
                <li><Link href="/services/email-marketing" className="text-gray-700 hover:text-disruptive-red transition-colors">Email Marketing</Link></li>
                <li><Link href="/services/creative" className="text-gray-700 hover:text-disruptive-red transition-colors">Creative & Design</Link></li>
                <li><Link href="/services/analytics" className="text-gray-700 hover:text-disruptive-red transition-colors">Data Analytics</Link></li>
                <li><Link href="/services/web-development" className="text-gray-700 hover:text-disruptive-red transition-colors">Web Development</Link></li>
                <li><Link href="/services/ai" className="text-gray-700 hover:text-disruptive-red transition-colors">AI Solutions</Link></li>
               <li><Link href="/industries/furniture" className="text-gray-700 hover:text-disruptive-red transition-colors">Furniture Retailers</Link></li>
              </ul>
            </div>
            
            {/* Case Studies & Results */}
            <div>
              <h2 className="text-2xl font-bold text-disruptive-black mb-4 border-b-2 border-disruptive-red pb-2">Case Studies & Results</h2>
              <ul className="space-y-2">
                <li><Link href="/case-studies" className="text-gray-700 hover:text-disruptive-red transition-colors">All Case Studies</Link></li>
                <li><Link href="/case-studies/leads" className="text-gray-700 hover:text-disruptive-red transition-colors">Lead Growth</Link></li>
                <li><Link href="/case-studies/revenue" className="text-gray-700 hover:text-disruptive-red transition-colors">Revenue Generated</Link></li>
                <li><Link href="/case-studies/roi-increase" className="text-gray-700 hover:text-disruptive-red transition-colors">ROI Increase</Link></li>
                <li><Link href="/results" className="text-gray-700 hover:text-disruptive-red transition-colors">Results</Link></li>
                <li><Link href="/reviews" className="text-gray-700 hover:text-disruptive-red transition-colors">Reviews</Link></li>
                <li><Link href="/testimonials" className="text-gray-700 hover:text-disruptive-red transition-colors">Testimonials</Link></li>
                <li><Link href="/awards" className="text-gray-700 hover:text-disruptive-red transition-colors">Awards</Link></li>
              </ul>
            </div>
            
            {/* About */}
            <div>
              <h2 className="text-2xl font-bold text-disruptive-black mb-4 border-b-2 border-disruptive-red pb-2">About</h2>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-700 hover:text-disruptive-red transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-700 hover:text-disruptive-red transition-colors">Careers</Link></li>
                <li><Link href="/culture" className="text-gray-700 hover:text-disruptive-red transition-colors">Culture</Link></li>
                <li><Link href="/giving-back" className="text-gray-700 hover:text-disruptive-red transition-colors">Giving Back</Link></li>
                <li><Link href="/certifications" className="text-gray-700 hover:text-disruptive-red transition-colors">Certifications</Link></li>
                <li><Link href="/certifications/google" className="text-gray-700 hover:text-disruptive-red transition-colors">Google Certification</Link></li>
                <li><Link href="/certifications/meta" className="text-gray-700 hover:text-disruptive-red transition-colors">Meta Certification</Link></li>
                <li><Link href="/certifications/hubspot" className="text-gray-700 hover:text-disruptive-red transition-colors">HubSpot Certification</Link></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h2 className="text-2xl font-bold text-disruptive-black mb-4 border-b-2 border-disruptive-red pb-2">Resources</h2>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-700 hover:text-disruptive-red transition-colors">Blog</Link></li>
                <li><Link href="/guides" className="text-gray-700 hover:text-disruptive-red transition-colors">Guides</Link></li>
                <li><Link href="/webinars" className="text-gray-700 hover:text-disruptive-red transition-colors">Webinars</Link></li>
                <li><Link href="/training" className="text-gray-700 hover:text-disruptive-red transition-colors">Training</Link></li>
                <li><Link href="/tools" className="text-gray-700 hover:text-disruptive-red transition-colors">Tools</Link></li>
                <li><Link href="/reports" className="text-gray-700 hover:text-disruptive-red transition-colors">Reports</Link></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h2 className="text-2xl font-bold text-disruptive-black mb-4 border-b-2 border-disruptive-red pb-2">Support</h2>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-700 hover:text-disruptive-red transition-colors">Contact</Link></li>
                <li><Link href="/help" className="text-gray-700 hover:text-disruptive-red transition-colors">Help Center</Link></li>
                <li><Link href="/faq" className="text-gray-700 hover:text-disruptive-red transition-colors">FAQ</Link></li>
                <li><Link href="/partners" className="text-gray-700 hover:text-disruptive-red transition-colors">Partners</Link></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h2 className="text-2xl font-bold text-disruptive-black mb-4 border-b-2 border-disruptive-red pb-2">Legal</h2>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-700 hover:text-disruptive-red transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-700 hover:text-disruptive-red transition-colors">Terms of Service</Link></li>
                <li><Link href="/press" className="text-gray-700 hover:text-disruptive-red transition-colors">Press</Link></li>
              </ul>
            </div>
            
            {/* Sitemap */}
            <div>
              <h2 className="text-2xl font-bold text-disruptive-black mb-4 border-b-2 border-disruptive-red pb-2">Sitemap</h2>
              <ul className="space-y-2">
                <li><Link href="/sitemap" className="text-gray-700 hover:text-disruptive-red transition-colors">HTML Sitemap</Link></li>
                <li><a href="/sitemap.xml" className="text-gray-700 hover:text-disruptive-red transition-colors" target="_blank" rel="noopener noreferrer">XML Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}