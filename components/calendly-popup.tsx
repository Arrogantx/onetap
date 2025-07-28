import React, { useEffect } from 'react';

interface CalendlyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyPopup({ isOpen, onClose }: CalendlyPopupProps) {
  useEffect(() => {
    // Toggle body scroll
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Load Calendly when modal is opened
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        // @ts-ignore
        if (window.Calendly) {
          // @ts-ignore
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/your-calendly-link',
            parentElement: document.getElementById('calendly-inline-widget'),
            prefill: {},
            utm: {}
          });
        }
      };
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Schedule a Meeting</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="p-4">
          <div id="calendly-inline-widget" style={{ minWidth: '320px', height: '630px' }}></div>
        </div>
      </div>
    </div>
  );
}

export { CalendlyPopup }