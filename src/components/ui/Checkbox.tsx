import { forwardRef } from 'react';
import { cn } from '@/utils';

export const Checkbox = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type='checkbox'
        ref={ref}
        className={cn('w-4 h-4 rounded cursor-pointer accent-primary', className)}
        {...props}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';
