"use client";

import { useEffect } from 'react';
import React from 'react';

interface GoogleTagManagerProps {
  id: string;
}

const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({ id }) => {
  useEffect(() => {
    if (!id) {
      console.warn('GTM ID is not set. Set NEXT_PUBLIC_GTM_ID in your environment variables.');
      return;
    }
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [id]);

  return null;
}

export default GoogleTagManager;