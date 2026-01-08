import { formatMessageDate } from '@/utils';
import type { Message } from '@/types';
import { Button } from '@/components/ui';
import { ArrowLeft, ChevronDown } from 'lucide-react';

interface MessageDetailProps {
  message: Message;
  onBack?: () => void;
}

const MessageDetail = ({ message, onBack }: MessageDetailProps) => {
  return (
    <div className='h-full flex flex-col'>
      <div className='h-[53px] border-b px-4 flex items-center justify-between shrink-0'>
        <div className='flex items-center gap-2'>
          {onBack && (
            <Button variant='ghost' size='sm' className='lg:hidden' onClick={onBack}>
              <ArrowLeft size={20} />
            </Button>
          )}
          <h2 className='text-base font-bold'>{message.subject}</h2>
        </div>
        <Button variant='ghost' size='md'>
          Reply
          <ChevronDown size={16} />
        </Button>
      </div>

      <div className='flex-1 overflow-auto'>
        <div className='bg-muted/40 p-3'>
          <div className='grid grid-cols-2 gap-y-2 text-sm'>
            <div className='flex items-center gap-3'>
              <span className='font-semibold'>From</span>
              <span className='font-medium text-muted-foreground'>{message.from}</span>
            </div>
            <div className='flex items-center gap-3'>
              <span className='font-semibold'>To</span>
              <span className='font-medium text-muted-foreground'>
                {message.recipients.join(', ')}
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <span className='font-semibold'>Date</span>
              <span className='font-medium text-muted-foreground'>
                {formatMessageDate(message.date)}
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <span className='font-semibold'>Category</span>
              <span className='font-medium text-muted-foreground'>{message.category}</span>
            </div>
          </div>
        </div>

        <div className='p-6'>
          <div className='text-sm leading-relaxed'>
            {message.content.split('\n').map((paragraph, index) => (
              <p key={`${message.id}-p-${index}`} className='mb-4'>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;
