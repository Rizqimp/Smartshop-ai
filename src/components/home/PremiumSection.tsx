
import React from 'react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Check, Zap, Crown, Clock, CreditCard, ShoppingBag, Gift } from 'lucide-react';
import { fadeIn, fadeInUp } from '@/lib/animations';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  delay?: string;
}

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  popular = false,
  buttonText,
  delay = ''
}: PricingCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card relative overflow-hidden transition-all",
        popular ? "border-smartshop-500 shadow-premium" : "border-gray-200",
        fadeInUp,
        delay
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="text-xs font-bold uppercase py-1 px-3 bg-smartshop-500 text-white transform rotate-0 translate-x-2 -translate-y-0">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl sm:text-4xl font-extrabold">{price}</span>
          <span className="ml-1 text-gray-500">/{period}</span>
        </div>
        <p className="mt-5 text-gray-600">{description}</p>
        
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={cn(
            "mt-8 w-full",
            popular 
              ? "bg-smartshop-500 hover:bg-smartshop-600" 
              : "bg-gray-900 hover:bg-gray-800"
          )}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const PremiumSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="premium">
      {/* Premium background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 -z-10"></div>
      
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center rounded-full px-4 py-1 mb-4 border border-smartshop-200 bg-smartshop-50">
            <Crown className="h-4 w-4 text-smartshop-500 mr-2" />
            <span className="text-sm font-medium text-smartshop-700">SmartShop Premium</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Upgrade Your Shopping Experience
          </h2>
          <p className="text-lg text-gray-600">
            Unlock exclusive benefits, higher cashback rates, and premium features with SmartShop Premium membership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard
            title="Free Plan"
            price="Rp0"
            period="forever"
            description="Basic access to SmartShop AI's core features"
            features={[
              "Price comparison across platforms",
              "Basic search functionality",
              "1% cashback on purchases",
              "Standard checkout process",
              "Limited price alerts"
            ]}
            buttonText="Current Plan"
            delay="animate-delay-100"
          />
          
          <PricingCard
            title="Premium"
            price="Rp39,000"
            period="month"
            description="Enhanced features for regular online shoppers"
            features={[
              "Everything in Free plan",
              "5% cashback on all purchases",
              "Express 1-click checkout",
              "Unlimited price alerts",
              "Early access to flash sales",
              "Free shipping vouchers (2/month)"
            ]}
            popular={true}
            buttonText="Subscribe Now"
            delay="animate-delay-200"
          />
          
          <PricingCard
            title="Annual Premium"
            price="Rp199,000"
            period="year"
            description="Save 57% with our annual subscription"
            features={[
              "Everything in Premium plan",
              "7% cashback on all purchases",
              "Priority customer support",
              "Premium badge on your profile",
              "Exclusive deals and promotions",
              "Free shipping vouchers (5/month)"
            ]}
            buttonText="Subscribe & Save"
            delay="animate-delay-300"
          />
        </div>
        
        <div className={cn("mt-16 glass-card p-8 rounded-2xl shadow-premium", fadeIn)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Why Upgrade to Premium?
              </h3>
              <p className="text-gray-600 mb-6">
                SmartShop Premium unlocks the full potential of our platform, offering substantial benefits that pay for themselves with just a few purchases.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-smartshop-100 flex items-center justify-center text-smartshop-500">
                      <CreditCard className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Higher Cashback</h4>
                    <p className="text-sm text-gray-600">
                      Earn up to 7% cashback on all purchases
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-smartshop-100 flex items-center justify-center text-smartshop-500">
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Express Checkout</h4>
                    <p className="text-sm text-gray-600">
                      Skip the wait with priority processing
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-smartshop-100 flex items-center justify-center text-smartshop-500">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Free Shipping</h4>
                    <p className="text-sm text-gray-600">
                      Monthly vouchers for free shipping
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-smartshop-100 flex items-center justify-center text-smartshop-500">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Early Access</h4>
                    <p className="text-sm text-gray-600">
                      Shop flash sales before everyone else
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-smartshop-50 to-smartshop-100 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-smartshop-200 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-smartshop-200 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Gift className="w-6 h-6 text-smartshop-500 mr-2" />
                  <h3 className="text-xl font-bold">Special Offer</h3>
                </div>
                
                <h4 className="text-2xl sm:text-3xl font-bold mb-3">
                  50% OFF Your First 3 Months
                </h4>
                <p className="text-gray-600 mb-6">
                  Limited time offer: Get Premium for just Rp19,500/month for your first 3 months!
                </p>
                
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Promo Code:</span>
                    <span className="font-bold text-smartshop-600">PREMIUM50</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Valid until 30 June 2023
                  </div>
                </div>
                
                <Button className="w-full bg-smartshop-500 hover:bg-smartshop-600">
                  Claim This Offer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PremiumSection;
