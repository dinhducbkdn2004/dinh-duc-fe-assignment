import { useState, useRef, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@//utils/cn';

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  trigger: ReactNode;
  children: ReactNode;
  align?: 'start' | 'end';
}

const Dropdown = ({ trigger, children, align = 'start', className, ...props }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div className={cn('relative inline-block', className)} ref={dropdownRef} {...props}>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
        {trigger}
      </div>

      {isOpen && (
        <div
          className={cn(
            'absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg',
            align === 'end' ? 'right-0' : 'left-0',
          )}
          role='menu'
        >
          <div onClick={() => setIsOpen(false)}>{children}</div>
        </div>
      )}
    </div>
  );
};

export interface DropdownItemProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  destructive?: boolean;
}

export const DropdownItem = ({
  children,
  destructive = false,
  className,
  ...props
}: DropdownItemProps) => {
  return (
    <button
      className={cn(
        'relative flex w-full cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm outline-none transition-colors',
        'hover:bg-accent hover:text-accent-foreground',
        'focus:bg-accent focus:text-accent-foreground',
        'disabled:pointer-events-none disabled:opacity-50',
        destructive && 'text-destructive hover:bg-destructive/10 focus:bg-destructive/10',
        className,
      )}
      role='menuitem'
      {...props}
    >
      {children}
    </button>
  );
};

export const DropdownSeparator = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('-mx-1 my-1 h-px bg-border', className)} {...props} />;
};

export default Dropdown;
