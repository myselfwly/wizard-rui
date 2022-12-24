import React from 'react';
import { createRoot } from 'react-dom/client';
import RootRoute from './router/index';
createRoot(document.querySelector('#app_root') as Element).render(<RootRoute />);
