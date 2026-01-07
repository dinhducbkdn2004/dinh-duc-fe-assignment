import { Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Badge, Avatar } from '../ui';
import { cn } from '@/utils';
import { HEADER_EXERCISES } from '@/constants';

const Header = () => {
  const location = useLocation();

  return (
    <header className='h-16 border-b bg-background font-semibold text-muted-foreground shadow-sm'>
      <div className='flex h-full items-center'>
        <div className='shrink-0 min-w-[200px] w-64 flex items-center px-4 lg:px-6'>
          <Link to='/' className='flex items-center h-full'>
            <img src='/logo.png' alt='RFX Logo' className='h-8 md:h-9 w-auto' />
          </Link>
        </div>

        <nav className='flex items-center gap-1 overflow-x-auto md:overflow-visible'>
          {HEADER_EXERCISES.map((exercise) => {
            const Icon = exercise.icon;
            const isActive = location.pathname === exercise.path;

            return (
              <Link
                key={exercise.path}
                to={exercise.path}
                className={cn(
                  'flex items-center gap-2 px-3 md:px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap',
                  'hover:bg-primary-foreground/10',
                  isActive ? 'bg-primary-foreground/20 shadow-sm' : 'opacity-90 hover:opacity-100',
                )}
              >
                <Icon size={18} />
                <span className='hidden md:inline'>{exercise.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className='flex-1' />
        <div className='shrink-0 flex items-center gap-3 px-4 lg:px-6'>
          <button className='relative p-2.5 rounded-lg hover:bg-primary-foreground/10 transition-colors'>
            <Bell size={20} />
            <Badge variant='danger' size='sm' className='absolute -top-0.5 -right-0.5'>
              1
            </Badge>
          </button>

          <div className='hidden lg:flex items-center gap-3 pl-3 border-l border-primary-foreground/20'>
            <div className='text-right leading-tight'>
              <div className='text-sm font-semibold'>Agent Administration</div>
              <div className='text-[11px] opacity-80'>ABC Agent</div>
            </div>
            <Avatar
              alt='ABC Agent'
              size='md'
              className='bg-primary font-semibold text-muted-foreground'
            />
          </div>

          <Avatar
            alt='ABC Agent'
            size='md'
            className='lg:hidden bg-primary-foreground font-semibold text-muted-foreground'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
