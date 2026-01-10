import { useState, useRef } from 'react';
import { X } from 'lucide-react';
import { Avatar, Button, RichTextEditor, type RichTextEditorRef } from '@/components/ui';
import { useUser } from '@/contexts';

interface DiscussionInputProps {
  variant?: 'comment' | 'reply';
  commentId?: string;
  initialValue?: string;
  placeholder?: string;
  onSubmit: (content: string, commentId?: string) => void;
  onCancel: () => void;
  showConnector?: boolean;
}

export const DiscussionInput = ({
  variant = 'comment',
  commentId,
  initialValue,
  placeholder = 'Add new comments',
  onSubmit,
  onCancel,
  showConnector = false,
}: DiscussionInputProps) => {
  const { currentUser } = useUser();
  const [content, setContent] = useState(initialValue || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editorRef = useRef<RichTextEditorRef>(null);

  const handleSubmit = async () => {
    const strippedContent = content.replace(/<[^>]*>/g, '').trim();
    if (!strippedContent && !content.includes('<img')) {
      return;
    }
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onSubmit(content, commentId);
      editorRef.current?.clear();
      setContent('');
    } catch (error) {
      console.error('Failed to submit:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    editorRef.current?.clear();
    setContent('');
    onCancel();
  };

  const strippedContent = content.replace(/<[^>]*>/g, '').trim();
  const isEmpty = (!strippedContent && !content.includes('<img')) || content === '<p><br></p>';

  const inputContent = (
    <>
      <Avatar src={currentUser.avatar} alt={currentUser.name} size='md' className='shrink-0' />
      <div className='flex-1 min-w-0'>
        <div className='bg-background p-3 flex flex-col border border-border gap-2 rounded-lg overflow-hidden'>
          <div>
            <span className='font-semibold text-sm text-foreground'>{currentUser.name}</span>
            <RichTextEditor
              ref={editorRef}
              value={content}
              onChange={setContent}
              placeholder={placeholder}
              disabled={isSubmitting}
              minHeight='120px'
              className='rich-text-with-scroll'
            />
          </div>
          <div className='flex justify-end gap-2'>
            <Button variant='ghost' size='sm' onClick={handleCancel} disabled={isSubmitting}>
              <X size={16} />
              Dismiss
            </Button>
            <Button
              variant='primary'
              size='sm'
              onClick={handleSubmit}
              disabled={isEmpty || isSubmitting}
              isLoading={isSubmitting}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );

  if (variant === 'reply' && showConnector) {
    return (
      <div className='flex gap-3 mb-4 relative ml-11'>
        <div className='absolute -left-11 top-0 bottom-0 w-px bg-border' />

        <div className='absolute -left-11 top-8 w-6 h-px bg-border' />

        <div
          className='absolute -left-5 top-8 w-px h-8 bg-border'
          style={{ borderRadius: '0 0 0 8px' }}
        />

        {inputContent}
      </div>
    );
  }

  return <div className='flex gap-3 mb-4'>{inputContent}</div>;
};
