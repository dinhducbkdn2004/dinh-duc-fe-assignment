import { useEffect } from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Avatar, Button } from '@/components/ui';
import { formatFullDate } from '@/utils/formatDate';
import type { Comment as CommentType } from '@/types/discussion';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';

interface CommentProps {
  comment: CommentType;
  currentUserId: string;
  onEdit: (commentId: string) => void;
  onDelete: (commentId: string) => void;
  onReply: (commentId: string) => void;
  scrollToNewlyCreated?: boolean;
}

export const Comment = ({
  comment,
  currentUserId,
  onEdit,
  onDelete,
  onReply,
  scrollToNewlyCreated,
}: CommentProps) => {
  const isOwnComment = comment.author === currentUserId;
  const { ref, scrollIntoView } = useScrollIntoView();

  useEffect(() => {
    if (scrollToNewlyCreated) {
      scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [scrollToNewlyCreated, scrollIntoView]);

  return (
    <div ref={ref} className='flex gap-3 mb-4'>
      <Avatar src={comment.authorAvatar} alt={comment.author} size='md' className='shrink-0' />
      <div className='flex-1 min-w-0'>
        <div className='bg-background rounded-lg p-4'>
          <div className='flex items-start justify-between gap-4 mb-2'>
            <div className='flex items-center gap-2 min-w-0'>
              <span className='font-semibold text-sm text-foreground'>{comment.author}</span>
            </div>
            <div className='flex items-center gap-3 shrink-0'>
              <span className='text-xs text-muted-foreground whitespace-nowrap'>
                {formatFullDate(comment.timestamp)}
              </span>
              {isOwnComment && (
                <div className='flex items-center gap-1'>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='h-7 px-2 text-muted-foreground hover:text-foreground'
                    onClick={() => onEdit(comment.id)}
                  >
                    <Edit2 size={14} />
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='h-7 px-2 text-muted-foreground hover:text-destructive'
                    onClick={() => onDelete(comment.id)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div
            className='text-sm text-foreground discussion-content'
            dangerouslySetInnerHTML={{ __html: comment.content }}
          />
        </div>
        <Button
          variant='ghost'
          size='sm'
          className='mt-2 text-xs text-muted-foreground hover:text-foreground'
          onClick={() => onReply(comment.id)}
        >
          Reply
        </Button>
      </div>
    </div>
  );
};
