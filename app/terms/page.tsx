'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Mail } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Scale className="w-16 h-16 mx-auto mb-6 text-gray-200" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-200 mb-4">
              These terms govern your use of our website and services. Please read them carefully.
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
              {/* Acceptance of Terms */}
              <div>
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>By accessing and using the One Tap Media website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                  <p>If you do not agree to abide by the above, please do not use this service.</p>
                </div>
              </div>

              {/* Services Description */}
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Services Description</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>One Tap Media provides digital marketing services including but not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Pay-per-click (PPC) advertising management</li>
                    <li>Search engine optimization (SEO)</li>
                    <li>Social media advertising</li>
                    <li>Conversion rate optimization</li>
                    <li>Email marketing</li>
                    <li>Analytics and reporting</li>
                    <li>Creative design and development</li>
                  </ul>
                  <p>Specific services will be outlined in individual service agreements or statements of work.</p>
                </div>
              </div>

              {/* User Responsibilities */}
              <div>
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">User Responsibilities</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>As a user of our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Use our services in compliance with all applicable laws</li>
                    <li>Not engage in any fraudulent or illegal activities</li>
                    <li>Respect intellectual property rights</li>
                    <li>Provide timely feedback and approvals when requested</li>
                  </ul>
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Payment Terms</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>Payment terms will be specified in individual service agreements. Generally:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Invoices are due within 30 days of receipt</li>
                    <li>Late payments may incur additional fees</li>
                    <li>Services may be suspended for non-payment</li>
                    <li>Refunds are subject to our refund policy</li>
                    <li>All fees are exclusive of applicable taxes</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Intellectual Property</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>Intellectual property rights are handled as follows:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>One Tap Media retains rights to our proprietary methods and processes</li>
                    <li>Clients retain rights to their brand assets and content</li>
                    <li>Work product created for clients becomes client property upon payment</li>
                    <li>We may use anonymized case studies for marketing purposes</li>
                    <li>Third-party tools and platforms retain their respective rights</li>
                  </ul>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>To the fullest extent permitted by law:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Our liability is limited to the amount paid for services</li>
                    <li>We are not liable for indirect, incidental, or consequential damages</li>
                    <li>We do not guarantee specific results from marketing campaigns</li>
                    <li>Third-party platform changes may affect campaign performance</li>
                    <li>Force majeure events are excluded from liability</li>
                  </ul>
                </div>
              </div>

              {/* Termination */}
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Termination</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>Either party may terminate services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With 30 days written notice for ongoing services</li>
                    <li>Immediately for breach of contract</li>
                    <li>Immediately for non-payment</li>
                    <li>Upon completion of project-based work</li>
                  </ul>
                  <p>Upon termination, all outstanding invoices become immediately due.</p>
                </div>
              </div>

              {/* Privacy and Confidentiality */}
              <div>
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Privacy and Confidentiality</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We are committed to protecting your privacy and confidential information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Client information is kept strictly confidential</li>
                    <li>We comply with applicable privacy laws and regulations</li>
                    <li>Data is secured using industry-standard practices</li>
                    <li>Non-disclosure agreements may be executed for sensitive projects</li>
                  </ul>
                  <p>Please refer to our Privacy Policy for detailed information about data handling.</p>
                </div>
              </div>

              {/* Governing Law */}
              <div>
                <div className="flex items-center mb-6">
                  <Scale className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Governing Law</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>These terms are governed by the laws of the State of New York, without regard to conflict of law principles.</p>
                  <p>Any disputes will be resolved through binding arbitration in New York, NY.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <div className="flex items-center mb-6">
                  <Mail className="w-8 h-8 text-disruptive-red mr-4" />
                  <h2 className="text-3xl font-bold text-disruptive-black">Contact Information</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>If you have questions about these Terms of Service, please contact us:</p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p><strong>One Tap Media</strong></p>
                    <p>Email: legal@onetapmedia.com</p>
                    <p>Phone: (267) 817-7323</p>
                    <p>Address: 123 Marketing Ave, Suite 500, New York, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Changes to Terms */}
              <div>
                <div className="space-y-4 text-gray-700">
                  <h2 className="text-3xl font-bold text-disruptive-black">Changes to Terms</h2>
                  <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.</p>
                  <p>Continued use of our services after changes constitutes acceptance of the new terms.</p>
                  <p>We will notify clients of material changes via email when possible.</p>
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