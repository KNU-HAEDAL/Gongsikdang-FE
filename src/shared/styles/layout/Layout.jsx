import { Outlet } from 'react-router-dom';

import { Header } from '@/shared/components';

import * as LayoutStyles from './Layout.style';

const Layout = ({ title }) => {
  return (
    <LayoutStyles.Wrapper>
      <Header title={title} />
      <LayoutStyles.InnerWrapper>
        <Outlet />
      </LayoutStyles.InnerWrapper>
    </LayoutStyles.Wrapper>
  );
};

export default Layout;
