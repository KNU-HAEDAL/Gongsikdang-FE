import styled from '@emotion/styled';

import { HEADER_HEIGHT } from '../layout';
import { keyframes } from '@emotion/react';

export const LoadingView = () => {
  return (
    <SpinnerWrapper>
      <Wrapper />
    </SpinnerWrapper>
  );
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  border: 4px solid rgba(177, 177, 177, 0.01);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border-left-color: #999;

  animation: ${spin} 1s linear infinite;
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT});
  display: flex;
  justify-content: center;
  padding: 80px 16px;
`;
