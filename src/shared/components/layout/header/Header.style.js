import styled from '@emotion/styled';

import { PersonIcon, ThickArrowLeftIcon } from '@radix-ui/react-icons';

export const HEADER_HEIGHT = '64px';

export const HeaderLayout = styled.div`
  z-index: 9999;
  display: flex;
  width: 390px;
  max-width: 100vw;
  height: ${HEADER_HEIGHT};
  background-color: #fff;
  padding: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  cursor: pointer;
  background-color: var(--red);
  color: white;
  align-items: center;
  display: flex;
  padding: 6px;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  justify-content: center;
`;

export const TitleText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: var(--red);
`;

export const ArrowIcon = styled(ThickArrowLeftIcon)`
  width: 100%;
  height: 100%;
`;

export const MypageIcon = styled(PersonIcon)`
  width: 100%;
  height: 100%;
`;
