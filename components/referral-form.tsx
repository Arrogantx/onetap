'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ReferralFormProps {
  referralCode: string;
  onSubmitSuccess?: () => void;
}

export function ReferralForm({ referralCode, onSubmitSuccess }: ReferralFormProps) {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!businessName || !contactName || !email) {
      setError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/.netlify/functions/submit-referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          referralCode,
          businessName,
          contactName,
          email,
          phone,
          notes
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit referral');
      }

      setSuccess(true);
      
      // Reset form
      setBusinessName('');
      setContactName('');
      setEmail('');
      setPhone('');
      setNotes('');
      
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-disruptive-black mb-4">Submit a New Referral</h3>
        
        {success ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
            <p className="font-medium">Referral submitted successfully!</p>
            <p className="text-sm mt-2">You've earned 100 points for this submission. You'll earn more points as your referral progresses through the sales process.</p>
            <Button
              onClick={() => setSuccess(false)}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white"
            >
              Submit Another Referral
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-disruptive-red"
                placeholder="ABC Company"
                required
              />
            </div>
            
            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Person's Name *
              </label>
              <input
                type="text"
                id="contactName"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-disruptive-red"
                placeholder="John Smith"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-disruptive-red"
                placeholder="john@abccompany.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-disruptive-red"
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes (Optional)
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-disruptive-red"
                placeholder="Any additional information about this referral..."
              />
            </div>
            
            {error && (
              <div className="text-red-500 text-sm">
                {error}
              </div>
            )}
            
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-disruptive-red hover:bg-disruptive-dark-red text-white"
              >
                {isLoading ? 'Submitting...' : 'Submit Referral'}
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              * Required fields. By submitting this referral, you confirm that you have permission to share this contact's information.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}