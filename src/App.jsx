import { Toaster } from 'react-hot-toast';

import { globalStyle, queryClient } from '@/shared';

import { Routes } from './app/routes';
import { Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyle} />
      <Routes />
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
