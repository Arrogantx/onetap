'use client';

import { usePathname } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { ShareButton } from '@/components/share-button';

export function PageShareSection() {
  const pathname = usePathname();
  
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-none shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-8">
                <h3 className="text-xl font-bold text-disruptive-black mb-2">
                  Found this helpful?
                </h3>
                <p className="text-gray-600">
                  Share this page with others who might benefit from it.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <ShareButton 
                  variant="default" 
                  className="bg-disruptive-red hover:bg-disruptive-dark-red text-white"
                />
                
                <ShareButton 
                  variant="outline" 
                  className="border-disruptive-red text-disruptive-red hover:bg-disruptive-red hover:text-white"
                  showText={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}