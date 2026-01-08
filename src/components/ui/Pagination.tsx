import { Button, Select } from '@/components/ui';
import { FORM_DEFAULTS } from '@/constants';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  className?: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  className = '',
}: PaginationProps) => {
  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage === 1) {
      return [1, 2, 3];
    }

    if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const visiblePages = getVisiblePages();

  return (
    <div
      className={`h-14 border-t bg-background px-2 md:px-3 flex items-center justify-between ${className}`}
    >
      <span className='text-xs md:text-sm font-medium'>Total {totalItems}</span>
      <div className='flex items-center gap-2 md:gap-5'>
        <div className='min-w-[80px]'>
          <Select
            value={itemsPerPage.toString()}
            onChange={(e) => onItemsPerPageChange?.(Number(e.target.value))}
            disabled={!onItemsPerPageChange}
            className='h-8 text-xs md:text-sm py-0'
          >
            {FORM_DEFAULTS.ITEMS_PER_PAGE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option} items
              </option>
            ))}
          </Select>
        </div>
        <div className='flex items-center gap-1'>
          <Button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            variant='outline'
            size='sm'
            className='w-7 h-7 md:w-8 md:h-8 p-0'
          >
            <span className='text-sm'>‹</span>
          </Button>
          {visiblePages.map((page) => (
            <Button
              key={page}
              onClick={() => onPageChange(page)}
              variant={currentPage === page ? 'secondary' : 'outline'}
              size='sm'
              className='w-7 h-7 md:w-8 md:h-8 p-0 text-xs md:text-sm'
            >
              {page}
            </Button>
          ))}
          <Button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant='outline'
            size='sm'
            className='w-7 h-7 md:w-8 md:h-8 p-0'
          >
            <span className='text-sm'>›</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
