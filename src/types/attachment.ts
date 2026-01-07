export type FileType = 'PDF' | 'DOCX' | 'PNG' | 'JPG' | 'JPEG' | 'TXT';

export interface AttachmentFile {
  id: string;
  name: string;
  type: FileType;
  size: number;
  date: string;
  path?: string;
}

export interface FileUploadError {
  fileName: string;
  error: 'size' | 'type';
  message: string;
}

export const MAX_FILE_SIZE = 5 * 1024 * 1024;
export const ALLOWED_FILE_TYPES: FileType[] = ['PDF', 'DOCX', 'PNG', 'JPG', 'JPEG'];
