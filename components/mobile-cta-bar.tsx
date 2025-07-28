'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { X } from 'lucide-react';

interface MobileCTABarProps {}

export function MobileCTABar({}: MobileCTABarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.5; // Show after scrolling 50% of viewport
      
      if (scrolled > threshold && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-2 border-disruptive-red shadow-lg will-change-transform"
        >
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-4">
                <div className="text-sm font-semibold text-disruptive-black mb-1">
                  Ready to grow your business?
                </div>
                <div className="text-xs text-gray-600">
                  Get your free strategy session today
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform', { detail: { type: 'contact' } }))}
                  size="sm"
                  className="bg-disruptive-red hover:bg-disruptive-dark-red text-white px-4 py-2 rounded-lg font-semibold text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-disruptive-red focus:ring-offset-2 growth-plan-button"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Contact Us
                </Button>
                
                <button
                  aria-label="Dismiss"
                  onClick={handleDismiss}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}