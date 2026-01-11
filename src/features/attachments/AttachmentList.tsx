import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Checkbox,
  Button,
  Dropdown,
} from '@/components/ui';
import { DropdownItem } from '@/components/ui/Dropdown';
import { MoreHorizontal, Eye, Download, Trash2, Menu } from 'lucide-react';
import type { AttachmentFile } from '@/types';
import { formatFullDate, formatFileSize, cn, getFileIconColor } from '@/utils';

interface AttachmentListProps {
  attachments: AttachmentFile[];
  onDeleteOne: (id: string) => void;
}

export const AttachmentList = ({ attachments, onDeleteOne }: AttachmentListProps) => {
  return (
    <div className='flex-1 overflow-auto'>
      <Table className='h-full'>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox className='flex justify-center' />
            </TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>TYPE</TableHead>
            <TableHead>SIZE</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead>
              <Menu size={16} className='mx-auto' />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attachments.map((file) => (
            <TableRow key={file.id}>
              <TableCell>
                <Checkbox className='flex justify-center' />
              </TableCell>
              <TableCell>
                <div className='flex items-center gap-3'>
                  <div
                    className={cn(
                      'py-0.5 rounded text-xs font-bold w-[44px] text-center shrink-0',
                      getFileIconColor(file.type),
                    )}
                  >
                    {file.type}
                  </div>
                  <span className='font-medium truncate'>{file.name}</span>
                </div>
              </TableCell>
              <TableCell>{file.type}</TableCell>
              <TableCell>{formatFileSize(file.size)}</TableCell>
              <TableCell>{formatFullDate(file.date)}</TableCell>
              <TableCell>
                <div className='flex justify-center'>
                  <Dropdown
                    align='end'
                    trigger={
                      <Button variant='ghost' size='sm' className='h-[22px] w-[22px] p-0'>
                        <MoreHorizontal size={14} />
                      </Button>
                    }
                  >
                    <DropdownItem>
                      <Eye className='mr-2 h-4 w-4' /> Preview
                    </DropdownItem>
                    <DropdownItem onClick={() => alert('Download')}>
                      <Download className='mr-2 h-4 w-4' /> Download
                    </DropdownItem>
                    <DropdownItem destructive onClick={() => onDeleteOne(file.id)}>
                      <Trash2 className='mr-2 h-4 w-4' /> Delete
                    </DropdownItem>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {attachments.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className='text-center py-8 text-muted-foreground'>
                No files found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
