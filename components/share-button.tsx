'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Share2, Check, Copy } from 'lucide-react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { getPageShareText } from '@/lib/social-share';

interface ShareButtonProps {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  showText?: boolean;
}

export function ShareButton({ 
  variant = 'default', 
  size = 'default',
  className = '',
  showText = true
}: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  
  const { title, description } = getPageShareText(pathname || '/');
  
  // Construct the current URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://onetapmedia.com';
  const currentUrl = `${baseUrl}${pathname || ''}`;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const shareViaFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
    setTimeout(() => setIsOpen(false), 300);
  };
  
  const shareViaTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`, '_blank');
    setTimeout(() => setIsOpen(false), 300);
  };
  
  const shareViaLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank');
    setTimeout(() => setIsOpen(false), 300);
  };
  
  const shareViaEmail = () => {
    window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${currentUrl}`)}`, '_blank');
    setTimeout(() => setIsOpen(false), 300);
  };
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="relative">
      <Button
        variant={variant}
        size={size}
        aria-label={showText ? "Share" : "Share this page"}
        aria-expanded={isOpen}
        onClick={toggleDropdown}
        className={className}
      >
        <Share2 className="w-4 h-4 mr-2" />
        {showText && 'Share'}
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 border border-gray-200" role="menu">
          <div className="p-2">
            <button
              aria-label="Copy link to clipboard"
              onClick={copyToClipboard}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              role="menuitem"
            >
              {copied ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            
            <button
              aria-label="Share on Facebook"
              onClick={shareViaFacebook}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              role="menuitem"
            >
              <Facebook className="w-4 h-4 mr-2 text-blue-600" />
              Facebook
            </button>
            
            <button
              aria-label="Share on Twitter"
              onClick={shareViaTwitter}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              role="menuitem"
            >
              <Twitter className="w-4 h-4 mr-2 text-blue-400" />
              Twitter
            </button>
            
            <button
              aria-label="Share on LinkedIn"
              onClick={shareViaLinkedin}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              role="menuitem"
            >
              <Linkedin className="w-4 h-4 mr-2 text-blue-700" />
              LinkedIn
            </button>
            
            <button
              aria-label="Share via Email"
              onClick={shareViaEmail}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              role="menuitem"
            >
              <Mail className="w-4 h-4 mr-2 text-gray-500" />
              Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
}