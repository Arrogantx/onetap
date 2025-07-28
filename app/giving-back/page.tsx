'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, Leaf, School, Home } from 'lucide-react';

export default function GivingBackPage() {
  return (
    <main className="min-h-screen">
      <Navigation onOpenTypeform={() => {}} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-disruptive-red via-red-600 to-disruptive-dark-red text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Giving Back</h1>
            <p className="text-xl text-red-100">
              We believe in using our skills and resources to make a positive impact in our communities and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">Our Commitment</h2>
              <p className="text-gray-700 mb-6">
                At One Tap Media, we're committed to giving back to our communities and supporting causes that align with our values. We believe that businesses have a responsibility to contribute to positive social change and environmental sustainability.
              </p>
              <p className="text-gray-700">
                Each year, we dedicate a portion of our profits, time, and expertise to support nonprofit organizations and community initiatives that are making a difference.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">Our Initiatives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-disruptive-red mr-3" />
                    <h3 className="text-xl font-bold">Pro Bono Services</h3>
                  </div>
                  <p className="text-gray-700">
                    We provide free or discounted digital marketing services to selected nonprofit organizations each quarter, helping them amplify their message and reach more people.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-disruptive-red mr-3" />
                    <h3 className="text-xl font-bold">Volunteer Time</h3>
                  </div>
                  <p className="text-gray-700">
                    Our team members receive paid volunteer days each year to support causes they care about, from local community service to skills-based volunteering.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Leaf className="w-6 h-6 text-disruptive-red mr-3" />
                    <h3 className="text-xl font-bold">Environmental Initiatives</h3>
                  </div>
                  <p className="text-gray-700">
                    We're committed to reducing our environmental footprint through sustainable business practices and supporting environmental conservation projects.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <School className="w-6 h-6 text-disruptive-red mr-3" />
                    <h3 className="text-xl font-bold">Education & Mentorship</h3>
                  </div>
                  <p className="text-gray-700">
                    We provide mentorship, internships, and educational resources to help develop the next generation of digital marketing professionals.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">Organizations We Support</h2>
              <div className="space-y-6">
                <p className="text-gray-700">
                  We're proud to partner with these organizations that are making a positive impact:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <Home className="w-12 h-12 text-disruptive-red mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Habitat for Humanity</h3>
                    <p className="text-sm text-gray-600">Building homes and communities</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <School className="w-12 h-12 text-disruptive-red mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Code.org</h3>
                    <p className="text-sm text-gray-600">Expanding access to computer science</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <Leaf className="w-12 h-12 text-disruptive-red mx-auto mb-4" />
                    <h3 className="font-bold mb-2">The Nature Conservancy</h3>
                    <p className="text-sm text-gray-600">Protecting our natural world</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">Get Involved</h2>
              <p className="text-gray-700 mb-6">
                If you're a nonprofit organization looking for digital marketing support, or if you'd like to collaborate on a community initiative, we'd love to hear from you.
              </p>
              <div className="text-center">
                <a href="/contact" className="inline-block bg-disruptive-red hover:bg-disruptive-dark-red text-white px-8 py-3 rounded-lg font-bold">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}