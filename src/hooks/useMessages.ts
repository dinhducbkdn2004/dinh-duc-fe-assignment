import { useState, useCallback, useMemo } from 'react';
import type { Message } from '@/types';
import { sortByDate } from '@/utils';

interface UseMessagesReturn {
  messages: Message[];
  sortedMessages: Message[];
  addMessage: (message: Message) => void;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export const useMessages = (initialMessages: Message[]): UseMessagesReturn => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const addMessage = useCallback((message: Message) => {
    setMessages((prev) => [message, ...prev]);
  }, []);

  const sortedMessages = useMemo(() => sortByDate(messages, 'date'), [messages]);

  return {
    messages,
    sortedMessages,
    addMessage,
    setMessages,
  };
};
