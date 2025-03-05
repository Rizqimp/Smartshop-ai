
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import SearchBar from '@/components/ui/SearchBar';
import { Button } from '@/components/ui/button';
import { Camera, Mic, ShoppingBag, ArrowRight } from 'lucide-react';
import { fadeIn, fadeInUp } from '@/lib/animations';

const SearchSection = () => {
  const [activeTab, setActiveTab] = useState<'text' | 'image' | 'voice'>('text');

  const tabClasses = (tab: 'text' | 'image' | 'voice') => cn(
    "p-4 flex-1 text-center font-medium rounded-t-lg transition-colors",
    {
      "bg-white text-smartshop-600 border-b-2 border-smartshop-500": activeTab === tab,
      "text-gray-500 hover:text-gray-700 bg-gray-50": activeTab !== tab
    }
  );

  return (
    <section className="py-20 relative overflow-hidden" id="search">
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-smartshop-600 font-medium mb-2 block">Intelligent Search</span>
            <h2 className="text-4xl font-bold mb-6">
              Find Products Across All Platforms
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use text, image, or voice to search for products. Our AI will find the best matches across Shopee, Tokopedia, and TikTok Shop in seconds.
            </p>
          </div>
          
          <div className={cn("glass-card shadow-premium rounded-2xl overflow-hidden", fadeIn)}>
            <div className="flex border-b border-gray-200">
              <button 
                className={tabClasses('text')}
                onClick={() => setActiveTab('text')}
              >
                Text Search
              </button>
              <button 
                className={tabClasses('image')}
                onClick={() => setActiveTab('image')}
              >
                Image Search
              </button>
              <button 
                className={tabClasses('voice')}
                onClick={() => setActiveTab('voice')}
              >
                Voice Search
              </button>
            </div>
            
            <div className="p-6 sm:p-8">
              {activeTab === 'text' && (
                <div className="space-y-6">
                  <SearchBar 
                    variant="large" 
                    placeholder="What are you looking for?" 
                  />
                  <div className="pt-2">
                    <p className="text-sm text-gray-500 mb-3">Popular searches:</p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">Wireless earbuds</Button>
                      <Button variant="outline" size="sm" className="rounded-full">Fitness tracker</Button>
                      <Button variant="outline" size="sm" className="rounded-full">Robot vacuum</Button>
                      <Button variant="outline" size="sm" className="rounded-full">Smart watch</Button>
                      <Button variant="outline" size="sm" className="rounded-full">Gaming laptop</Button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'image' && (
                <div className="space-y-6 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gray-50 flex items-center justify-center border-2 border-dashed border-gray-200">
                    <Camera className="w-10 h-10 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Search with Image
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Take a photo or upload an image to find similar products
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                      <Button className="bg-smartshop-500 hover:bg-smartshop-600">
                        Take Photo
                      </Button>
                      <Button variant="outline">
                        Upload Image
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'voice' && (
                <div className="space-y-6 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gray-50 flex items-center justify-center border-2 border-dashed border-gray-200">
                    <Mic className="w-10 h-10 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Search with Voice
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Press the button and tell us what you're looking for
                    </p>
                    <Button className="bg-smartshop-500 hover:bg-smartshop-600 rounded-full px-6">
                      Tap to Speak
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className={cn("glass-card p-6 text-center", fadeInUp, "animate-delay-100")}>
              <div className="w-12 h-12 bg-smartshop-50 text-smartshop-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-2">Multi-Platform Search</h3>
              <p className="text-sm text-gray-600">
                Search across Shopee, Tokopedia, and TikTok Shop simultaneously
              </p>
            </div>
            
            <div className={cn("glass-card p-6 text-center", fadeInUp, "animate-delay-200")}>
              <div className="w-12 h-12 bg-smartshop-50 text-smartshop-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-2">Visual Recognition</h3>
              <p className="text-sm text-gray-600">
                Our AI identifies products from images with amazing accuracy
              </p>
            </div>
            
            <div className={cn("glass-card p-6 text-center", fadeInUp, "animate-delay-300")}>
              <div className="w-12 h-12 bg-smartshop-50 text-smartshop-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-2">Voice Commands</h3>
              <p className="text-sm text-gray-600">
                Advanced voice recognition for hands-free shopping experience
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="ghost" className="text-smartshop-600 hover:text-smartshop-700 hover:bg-smartshop-50 group">
              Learn more about our search technology
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SearchSection;
