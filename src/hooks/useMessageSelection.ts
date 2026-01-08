import { useState, useCallback } from 'react';
import type { Message } from '@/types';

export const useMessageSelection = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const handleSelectMessage = useCallback((message: Message) => {
    setSelectedMessage(message);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedMessage(null);
  }, []);

  return {
    selectedMessage,
    handleSelectMessage,
    clearSelection,
  };
};
