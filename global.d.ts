// Type definitions for external libraries

// Custom event for typeform opening
interface CustomEventMap {
  'openTypeform': CustomEvent<{ type?: 'audit' | 'contact' | 'strategy' }>;
  'calendly:ready': CustomEvent;
}

declare global {
  interface Window {
    // Google Tag Manager
    dataLayer?: Array<{ [key: string]: unknown }>;
    
    // Typeform
    tf?: {
      createWidget?: (formId: string, options?: any) => any;
      createPopup?: (formId: string, options?: any) => any;
      load?: () => void;
    };
    
    // Calendly
    Calendly?: {
      initInlineWidget: (options: any) => void;
      initPopupWidget?: (options: any) => void;
      showPopupWidget?: (url: string, options?: any) => void;
    };
  }
  
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
      options?: boolean | EventListenerOptions
    ): void;
  }
  
  interface HTMLElement {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: CustomEventMap[K]) => void,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: CustomEventMap[K]) => void,
      options?: boolean | EventListenerOptions
    ): void;
  }
}

export {};