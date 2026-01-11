import { useState, useRef } from 'react';
import type { AttachmentFile } from '@/types';
import { validateFile } from '@/utils';

interface UseFileUploadProps {
  onUpload: (files: AttachmentFile[]) => void;
}

export const useFileUpload = ({ onUpload }: UseFileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const newAttachments: AttachmentFile[] = [];
    const errors: string[] = [];

    Array.from(files).forEach((file) => {
      const { isValid, error, normalizedType } = validateFile(file);

      if (!isValid && error) {
        errors.push(error);
        return;
      }

      if (isValid && normalizedType) {
        const newFile: AttachmentFile = {
          id: `new-${Date.now()}-${Math.random()}`,
          name: file.name,
          type: normalizedType,
          size: file.size,
          date: new Date().toISOString(),
        };

        newAttachments.push(newFile);
      }
    });

    if (errors.length > 0) {
      alert(`Errors:\n${errors.join('\n')}`);
    }

    if (newAttachments.length > 0) {
      onUpload(newAttachments);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return {
    isDragging,
    fileInputRef,
    handleFileUpload,
    onDragOver,
    onDragLeave,
    onDrop,
    triggerFileInput,
  };
};
