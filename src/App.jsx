import { Routes } from './app/routes';
import { globalStyle } from '@/shared';
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
