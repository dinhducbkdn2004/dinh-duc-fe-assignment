import { Edit2, Trash2 } from 'lucide-react';
import { Avatar, Button } from '@/components/ui';
import { formatFullDate } from '@/utils/formatDate';
import type { Reply as ReplyType } from '@/types/discussion';

interface ReplyProps {
  reply: ReplyType;
  currentUserId: string;
  onEdit: (replyId: string) => void;
  onDelete: (replyId: string) => void;
}

export const Reply = ({ reply, currentUserId, onEdit, onDelete }: ReplyProps) => {
  const isOwnReply = reply.author === currentUserId;

  return (
    <div className='flex gap-3 mb-4 relative ml-11'>
      <div className='absolute -left-11 top-0 bottom-0 w-px bg-border' />
      <div className='absolute -left-11 top-8 w-6 h-px bg-border' />

      <div
        className='absolute -left-5 top-8 w-px h-8 bg-border'
        style={{ borderRadius: '0 0 0 8px' }}
      />

      <div className='flex gap-3 flex-1'>
        <Avatar src={reply.authorAvatar} alt={reply.author} size='md' className='shrink-0' />
        <div className='flex-1 min-w-0'>
          <div className='bg-background rounded-lg p-4'>
            <div className='flex items-start justify-between gap-4 mb-2'>
              <div className='flex items-center gap-2 min-w-0'>
                <span className='font-semibold text-sm text-foreground'>{reply.author}</span>
              </div>
              <div className='flex items-center gap-3 shrink-0'>
                <span className='text-xs text-muted-foreground whitespace-nowrap'>
                  {formatFullDate(reply.timestamp)}
                </span>
                {isOwnReply && (
                  <div className='flex items-center gap-1'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='h-7 px-2 text-muted-foreground hover:text-foreground'
                      onClick={() => onEdit(reply.id)}
                    >
                      <Edit2 size={14} />
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='h-7 px-2 text-muted-foreground hover:text-destructive'
                      onClick={() => onDelete(reply.id)}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className='ql-snow'>
              <div
                className='text-sm text-foreground discussion-content ql-editor !p-0'
                dangerouslySetInnerHTML={{ __html: reply.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
