'use client';

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { CaseStudiesSection } from '@/components/case-studies-section';
import { ProcessSection } from '@/components/process-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { MobileCTABar } from '@/components/mobile-cta-bar';
import { MarketingAnalysisForm } from '@/components/marketing-analysis-form';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection onOpenTypeform={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform'))} />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection onOpenTypeform={() => document.documentElement.dispatchEvent(new CustomEvent('openTypeform'))} />
      <MarketingAnalysisForm />
      <CTASection />
      <Footer />
      
      {/* Mobile sticky CTA */}
      <MobileCTABar />
    </main>
  );
}