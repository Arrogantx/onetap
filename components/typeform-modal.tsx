'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Define specific Typeform IDs for different purposes
export const TYPEFORM_IDS = {
  DEFAULT: "01JX6GBDY4M1EAKQ2RKN2SKTVX",
  GROWTH_PLAN: "01JX6TBAZM1GZ7WT982D067QA6",
  STRATEGY_SESSION: "01JX6HV5ZXTK45B1DTTAB8Z74N"
};

interface TypeformModalProps {
  isOpen: boolean;
  onClose: () => void;
  typeformId?: string;
}

export function TypeformModal({ isOpen, onClose, typeformId = TYPEFORM_IDS.DEFAULT }: TypeformModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const embedRef = useRef<HTMLDivElement>(null);

  // Effect for managing body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  // Effect for loading and initializing the Typeform embed
  useEffect(() => {
    if (isOpen) {
      // Ensure the script is loaded
      if (!document.getElementById('typeform-script')) {
        const script = document.createElement('script');
        script.id = 'typeform-script';
        script.src = 'https://embed.typeform.com/next/embed.js';
        script.async = true;
        script.onload = () => {
          initializeTypeform();
        };
        document.head.appendChild(script);
      } else {
        // Script already exists, just initialize
        initializeTypeform();
      }
    }

    function initializeTypeform() {
      if (embedRef.current) {
        // Clear previous content
        embedRef.current.innerHTML = '';
        
        // Create a new div for the embed
        const embedDiv = document.createElement('div');
        embedDiv.setAttribute('data-tf-live', typeformId);
        embedDiv.setAttribute('data-tf-medium', 'embed');
        embedDiv.style.width = '100%';
        embedDiv.style.height = '100%';
        
        // Append to the container
        embedRef.current.appendChild(embedDiv);
        
        // Initialize if tf is available
        if (window.tf && typeof window.tf.load === 'function') {
          window.tf.load();
        }
      }
    }
  }, [isOpen, typeformId]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Dismiss on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 modal-overlay"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}  
            className="relative w-full h-full max-w-4xl max-h-[90vh] m-4 bg-white rounded-lg shadow-2xl modal-content"
          >
            <button
              onClick={onClose}
              aria-label="Close form"
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div ref={embedRef} className="w-full h-full">
              {/* Typeform will be embedded here */}
              <div className="w-full h-full min-h-[600px] flex items-center justify-center bg-gray-50">
                <span className="text-gray-500">Loading form...</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}