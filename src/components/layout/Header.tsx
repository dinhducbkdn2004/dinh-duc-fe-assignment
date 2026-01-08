import { Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Badge, Avatar } from '../ui';
import { cn } from '@/utils';
import { HEADER_EXERCISES } from '@/constants';
import { useUser } from '@/contexts';

const Header = () => {
  const location = useLocation();
  const { currentUser } = useUser();

  return (
    <header className='h-14 bg-primary font-semibold text-white shadow-sm'>
      <div className='flex h-full items-center max-w-full'>
        <div className='shrink-0 w-[180px] lg:w-[240px] flex items-center px-2'>
          <Link to='/' className='flex flex-start h-full'>
            <img src='/logo.png' alt='RFX Logo' className='h-8 md:h-9 w-auto' />
          </Link>
        </div>

        <nav className='flex items-center gap-1 overflow-x-auto flex-1 min-w-0'>
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

        <div className='shrink-0 flex items-center gap-2 md:gap-3 px-2 md:px-4 lg:px-6'>
          <button className='relative p-2.5 rounded-lg hover:bg-primary-foreground/10 transition-colors'>
            <Bell size={20} />
            <Badge variant='danger' size='sm' className='absolute -top-0.5 -right-0.5'>
              1
            </Badge>
          </button>

          <div className='hidden md:flex items-center gap-2 md:gap-3 pl-2 md:pl-3 border-l border-primary-foreground/20'>
            <div className='hidden lg:block text-right leading-tight'>
              <div className='text-sm font-semibold'>Agent Administration</div>
              <div className='text-[11px] opacity-80'>{currentUser.email}</div>
            </div>
            <Avatar
              alt={currentUser.name}
              src={currentUser.avatar}
              size='md'
              className='bg- font-semibold text-white'
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
