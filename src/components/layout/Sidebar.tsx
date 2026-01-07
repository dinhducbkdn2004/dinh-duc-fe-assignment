import { Tag } from 'lucide-react';
import { cn } from '@/utils';
import { Badge } from '../ui';
import { SIDEBAR_MENU_ITEMS, SIDEBAR_CATEGORIES, SIDEBAR_TAGS } from '@/constants';

interface SidebarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const Sidebar = ({ activeSection = 'inbox', onSectionChange }: SidebarProps) => {
  return (
    <aside className='w-64 border-r bg-card/50 backdrop-blur-sm h-full hidden lg:flex lg:flex-col'>
      <div className='p-4'>
        <h3 className='text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2'>
          Messages
        </h3>
        <nav className='space-y-1'>
          {SIDEBAR_MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange?.(item.id)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent text-foreground',
                )}
              >
                <Icon size={16} />
                <span className='flex-1 text-left'>{item.label}</span>
                {item.count !== undefined && (
                  <Badge
                    variant={isActive ? 'secondary' : 'secondary'}
                    size='sm'
                    className={cn('h-5 min-w-5', isActive && 'bg-primary-foreground/20')}
                  >
                    {item.count}
                  </Badge>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className='px-4 py-3 border-t border-border'>
        <h3 className='text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2'>
          Categories
        </h3>
        <nav className='space-y-1'>
          {SIDEBAR_CATEGORIES.map((category) => (
            <button
              key={category.id}
              className='w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-accent text-foreground transition-colors'
            >
              <div className='h-2 w-2 rounded-full bg-muted-foreground' />
              <span className='flex-1 text-left'>{category.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className='px-4 py-3 border-t border-border'>
        <h3 className='text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2'>
          Tags
        </h3>
        <nav className='space-y-1'>
          {SIDEBAR_TAGS.map((tag) => (
            <button
              key={tag.id}
              className='w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-accent text-foreground transition-colors'
            >
              <Tag size={14} />
              <span className='flex-1 text-left text-xs'>{tag.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
