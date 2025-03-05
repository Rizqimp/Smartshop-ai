
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Camera, Mic } from 'lucide-react';

interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  onSearch?: (value: string) => void;
  variant?: 'default' | 'minimal' | 'large';
  showVoiceSearch?: boolean;
  showCameraSearch?: boolean;
}

export function SearchBar({
  className,
  placeholder = 'Search for products...',
  onSearch,
  variant = 'default',
  showVoiceSearch = true,
  showCameraSearch = true,
  ...props
}: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (onSearch && searchValue.trim()) {
      onSearch(searchValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const variantClasses = {
    default: 'px-4 py-2 rounded-lg shadow-sm',
    minimal: 'px-3 py-1.5 rounded-md',
    large: 'px-5 py-3 rounded-xl shadow-md',
  };

  const inputSizeClasses = {
    default: 'text-base',
    minimal: 'text-sm',
    large: 'text-lg',
  };

  return (
    <div 
      className={cn(
        'flex items-center w-full bg-white border border-gray-200 transition-all',
        'focus-within:border-smartshop-400 focus-within:ring-1 focus-within:ring-smartshop-400/30',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <Search className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
      
      <Input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={cn(
          'flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0',
          inputSizeClasses[variant]
        )}
      />
      
      {showCameraSearch && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-smartshop-500"
          onClick={() => console.log('Camera search clicked')}
        >
          <Camera className="h-5 w-5" />
        </Button>
      )}
      
      {showVoiceSearch && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-smartshop-500"
          onClick={() => console.log('Voice search clicked')}
        >
          <Mic className="h-5 w-5" />
        </Button>
      )}
      
      <Button
        type="button"
        onClick={handleSearch}
        className="ml-2 bg-smartshop-500 hover:bg-smartshop-600 text-white"
        size={variant === 'minimal' ? 'sm' : variant === 'large' ? 'lg' : 'default'}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
