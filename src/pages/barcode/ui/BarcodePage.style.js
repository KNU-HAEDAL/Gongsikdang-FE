import styled from '@emotion/styled';

/* 페이지 레이아웃 */
export const PageLayout = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

/* 음식 이름 */
export const FoodTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #2e2e2e;
  margin: 10px 0;
`;

/* 안내 문구 */
export const Message = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #4a4a4a;
  margin: 10px 0;
  display: flex;
`;

/* 강조 표시 */
export const Highlight = styled.span`
  color: #007aff;
  font-weight: bold;
`;

/* 바코드 컨테이너 */
export const BarcodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  margin: 20px 0;
  border: 1px dashed #cccccc;
  border-radius: 10px;
`;

export const NoQRMessage = styled.p`
  font-size: 14px;
  color: gray;
`;

/* 버튼 */
export const Button = styled.button`
  background-color: #487fff;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
  width: 330px;
  height: 48px;
  top: 642px;
  left: 30px;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;
