import { Home, User, Settings, MessageCircle, SoupIcon } from 'lucide-react';

export const APP_SIDEBAR = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: Home,
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: User,
    },
    {
      title: 'Chat',
      url: '/chat',
      icon: MessageCircle,
    },
  ],
  navSecondary: [
    // Example for another group if needed
    {
      title: 'Support',
      url: '/support',
      icon: SoupIcon,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings,
    },
  ],
};
