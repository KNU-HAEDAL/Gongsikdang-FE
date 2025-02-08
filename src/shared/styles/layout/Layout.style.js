import styled from '@emotion/styled';

import { HEADER_HEIGHT } from '@/shared/components';

export const Wrapper = styled.div`
  width: 390px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT});
  padding: 10px;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
