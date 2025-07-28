'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, FileText, Mail } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation onOpenTypeform={() => {}} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-gray-200" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-200 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-gray-300">Last updated: January 1, 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-12">
              {/* Information We Collect */}
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fill out contact forms or request information</li>
                    <li>Subscribe to our newsletter or marketing communications</li>
                    <li>Schedule consultations or meetings</li>
                    <li>Use our website or services</li>
                    <li>Communicate with us via email, phone, or chat</li>
                  </ul>
                  <p>This information may include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name, email address, phone number</li>
                    <li>Company name and job title</li>
                    <li>Marketing goals and budget information</li>
                    <li>Website usage data and analytics</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Analyze website usage and optimize user experience</li>
                    <li>Comply with legal obligations and protect our rights</li>
                    <li>Develop new services and features</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Information Sharing</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To trusted service providers who assist in operating our website and services</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                  <p>All third-party service providers are contractually obligated to keep your information confidential.</p>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <div className="flex items-center mb-6">
                  <Lock className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Data Security</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and databases</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal information</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Your Rights</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request data portability</li>
                    <li>Object to processing of your information</li>
                  </ul>
                  <p>To exercise these rights, please contact us using the information provided below.</p>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Cookies and Tracking</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve our services and user experience</li>
                  </ul>
                  <p>You can control cookies through your browser settings, but disabling cookies may affect website functionality.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <div className="flex items-center mb-6">
                  <Mail className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Contact Us</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p><strong>One Tap Media</strong></p>
                    <p>Email: privacy@onetapmedia.com</p>
                    <p>Phone: (267) 817-7323</p>
                    <p>Address: 123 Marketing Ave, Suite 500, New York, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div>
                <div className="space-y-4 text-gray-700">
                  <h2 className="text-3xl font-bold text-disruptive-black">Policy Updates</h2>
                  <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
                  <p>We encourage you to review this Privacy Policy periodically for any changes.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}