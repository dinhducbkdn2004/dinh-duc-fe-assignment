import type { HTMLAttributes } from 'react';
import { cn } from '@//utils/cn';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
}

const Avatar = ({ src, alt, size = 'md', fallback, className, ...props }: AvatarProps) => {
  const sizes = {
    sm: 'h-6 w-6 text-xs',
    md: 'h-8 w-8 text-sm',
    lg: 'h-10 w-10 text-base',
    xl: 'h-12 w-12 text-lg',
  };

  const getFallbackText = () => {
    if (fallback) return fallback;
    const names = alt.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return alt.slice(0, 2).toUpperCase();
  };

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center rounded-full bg-muted text-muted-foreground font-medium overflow-hidden shrink-0',
        sizes[size],
        className,
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className='h-full w-full object-cover' />
      ) : (
        <span>{getFallbackText()}</span>
      )}
    </div>
  );
};

export default Avatar;
