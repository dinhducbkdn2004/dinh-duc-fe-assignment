import { useState } from 'react';
import { mockMessages } from '@/mocks';
import type { Message } from '@/types';
import { MessageSquare, RefreshCw, ChevronDown } from 'lucide-react';
import { EmptyState, Button, Pagination } from '@/components/ui';
import { MessageList, MessageDetail, ComposeMessage } from '@/features/messages';
import { cn } from '@/utils';
import { useMessages, useMessageSelection } from '@/hooks';

const MessagesPage = () => {
  const {
    messages,
    currentMessages,
    addMessage,
    currentPage,
    itemsPerPage,
    totalPages,
    handlePageChange,
    handleItemsPerPageChange,
  } = useMessages(mockMessages);

  const { selectedMessage, handleSelectMessage, clearSelection } = useMessageSelection();
  const [isComposing, setIsComposing] = useState(false);

  const handleCompose = () => {
    setIsComposing(true);
  };

  const handleSendMessage = (newMessage: Omit<Message, 'id' | 'date'>) => {
    const message: Message = {
      ...newMessage,
      id: `msg-${Date.now()}`,
      date: new Date().toISOString(),
    };

    addMessage(message);
    handleSelectMessage(message);
    setIsComposing(false);
  };

  const handleCancelCompose = () => {
    setIsComposing(false);
  };

  return (
    <>
      <div className='h-full flex flex-col lg:flex-row'>
        <div
          className={cn(
            'flex-1 lg:min-w-[700px] border-r flex flex-col bg-background',
            selectedMessage ? 'hidden lg:flex' : 'flex',
          )}
        >
          <div
            className={`border-b bg-secondary px-4 h-13 flex items-center justify-between shrink-0`}
          >
            <div className='flex items-center gap-3'>
              <h1 className='text-[20px] font-bold'>
                INBOX ({itemsPerPage * (currentPage - 1) + 1}-
                {Math.min(itemsPerPage * currentPage, messages.length)}/{messages.length})
              </h1>
              <Button variant='ghost' size='sm' className='p-1'>
                <RefreshCw size={20} />
              </Button>
            </div>
            <Button onClick={handleCompose} variant='outline' size='sm' className='bg-background'>
              <span className='text-sm'>Compose</span>
              <ChevronDown size={16} />
            </Button>
          </div>

          <div className='flex-1 overflow-auto'>
            {messages.length === 0 ? (
              <EmptyState
                title='No messages'
                description='Start a conversation by composing a new message'
                icon={<MessageSquare size={48} className='text-muted-foreground' />}
              />
            ) : (
              <MessageList
                messages={currentMessages}
                selectedMessageId={selectedMessage?.id}
                onSelectMessage={handleSelectMessage}
              />
            )}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={messages.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>

        <div
          className={cn(
            'flex-1 lg:min-w-[400px] lg:max-w-[600px] flex-col bg-background',
            selectedMessage ? 'flex' : 'hidden lg:flex',
          )}
        >
          {selectedMessage ? (
            <MessageDetail message={selectedMessage} onBack={clearSelection} />
          ) : (
            <div className='h-full flex items-center justify-center p-6'>
              <EmptyState
                title='No message selected'
                description='Select a message from the table to view its content'
                icon={<MessageSquare size={48} className='text-muted-foreground' />}
              />
            </div>
          )}
        </div>
      </div>

      <ComposeMessage
        isOpen={isComposing}
        onSend={handleSendMessage}
        onClose={handleCancelCompose}
      />
    </>
  );
};

export default MessagesPage;
