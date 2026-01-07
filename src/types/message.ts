export type MessageCategory = 'user-management' | 'meeting-reminder' | 'general';

export interface Message {
  id: string;
  from: string;
  recipients: string[];
  subject: string;
  content: string;
  date: string; // ISO 8601 format
  category: MessageCategory;
  tags: string[];
  isRead: boolean;
}

export interface MessageFormData {
  to: string;
  subject: string;
  content: string;
}
