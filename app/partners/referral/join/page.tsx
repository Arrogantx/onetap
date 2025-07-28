'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { LeaderboardDisplay } from '@/components/leaderboard-display';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Trophy, Coins, Users, Target, Gift } from 'lucide-react';
import { ReferralCodeGenerator } from '@/components/referral-code-generator';

export default function JoinReferralProgramPage() {
  const [referralCode, setReferralCode] = useState('');

  const handleCodeGenerated = (code: string) => {
    setReferralCode(code);
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
              Join OneTap Hustle Hub
              <span className="block text-red-200">Get Your Referral Code</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Start earning points and cash by referring businesses to OneTap Media. 
              It takes just a minute to get your unique referral code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Referral Code Generator */}
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
                Get Your Unique Referral Code
              </h2>
              <div className="w-16 h-1 bg-disruptive-red mb-8"></div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your referral code is your key to earning in the OneTap Hustle Hub. 
                Share it with businesses that could benefit from OneTap Media's marketing services, 
                and you'll earn points and cash for every step they take.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-disruptive-red/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Trophy className="w-5 h-5 text-disruptive-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-disruptive-black mb-1">Earn Points for Every Action</h3>
                    <p className="text-gray-600 text-sm">
                      Get points when your referrals submit forms, book calls, and become clients.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-disruptive-red/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Coins className="w-5 h-5 text-disruptive-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-disruptive-black mb-1">Convert Points to Cash</h3>
                    <p className="text-gray-600 text-sm">
                      1,000 points = $10. Cash out anytime or save up for bigger rewards.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-disruptive-red/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Gift className="w-5 h-5 text-disruptive-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-disruptive-black mb-1">Win Monthly Prizes</h3>
                    <p className="text-gray-600 text-sm">
                      Top performers on our leaderboard win cash prizes up to $250 every month.
                    </p>
                  </div>
                </div>
              </div>
              
              {referralCode && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <h3 className="font-bold text-green-800 mb-2">Success! Your referral code is ready</h3>
                  <p className="text-green-700 mb-4">
                    Your unique code is: <span className="font-bold">{referralCode}</span>
                  </p>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.location.href = '/partners/referral/dashboard'}
                  >
                    Go to Your Dashboard
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ReferralCodeGenerator onCodeGenerated={handleCodeGenerated} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-disruptive-black mb-6">
              Current Leaderboard
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See who's leading the pack this month. Will your name be on here soon?
            </p>
          </motion.div>

          <LeaderboardDisplay />
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
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Get your referral code now and start earning points and cash for every business you refer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
                onClick={() => document.getElementById('referral-code-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                GET YOUR REFERRAL CODE
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
              >
                <Link href="/partners/referral">
                  LEARN MORE
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}