import styled from '@emotion/styled';

/* 전체 배경 */
export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffe0e0;
`;

/* 페이지 레이아웃 */
export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 390px;
  height: 623px;
  top: 1339px;
  left: 1135px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

/* 음식 이름 */
export const FoodTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 28.64px;
  color: #2e2e2e;
  width: 104px;
  height: 29px;
  top: 71px;
  left: 143px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

/* 섹션 (별점/리뷰 작성) */
export const Section = styled.div`
  width: 100%;
  margin: 10px 0;
  text-align: center;
`;

/* 섹션 제목 */
export const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 20px;
  line-height: 23.87px;
`;

/* 별점 컨테이너 */
export const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 240;
  height: 50;
  top: 154px;
  left: 75px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: -5px;
  gap: 10px;
`;

/* 별점 스타일 */
export const Star = styled.span`
  width: 40;
  height: 40;
  font-size: 50px;
  color: ${({ isActive }) =>
    isActive ? '#ffd700' : '#ccc'}; /* 활성화된 별은 노란색 */
  cursor: pointer;

  &:hover {
    color: #ffd700; /* 호버 시 노란색 */
  }
`;

/* 텍스트 입력란 */
export const Textarea = styled.textarea`
  width: 320px;
  height: 220px;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  resize: none;
  outline: none;
  top: 280px;
  left: 35px;

  &:focus {
    border-color: #e10707;
  }
`;

/* 버튼 */
export const Button = styled.button`
  background-color: #e10707;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
  margin-top: 20px;
  width: 320px;
  height: 47px;
  top: 544px;
  left: 35px;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: #c30606;
  }
`;
