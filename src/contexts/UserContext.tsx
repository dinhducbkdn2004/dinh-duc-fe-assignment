import { type ReactNode } from 'react';
import { UserContext, defaultUser } from './user-context';

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={{ currentUser: defaultUser }}>{children}</UserContext.Provider>
  );
};
