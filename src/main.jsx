import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './routers/index';
import keycloak from './features/auth/services/keycloak';

import './index.css';

keycloak.init({
  onLoad: "check-sso",
  pkceMethod: "S256",
}).then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
});
