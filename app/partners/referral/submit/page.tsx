'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Target } from 'lucide-react';
import { ReferralForm } from '@/components/referral-form';


export default function SubmitReferralPage() {
  const [referralCode, setReferralCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  const verifyReferralCode = () => {
    if (!referralCode) {
      setError('Please enter a referral code');
      return;
    }

    // In a real implementation, you would verify this against a database
    // For now, we'll just accept any code
    setIsVerified(true);
    setError('');
  };

  const handleSubmitSuccess = () => {
    // Reset the form after successful submission
    setReferralCode('');
    setIsVerified(false);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
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
              Submit a Referral
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Help a business grow with OneTap Media's marketing expertise and earn rewards for your referral.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-disruptive-black mb-6">
                Submit a Business Referral
              </h2>
              <div className="w-16 h-1 bg-disruptive-red mb-8"></div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Know a business that could benefit from OneTap Media's marketing expertise? 
                Refer them to us and earn points and cash rewards when they become a client.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-disruptive-red/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-disruptive-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-disruptive-black mb-1">Earn 100 Points Immediately</h3>
                    <p className="text-gray-600 text-sm">
                      Get 100 points just for submitting a qualified business referral.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-disruptive-red/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-disruptive-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-disruptive-black mb-1">Earn 300 More Points</h3>
                    <p className="text-gray-600 text-sm">
                      When your referral books a call with our team, you'll earn an additional 300 points.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-disruptive-red/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-disruptive-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-disruptive-black mb-1">Earn 1,000 Points + Cash</h3>
                    <p className="text-gray-600 text-sm">
                      When your referral becomes a client, you'll earn 1,000 points plus cash rewards based on your tier level.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-disruptive-black mb-4">Don't have a referral code yet?</h3>
                <p className="text-gray-600 mb-4">
                  You'll need a unique referral code to submit referrals and earn rewards.
                </p>
                <Button asChild className="bg-disruptive-red hover:bg-disruptive-dark-red text-white">
                  <Link href="/partners/referral/join">
                    Get Your Referral Code
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {!isVerified ? (
                <Card className="w-full max-w-md mx-auto">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-disruptive-black mb-4">Enter Your Referral Code</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Referral Code
                        </label>
                        <input
                          type="text"
                          id="referralCode"
                          value={referralCode}
                          onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-disruptive-red"
                          placeholder="Enter your code (e.g., AB123456)"
                        />
                      </div>
                    </div>
                    
                    {error && (
                      <div className="text-red-500 text-sm mb-4">
                        {error}
                      </div>
                    )}
                    
                    <Button
                      onClick={verifyReferralCode}
                      className="w-full bg-disruptive-red hover:bg-disruptive-dark-red text-white"
                    >
                      Continue
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <ReferralForm referralCode={referralCode} onSubmitSuccess={handleSubmitSuccess} />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}