import { globalStyle } from '@/shared';

import { Routes } from './app/routes';
import { Global } from '@emotion/react';

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Routes />
    </>
  );
};

export default App;
