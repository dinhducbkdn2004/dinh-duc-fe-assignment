export const sortByDate = <T>(data: T[], key: keyof T, order: 'asc' | 'desc' = 'desc'): T[] => {
  return [...data].sort((a, b) => {
    const dateA = new Date(a[key] as string | number | Date).getTime();
    const dateB = new Date(b[key] as string | number | Date).getTime();

    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });
};
