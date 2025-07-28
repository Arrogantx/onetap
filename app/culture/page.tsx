'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Heart, Users, Coffee, Lightbulb, Award, Star } from 'lucide-react';

export default function CulturePage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Culture</h1>
            <p className="text-xl text-red-100">
              At One Tap Media, our culture is built on innovation, collaboration, and a relentless focus on results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-disruptive-red mr-3" />
                    <h3 className="text-xl font-bold">Collaboration</h3>
                  </div>
                  <p className="text-gray-700">
                    We believe the best results come from diverse perspectives and collaborative problem-solving. Our team works together seamlessly across disciplines to deliver exceptional results.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-6 h-6 text-disruptive-red mr-3" />
                    <h3 className="text-xl font-bold">Innovation</h3>
                  </div>
                  <p className="text-gray-700">
                    We stay at the forefront of digital marketing by constantly testing new approaches, embracing emerging technologies, and challenging conventional thinking.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-disruptive-red mr-3" />
                    <h3 className="text-xl font-bold">Excellence</h3>
                  </div>
                  <p className="text-gray-700">
                    We hold ourselves to the highest standards in everything we do, from campaign strategy to client communication. Good enough is never enough.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-disruptive-red mr-3" />
                    <h3 className="text-xl font-bold">Results-Driven</h3>
                  </div>
                  <p className="text-gray-700">
                    We measure our success by the results we deliver for our clients. Every strategy, campaign, and decision is focused on driving measurable business growth.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">Life at One Tap Media</h2>
              <div className="space-y-6">
                <p className="text-gray-700">
                  Our culture is built around creating an environment where talented people can do their best work. We believe in work-life balance, continuous learning, and celebrating success together.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Coffee className="w-12 h-12 text-disruptive-red mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Work-Life Balance</h3>
                    <p className="text-sm text-gray-600">Flexible schedules, remote work options, and unlimited PTO</p>
                  </div>
                  <div className="text-center">
                    <Lightbulb className="w-12 h-12 text-disruptive-red mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Continuous Learning</h3>
                    <p className="text-sm text-gray-600">Learning budget, weekly training, and industry conferences</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 text-disruptive-red mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Team Building</h3>
                    <p className="text-sm text-gray-600">Regular team events, retreats, and celebrations</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">Join Our Team</h2>
              <p className="text-gray-700 mb-6">
                We're always looking for talented, passionate people to join our team. Check out our current openings and become part of our story.
              </p>
              <div className="text-center">
                <a href="/careers" className="inline-block bg-disruptive-red hover:bg-disruptive-dark-red text-white px-8 py-3 rounded-lg font-bold">
                  View Open Positions
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