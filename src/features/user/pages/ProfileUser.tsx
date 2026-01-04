import PageTitle from '@/components/PageTitle';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Header } from '@/components/Header';

import { Page, HeaderPage } from './Page';

const ProfileUser = () => {
  return (
    <ThemeProvider defaultTheme='dark'>
      <PageTitle title='Profile' />
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header></Header>
          <main>
            <Page>
              <HeaderPage></HeaderPage>
            </Page>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default ProfileUser;
