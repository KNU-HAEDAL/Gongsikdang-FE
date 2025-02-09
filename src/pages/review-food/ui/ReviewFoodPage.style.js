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
  align-items: center;
  width: 390px;
  height: 720px;
  top: 2297px;
  left: 61px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 4px 4px 20px 2px #0000001a;
  padding: 20px;
`;

/* 음식 이름 */
export const FoodTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #2e2e2e;
  width: 104px;
  height: 29px;
  top: 69px;
  left: 143px;
`;

/* 정렬순서 버튼 박스 */
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 275px;
  height: 55px;
  top: 107px;
  left: 57px;
  gap: 15px;
  padding: 10px;
`;

export const FilterButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 16.71px;
  border: 1px solid #ccc;
  margin: 0 5px;
  background-color: #f6f3f3;
  color: #222222;
  width: 120px;
  height: 35px;
  border-radius: 10px;
  padding: 5px 5px; /* 내부 여백 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  gap: 3px;

  &:hover {
    background-color: #e0e0e0; /* 호버 시 배경 색상 변경 */
  }

  svg {
    width: 18px; /* 아이콘 크기 */
    height: 18px;
  }
`;

/* 리뷰 전체 */
export const ReviewList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

/* 리뷰 박스 */
export const ReviewCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  width: 350px;
  height: 113px;
  padding: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

/* 리뷰 헤더 */
export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ReviewerName = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

/* Stars */
export const Stars = styled.div`
  display: flex;
`;

export const Star = styled.span`
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? '#ffd700' : '#ccc')};
`;

/* 리뷰 내용 */
export const ReviewText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #000000;
  line-height: 1.5;
`;
