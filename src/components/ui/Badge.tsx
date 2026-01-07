import type { HTMLAttributes } from 'react';
import { cn } from '@//utils/cn';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md';
}

const Badge = ({ className, variant = 'default', size = 'md', children, ...props }: BadgeProps) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-medium transition-colors';

  const variants = {
    default: 'bg-muted text-muted-foreground',
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    danger: 'bg-destructive text-destructive-foreground',
    success: 'bg-chart-2 text-primary-foreground',
  };

  const sizes = {
    sm: 'h-5 min-w-5 px-1.5 text-xs',
    md: 'h-6 min-w-6 px-2 text-sm',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
};

export default Badge;
