'use client';

import { useEffect, useState } from 'react';
import { TYPEFORM_IDS } from './typeform-modal';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function MarketingAnalysisForm() {
  return (
    <div id="free-audit" className="py-16 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-disruptive-black mb-6">Ready for Your Free Marketing Audit?</h2>
        <p className="text-gray-600 mb-8">Get a comprehensive analysis of your current marketing and discover opportunities for growth.</p>
        <Button 
          onClick={() => {
            document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'audit' } }));
          }} 
          className="bg-disruptive-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-disruptive-black focus:ring-offset-2"
        >
          GET YOUR FREE AUDIT
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}