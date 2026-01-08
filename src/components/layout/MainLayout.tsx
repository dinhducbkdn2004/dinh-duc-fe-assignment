import { useState, type ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [activeSection, setActiveSection] = useState('inbox');

  return (
    <div className='h-screen flex flex-col bg-background text-foreground'>
      <Header />
      <div className='flex-1 flex overflow-hidden'>
        <div className='hidden lg:block'>
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>
        <main className='flex-1 overflow-auto bg-muted/30'>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
