import { Inbox, Send, Archive, Trash, type LucideIcon } from 'lucide-react';

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  count?: number;
}

export interface SidebarCategory {
  id: string;
  label: string;
}

export interface SidebarTag {
  id: string;
  label: string;
}

export const SIDEBAR_MENU_ITEMS: SidebarMenuItem[] = [
  { id: 'inbox', label: 'Inbox', icon: Inbox, count: 1 },
  { id: 'sent', label: 'Sent', icon: Send },
  { id: 'archive', label: 'Archive', icon: Archive },
  { id: 'trash', label: 'Trash', icon: Trash },
];

export const SIDEBAR_CATEGORIES: SidebarCategory[] = [
  { id: 'important', label: 'Important' },
  { id: 'urgent', label: 'Urgent' },
  { id: 'informational', label: 'Informational' },
];

export const SIDEBAR_TAGS: SidebarTag[] = [
  { id: 'user-management', label: 'user-management' },
  { id: 'meeting-reminder', label: 'meeting-reminder' },
];
