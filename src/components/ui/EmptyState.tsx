import type { HTMLAttributes } from 'react';
import { cn } from '@//utils/cn';

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

const EmptyState = ({ className, title, description, icon, action, ...props }: EmptyStateProps) => {
  return (
    <div
      className={cn('flex flex-col items-center justify-center py-12 px-4 text-center', className)}
      {...props}
    >
      {icon && <div className='mb-4 text-muted-foreground'>{icon}</div>}
      <h3 className='text-lg font-semibold text-foreground mb-2'>{title}</h3>
      {description && <p className='text-sm text-muted-foreground max-w-md mb-4'>{description}</p>}
      {action && <div className='mt-2'>{action}</div>}
    </div>
  );
};

export default EmptyState;
