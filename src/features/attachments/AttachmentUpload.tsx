import { cn } from '@/utils';
import { FolderOpen } from 'lucide-react';
import React from 'react';

interface AttachmentUploadProps {
  isDragging: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent) => void;
  onFileInputChange: (files: FileList | null) => void;
  triggerFileInput: () => void;
}

export const AttachmentUpload = ({
  isDragging,
  fileInputRef,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileInputChange,
  triggerFileInput,
}: AttachmentUploadProps) => {
  return (
    <div className='shrink-0 bg-background'>
      <div className='flex items-center px-4 py-2 bg-muted/30 border-t border-b'>
        <div className='flex items-center gap-2 text-muted-foreground'>
          <FolderOpen size={16} />
          <span className='font-medium text-sm'>/SUBPATH</span>
        </div>
      </div>

      <div className='p-4'>
        <div
          className={cn(
            'border-dashed border border-primary/50 rounded-lg h-[140px] cursor-pointer flex hover:border-primary hover:bg-primary/5 flex-col items-center justify-center gap-2 transition-colors',
            isDragging && 'border-primary bg-primary/5',
          )}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={triggerFileInput}
        >
          <input
            type='file'
            multiple
            className='hidden'
            ref={fileInputRef}
            onChange={(e) => onFileInputChange(e.target.files)}
          />
          <div className='flex flex-col items-center gap-1 text-sm text-muted-foreground'>
            <p>Drop files here</p>
            <p>- or -</p>
            <span className='font-medium text-primary hover:underline'>
              Click to browse for files
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
