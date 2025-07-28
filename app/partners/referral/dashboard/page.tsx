'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Copy, Share2, Trophy, Coins, Users, Target, Clock, DollarSign, Award, Star, Gift, ChevronDown, ChevronUp } from 'lucide-react';

// Mock user data
const userData = {
  name: "Alex Johnson",
  username: "@alexjmarketing",
  referralCode: "ALEXJ2024",
  points: 1750,
  tier: "Silver",
  cashEarned: "$175",
  referrals: {
    total: 12,
    pending: 3,
    converted: 5,
    contacted: 4
  },
  recentActivity: [
    { date: "2024-05-15", action: "Lead became client", points: 1000, status: "Completed" },
    { date: "2024-05-10", action: "Lead booked call", points: 300, status: "Completed" },
    { date: "2024-05-05", action: "Referral submitted", points: 100, status: "Completed" },
    { date: "2024-05-01", action: "Completed training", points: 150, status: "Completed" },
    { date: "2024-04-28", action: "Shared on social", points: 50, status: "Completed" }
  ],
  pendingReferrals: [
    { company: "GreenTech Solutions", date: "2024-05-12", status: "Contacted" },
    { company: "Fitness First Gym", date: "2024-05-08", status: "Scheduled Call" },
    { company: "Artisan Bakery", date: "2024-05-03", status: "Reviewing Proposal" }
  ]
};

// Mock leaderboard data
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

// Mock training resources
const trainingResources = [
  {
    title: "Finding Qualified Leads",
    description: "Learn how to identify businesses that need marketing help and would benefit from OneTap Media's services.",
    completed: true,
    points: 50
  },
  {
    title: "Effective Outreach Strategies",
    description: "Master the art of reaching out to potential clients via email, social media, or in person.",
    completed: true,
    points: 50
  },
  {
    title: "Explaining OneTap's Value Proposition",
    description: "Learn how to clearly communicate the benefits of working with OneTap Media.",
    completed: true,
    points: 50
  },
  {
    title: "Advanced Lead Generation",
    description: "Take your lead generation skills to the next level with these advanced techniques.",
    completed: false,
    points: 100
  }
];

export default function ReferralDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAllActivity, setShowAllActivity] = useState(false);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(userData.referralCode);
    alert('Referral code copied to clipboard!');
  };

  const shareReferralLink = () => {
    const referralLink = `https://onetapmedia.com/r/${userData.referralCode}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Join OneTap Hustle Hub',
        text: 'Check out this amazing referral program from OneTap Media!',
        url: referralLink,
      });
    } else {
      navigator.clipboard.writeText(referralLink);
      alert('Referral link copied to clipboard!');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Dashboard Header */}
      <section className="bg-gradient-to-br from-disruptive-red via-red-600 to-disruptive-dark-red text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome, {userData.name}</h1>
              <p className="text-red-100">{userData.username} • {userData.tier} Tier</p>
            </div>
            
            <div className="mt-6 md:mt-0 flex items-center space-x-4">
              <div className="text-center">
                <div className="text-sm text-red-200">Current Points</div>
                <div className="text-2xl font-bold">{userData.points.toLocaleString()}</div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-red-200">Cash Earned</div>
                <div className="text-2xl font-bold">{userData.cashEarned}</div>
              </div>
              
              <Button
                onClick={() => {}}
                className="bg-white text-disruptive-red hover:bg-gray-100"
              >
                Cash Out
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Referral Code Banner */}
      <section className="bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-4">
                <span className="text-gray-600 font-medium">Your Referral Code:</span>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center">
                <span className="font-bold text-disruptive-black mr-3">{userData.referralCode}</span>
                <button onClick={copyReferralCode} className="text-disruptive-red hover:text-disruptive-dark-red">
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button
                onClick={shareReferralLink}
                variant="outline"
                className="border-disruptive-red text-disruptive-red hover:bg-disruptive-red hover:text-white"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Your Link
              </Button>
              
              <Button
                onClick={() => {}}
                className="bg-disruptive-red hover:bg-disruptive-dark-red text-white"
              >
                Submit New Referral
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dashboard Tabs */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'referrals', label: 'My Referrals' },
              { id: 'leaderboard', label: 'Leaderboard' },
              { id: 'training', label: 'Training' },
              { id: 'rewards', label: 'Rewards' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-disruptive-red border-b-2 border-disruptive-red'
                    : 'text-gray-600 hover:text-disruptive-red'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Dashboard Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { title: 'Total Referrals', value: userData.referrals.total, icon: Users, color: 'bg-blue-500' },
                  { title: 'Converted Clients', value: userData.referrals.converted, icon: Target, color: 'bg-green-500' },
                  { title: 'Pending Referrals', value: userData.referrals.pending, icon: Clock, color: 'bg-yellow-500' },
                  { title: 'Points to Next Tier', value: '1,250', icon: Award, color: 'bg-purple-500' }
                ].map((stat, index) => (
                  <Card key={stat.title} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center text-white`}>
                          <stat.icon className="w-6 h-6" />
                        </div>
                        <div className="text-3xl font-bold text-disruptive-black">{stat.value}</div>
                      </div>
                      <div className="text-gray-600 font-medium">{stat.title}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Recent Activity */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-disruptive-black">Recent Activity</h3>
                    <Button
                      variant="ghost"
                      onClick={() => setShowAllActivity(!showAllActivity)}
                      className="text-disruptive-red hover:text-disruptive-dark-red"
                    >
                      {showAllActivity ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {userData.recentActivity.slice(0, showAllActivity ? undefined : 3).map((activity, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {new Date(activity.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                              {activity.action}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-disruptive-red">
                              +{activity.points}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                              <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                {activity.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {!showAllActivity && userData.recentActivity.length > 3 && (
                    <div className="mt-4 text-center">
                      <Button
                        variant="ghost"
                        onClick={() => setShowAllActivity(true)}
                        className="text-disruptive-red hover:text-disruptive-dark-red"
                      >
                        View All Activity
                        <ChevronDown className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {/* Pending Referrals */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-disruptive-black mb-6">Pending Referrals</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Submitted</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {userData.pendingReferrals.map((referral, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                              {referral.company}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {new Date(referral.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                              <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                                {referral.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {/* Referrals Tab */}
          {activeTab === 'referrals' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-disruptive-black">My Referrals</h2>
                <Button
                  className="bg-disruptive-red hover:bg-disruptive-dark-red text-white"
                >
                  Submit New Referral
                </Button>
              </div>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                      { title: 'Total Referrals', value: userData.referrals.total },
                      { title: 'Converted Clients', value: userData.referrals.converted },
                      { title: 'Pending Referrals', value: userData.referrals.pending },
                      { title: 'Conversion Rate', value: '41.7%' }
                    ].map((stat) => (
                      <div key={stat.title} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-3xl font-bold text-disruptive-black mb-2">{stat.value}</div>
                        <div className="text-gray-600">{stat.title}</div>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-disruptive-black mb-4">All Referrals</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Points Earned</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {[
                          { company: "GreenTech Solutions", date: "2024-05-12", status: "Contacted", points: 100 },
                          { company: "Fitness First Gym", date: "2024-05-08", status: "Scheduled Call", points: 400 },
                          { company: "Artisan Bakery", date: "2024-05-03", status: "Reviewing Proposal", points: 400 },
                          { company: "Tech Innovations Inc", date: "2024-04-25", status: "Became Client", points: 1400 },
                          { company: "Local Plumber Co", date: "2024-04-18", status: "Became Client", points: 1400 },
                          { company: "Fashion Boutique", date: "2024-04-10", status: "Not Interested", points: 100 }
                        ].map((referral, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                              {referral.company}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {new Date(referral.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                referral.status === 'Became Client' 
                                  ? 'bg-green-100 text-green-800' 
                                  : referral.status === 'Not Interested'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {referral.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-disruptive-red">
                              {referral.points}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {/* Leaderboard Tab */}
          {activeTab === 'leaderboard' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-disruptive-black">Monthly Leaderboard</h2>
                <div className="text-gray-600">
                  <span className="font-medium">Resets in:</span> 16 days
                </div>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Prize</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {leaderboard.map((user) => (
                          <tr key={user.username} className={user.username === userData.username ? 'bg-yellow-50' : ''}>
                            <td className="px-6 py-4 whitespace-nowrap">
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
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm font-medium ${user.username === userData.username ? 'text-disruptive-red' : 'text-gray-700'}`}>
                                {user.username} {user.username === userData.username && '(You)'}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-disruptive-black">
                              {user.points.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-green-600">
                              {user.prize}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {/* Training Tab */}
          {activeTab === 'training' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-disruptive-black">Training Resources</h2>
                <div className="text-gray-600">
                  <span className="font-medium">Completed:</span> 3/4
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {trainingResources.map((resource, index) => (
                  <Card key={index} className={`border-2 ${resource.completed ? 'border-green-300' : 'border-gray-200'}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-disruptive-black">{resource.title}</h3>
                        {resource.completed ? (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                            In Progress
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-6">{resource.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <span className="font-medium">Points:</span> {resource.points}
                        </div>
                        
                        <Button
                          className={resource.completed 
                            ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                            : "bg-disruptive-red hover:bg-disruptive-dark-red text-white"
                          }
                          disabled={resource.completed}
                        >
                          {resource.completed ? 'Completed' : 'Start Training'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-disruptive-black mb-4">Additional Resources</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { title: "Email Templates", description: "Ready-to-use email templates for reaching out to potential clients." },
                        { title: "Social Media Scripts", description: "Scripts for connecting with businesses on LinkedIn, Instagram, and more." },
                        { title: "Objection Handling Guide", description: "Learn how to address common objections and concerns." }
                      ].map((resource, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-disruptive-black mb-2">{resource.title}</h4>
                          <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                          <Button
                            variant="outline"
                            className="w-full border-disruptive-red text-disruptive-red hover:bg-disruptive-red hover:text-white"
                          >
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          
          {/* Rewards Tab */}
          {activeTab === 'rewards' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-disruptive-black">Rewards & Cash Out</h2>
                <div className="text-gray-600">
                  <span className="font-medium">Available Points:</span> {userData.points.toLocaleString()}
                </div>
              </div>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-disruptive-black mb-6">Cash Out Options</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { amount: "$10", points: 1000, available: true },
                      { amount: "$25", points: 2500, available: false },
                      { amount: "$50", points: 5000, available: false },
                      { amount: "$100", points: 10000, available: false },
                      { amount: "$250", points: 25000, available: false },
                      { amount: "$500", points: 50000, available: false }
                    ].map((option, index) => (
                      <div 
                        key={index} 
                        className={`border-2 rounded-lg p-6 text-center ${
                          option.available 
                            ? 'border-green-300 bg-green-50' 
                            : 'border-gray-200 bg-gray-50 opacity-70'
                        }`}
                      >
                        <div className="text-3xl font-bold text-disruptive-black mb-2">{option.amount}</div>
                        <div className="text-gray-600 mb-4">{option.points.toLocaleString()} points</div>
                        <Button
                          className={option.available 
                            ? "bg-disruptive-red hover:bg-disruptive-dark-red text-white w-full"
                            : "bg-gray-300 text-gray-600 cursor-not-allowed w-full"
                          }
                          disabled={!option.available}
                        >
                          {option.available ? 'Redeem Now' : 'Not Available'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-disruptive-black mb-6">Exclusive Rewards</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: "1-on-1 Marketing Consultation", 
                        description: "30-minute consultation with a OneTap Media marketing expert.",
                        points: 2000,
                        available: false
                      },
                      { 
                        title: "Marketing Tools Bundle", 
                        description: "Access to premium marketing tools and software for 3 months.",
                        points: 5000,
                        available: false
                      },
                      { 
                        title: "Featured Referrer Spotlight", 
                        description: "Get featured on OneTap Media's website and social media.",
                        points: 7500,
                        available: false
                      },
                      { 
                        title: "VIP Event Access", 
                        description: "Exclusive access to OneTap Media's VIP marketing events.",
                        points: 10000,
                        available: false
                      }
                    ].map((reward, index) => (
                      <div key={index} className="border-2 border-gray-200 rounded-lg p-6">
                        <h4 className="font-bold text-disruptive-black mb-2">{reward.title}</h4>
                        <p className="text-gray-600 text-sm mb-4">{reward.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="font-bold text-disruptive-red">{reward.points.toLocaleString()} points</div>
                          <Button
                            className="bg-gray-300 text-gray-600 cursor-not-allowed"
                            disabled={true}
                          >
                            {reward.available ? 'Redeem' : 'Not Enough Points'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}