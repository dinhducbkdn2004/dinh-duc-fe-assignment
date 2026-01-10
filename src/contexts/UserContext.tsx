import { createContext, useContext, type ReactNode } from 'react';
import type { User } from '@/types';

interface UserContextValue {
  currentUser: User;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

const defaultUser: User = {
  id: 'user-1',
  name: 'Dinh Duc',
  email: 'dinhduc@gmail.com',
  avatar: 'https://img.icons8.com/?size=200&id=tZuAOUGm9AuS&format=png&color=000000',
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={{ currentUser: defaultUser }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
