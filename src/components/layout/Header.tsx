
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, ChevronDown } from 'lucide-react';
import SearchBar from '@/components/ui/SearchBar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Best Deals', href: '#deals' },
    { name: 'Categories', href: '#', hasDropdown: true },
    { name: 'SmartShop Premium', href: '#premium' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      // Prevent background scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center mr-4 z-10"
          >
            <div className="font-bold text-xl tracking-tight">
              <span className="text-smartshop-600">Smart</span>
              <span className="text-gray-900">Shop</span>
              <span className="ml-1 text-smartshop-500 font-normal">AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-8">
            {navigationItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="text-sm font-medium hover:text-smartshop-600 flex items-center" 
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                      <DropdownMenuItem>
                        <Link to="#electronics">Electronics</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="#fashion">Fashion</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="#home">Home & Living</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="#beauty">Beauty</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link 
                    to={item.href} 
                    className="text-sm font-medium hover:text-smartshop-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Spacer div to push items to the ends */}
          <div className="flex-1 md:flex-none"></div>

          {/* Action buttons */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-600 hover:text-smartshop-600"
              onClick={toggleSearch}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-600 hover:text-smartshop-600"
            >
              <User className="h-5 w-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-600 hover:text-smartshop-600 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 size-4 bg-smartshop-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-gray-600 hover:text-smartshop-600"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
          
        {/* Mobile menu */}
        <div 
          className={cn(
            'fixed inset-0 z-40 bg-white flex flex-col transition-all duration-300 transform',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
            'md:hidden'
          )}
        >
          <div className="py-5 px-4 border-b">
            <div className="flex items-center justify-between">
              <Link to="/" className="font-bold text-xl">
                <span className="text-smartshop-600">Smart</span>
                <span className="text-gray-900">Shop</span>
                <span className="ml-1 text-smartshop-500 font-normal">AI</span>
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMobileMenu}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-4">
            {navigationItems.map((item) => (
              <Link 
                key={item.name}
                to={item.href} 
                className="block py-3 text-base font-medium border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="w-full mb-3"
              >
                Sign In
              </Button>
              <Button className="w-full bg-smartshop-500 hover:bg-smartshop-600">
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        {/* Search overlay */}
        <div 
          className={cn(
            'absolute top-full left-0 right-0 bg-white shadow-lg p-4 transition-all duration-300',
            showSearch ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          )}
        >
          <SearchBar 
            variant="large" 
            placeholder="Search for products across all platforms..."
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
