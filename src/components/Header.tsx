import { Button } from '@/components/ui/button';

import { useSidebar } from '@/components/ui/sidebar';

import { iconLogo } from '@/assets/assets';
import { MenuIcon } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className='flex justify-between gap-1 items-center py-3 ps-4 pe-2 border-b lg:hidden'>
      <img
        src={iconLogo}
        className='h-6 w-6'
        alt='Logo'
      />

      <div className='ml-auto'>
        <ThemeToggle />
      </div>

      <Button
        variant='ghost'
        size='icon'
        onClick={toggleSidebar}
        aria-lable='Toggle mobile menu'
      >
        <MenuIcon></MenuIcon>
      </Button>
    </header>
  );
};
