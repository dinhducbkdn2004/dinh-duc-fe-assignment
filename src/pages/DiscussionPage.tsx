import { MessageCircle } from 'lucide-react';
import { EmptyState } from '@/components/ui';

const DiscussionPage = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <EmptyState
        title='Discussion Feature'
        description='Comment thread with one-level replies will be implemented here'
        icon={<MessageCircle size={36} className='text-muted-foreground' />}
      />
    </div>
  );
};

export default DiscussionPage;
