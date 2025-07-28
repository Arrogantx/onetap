'use client';

import { useState, useEffect, PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import { TypeformModal, TYPEFORM_IDS } from '@/components/typeform-modal';

// Dynamically load GTM
const GoogleTagManager = dynamic(() => import('@/components/google-tag-manager'), {
  ssr: false,
  loading: () => null,
});

export default function ClientWrapper({ children }: PropsWithChildren) {
  const [isTypeformOpen, setIsTypeformOpen] = useState(false);
  const [typeformId, setTypeformId] = useState<string | undefined>(undefined);

  const openTypeform = (type?: 'audit' | 'contact' | 'strategy' | 'default') => {
    let id;
    switch (type) {
      case 'audit':
        id = TYPEFORM_IDS.GROWTH_PLAN;
        break;
      case 'strategy':
        id = TYPEFORM_IDS.STRATEGY_SESSION;
        break;
      case 'contact':
      case 'default':
      default:
        id = TYPEFORM_IDS.DEFAULT;
        break;
    }
    setTypeformId(id);
    setIsTypeformOpen(true);
  };

  const closeTypeform = () => {
    setIsTypeformOpen(false);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const type = detail?.type;
      openTypeform(type);
    };

    document.documentElement.addEventListener('openTypeform', handler);
    return () => {
      document.documentElement.removeEventListener('openTypeform', handler);
    };
  }, []);

  return (
    <>
      {/* GTM script */}
      <GoogleTagManager key="gtm" id={process.env.NEXT_PUBLIC_GTM_ID || ''} />
      
      {/* Main content */}
      {children}

      {/* Typeform Modal */}
      <TypeformModal 
        isOpen={isTypeformOpen} 
        onClose={closeTypeform} 
        typeformId={typeformId}
      />

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="GTM"
        />
      </noscript>
    </>
  );
}
