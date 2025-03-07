import styled from '@emotion/styled';

import { keyframes } from '@emotion/react';

export const Spinner = () => {
  return <Wrapper />;
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
