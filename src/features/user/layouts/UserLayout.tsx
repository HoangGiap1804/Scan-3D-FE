import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from '../components/AppSidebar';
import { HeaderPage } from '../components/HeaderPage';

const UserLayout = () => {
  return (
    <ThemeProvider defaultTheme='dark'>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset className='transition-[padding,margin] duration-200 ease-linear md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow md:peer-data-[variant=inset]:pl-[--sidebar-width] md:peer-data-[variant=inset]:peer-data-[state=collapsed]:pl-[calc(var(--sidebar-width-icon)+theme(spacing.4))]'>
          <HeaderPage />
          <div className='p-6'>
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default UserLayout;
