import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from '@/types';
import type { FileType } from '@/types';

export interface FileValidationResult {
  isValid: boolean;
  error?: string;
  normalizedType?: FileType;
}

export const validateFile = (file: File): FileValidationResult => {
  if (file.size > MAX_FILE_SIZE) {
    return {
      isValid: false,
      error: `${file.name} is too large (max 5MB)`,
    };
  }

  const extension = file.name.split('.').pop()?.toUpperCase();
  let typeCandidate = extension;

  if (typeCandidate === 'JPEG') typeCandidate = 'JPG';

  const foundType = ALLOWED_FILE_TYPES.find((t) => t === typeCandidate);

  if (!foundType) {
    return {
      isValid: false,
      error: `${file.name}: Unsupported file type (${typeCandidate})`,
    };
  }

  return {
    isValid: true,
    normalizedType: foundType,
  };
};
