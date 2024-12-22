import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const GongSikDangPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  overflow-y: auto;
  background-color: var(--lightGray);
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: var(--black); /* 글씨 검정색 */
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

export const Error = styled.p`
  color: var(--red);
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  padding: 0 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Zone = styled.div`
  flex: 1;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 45%;
  max-width: 48%;
  overflow: hidden;
`;

export const ZoneName = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #e10707;
  text-align: center;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const MenuLine = styled.div`
  display: block; /* 줄바꿈 허용 */
  font-size: 16px;
  line-height: 1.4;
  white-space: pre-line;
  word-break: keep-all;
  text-align: center;
`;

export const MenuName = styled.span`
  font-weight: bold;
  font-size: 14px;
  max-width: 100%;
  word-wrap: break-word;
`;

export const BottomButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px; /* 버튼 간 간격 */
  margin-top: 30px;
  width: 100%;
  max-width: 800px;
`;

export const BottomButton = styled(Link)`
  background-color: var(--red);
  color: var(--white);
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  width: 150px; /* 고정된 너비 */
  height: 50px; /* 고정된 높이 */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 버튼 그림자 */
`;
