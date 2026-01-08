import { formatMessageDate, cn } from '@/utils';
import type { Message } from '@/types';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Button,
  Checkbox,
} from '@/components/ui';
import { MoreHorizontal } from 'lucide-react';

interface MessageListProps {
  messages: Message[];
  selectedMessageId?: string;
  onSelectMessage: (message: Message) => void;
}

const MessageList = ({ messages, selectedMessageId, onSelectMessage }: MessageListProps) => {
  return (
    <div className='h-full overflow-x-auto'>
      <Table className='h-full min-w-[600px]'>
        <TableHeader className='bg-primary text-white'>
          <TableRow>
            <TableHead>
              <Checkbox className='flex justify-center' />
            </TableHead>
            <TableHead>From</TableHead>
            <TableHead>Recipients</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((message) => {
            const isSelected = message.id === selectedMessageId;

            return (
              <TableRow
                key={message.id}
                className={cn('h-10', isSelected && 'bg-muted', !message.isRead && 'bg-primary/5')}
                onClick={() => onSelectMessage(message)}
              >
                <TableCell>
                  <Checkbox className='flex justify-center' />
                </TableCell>
                <TableCell>
                  <div className='flex items-center gap-2'>
                    <span
                      className={cn(
                        'text-xs md:text-sm truncate max-w-[80px] md:max-w-[120px]',
                        !message.isRead ? 'font-bold' : 'font-medium',
                      )}
                    >
                      {message.from}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className='text-xs md:text-sm font-medium truncate max-w-[80px] md:max-w-[120px] block'>
                    {message.recipients.join(', ')}
                  </span>
                </TableCell>
                <TableCell>
                  <span className='text-xs md:text-sm truncate max-w-[120px] md:max-w-[200px] block'>
                    {message.subject}
                  </span>
                </TableCell>
                <TableCell>
                  <span className='text-xs md:text-sm text-muted-foreground whitespace-nowrap'>
                    {formatMessageDate(message.date)}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='w-[20px] h-[20px] md:w-[22px] md:h-[22px] p-0 '
                  >
                    <MoreHorizontal size={12} className='md:hidden' />
                    <MoreHorizontal size={14} className='hidden md:block' />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default MessageList;
