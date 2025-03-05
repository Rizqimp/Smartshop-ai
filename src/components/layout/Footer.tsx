
import React from 'react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="font-bold text-xl">
              <span className="text-smartshop-600">Smart</span>
              <span className="text-gray-900">Shop</span>
              <span className="ml-1 text-smartshop-500 font-normal">AI</span>
            </div>
            <p className="text-gray-600 text-sm">
              SmartShop AI connects multiple e-commerce platforms in Indonesia, 
              helping you find the best deals across Shopee, Tokopedia, and TikTok Shop.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="rounded-full size-9">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full size-9">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full size-9">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full size-9">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-smartshop-600 text-sm">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-smartshop-600 text-sm">About Us</a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-smartshop-600 text-sm">Features</a>
              </li>
              <li>
                <a href="#premium" className="text-gray-600 hover:text-smartshop-600 text-sm">Premium</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-smartshop-600 text-sm">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-600 hover:text-smartshop-600 text-sm">FAQ</a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-smartshop-600 text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 hover:text-smartshop-600 text-sm">Terms of Service</a>
              </li>
              <li>
                <a href="#shipping" className="text-gray-600 hover:text-smartshop-600 text-sm">Shipping Info</a>
              </li>
              <li>
                <a href="#refunds" className="text-gray-600 hover:text-smartshop-600 text-sm">Refunds</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white"
              />
              <Button type="submit" size="icon" className="bg-smartshop-500 hover:bg-smartshop-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2023 SmartShop AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-smartshop-600">Privacy</a>
            <a href="#terms" className="hover:text-smartshop-600">Terms</a>
            <a href="#cookies" className="hover:text-smartshop-600">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
