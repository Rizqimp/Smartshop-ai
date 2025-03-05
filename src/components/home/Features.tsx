
import React from 'react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import { 
  Search, 
  CreditCard, 
  Wallet, 
  BadgeCheck, 
  Megaphone,
  Truck,
  Camera,
  Zap,
  ShieldCheck, 
} from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: string;
}

const Feature = ({ title, description, icon, delay = '' }: FeatureProps) => {
  return (
    <div className={cn(
      "glass-card p-6 transition-all hover:translate-y-[-5px]", 
      fadeInUp,
      delay
    )}>
      <div className="w-12 h-12 rounded-lg bg-smartshop-50 flex items-center justify-center text-smartshop-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Scan & Search AI",
      description: "Scan products or search with AI to compare prices across Shopee, Tokopedia, and TikTok Shop instantly.",
      delay: "animate-delay-100"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Auto Checkout",
      description: "Checkout seamlessly without switching between apps using our secure one-click buy technology.",
      delay: "animate-delay-200"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "SmartShop Wallet",
      description: "Earn cashback on every purchase that you can use for future shopping or withdraw to your bank account.",
      delay: "animate-delay-300"
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Premium Membership",
      description: "Unlock exclusive benefits including higher cashback rates, early access to deals, and free shipping perks.",
      delay: "animate-delay-100"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "SmartShop Ads",
      description: "Sellers can promote their products to targeted customers through our AI-driven recommendation engine.",
      delay: "animate-delay-200"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "SmartShop Express",
      description: "Enjoy faster delivery with our own shipping service or through partnerships with top logistics providers.",
      delay: "animate-delay-300"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="features">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-smartshop-600 font-medium mb-2 block">Core Features</span>
          <h2 className="text-4xl font-bold mb-6">
            Shop Smarter with Our AI-Powered Features
          </h2>
          <p className="text-lg text-gray-600">
            SmartShop AI combines cutting-edge technology with user-friendly features to revolutionize how you shop online across multiple platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>

        <div className="mt-20 glass-card p-8 sm:p-10 rounded-2xl shadow-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Smart AI Technology
              </h3>
              <p className="text-gray-600">
                Our advanced AI engine works behind the scenes to find you the best deals, compare prices in real-time, and provide personalized recommendations based on your shopping habits.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 text-smartshop-500">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Visual Search</h4>
                    <p className="text-sm text-gray-600">Take a photo of any product to find it online</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-smartshop-500">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Instant Comparison</h4>
                    <p className="text-sm text-gray-600">Compare prices across platforms in seconds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-smartshop-500">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Reliable Reviews</h4>
                    <p className="text-sm text-gray-600">AI-verified authentic customer reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-smartshop-50 to-smartshop-100 flex items-center justify-center overflow-hidden">
                <div className="relative w-3/4 h-3/4">
                  <div className="absolute top-0 left-0 w-full h-full bg-white rounded-xl shadow-lg transform rotate-6 opacity-60"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-white rounded-xl shadow-lg transform -rotate-3 opacity-80"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <div className="w-4/5 h-4/5 rounded-lg bg-smartshop-50 flex items-center justify-center">
                      <Search className="w-12 h-12 text-smartshop-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 glass-card p-3 rounded-lg shadow-premium">
                <div className="flex items-center space-x-2">
                  <span className="flex h-3 w-3 bg-green-500 rounded-full"></span>
                  <span className="text-sm font-medium">AI Engine Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
