'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Check } from 'lucide-react';

interface ReferralCodeGeneratorProps {
  onCodeGenerated?: (code: string) => void;
}

export function ReferralCodeGenerator({ onCodeGenerated }: ReferralCodeGeneratorProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const generateCode = async () => {
    if (!name || !email) {
      setError('Please provide your name and email');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/.netlify/functions/create-referral-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate referral code');
      }

      setReferralCode(data.referralCode);
      if (onCodeGenerated) {
        onCodeGenerated(data.referralCode);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-disruptive-black mb-4">Get Your Unique Referral Code</h3>
        
        {!referralCode ? (
          <>
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-disruptive-red"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-disruptive-red"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            {error && (
              <div className="text-red-500 text-sm mb-4">
                {error}
              </div>
            )}
            
            <Button
              onClick={generateCode}
              disabled={isLoading}
              className="w-full bg-disruptive-red hover:bg-disruptive-dark-red text-white"
            >
              {isLoading ? 'Generating...' : 'Generate My Referral Code'}
            </Button>
          </>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 mb-4">Your unique referral code is:</p>
            
            <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between mb-6">
              <span className="font-bold text-disruptive-black text-xl">{referralCode}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className="text-disruptive-red hover:text-disruptive-dark-red"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </Button>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">
              Share this code with businesses that could benefit from OneTap Media's services. 
              You'll earn points for every referral!
            </p>
            
            <div className="flex space-x-4">
              <Button
                variant="outline"
                className="flex-1 border-disruptive-red text-disruptive-red hover:bg-disruptive-red hover:text-white"
                onClick={copyToClipboard}
              >
                Copy Code
              </Button>
              
              <Button
                className="flex-1 bg-disruptive-red hover:bg-disruptive-dark-red text-white"
                onClick={() => window.location.href = '/partners/referral/dashboard'}
              >
                Go to Dashboard
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}