import { MessageSquare, MessageCircle, Paperclip, type LucideIcon } from 'lucide-react';

export interface HeaderExercise {
  path: string;
  label: string;
  icon: LucideIcon;
}

export const HEADER_EXERCISES: HeaderExercise[] = [
  { path: '/messages', label: 'Messages', icon: MessageSquare },
  { path: '/discussion', label: 'Discussion', icon: MessageCircle },
  { path: '/attachments', label: 'Attachments', icon: Paperclip },
];
