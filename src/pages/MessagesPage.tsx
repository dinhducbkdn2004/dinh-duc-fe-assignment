import { MessageSquare } from 'lucide-react';
import { EmptyState } from '@/components/ui';

const MessagesPage = () => {
  return (
    <div className='flex-1 h-full flex items-center justify-center'>
      <EmptyState
        title='Messages Feature'
        description='Message list + compose box will be implemented here'
        icon={<MessageSquare size={36} className='text-muted-foreground' />}
      />
    </div>
  );
};

export default MessagesPage;
