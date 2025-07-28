'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TypeformModal } from '@/components/typeform-modal';
import { CalendlyPopup } from '@/components/calendly-popup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageShareSection } from '@/components/page-share-section';
import { ArrowRight, CheckCircle, Trophy, Coins, Users, Target, Zap, DollarSign, Award, Star, Gift } from 'lucide-react';
import Link from 'next/link';


const tiers = [
  {
    name: 'Bronze',
    pointsRequired: 0,
    benefits: [
      'Earn $100 per closed client',
      'Access to referral resources',
      'Basic training materials',
      'Personal referral code'
    ],
    color: 'from-amber-700 to-amber-900'
  },
  {
    name: 'Silver',
    pointsRequired: 1000,
    benefits: [
      'Earn $150 per closed client',
      'Priority support',
      'Advanced training materials',
      'Monthly strategy calls'
    ],
    color: 'from-gray-400 to-gray-600'
  },
  {
    name: 'Gold',
    pointsRequired: 3000,
    benefits: [
      'Earn $200 per closed client',
      'VIP support',
      'Exclusive resources',
      'Quarterly bonus opportunities',
      'Co-marketing opportunities'
    ],
    color: 'from-yellow-500 to-yellow-700'
  },
  {
    name: 'Platinum',
    pointsRequired: 10000,
    benefits: [
      'Earn $250 per closed client',
      'White-label options',
      'Executive strategy sessions',
      'Revenue sharing opportunities',
      'Early access to new features',
      'Custom marketing materials'
    ],
    color: 'from-blue-500 to-blue-700'
  }
];

const pointsSystem = [
  { action: 'Referral form submitted with your code', points: 100 },
  { action: 'Referred lead books a call', points: 300 },
  { action: 'Lead closes (becomes client)', points: 1000 },
  { action: 'Sharing via social or CTA button', points: 50 },
  { action: 'Completing training steps', points: 150 },
  { action: 'Reaching milestones (e.g., 3 referrals)', points: 500 }
];

const leaderboard = [
  { rank: 1, username: '@hustler_amy', points: 2500, prize: '$250' },
  { rank: 2, username: '@growthguru', points: 2200, prize: '$150' },
  { rank: 3, username: '@adsninja', points: 1950, prize: '$100' },
  { rank: 4, username: '@marketingpro', points: 1800, prize: '$25' },
  { rank: 5, username: '@leadgenmaster', points: 1650, prize: '$25' },
  { rank: 6, username: '@digitalwizard', points: 1500, prize: '$25' },
  { rank: 7, username: '@conversionking', points: 1350, prize: '$25' },
  { rank: 8, username: '@ppcqueen', points: 1200, prize: '$25' },
  { rank: 9, username: '@seoexpert', points: 1050, prize: '$25' },
  { rank: 10, username: '@socialstrategy', points: 900, prize: '$25' }
];

export default function ReferralProgramPage() {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openTypeform = () => setIsTypeformOpen(true);
  const closeTypeform = () => setIsTypeformOpen(false);
  
  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

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
              OneTap Hustle Hub
              <span className="block text-red-200">Earn While You Refer</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join our referral program and earn points, cash, and exclusive perks by connecting businesses 
              with OneTap Media's marketing expertise. No experience needed — just hustle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Coins className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">1,000 pts</div>
                <div className="text-red-100">= $10 Cash</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Trophy className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">$250</div>
                <div className="text-red-100">Monthly Top Prize</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Users className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-red-100">Free to Join</div>
              </div>
            </div>

            <div className="mt-12">
              <Button
                onClick={openTypeform}
                size="lg"
                className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-bold tracking-wide"
              >
                GET YOUR REFERRAL CODE
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
              How It Works
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earn points and cash by helping businesses discover OneTap Media's marketing services.
              It's simple, rewarding, and completely free to join.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Join', 
                description: 'Sign up for free and get your unique referral code.',
                icon: Users
              },
              { 
                step: '02', 
                title: 'Refer', 
                description: 'Share your code with businesses that need marketing help.',
                icon: Target
              },
              { 
                step: '03', 
                title: 'Earn', 
                description: 'Collect points as your referrals engage with OneTap Media.',
                icon: Coins
              },
              { 
                step: '04', 
                title: 'Cash Out', 
                description: 'Convert your points to cash or choose from exclusive rewards.',
                icon: DollarSign
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-disruptive-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Points System */}
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
              Points System
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earn points for every action. The more engaged your referrals are, the more you earn.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-disruptive-red text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Action</th>
                    <th className="px-6 py-4 text-right">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pointsSystem.map((item, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-6 py-4 text-gray-700">{item.action}</td>
                      <td className="px-6 py-4 text-right font-bold text-disruptive-red">+{item.points}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <span className="font-bold">1,000 points = $10</span> — Cash out anytime or save up for bigger rewards!
            </p>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
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
              Membership Tiers
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Level up your membership by earning points and unlock exclusive benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-disruptive-red/30 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <div className={`bg-gradient-to-r ${tier.color} p-6 text-white`}>
                    <h3 className="text-2xl font-bold mb-2">{tier.name} Tier</h3>
                    <p className="text-sm opacity-90">{tier.pointsRequired.toLocaleString()} points to unlock</p>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {tier.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-disruptive-red mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
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
              Monthly Leaderboard
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Top performers earn cash prizes every month. Will you make it to the top?
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-disruptive-red text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Rank</th>
                    <th className="px-6 py-4 text-left">Username</th>
                    <th className="px-6 py-4 text-right">Points</th>
                    <th className="px-6 py-4 text-right">Prize</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leaderboard.map((user, index) => (
                    <motion.tr 
                      key={user.username}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-6 py-4">
                        {user.rank <= 3 ? (
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                              user.rank === 1 ? 'bg-yellow-500' : 
                              user.rank === 2 ? 'bg-gray-400' : 
                              'bg-amber-700'
                            }`}>
                              {user.rank}
                            </div>
                          </div>
                        ) : (
                          <div className="text-gray-700 font-medium">{user.rank}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-700 font-medium">{user.username}</td>
                      <td className="px-6 py-4 text-right font-bold text-disruptive-black">{user.points.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right font-bold text-green-600">{user.prize}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Leaderboard resets on the 1st of each month. All prizes are paid out by the 5th.
            </p>
          </div>
        </div>
      </section>

      {/* Training Resources */}
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
              Training Resources
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to succeed, even if you're new to marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Finding Leads',
                description: 'Learn how to identify businesses that need marketing help and would benefit from OneTap Media\'s services.',
                icon: Target
              },
              {
                title: 'Outreach Scripts',
                description: 'Ready-to-use templates for reaching out to potential clients via email, DM, or in person.',
                icon: Users
              },
              {
                title: 'Closing Techniques',
                description: 'Simple strategies to help businesses understand the value of working with OneTap Media.',
                icon: Zap
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <resource.icon className="w-12 h-12 text-disruptive-red mb-6" />
                <h3 className="text-xl font-bold text-disruptive-black mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Button className="bg-disruptive-red hover:bg-disruptive-dark-red text-white">
                  Access Training
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Success Stories
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from people just like you who are earning through the OneTap Hustle Hub.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "I started referring clients to OneTap Media as a side hustle, and now I'm making an extra $1,500 per month. The training resources made it easy to get started even though I had no marketing experience.",
                name: "Sarah J.",
                earnings: "$1,500/month"
              },
              {
                quote: "As a freelance designer, I often work with clients who need marketing help. The OneTap Hustle Hub lets me offer them a solution while earning passive income. It's a win-win!",
                name: "Michael T.",
                earnings: "$950/month"
              },
              {
                quote: "I was skeptical at first, but after my first referral closed and I earned $100, I was hooked. The points system makes it fun, and the monthly competitions add an extra incentive.",
                name: "Jessica L.",
                earnings: "$700/month"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-disruptive-black">{testimonial.name}</div>
                  <div className="text-green-600 font-bold">{testimonial.earnings}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-disruptive-red mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I get started with the OneTap Hustle Hub?",
                answer: "Simply click the 'Get Your Referral Code' button, fill out a quick form, and you'll receive your unique referral code and access to all training materials."
              },
              {
                question: "When and how do I get paid?",
                answer: "Payments are processed monthly for all points redeemed. You can cash out anytime your balance reaches 1,000 points ($10) or more. We offer payment via PayPal, direct deposit, or gift cards."
              },
              {
                question: "Do I need marketing experience to participate?",
                answer: "Not at all! We provide comprehensive training resources to help you identify potential clients and make successful referrals, regardless of your background."
              },
              {
                question: "Is there a limit to how many businesses I can refer?",
                answer: "There's no limit! The more qualified businesses you refer, the more points and cash you can earn. Top performers refer 5-10 businesses per month."
              },
              {
                question: "What types of businesses are a good fit for OneTap Media?",
                answer: "Any business looking to grow through digital marketing is a good fit. This includes e-commerce stores, local service businesses, B2B companies, and professional services."
              },
              {
                question: "How long do referrals stay linked to my account?",
                answer: "Referrals are linked to your account for 90 days. If they become a client within that period, you'll receive the points and commission."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-disruptive-black mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
              Join the OneTap Hustle Hub today and start earning points, cash, and exclusive rewards.
              It's free to join and takes less than 2 minutes to get started.
            </p>
            
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link
    href="/partners/referral/join"
    className="inline-flex items-center justify-center bg-disruptive-red hover:bg-disruptive-dark-red text-white px-8 py-4 text-lg font-bold tracking-wide rounded-md transition"
  >
    Get Your Referral Code
    <ArrowRight className="ml-2 w-5 h-5" />
  </Link>

  <Button
    onClick={openTypeform}
    variant="outline"
    size="lg"
    className="border-2 border-white text-white hover:bg-white hover:text-disruptive-red px-8 py-4 text-lg font-bold tracking-wide bg-transparent"
  >
    SCHEDULE A CALL
  </Button>
</div>

          </motion.div>
        </div>
      </section>

      <Footer />
     
     {/* Share Section */}
     <PageShareSection />
      
      {/* Modals */}
      <TypeformModal isOpen={isTypeformOpen} onClose={closeTypeform} />
      <CalendlyPopup isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </main>
  );
}