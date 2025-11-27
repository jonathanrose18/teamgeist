import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const queryClient = new QueryClient();

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
