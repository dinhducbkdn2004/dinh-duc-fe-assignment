import { useState, useCallback, useMemo } from 'react';
import { usePagination } from './usePagination';
import type { Message } from '@/types';
import { sortByDate } from '@/utils';

interface UseMessagesReturn {
  messages: Message[];
  sortedMessages: Message[];
  currentMessages: Message[];
  addMessage: (message: Message) => void;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
  handleItemsPerPageChange: (items: number) => void;
}

export const useMessages = (initialMessages: Message[]): UseMessagesReturn => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const sortedMessages = useMemo(() => sortByDate(messages, 'date'), [messages]);

  const {
    currentPage,
    itemsPerPage,
    totalPages,
    startIndex,
    endIndex,
    handlePageChange,
    handleItemsPerPageChange,
    resetPagination,
  } = usePagination({
    totalItems: sortedMessages.length,
  });

  const currentMessages = useMemo(
    () => sortedMessages.slice(startIndex, endIndex),
    [sortedMessages, startIndex, endIndex],
  );

  const addMessage = useCallback(
    (message: Message) => {
      setMessages((prev) => [message, ...prev]);
      resetPagination();
    },
    [resetPagination],
  );

  return {
    messages,
    sortedMessages,
    currentMessages,
    addMessage,
    setMessages,
    currentPage,
    itemsPerPage,
    totalPages,
    handlePageChange,
    handleItemsPerPageChange,
  };
};
