import { globalStyle, queryClient } from '@/shared';

import { Routes } from './app/routes';
import { Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyle} />
      <Routes />
    </QueryClientProvider>
  );
};

export default App;
