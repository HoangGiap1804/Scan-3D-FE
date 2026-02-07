import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

import router from './routers/index';
import keycloak from './features/auth/services/keycloak';

import './index.css';

const root = createRoot(document.getElementById('root')!);
const renderApp = () => {
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );
};

keycloak
  .init({
    onLoad: 'check-sso',
    pkceMethod: 'S256',
  })
  .then((authenticated) => {
    if (authenticated) {
      localStorage.setItem('token', keycloak.token || '');
      localStorage.setItem('refreshToken', keycloak.refreshToken || '');
    }
    renderApp();
  })
  .catch((error) => {
    console.error('Keycloak initialization failed', error);
    renderApp();
  });
