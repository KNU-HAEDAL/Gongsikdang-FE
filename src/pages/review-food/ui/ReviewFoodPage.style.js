import styled from '@emotion/styled';

export const FoodTitle = styled.h2`
  display: flex;
  font-size: 24px;
  font-weight: 700;
  color: #2e2e2e;
  margin-left: 20px;
  justify-content: center;
`;

/* 정렬순서 버튼 박스 */
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 5px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
`;

export const FilterButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border: 1px solid #ccc;
  margin: 0 5px;
  background-color: #f6f3f3;
  color: #222222;
  border-radius: 10px;
  padding: 5px 5px;
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
  max-height: 110px;
  overflow-y: auto;
  width: 350px;
  height: 113px;
  padding: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
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
