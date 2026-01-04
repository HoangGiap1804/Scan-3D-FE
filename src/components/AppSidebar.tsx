import { cn } from '@/lib/utils';

import Avatar from 'react-avatar';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  useSidebar,
  SidebarTrigger,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { LogOutIcon, ThermometerIcon } from 'lucide-react';

import { APP_SIDEBAR } from '@/constants/app-sidebar';
import { iconLogo, avatar, iconDark } from '@/assets/assets';
import { UserMenu } from '@/components/UserMenu';
import { ThemeToggle } from './ThemeToggle';

export const AppSidebar = () => {
  const { isMobile, state } = useSidebar();
  return (
    <Sidebar
      variant='inset'
      collapsible='icon'
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className='flex justify-between items-center'>
            <SidebarMenuButton
              size='lg'
              className='w-auto'
            >
              {state === 'collapsed' ? (
                <img
                  src={iconLogo}
                  alt='Logo'
                  className='size-10'
                />
              ) : (
                <img
                  src={iconDark}
                  alt='Logo'
                  className='size-30'
                />
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* First nav */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {APP_SIDEBAR.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    asChild
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Second nav */}
        <SidebarGroup className='mt-auto'>
          <SidebarGroupContent>
            <SidebarMenu>
              {APP_SIDEBAR.navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    asChild
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <ThemeToggle></ThemeToggle>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              {state !== 'collapsed' ? (
                <div className='flex justify-between items-start gap-2'>
                  <div className='grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-2'>
                    <div className='relative'>
                      <Avatar
                        src={avatar}
                        size='40px'
                        round='8px'
                      ></Avatar>
                      <div className='absolute bottom-0 right-0 size-2 rounded-full bg-emerald-500 ring-sidebar ring-1'></div>
                    </div>
                    <div>
                      <h3 className='text-sm-font-semibold'>Hoang Giap</h3>
                      <h3 className='text-sm text-muted-foreground truncate'>
                        hgiap1804@gmail.com
                      </h3>
                    </div>
                  </div>
                  <Button
                    variant='ghost'
                    aria-label='Logout'
                  >
                    <LogOutIcon></LogOutIcon>
                  </Button>
                </div>
              ) : (
                <UserMenu />
              )}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarTrigger />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
