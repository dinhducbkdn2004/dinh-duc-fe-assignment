import { X } from 'lucide-react';
import { cn } from '@/utils';
import type { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-foreground/50' onClick={onClose} />
      <div
        className={cn(
          'relative bg-background rounded-lg shadow-lg flex flex-col overflow-hidden',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export interface ModalHeaderProps {
  children: ReactNode;
  onClose: () => void;
  className?: string;
}

export const ModalHeader = ({ children, onClose, className }: ModalHeaderProps) => {
  return (
    <div className={cn('flex items-center justify-between px-6 py-4 border-b', className)}>
      {children}
      <button
        onClick={onClose}
        className='text-white hover:text-gray-200 transition-colors p-1'
        type='button'
      >
        <X size={20} />
      </button>
    </div>
  );
};

export interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

export const ModalBody = ({ children, className }: ModalBodyProps) => {
  return <div className={cn('flex-1 overflow-auto', className)}>{children}</div>;
};

export interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

export const ModalFooter = ({ children, className }: ModalFooterProps) => {
  return <div className={cn('px-6 py-4', className)}>{children}</div>;
};
