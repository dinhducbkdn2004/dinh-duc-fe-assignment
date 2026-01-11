import React from 'react';
import { cn } from '@/utils';

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

export const Table = ({ children, className }: TableProps) => {
  return (
    <div className={cn('w-full overflow-auto', className)}>
      <table className='w-full border-collapse'>{children}</table>
    </div>
  );
};

export const TableHeader = ({ children, className }: TableHeaderProps) => {
  return <thead className={cn('sticky top-0 z-10', className)}>{children}</thead>;
};

export const TableBody = ({ children, className }: TableBodyProps) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableRow = ({ children, className, onClick }: TableRowProps) => {
  return (
    <tr
      className={cn(
        'border-b border-border h-10 transition-colors cursor-pointer hover:bg-muted/50',
        onClick,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </tr>
  );
};

export const TableHead = ({ children, className }: TableHeadProps) => {
  return (
    <th className={cn('text-left p-3 font-bold text-sm bg-primary text-white', className)}>
      {children}
    </th>
  );
};

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  className?: string;
}

export const TableCell = ({ children, className, ...props }: TableCellProps) => {
  return (
    <td className={cn('p-3 text-sm', className)} {...props}>
      {children}
    </td>
  );
};
