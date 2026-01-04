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

import { PlusIcon } from 'lucide-react';

export const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='relative'>
          <Avatar
            src={avatar}
            size='30px'
            round='8px'
          ></Avatar>
          <div className='absolute bottom-0 right-0 size-2 rounded-full bg-emerald-500 ring-sidebar ring-1'></div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side='right'
        align='end'
        className='60px'
      >
        <DropdownMenuGroup>
          <DropdownMenuItem>User setting</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <DropdownMenuLabel>Switch Account</DropdownMenuLabel>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
