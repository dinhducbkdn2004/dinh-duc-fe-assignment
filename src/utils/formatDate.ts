import { format, formatDistanceToNow, isToday, isYesterday, parseISO } from 'date-fns';

export function formatMessageDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'yyyy-MM-dd');
}

export function formatFullDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'yyyy-MM-dd h:mma');
}

export function formatRelativeTime(dateString: string): string {
  const date = parseISO(dateString);

  if (isToday(date)) {
    return `Today at ${format(date, 'h:mma')}`;
  }

  if (isYesterday(date)) {
    return `Yesterday at ${format(date, 'h:mma')}`;
  }

  return formatDistanceToNow(date, { addSuffix: true });
}

export function formatAttachmentDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'yyyy-MM-dd');
}
