import { Paperclip } from 'lucide-react';
import { EmptyState } from '@/components/ui';

const AttachmentsPage = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <EmptyState
        title='Attachments Feature'
        description='File list + drag-drop upload with validation will be implemented here'
        icon={<Paperclip size={36} className='text-muted-foreground' />}
      />
    </div>
  );
};

export default AttachmentsPage;
