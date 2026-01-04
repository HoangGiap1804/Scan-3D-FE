import Avatar from 'react-avatar';
import { avatar } from '@/assets/assets';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  CheckIcon,
  MonitorIcon,
  PlusIcon,
  ThermometerIcon,
} from 'lucide-react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeProvider';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          aria-label='Toggle theme'
        >
          <SunIcon className='scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90' />
          <MoonIcon className='absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side='bottom'
        align='end'
        className='60px'
      >
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setTheme('light')}>
            <SunIcon />
            <span>Light</span>
            {theme === 'light' && <CheckIcon className='ms-auto' />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            <MoonIcon />
            <span>Dark</span>
            {theme === 'dark' && <CheckIcon className='ms-auto' />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            <MonitorIcon />
            <span>System</span>
            {theme === 'system' && <CheckIcon className='ms-auto' />}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
