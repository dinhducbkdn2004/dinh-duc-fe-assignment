export type FileType = 'PDF' | 'DOCX' | 'PNG' | 'JPG' | 'JPEG' | 'TXT';

export interface AttachmentFile {
  id: string;
  name: string;
  type: FileType;
  size: number; // in bytes
  date: string; // ISO 8601 format
  path?: string; // optional grouping path
}

export interface FileUploadError {
  fileName: string;
  error: 'size' | 'type';
  message: string;
}

// Validation constants
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
export const ALLOWED_FILE_TYPES: FileType[] = ['PDF', 'DOCX', 'PNG', 'JPG', 'JPEG'];
