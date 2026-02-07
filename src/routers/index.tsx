// Node modules
import { createBrowserRouter } from 'react-router-dom';

// Components
import App from '@/App';
// import Register from '@/features/auth/pages/Register';
// import Login from '@/features/auth/pages/Login';
import ProfileUser from '@/features/user/pages/ProfileUser';
import AdminProfile from '@/features/admin/pages/AdminProfile';
import ProtectedRoute from '@/features/auth/components/ProtectedRoute';

import UserLayout from '@/features/user/layouts/UserLayout';
import UserDashboard from '@/features/user/pages/UserDashboard';

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  // {
  //   path: '/register',
  //   element: <Register />,
  // },
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
  {
    path: '/user',
    element: <UserLayout />,
    children: [
      {
        path: '',
        element: <UserDashboard />,
      },
      {
        path: 'profile',
        element: <ProfileUser />,
      },
    ],
  },
  {
    element: <ProtectedRoute role='ADMIN_REALM' />,
    children: [
      {
        path: '/admin',
        element: <AdminProfile />,
      },
    ],
  },
]);

export default router;
