import { Button, Dropdown } from '@/components/ui';
import { DropdownItem, DropdownSeparator } from '@/components/ui/Dropdown';
import {
  RefreshCw,
  Upload,
  MoreHorizontal,
  Download,
  Move,
  Copy,
  Trash2,
  History,
} from 'lucide-react';

interface AttachmentHeaderProps {
  onUploadClick: () => void;
  onDownloadAll: () => void;
}

export const AttachmentHeader = ({ onUploadClick, onDownloadAll }: AttachmentHeaderProps) => {
  return (
    <div className='border-b bg-secondary h-13 px-4 py-3 flex items-center justify-between shrink-0'>
      <div className='flex items-center gap-3'>
        <h1 className='text-[20px] font-bold'>ATTACHMENT</h1>
        <Button variant='ghost' size='sm' className='p-1'>
          <RefreshCw size={20} />
        </Button>
      </div>

      <div className='flex items-center gap-2'>
        <Button variant='outline' size='sm' className='bg-background gap-2' onClick={onUploadClick}>
          <Upload size={16} />
          <span>Upload</span>
        </Button>
        <Dropdown
          align='end'
          trigger={
            <Button variant='ghost' size='sm' className='gap-2 text-muted-foreground'>
              <span>Actions</span>
              <MoreHorizontal size={16} />
            </Button>
          }
        >
          <DropdownItem className='min-w-[9rem]' onClick={onDownloadAll}>
            <Download className='mr-2 h-4 w-4' /> Download All
          </DropdownItem>
          <DropdownSeparator />
          <DropdownItem>
            <Move className='mr-2 h-4 w-4' /> Move
          </DropdownItem>
          <DropdownItem>
            <Copy className='mr-2 h-4 w-4' /> Copy
          </DropdownItem>
          <DropdownItem destructive>
            <Trash2 className='mr-2 h-4 w-4 ' /> Delete
          </DropdownItem>
          <DropdownSeparator />
          <DropdownItem>
            <History className='mr-2 h-4 w-4' /> Activity History
          </DropdownItem>
        </Dropdown>
      </div>
    </div>
  );
};
