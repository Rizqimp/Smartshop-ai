
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'premium';
  size?: 'sm' | 'md';
}

export function CustomBadge({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: BadgeProps) {
  const variantClasses = {
    primary: 'bg-smartshop-500 text-white',
    secondary: 'bg-gray-100 text-gray-800',
    outline: 'bg-transparent border border-smartshop-500 text-smartshop-500',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    premium: 'bg-gradient-to-r from-amber-200 to-yellow-400 text-amber-900',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full transition-all',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default CustomBadge;
