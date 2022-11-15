import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
createRoot(document.querySelector('#app_root') as Element).render(<App />);
