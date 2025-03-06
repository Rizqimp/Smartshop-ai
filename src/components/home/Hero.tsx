
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/ui/SearchBar';
import { ShoppingBag, Zap, ShieldCheck } from 'lucide-react';
import CustomBadge from '@/components/ui/CustomBadge';
import { floatingAnimation } from '@/lib/animations';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      
      {/* Animated decoration elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-smartshop-100 blur-3xl opacity-60 -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 rounded-full bg-blue-100 blur-3xl opacity-50 -z-10 animate-pulse-slow animate-delay-500"></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <CustomBadge
              variant="primary" 
              className="mb-4 animate-fade-in"
            >
              The Smartest Way to Shop Online
            </CustomBadge>
            
            <h1 className="font-bold tracking-tight text-gray-900 animate-slide-up">
              Shop Smarter, Save <span className="text-smartshop-600">More</span> with AI
            </h1>
            
            <p className="text-lg text-gray-600 animate-slide-up animate-delay-100">
              Find the best deals across Shopee, Tokopedia, and TikTok Shop with our smart price comparison and auto checkout technology.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-200">
              <Button 
                className="bg-smartshop-500 hover:bg-smartshop-600 rounded-full px-8"
                size="lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-8"
                size="lg"
              >
                Learn More
              </Button>
            </div>
            
            <div className="pt-4 grid grid-cols-3 gap-4 animate-fade-in animate-delay-300">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center text-smartshop-600 mb-1">
                  <ShoppingBag className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">3 Platforms</span>
                </div>
                <p className="text-sm text-gray-500">All in one app</p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center text-smartshop-600 mb-1">
                  <Zap className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">Fast Checkout</span>
                </div>
                <p className="text-sm text-gray-500">One-click buy</p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center text-smartshop-600 mb-1">
                  <ShieldCheck className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">100% Secure</span>
                </div>
                <p className="text-sm text-gray-500">Trusted shopping</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-delay-300">
            <div className="relative z-10">
              <div className="glass-card shadow-premium p-6 rounded-2xl mb-6">
                <h3 className="text-xl font-semibold mb-6">
                  What are you looking for today?
                </h3>
                <SearchBar 
                  variant="large" 
                  placeholder="Search for products across all platforms..." 
                />
                <div className="mt-6 flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">iPhone 15</Button>
                  <Button variant="outline" size="sm" className="rounded-full">Airpods Pro</Button>
                  <Button variant="outline" size="sm" className="rounded-full">Nike Air Max</Button>
                  <Button variant="outline" size="sm" className="rounded-full">Samsung TV</Button>
                </div>
              </div>
              
              <div className={cn("glass-card p-4 rounded-2xl absolute -bottom-6 -left-6 z-20 max-w-xs shadow-glass", floatingAnimation)}>
                <div className="flex items-center">
                  <div className="rounded-full bg-green-500 p-2 mr-3">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Smart Price Alert</h4>
                    <p className="text-xs text-gray-600">Price dropped 15% on your wishlist items</p>
                  </div>
                </div>
              </div>
              
              <div className={cn("glass-card p-4 rounded-2xl absolute -top-6 -right-6 z-20 max-w-xs shadow-glass", floatingAnimation, "animate-delay-300")}>
                <div className="flex items-center">
                  <div className="rounded-full bg-smartshop-500 p-2 mr-3">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">5% Cashback</h4>
                    <p className="text-xs text-gray-600">On your next purchase with SmartShop AI</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-gray-200 opacity-30 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-gray-200 opacity-20 -z-10"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
