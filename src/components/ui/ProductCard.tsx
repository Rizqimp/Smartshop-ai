import React from 'react';
import { cn } from '@/lib/utils';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CustomBadge from './CustomBadge';

export interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  image: string;
  platform?: 'shopee' | 'tokopedia' | 'tiktok' | null;
  discount?: number;
  isFavorite?: boolean;
  freeShipping?: boolean;
}

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
  variant?: 'default' | 'compact' | 'horizontal';
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (product: Product) => void;
  showPlatform?: boolean;
}

export function ProductCard({
  product,
  className,
  variant = 'default',
  onAddToCart,
  onToggleFavorite,
  showPlatform = true,
  ...props
}: ProductCardProps) {
  const {
    title,
    description,
    price,
    originalPrice,
    rating,
    image,
    platform,
    discount,
    isFavorite,
    freeShipping,
  } = product;

  const platformColors = {
    shopee: 'bg-orange-100 text-orange-800',
    tokopedia: 'bg-green-100 text-green-800',
    tiktok: 'bg-gray-100 text-gray-800',
  };

  const platformNames = {
    shopee: 'Shopee',
    tokopedia: 'Tokopedia',
    tiktok: 'TikTok Shop',
  };

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  const formattedOriginalPrice = originalPrice
    ? new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(originalPrice)
    : null;

  const isHorizontal = variant === 'horizontal';
  const isCompact = variant === 'compact';

  return (
    <div
      className={cn(
        'glass-card group overflow-hidden h-full',
        {
          'flex flex-row': isHorizontal,
          'flex flex-col': !isHorizontal,
        },
        className
      )}
      {...props}
    >
      <div
        className={cn('relative overflow-hidden', {
          'w-1/3 flex-shrink-0': isHorizontal,
          'aspect-square': !isHorizontal,
        })}
      >
        {discount && (
          <CustomBadge
            variant="primary"
            className="absolute top-2 left-2 z-10"
          >
            -{discount}%
          </CustomBadge>
        )}
        
        {showPlatform && platform && (
          <CustomBadge
            className={cn(
              'absolute bottom-2 left-2 z-10',
              platformColors[platform]
            )}
          >
            {platformNames[platform]}
          </CustomBadge>
        )}
        
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            'absolute top-2 right-2 z-10 size-8 opacity-0 transition-opacity rounded-full bg-white/80 hover:bg-white',
            'text-gray-600 hover:text-red-500',
            isFavorite && 'opacity-100 text-red-500',
            'group-hover:opacity-100'
          )}
          onClick={() => onToggleFavorite?.(product)}
        >
          <Heart
            className={cn('h-5 w-5', isFavorite && 'fill-current')}
          />
        </Button>

        <img
          src={image}
          alt={title}
          className={cn(
            'h-full w-full object-cover transition-all duration-300 group-hover:scale-105',
            {
              'aspect-square': !isHorizontal,
              'h-full': isHorizontal,
            }
          )}
        />
      </div>

      <div
        className={cn('flex flex-col', {
          'p-3': isCompact,
          'p-4': !isCompact,
          'flex-1': isHorizontal,
        })}
      >
        {rating !== undefined && (
          <div className="flex items-center mb-1 text-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
        )}

        <h3
          className={cn('font-medium line-clamp-2', {
            'text-sm': isCompact,
            'text-base': !isCompact,
            'mb-1': isCompact || description,
            'mb-3': !isCompact && !description,
          })}
        >
          {title}
        </h3>

        {description && !isCompact && (
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
            {description}
          </p>
        )}

        <div className="mt-auto pt-3 flex items-center justify-between">
          <div className="flex flex-col">
            <span
              className={cn('font-bold text-smartshop-800', {
                'text-sm': isCompact,
                'text-base': !isCompact,
              })}
            >
              {formattedPrice}
            </span>
            {formattedOriginalPrice && (
              <span className="text-xs text-gray-500 line-through">
                {formattedOriginalPrice}
              </span>
            )}
          </div>

          {!isCompact && (
            <Button
              size="sm"
              className="bg-smartshop-500 hover:bg-smartshop-600 rounded-full"
              onClick={() => onAddToCart?.(product)}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              <span className="sr-only md:not-sr-only md:inline-block">
                Buy
              </span>
            </Button>
          )}
        </div>

        {freeShipping && (
          <CustomBadge
            variant="success"
            size="sm"
            className="mt-2 w-fit"
          >
            Free Shipping
          </CustomBadge>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
