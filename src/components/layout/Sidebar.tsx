import { Tag } from 'lucide-react';
import { SIDEBAR_MENU_ITEMS, SIDEBAR_CATEGORIES, SIDEBAR_TAGS } from '@/constants';

interface SidebarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const Sidebar = ({ onSectionChange }: SidebarProps) => {
  return (
    <aside className='w-[240px] border-r border-border bg-card h-full flex flex-col'>
      <div className='flex flex-col'>
        <div className='h-[52px] px-3 flex items-center border-b border-border'>
          <h3 className='text-sm font-semibold text-muted-foreground uppercase leading-[28px]'>
            MESSAGES
          </h3>
        </div>
        <div className='p-3 space-y-2'>
          {SIDEBAR_MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange?.(item.id)}
                className='w-full flex items-center justify-between h-6 transition-colors'
              >
                <div className='flex items-center gap-3'>
                  <Icon size={20} strokeWidth={1.67} className='text-foreground' />
                  <span className='text-base font-medium text-foreground'>{item.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='h-[52px] px-3 flex items-center border-b border-border'>
          <h3 className='text-sm font-semibold text-muted-foreground uppercase leading-[28px]'>
            CATEGORIES
          </h3>
        </div>
        <div className='p-3 space-y-2'>
          {SIDEBAR_CATEGORIES.map((category) => (
            <button
              key={category.id}
              className='w-full flex items-center justify-between h-6 transition-colors'
            >
              <div className='flex items-center gap-3'>
                <div className='w-5 h-5 flex items-center justify-center'>
                  <div className='w-2 h-2 rounded-full bg-foreground' />
                </div>
                <span className='text-base font-medium text-foreground'>{category.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='h-[52px] px-3 flex items-center border-b border-border'>
          <h3 className='text-sm font-semibold text-muted-foreground uppercase leading-[28px]'>
            TAGS
          </h3>
        </div>
        <div className='p-3 space-y-2'>
          {SIDEBAR_TAGS.map((tag) => (
            <button
              key={tag.id}
              className='w-full flex items-center justify-between h-6 transition-colors'
            >
              <div className='flex items-center gap-3'>
                <Tag size={20} strokeWidth={1.67} className='text-foreground' />
                <span className='text-base font-medium text-foreground'>{tag.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
