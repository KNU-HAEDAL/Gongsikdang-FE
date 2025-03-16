import styled from '@emotion/styled';

import { HEADER_HEIGHT } from '@/shared';

/* 페이지 레이아웃 */
export const PageLayout = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

/* 부제목 */
export const Subtitle = styled.p`
  width: 336px;
  height: 24px;
  font-size: 19px;
  font-weight: 600;
  line-height: 23.87px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #000000;
`;

/* 그리드 레이아웃 */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-grow: 1;
  height: 487px;
  padding: 10px;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 70px;
`;

/* 코너 카드 */
export const CornerCard = styled.div`
  width: 160px;
  height: 223px;
  border-radius: 10px;
  border: 1px solid var(--gray);
  background: #fff;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #e10707;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    font-size: 16px;
    font-weight: 700;
  }

  li {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #000000;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh -${HEADER_HEIGHT});
`;
