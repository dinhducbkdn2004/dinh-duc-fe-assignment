import { createContext, useContext } from 'react';
import type { User } from '@/types';

export interface UserContextValue {
  currentUser: User;
}

export const UserContext = createContext<UserContextValue | undefined>(undefined);

export const defaultUser: User = {
  id: 'user-1',
  name: 'Dinh Duc',
  email: 'dinhduc@gmail.com',
  avatar: 'https://img.icons8.com/?size=200&id=tZuAOUGm9AuS&format=png&color=000000',
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
