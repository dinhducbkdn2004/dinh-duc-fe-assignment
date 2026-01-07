import { forwardRef, useEffect, useRef } from 'react';
import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@//utils/cn';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  autoResize?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, autoResize = false, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replaceAll(/\s+/g, '-');
    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      if (!autoResize) return;

      const textarea = internalRef.current;
      if (!textarea) return;

      const adjustHeight = () => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      };

      adjustHeight();
      textarea.addEventListener('input', adjustHeight);

      return () => {
        textarea.removeEventListener('input', adjustHeight);
      };
    }, [autoResize, props.value]);

    return (
      <div className='flex flex-col gap-1.5 w-full'>
        {label && (
          <label htmlFor={textareaId} className='text-sm font-medium text-foreground'>
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            'flex min-h-20 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm',
            'placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'resize-none',
            error && 'border-destructive focus-visible:ring-destructive',
            className,
          )}
          ref={(node) => {
            internalRef.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className='text-xs text-destructive' role='alert'>
            {error}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
