import { useState, useMemo } from 'react';
import { usePagination } from './usePagination';
import type { AttachmentFile } from '@/types';
import { mockAttachments } from '@/mocks';

interface UseAttachmentsProps {
  initialData?: AttachmentFile[];
}

export const useAttachments = ({ initialData = mockAttachments }: UseAttachmentsProps = {}) => {
  const [attachments, setAttachments] = useState<AttachmentFile[]>(initialData);

  const {
    currentPage,
    itemsPerPage,
    totalPages,
    startIndex,
    endIndex,
    handlePageChange,
    handleItemsPerPageChange,
  } = usePagination({
    totalItems: attachments.length,
    initialItemsPerPage: 5,
  });

  const currentAttachments = useMemo(() => {
    return attachments.slice(startIndex, endIndex);
  }, [attachments, startIndex, endIndex]);

  const handleDownloadAll = () => {
    alert(`Downloading all files...`);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete selected files?')) {
      setAttachments((prev) => prev.filter((a) => a.id !== id));
    }
  };

  const deleteOne = (id: string) => {
    if (confirm('Are you sure you want to delete this file?')) {
      setAttachments((prev) => prev.filter((a) => a.id !== id));
    }
  };

  const addAttachments = (newFiles: AttachmentFile[]) => {
    setAttachments((prev) => [...newFiles, ...prev]);
  };

  return {
    attachments,
    currentAttachments,
    currentPage,
    itemsPerPage,
    totalPages,
    handlePageChange,
    handleItemsPerPageChange,
    handleDownloadAll,
    handleDelete,
    deleteOne,
    addAttachments,
  };
};
