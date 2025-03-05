
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import ProductCard, { Product } from '@/components/ui/ProductCard';
import { fadeIn, fadeInUp } from '@/lib/animations';
import { ArrowRight, Filter, ArrowDownUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CustomBadge from '@/components/ui/Badge';

const ComparisonSection = () => {
  const [favoritedProducts, setFavoritedProducts] = useState<string[]>([]);

  const products: Product[] = [
    {
      id: '1',
      title: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones',
      price: 3499000,
      originalPrice: 4299000,
      rating: 4.8,
      image: 'https://source.unsplash.com/wgwV_DrwHko',
      platform: 'shopee',
      discount: 20,
      freeShipping: true
    },
    {
      id: '2',
      title: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones',
      price: 3650000,
      originalPrice: 4299000,
      rating: 4.9,
      image: 'https://source.unsplash.com/wgwV_DrwHko',
      platform: 'tokopedia',
      discount: 15,
      freeShipping: false
    },
    {
      id: '3',
      title: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones',
      price: 3799000,
      originalPrice: 4299000,
      rating: 4.7,
      image: 'https://source.unsplash.com/wgwV_DrwHko',
      platform: 'tiktok',
      discount: 12,
      freeShipping: true
    }
  ];

  const handleToggleFavorite = (product: Product) => {
    setFavoritedProducts(prev => 
      prev.includes(product.id) 
        ? prev.filter(id => id !== product.id)
        : [...prev, product.id]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-t from-gray-50 to-white" id="comparison">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-smartshop-600 font-medium mb-2 block">Price Comparison</span>
          <h2 className="text-4xl font-bold mb-6">
            Find the Best Deals Across Platforms
          </h2>
          <p className="text-lg text-gray-600">
            Our AI compares prices, shipping fees, discounts, and cashback offers to help you find the absolute best deal every time.
          </p>
        </div>
        
        <div className={cn("glass-card shadow-premium p-6 sm:p-8 rounded-2xl mb-12", fadeIn)}>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-semibold">Sony WH-1000XM4 Headphones</h3>
              <p className="text-gray-600">Results from 3 platforms</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowDownUp className="w-4 h-4" />
                Sort
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Star className="w-4 h-4" />
                Rating
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  isFavorite: favoritedProducts.includes(product.id)
                }}
                onToggleFavorite={handleToggleFavorite}
                className={product.id === '1' ? 'ring-2 ring-smartshop-500 ring-offset-2' : ''}
              />
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <CustomBadge variant="success">Best Deal</CustomBadge>
              </div>
              <p className="text-sm text-gray-600">
                Shopee offers the lowest price with free shipping and additional 5% cashback via SmartShop Wallet
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={cn("glass-card p-6", fadeInUp, "animate-delay-100")}>
            <h3 className="text-lg font-semibold mb-3">Price Tracking</h3>
            <p className="text-gray-600 mb-4">
              SmartShop AI monitors price changes across all platforms and alerts you when prices drop.
            </p>
            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-5/6 h-16 bg-white rounded flex items-end px-2">
                <div className="w-1/6 h-6 bg-smartshop-200 rounded-sm"></div>
                <div className="w-1/6 h-10 bg-smartshop-300 rounded-sm mx-1"></div>
                <div className="w-1/6 h-8 bg-smartshop-400 rounded-sm"></div>
                <div className="w-1/6 h-12 bg-smartshop-500 rounded-sm mx-1"></div>
                <div className="w-1/6 h-4 bg-smartshop-400 rounded-sm"></div>
                <div className="w-1/6 h-8 bg-smartshop-300 rounded-sm mx-1"></div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="w-full text-smartshop-600 hover:text-smartshop-700 hover:bg-smartshop-50 group">
              View price history
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className={cn("glass-card p-6", fadeInUp, "animate-delay-200")}>
            <h3 className="text-lg font-semibold mb-3">Smart Filters</h3>
            <p className="text-gray-600 mb-4">
              Filter results by price, rating, discounts, shipping options, and platform-specific promotions.
            </p>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Price Range</span>
                <span className="text-sm font-medium">Rp3.0M - Rp4.5M</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full">
                <div className="h-full w-3/4 bg-smartshop-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Min</span>
                <span>Max</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="w-full text-smartshop-600 hover:text-smartshop-700 hover:bg-smartshop-50 group">
              Customize filters
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className={cn("glass-card p-6", fadeInUp, "animate-delay-300")}>
            <h3 className="text-lg font-semibold mb-3">Total Savings</h3>
            <p className="text-gray-600 mb-4">
              See the complete breakdown of savings from discounts, cashback, and platform vouchers.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Product Discount</span>
                  <span className="font-medium">Rp800,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform Voucher</span>
                  <span className="font-medium">Rp150,000</span>
                </div>
                <div className="flex justify-between">
                  <span>SmartShop Cashback</span>
                  <span className="font-medium">Rp175,000</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-bold">
                  <span>Total Savings</span>
                  <span className="text-smartshop-600">Rp1,125,000</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="w-full text-smartshop-600 hover:text-smartshop-700 hover:bg-smartshop-50 group">
              View detailed breakdown
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ComparisonSection;
