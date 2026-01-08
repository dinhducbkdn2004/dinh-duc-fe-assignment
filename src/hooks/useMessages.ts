import { useState, useCallback, useMemo } from 'react';
import type { Message } from '@/types';

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

  const sortedMessages = useMemo(
    () => [...messages].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [messages],
  );

  return {
    messages,
    sortedMessages,
    addMessage,
    setMessages,
  };
};
